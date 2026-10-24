MEDIFIN — Case #01

# USER FLOW — Bản chỉnh sửa nội dung

_Không đổi cấu trúc màn hình · Không đổi số lượng lựa chọn · Không cần đội Code/UI-UX thay đổi_

## Phạm vi của bản chỉnh sửa này

Tài liệu này áp dụng **7 chỉnh sửa nội dung (câu chữ)** vào đúng những chỗ USER_FLOW gốc còn gượng, dựa trên góp ý review của nhóm. Nguyên tắc xuyên suốt:

- **Giữ nguyên:** 13 màn hình, thứ tự màn hình, số lượng lựa chọn mỗi màn (3/7 hồ sơ, 2/7 câu hỏi, 1/7 câu hỏi cuối, 1/6 chẩn đoán, 1/6 phác đồ, 1/4 thời điểm, 3/7 nhóm ưu tiên), toàn bộ mã (HS-x, CH1-x, CH2-x, CD-x, PD-x, TG-x), và mọi công thức/luật chấm điểm.
- **Chỉ đổi:** câu chữ hiển thị cho người chơi (câu hỏi, câu trả lời, tên gọi, thông báo hệ thống) và thêm vài dòng nội dung vào đúng bảng/tab đã có sẵn.
- **Không có trong tài liệu này:** các góp ý đòi hỏi đổi cấu trúc (ví dụ: thêm bước "đề xuất lại phác đồ" ở Màn 7, giảm số lượng 7 hồ sơ/7 câu hỏi, tách Màn 8 thành 2 màn) — những việc này cần đội quyết định riêng vì ảnh hưởng tới Code/UI-UX và có thể không kịp deadline.

Toàn bộ đoạn được sửa/thêm đều **tô vàng** trong phần toàn văn phía sau để dễ rà soát.

## Bảng tổng hợp 7 thay đổi

| **#** | **Vị trí**                                       | **Trước**                                                                               | **Sau**                                                                                                          | **Lý do**                                                                                                                                                                                                                                                                                                                                              |
| ----- | ------------------------------------------------ | --------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 1     | Màn 3 · CH1-G (câu trả lời)                      | Quyền mua ưu tiên có điều kiện — chỉ kích hoạt nếu EBITDA giảm thêm 5%…                 | Có một thỏa thuận có điều kiện có thể ảnh hưởng đến quyền sở hữu… chi tiết cụ thể chưa rõ.                       | Câu hỏi bổ sung (Màn 3) đang tiết lộ đúng chi tiết quan trọng nhất (ngưỡng −5% EBITDA) mà lẽ ra chỉ Hồ sơ đầy đủ HS-G (Màn 2) mới cho biết. Điều này làm giá trị của việc mở HS-G gần như bằng 0 — sửa để cơ chế "đánh đổi thông tin" giữa Màn 2 và Màn 3 có ý nghĩa trở lại. Không đổi vị trí câu hỏi, không đổi số lượng lựa chọn.                   |
| 2     | Màn 8 · tiêu đề + nhãn TG-C                      | "Thời điểm" / "Refinance thử trước"                                                     | "Thời điểm & Trình tự hành động" / "Thử tái cấp vốn trước khi cam kết kế hoạch"                                  | TG-C vốn không phải một mốc thời gian như 3 lựa chọn còn lại (Ngay / Sau holiday / Chờ 6 tháng), mà là một lựa chọn "làm gì trước". Chỉ đổi tên tiêu đề màn hình và nhãn hiển thị của TG-C cho đúng bản chất — vẫn đúng 4 lựa chọn, 1 màn hình, không đổi mã TG-A..D, không đổi luật chấm điểm.                                                        |
| 3     | Màn 6 · tên gọi 6 chẩn đoán (CD-A..F)            | "Competitive/E-commerce Disease", "Liquidity Disease"… (khung đúng/sai ngầm định)       | "Áp lực Cạnh tranh", "Nguyên nhân Cấu trúc"… (khung 6 TẦNG vấn đề, không phân đúng/sai) + 1 đoạn giải thích thêm | USER_FLOW để David nói "tôi không biết vấn đề ở đâu" (Màn 1) nhưng cách đặt tên lại ngầm cho biết CD-D là "root cause", tạo cảm giác câu hỏi mở nhưng có đáp án đóng. Chỉ đổi TÊN HIỂN THỊ và thêm 1 câu giải thích khung "tầng vấn đề" — giữ nguyên mã CD-A..F, giữ nguyên 6 lựa chọn, không đổi cột bằng chứng, không đổi bất kỳ luật chấm điểm nào. |
| 4     | Màn 10 · bảng "Ví dụ logic hệ quả" (thêm 4 dòng) | Chỉ có 1 ví dụ (Family/Board Update) thật sự phản bác một chẩn đoán sai                 | Thêm 4 dòng: mỗi chẩn đoán CD-A/B/C/E (không phải CD-D/CD-F) đều có ít nhất 1 sự kiện Màn 10 phản bác trực tiếp  | Nếu người chơi chẩn đoán sai từ Màn 6 mà không có bằng chứng nào ở Màn 10 gợi ý điều đó, Màn 11 (Tái khám) chỉ còn là đoán mò chứ không phải "cập nhật niềm tin theo dữ liệu mới" như flow gốc dự định. Vẫn dùng đúng 7 tab đã có sẵn (Debt/Liquidity/Sales Update…), chỉ thêm câu điều kiện — không thêm tab, không thêm màn hình.                    |
| 5     | Màn 10 · bảng "Ví dụ logic hệ quả" (thêm 3 dòng) | Employees / Customers / Landlords không có hệ quả nào người chơi quan sát được ở Màn 10 | Thêm 3 dòng hệ quả quan sát được, mỗi nhóm 1 câu, gắn vào đúng tab Store/Sales Update đã có                      | 3 trong 7 nhóm ưu tiên ở Màn 9 trước đó chỉ ảnh hưởng đến điểm nội bộ (Execution score) mà người chơi không nhìn thấy — khiến lựa chọn cảm giác vô nghĩa. Thêm 1 câu/nhóm vào đúng tab đã tồn tại để mọi lựa chọn ở Màn 9 đều có ít nhất 1 hệ quả nhìn thấy được ở Màn 10. Không đổi 7 nhóm, không đổi số lượng chọn (vẫn 3/7).                        |
| 6     | Màn 7 · điều kiện PD-A và PD-F                   | "Nếu không đủ, tự động hạ xuống PD-B" (không có thông báo cho người chơi)               | Giữ nguyên cơ chế tự động hạ, chỉ thêm đúng câu hệ thống sẽ hiển thị khi điều đó xảy ra                          | Người chơi chọn PD-A/PD-F nhưng game âm thầm chạy PD-B mà không giải thích tạo cảm giác "quyết định của tôi không được tôn trọng". Thêm 1 câu thông báo (nội dung thuần túy) giúp việc bị hạ cấp trở thành một hệ quả có lý do rõ ràng, thay vì một lỗi ẩn. Không thêm bước lựa chọn mới, không đổi cơ chế hạ cấp.                                     |
| 7     | Màn 12 · ngưỡng "Ổn định tài chính"              | "≥ 5 = Ổn định tài chính" (không thể đạt được — điểm tối đa chỉ +4)                     | "≥ 4 = Ổn định tài chính" + ghi chú giải thích cho đội Game Logic                                                | Một con số trong bảng quy đổi (≥5) mâu thuẫn với chính bảng cộng điểm ngay phía trên nó (tối đa +4) — nếu không sửa, tier "Ổn định tài chính" sẽ không bao giờ xảy ra dù chơi tối ưu nhất. Chọn phương án B (giữ thang điểm, sửa ngưỡng) vì không cần rebalance lại toàn bộ bảng cộng điểm.                                                            |

