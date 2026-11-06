// FILE MẪU – chép file này thành tên mới (ví dụ 2027-ck1-truong-abc.js), sửa nội dung,
// rồi thêm tên file vào de/danh-sach.js. File bắt đầu bằng dấu _ sẽ không hiện trên web.
themDe(String.raw`
{
  "id": "2027-ck1-truong-abc",
  "tieuDe": "Cuối học kì I – THPT ABC",
  "loai": "Cuối kì I",
  "nam": "2026-2027",
  "lop": 12,
  "nguon": "Ghi nguồn đề ở đây",
  "thoiGian": 90,
  "phan": [
    {
      "loai": "tracnghiem",
      "tieuDe": "PHẦN I. Câu trắc nghiệm nhiều phương án lựa chọn",
      "huongDan": "Mỗi câu chỉ chọn một phương án.",
      "cauHoi": [
        {
          "de": "Đạo hàm của hàm số $y = x^3 - 3x + 1$ là",
          "luaChon": ["$y' = 3x^2 - 3$", "$y' = 3x^2 + 1$", "$y' = x^2 - 3$", "$y' = 3x - 3$"],
          "dapAn": "A",
          "loiGiai": "$y' = 3x^2 - 3$.",
          "chuyenDe": "Đạo hàm",
          "mucDo": "NB"
        }
      ]
    },
    {
      "loai": "dungsai",
      "tieuDe": "PHẦN II. Câu trắc nghiệm đúng sai",
      "huongDan": "Trong mỗi ý a), b), c), d) chọn Đúng hoặc Sai.",
      "cauHoi": [
        {
          "de": "Cho hàm số $f(x) = x^3 - 3x^2 + 2$.",
          "hinh": { "src": "hinh/2027-ck1-truong-abc/cau-ii-1.png", "rong": 300 },
          "y": [
            { "noiDung": "$f'(x) = 3x^2 - 6x$.", "dapAn": true },
            { "noiDung": "Hàm số đồng biến trên $(0;2)$.", "dapAn": false },
            { "noiDung": "Hàm số đạt cực tiểu tại $x = 2$.", "dapAn": true },
            { "noiDung": "$\max_{[-1;3]} f(x) = 3$.", "dapAn": false }
          ],
          "loiGiai": "Lời giải ở đây.",
          "chuyenDe": "Cực trị",
          "mucDo": "TH"
        }
      ]
    },
    {
      "loai": "traloingan",
      "tieuDe": "PHẦN III. Câu trắc nghiệm trả lời ngắn",
      "huongDan": "Ghi kết quả là một số.",
      "cauHoi": [
        {
          "de": "Tính $\int_0^2 (2x+1)\,dx$.",
          "dapAn": "6",
          "loiGiai": "$= (x^2+x)\Big|_0^2 = 6$.",
          "chuyenDe": "Tích phân",
          "mucDo": "NB"
        }
      ]
    }
  ]
}
`);
