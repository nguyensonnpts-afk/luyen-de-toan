# Hướng dẫn thêm đề mới

Web gồm phần giao diện (thư mục `lib/`, không cần sửa) và phần dữ liệu đề (thư mục `de/`).
Thêm một đề chỉ cần **hai bước**:

1. Chép file `de/_mau-de.js` thành file mới, ví dụ `de/2027-ck1-truong-abc.js`, rồi sửa nội dung.
2. Mở `de/danh-sach.js`, thêm một dòng `"2027-ck1-truong-abc",`.

Mở `index.html` bằng trình duyệt để xem thử. Nếu file đề có lỗi, trang chủ sẽ báo đề nào, câu nào bị lỗi.
Sau đó commit và push lên GitHub (trong GitHub Desktop: viết mô tả → **Commit to main** → **Push origin**). Khoảng 1 phút sau link của học sinh sẽ có đề mới.

> Cách nhanh nhất: gửi file PDF/Word của đề cho Claude và nhờ chuyển sang file đề.

## Thông tin chung của đề

| Trường | Ý nghĩa | Ví dụ |
|---|---|---|
| `id` | Mã đề, **trùng với tên file**, không dấu, không cách | `"2027-ck1-truong-abc"` |
| `tieuDe` | Tên đề hiển thị | `"Cuối học kì I – THPT ABC"` |
| `loai` | Loại đề, dùng để lọc | `"Giữa kì I"`, `"Cuối kì I"`, `"Thi thử TN THPT"`, `"TN THPT chính thức"`, `"ĐGNL"` |
| `nam` | Năm học, dùng để lọc | `"2026-2027"` |
| `lop` | Lớp | `12` |
| `nguon` | Ghi chú nguồn đề | |
| `thoiGian` | Thời gian làm bài (phút) | `90` |
| `phan` | Danh sách các phần của đề | |

## Ba loại câu hỏi

Mỗi phần có `"loai"` là một trong ba giá trị:

- `"tracnghiem"`: 4 lựa chọn. Cần `luaChon` (4 phương án) và `dapAn` (`"A"`…`"D"`).
- `"dungsai"`: 4 ý Đúng/Sai. Cần `y`, mỗi ý có `noiDung` và `dapAn` (`true` = Đúng, `false` = Sai).
- `"traloingan"`: học sinh gõ một số. `dapAn` là `"2,33"` hoặc nhiều cách viết `["0,3", "3/10"]`.
  Học sinh gõ dấu phẩy hay dấu chấm đều được chấm đúng.

Trường dùng chung cho mọi câu:

- `de`: nội dung câu hỏi. `loiGiai`: lời giải (hiện sau khi nộp bài).
- `chuyenDe`: tên chuyên đề, dùng cho "Luyện chuyên đề" và thống kê. **Viết thống nhất** giữa các đề (ví dụ luôn là `"Cực trị"`).
- `mucDo`: `"NB"`, `"TH"`, `"VD"` hoặc `"VDC"`.
- `hinh` (không bắt buộc): `{ "src": "hinh/<id-de>/ten-anh.png", "rong": 300 }`. Ảnh đặt trong `de/hinh/<id-de>/`; `rong` là chiều rộng hiển thị (px).

## Viết công thức

- Công thức trong dòng: `$...$`, công thức riêng một dòng: `$$...$$` (cú pháp LaTeX).
- Gõ dấu `\` **một lần** như bình thường: `\frac{1}{2}`, `\sqrt{x}`, `\overrightarrow{AB}`, `\int_0^1`.
- Muốn có dấu ngoặc kép `"` trong nội dung thì gõ `\"`. Không dùng dấu `` ` ``.
- Xuống dòng trong lời giải: `<br>`. In đậm: `<b>...</b>`.

## Thang điểm

Mặc định theo đề thi tốt nghiệp THPT từ 2025: trắc nghiệm 0,25đ/câu; đúng/sai đúng 1/2/3/4 ý được 0,1/0,25/0,5/1đ; trả lời ngắn 0,5đ/câu.
Muốn đổi cho một phần, thêm `"diem": 0.2` (hoặc với đúng/sai: `"diem": [0, 0.1, 0.25, 0.5, 1]`).
Nếu tổng điểm khác 10, web tự quy đổi thêm về thang 10.

## Kết quả của học sinh

Nếu đã bật Firebase ([FIREBASE.md](FIREBASE.md)): học sinh đăng nhập Google, kết quả tự đồng bộ trên mọi thiết bị, và thầy/cô xem điểm cả lớp ở tab **Kết quả lớp** (cập nhật trực tiếp). Cách gửi file bên dưới vẫn dùng được.

Nếu chưa bật Firebase: kết quả được lưu trên trình duyệt của máy học sinh. Ở tab **Kết quả của em**, học sinh bấm "Tải toàn bộ kết quả" để gửi file `.json` cho thầy/cô.
Thầy/cô mở web, vào tab đó, bấm **Nhập file kết quả** (chọn được nhiều file cùng lúc) để xem bảng điểm của cả lớp, lọc theo tên, và tải bảng điểm Excel (.csv).
