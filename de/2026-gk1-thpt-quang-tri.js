// Đề: Giữa học kì I – THPT Quảng Trị
// Xem HUONG-DAN.md để biết cách viết file đề.
themDe(String.raw`
{
  "id": "2026-gk1-thpt-quang-tri",
  "tieuDe": "Giữa học kì I – THPT Quảng Trị",
  "loai": "Giữa kì I",
  "nam": "2026-2027",
  "lop": 12,
  "nguon": "Mã đề 1201. Đáp án theo hướng dẫn chấm của trường; lời giải do Claude biên soạn.",
  "thoiGian": 90,
  "phan": [
    {
      "loai": "tracnghiem",
      "tieuDe": "PHẦN I. Câu trắc nghiệm nhiều phương án lựa chọn",
      "huongDan": "Thí sinh trả lời từ câu 1 đến câu 12. Mỗi câu hỏi thí sinh chỉ chọn một phương án.",
      "cauHoi": [
        {
          "de": "Cho hàm số $y=f(x)$ có đạo hàm $f'(x)=x(x-2)^3,\ \forall x\in\mathbb R$. Hàm số $y=f(x)$ đạt cực tiểu tại",
          "luaChon": [
            "$x=2$",
            "$x=0$",
            "$x=3$",
            "$x=1$"
          ],
          "dapAn": "A",
          "loiGiai": "$f'(x)=0\Leftrightarrow x=0$ hoặc $x=2$. Xét dấu: $f'>0$ trên $(-\infty;0)$, $f'<0$ trên $(0;2)$, $f'>0$ trên $(2;+\infty)$. Vậy $f'$ đổi dấu từ $-$ sang $+$ tại $x=2$, hàm số đạt cực tiểu tại $x=2$.",
          "chuyenDe": "Cực trị",
          "mucDo": "NB"
        },
        {
          "de": "Trong các điểm sau, điểm nào thuộc đồ thị hàm số $y=x^3-3x+2$?",
          "luaChon": [
            "$N(1;0)$",
            "$P(-1;9)$",
            "$M(2;0)$",
            "$P(0;0)$"
          ],
          "dapAn": "A",
          "loiGiai": "Thay $x=1$: $y=1-3+2=0$ nên $N(1;0)$ thuộc đồ thị. (Với $x=-1$: $y=4$; $x=2$: $y=4$; $x=0$: $y=2$.)",
          "chuyenDe": "Khảo sát và vẽ đồ thị",
          "mucDo": "NB"
        },
        {
          "de": "Đồ thị hàm số $y=\dfrac{x^2+2x+2}{x+1}$ có tiệm cận xiên là đường thẳng",
          "luaChon": [
            "$y=x+1$",
            "$y=2x-1$",
            "$y=x-1$",
            "$y=x$"
          ],
          "dapAn": "A",
          "loiGiai": "$y=x+1+\dfrac{1}{x+1}$ và $\lim\limits_{x\to\pm\infty}\dfrac{1}{x+1}=0$ nên tiệm cận xiên là $y=x+1$.",
          "chuyenDe": "Đường tiệm cận",
          "mucDo": "NB"
        },
        {
          "de": "Cho hàm số bậc ba $y=f(x)$ có đồ thị như hình bên. Giá trị cực tiểu của hàm số bằng",
          "luaChon": [
            "$2$",
            "$0$",
            "$1$",
            "$-2$"
          ],
          "dapAn": "D",
          "loiGiai": "Từ đồ thị, hàm số đạt cực tiểu tại $x=0$, giá trị cực tiểu $y_{CT}=-2$.",
          "chuyenDe": "Cực trị",
          "mucDo": "NB",
          "hinh": {
            "src": "hinh/2026-gk1-thpt-quang-tri/p1q4.png",
            "rong": 247
          }
        },
        {
          "de": "Cho hàm số $y=f(x)$ có bảng biến thiên trên đoạn $[0;3]$ như sau. Giá trị nhỏ nhất của hàm số $y=f(x)$ trên đoạn $[0;3]$ là",
          "luaChon": [
            "$1$",
            "$0$",
            "$-4$",
            "$4$"
          ],
          "dapAn": "C",
          "loiGiai": "Từ bảng biến thiên, $\min\limits_{[0;3]}f(x)=f(1)=-4$.",
          "chuyenDe": "GTLN – GTNN",
          "mucDo": "NB",
          "hinh": {
            "src": "hinh/2026-gk1-thpt-quang-tri/p1q5.png",
            "rong": 362
          }
        },
        {
          "de": "Đồ thị hàm số $y=x^3-3x$ nhận điểm nào sau đây làm tâm đối xứng?",
          "luaChon": [
            "$N(2;2)$",
            "$M(2;0)$",
            "$I(-1;0)$",
            "$O(0;0)$"
          ],
          "dapAn": "D",
          "loiGiai": "$y''=6x=0\Leftrightarrow x=0$, $y(0)=0$. Tâm đối xứng của đồ thị hàm bậc ba là điểm $O(0;0)$.",
          "chuyenDe": "Khảo sát và vẽ đồ thị",
          "mucDo": "NB"
        },
        {
          "de": "Giá trị lớn nhất của hàm số $y=x^4-x^2+2$ trên đoạn $[0;3]$ bằng",
          "luaChon": [
            "$\dfrac74$",
            "$74$",
            "$0$",
            "$68$"
          ],
          "dapAn": "B",
          "loiGiai": "$y'=4x^3-2x=0\Leftrightarrow x=0$ hoặc $x=\dfrac{1}{\sqrt2}$ (trên $[0;3]$). $y(0)=2$, $y\left(\tfrac{1}{\sqrt2}\right)=\dfrac74$, $y(3)=81-9+2=74$. Vậy giá trị lớn nhất là $74$.",
          "chuyenDe": "GTLN – GTNN",
          "mucDo": "TH"
        },
        {
          "de": "Cho hàm số $y=f(x)$ liên tục trên $\mathbb R$ có bảng xét dấu $f'(x)$ như hình vẽ. Hàm số đã cho nghịch biến trên khoảng nào dưới đây?",
          "luaChon": [
            "$(2;+\infty)$",
            "$(-\infty;0)$",
            "$(0;2)$",
            "$(-2;0)$"
          ],
          "dapAn": "C",
          "loiGiai": "Từ bảng xét dấu, $f'(x)<0$ trên $(-\infty;-2)$ và $(0;2)$. Vậy hàm số nghịch biến trên $(0;2)$.",
          "chuyenDe": "Tính đơn điệu",
          "mucDo": "NB",
          "hinh": {
            "src": "hinh/2026-gk1-thpt-quang-tri/p1q8.png",
            "rong": 369
          }
        },
        {
          "de": "Cho hàm số $f(x)$ có đạo hàm $f'(x)=x(x-1)^2(x-2),\ \forall x\in\mathbb R$. Số điểm cực đại của hàm số đã cho là",
          "luaChon": [
            "$3$",
            "$1$",
            "$2$",
            "$5$"
          ],
          "dapAn": "B",
          "loiGiai": "$f'(x)$ chỉ đổi dấu tại $x=0$ và $x=2$ (tại $x=1$ là nghiệm kép, không đổi dấu). $f'>0$ trên $(-\infty;0)$, $f'<0$ trên $(0;2)$, $f'>0$ trên $(2;+\infty)$. Vậy hàm số có $1$ điểm cực đại là $x=0$.",
          "chuyenDe": "Cực trị",
          "mucDo": "TH"
        },
        {
          "de": "Cho hàm số $y=f(x)$ liên tục trên đoạn $[0;3]$ có đồ thị như hình bên. Gọi $M,m$ lần lượt là giá trị lớn nhất và giá trị nhỏ nhất của hàm số trên đoạn $[0;3]$. Tính $2M+m$.",
          "luaChon": [
            "$-1$",
            "$4$",
            "$2$",
            "$-4$"
          ],
          "dapAn": "A",
          "loiGiai": "Từ đồ thị, $M=f(1)=1$, $m=f(3)=-3$. Vậy $2M+m=2-3=-1$.",
          "chuyenDe": "GTLN – GTNN",
          "mucDo": "NB",
          "hinh": {
            "src": "hinh/2026-gk1-thpt-quang-tri/p1q10.png",
            "rong": 200
          }
        },
        {
          "de": "Đồ thị hàm số $y=\dfrac{3x+2}{-x+1}$ có đường tiệm cận đứng và đường tiệm cận ngang lần lượt là:",
          "luaChon": [
            "$x=1;\ y=-3$",
            "$x=1;\ y=3$",
            "$x=-3;\ y=1$",
            "$x=3;\ y=1$"
          ],
          "dapAn": "A",
          "loiGiai": "Mẫu bằng $0$ khi $x=1$ nên tiệm cận đứng $x=1$; $\lim\limits_{x\to\pm\infty}y=\dfrac{3}{-1}=-3$ nên tiệm cận ngang $y=-3$.",
          "chuyenDe": "Đường tiệm cận",
          "mucDo": "NB"
        },
        {
          "de": "Biết $\lim\limits_{x\to-\infty}f(x)=9$. Đường thẳng nào sau đây là đường tiệm cận ngang của đồ thị hàm số $y=f(x)$?",
          "luaChon": [
            "$y=9$",
            "$x=9$",
            "$y=0$",
            "$y=1$"
          ],
          "dapAn": "A",
          "loiGiai": "Theo định nghĩa, $\lim\limits_{x\to-\infty}f(x)=9$ nên $y=9$ là tiệm cận ngang.",
          "chuyenDe": "Đường tiệm cận",
          "mucDo": "NB"
        }
      ]
    },
    {
      "loai": "dungsai",
      "tieuDe": "PHẦN II. Câu trắc nghiệm đúng sai",
      "huongDan": "Thí sinh trả lời từ câu 1 đến câu 4. Trong mỗi ý a), b), c), d) ở mỗi câu, thí sinh chọn Đúng hoặc Sai.",
      "cauHoi": [
        {
          "de": "Cho hàm số $y=\dfrac{x^2+x+2}{x-1}$.",
          "y": [
            {
              "noiDung": "Hai điểm cực trị của đồ thị cùng nằm trên đường thẳng $5x-4y=2$.",
              "dapAn": false
            },
            {
              "noiDung": "Đồ thị hàm số có tiệm cận đứng $x=1$.",
              "dapAn": true
            },
            {
              "noiDung": "Đồ thị hàm số có tiệm cận xiên $y=x$.",
              "dapAn": false
            },
            {
              "noiDung": "Đồ thị hàm số cắt trục hoành tại hai điểm phân biệt.",
              "dapAn": false
            }
          ],
          "loiGiai": "Ta có $y=x+2+\dfrac{4}{x-1}$, $y'=1-\dfrac{4}{(x-1)^2}=0\Leftrightarrow x=-1$ hoặc $x=3$.<br>a) Hai điểm cực trị $(-1;-1)$ và $(3;7)$. Thay $(3;7)$: $15-28=-13\ne2$. <b>Sai.</b><br>b) $\lim\limits_{x\to1^+}y=+\infty$ nên tiệm cận đứng $x=1$. <b>Đúng.</b><br>c) Tiệm cận xiên là $y=x+2$. <b>Sai.</b><br>d) $x^2+x+2=0$ có $\Delta=1-8<0$ nên đồ thị không cắt trục hoành. <b>Sai.</b>",
          "chuyenDe": "Khảo sát và vẽ đồ thị",
          "mucDo": "TH"
        },
        {
          "de": "Cho hàm số $y=f(x)=\dfrac{ax+b}{cx+1}$ với $c\ne0$, $a,b,c\in\mathbb R$ có đồ thị như hình vẽ bên.",
          "y": [
            {
              "noiDung": "Tổng $a+b+c=2$.",
              "dapAn": false
            },
            {
              "noiDung": "Hàm số $y=f(x)$ nghịch biến trên khoảng $(-\infty;1)$ và $(1;+\infty)$.",
              "dapAn": true
            },
            {
              "noiDung": "Đồ thị hàm số $y=f(x)$ có đường tiệm cận đứng là $y=1$ và đường tiệm cận ngang là $x=-1$.",
              "dapAn": false
            },
            {
              "noiDung": "Đạo hàm: $f'(x)<0,\ \forall x\in\mathbb R\setminus\{1\}$.",
              "dapAn": true
            }
          ],
          "loiGiai": "Từ đồ thị: tiệm cận đứng $x=1$, tiệm cận ngang $y=-1$, đồ thị đi qua $(0;-2)$.<br>$-\dfrac1c=1\Rightarrow c=-1$; $\dfrac ac=-1\Rightarrow a=1$; $f(0)=b=-2$. Vậy $f(x)=\dfrac{x-2}{-x+1}$.<br>a) $a+b+c=1-2-1=-2$. <b>Sai.</b><br>b) Từ đồ thị (hoặc $f'(x)=\dfrac{-1}{(-x+1)^2}<0$), hàm số nghịch biến trên từng khoảng. <b>Đúng.</b><br>c) Tiệm cận đứng là $x=1$, tiệm cận ngang là $y=-1$. <b>Sai.</b><br>d) $f'(x)=\dfrac{a-bc}{(cx+1)^2}=\dfrac{-1}{(1-x)^2}<0$ với mọi $x\ne1$. <b>Đúng.</b>",
          "chuyenDe": "Khảo sát và vẽ đồ thị",
          "mucDo": "TH",
          "hinh": {
            "src": "hinh/2026-gk1-thpt-quang-tri/p2q2.png",
            "rong": 194
          }
        },
        {
          "de": "Cho hàm số $y=f(x)$ có bảng biến thiên như hình vẽ dưới đây.",
          "y": [
            {
              "noiDung": "Hàm số đồng biến trên khoảng $(0;1)$.",
              "dapAn": true
            },
            {
              "noiDung": "Hàm số đã cho đạt cực tiểu tại $x=0$.",
              "dapAn": true
            },
            {
              "noiDung": "Giá trị lớn nhất của hàm số đã cho trên đoạn $[0;2]$ bằng $3$.",
              "dapAn": true
            },
            {
              "noiDung": "Giá trị nhỏ nhất của hàm số đã cho trên khoảng $(-\infty;-1)$ bằng $0$.",
              "dapAn": false
            }
          ],
          "loiGiai": "a) $y'>0$ trên $(0;2)\supset(0;1)$. <b>Đúng.</b><br>b) $y'$ đổi dấu từ $-$ sang $+$ tại $x=0$. <b>Đúng.</b><br>c) Trên $[0;2]$ hàm số đồng biến nên $\max\limits_{[0;2]}f(x)=f(2)=3$. <b>Đúng.</b><br>d) Trên $(-\infty;-1)$ hàm số nghịch biến và đây là khoảng mở bên phải, nên hàm số không có giá trị nhỏ nhất trên khoảng này. <b>Sai.</b>",
          "chuyenDe": "GTLN – GTNN",
          "mucDo": "TH",
          "hinh": {
            "src": "hinh/2026-gk1-thpt-quang-tri/p2q3.png",
            "rong": 408
          }
        },
        {
          "de": "Cho hàm số $y=f(x)=x^3-3x+2$.",
          "y": [
            {
              "noiDung": "Đồ thị hàm số đã cho có tâm đối xứng là $(0;2)$.",
              "dapAn": true
            },
            {
              "noiDung": "Đạo hàm của hàm số đã cho là $f'(x)=3x^2-3$.",
              "dapAn": true
            },
            {
              "noiDung": "Hàm số đã cho đồng biến trên khoảng $(-1;1)$.",
              "dapAn": false
            },
            {
              "noiDung": "Giá trị lớn nhất của $f(x)$ trên khoảng $(-\infty;0)$ bằng $4$.",
              "dapAn": true
            }
          ],
          "loiGiai": "a) $f''(x)=6x=0\Leftrightarrow x=0$, $f(0)=2$ nên tâm đối xứng là $(0;2)$. <b>Đúng.</b><br>b) $f'(x)=3x^2-3$. <b>Đúng.</b><br>c) $f'(x)<0$ trên $(-1;1)$ nên hàm số nghịch biến trên khoảng này. <b>Sai.</b><br>d) Trên $(-\infty;0)$: $f$ đồng biến trên $(-\infty;-1)$, nghịch biến trên $(-1;0)$ nên $\max f=f(-1)=-1+3+2=4$. <b>Đúng.</b>",
          "chuyenDe": "Khảo sát và vẽ đồ thị",
          "mucDo": "TH"
        }
      ]
    },
    {
      "loai": "traloingan",
      "tieuDe": "PHẦN III. Câu trắc nghiệm trả lời ngắn",
      "huongDan": "Thí sinh trả lời từ câu 1 đến câu 6. Ghi kết quả là một số; dùng dấu phẩy hoặc dấu chấm đều được (ví dụ 39,5).",
      "cauHoi": [
        {
          "de": "Cho hàm số $y=\dfrac{ax^2+bx+c}{x+n}$ có đồ thị trong hình dưới. Trong các số $a,b,c,n$ có bao nhiêu số dương?",
          "dapAn": "4",
          "loiGiai": "Tiệm cận đứng $x=-n$ nằm bên trái trục $Oy$ nên $-n<0\Rightarrow n>0$.<br>Tiệm cận xiên đi lên nên hệ số góc $a>0$.<br>Đồ thị cắt trục hoành tại hai điểm có hoành độ âm, tức phương trình $ax^2+bx+c=0$ có hai nghiệm âm: tổng $-\dfrac ba<0\Rightarrow b>0$, tích $\dfrac ca>0\Rightarrow c>0$.<br>Vậy cả $4$ số đều dương.",
          "chuyenDe": "Khảo sát và vẽ đồ thị",
          "mucDo": "VD",
          "hinh": {
            "src": "hinh/2026-gk1-thpt-quang-tri/p3q1.png",
            "rong": 261
          }
        },
        {
          "de": "Ông An có một mảnh vườn hình thang vuông $ABCD$ như hình vẽ. Biết độ dài các cạnh $AB=BC=20$ m, $AD=40$ m. Ông An dự định xây một ngôi nhà trên một phần đất dạng hình chữ nhật $MNPQ$ trong vườn, với cạnh $PQ$ nằm trên cạnh $AD$. Tích khoảng cách từ điểm $M$ đến hai đường thẳng $AB, CD$ và tích khoảng cách từ điểm $N$ đến hai đường thẳng $AB, CD$ đều bằng $100\sqrt2$ m². Hãy tính diện tích lớn nhất của $MNPQ$ theo đơn vị mét vuông (làm tròn kết quả đến hàng đơn vị).",
          "dapAn": "120",
          "loiGiai": "Chọn hệ trục với $A(0;0)$, $D(40;0)$, $B(0;20)$, $C(20;20)$. Đường thẳng $CD$: $x+y-40=0$.<br>Điểm $(x;h)$ có khoảng cách đến $AB$ là $x$, đến $CD$ là $\dfrac{40-x-h}{\sqrt2}$. Điều kiện: $x(40-h-x)=200$, tức $x^2-(40-h)x+200=0$.<br>Hoành độ $x_M, x_N$ là hai nghiệm của phương trình này nên $MN=x_N-x_M=\sqrt{(40-h)^2-800}$.<br>Diện tích $S(h)=h\sqrt{(40-h)^2-800}$ với $0<h<40-20\sqrt2$.<br>Đặt $u=40-h$: $S'=0\Leftrightarrow u^2-800=hu\Leftrightarrow u^2-20u-400=0\Leftrightarrow u=10+10\sqrt5$, tức $h=30-10\sqrt5\approx7{,}64$.<br>Khi đó $S_{\max}\approx120{,}11\approx120$ m².",
          "chuyenDe": "Ứng dụng đạo hàm vào thực tế",
          "mucDo": "VDC",
          "hinh": {
            "src": "hinh/2026-gk1-thpt-quang-tri/p3q2.png",
            "rong": 326
          }
        },
        {
          "de": "Một doanh nghiệp thủy sản A ở Việt Nam chuyên xuất khẩu hải sản sang một công ty B ở nước ngoài. Theo hợp đồng, mỗi tháng doanh nghiệp A sẽ xuất khẩu $x$ tấn hải sản $(0<x\le120)$. Nếu số lượng đặt hàng là $x$ tấn hải sản thì giá bán cho mỗi tấn hải sản là $p(x)=46-0{,}002x^2$ (triệu đồng). Chi phí để doanh nghiệp chế biến và xuất khẩu hải sản gồm $140$ triệu đồng chi phí cố định và $31$ triệu đồng cho mỗi tấn hải sản. Hỏi doanh nghiệp có thể đạt được lợi nhuận cao nhất là bao nhiêu triệu đồng mỗi tháng từ hoạt động xuất khẩu này (làm tròn kết quả đến hàng đơn vị)?",
          "dapAn": "360",
          "loiGiai": "Lợi nhuận $L(x)=x(46-0{,}002x^2)-(140+31x)=-0{,}002x^3+15x-140$.<br>$L'(x)=-0{,}006x^2+15=0\Leftrightarrow x=50$ (vì $x>0$). $L'$ đổi dấu từ $+$ sang $-$ tại $x=50$.<br>$L(50)=-250+750-140=360$. Vậy lợi nhuận cao nhất là $360$ triệu đồng.",
          "chuyenDe": "Ứng dụng đạo hàm vào thực tế",
          "mucDo": "VD"
        },
        {
          "de": "Trong hệ trục tọa độ $Oxy$ (mỗi đơn vị ứng với $50$ m), một chiếc thuyền di chuyển từ $A\left(8;\tfrac94\right)$ đến $B(-1;0)$ theo cung $AB$ thuộc đồ thị hàm số $y=\dfrac{ax+b}{cx+d}$ $(C)$, $H(0;1)\in(C)$. Gọi $M$ là một điểm bất kỳ nằm trên cung đường di chuyển của chiếc thuyền. Hỏi khoảng cách từ $M$ đến $O$ ngắn nhất bằng bao nhiêu mét (không làm tròn ở các phép tính trung gian và làm tròn kết quả cuối cùng đến hàng phần mười)?",
          "dapAn": "39,5",
          "loiGiai": "Đồ thị qua $B(-1;0)$, $H(0;1)$, $A\left(8;\tfrac94\right)$ nên tìm được $y=\dfrac{8(x+1)}{3x+8}$.<br>Đồ thị là hyperbol vuông có tâm $I\left(-\tfrac83;\tfrac83\right)$ nằm trên đường $y=-x$, nên điểm gần $O$ nhất nằm trên đường $y=-x$: $\dfrac{8(x+1)}{3x+8}=-x\Leftrightarrow3x^2+16x+8=0\Rightarrow x=\dfrac{-8+2\sqrt{10}}{3}$ (thuộc cung $AB$).<br>Khi đó $OM_{\min}=|x|\sqrt2=\dfrac{(8-2\sqrt{10})\sqrt2}{3}\approx0{,}7898$ đơn vị, tức $\approx39{,}5$ m.",
          "chuyenDe": "GTLN – GTNN",
          "mucDo": "VDC",
          "hinh": {
            "src": "hinh/2026-gk1-thpt-quang-tri/p3q4.png",
            "rong": 384
          }
        },
        {
          "de": "Gọi $m, n$ lần lượt là giá trị cực đại, giá trị cực tiểu của hàm số $y=-x^3+3x^2-1$. Tính giá trị biểu thức $P=m^2+n^2$.",
          "dapAn": "10",
          "loiGiai": "$y'=-3x^2+6x=0\Leftrightarrow x=0$ hoặc $x=2$. Hàm số đạt cực tiểu tại $x=0$: $n=-1$; đạt cực đại tại $x=2$: $m=-8+12-1=3$. Vậy $P=9+1=10$.",
          "chuyenDe": "Cực trị",
          "mucDo": "TH"
        },
        {
          "de": "Để thiết lập hệ thống liên lạc giữa hai đảo $A$ và $B$, người ta dự định lắp đặt đường dây nối từ mỗi đảo đến một trạm trung gian $C$ đặt trên bờ biển như hình vẽ. Biết đảo $A$ cách bờ là $4$ km và đảo $B$ cách bờ là $6$ km, khoảng cách giữa hai hình chiếu vuông góc của hai đảo lên bờ là $12$ km. Chi phí lắp đặt cho $1$ km dây tính từ đảo $A$ vào bờ là $10$ triệu đồng, chi phí lắp đặt cho $1$ km dây tính từ đảo $B$ vào bờ là $20$ triệu đồng. Hãy xác định theo đơn vị triệu đồng chi phí lắp đặt thấp nhất (làm tròn kết quả đến hàng đơn vị).",
          "dapAn": "233",
          "loiGiai": "Đặt $CH=x$ km $(0\le x\le12)$. Chi phí $T(x)=10\sqrt{x^2+16}+20\sqrt{(12-x)^2+36}$.<br>$T'(x)=\dfrac{10x}{\sqrt{x^2+16}}-\dfrac{20(12-x)}{\sqrt{(12-x)^2+36}}$; $T'$ đồng biến trên $[0;12]$, $T'(0)<0<T'(12)$ nên $T'$ có đúng một nghiệm $x_0\approx8{,}92$, tại đó $T$ đạt nhỏ nhất.<br>$T_{\min}=T(x_0)\approx232{,}65\approx233$ triệu đồng.",
          "chuyenDe": "Ứng dụng đạo hàm vào thực tế",
          "mucDo": "VDC",
          "hinh": {
            "src": "hinh/2026-gk1-thpt-quang-tri/p3q6.png",
            "rong": 354
          }
        }
      ]
    }
  ]
}
`);