# TOÀN VĂN USER FLOW (đã cập nhật)

_Phần tô vàng = nội dung mới/đã sửa. Phần không tô = giữ nguyên y hệt bản gốc._

# USER FLOW — GAME BÁC SĨ TÀI CHÍNH

_13 màn hình · Lựa chọn tài chính có điều kiện · Kết cục theo ma trận 3 trục_

# Tổng quan Case

| **Trường**                     | **Thông tin**                                                                                                                                                                            |
| ------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Công ty                        | Toy Kingdom Inc. (mô phỏng Toys "R" Us, Inc.)                                                                                                                                            |
| Ngành                          | Specialty retail — đồ chơi & sản phẩm trẻ em                                                                                                                                             |
| Doanh thu FY2026               | \\\$11.540 tỷ                                                                                                                                                                            |
| Quy mô                         | ~1.700 cửa hàng toàn cầu                                                                                                                                                                 |
| Sở hữu                         | Gia đình Anderson 78% (David — CEO, Michael — em trai, Richard — chú) ; Quỹ đầu tư tư nhân 22%                                                                                           |
| Adjusted EBITDA FY2026         | \\\$792 triệu                                                                                                                                                                            |
| Operating Earnings FY2026      | \\\$460 triệu                                                                                                                                                                            |
| Net Loss (attributable) FY2026 | −\\\$36 triệu                                                                                                                                                                            |
| Lý do khám                     | Hoạt động kinh doanh có dấu hiệu cải thiện, nhưng công ty vẫn thiếu nguồn lực để tái đầu tư và ngày càng chịu áp lực tài chính, trong khi ban lãnh đạo gia đình đang chia rẽ về hướng đi |

# Bí mật nền (chưa được xác nhận trong case — người chơi phải tự kiểm chứng)

Michael đã ký một thỏa thuận có điều kiện với quỹ đầu tư Houndstooth Capital: nếu Adjusted EBITDA giảm thêm 5% so với FY2026, Houndstooth có quyền mua ưu tiên phần cổ phần của gia đình với giá thấp. Richard muốn thanh lý tài sản quốc tế để chia tiền mặt ngay. Thông tin này chỉ được xác nhận đầy đủ nếu người chơi mở Hồ sơ HS-G ở Màn 2.

# Ba trục theo dõi xuyên suốt case

| **Trục**                                          | **Đo lường**                                                                                                           |
| ------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| Uy tín (Credibility)                              | Mức độ hội đồng và thị trường tin tưởng vào quyết định của người chơi — tăng/giảm theo các lựa chọn có/không đủ căn cứ |
| Sức khỏe Tài chính (Financial Resilience)         | Khả năng công ty còn thanh khoản, còn tiếp cận vốn, chưa vi phạm covenant nghiêm trọng                                 |
| Ổn định Quản trị — Gia tộc (Governance Stability) | David có giữ được quyền kiểm soát trong hòa bình tương đối hay không                                                   |

# Màn hình 0 — Hồ sơ tiếp nhận

_Màn hình tối, chữ đỏ: \[CONFIDENTIAL — CLIENT FILE\] — HỒ SƠ GIA TỘC ANDERSON_

Bảng thông tin công ty (xem Mục Tổng quan) được hiển thị đầy đủ tại đây. Người chơi bấm **\[BẮT ĐẦU KHÁM\]** để chuyển sang Màn 1.

# Màn hình 1 — Phòng khám

**Bối cảnh:** phòng họp tối, một chiếc đèn bàn chiếu vào David Anderson (CEO).

_David (CEO): "Sales tiếp tục giảm. Amazon, Walmart và online retail đang thay đổi cả ngành. Chúng tôi đã cắt chi phí, đóng cửa hàng yếu, đầu tư digital. Một số chỉ số tốt lên nhưng công ty vẫn ngày càng khó xoay xở."_

_David (CEO): "Còn chuyện gia đình... tôi phát hiện Michael đang thuê luật sư riêng, và Richard âm thầm chào bán tài sản quốc tế mà không qua hội đồng. Tôi không biết vấn đề thực sự nằm ở thị trường, ở cấu trúc tài chính của công ty, hay ở chính ban lãnh đạo."_

_Hệ thống hiện nút:_ **_\[BẮT ĐẦU CHẨN ĐOÁN\]_**

# Màn hình 2 — Hồ sơ chẩn đoán

**Lựa chọn:** chọn đúng 3 trong 7 Hồ sơ. 4 hồ sơ không chọn sẽ đóng vĩnh viễn — không thể mở lại ở Màn 3, 4, 5, hay khi Tái khám ở Màn 11, kể cả khi đổi chẩn đoán sau này.

