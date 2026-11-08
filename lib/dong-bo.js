/* Đồng bộ dữ liệu học sinh qua Firebase (đăng nhập Google + Cloud Firestore, cập nhật trực tiếp).
   Thầy/cô KHÔNG cần sửa file này. Cấu hình ở lib/firebase-config.js, hướng dẫn ở FIREBASE.md.

   Dữ liệu trên Firestore:
     users/{uid}                      { email, ten, capNhat }
     users/{uid}/lichSu/{ma}          bài đã nộp (điểm, đáp án đã chọn, kết quả từng câu)
     users/{uid}/dangLam/{maDe}       bài đang làm dở (đáp án, giờ bắt đầu/kết thúc)
     users/{uid}/chuyenDe/{maDe}      đề luyện chuyên đề đã tạo
*/
(function () {
"use strict";
var PHIEN_BAN = "13.1.0";
var cfg = window.FIREBASE_CONFIG || {};
var batDuoc = !!(cfg.apiKey && cfg.projectId) && /^https?:$/.test(location.protocol);
var fb = null, huy = [], huyLop = null;

var DB = window.DongBo = {
  batDuoc: batDuoc,   // đã cấu hình Firebase và đang chạy trên web (không phải mở file trực tiếp)
  sanSang: false,     // đã đăng nhập và kết nối Firestore
  uid: null,
  ghi: function (loai, id, data) { if (!fb) return; fb.F.setDoc(fb.F.doc(fb.db, "users", DB.uid, loai, id), data).catch(baoLoi); },
  xoa: function (loai, id) { if (!fb) return; fb.F.deleteDoc(fb.F.doc(fb.db, "users", DB.uid, loai, id)).catch(baoLoi); },
  ghiHoSo: function (data) { if (!fb) return; fb.F.setDoc(fb.F.doc(fb.db, "users", DB.uid), Object.assign({ capNhat: Date.now() }, data), { merge: true }).catch(baoLoi); },
  dangNhap: dangNhap,
  dangXuat: function () { if (fb) fb.Au.signOut(fb.auth); },
  theoDoiLop: theoDoiLop
};
if (!cfg.apiKey) return;
if (!batDuoc) { console.info("Đồng bộ Firebase chỉ chạy khi mở web qua http(s) (GitHub Pages, localhost), không chạy khi mở file trực tiếp."); return; }

function L() { return window.LuyenDe; }
function trangThai(txt, cls) { if (L()) L().trangThai(txt, cls); }
function baoLoi(e) {
  console.error("Firebase:", e);
  var c = e && e.code || "";
  if (/permission-denied/.test(c)) trangThai("Lỗi quyền truy cập – kiểm tra Firestore rules", "loi");
  else if (/unauthorized-domain/.test(c)) alert("Tên miền này chưa được phép đăng nhập. Thầy/cô thêm tên miền vào Firebase › Authentication › Settings › Authorized domains (xem FIREBASE.md).");
  else if (/popup-closed|cancelled-popup/.test(c)) return;
  else trangThai("Lỗi đồng bộ: " + (c || e.message || e), "loi");
}

var choDOM = new Promise(function (ok) {
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", ok); else ok();
});
var goc = "https://www.gstatic.com/firebasejs/" + PHIEN_BAN + "/";
Promise.all([import(goc + "firebase-app.js"), import(goc + "firebase-auth.js"), import(goc + "firebase-firestore.js"), choDOM]).then(function (m) {
  var A = m[0], Au = m[1], F = m[2];
  var app = A.initializeApp(cfg), auth = Au.getAuth(app), db;
  try {
    db = F.initializeFirestore(app, { ignoreUndefinedProperties: true, localCache: F.persistentLocalCache({ tabManager: F.persistentMultipleTabManager() }) });
  } catch (e) {
    db = F.initializeFirestore(app, { ignoreUndefinedProperties: true });
  }
  fb = { A: A, Au: Au, F: F, auth: auth, db: db };
  Au.getRedirectResult(auth).catch(baoLoi);
  Au.onAuthStateChanged(auth, batDau);
  if (muonXemLop) theoDoiLop();
}).catch(function (e) {
  console.error("Không tải được Firebase:", e);
  trangThai("Chưa kết nối được (mất mạng?) – đang lưu trên máy, sẽ gửi khi có mạng", "cho");
});

function dangNhap() {
  if (!fb) { alert("Chưa tải xong Firebase. Kiểm tra kết nối mạng rồi thử lại."); return; }
  var p = new fb.Au.GoogleAuthProvider();
  p.setCustomParameters({ prompt: "select_account" });
  fb.Au.signInWithPopup(fb.auth, p).catch(function (e) {
    if (/popup-blocked|operation-not-supported/.test(e && e.code)) return fb.Au.signInWithRedirect(fb.auth, p).catch(baoLoi);
    baoLoi(e);
  });
}

function batDau(u) {
  huy.forEach(function (f) { f(); }); huy = [];
  DB.sanSang = false; DB.uid = null;
  if (!u) { L().datNguoiDung(null); return; }
  var F = fb.F, db = fb.db, email = (u.email || "").toLowerCase();
  DB.uid = u.uid; DB.sanSang = true;
  L().datNguoiDung({ uid: u.uid, email: email, ten: u.displayName || "" });
  var hoSo = F.doc(db, "users", u.uid);
  F.setDoc(hoSo, { email: email, capNhat: Date.now() }, { merge: true }).catch(baoLoi);

  var cho = {};   // bộ sưu tập nào còn thay đổi chưa gửi lên máy chủ
  function capNhatTrangThai(loai, meta) {
    cho[loai] = meta.hasPendingWrites || meta.fromCache;
    var conCho = Object.keys(cho).some(function (k) { return cho[k]; });
    if (!conCho) trangThai("✓ Đã đồng bộ", "ok");
    else if (!navigator.onLine) trangThai("Mất mạng – đã lưu trên máy, sẽ tự gửi khi có mạng", "cho");
    else trangThai("Đang đồng bộ…", "cho");
  }
  huy.push(F.onSnapshot(hoSo, function (s) { L().nhanDuLieu("hoSo", s.data() || {}); }, baoLoi));
  ["chuyenDe", "lichSu", "dangLam"].forEach(function (loai) {
    var lan = 0;
    huy.push(F.onSnapshot(F.collection(hoSo, loai), { includeMetadataChanges: true }, function (qs) {
      capNhatTrangThai(loai, qs.metadata);
      if (lan++ && !qs.docChanges().length) return;   // chỉ đổi trạng thái gửi, dữ liệu không đổi
      var docs = {};
      qs.forEach(function (d) { docs[d.id] = d.data(); });
      L().nhanDuLieu(loai, docs);
    }, baoLoi));
  });
}

// Bảng điểm chung: theo dõi trực tiếp mọi bài đã nộp (ai cũng xem được, không cần đăng nhập)
var muonXemLop = false;
function theoDoiLop() {
  muonXemLop = true;
  if (!fb || huyLop) return;
  huyLop = fb.F.onSnapshot(fb.F.collectionGroup(fb.db, "lichSu"), function (qs) {
    var list = [];
    qs.forEach(function (d) { list.push(d.data()); });
    L().nhanLop(list);
  }, function (e) {
    huyLop = null; baoLoi(e);
    L().nhanLop([]);
    alert("Không đọc được bảng điểm. Kiểm tra Firestore rules (FIREBASE.md, Bước 5).");
  });
}
window.addEventListener("online", function () { trangThai("Đang đồng bộ…", "cho"); });
})();
