// Đề: Khảo sát chất lượng giữa học kì I – Sở GD&ĐT Hưng Yên
// Xem HUONG-DAN.md để biết cách viết file đề.
themDe(String.raw`
{
  "id": "2026-kscl-gk1-hung-yen",
  "tieuDe": "Khảo sát chất lượng giữa học kì I – Sở GD&ĐT Hưng Yên",
  "loai": "Khảo sát chất lượng",
  "nam": "2026-2027",
  "lop": 12,
  "nguon": "Đề chính thức, mã đề 0119. Lời giải tham khảo theo TOANMATH.com.",
  "thoiGian": 90,
  "phan": [
    {
      "loai": "tracnghiem",
      "tieuDe": "PHẦN I. Câu trắc nghiệm nhiều phương án lựa chọn",
      "huongDan": "Thí sinh trả lời từ câu 1 đến câu 12. Mỗi câu hỏi thí sinh chỉ chọn một phương án.",
      "cauHoi": [
        {
          "de": "Cho cấp số cộng $(u_n)$ với $u_1=8$ và công sai $d=5$. Giá trị của $u_2$ bằng",
          "luaChon": [
            "$13$",
            "$40$",
            "$3$",
            "$\dfrac85$"
          ],
          "dapAn": "A",
          "loiGiai": "$u_2=u_1+d=8+5=13$.",
          "chuyenDe": "Dãy số – cấp số",
          "mucDo": "NB"
        },
        {
          "de": "Cho mẫu số liệu ghép nhóm về thống kê điểm số (thang điểm 20) của $100$ học sinh tham dự kỳ thi học sinh giỏi toán, ta có bảng số liệu sau. Tìm trung vị của mẫu số liệu ghép nhóm trên (kết quả làm tròn đến hàng phần trăm).",
          "luaChon": [
            "$13{,}53$",
            "$12{,}81$",
            "$13{,}35$",
            "$12{,}18$"
          ],
          "dapAn": "A",
          "loiGiai": "Cỡ mẫu $n=100$, $\dfrac n2=50$. Tần số tích lũy: $6;\ 27;\ 57;\dots$ nên nhóm chứa trung vị là $[12;14)$.<br>$M_e=12+\dfrac{50-27}{30}\cdot2=\dfrac{203}{15}\approx13{,}53$.",
          "chuyenDe": "Thống kê",
          "mucDo": "TH",
          "hinh": {
            "src": "hinh/2026-kscl-gk1-hung-yen/p1q2.png",
            "rong": 508
          }
        },
        {
          "de": "Cho hàm số $y=x^3-2x^2-1$. Giá trị $y'(2)$ bằng",
          "luaChon": [
            "$4$",
            "$-1$",
            "$3$",
            "$15$"
          ],
          "dapAn": "A",
          "loiGiai": "$y'=3x^2-4x\Rightarrow y'(2)=12-8=4$.",
          "chuyenDe": "Đạo hàm",
          "mucDo": "NB"
        },
        {
          "de": "Đường cong trong hình vẽ là đồ thị của hàm số nào dưới đây?",
          "luaChon": [
            "$y=-x^3-3x-1$",
            "$y=x^3-3x-1$",
            "$y=x^3-3x+1$",
            "$y=-x^3+3x+1$"
          ],
          "dapAn": "C",
          "loiGiai": "Nhánh cuối của đồ thị đi lên nên $a>0$, loại A và D. Đồ thị cắt trục $Oy$ tại điểm có tung độ bằng $1$ nên loại B.",
          "chuyenDe": "Khảo sát và vẽ đồ thị",
          "mucDo": "NB",
          "hinh": {
            "src": "hinh/2026-kscl-gk1-hung-yen/p1q4.png",
            "rong": 164
          }
        },
        {
          "de": "Phương trình $\cos x=1$ có tập nghiệm là",
          "luaChon": [
            "$S=\{k2\pi\mid k\in\mathbb Z\}$",
            "$S=\left\{\dfrac\pi2+k2\pi\mid k\in\mathbb Z\right\}$",
            "$S=\{\pi+k2\pi\mid k\in\mathbb Z\}$",
            "$S=\left\{-\dfrac\pi2+k2\pi\mid k\in\mathbb Z\right\}$"
          ],
          "dapAn": "A",
          "loiGiai": "$\cos x=1\Leftrightarrow x=k2\pi\ (k\in\mathbb Z)$.",
          "chuyenDe": "Lượng giác",
          "mucDo": "NB"
        },
        {
          "de": "Cho khối chóp $S.ABC$ có chiều cao bằng $3$, đáy là tam giác $ABC$ có diện tích bằng $20$. Thể tích khối chóp $S.ABC$ bằng",
          "luaChon": [
            "$20$",
            "$60$",
            "$30$",
            "$10$"
          ],
          "dapAn": "A",
          "loiGiai": "$V=\dfrac13\cdot3\cdot20=20$.",
          "chuyenDe": "Hình học không gian",
          "mucDo": "NB"
        },
        {
          "de": "Cho hàm số bậc ba $y=ax^3+bx^2+cx+d\ (a\ne0)$ có đồ thị như hình vẽ. Hàm số nghịch biến trên khoảng nào trong các khoảng dưới đây?",
          "luaChon": [
            "$(-\infty;1)$",
            "$(3;+\infty)$",
            "$(-2;2)$",
            "$(1;3)$"
          ],
          "dapAn": "D",
          "loiGiai": "Dựa vào đồ thị, đồ thị đi xuống trên khoảng $(1;3)$ nên hàm số nghịch biến trên $(1;3)$.",
          "chuyenDe": "Tính đơn điệu",
          "mucDo": "NB",
          "hinh": {
            "src": "hinh/2026-kscl-gk1-hung-yen/p1q7.png",
            "rong": 174
          }
        },
        {
          "de": "Cho hàm số $y=f(x)$ có bảng biến thiên như hình vẽ dưới đây. Điểm cực đại của hàm số đã cho bằng",
          "luaChon": [
            "$x=0$",
            "$x=2$",
            "$y=5$",
            "$y=1$"
          ],
          "dapAn": "B",
          "loiGiai": "$y'$ đổi dấu từ $+$ sang $-$ khi đi qua $x=2$ nên điểm cực đại của hàm số là $x=2$.",
          "chuyenDe": "Cực trị",
          "mucDo": "NB",
          "hinh": {
            "src": "hinh/2026-kscl-gk1-hung-yen/p1q8.png",
            "rong": 307
          }
        },
        {
          "de": "Tổng số đường tiệm cận đứng và tiệm cận ngang của đồ thị hàm số $y=\dfrac{x+2}{x^2-9}$ là",
          "luaChon": [
            "$1$",
            "$4$",
            "$2$",
            "$3$"
          ],
          "dapAn": "D",
          "loiGiai": "$\lim\limits_{x\to\pm\infty}y=0$ nên $y=0$ là tiệm cận ngang. $x^2-9=0\Leftrightarrow x=\pm3$ và tử $x+2\ne0$ tại $x=\pm3$ nên có hai tiệm cận đứng $x=3$, $x=-3$. Vậy có $3$ đường tiệm cận.",
          "chuyenDe": "Đường tiệm cận",
          "mucDo": "TH"
        },
        {
          "de": "Gọi $M$, $m$ lần lượt là giá trị lớn nhất và giá trị nhỏ nhất của hàm số $y=\dfrac{x^2+3}{x-1}$ trên đoạn $[2;4]$. Giá trị của $M+m$ bằng",
          "luaChon": [
            "$5$",
            "$\dfrac{37}{3}$",
            "$13$",
            "$\dfrac{40}{3}$"
          ],
          "dapAn": "C",
          "loiGiai": "$y'=\dfrac{x^2-2x-3}{(x-1)^2}=0\Leftrightarrow x=3$ (nhận) hoặc $x=-1$ (loại). $y(2)=7$, $y(3)=6$, $y(4)=\dfrac{19}{3}$. Suy ra $M=7$, $m=6$, $M+m=13$.",
          "chuyenDe": "GTLN – GTNN",
          "mucDo": "TH"
        },
        {
          "de": "Cặp số nào sau đây là một nghiệm của hệ bất phương trình $\begin{cases}x-3y-1>0\\2x+y+5>0\\x+y+1<0\end{cases}$?",
          "luaChon": [
            "$(0;-2)$",
            "$(0;2)$",
            "$(0;0)$",
            "$(1;0)$"
          ],
          "dapAn": "A",
          "loiGiai": "Thay $(0;-2)$: $0+6-1=5>0$; $0-2+5=3>0$; $0-2+1=-1<0$, đều đúng.",
          "chuyenDe": "Bất phương trình bậc nhất hai ẩn",
          "mucDo": "NB"
        },
        {
          "de": "Cho hàm số $y=f(x)$ liên tục trên $\mathbb R$ và có bảng xét dấu của $f'(x)$ như sau. Số điểm cực trị của hàm số đã cho là",
          "luaChon": [
            "$4$",
            "$1$",
            "$3$",
            "$2$"
          ],
          "dapAn": "A",
          "loiGiai": "$f(x)$ liên tục trên $\mathbb R$ và $f'(x)$ đổi dấu khi đi qua các điểm $x=-2$, $x=0$, $x=2$, $x=3$ (tại $x=2$ đạo hàm không xác định nhưng hàm số vẫn liên tục) nên hàm số có $4$ điểm cực trị.",
          "chuyenDe": "Cực trị",
          "mucDo": "TH",
          "hinh": {
            "src": "hinh/2026-kscl-gk1-hung-yen/p1q12.png",
            "rong": 353
          }
        }
      ]
    },
    {
      "loai": "dungsai",
      "tieuDe": "PHẦN II. Câu trắc nghiệm đúng sai",
      "huongDan": "Thí sinh trả lời từ câu 1 đến câu 4. Trong mỗi ý a), b), c), d) ở mỗi câu, thí sinh chọn Đúng hoặc Sai.",
      "cauHoi": [
        {
          "de": "Lớp 11A có $45$ học sinh, trong đó có $28$ bạn thích học môn Tiếng Anh, $20$ bạn thích học môn Tin học và $10$ bạn thích học cả hai môn này. Chọn ngẫu nhiên một học sinh trong lớp.",
          "y": [
            {
              "noiDung": "Xác suất để học sinh được chọn thích học môn Tiếng Anh là $\dfrac{28}{45}$.",
              "dapAn": true
            },
            {
              "noiDung": "Xác suất để học sinh được chọn thích học cả môn Tiếng Anh và môn Tin học là $\dfrac29$.",
              "dapAn": true
            },
            {
              "noiDung": "Xác suất để học sinh được chọn không thích môn Tiếng Anh và cũng không thích môn Tin học là $\dfrac{8}{45}$.",
              "dapAn": false
            },
            {
              "noiDung": "Xác suất để học sinh được chọn thích học ít nhất một trong hai môn Tiếng Anh hoặc Tin học là $\dfrac{38}{45}$.",
              "dapAn": true
            }
          ],
          "loiGiai": "Gọi $A$: “thích Tiếng Anh”, $B$: “thích Tin học”; $n(\Omega)=45$.<br>a) $P(A)=\dfrac{28}{45}$. <b>Đúng.</b><br>b) $P(A\cap B)=\dfrac{10}{45}=\dfrac29$. <b>Đúng.</b><br>c) Số học sinh thích ít nhất một môn là $28+20-10=38$, nên số không thích môn nào là $7$, xác suất $\dfrac{7}{45}$. <b>Sai.</b><br>d) $P(A\cup B)=\dfrac{38}{45}$. <b>Đúng.</b>",
          "chuyenDe": "Xác suất",
          "mucDo": "TH"
        },
        {
          "de": "Cho hàm số $y=\dfrac{x^2-4x+5}{x-3}$.",
          "y": [
            {
              "noiDung": "Hàm số đồng biến trên các khoảng $(-\infty;2)$ và $(4;+\infty)$.",
              "dapAn": false
            },
            {
              "noiDung": "Gọi $A$, $B$ là hai điểm cực trị của đồ thị hàm số. Diện tích tam giác $OAB$ bằng $\dfrac52$ (đơn vị diện tích, với $O$ là gốc tọa độ).",
              "dapAn": false
            },
            {
              "noiDung": "Hàm số có giá trị cực đại lớn hơn giá trị cực tiểu.",
              "dapAn": false
            },
            {
              "noiDung": "Đường thẳng đi qua hai điểm cực trị của đồ thị hàm số có phương trình $y=2x-4$.",
              "dapAn": true
            }
          ],
          "loiGiai": "TXĐ $D=\mathbb R\setminus\{3\}$. $y=x-1+\dfrac{2}{x-3}$, $y'=\dfrac{x^2-6x+7}{(x-3)^2}=0\Leftrightarrow x=3\pm\sqrt2$.<br>a) Hàm số đồng biến trên $(-\infty;3-\sqrt2)$ và $(3+\sqrt2;+\infty)$; vì $3-\sqrt2<2$ nên không đồng biến trên $(-\infty;2)$. <b>Sai.</b><br>b) $A\left(3-\sqrt2;2-2\sqrt2\right)$, $B\left(3+\sqrt2;2+2\sqrt2\right)$, đường thẳng $AB$: $y=2x-4$ cắt $Ox$ tại $I(2;0)$, $A,B$ ở hai phía $Ox$. $S_{OAB}=\dfrac12\cdot OI\cdot(|y_A|+|y_B|)=\dfrac12\cdot2\cdot4\sqrt2=4\sqrt2\ne\dfrac52$. <b>Sai.</b><br>c) $y_{\text{CĐ}}=2-2\sqrt2<y_{\text{CT}}=2+2\sqrt2$. <b>Sai.</b><br>d) Theo b), đường thẳng qua hai điểm cực trị là $y=2x-4$. <b>Đúng.</b>",
          "chuyenDe": "Cực trị",
          "mucDo": "VD"
        },
        {
          "de": "Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình vuông cạnh bằng $2a$, cạnh bên $SA$ vuông góc với mặt phẳng đáy $(ABCD)$ và $SA=2a\sqrt3$ (tham khảo hình vẽ).",
          "y": [
            {
              "noiDung": "Góc giữa đường thẳng $SD$ và mặt phẳng $(ABCD)$ bằng $60^\circ$.",
              "dapAn": true
            },
            {
              "noiDung": "Khoảng cách giữa hai đường thẳng $SA$ và $CD$ bằng $4a$.",
              "dapAn": false
            },
            {
              "noiDung": "Thể tích khối chóp $S.ADC$ bằng $\dfrac{2a^3\sqrt3}{3}$.",
              "dapAn": false
            },
            {
              "noiDung": "Khoảng cách từ điểm $S$ đến mặt phẳng $(ABCD)$ bằng $2a\sqrt3$.",
              "dapAn": true
            }
          ],
          "loiGiai": "a) Góc giữa $SD$ và $(ABCD)$ là $\widehat{SDA}$, $\tan\widehat{SDA}=\dfrac{SA}{AD}=\dfrac{2a\sqrt3}{2a}=\sqrt3\Rightarrow\widehat{SDA}=60^\circ$. <b>Đúng.</b><br>b) $AD\perp SA$ và $AD\perp CD$ nên $d(SA,CD)=AD=2a$. <b>Sai.</b><br>c) $V_{S.ADC}=\dfrac13\cdot2a\sqrt3\cdot\dfrac12\cdot2a\cdot2a=\dfrac{4a^3\sqrt3}{3}$. <b>Sai.</b><br>d) $d(S,(ABCD))=SA=2a\sqrt3$. <b>Đúng.</b>",
          "chuyenDe": "Hình học không gian",
          "mucDo": "TH",
          "hinh": {
            "src": "hinh/2026-kscl-gk1-hung-yen/p2q3.png",
            "rong": 212
          }
        },
        {
          "de": "Trong y học, độ bão hòa oxy trong máu của một bệnh nhân được phục hồi theo thời gian $t$ (tính bằng phút, với $t\ge0$) sau khi tập thể dục cường độ cao được mô hình hóa bằng hàm số mũ $f(t)=98-18e^{-0{,}4t}$. Biết rằng đạo hàm $f'(t)$ biểu thị tốc độ thay đổi nồng độ oxy tại thời điểm $t$.",
          "y": [
            {
              "noiDung": "Tốc độ thay đổi nồng độ oxy của bệnh nhân tại thời điểm $t$ là $f'(t)=7{,}2e^{-0{,}4t}$.",
              "dapAn": true
            },
            {
              "noiDung": "Tại thời điểm $t=5$ phút, tốc độ tăng nồng độ oxy của bệnh nhân nhanh hơn so với tại thời điểm $t=2$ phút.",
              "dapAn": false
            },
            {
              "noiDung": "Độ bão hòa oxy trong máu của bệnh nhân tăng dần theo thời gian.",
              "dapAn": true
            },
            {
              "noiDung": "Tại thời điểm $t=0$ (ngay khi vừa dừng tập luyện), độ bão hòa oxy trong máu của bệnh nhân đạt mức $98\%$.",
              "dapAn": false
            }
          ],
          "loiGiai": "a) $f'(t)=-18\cdot(-0{,}4)e^{-0{,}4t}=7{,}2e^{-0{,}4t}$. <b>Đúng.</b><br>b) $f'(5)=7{,}2e^{-2}<f'(2)=7{,}2e^{-0{,}8}$ nên tại $t=5$ tăng chậm hơn. <b>Sai.</b><br>c) $f'(t)>0$ với mọi $t\ge0$ nên $f$ đồng biến. <b>Đúng.</b><br>d) $f(0)=98-18=80$, tức $80\%$. <b>Sai.</b>",
          "chuyenDe": "Ứng dụng đạo hàm vào thực tế",
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
          "de": "Một xưởng sản xuất dự định sản xuất không quá $250$ sản phẩm. Nếu xưởng sản xuất $x$ sản phẩm $(x\in\mathbb Z^+,\ 1\le x\le250)$ thì doanh thu khi bán hết số sản phẩm đó là $F(x)=-3x^2+1800x$ (nghìn đồng), chi phí sản xuất bình quân cho một sản phẩm là $G(x)=2x^2-120x+2300+\dfrac{16000}{x}$ (nghìn đồng). Khi đó xưởng sản xuất đạt được lợi nhuận lớn nhất là bao nhiêu triệu đồng (không làm tròn kết quả phép tính trung gian, chỉ làm tròn kết quả cuối cùng đến hàng đơn vị)?",
          "dapAn": "24",
          "loiGiai": "Lợi nhuận $P(x)=F(x)-xG(x)=-2x^3+117x^2-500x-16000$ (nghìn đồng).<br>$P'(x)=-6x^2+234x-500=0\Leftrightarrow x=\dfrac{117\pm\sqrt{10689}}{6}$, tức $x_1\approx2{,}27$, $x_2\approx36{,}73$. $P$ đạt lớn nhất trên $[1;250]$ tại $x_2$.<br>Vì $x$ nguyên nên xét $P(36)=24320$, $P(37)=24367$. Lợi nhuận lớn nhất là $24367$ nghìn đồng $\approx24$ triệu đồng.",
          "chuyenDe": "Ứng dụng đạo hàm vào thực tế",
          "mucDo": "VD"
        },
        {
          "de": "Cho hàm số $y=ax^3+bx^2+cx+d$ có đồ thị $(C)$. Biết $A(-1;11)$ và $B(3;-21)$ là hai điểm cực trị của đồ thị $(C)$. Tính giá trị của biểu thức $P=a+b+c+d$.",
          "dapAn": "-5",
          "loiGiai": "$y'=3ax^2+2bx+c$ có hai nghiệm $-1$ và $3$ nên $y'=3a(x+1)(x-3)=3ax^2-6ax-9a$, suy ra $b=-3a$, $c=-9a$.<br>$y(-1)=5a+d=11$, $y(3)=-27a+d=-21$ $\Rightarrow a=1$, $d=6$.<br>$P=y(1)=-11a+d=-5$.",
          "chuyenDe": "Cực trị",
          "mucDo": "VD"
        },
        {
          "de": "Từ tập $S=\{1;2;\dots;55\}$ gồm $55$ số tự nhiên liên tiếp, người ta chọn ra $28$ số tự nhiên phân biệt và điền vào $28$ ô vuông đơn vị như hình vẽ bên dưới thỏa mãn đồng thời bốn điều kiện sau:<br>• Mỗi ô vuông được điền đúng một số và mỗi số được chọn chỉ được sử dụng một lần;<br>• Mọi số ở một hàng đều nhỏ hơn mọi số ở các hàng phía dưới;<br>• Trong mỗi hàng, các số tăng dần từ trái sang phải;<br>• Các số điền vào các ô $A, B, C, D, E, F, G$ theo thứ tự đó lập thành một cấp số cộng.<br>Gọi $T$ là số cách chọn và điền $28$ số thỏa mãn các điều kiện trên. Giá trị của $\log T$ bằng bao nhiêu? (kết quả làm tròn đến hàng phần trăm)",
          "dapAn": "9,19",
          "loiGiai": "Khi đã chọn $28$ số thì cách điền là duy nhất: xếp tăng dần $a_1<a_2<\dots<a_{28}$ rồi điền từ hàng trên xuống. Khi đó $A=a_1$, $B=a_3$, $C=a_6$, $D=a_{10}$, $E=a_{15}$, $F=a_{21}$, $G=a_{28}$.<br>Gọi $d$ là công sai. Giữa hai số liên tiếp có $d-1$ số nguyên, cần chọn lần lượt $1,2,\dots,6$ số trong đó nên $d\ge7$; $G=A+6d\le55$ nên $d\le9$, mỗi $d$ có $55-6d$ cách chọn $A$.<br>$T=\sum_{d=7}^{9}(55-6d)\prod_{k=1}^{6}C_{d-1}^{k}=2106000+185297175+1376829440=1564232615$.<br>$\log T\approx9{,}19$.",
          "chuyenDe": "Tổ hợp",
          "mucDo": "VDC",
          "hinh": {
            "src": "hinh/2026-kscl-gk1-hung-yen/p3q3.png",
            "rong": 200
          }
        },
        {
          "de": "Cho hình lăng trụ đứng $ABC.A'B'C'$ có đáy $ABC$ là tam giác vuông cân tại $A$, $BC=20\sqrt2$, cạnh bên $AA'=15$. Khoảng cách giữa hai đường thẳng $AB$ và $A'C$ bằng bao nhiêu?",
          "dapAn": "12",
          "loiGiai": "$AB=AC=20$. $AB\perp AC$, $AB\perp AA'$ nên $AB\perp(ACC'A')$. Kẻ $AH\perp A'C$ thì $AH$ là đoạn vuông góc chung của $AB$ và $A'C$.<br>$AH=\dfrac{AA'\cdot AC}{\sqrt{AA'^2+AC^2}}=\dfrac{15\cdot20}{25}=12$.",
          "chuyenDe": "Hình học không gian",
          "mucDo": "VD"
        },
        {
          "de": "Một cơ sở sản xuất bánh mì cung cấp sản phẩm cho các cửa hàng ăn sáng. Mỗi ngày, cơ sở sử dụng tối đa $18$ kg thịt và $11$ kg rau để sản xuất hai loại: bánh mì đặc biệt và bánh mì thường. Để sản xuất một chiếc bánh mì đặc biệt cần $150$ g thịt và $80$ g rau, lợi nhuận thu được là $15000$ đồng; để sản xuất một chiếc bánh mì thường cần $100$ g thịt và $100$ g rau, lợi nhuận thu được là $12000$ đồng. Biết rằng toàn bộ số bánh mì sản xuất ra đều được tiêu thụ hết trong ngày và số bánh mì mỗi loại được sản xuất là số nguyên không âm. Hỏi lợi nhuận lớn nhất mà cơ sở có thể thu được trong một ngày là bao nhiêu triệu đồng?",
          "dapAn": "1,86",
          "loiGiai": "Gọi $x,y$ là số bánh mì đặc biệt và thường. Ràng buộc: $3x+2y\le360$, $4x+5y\le550$, $x,y\ge0$. Lợi nhuận $L=15000x+12000y$.<br>Miền nghiệm là tứ giác $O(0;0)$, $M(120;0)$, $N(100;30)$, $K(0;110)$. $L(M)=1\,800\,000$, $L(N)=1\,860\,000$, $L(K)=1\,320\,000$.<br>Lợi nhuận lớn nhất $1\,860\,000$ đồng $=1{,}86$ triệu đồng.",
          "chuyenDe": "Bất phương trình bậc nhất hai ẩn",
          "mucDo": "VD"
        },
        {
          "de": "Một trung tâm logistics lắp đặt hệ thống cảm biến thông minh để giám sát nhà kho. Trong kho có $15$ vị trí chờ được thiết kế sẵn trên trần nhà, sắp xếp thành một lưới gồm $5$ hàng ngang và $3$ hàng dọc (khoảng cách giữa các hàng kề nhau và các cột kề nhau là bằng nhau). Kỹ sư cần chọn ra $3$ vị trí trong số $15$ vị trí này để lắp đặt ba cảm biến định vị sao cho ba vị trí là ba đỉnh của một tam giác (tham khảo hình vẽ). Kỹ sư có bao nhiêu cách lựa chọn ba vị trí lắp đặt thỏa mãn yêu cầu trên?",
          "dapAn": "412",
          "loiGiai": "Số cách chọn $3$ vị trí bất kỳ: $C_{15}^3=455$.<br>Bộ $3$ điểm thẳng hàng: $5$ hàng ngang: $5\cdot C_3^3=5$; $3$ hàng dọc: $3\cdot C_5^3=30$; đường xiên (mỗi cột một điểm, điểm cột giữa là trung điểm): điểm giữa ở hàng $3$: $4$ bộ, ở hàng $2$ hoặc $4$: $2\cdot2=4$ bộ. Tổng $43$.<br>Số cách thỏa mãn: $455-43=412$.",
          "chuyenDe": "Tổ hợp",
          "mucDo": "VD",
          "hinh": {
            "src": "hinh/2026-kscl-gk1-hung-yen/p3q6.png",
            "rong": 106
          }
        }
      ]
    }
  ]
}
`);