_David Anderson: "Tôi mang theo toàn bộ tài liệu chi tiết ở đây. Anh chỉ có thời gian xem xét 3 hồ sơ, hãy chọn cẩn thận"_

| **Mã** | **Hồ sơ**                            | **Trọng tâm**                                                                           |
| ------ | ------------------------------------ | --------------------------------------------------------------------------------------- |
| HS-A   | Sales & Customer                     | Doanh thu, traffic, kênh bán (E-commerce +11% FY2026)                                   |
| HS-B   | Stores & Investment                  | Mạng lưới cửa hàng, danh sách CapEx đang tranh vốn                                      |
| HS-C   | Liquidity                            | Cash, holiday inventory, vendor terms, debt maturities                                  |
| HS-D   | Capital Structure & Leverage History | Historical Financing Event — 2015                                                       |
| HS-E   | Product & Category Trends            | Đồ chơi truyền thống vs. entertainment/licensing                                        |
| HS-F   | Management Track Record              | Các sáng kiến 3 năm qua — thành/bại                                                     |
| HS-G   | Governance & Family                  | Cơ cấu cổ phần Anderson, thỏa thuận Michael–Houndstooth, động thái Richard, thư luật sư |

### HỒ SƠ HS-A — SALES & CUSTOMER

# Same-Store Sales

|               | **FY2024** | **FY2025** | **FY2026** |
| ------------- | ---------- | ---------- | ---------- |
| Domestic      | \-1.0%     | \-0.6%     | \-1.3%     |
| International | +1.8%      | +3.2%      | \-1.6%     |
| Consolidated  | 0.0%       | +0.9%      | \-1.4%     |

# Revenue FY2026

|               | **FY2025** | **FY2026** | **Change** |
| ------------- | ---------- | ---------- | ---------- |
| Domestic      | \$7.356bn  | \$7.131bn  | \-3.1%     |
| International | \$4.446bn  | \$4.409bn  | \-0.8%     |
| Consolidated  | \$11.802bn | \$11.540bn | \-2.2%     |

**E-commerce sales:** +11%

_Market Analyst: "Traffic yếu đi, nhưng không phải mọi channel đều giảm — e-commerce vẫn tăng hai chữ số."_

### HỒ SƠ HS-B — STORES & INVESTMENT

# Các chương trình đang cần vốn

- Store renovation
- Mobile & web
- Omnichannel fulfillment
- Supply chain
- Customer experience
- Holiday inventory

_Head of Operations: "Chúng tôi biết khá rõ những gì muốn nâng cấp."_

_"Khó nhất là năm nào cũng có quá nhiều thứ cùng tranh một lượng capital hữu hạn."_

### HỒ SƠ HS-C — LIQUIDITY

# FY2026

| **Chỉ tiêu**                 | **Giá trị** |
| ---------------------------- | ----------- |
| Cash & Cash Equivalents      | \$566m      |
| Accounts & Other Receivables | \$255m      |
| Merchandise Inventory        | \$2.476bn   |
| Total Current Assets         | \$3.389bn   |
| Property & Equipment         | \$3.067bn   |

_Treasurer: "Cash cuối kỳ không phản ánh toàn bộ liquidity của một retailer."_

_"Holiday inventory, vendor terms và debt maturities đều ảnh hưởng."_

### HỒ SƠ HS-D — CAPITAL STRUCTURE & LEVERAGE HISTORY

# Cấu trúc funding hiện tại — FY2026

| **Chỉ tiêu**         | **Giá trị** |
| -------------------- | ----------- |
| Cash                 | \$566m      |
| Total Indebtedness   | ~\$4.8bn    |
| Secured Indebtedness | ~\$3.4bn    |
| Adjusted EBITDA      | \$792m      |
| Operating Earnings   | \$460m      |

_Cấu trúc funding bao gồm: secured notes, senior notes, term facilities, revolving facilities, international debt, other financing arrangements._

_CFO: "Leverage cao, nhưng nó đã tồn tại nhiều năm."_

# Gốc rễ: giao dịch 2015

Toys "R" Us được mua lại trong một leveraged transaction trị giá \$6.6bn. Trong các năm sau đó công ty trải qua nhiều vòng: refinancing; maturity extensions; secured borrowing; quyết định đầu tư cửa hàng; sáng kiến tái cấu trúc.

## Operating Cash Flow trước giao dịch 2015

| **Năm** | **Operating Cash Flow** |
| ------- | ----------------------- |
| 2012    | \$575m                  |
| 2013    | \$801m                  |
| 2014    | \$746m                  |

### HỒ SƠ HS-E — PRODUCT & CATEGORY TRENDS

# Cơ cấu danh mục — FY2026

- **Domestic toy categories excluding entertainment:** +2.5% SSS
- **Consolidated toy categories excluding entertainment:** +1.1% SSS

Các category gắn với entertainment/licensing (phim, tie-in) tiếp tục yếu, phụ thuộc nhiều vào lịch phát hành sản phẩm giải trí của đối tác — năm không có blockbuster lớn, category này tụt mạnh hơn phần còn lại của danh mục.

_Merchandising Director: "Đồ chơi truyền thống vẫn có nhu cầu thật."_

_"Nhưng phần lớn tăng trưởng danh mục ngày càng phụ thuộc vào chu kỳ ra mắt sản phẩm giải trí bên ngoài — thứ chúng tôi không kiểm soát được."_

### HỒ SƠ HS-F — MANAGEMENT TRACK RECORD

# Các sáng kiến đã triển khai trong 3 năm gần nhất

| **Thời gian** | **Sáng kiến**                    | **Kết quả**                                                   |
| ------------- | -------------------------------- | ------------------------------------------------------------- |
| FY2024        | Store renovation pilot           | Tăng traffic cục bộ, chưa bù được chi phí đầu tư              |
| FY2024        | Cắt giảm SG&A vòng 1             | Giảm chi phí, nhưng đi kèm giảm marketing → traffic giảm thêm |
| FY2025        | Đầu tư digital & mobile app mới  | E-commerce tăng hai chữ số, chưa bù được store decline        |
| FY2025–26     | Tái cấu trúc một phần nợ quốc tế | Giảm áp lực ngắn hạn, không đổi cấu trúc leverage tổng thể    |

_Board Member: "Chúng tôi đã thử nhiều thứ."_

