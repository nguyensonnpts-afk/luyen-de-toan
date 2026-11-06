// Đề: Giữa học kì I – THPT Chuyên Chu Văn An (Hà Nội)
// Xem HUONG-DAN.md để biết cách viết file đề.
themDe(String.raw`
{
  "id": "2026-gk1-chu-van-an",
  "tieuDe": "Giữa học kì I – THPT Chuyên Chu Văn An (Hà Nội)",
  "loai": "Giữa kì I",
  "nam": "2026-2027",
  "lop": 12,
  "nguon": "Đề chính thức, mã đề 0112. Lời giải tham khảo theo TOANMATH.com.",
  "thoiGian": 90,
  "phan": [
    {
      "loai": "tracnghiem",
      "tieuDe": "PHẦN I. Câu trắc nghiệm nhiều phương án lựa chọn",
      "huongDan": "Học sinh trả lời từ câu 1 đến câu 12. Mỗi câu hỏi học sinh chỉ chọn một phương án.",
      "cauHoi": [
        {
          "de": "Cho hình chóp $S.ABCD$ có đáy là hình bình hành tâm $O$. Tổng $\overrightarrow{SA}+\overrightarrow{SB}+\overrightarrow{SC}+\overrightarrow{SD}$ bằng",
          "luaChon": [
            "$\vec{0}$",
            "$4\overrightarrow{SO}$",
            "$2\overrightarrow{SO}$",
            "$\overrightarrow{SO}$"
          ],
          "dapAn": "B",
          "loiGiai": "Vì $O$ là trung điểm của $AC$ và $BD$ nên $\overrightarrow{SA}+\overrightarrow{SC}=2\overrightarrow{SO}$, $\overrightarrow{SB}+\overrightarrow{SD}=2\overrightarrow{SO}$. Suy ra tổng bằng $4\overrightarrow{SO}$.",
          "hinh": {
            "src": "hinh/2026-gk1-chu-van-an/p1q1.png",
            "rong": 256
          },
          "chuyenDe": "Vectơ trong không gian",
          "mucDo": "NB"
        },
        {
          "de": "Cho hình lăng trụ $ABC.A'B'C'$. Đặt $\overrightarrow{AA'}=\vec{a}$, $\overrightarrow{AB}=\vec{b}$, $\overrightarrow{AC}=\vec{c}$. Khẳng định nào sau đây là đúng?",
          "luaChon": [
            "$\overrightarrow{B'C}=-\vec{a}+\vec{b}-\vec{c}$",
            "$\overrightarrow{B'C}=-\vec{a}-\vec{b}+\vec{c}$",
            "$\overrightarrow{B'C}=\vec{a}+\vec{b}-\vec{c}$",
            "$\overrightarrow{B'C}=\vec{a}+\vec{b}+\vec{c}$"
          ],
          "dapAn": "B",
          "loiGiai": "$\overrightarrow{B'C}=\overrightarrow{B'B}+\overrightarrow{BC}=-\overrightarrow{AA'}+\overrightarrow{AC}-\overrightarrow{AB}=-\vec{a}-\vec{b}+\vec{c}$.",
          "hinh": {
            "src": "hinh/2026-gk1-chu-van-an/p1q2.png",
            "rong": 224
          },
          "chuyenDe": "Vectơ trong không gian",
          "mucDo": "TH"
        },
        {
          "de": "Cho hàm số $y=2x+1+\dfrac{3}{x+3}$ có đồ thị là $(C)$. Khoảng cách từ điểm $M(2;-1)$ đến tiệm cận xiên của đồ thị $(C)$ là",
          "luaChon": [
            "$2$",
            "$\dfrac{6}{\sqrt5}$",
            "$3$",
            "$\dfrac{4}{\sqrt5}$"
          ],
          "dapAn": "B",
          "loiGiai": "Vì $\lim\limits_{x\to\pm\infty}\left[y-(2x+1)\right]=\lim\limits_{x\to\pm\infty}\dfrac{3}{x+3}=0$ nên tiệm cận xiên là $y=2x+1$ hay $2x-y+1=0$. Khoảng cách $d=\dfrac{|2\cdot2-(-1)+1|}{\sqrt{2^2+(-1)^2}}=\dfrac{6}{\sqrt5}$.",
          "chuyenDe": "Đường tiệm cận",
          "mucDo": "TH"
        },
        {
          "de": "Trong không gian, cho hai vectơ $\vec a$, $\vec b$ thoả mãn $|\vec a|=3$; $|\vec b|=2$ và $\vec a\cdot\vec b=-3$. Góc $\alpha$ là góc giữa hai vectơ $\vec a$ và $\vec b$. Khẳng định nào sau đây là đúng?",
          "luaChon": [
            "$\alpha=30^\circ$",
            "$\alpha=45^\circ$",
            "$\alpha=60^\circ$",
            "$\alpha=120^\circ$"
          ],
          "dapAn": "D",
          "loiGiai": "$\cos\alpha=\dfrac{\vec a\cdot\vec b}{|\vec a|\cdot|\vec b|}=\dfrac{-3}{3\cdot2}=-\dfrac12\Rightarrow\alpha=120^\circ$.",
          "chuyenDe": "Vectơ trong không gian",
          "mucDo": "NB"
        },
        {
          "de": "Cho hàm số $y=f(x)=\dfrac{ax+b}{cx+d}$ $(c\ne0;\ ad-bc\ne0)$ có bảng biến thiên như hình dưới. Đường tiệm cận đứng của đồ thị hàm số là",
          "luaChon": [
            "$y=2$",
            "$x=2$",
            "$y=-1$",
            "$x=-1$"
          ],
          "dapAn": "D",
          "loiGiai": "Từ bảng biến thiên, $\lim\limits_{x\to-1^-}y=+\infty$ nên đường tiệm cận đứng là $x=-1$.",
          "hinh": {
            "src": "hinh/2026-gk1-chu-van-an/p1q5.png",
            "rong": 349
          },
          "chuyenDe": "Đường tiệm cận",
          "mucDo": "NB"
        },
        {
          "de": "Cho hàm số đa thức bậc ba $y=f(x)$ có đồ thị như hình vẽ. Số điểm cực tiểu của hàm số $y=f(x)$ là",
          "luaChon": [
            "$1$",
            "$0$",
            "$3$",
            "$2$"
          ],
          "dapAn": "A",
          "loiGiai": "Từ đồ thị, hàm số đạt cực tiểu tại $x=-1$ và đạt cực đại tại $x=1$. Vậy hàm số có $1$ điểm cực tiểu.",
          "hinh": {
            "src": "hinh/2026-gk1-chu-van-an/p1q6.png",
            "rong": 214
          },
          "chuyenDe": "Cực trị",
          "mucDo": "NB"
        },
        {
          "de": "Cho hàm số $y=f(x)$ liên tục trên đoạn $[-1;3]$ và có đồ thị như hình bên dưới. Gọi $M$ và $m$ lần lượt là giá trị lớn nhất và giá trị nhỏ nhất của hàm số $f(x)$ trên đoạn $[-1;3]$. Giá trị của $M+m$ bằng",
          "luaChon": [
            "$4$",
            "$3$",
            "$2$",
            "$0$"
          ],
          "dapAn": "C",
          "loiGiai": "Từ đồ thị, $M=f(-1)=3$, $m=f(0)=-1$. Suy ra $M+m=2$.",
          "hinh": {
            "src": "hinh/2026-gk1-chu-van-an/p1q7.png",
            "rong": 251
          },
          "chuyenDe": "GTLN – GTNN",
          "mucDo": "NB"
        },
        {
          "de": "Đồ thị hàm số $y=x^3-3x+2026$ có hai điểm cực trị là $A$, $B$. Độ dài đoạn thẳng $AB$ bằng",
          "luaChon": [
            "$2\sqrt5$",
            "$2\sqrt{13}$",
            "$5\sqrt2$",
            "$5\sqrt{13}$"
          ],
          "dapAn": "A",
          "loiGiai": "$y'=3x^2-3=0\Leftrightarrow x=\pm1$. $y(-1)=2028$, $y(1)=2024$ nên $A(-1;2028)$, $B(1;2024)$. $AB=\sqrt{2^2+(-4)^2}=\sqrt{20}=2\sqrt5$.",
          "chuyenDe": "Cực trị",
          "mucDo": "TH"
        },
        {
          "de": "Cho hàm số $y=f(x)=\dfrac{x+2026}{2x-1}$ có đồ thị $(C)$. Tổng số đường tiệm cận đứng và tiệm cận ngang của đồ thị $(C)$ là",
          "luaChon": [
            "$3$",
            "$1$",
            "$0$",
            "$2$"
          ],
          "dapAn": "D",
          "loiGiai": "$\lim\limits_{x\to\pm\infty}y=\dfrac12$ nên $y=\dfrac12$ là tiệm cận ngang; $\lim\limits_{x\to\frac12^+}y=+\infty$ nên $x=\dfrac12$ là tiệm cận đứng. Vậy có $2$ đường.",
          "chuyenDe": "Đường tiệm cận",
          "mucDo": "NB"
        },
        {
          "de": "Cho hàm số đa thức bậc bốn $y=f(x)$ có bảng biến thiên như sau. Hàm số đã cho đồng biến trên khoảng nào dưới đây?",
          "luaChon": [
            "$(-1;0)$",
            "$(0;1)$",
            "$(-1;4)$",
            "$(-1;+\infty)$"
          ],
          "dapAn": "A",
          "loiGiai": "Từ bảng biến thiên, $f'(x)>0$ trên các khoảng $(-1;0)$ và $(1;+\infty)$ nên hàm số đồng biến trên $(-1;0)$.",
          "hinh": {
            "src": "hinh/2026-gk1-chu-van-an/p1q10.png",
            "rong": 545
          },
          "chuyenDe": "Tính đơn điệu",
          "mucDo": "NB"
        },
        {
          "de": "Cho hàm số $y=f(x)$ liên tục và có bảng biến thiên trên đoạn $[-1;3]$ như hình dưới. Khẳng định nào đúng?",
          "luaChon": [
            "$\min\limits_{[-1;3]}f(x)=5$",
            "$\min\limits_{[-1;3]}f(x)=0$",
            "$\min\limits_{[-1;3]}f(x)=4$",
            "$\min\limits_{[-1;3]}f(x)=1$"
          ],
          "dapAn": "B",
          "loiGiai": "Từ bảng biến thiên, $\min\limits_{[-1;3]}f(x)=f(-1)=0$.",
          "hinh": {
            "src": "hinh/2026-gk1-chu-van-an/p1q11.png",
            "rong": 397
          },
          "chuyenDe": "GTLN – GTNN",
          "mucDo": "NB"
        },
        {
          "de": "Giá trị nhỏ nhất của hàm số $y=x^3+3x+2$ trên đoạn $[-3;2]$ là",
          "luaChon": [
            "$-16$",
            "$-43$",
            "$-20$",
            "$-34$"
          ],
          "dapAn": "D",
          "loiGiai": "$y'=3x^2+3>0,\ \forall x\in\mathbb R$ nên hàm số đồng biến trên $[-3;2]$. Suy ra $\min\limits_{[-3;2]}y=y(-3)=-27-9+2=-34$.",
          "chuyenDe": "GTLN – GTNN",
          "mucDo": "TH"
        }
      ]
    },
    {
      "loai": "dungsai",
      "tieuDe": "PHẦN II. Câu trắc nghiệm đúng sai",
      "huongDan": "Học sinh trả lời từ câu 1 đến câu 4. Trong mỗi ý a), b), c), d) ở mỗi câu, học sinh chọn Đúng hoặc Sai.",
      "cauHoi": [
        {
          "de": "Khi bỏ qua sức cản của không khí, độ cao (mét) của một vật được phóng thẳng đứng lên trên từ điểm cách mặt đất $2$ m với vận tốc ban đầu $24{,}5$ m/s là $h(t)=2+24{,}5t-4{,}9t^2$ (theo <i>Vật lí đại cương</i>, NXB Giáo dục Việt Nam, 2016), $t$ là thời gian được tính bằng giây.",
          "y": [
            {
              "noiDung": "Phương trình vận tốc của vật theo thời gian là $v(t)=24{,}5-9{,}8t$.",
              "dapAn": true
            },
            {
              "noiDung": "Độ cao lớn nhất mà vật đạt được so với mặt đất là $30$ m.",
              "dapAn": false
            },
            {
              "noiDung": "Tại thời điểm $t=5$ giây, vật đã chạm đất.",
              "dapAn": false
            },
            {
              "noiDung": "Vận tốc của vật sau $2$ giây kể từ lúc phóng là $4{,}9$ m/s.",
              "dapAn": true
            }
          ],
          "loiGiai": "a) $v(t)=h'(t)=24{,}5-9{,}8t$. <b>Đúng.</b><br>b) $v(t)=0\Leftrightarrow t=2{,}5$; độ cao lớn nhất là $h(2{,}5)=2+24{,}5\cdot2{,}5-4{,}9\cdot2{,}5^2=32{,}625$ (m) $\ne30$ (m). <b>Sai.</b><br>c) $h(5)=2+24{,}5\cdot5-4{,}9\cdot5^2=2>0$ nên tại $t=5$ giây vật chưa chạm đất. <b>Sai.</b><br>d) $v(2)=24{,}5-9{,}8\cdot2=4{,}9$ (m/s). <b>Đúng.</b>",
          "chuyenDe": "Ứng dụng đạo hàm vào thực tế",
          "mucDo": "TH"
        },
        {
          "de": "Cho hàm số $y=f(x)$ có đạo hàm trên tập $\mathbb R$. Hàm số $y=f'(x)$ có đồ thị như hình dưới đây:",
          "y": [
            {
              "noiDung": "Đồ thị hàm số $y=f(x)$ đạt cực đại tại điểm có hoành độ âm.",
              "dapAn": true
            },
            {
              "noiDung": "Hàm số $g(x)=f(x+1)-x$ đồng biến trên khoảng $(-1;0)$.",
              "dapAn": false
            },
            {
              "noiDung": "Hàm số $y=f(x)$ đồng biến trên khoảng $(0;1)$.",
              "dapAn": false
            },
            {
              "noiDung": "Hàm số $y=f(x)$ có hai điểm cực trị.",
              "dapAn": true
            }
          ],
          "loiGiai": "Từ đồ thị, $f'(x)=0$ tại $x=x_1\in(-1;0)$ và $x=x_2\in(0;1)$; $f'(x)>0$ trên $(-\infty;x_1)$ và $(x_2;+\infty)$; $f'(x)<0$ trên $(x_1;x_2)$.<br>a) $f'(x)$ đổi dấu từ dương sang âm khi qua $x_1<0$ nên hàm số đạt cực đại tại điểm có hoành độ âm. <b>Đúng.</b><br>b) $g'(x)=f'(x+1)-1$. Với $x\in(-1;0)$ thì $x+1\in(0;1)$, trên đó đồ thị $f'$ nằm dưới đường thẳng $y=1$ nên $g'(x)<0$, $g$ nghịch biến. <b>Sai.</b><br>c) Trên $(0;x_2)$ có $f'(x)<0$ nên hàm số không đồng biến trên $(0;1)$. <b>Sai.</b><br>d) $f'(x)$ đổi dấu khi qua $x_1$ và $x_2$ nên hàm số có hai điểm cực trị. <b>Đúng.</b>",
          "hinh": {
            "src": "hinh/2026-gk1-chu-van-an/p2q2.png",
            "rong": 305
          },
          "chuyenDe": "Tính đơn điệu",
          "mucDo": "VD"
        },
        {
          "de": "Cho hàm số $y=f(x)=\dfrac{ax+1}{bx+c}$ $(a,b,c\in\mathbb R;\ b\ne0;\ ac-b\ne0)$ có bảng biến thiên như hình dưới đây.",
          "y": [
            {
              "noiDung": "Đường tiệm cận đứng và đường tiệm cận ngang của đồ thị hàm số lần lượt là $x=-1$; $y=2$.",
              "dapAn": true
            },
            {
              "noiDung": "Biết $f(0)=1$, khi đó $a-b-c=0$.",
              "dapAn": true
            },
            {
              "noiDung": "$y'>0,\ \forall x\in\mathbb R$.",
              "dapAn": false
            },
            {
              "noiDung": "Giá trị nhỏ nhất của hàm số trên khoảng $(-\infty;-1)$ là $2$.",
              "dapAn": false
            }
          ],
          "loiGiai": "a) $\lim\limits_{x\to-1^-}f(x)=+\infty$ nên TCĐ $x=-1$; $\lim\limits_{x\to\pm\infty}f(x)=2$ nên TCN $y=2$. <b>Đúng.</b><br>b) $-\dfrac cb=-1\Rightarrow c=b$; $\dfrac ab=2\Rightarrow a=2b$. Do đó $a-b-c=2b-b-b=0$. <b>Đúng.</b><br>c) Hàm số không xác định tại $x=-1$ nên chỉ có $y'>0,\ \forall x\ne-1$. <b>Sai.</b><br>d) Trên $(-\infty;-1)$ hàm số đồng biến, $f(x)>2$ và $\lim\limits_{x\to-\infty}f(x)=2$ nên không có giá trị nhỏ nhất. <b>Sai.</b>",
          "hinh": {
            "src": "hinh/2026-gk1-chu-van-an/p2q3.png",
            "rong": 403
          },
          "chuyenDe": "Đường tiệm cận",
          "mucDo": "TH"
        },
        {
          "de": "Một chất điểm $A$ nằm trên mặt phẳng nằm ngang $(\alpha)$, chịu tác động bởi ba lực $\overrightarrow{F_1},\overrightarrow{F_2},\overrightarrow{F_3}$. Các lực $\overrightarrow{F_1},\overrightarrow{F_2}$ có giá nằm trong mặt phẳng $(\alpha)$ và góc tạo bởi hai lực này là $\left(\overrightarrow{F_1},\overrightarrow{F_2}\right)=120^\circ$. Lực $\overrightarrow{F_3}$ có giá vuông góc với mặt phẳng $(\alpha)$ và hướng lên trên. Biết độ lớn của các lực $\overrightarrow{F_1},\overrightarrow{F_2},\overrightarrow{F_3}$ lần lượt là $30$ N, $40$ N và $50$ N.",
          "y": [
            {
              "noiDung": "Hợp lực của hai lực $\overrightarrow{F_1}$ và $\overrightarrow{F_2}$ có độ lớn bằng $10\sqrt{13}$ N.",
              "dapAn": true
            },
            {
              "noiDung": "$\overrightarrow{F_1}\cdot\overrightarrow{F_2}=600\ (\mathrm N^2)$.",
              "dapAn": false
            },
            {
              "noiDung": "Cường độ hợp lực của cả ba lực $\overrightarrow{F_1},\overrightarrow{F_2},\overrightarrow{F_3}$ tác dụng lên chất điểm $A$ là $10\sqrt{38}$ N.",
              "dapAn": true
            },
            {
              "noiDung": "Hai lực $\overrightarrow{F_1}$ và $\overrightarrow{F_3}$ có giá vuông góc với nhau.",
              "dapAn": true
            }
          ],
          "loiGiai": "a) $\left|\overrightarrow{F_1}+\overrightarrow{F_2}\right|^2=F_1^2+F_2^2+2F_1F_2\cos120^\circ=900+1600-1200=1300$, suy ra $\left|\overrightarrow{F_1}+\overrightarrow{F_2}\right|=10\sqrt{13}$ (N). <b>Đúng.</b><br>b) $\overrightarrow{F_1}\cdot\overrightarrow{F_2}=30\cdot40\cdot\cos120^\circ=-600$. <b>Sai.</b><br>c) Vì $\overrightarrow{F_3}\perp(\alpha)$ nên $\left|\overrightarrow{F_1}+\overrightarrow{F_2}+\overrightarrow{F_3}\right|^2=1300+2500=3800$, cường độ hợp lực là $10\sqrt{38}$ (N). <b>Đúng.</b><br>d) $\overrightarrow{F_3}$ có giá vuông góc với $(\alpha)$, $\overrightarrow{F_1}$ có giá nằm trong $(\alpha)$ nên hai giá vuông góc. <b>Đúng.</b>",
          "hinh": {
            "src": "hinh/2026-gk1-chu-van-an/p2q4.png",
            "rong": 277
          },
          "chuyenDe": "Vectơ trong không gian",
          "mucDo": "TH"
        }
      ]
    },
    {
      "loai": "traloingan",
      "tieuDe": "PHẦN III. Câu trắc nghiệm trả lời ngắn",
      "huongDan": "Học sinh trả lời từ câu 1 đến câu 6. Ghi kết quả là một số; dùng dấu phẩy hoặc dấu chấm đều được (ví dụ 2,33).",
      "cauHoi": [
        {
          "de": "Trong không gian, cho hai vectơ $\vec a$ và $\vec b$ có độ dài lần lượt bằng $2$ và $3$. Biết độ dài của vectơ $\vec a-3\vec b$ bằng $\sqrt{103}$ và số đo góc giữa hai vectơ $\vec a$ và $\vec b$ là $x$ độ. Giá trị của $x$ là bao nhiêu?",
          "dapAn": "120",
          "loiGiai": "$|\vec a-3\vec b|^2=|\vec a|^2-6\vec a\cdot\vec b+9|\vec b|^2=85-6\vec a\cdot\vec b=103\Rightarrow\vec a\cdot\vec b=-3$. $\cos(\vec a,\vec b)=\dfrac{-3}{2\cdot3}=-\dfrac12\Rightarrow(\vec a,\vec b)=120^\circ$. <b>Đáp án: 120.</b>",
          "chuyenDe": "Vectơ trong không gian",
          "mucDo": "TH"
        },
        {
          "de": "Giá trị lớn nhất của hàm số $f(x)=\sqrt{4-x^2}+x-\dfrac12$ bằng bao nhiêu (làm tròn kết quả đến hàng phần trăm)?",
          "dapAn": "2,33",
          "loiGiai": "TXĐ $D=[-2;2]$. $f'(x)=-\dfrac{x}{\sqrt{4-x^2}}+1=0\Leftrightarrow\sqrt{4-x^2}=x\Leftrightarrow x=\sqrt2$. $f(-2)=-\dfrac52$, $f(2)=\dfrac32$, $f(\sqrt2)=2\sqrt2-\dfrac12$. Vậy $\max f(x)=2\sqrt2-\dfrac12\approx2{,}33$.",
          "chuyenDe": "GTLN – GTNN",
          "mucDo": "TH"
        },
        {
          "de": "Cho hàm số $y=-2x^3+x^2+4x-1$ đồng biến trong khoảng $(a;b)$ và thỏa mãn $b-a$ lớn nhất. Giá trị của biểu thức $P=a+b$ bằng bao nhiêu (làm tròn kết quả đến hàng phần trăm)?",
          "dapAn": "0,33",
          "loiGiai": "$y'=-6x^2+2x+4>0\Leftrightarrow-\dfrac23<x<1$. $b-a$ lớn nhất khi $a=-\dfrac23$, $b=1$. Khi đó $P=a+b=\dfrac13\approx0{,}33$.",
          "chuyenDe": "Tính đơn điệu",
          "mucDo": "TH"
        },
        {
          "de": "Cho hàm số $y=\dfrac{x^2-4x+7}{x-1}$. Độ dài của đoạn thẳng nối hai điểm cực trị của đồ thị hàm số bằng bao nhiêu (làm tròn kết quả đến hàng phần trăm)?",
          "dapAn": "8,94",
          "loiGiai": "$y'=\dfrac{x^2-2x-3}{(x-1)^2}=0\Leftrightarrow x=-1$ hoặc $x=3$. $y(-1)=-6$, $y(3)=2$, hai điểm cực trị $A(-1;-6)$, $B(3;2)$. $AB=\sqrt{4^2+8^2}=4\sqrt5\approx8{,}94$.",
          "chuyenDe": "Cực trị",
          "mucDo": "TH"
        },
        {
          "de": "Một giá treo vật được lắp đặt vào góc tường tại ba điểm $C,O$ và $B$ bằng các bản lề cố định. Cấu tạo giá treo gồm ba thanh $AB,AC$ và $AO$ hội tụ tại điểm $A$ (khối lượng các thanh không đáng kể). Biết các thanh $AB,AC$ có chiều dài bằng nhau và vuông góc nhau tại $A$, cùng song song với mặt sàn. Thanh $AO$ đóng vai trò thanh chống, chịu được lực nén tối đa là $265$ N. Biết rằng khi treo vật có trọng lượng $P$ vào điểm $A$, lực căng trên hai thanh $AC$ và $AB$ có độ lớn luôn bằng một phần hai lực nén trên thanh $AO$. Trọng lượng (tính theo đơn vị N) lớn nhất có thể treo vào đầu $A$ của giá treo bằng bao nhiêu để hệ thống vẫn an toàn? (Kết quả làm tròn đến hàng đơn vị).",
          "dapAn": "187",
          "loiGiai": "Gọi $F$ là lực nén trên thanh $AO$, lực căng trên mỗi thanh $AC,AB$ là $\dfrac F2$. Tại nút $A$: $\vec N=-(\vec P+\vec T_1+\vec T_2)$, mà $\vec P,\vec T_1,\vec T_2$ đôi một vuông góc nên $F^2=P^2+\dfrac{F^2}4+\dfrac{F^2}4\Leftrightarrow P=\dfrac{F}{\sqrt2}$. An toàn khi $F\le265$, tức $P\le\dfrac{265}{\sqrt2}\approx187{,}38$ (N). <b>Đáp án: 187.</b>",
          "hinh": {
            "src": "hinh/2026-gk1-chu-van-an/p3q5.png",
            "rong": 310
          },
          "chuyenDe": "Vectơ trong không gian",
          "mucDo": "VD"
        },
        {
          "de": "Có bao nhiêu giá trị nguyên thuộc khoảng $(-2026;2027)$ của tham số $m$ để đồ thị hàm số $y=\dfrac{\sqrt{x-3}}{x^2+x-m}$ có đúng hai đường tiệm cận?",
          "dapAn": "2015",
          "loiGiai": "Điều kiện $x\ge3$, $x^2+x-m\ne0$. Vì $\lim\limits_{x\to+\infty}y=0$ nên luôn có TCN $y=0$; cần đúng một TCĐ. Xét $g(x)=x^2+x$ trên $[3;+\infty)$: đồng biến, $g(3)=12$, nên $x^2+x=m$ có nghiệm trên $[3;+\infty)$ khi và chỉ khi $m\ge12$ (đúng một nghiệm).<br>$m<12$: không có TCĐ. $m=12$: $y=\dfrac{1}{\sqrt{x-3}(x+4)}$, có TCĐ $x=3$, thỏa mãn. $m>12$: có đúng một nghiệm $x_0>3$, tử khác $0$ tại $x_0$ nên có đúng một TCĐ, thỏa mãn.<br>Vậy $m\in\{12;13;\dots;2026\}$, có $2026-12+1=2015$ giá trị.",
          "chuyenDe": "Đường tiệm cận",
          "mucDo": "VDC"
        }
      ]
    }
  ]
}
`);
