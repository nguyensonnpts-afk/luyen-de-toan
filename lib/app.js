/* Luyện đề Toán – bộ máy chạy đề, chấm điểm, lưu kết quả.
   Thầy/cô KHÔNG cần sửa file này khi thêm đề. Xem HUONG-DAN.md. */
(function () {
"use strict";

/* ===================== Dữ liệu ===================== */
var DE = {};            // id -> đề
var DE_LOI = [];        // danh sách lỗi khi nạp đề
var LETTERS = ["A", "B", "C", "D"];
var THU_TU_LOAI = ["tracnghiem", "dungsai", "traloingan"];
var TEN_LOAI = { tracnghiem: "Trắc nghiệm 4 lựa chọn", dungsai: "Trắc nghiệm đúng sai", traloingan: "Trả lời ngắn" };
var DIEM_MAC_DINH = { tracnghiem: 0.25, dungsai: [0, 0.1, 0.25, 0.5, 1], traloingan: 0.5 };
var TEN_MUC_DO = { NB: "Nhận biết", TH: "Thông hiểu", VD: "Vận dụng", VDC: "Vận dụng cao" };
var PHUT_MOI_CAU = { tracnghiem: 2.5, dungsai: 6, traloingan: 6 };

// File đề gọi themDe(String.raw`{...}`): cho phép gõ LaTeX với một dấu \ .
window.themDe = function (raw) {
  try {
    var obj = typeof raw === "string" ? JSON.parse(raw.replace(/\\(?!")/g, "\\\\")) : raw;
    chuanHoaDe(obj);
    if (DE[obj.id]) throw new Error("trùng mã đề \"" + obj.id + "\"");
    DE[obj.id] = obj;
  } catch (e) {
    DE_LOI.push((window.__dangNap || "?") + ": " + e.message);
  }
};

function chuanHoaDe(d) {
  if (!d || !d.id) throw new Error("thiếu \"id\"");
  if (!Array.isArray(d.phan)) throw new Error("thiếu \"phan\"");
  d.phan.forEach(function (p, pi) {
    if (!DIEM_MAC_DINH.hasOwnProperty(p.loai)) throw new Error("phần " + (pi + 1) + " có loại không hợp lệ: " + p.loai);
    (p.cauHoi || []).forEach(function (q, qi) {
      var where = "phần " + (pi + 1) + " câu " + (qi + 1);
      if (p.loai === "tracnghiem" && !/^[ABCD]$/i.test(String(q.dapAn || "").trim())) throw new Error(where + ": dapAn phải là A, B, C hoặc D");
      if (p.loai === "dungsai" && !(Array.isArray(q.y) && q.y.every(function (y) { return typeof y.dapAn === "boolean"; }))) throw new Error(where + ": mỗi ý cần dapAn là true/false");
      if (p.loai === "traloingan" && (q.dapAn === undefined || q.dapAn === "")) throw new Error(where + ": thiếu dapAn");
    });
  });
}

function napTatCaDe(cb) {
  var ds = (window.DANH_SACH_DE || []).slice(), i = 0;
  (function next() {
    if (i >= ds.length) { window.__dangNap = null; return cb(); }
    var ten = String(ds[i++]).replace(/\.js$/, "");
    window.__dangNap = "de/" + ten + ".js";
    var s = document.createElement("script");
    s.src = "de/" + ten + ".js";
    s.onload = next;
    s.onerror = function () { DE_LOI.push("Không tìm thấy file de/" + ten + ".js"); next(); };
    document.head.appendChild(s);
  })();
}

/* ===================== Tiện ích ===================== */
function $(id) { return document.getElementById(id); }
function esc(s) { return String(s == null ? "" : s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
function fmt(n) { return (Math.round(n * 100) / 100).toString().replace(".", ","); }
function store(k, v) {
  try {
    if (v === undefined) return JSON.parse(localStorage.getItem("luyende:" + k));
    if (v === null) localStorage.removeItem("luyende:" + k);
    else localStorage.setItem("luyende:" + k, JSON.stringify(v));
  } catch (e) { return null; }
}
function renderMath(el) {
  if (window.renderMathInElement) renderMathInElement(el, {
    delimiters: [{ left: "$$", right: "$$", display: true }, { left: "\\[", right: "\\]", display: true },
      { left: "$", right: "$", display: false }, { left: "\\(", right: "\\)", display: false }],
    throwOnError: false
  });
}
function ngay(t) { return new Date(t).toLocaleString("vi-VN", { hour: "2-digit", minute: "2-digit", day: "2-digit", month: "2-digit", year: "numeric" }); }
function phutGiay(s) { s = Math.max(0, Math.round(s)); return Math.floor(s / 60) + " phút " + (s % 60) + " giây"; }
function maxPts(diem) { return Array.isArray(diem) ? diem[diem.length - 1] : diem; }
function soCau(d) { return d.phan.reduce(function (s, p) { return s + (p.cauHoi || []).length; }, 0); }
function getTen() { return store("ten") || ""; }
function lichSu() { return store("lichSu") || []; }
function download(name, text, type) {
  var a = document.createElement("a");
  a.href = URL.createObjectURL(new Blob([text], { type: type || "application/json" }));
  a.download = name; document.body.appendChild(a); a.click();
  setTimeout(function () { URL.revokeObjectURL(a.href); a.remove(); }, 500);
}

/* Mọi câu hỏi trong ngân hàng: {ref, de, pi, qi, phan, q} */
function nganHang() {
  var out = [];
  Object.keys(DE).forEach(function (id) {
    DE[id].phan.forEach(function (p, pi) {
      (p.cauHoi || []).forEach(function (q, qi) { out.push({ ref: id + "|" + pi + "|" + qi, de: DE[id], pi: pi, qi: qi, phan: p, q: q }); });
    });
  });
  return out;
}
function layCau(ref) {
  var a = ref.split("|"), d = DE[a[0]];
  if (!d) return null;
  var p = d.phan[+a[1]], q = p && p.cauHoi && p.cauHoi[+a[2]];
  return q ? { ref: ref, de: d, pi: +a[1], qi: +a[2], phan: p, q: q } : null;
}

/* ===================== Dựng "bài làm" từ đề hoặc từ danh sách câu ===================== */
// Bài làm = {id, tieuDe, thoiGian, phan:[{loai,tieuDe,huongDan,diem, items:[...]}]}
function baiTuDe(d) {
  return {
    id: d.id, tieuDe: d.tieuDe, phu: [d.loai, d.nam].filter(Boolean).join(" · "), thoiGian: d.thoiGian || 90,
    phan: d.phan.map(function (p, pi) {
      return {
        loai: p.loai, tieuDe: p.tieuDe, huongDan: p.huongDan,
        diem: p.diem !== undefined ? p.diem : DIEM_MAC_DINH[p.loai],
        items: (p.cauHoi || []).map(function (q, qi) { return { ref: d.id + "|" + pi + "|" + qi, q: q, de: d }; })
      };
    })
  };
}
function baiTuRefs(info) {
  var nhom = {};
  info.refs.forEach(function (r) { var c = layCau(r); if (c) (nhom[c.phan.loai] = nhom[c.phan.loai] || []).push(c); });
  var so = ["I", "II", "III"], k = 0;
  return {
    id: info.id, tieuDe: info.tieuDe, phu: "Đề luyện theo chuyên đề", thoiGian: info.thoiGian, tuTao: true,
    phan: THU_TU_LOAI.filter(function (l) { return nhom[l]; }).map(function (l) {
      return {
        loai: l, tieuDe: "PHẦN " + so[k++] + ". " + TEN_LOAI[l], diem: DIEM_MAC_DINH[l],
        items: nhom[l].map(function (c) { return { ref: c.ref, q: c.q, de: c.de }; })
      };
    })
  };
}
function layBai(examId) {
  if (DE[examId]) return baiTuDe(DE[examId]);
  var info = store("cd:" + examId);
  return info ? baiTuRefs(info) : null;
}
function danhSo(bai) {
  var n = 0, all = [];
  bai.phan.forEach(function (p, pi) { p.items.forEach(function (it, i) { n++; it.id = "q" + n; it.so = i + 1; it.pi = pi; it.p = p; all.push(it); }); });
  return all;
}

/* ===================== Chấm điểm ===================== */
function normNum(s) {
  s = String(s).trim().replace(/\s+/g, "").replace(",", ".");
  var f = s.match(/^(-?\d+(?:\.\d+)?)\/(-?\d+(?:\.\d+)?)$/);
  if (f) { var b = parseFloat(f[2]); return b ? parseFloat(f[1]) / b : NaN; }
  return /^-?\d*\.?\d+$/.test(s) ? parseFloat(s) : NaN;
}
function shortCorrect(ans, key) {
  var keys = Array.isArray(key) ? key : [key];
  return keys.some(function (k) {
    var a = normNum(ans), b = normNum(k);
    if (!isNaN(a) && !isNaN(b)) return Math.abs(a - b) < 1e-9;
    var n = function (x) { return String(x).trim().toLowerCase().replace(/\s+/g, ""); };
    return n(ans) === n(k);
  });
}
function cham(it, ans) {
  var p = it.p, q = it.q, mx = maxPts(p.diem);
  if (p.loai === "tracnghiem") {
    var ok = String(ans[it.id] || "").toUpperCase() === String(q.dapAn).trim().toUpperCase();
    return { pts: ok ? p.diem : 0, max: mx, status: ok ? "ok" : (ans[it.id] ? "bad" : "skip") };
  }
  if (p.loai === "dungsai") {
    var right = 0, done = 0, n = (q.y || []).length;
    q.y.forEach(function (y, i) { var a = ans[it.id + "_" + i]; if (a !== undefined) done++; if (a === (y.dapAn ? "1" : "0")) right++; });
    var tbl = Array.isArray(p.diem) ? p.diem : [0, 0, 0, 0, p.diem];
    return { pts: tbl[right] || 0, max: mx, right: right, n: n, status: right === n ? "ok" : (right ? "half" : (done ? "bad" : "skip")) };
  }
  var v = ans[it.id], has = v !== undefined && String(v).trim() !== "";
  var ok2 = has && shortCorrect(v, q.dapAn);
  return { pts: ok2 ? p.diem : 0, max: mx, status: ok2 ? "ok" : (has ? "bad" : "skip") };
}

/* ===================== Giao diện chung ===================== */
var app, timerId = null, current = null;

function setView(html) {
  clearInterval(timerId); timerId = null; current = null;
  $("topbar-exam").classList.add("hidden");
  app.innerHTML = html;
  window.scrollTo(0, 0);
}
function setTab(name) {
  document.querySelectorAll(".tabs a").forEach(function (a) { a.classList.toggle("active", a.dataset.tab === name); });
}

/* ===================== Trang chủ: danh sách đề ===================== */
function viewHome() {
  setTab("de");
  var ids = Object.keys(DE);
  var loais = uniq(ids.map(function (i) { return DE[i].loai; })), nams = uniq(ids.map(function (i) { return DE[i].nam; })).sort().reverse();
  var f = store("loc") || {};
  setView(
    '<section class="card">' +
    '<div class="row"><label class="grow">Họ và tên học sinh<br><input type="text" id="ten" placeholder="Nhập họ tên để lưu kết quả" value="' + esc(getTen()) + '"></label></div>' +
    '</section>' +
    (DE_LOI.length ? '<section class="card warn"><b>Có file đề bị lỗi, chưa hiển thị:</b><ul>' + DE_LOI.map(function (e) { return "<li>" + esc(e) + "</li>"; }).join("") + '</ul></section>' : '') +
    '<section class="card"><div class="row filters">' +
    '<input type="search" id="f-tim" placeholder="Tìm theo tên đề, trường…" value="' + esc(f.tim || "") + '">' +
    sel("f-loai", "Mọi loại đề", loais, f.loai) + sel("f-nam", "Mọi năm học", nams, f.nam) +
    '</div></section><div id="ds-de"></div>'
  );
  $("ten").onchange = function () { store("ten", this.value.trim()); };
  ["f-tim", "f-loai", "f-nam"].forEach(function (id) { $(id).oninput = veDanhSach; });
  veDanhSach();
}
function uniq(a) { return a.filter(function (x, i) { return x && a.indexOf(x) === i; }); }
function sel(id, all, opts, v) {
  return '<select id="' + id + '"><option value="">' + all + '</option>' + opts.map(function (o) { return '<option' + (o === v ? " selected" : "") + '>' + esc(o) + '</option>'; }).join("") + '</select>';
}
function veDanhSach() {
  var f = { tim: $("f-tim").value.trim().toLowerCase(), loai: $("f-loai").value, nam: $("f-nam").value };
  store("loc", f);
  var ls = lichSu();
  var ids = Object.keys(DE).filter(function (id) {
    var d = DE[id];
    return (!f.loai || d.loai === f.loai) && (!f.nam || d.nam === f.nam) &&
      (!f.tim || (d.tieuDe + " " + (d.nguon || "") + " " + id).toLowerCase().indexOf(f.tim) >= 0);
  }).sort(function (a, b) { return String(DE[b].nam || "").localeCompare(String(DE[a].nam || "")) || DE[a].tieuDe.localeCompare(DE[b].tieuDe); });
  $("ds-de").innerHTML = ids.length ? ids.map(function (id) {
    var d = DE[id], tr = ls.filter(function (a) { return a.examId === id; });
    var best = tr.length ? Math.max.apply(null, tr.map(function (a) { return a.diem10; })) : null;
    var dang = store("dangLam:" + id);
    return '<section class="card de-item"><div class="grow"><div class="tags">' +
      (d.loai ? '<span class="tag">' + esc(d.loai) + '</span>' : '') + (d.nam ? '<span class="tag">' + esc(d.nam) + '</span>' : '') +
      (d.lop ? '<span class="tag">Lớp ' + esc(d.lop) + '</span>' : '') + '</div>' +
      '<h3>' + esc(d.tieuDe) + '</h3><div class="muted">' + soCau(d) + ' câu · ' + (d.thoiGian || 90) + ' phút' +
      (tr.length ? ' · Đã làm ' + tr.length + ' lần, cao nhất <b>' + fmt(best) + '</b>/10' : '') + '</div></div>' +
      '<div class="row">' + (dang ? '<a class="btn" href="#/lam/' + encodeURIComponent(id) + '">Làm tiếp</a>' : '') +
      '<a class="btn primary" href="#/lam/' + encodeURIComponent(id) + (dang ? '?moi' : '') + '">' + (dang ? 'Làm lại từ đầu' : 'Làm bài') + '</a></div></section>';
  }).join("") : '<section class="card muted">Không có đề nào khớp bộ lọc.</section>';
}

/* ===================== Luyện theo chuyên đề ===================== */
function viewChuyenDe() {
  setTab("cd");
  var all = nganHang(), dem = {};
  all.forEach(function (c) { var k = c.q.chuyenDe || "Chưa phân loại"; dem[k] = (dem[k] || 0) + 1; });
  var tks = thongKeChuyenDe();
  var cds = Object.keys(dem).sort();
  setView(
    '<section class="card"><h2>Luyện theo chuyên đề</h2><p class="muted">Chọn chuyên đề, máy sẽ lấy ngẫu nhiên câu hỏi từ tất cả các đề đã có để ghép thành một đề luyện.</p>' +
    '<div class="cd-list">' + cds.map(function (k) {
      var t = tks[k];
      return '<label class="cd"><input type="checkbox" value="' + esc(k) + '"> <span class="grow">' + esc(k) + '</span><span class="muted">' + dem[k] + ' câu' +
        (t && t.max ? ' · em đạt ' + Math.round(t.pts / t.max * 100) + '%' : '') + '</span></label>';
    }).join("") + '</div>' +
    '<div class="row" style="margin-top:12px"><span>Mức độ:</span>' + Object.keys(TEN_MUC_DO).map(function (m) {
      return '<label class="chk"><input type="checkbox" class="md" value="' + m + '" checked> ' + TEN_MUC_DO[m] + '</label>';
    }).join("") + '</div>' +
    '<div class="row" style="margin-top:12px"><label>Số câu tối đa <input type="number" id="cd-so" min="1" max="60" value="15" style="width:80px"></label>' +
    '<button class="primary" id="cd-tao">Tạo đề luyện</button><span id="cd-msg" class="muted"></span></div></section>'
  );
  $("cd-tao").onclick = function () {
    var chon = [].map.call(document.querySelectorAll(".cd input:checked"), function (i) { return i.value; });
    var mds = [].map.call(document.querySelectorAll(".md:checked"), function (i) { return i.value; });
    if (!chon.length) { $("cd-msg").textContent = "Hãy chọn ít nhất một chuyên đề."; return; }
    var pool = all.filter(function (c) {
      return chon.indexOf(c.q.chuyenDe || "Chưa phân loại") >= 0 && (!c.q.mucDo || mds.indexOf(c.q.mucDo) >= 0);
    });
    if (!pool.length) { $("cd-msg").textContent = "Không có câu nào khớp lựa chọn."; return; }
    for (var i = pool.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)), t = pool[i]; pool[i] = pool[j]; pool[j] = t; }
    pool = pool.slice(0, Math.max(1, +$("cd-so").value || 15));
    var phut = Math.ceil(pool.reduce(function (s, c) { return s + PHUT_MOI_CAU[c.phan.loai]; }, 0) / 5) * 5;
    var id = "cd-" + Date.now().toString(36);
    store("cd:" + id, { id: id, tieuDe: "Luyện chuyên đề: " + chon.join(", "), thoiGian: phut, refs: pool.map(function (c) { return c.ref; }) });
    location.hash = "#/lam/" + id;
  };
}

/* ===================== Làm bài ===================== */
function viewLam(examId, batDauMoi) {
  setTab("");
  var bai = layBai(examId);
  if (!bai) { setView('<section class="card">Không tìm thấy đề này. <a href="#/">Về danh sách đề</a></section>'); return; }
  var state = batDauMoi ? null : store("dangLam:" + examId);
  if (!state) {
    var ten = getTen();
    if (!ten) {
      ten = (prompt("Nhập họ và tên của em:") || "").trim();
      if (ten) store("ten", ten);
    }
    var now = Date.now();
    state = { examId: examId, ten: ten, start: now, end: now + bai.thoiGian * 60000, answers: {} };
    store("dangLam:" + examId, state);
  }
  var items = renderBai(bai, state.answers, false);
  current = { bai: bai, items: items, state: state };
  $("tb-title").textContent = (state.ten ? state.ten + " – " : "") + bai.tieuDe;
  $("topbar-exam").classList.remove("hidden");
  app.addEventListener("change", onInput);
  app.addEventListener("input", onInput);
  danhDau();
  if (state.end <= Date.now()) return nopBai(true);
  tick(); timerId = setInterval(tick, 1000);
}

function renderBai(bai, answers, review) {
  var items = danhSo(bai), html = '<section class="card"><div class="muted">' + esc(bai.phu || "") + '</div><h2 style="margin:2px 0">' + esc(bai.tieuDe) + '</h2>' +
    '<div class="muted">' + items.length + ' câu · ' + bai.thoiGian + ' phút</div></section>' +
    '<div id="ket-qua"></div><section class="card noprint"><div class="muted" style="margin-bottom:6px">Bảng câu hỏi</div><div class="nav" id="nav">' +
    items.map(function (it) { return '<a href="javascript:void 0" data-go="' + it.id + '">' + ["I", "II", "III", "IV"][it.pi] + '.' + it.so + '</a>'; }).join("") + '</div></section>';
  bai.phan.forEach(function (p, pi) {
    html += '<section class="card"><h2>' + esc(p.tieuDe) + '</h2>' + (p.huongDan ? '<div class="muted">' + p.huongDan + '</div>' : '') + '</section>';
    items.filter(function (it) { return it.pi === pi; }).forEach(function (it) { html += cauHtml(it, bai.tuTao); });
  });
  html += '<div class="card noprint center" id="cuoi">' + (review ? '' : '<button class="primary" id="btn-nop-2">Nộp bài</button>') + '</div>';
  app.innerHTML = html;
  app.querySelectorAll("[data-go]").forEach(function (a) { a.onclick = function () { $(a.dataset.go).scrollIntoView({ behavior: "smooth" }); }; });
  if ($("btn-nop-2")) $("btn-nop-2").onclick = function () { nopBai(false); };
  Object.keys(answers).forEach(function (name) {
    var v = answers[name];
    app.querySelectorAll('[name="' + name + '"]').forEach(function (inp) { if (inp.type === "radio") inp.checked = inp.value === v; else inp.value = v; });
  });
  renderMath(app);
  return items;
}

function imgHtml(h) {
  if (!h) return "";
  var src = typeof h === "string" ? h : h.src, w = typeof h === "string" ? 0 : h.rong;
  if (!/^(data:|https?:|\/)/.test(src)) src = "de/" + src;
  return '<img src="' + esc(src) + '" alt="Hình minh họa"' + (w ? ' style="width:' + w + 'px"' : '') + ' loading="lazy">';
}

function cauHtml(it, tuTao) {
  var p = it.p, q = it.q, body = "";
  if (p.loai === "tracnghiem") {
    body = '<div class="opts">' + (q.luaChon || []).map(function (c, i) {
      return '<label class="opt" data-q="' + it.id + '" data-v="' + LETTERS[i] + '"><input type="radio" name="' + it.id + '" value="' + LETTERS[i] + '"><span><b>' + LETTERS[i] + '.</b> ' + c + '</span></label>';
    }).join("") + '</div>';
  } else if (p.loai === "dungsai") {
    body = '<table class="tf"><tbody>' + q.y.map(function (y, i) {
      var nm = it.id + "_" + i;
      return '<tr data-row="' + nm + '"><td><b>' + "abcdefgh"[i] + ')</b> ' + y.noiDung + '</td>' +
        '<td class="c"><label><input type="radio" name="' + nm + '" value="1"> Đúng</label></td>' +
        '<td class="c"><label><input type="radio" name="' + nm + '" value="0"> Sai</label></td></tr>';
    }).join("") + '</tbody></table>';
  } else {
    body = '<div class="short"><input type="text" inputmode="decimal" autocomplete="off" name="' + it.id + '" placeholder="Nhập đáp số"></div>';
  }
  var meta = [q.chuyenDe, TEN_MUC_DO[q.mucDo]].filter(Boolean).join(" · ");
  return '<section class="card q" id="' + it.id + '"><div class="q-head">Câu ' + it.so +
    '<span class="pts muted">(' + (p.loai === "dungsai" ? "tối đa " : "") + fmt(maxPts(p.diem)) + ' điểm)</span><span class="res"></span></div>' +
    '<div>' + (q.de || "") + '</div>' + imgHtml(q.hinh) + body +
    '<div class="sol hidden"></div><div class="meta muted hidden">' + esc(meta) + (tuTao ? ' · Trích: ' + esc(it.de.tieuDe) : '') + '</div></section>';
}

function onInput(e) {
  if (!current || !current.state) return;
  var t = e.target; if (!t.name || t.disabled) return;
  current.state.answers[t.name] = t.value;
  store("dangLam:" + current.state.examId, current.state);
  danhDau();
}
function daLam(it, a) {
  if (it.p.loai === "dungsai") return it.q.y.every(function (_, i) { return a[it.id + "_" + i] !== undefined; });
  return a[it.id] !== undefined && String(a[it.id]).trim() !== "";
}
function danhDau() {
  var a = current.state.answers, done = 0;
  app.querySelectorAll(".opt").forEach(function (l) { l.classList.toggle("sel", a[l.dataset.q] === l.dataset.v); });
  current.items.forEach(function (it) {
    var d = daLam(it, a); if (d) done++;
    app.querySelector('[data-go="' + it.id + '"]').className = d ? "done" : "";
  });
  $("tb-progress").textContent = "Đã làm " + done + "/" + current.items.length;
}
function tick() {
  var left = Math.max(0, Math.round((current.state.end - Date.now()) / 1000)), m = Math.floor(left / 60), s = left % 60;
  $("timer").textContent = (m < 10 ? "0" : "") + m + ":" + (s < 10 ? "0" : "") + s;
  $("timer").classList.toggle("low", left <= 300);
  if (left <= 0) nopBai(true);
}

function nopBai(auto) {
  if (!current || !current.state) return;
  var st = current.state, items = current.items, bai = current.bai;
  if (!auto) {
    var thieu = items.filter(function (it) { return !daLam(it, st.answers); }).length;
    if (!confirm(thieu ? "Còn " + thieu + " câu chưa làm xong. Vẫn nộp bài?" : "Nộp bài và xem kết quả?")) return;
  }
  clearInterval(timerId); timerId = null;
  var now = Date.now(), tong = 0, toiDa = 0;
  var kq = items.map(function (it) {
    var g = cham(it, st.answers); tong += g.pts; toiDa += g.max;
    return { ref: it.ref, chuyenDe: it.q.chuyenDe || "Chưa phân loại", mucDo: it.q.mucDo || "", loai: it.p.loai, status: g.status, pts: g.pts, max: g.max };
  });
  var at = {
    id: now.toString(36), examId: st.examId, tieuDe: bai.tieuDe, ten: st.ten || "", batDau: st.start, nop: now,
    thoiGianLam: Math.round((Math.min(now, st.end) - st.start) / 1000), tuNop: !!auto,
    diem: Math.round(tong * 100) / 100, toiDa: toiDa, diem10: toiDa ? Math.round(tong / toiDa * 1000) / 100 : 0,
    answers: st.answers, ketQua: kq, refs: bai.tuTao ? items.map(function (it) { return it.ref; }) : undefined,
    thoiGianDe: bai.thoiGian
  };
  var ls = lichSu(); ls.push(at); store("lichSu", ls);
  store("dangLam:" + st.examId, null);
  current.state = null;
  location.hash = "#/xem/" + at.id;
}

/* ===================== Xem lại bài đã nộp ===================== */
function viewXem(atId) {
  setTab("kq");
  var at = lichSu().filter(function (a) { return a.id === atId; })[0];
  if (!at) { setView('<section class="card">Không tìm thấy bài làm. <a href="#/ket-qua">Về trang kết quả</a></section>'); return; }
  var bai = DE[at.examId] ? baiTuDe(DE[at.examId]) : (at.refs ? baiTuRefs({ id: at.examId, tieuDe: at.tieuDe, thoiGian: at.thoiGianDe, refs: at.refs }) : null);
  setView("");
  if (!bai) { app.innerHTML = '<section class="card">Đề của bài làm này không còn trong ngân hàng.</section>'; return; }
  var items = renderBai(bai, at.answers, true), a = at.answers;
  app.querySelectorAll("input").forEach(function (i) { i.disabled = true; });
  var perPart = bai.phan.map(function (p) { return { name: p.tieuDe, pts: 0, max: 0, ok: 0, n: 0 }; });
  items.forEach(function (it) {
    var g = cham(it, a), q = it.q, p = it.p, card = $(it.id), pp = perPart[it.pi];
    pp.pts += g.pts; pp.max += g.max; pp.n++; if (g.status === "ok") pp.ok++;
    var label = { ok: "Đúng", bad: "Sai", skip: "Chưa làm", half: "Đúng " + g.right + "/" + g.n + " ý" }[g.status];
    var cls = g.status === "skip" ? "bad" : g.status;
    card.querySelector(".res").innerHTML = '<span class="badge ' + cls + '">' + label + ' · +' + fmt(g.pts) + 'đ</span>';
    app.querySelector('[data-go="' + it.id + '"]').className = cls;
    var sol;
    if (p.loai === "tracnghiem") {
      card.querySelectorAll(".opt").forEach(function (l) {
        if (l.dataset.v === String(q.dapAn).trim().toUpperCase()) l.classList.add("right");
        else if (a[it.id] === l.dataset.v) l.classList.add("wrong");
      });
      sol = "<b>Đáp án: " + esc(String(q.dapAn).toUpperCase()) + "</b>";
    } else if (p.loai === "dungsai") {
      q.y.forEach(function (y, i) {
        card.querySelector('[data-row="' + it.id + "_" + i + '"]').classList.add(a[it.id + "_" + i] === (y.dapAn ? "1" : "0") ? "right" : "wrong");
      });
      sol = "<b>Đáp án: " + q.y.map(function (y, i) { return "abcdefgh"[i] + ") " + (y.dapAn ? "Đúng" : "Sai"); }).join("; ") + "</b>";
    } else {
      card.querySelector("input").classList.add(g.status === "ok" ? "right" : "wrong");
      sol = "<b>Đáp án: " + esc((Array.isArray(q.dapAn) ? q.dapAn : [q.dapAn])[0]) + "</b>";
    }
    if (q.loiGiai) sol += '<div style="margin-top:6px"><b>Lời giải:</b> ' + q.loiGiai + '</div>';
    var s = card.querySelector(".sol"); s.innerHTML = sol; s.classList.remove("hidden"); renderMath(s);
    card.querySelector(".meta").classList.remove("hidden");
  });
  $("ket-qua").innerHTML = '<section class="card result"><div class="row"><div class="grow">' +
    '<div class="muted">' + esc(at.ten || "Học sinh") + ' · nộp lúc ' + ngay(at.nop) + '</div>' +
    '<div class="score">' + fmt(at.diem) + ' / ' + fmt(at.toiDa) + ' điểm' + (Math.abs(at.toiDa - 10) > 1e-9 ? ' <small>(≈ ' + fmt(at.diem10) + '/10)</small>' : '') + '</div>' +
    '<div class="muted">Thời gian làm: ' + phutGiay(at.thoiGianLam) + (at.tuNop ? ' · Hết giờ, bài được nộp tự động' : '') + '</div></div>' +
    '<div class="row noprint"><button id="btn-in">In kết quả</button><button id="btn-xuat1">Tải file kết quả</button>' +
    (DE[at.examId] || store("cd:" + at.examId) ? '<a class="btn primary" href="#/lam/' + encodeURIComponent(at.examId) + '?moi">Làm lại</a>' : '') + '</div></div>' +
    '<div class="stats">' + perPart.map(function (pp) {
      return '<div class="stat"><span class="muted">' + esc(pp.name) + '</span><b>' + fmt(pp.pts) + ' / ' + fmt(pp.max) + ' điểm</b><span class="muted">Đúng hoàn toàn ' + pp.ok + '/' + pp.n + ' câu</span></div>';
    }).join("") + '</div><p class="muted" style="margin:10px 0 0">Kéo xuống để xem từng câu: xanh là đúng, đỏ là sai, kèm đáp án và lời giải.</p></section>';
  $("btn-in").onclick = function () { window.print(); };
  $("btn-xuat1").onclick = function () { xuatKetQua([at], "ket-qua-" + tenFile(at.ten) + "-" + at.id + ".json"); };
}

/* ===================== Kết quả & thống kê ===================== */
function thongKeChuyenDe(ls) {
  var t = {};
  (ls || lichSu()).forEach(function (a) {
    (a.ketQua || []).forEach(function (k) {
      var x = t[k.chuyenDe] = t[k.chuyenDe] || { n: 0, ok: 0, pts: 0, max: 0 };
      x.n++; if (k.status === "ok") x.ok++; x.pts += k.pts; x.max += k.max;
    });
  });
  return t;
}
function tenFile(s) { return String(s || "hoc-sinh").normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/đ/g, "d").replace(/Đ/g, "D").replace(/[^A-Za-z0-9]+/g, "-").replace(/^-|-$/g, "").toLowerCase() || "hoc-sinh"; }
function xuatKetQua(list, name) {
  download(name, JSON.stringify({ loai: "luyen-de-ket-qua", phienBan: 1, xuatLuc: Date.now(), lichSu: list }, null, 1));
}

function viewKetQua() {
  setTab("kq");
  var ls = lichSu().slice().sort(function (a, b) { return b.nop - a.nop; });
  var tk = thongKeChuyenDe(ls), cds = Object.keys(tk).sort(function (a, b) { return tk[a].pts / tk[a].max - tk[b].pts / tk[b].max; });
  var tens = uniq(ls.map(function (a) { return a.ten; }));
  setView(
    '<section class="card"><h2>Kết quả làm bài</h2><p class="muted">Kết quả được lưu ngay trên trình duyệt của máy này. Nên bấm "Tải toàn bộ kết quả" thỉnh thoảng để giữ bản sao, hoặc để gửi cho thầy/cô.</p>' +
    '<div class="row noprint"><button id="kq-xuat">Tải toàn bộ kết quả (.json)</button><button id="kq-csv">Tải bảng điểm (Excel .csv)</button>' +
    '<label class="btn">Nhập file kết quả<input type="file" id="kq-nhap" accept=".json,application/json" multiple class="hidden"></label>' +
    '<button id="kq-xoa" class="danger">Xoá lịch sử trên máy này</button></div><p id="kq-msg" class="muted"></p></section>' +
    (cds.length ? '<section class="card"><h2>Thống kê theo chuyên đề</h2><p class="muted">Sắp xếp từ chuyên đề yếu nhất. Nên luyện thêm các chuyên đề có tỉ lệ đúng thấp.</p><table class="tk"><thead><tr><th>Chuyên đề</th><th>Số câu đã làm</th><th>Đúng hoàn toàn</th><th style="width:40%">Tỉ lệ điểm</th></tr></thead><tbody>' +
      cds.map(function (k) {
        var x = tk[k], pc = x.max ? Math.round(x.pts / x.max * 100) : 0;
        return '<tr><td>' + esc(k) + '</td><td>' + x.n + '</td><td>' + x.ok + '</td><td><div class="bar"><span style="width:' + pc + '%" class="' + (pc < 50 ? "lo" : pc < 80 ? "mid" : "hi") + '"></span></div> ' + pc + '%</td></tr>';
      }).join("") + '</tbody></table></section>' : '') +
    '<section class="card"><h2>Các lần làm bài</h2>' + (tens.length > 1 ? '<div class="row" style="margin-bottom:8px">' + sel("kq-ten", "Tất cả học sinh", tens, "") + '</div>' : '') +
    (ls.length ? '<div class="scroll"><table class="tk" id="kq-bang"><thead><tr><th>Thời gian nộp</th><th>Học sinh</th><th>Đề</th><th>Điểm</th><th>Thang 10</th><th>Thời gian làm</th><th></th></tr></thead><tbody>' +
      ls.map(function (a) {
        return '<tr data-ten="' + esc(a.ten) + '"><td>' + ngay(a.nop) + '</td><td>' + esc(a.ten) + '</td><td>' + esc(a.tieuDe) + '</td><td>' + fmt(a.diem) + '/' + fmt(a.toiDa) +
          '</td><td><b>' + fmt(a.diem10) + '</b></td><td>' + phutGiay(a.thoiGianLam) + '</td><td><a href="#/xem/' + a.id + '">Xem lại</a></td></tr>';
      }).join("") + '</tbody></table></div>' : '<p class="muted">Chưa có bài làm nào.</p>') + '</section>'
  );
  if ($("kq-ten")) $("kq-ten").onchange = function () {
    var v = this.value; document.querySelectorAll("#kq-bang tbody tr").forEach(function (r) { r.classList.toggle("hidden", !!v && r.dataset.ten !== v); });
  };
  $("kq-xuat").onclick = function () { xuatKetQua(lichSu(), "ket-qua-luyen-de-" + new Date().toISOString().slice(0, 10) + ".json"); };
  $("kq-csv").onclick = function () {
    var rows = [["Thời gian nộp", "Học sinh", "Đề", "Điểm", "Tối đa", "Thang 10", "Thời gian làm (phút)"]].concat(lichSu().map(function (a) {
      return [ngay(a.nop), a.ten, a.tieuDe, fmt(a.diem), fmt(a.toiDa), fmt(a.diem10), fmt(a.thoiGianLam / 60)];
    }));
    download("bang-diem-" + new Date().toISOString().slice(0, 10) + ".csv", "﻿" + rows.map(function (r) {
      return r.map(function (c) { return '"' + String(c).replace(/"/g, '""') + '"'; }).join(",");
    }).join("\r\n"), "text/csv;charset=utf-8");
  };
  $("kq-nhap").onchange = function (e) {
    var files = [].slice.call(e.target.files), them = 0, loi = 0, xong = 0;
    files.forEach(function (f) {
      var r = new FileReader();
      r.onload = function () {
        try {
          var obj = JSON.parse(r.result); if (obj.loai !== "luyen-de-ket-qua") throw 0;
          var cur = lichSu(), ids = cur.map(function (a) { return a.id + a.ten; });
          obj.lichSu.forEach(function (a) { if (ids.indexOf(a.id + a.ten) < 0) { cur.push(a); them++; } });
          store("lichSu", cur);
        } catch (err) { loi++; }
        if (++xong === files.length) { viewKetQua(); $("kq-msg").textContent = "Đã thêm " + them + " bài làm" + (loi ? ", " + loi + " file không đọc được" : "") + "."; }
      };
      r.readAsText(f, "utf-8");
    });
  };
  $("kq-xoa").onclick = function () {
    if (!confirm("Xoá toàn bộ lịch sử làm bài trên máy này? Nên tải bản sao trước.")) return;
    store("lichSu", null); viewKetQua();
  };
}

/* ===================== Điều hướng ===================== */
function route() {
  var h = decodeURIComponent(location.hash.replace(/^#\/?/, "")), parts = h.split("?");
  var seg = parts[0].split("/");
  if (current && current.state && seg[0] !== "lam") {
    // rời trang khi đang làm: bài vẫn được lưu, đồng hồ vẫn chạy
  }
  if (seg[0] === "lam" && seg[1]) return viewLam(seg[1], parts[1] === "moi");
  if (seg[0] === "xem" && seg[1]) return viewXem(seg[1]);
  if (seg[0] === "chuyen-de") return viewChuyenDe();
  if (seg[0] === "ket-qua") return viewKetQua();
  viewHome();
}

document.addEventListener("DOMContentLoaded", function () {
  app = $("app");
  $("btn-nop").onclick = function () { nopBai(false); };
  window.addEventListener("hashchange", function () {
    app.removeEventListener("change", onInput); app.removeEventListener("input", onInput);
    // "?moi" chỉ dùng một lần: xoá bài dở rồi chuyển về đường dẫn thường
    var m = location.hash.match(/^#\/lam\/([^?]+)\?moi$/);
    if (m) { store("dangLam:" + decodeURIComponent(m[1]), null); history.replaceState(null, "", "#/lam/" + m[1]); }
    route();
  });
  window.addEventListener("beforeunload", function (e) { if (current && current.state) { e.preventDefault(); e.returnValue = ""; } });
  napTatCaDe(function () {
    var m = location.hash.match(/^#\/lam\/([^?]+)\?moi$/);
    if (m) { store("dangLam:" + decodeURIComponent(m[1]), null); history.replaceState(null, "", "#/lam/" + m[1]); }
    route();
  });
});
})();