_"Vấn đề là chưa có sáng kiến nào đủ lớn để đảo chiều toàn bộ xu hướng — mỗi thứ chỉ xử lý được một phần."_

### HỒ SƠ HS-G — GOVERNANCE & FAMILY

## Nếu chọn HS-G

Hé lộ một đoạn thư cho thấy Michael đang chuẩn bị sẵn kịch bản gây áp lực lên chủ nợ nếu ông ta lên nắm quyền — một dữ kiện quản trị đã xác nhận, không còn là lời đồn.

_David Anderson (khi thấy người chơi chọn HS-G): "Vậy là anh đã mở bức thư đó,.. Micheal đã bắt tay với Houndstooth từ trước! Nếu EBITDA tụt them 5%, hắn sẵn sàng hiến dâng tập đoàn cho quỹ để thâu tóm quyền lực"_

## Nếu không chọn HS-G

Người chơi vẫn chẩn đoán và điều trị bình thường, nhưng sẽ thiếu căn cứ để chọn CD-F ở Màn 6 (xem điều kiện tại đó), và thiếu công cụ quản lý rủi ro quản trị ở Màn 9–10.

# Màn hình 3 — Câu hỏi bổ sung

**Lựa chọn:** chọn đúng 2 trong 7 câu hỏi. Mỗi câu hé lộ thêm một góc hẹp của đúng khu vực Hồ sơ tương ứng — kể cả khu vực chưa mở ở Màn 2, nhưng luôn ở mức bề mặt, không thay thế Hồ sơ đầy đủ.

| **Mã** | **Câu hỏi**                                                                    | **Trả lời**                                                                                                                                                                                                         |
| ------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| CH1-A  | Traffic giảm, e-commerce tăng — khách rời bỏ hay đổi kênh?                     | Phần lớn đổi kênh; biên lợi nhuận online thấp hơn đáng kể so với tại cửa hàng. Tin đồn tái cấu trúc gia đình khiến một phần khách chuyển sang đối thủ vì sợ công ty đóng cửa, hiện tại chúng tôi đang rất khó khan. |
| CH1-B  | Chương trình vốn nào bị trì hoãn lâu nhất?                                     | Store renovation — gác 3 năm liên tiếp vì omnichannel luôn được ưu tiên trước. Chú tôi - Richard nhiều lần bỏ phiếu trì hoãn vì đang đàm phán bán tài sản riêng.                                                    |
| CH1-C  | Holiday kém 10% thì thanh khoản ra sao?                                        | Công ty vẫn đủ cash hoạt động, nhưng biên độ an toàn với covenant mỏng đi đáng kể.                                                                                                                                  |
| CH1-D  | Khoản nợ nào đến hạn sớm nhất?                                                 | Một phần secured notes đáo hạn trong 18 tháng. Nhưng nguy hiểm nhất là trigger EBITDA trong thỏa thuận Houndstooth có thể nổ sớm hơn nếu operating performance suy yếu.                                             |
| CH1-E  | Nhóm sản phẩm nào đang hoạt động tốt nhất?                                     | Đồ chơi truyền thống, nhưng quy mô nhỏ hơn nhiều phần đang suy yếu — và đây cũng là mảng Richard đang âm thầm rao bán vì giá trị thanh lý cao.                                                                      |
| CH1-F  | Ban lãnh đạo có đồng thuận không?                                              | Tiếc là không —Em trai tôi, Michael đã mời riêng một luật sư chuyên "chuyển giao quyền lực" đến họp. Nó căn bản không coi tôi ra gì hết, di sản của cha có lẽ cũng chỉ là lợi nhuận trong mắt nó thôi.              |
| CH1-G  | **Có một điều khoản đặc biệt nào giữa Michael và nhà đầu tư bên ngoài không?** | **Có một thỏa thuận có điều kiện có thể ảnh hưởng đến quyền sở hữu của gia đình, nhưng chi tiết cụ thể (điều kiện kích hoạt, đối tác) anh hãy xem hồ sơ đầy đủ.**                                                   |

_Chi phí cơ hội: hỏi về khu vực đã có Hồ sơ đầy đủ chỉ củng cố thêm chi tiết nhỏ. Dùng cả 2 lượt vào cùng một khu vực là lãng phí cơ hội duy nhất để thu hẹp khoảng trống thông tin trước khi vào BCTC đầy đủ._

# Màn hình 4 — Báo cáo tài chính đầy đủ

Không giới hạn lượt xem từ đây. CFO đưa toàn bộ báo cáo.

_CFO (Bước vào, đưa xấp tài liệu): "Đây là toàn bộ bctc hợp nhất đã kiểm toán"_

### Consolidated Income Statement (triệu USD)

| **Chỉ tiêu**                             | **FY2024** | **FY2025** | **FY2026** |
| ---------------------------------------- | ---------- | ---------- | ---------- |
| Net Sales                                | 12,361     | 11,802     | 11,540     |
| Cost of Sales                            | (7,931)    | (7,576)    | (7,432)    |
| **Gross Margin**                         | **4,430**  | **4,226**  | **4,108**  |
| SG&A                                     | (3,915)    | (3,593)    | (3,480)    |
| Depreciation & Amortization              | (377)      | (343)      | (317)      |
| Other Income, net                        | 53         | 88         | 149        |
| **Operating Earnings**                   | **191**    | **378**    | **460**    |
| Interest Expense                         | (451)      | (429)      | (457)      |
| Interest Income                          | 4          | 3          | 2          |
| **Earnings / (Loss) Before Tax**         | **(256)**  | **(48)**   | **5**      |
| Income Tax Expense                       | (32)       | (76)       | (34)       |
| **Net Loss**                             | **(288)**  | **(124)**  | **(29)**   |
| Noncontrolling Interest                  | (4)        | (6)        | (7)        |
| **Net Loss attributable to Toys "R" Us** | **(292)**  | **(130)**  | **(36)**   |

### Operating Metrics

| **Chỉ tiêu**     | **FY2024** | **FY2025** | **FY2026** |
| ---------------- | ---------- | ---------- | ---------- |
| Gross Margin %   | 35.8%      | 35.8%      | 35.6%      |
| SG&A / Sales     | 31.7%      | 30.4%      | 30.2%      |
| Adjusted EBITDA  | \$642m     | \$800m     | \$792m     |
| Consolidated SSS | 0.0%       | +0.9%      | \-1.4%     |

