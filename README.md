# Luyện đề Toán

Web luyện đề Toán cho học sinh: làm bài trực tuyến theo cấu trúc đề thi tốt nghiệp THPT mới (trắc nghiệm 4 lựa chọn, đúng/sai, trả lời ngắn), bấm giờ, chấm điểm tự động, xem đáp án và lời giải, luyện theo chuyên đề, lưu và thống kê kết quả.

- Mở trực tiếp `index.html` trên máy là chạy được, không cần mạng (thư viện công thức KaTeX đã có sẵn trong `lib/katex`).
- Đưa lên GitHub Pages để học sinh vào bằng đường link.
- Tuỳ chọn: bật Firebase để học sinh đăng nhập Google, kết quả đồng bộ trực tiếp trên mọi thiết bị và mọi người xem được bảng điểm. Xem [FIREBASE.md](FIREBASE.md).

## Cấu trúc

```
index.html          trang chính
lib/                giao diện và bộ chấm điểm (không cần sửa)
  app.js, style.css, katex/
  firebase-config.js  cấu hình Firebase (điền một lần, xem FIREBASE.md)
  dong-bo.js          đồng bộ qua Firebase
de/                 dữ liệu đề
  danh-sach.js      danh sách đề hiển thị
  _mau-de.js        file mẫu để chép khi thêm đề
  <ma-de>.js        mỗi đề một file
  hinh/<ma-de>/     ảnh của từng đề
HUONG-DAN.md        cách thêm đề mới
FIREBASE.md         cách bật đồng bộ nhiều thiết bị
firestore.rules     rules bảo mật mẫu cho Firestore
```

Thêm đề: xem [HUONG-DAN.md](HUONG-DAN.md).

KaTeX © Khan Academy, giấy phép MIT.
