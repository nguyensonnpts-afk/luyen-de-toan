# Luyện đề Toán

Web luyện đề Toán cho học sinh: làm bài trực tuyến theo cấu trúc đề thi tốt nghiệp THPT mới (trắc nghiệm 4 lựa chọn, đúng/sai, trả lời ngắn), bấm giờ, chấm điểm tự động, xem đáp án và lời giải, luyện theo chuyên đề, lưu và thống kê kết quả.

- Mở trực tiếp `index.html` trên máy là chạy được, không cần mạng (thư viện công thức KaTeX đã có sẵn trong `lib/katex`).
- Đưa lên GitHub Pages để học sinh vào bằng đường link.

## Cấu trúc

```
index.html          trang chính
lib/                giao diện và bộ chấm điểm (không cần sửa)
  app.js, style.css, katex/
de/                 dữ liệu đề
  danh-sach.js      danh sách đề hiển thị
  _mau-de.js        file mẫu để chép khi thêm đề
  <ma-de>.js        mỗi đề một file
  hinh/<ma-de>/     ảnh của từng đề
HUONG-DAN.md        cách thêm đề mới
```

Thêm đề: xem [HUONG-DAN.md](HUONG-DAN.md).

KaTeX © Khan Academy, giấy phép MIT.