### Balance Sheet Snapshot — FY2026

# Assets

| **Chỉ tiêu**            | **Giá trị** |
| ----------------------- | ----------- |
| Cash & Cash Equivalents | \$566m      |
| Receivables             | \$255m      |
| Inventory               | \$2.476bn   |
| Total Current Assets    | \$3.389bn   |
| Property & Equipment    | \$3.067bn   |

# Capital & Funding

| **Chỉ tiêu**          | **Giá trị**      |
| --------------------- | ---------------- |
| Total Indebtedness    | ~\$4.8bn         |
| Secured Indebtedness  | ~\$3.4bn         |
| Stockholders' Deficit | ~\$1.3bn deficit |

## Chú thích quản trị (chỉ hiện nếu đã mở HS-G ở Màn 2)

Khoản \$149 triệu "Other Income, net" năm nay phần lớn đến từ tiền bảo hiểm nhân thọ chi trả sau khi cổ đông sáng lập qua đời — hiện đang bị giữ trong tài khoản tranh chấp: David muốn tái đầu tư, Michael và Richard muốn chia ngay. Đây là lý do khoản mục này lớn bất thường so với 2 năm trước.

_CFO: "Đây là hồ sơ đầy đủ. Nếu cần thêm một câu hỏi trước khi chẩn đoán, tôi sẽ trả lời."_

# Màn hình 5 — Câu hỏi cuối

**Lựa chọn:** chọn đúng 1 trong 7 câu hỏi. Câu hỏi này mang tính phản tư hơn khai thác dữ kiện mới — nó cho thấy giả thuyết nào người chơi đang nghiêng về.

_Người chơi: "Được rồi, tôi đã xem qua các bộ hồ sơ. Tình trạng của Toy Kingdom quả thực không mấy lạc quan. Nếu muốn cứu công ty, anh hãy trả lời thành thật câu hỏi của tôi"_

_(Hiện màn hình chọn các câu hỏi)_

| **Mã** | **Câu hỏi**                                                                          | **Trả lời**                                                                                                                                                                                                 |
| ------ | ------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| CH2-A  | Khoản nào đang khó cắt nhất?                                                         | Một số nghĩa vụ tài chính có thể refinance nhưng không biến mất; Michael đang thúc cắt marketing mạnh hơn mức CFO khuyến nghị.                                                                              |
| CH2-B  | Có thêm vốn thì dùng vào đâu?                                                        | Digital, fulfillment, renovation. Nếu Houndstooth thắng, phần lớn khoản đầu tư này sẽ bị dừng ngay lập tức!                                                                                                 |
| CH2-C  | Sao không đóng mạnh cửa hàng?                                                        | Đúng là một số nên đóng, nhưng cắt quá sâu sẽ làm nhỏ sales base; nhiều hợp đồng thuê do Richard đứng tên cá nhân nên không thể tùy ý quyết định được.                                                      |
| CH2-D  | Amazon biến mất thì công ty khỏe chưa?                                               | Không — những áp lực nội bộ (gia đình, nợ nần) vẫn còn nguyên.                                                                                                                                              |
| CH2-E  | Nếu loại bỏ được phần lớn áp lực nợ, công ty đã giải quyết được toàn bộ vấn đề chưa? | Vẫn chưa đâu — vẫn phải xử lý store base và cạnh tranh. Hết nợ thì Michael/Richard có khả năng sẽ chuyển hẳn sang đấu tố quyền kiểm soát.                                                                   |
| CH2-F  | Lo nhất điều gì 12 tháng tới?                                                        | Liquidity & refinancing. David (thì thầm): Michael sẽ dùng khoản lỗ này để thuyết phục cổ đông nhỏ lẻ rằng tôi hết năng lực.                                                                                |
| CH2-G  | Nếu EBITDA giảm thêm 5%, điều gì xảy ra ngay lập tức?                                | (hiển thị đầy đủ nếu đã mở HS-G) Điều khoản Houndstooth kích hoạt tự động — không cần họp hội đồng, không cần đa số phiếu. Micheal sẽ cấu kết với quỹ thâu tóm Toy Kingdom, và tôi sẽ bị đẩy ra ngoài cuộc. |

# Màn hình 6 — Chẩn đoán

**Lựa chọn:** chọn đúng 1 trong 6 chẩn đoán. Mỗi giả thuyết được trình bày cùng bằng chứng ủng hộ mạnh nhất — không có nhãn tốt/xấu.

_David Anderson: "Thị trường, vận hành, thanh khoản, hay cấu trúc nợ? Liệu đâu mới là nút thắt thực sự?"_

| **Mã** | **Chẩn đoán**                                                | **Bằng chứng ủng hộ mạnh nhất**                                                          |
| ------ | ------------------------------------------------------------ | ---------------------------------------------------------------------------------------- |
| CD-A   | **Áp lực Cạnh tranh (Competitive Pressure)**                 | HS-A, CH1-A — áp lực cạnh tranh & đổi kênh, đo được                                      |
| CD-B   | **Nút thắt Vận hành (Operational Bottleneck)**               | HS-B, CH1-B — CapEx bị dồn nén nhiều năm                                                 |
| CD-C   | **Biểu hiện Thanh khoản tức thời (Liquidity Manifestation)** | HS-C, CH1-C — biên an toàn covenant mỏng                                                 |
| CD-D   | **Nguyên nhân Cấu trúc (Structural Driver)**                 | HS-D, CH1-D — high leverage, significant secured debt and upcoming refinancing pressure. |
| CD-E   | **Áp lực Danh mục Sản phẩm (Category Pressure)**             | HS-E, CH1-E — category truyền thống co lại                                               |
| CD-F   | **Chẩn đoán Đa yếu tố (Multi-Factor Diagnosis)**             | Cần HS-D và ít nhất 1 trong (HS-A / HS-B / HS-E / HS-F)                                  |

## Điều kiện chọn CD-F

Nếu chưa mở HS-D và ít nhất một hồ sơ khác trong nhóm liên quan, hệ thống cảnh báo: "Chẩn đoán hỗn hợp cần nhiều bằng chứng hơn bạn có — hội đồng có thể coi đây là né tránh trách nhiệm." **Uy tín −1.**

