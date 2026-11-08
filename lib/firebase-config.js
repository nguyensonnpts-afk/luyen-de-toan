// CẤU HÌNH FIREBASE – để bài làm, điểm, tiến độ của học sinh đồng bộ trên mọi thiết bị.
// Chưa điền (để trống apiKey) thì web vẫn chạy bình thường, chỉ lưu trên trình duyệt của từng máy.
// Cách lấy các giá trị này: xem FIREBASE.md (Bước 4).
window.FIREBASE_CONFIG = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
};

// Email (Google) của thầy/cô được xem kết quả cả lớp ở tab "Kết quả lớp".
// Phải ghi giống hệt danh sách email trong Firestore rules (FIREBASE.md, Bước 5).
// Ví dụ: window.GIAO_VIEN = ["thay.son@gmail.com"];
window.GIAO_VIEN = [];
