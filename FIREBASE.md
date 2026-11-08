# Đồng bộ dữ liệu học sinh bằng Firebase

Khi bật Firebase, học sinh **đăng nhập bằng tài khoản Google** (nút góc trên bên phải). Từ đó:

- Bài làm, điểm, lịch sử, đề luyện chuyên đề được lưu vào tài khoản và **có mặt trên mọi thiết bị** (điện thoại, máy tính ở nhà, máy ở trường).
- **Cập nhật trực tiếp**: đang làm dở trên máy tính, mở điện thoại là thấy ngay các câu đã chọn và làm tiếp được; nộp bài ở máy này thì máy kia tự chuyển sang trang kết quả.
- Mất mạng vẫn làm bài được, có mạng lại thì tự gửi lên.
- Tab **Bảng điểm**: ai mở web cũng xem được (không cần đăng nhập) các bài học sinh đã nộp, cập nhật ngay khi vừa nộp, lọc theo học sinh/đề, xem lại từng bài, tải bảng điểm Excel. Bảng điểm chỉ hiện tên học sinh, không hiện email.

Chưa cấu hình thì web vẫn chạy như cũ (lưu trên trình duyệt của từng máy). Firebase gói miễn phí (Spark) là đủ cho vài lớp học.

Làm một lần, khoảng 15 phút:

## Bước 1. Tạo project Firebase

1. Vào <https://console.firebase.google.com>, đăng nhập Google, bấm **Create a project** (Tạo dự án).
2. Đặt tên, ví dụ `luyen-de-toan`. Google Analytics: tắt cũng được. Bấm **Create project**.

## Bước 2. Bật đăng nhập Google

1. Menu trái: **Build › Authentication** → **Get started**.
2. Tab **Sign-in method** → chọn **Google** → bật **Enable**, chọn email hỗ trợ (email của thầy/cô) → **Save**.
3. Tab **Settings › Authorized domains** → **Add domain**, thêm tên miền của web, ví dụ `nguyensonnpts-afk.github.io` (GitHub Pages). `localhost` đã có sẵn.

## Bước 3. Tạo Firestore

1. Menu trái: **Build › Firestore Database** → **Create database**.
2. Chọn vị trí gần Việt Nam, ví dụ `asia-southeast1 (Singapore)`. Không đổi được sau này.
3. Chọn **Start in production mode** → **Create**. (Rules sẽ dán ở Bước 5.)

## Bước 4. Lấy firebaseConfig và dán vào web

1. Bấm bánh răng cạnh **Project Overview** → **Project settings**.
2. Kéo xuống **Your apps** → bấm biểu tượng **Web** `</>`. Đặt tên app (ví dụ `web`), **không** cần tick Firebase Hosting → **Register app**.
3. Firebase hiện một đoạn `const firebaseConfig = { apiKey: "...", authDomain: "...", ... }`.
4. Mở file `lib/firebase-config.js` trong repo, chép từng giá trị vào đúng chỗ:

```js
window.FIREBASE_CONFIG = {
  apiKey: "AIza....",
  authDomain: "luyen-de-toan.firebaseapp.com",
  projectId: "luyen-de-toan",
  storageBucket: "luyen-de-toan.firebasestorage.app",
  messagingSenderId: "1234567890",
  appId: "1:1234567890:web:abc123"
};
```

`apiKey` này **không phải mật khẩu**, để công khai trên GitHub là bình thường. Dữ liệu được bảo vệ bằng rules ở Bước 5.

## Bước 5. Dán rules bảo mật

1. **Firestore Database › Rules**.
2. Xoá hết nội dung cũ, dán toàn bộ nội dung file [`firestore.rules`](firestore.rules) trong repo.
3. Bấm **Publish**.

Rules này bảo đảm: mỗi học sinh chỉ sửa được dữ liệu của chính mình; ai cũng xem được bảng điểm (các bài đã nộp). Muốn chỉ người đã đăng nhập mới xem được, đổi `allow read: if true` thành `allow read: if request.auth != null` trong rules.

## Bước 6. Đưa lên web và thử

Commit và push (GitHub Desktop: **Commit to main** → **Push origin**). Khoảng 1 phút sau mở link web:

1. Bấm **Đăng nhập Google** → thấy email và chữ **✓ Đã đồng bộ** ở góc trên.
2. Làm vài câu, mở web trên điện thoại bằng cùng tài khoản: trang chủ có nút **Làm tiếp**, các câu đã chọn hiện ra.
3. Mở tab **Bảng điểm** (trên máy khác, không cần đăng nhập) → thấy bài vừa nộp.

> Đồng bộ chỉ chạy khi mở web qua đường link (GitHub Pages) hoặc `http://localhost`. Mở thẳng file `index.html` trên máy thì web vẫn chạy nhưng chỉ lưu trên máy đó.

## Câu hỏi thường gặp

- **Học sinh đã làm bài trước khi có đăng nhập thì sao?** Lần đầu đăng nhập trên máy đó, web hỏi có đưa các bài cũ vào tài khoản không.
- **Báo "Tên miền này chưa được phép đăng nhập"**: làm lại Bước 2 ý 3 với đúng tên miền đang mở.
- **Báo "Lỗi quyền truy cập – kiểm tra Firestore rules"**: chưa làm Bước 5, hoặc chưa bấm Publish.
- **Tab Bảng điểm báo không đọc được**: kiểm tra đã dán đúng rules ở Bước 5 và bấm Publish.
- **Học sinh dùng chung máy**: mỗi em đăng nhập tài khoản của mình, dữ liệu tách riêng. Dùng xong bấm **Đăng xuất**.
- **Học sinh có sửa được điểm không?** Điểm được chấm ngay trên trình duyệt, nên một học sinh rành kỹ thuật có thể sửa điểm của chính mình. Không ai sửa được dữ liệu của bạn khác. Với bài kiểm tra quan trọng, thầy/cô nên xem lại bài làm (nút **Xem lại**) chứ không chỉ nhìn điểm.

## Dữ liệu được lưu thế nào

```
users/{uid}                    email, tên học sinh
users/{uid}/lichSu/{mã}        các bài đã nộp (điểm, đáp án đã chọn, đúng/sai từng câu)
users/{uid}/dangLam/{mã đề}    bài đang làm dở
users/{uid}/chuyenDe/{mã đề}   đề luyện chuyên đề đã tạo
```

Thầy/cô xem trực tiếp trong **Firestore Database › Data** nếu cần.