CD-F không được mô tả là chẩn đoán "đúng nhất". Đây là chẩn đoán có phạm vi rộng nhất, đổi lại đòi hỏi bằng chứng rộng nhất, và không tự cho biết phác đồ nào sẽ hiệu quả — 5 chẩn đoán còn lại đều dẫn thẳng đến một hướng điều trị rõ ràng hơn.

**Sáu tên gọi trên thể hiện SÁU TẦNG khác nhau của cùng một vấn đề (từ bề mặt đến cấu trúc), không phải một đáp án đúng/sai duy nhất. "Nguyên nhân Cấu trúc" (CD-D) được thiết kế ở tầng sâu nhất và có bằng chứng bao trùm nhất, nhưng chọn một tầng khác vẫn là một chẩn đoán hợp lệ, có phác đồ và hệ quả riêng — không bị hệ thống ngầm coi là "chọn sai".**

# Màn hình 7 — Bàn điều trị

**Lựa chọn:** chọn đúng 1 trong 6 phác đồ. Không có phác đồ nào thắng trên mọi tiêu chí — mỗi phác đồ đặt cược vào một hoặc hai trục điểm khác nhau.

_David Anderson: "Vậy bây giờ tôi nên bắt đầu từ đâu?"_

| **Mã** | **Phác đồ**              | **Điều kiện / Đánh đổi / Rủi ro**                                                                                                                                                                                                                                                                      |
| ------ | ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| PD-A   | Invest to Compete        | Cần Uy tín ≥ Trung bình để được duyệt (thanh khoản đã mỏng theo HS-C). Nếu không đủ, tự động hạ xuống PD-B **— hệ thống hiển thị: "Hội đồng chưa đủ tin tưởng để duyệt kế hoạch đầu tư — bạn buộc phải triển khai phương án cắt giảm chi phí."**.                                                      |
| PD-B   | Deep Cost Cutting        | Không cần điều kiện. Cải thiện cash ngắn hạn rõ rệt, nhưng thu nhỏ sales base dài hạn.                                                                                                                                                                                                                 |
| PD-C   | Debt Restructuring       | Phụ thuộc phản ứng chủ nợ. Nếu ưu tiên Creditors ở Màn 9, khả năng đạt được thỏa thuận thuận lợi hơn                                                                                                                                                                                                   |
| PD-D   | Asset Sale               | Cải thiện thanh khoản ngay, nhưng thường phải bán đúng phần tài sản khỏe nhất (đồ chơi truyền thống) để bán được giá tốt.                                                                                                                                                                              |
| PD-E   | Bankruptcy Restructuring | Xử lý nợ triệt để nhất và vô hiệu hóa thỏa thuận cổ phần chưa kích hoạt của Michael, nhưng rủi ro mất niềm tin vendor/khách hàng cao nhất.                                                                                                                                                             |
| PD-F   | Combined Restructuring   | Cần Uy tín Cao. Nếu không đủ, tự động hạ xuống PD-B **— hệ thống hiển thị: "Hội đồng chưa đủ tin tưởng để duyệt một kế hoạch tái cấu trúc nhiều mặt trận cùng lúc — bạn buộc phải thu hẹp lại thành cắt giảm chi phí."**. Nhiều mảng phải chạy song song — rủi ro thực thi cao nhất trong 6 phương án. |

# Màn hình 8 — **Thời điểm & Trình tự hành động**

**Lựa chọn:** chọn đúng 1 trong 4 thời điểm. Không có lựa chọn trung lập — mỗi mốc đổi lấy một loại rủi ro khác nhau.

_David Anderson: "Tôi hiểu rồi, vậy thời điểm hành động như thế nào là hợp lý?"_

| **Mã** | **Thời điểm**                                  | **Rủi ro**                                                                                             |
| ------ | ---------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| TG-A   | Thực hiện ngay                                 | Dựa trên dữ liệu holiday chưa đầy đủ; Michael có cớ đòi họp cổ đông sớm để bác kế hoạch vì "vội vàng". |
| TG-B   | Sau holiday season                             | Có dữ liệu thật, nhưng nếu holiday kém, thanh khoản xấu đi trước khi kịp hành động.                    |
| TG-C   | **Thử tái cấp vốn trước khi cam kết kế hoạch** | Nếu thành công, vị thế mạnh hơn hẳn; nếu thất bại, thị trường đọc là tín hiệu yếu — Uy tín −1.         |
| TG-D   | Chờ 6 tháng                                    | Rủi ro cao nhất nếu thanh khoản mỏng — có thể hết runway trước khi cải thiện vận hành kịp phát huy.    |

# Màn hình 9 — Chuẩn bị

**Lựa chọn:** chọn đúng 3 trong 7 nhóm ưu tiên trước khi công bố kế hoạch.

| **Nhóm**            | **Được ưu tiên nghĩa là...**                                           | **Đánh đổi thường gặp**                                                                                           |
| ------------------- | ---------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| Suppliers           | Đàm phán điều khoản trước công bố                                      | Creditors có thể nghi ngờ bạn đang giấu tin xấu                                                                   |
| Employees           | Trấn an nội bộ, giữ nhân sự chủ chốt                                   | Chậm hơn trong xử lý Creditors/Landlords                                                                          |
| Customers           | Giữ niềm tin mua sắm                                                   | Tốn nguồn lực marketing đáng lẽ dồn cho renovation                                                                |
| Creditors           | Đàm phán sớm điều khoản nợ                                             | Suppliers có thể siết payment terms vì lo ngại                                                                    |
| Landlords           | Giữ quan hệ thuê mặt bằng                                              | Ít thời gian đàm phán Creditors                                                                                   |
| Holiday Inventory   | Đảm bảo hàng hóa mùa cao điểm                                          | Giảm cash preservation nếu đã chọn PD-B                                                                           |
| Governance & Family | Giữ đội ngũ điều hành ổn định và báo trước cho cổ đông gia đình nhỏ lẻ | Chậm truyền thông ra bên ngoài; nếu Michael biết trước, hắn có thể phá đàm phán Creditors bằng thông tin chọn lọc |

David (khi chọn các tổ hợp khác): "Một kế hoạch tốt sẽ ưu tiên những đối tác giữ cho công ty sống sót, tôi sẽ cân nhắc và hành động thật kỹ càng"

David (khi chọn tổ hợp có Governance & Family): "Đúng vậy, tôi phải minh bạch với các cổ đông nhỏ lẻ trong gia tộc trước. Nếu khóa được lá phiếu của họ, Michael sẽ không thể tự ý thao túng Hội đồng."

# Màn hình 10 — Diễn biến

Nội dung là hàm số của 3 lựa chọn trước: Phác đồ (Màn 7), Thời điểm (Màn 8), Nhóm ưu tiên (Màn 9). Bảy tab cập nhật xuất hiện tuần tự:

| **Tab**                 | **Nội dung**                                                                                                                                                                                                                                                                                                                                                 |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 1\. Sales Update        | Thay đổi theo store traffic, inventory, customer confidence                                                                                                                                                                                                                                                                                                  |
| 2\. Vendor Update       | Một số nhà cung cấp giữ nguyên điều khoản; một số đòi cash-in-advance nếu không ưu tiên Suppliers/Creditors                                                                                                                                                                                                                                                  |
| 3\. Liquidity Update    | Cash & borrowing capacity thay đổi theo phác đồ đã chọn                                                                                                                                                                                                                                                                                                      |
| 4\. Store Update        | Renovation tiếp tục hoặc bị hoãn                                                                                                                                                                                                                                                                                                                             |
| 5\. Digital Update      | Online sales thay đổi, không nhất thiết bù cho store sales                                                                                                                                                                                                                                                                                                   |
| 6\. Debt Update         | Bond prices, refinancing conditions phản ứng theo quyết định                                                                                                                                                                                                                                                                                                 |
| 7\. Family/Board Update | Nếu ưu tiên Governance & Family: David đã chủ động công khai âm mưu của Michael trước toàn thể gia tộc, David có phiếu từ các cổ đông nhỏ lẻ, Michael bị cô lập hoàn toàn, thỏa thuận với Houndstooth bị vỡ bài trước khi EBITDA kịp chạm ngưỡng.<br><br>Nếu không ưu tiên: Michael và Richard có thể họp riêng và thống nhất bỏ phiếu chống David ở Màn 11. |

## Ví dụ logic hệ quả

| **Tổ hợp lựa chọn**                            | **Hệ quả**                                                                                                                            |
| ---------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| PD-B + TG-A + không ưu tiên Employees          | Store Update: thêm đóng cửa ngoài kế hoạch do thiếu nhân sự quản lý                                                                   |
| PD-A nhưng Uy tín không đủ ở Màn 7             | Liquidity Update: board đã tự hạ kế hoạch xuống mức PD-B tối thiểu                                                                    |
| PD-C + ưu tiên Creditors                       | Debt Update: chủ nợ đồng ý gia hạn nhưng tăng lãi suất 1.0–1.5%                                                                       |
| Không ưu tiên Governance & Family + đã mở HS-G | Family Update: Michael dùng đúng thông tin đã lộ ở Màn 2 để thuyết phục thêm cổ đông                                                  |
| **Chọn CD-A, chưa mở HS-D**                    | **Debt Update: dù traffic đã ổn định trở lại, lãi vay vẫn ăn gần hết Operating Earnings — vấn đề không chỉ nằm ở sales**              |
| **Chọn CD-B, chưa mở HS-C**                    | **Liquidity Update: dù CapEx được cấp đủ, biên an toàn covenant vẫn mỏng — mạng lưới cửa hàng không phải nút thắt duy nhất**          |
| **Chọn CD-C, chưa mở HS-D**                    | **Debt Update: refinance chỉ mua thêm thời gian — nếu không xử lý cấu trúc nợ, biên thanh khoản sẽ mỏng trở lại sau vài quý**         |
| **Chọn CD-E, chưa mở HS-D**                    | **Sales Update: category truyền thống đã phục hồi nhẹ, nhưng đòn bẩy tài chính vẫn ở mức nguy hiểm**                                  |
| **Ưu tiên Employees**                          | **Store Update: nhân sự chủ chốt được giữ lại giúp quá trình đóng cửa hàng diễn ra suôn sẻ hơn, giảm rủi ro đóng cửa ngoài kế hoạch** |
| **Ưu tiên Customers**                          | **Sales Update: khách hàng tiếp tục mua sắm bình thường dù có tin đồn tái cấu trúc gia đình**                                         |
| **Ưu tiên Landlords**                          | **Store Update: chủ nhà đồng ý gia hạn thêm một số hợp đồng thuê, giảm áp lực phải đóng cửa hàng**                                    |

# Màn hình 11 — Tái khám

_David (CEO): "Chúng ta vừa trải qua một trận cuồng phong! Các dữ liệu thực tế đã phơi bày bộ mặt của Michael, vị thế của các bên đang trở nên rõ rang. Trước khi quyết định tiến thêm bước nào, liệu anh có muốn thay đổi chẩn đoán hay phác đồ không?"_

| **Lựa chọn**                                                          | **Chi phí**                                                                                                                                                                                                                                                                      |
| --------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Giữ nguyên chẩn đoán & phác đồ                                        | Không mất Uy tín<br><br>**_David (gật đầu kiên định):_** _"Tôi tin vào góc nhìn của anh, ta sẽ giữ nguyên lộ trình"_                                                                                                                                                             |
| Đổi chẩn đoán (chọn lại CD-A...F, không mở lại được HS đã khóa)       | −1 Uy tín nếu không dựa trên dữ liệu mới từ Màn 10; 0 nếu Màn 10 vừa hé lộ bằng chứng trực tiếp mâu thuẫn với chẩn đoán cũ<br><br>**_David:_** _"Dữ liệu mới có lẽ chính là căn cứ cho thay đổi này. Tôi hiểu ý anh, hội đồng cũng không thể trách ta thiếu nhất quán!"_         |
| Đổi phác đồ (chọn lại PD-A...F, điều kiện Uy tín ở Màn 7 vẫn áp dụng) | −1 Uy tín nếu không dựa trên dữ liệu mới; 0 nếu có<br><br>**_David (mặt biến sắc, lo lắng):_** _"Thay đổi vào phút chót sao? Điều này có khả năng làm bại lộ sự hoảng loạn của chúng ta… Uy tín với thị trường có thể sụt giảm nghiêm trọng! Chúng ta nên bàn bạc lại kỹ càng."_ |

# Màn hình 12 — Đóng case: Ma trận kết cục

## Công thức tính điểm Sức khỏe Tài chính

| **Sự kiện**                             | **Điểm**           |
| --------------------------------------- | ------------------ |
| Chọn PD-A và được duyệt (Uy tín đủ)     | +2                 |
| Chọn PD-A nhưng bị hạ xuống PD-B        | Dùng điểm của PD-B |
| Chọn PD-B                               | +3 (ngắn hạn)      |
| Chọn PD-C + ưu tiên Creditors ở Màn 9   | +2                 |
| Chọn PD-C, không ưu tiên Creditors      | 0                  |
| Chọn PD-D                               | +2                 |
| Chọn PD-E + ưu tiên Suppliers           | +1                 |
| Chọn PD-E, không ưu tiên Suppliers      | −2                 |
| Chọn PD-F, Uy tín Cao                   | +4                 |
| Chọn PD-F, Uy tín không đủ              | Dùng điểm của PD-B |
| Đã chọn TG-D                            | −1                 |
| Không ưu tiên Holiday Inventory ở Màn 9 | −1                 |

**Quy đổi (đã chốt lại): tổng điểm ≥ 4 = Ổn định tài chính · 1–3 = Ổn định mong manh · ≤ 0 = Sụp đổ tài chính.**

**Ghi chú cho đội Game Logic: điểm tối đa lý thuyết theo bảng trên là +4 (PD-F, Uy tín Cao, không TG-D, có ưu tiên Holiday Inventory). Ngưỡng cũ "≥5" không thể đạt được với thang điểm hiện tại nên đã chốt lại là "≥4" để nhất quán — không cần thay đổi công thức cộng điểm ở trên.**

## Công thức tính điểm Ổn định Quản trị — Gia tộc

| **Sự kiện**                                     | **Điểm**   |
| ----------------------------------------------- | ---------- |
| Đã mở HS-G ở Màn 2                              | +1         |
| Ưu tiên nhóm Governance & Family ở Màn 9        | +2         |
| Không ưu tiên nhóm này                          | −1         |
| Đổi chẩn đoán/phác đồ ở Màn 11 mà mất Uy tín    | −1 mỗi lần |
| Sức khỏe Tài chính rơi vào mức Sụp đổ tài chính | −2         |
| Chọn PD-D mà không mở HS-E trước                | −1         |

**Quy đổi:** tổng điểm ≥ 3 = Gia tộc đoàn kết dưới David · 0–2 = Gia tộc chia rẽ nhưng chưa vỡ · <0 = Mất kiểm soát.

## Ma trận 3x3 kết cục cuối case

|                        | **Gia tộc đoàn kết**                                                                                          | **Gia tộc chia rẽ, chưa vỡ**                                                                                        | **Mất kiểm soát**                                                                                                   |
| ---------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| **Sống sót vững**      | "Người kế nghiệp" — David giữ ghế, công ty ổn định, gia đình miễn cưỡng hợp tác.                              | "Hưu chiến có điều kiện" — công ty ổn nhưng David nhượng bớt quyền lực/cổ tức để giữ hòa khí.                       | "Thắng trận, thua nhà" — công ty khỏe nhưng David bị phế truất hoặc buộc bán rẻ cổ phần cho Houndstooth.            |
| **Sống sót mong manh** | "Cầm cự cùng nhau" — công ty sống nhưng mỏng manh; gia đình đoàn kết vì cùng chung rủi ro.                    | "Chia phần trước khi chìm" — công ty nhỏ hơn hẳn; Michael/Richard rút được phần lớn giá trị; David bị ép nhượng bộ. | "Tự ăn thịt mình" — công ty còn tồn tại về kỹ thuật nhưng gia đình tan đàn xẻ nghé, kiện tụng tiêu tốn vốn còn lại. |
| **Sụp đổ tài chính**   | "Chết trong danh dự" — công ty phá sản/bị tiếp quản nhưng ba anh em cùng chịu trách nhiệm, không đổ lỗi nhau. | "Quân cờ của quỹ" — Houndstooth hoặc chủ nợ tiếp quản; gia đình đấu đá đến phút cuối.                               | "Sụp đổ toàn diện" — tòa án tiếp quản tài sản, ba anh em kiện nhau ngay trong phiên tòa phá sản.                    |

## Vai trò của Uy tín trong kết cục

Uy tín (Thấp / Trung bình / Cao) không đổi ô kết cục, mà đổi cách báo chí và hội đồng mô tả người chơi trong ô đó. Ví dụ ở ô "Người kế nghiệp":

- **Uy tín Cao** → được ca ngợi là bác sĩ phẫu thuật lạnh lùng, quyết đoán đúng lúc
- **Uy tín Thấp** → bị coi là may mắn hơn là giỏi, hội đồng vẫn còn nghi ngờ năng lực

## Bảng tổng kết hồ sơ (hiển thị cuối case)

| **Trường**                                 | **Giá trị**             |
| ------------------------------------------ | ----------------------- |
| Hồ sơ đã xem (HS-...)                      | ...                     |
| Câu hỏi bổ sung đã hỏi (CH1-...)           | ...                     |
| Câu hỏi cuối (CH2-...)                     | ...                     |
| Chẩn đoán đầu tiên → sau tái khám (CD-...) | ...                     |
| Phác đồ đầu tiên → sau tái khám (PD-...)   | ...                     |
| Thời điểm (TG-...)                         | ...                     |
| Nhóm ưu tiên đã chọn                       | ...                     |
| Uy tín cuối                                | Thấp / Trung bình / Cao |
| Điểm Tài chính → Tier                      | ...                     |
| Điểm Quản trị/Gia tộc → Tier               | ...                     |
| Kết cục (ô ma trận)                        | ...                     |

# So sánh với thực tế

Toys "R" Us filed for Chapter 11 bankruptcy protection in 2017 in an attempt to restructure its debt. Its U.S. business later moved toward liquidation in 2018 after the restructuring effort failed to stabilize the company.

**\[CLOSE CASE\] / \[REOPEN CASE\]**