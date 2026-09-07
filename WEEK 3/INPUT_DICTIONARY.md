# INPUT_DICTIONARY.md
# Mô tả chung về Financial Diagnostic Simulation
## Game Chẩn đoán & Tái cấu trúc Tài chính

### Tổng quan

Game đưa người chơi (Player) nhập vai một **Chuyên gia tư vấn tài chính / Tái cấu trúc doanh nghiệp** qua các giai đoạn tương tác logic trong từng Case Study (ví dụ: Case #01 — Toys "R" Us).

---

## Cấu trúc Phase

| Phase | Tên | Mô tả |
|---|---|---|
| **Phase 1** | Examination & Vitals (Sinh hiệu & Khám tổng quát) | Người chơi tiếp nhận thông tin ban đầu về công ty: ngành, quy mô, lời khai của CEO, và các chỉ số "sinh hiệu" bề mặt (net loss, CapEx gap, free cash flow). |
| **Phase 2** | Deep Diagnostics (Xét nghiệm chuyên sâu & Chẩn đoán Bệnh) | Người chơi yêu cầu và phân tích các dữ liệu tài chính chuyên sâu: Income Statement, Same-Store Sales, Capital Structure, Pre-LBO Cash Flow. Từ đó đưa ra chẩn đoán phân biệt (Differential Diagnosis). |
| **Phase 3** | Treatment & Execution (Phác đồ điều trị & Hệ quả) | Người chơi lựa chọn phác đồ điều trị, xem xét các yếu tố thời điểm thực thi (timing), xác suất thành công, và hậu quả đối với các bên liên quan (stakeholders). |

---

## Quá trình tiến hóa tư duy tài chính

Các Phase không phải là các màn chơi độc lập, mà thể hiện quá trình tiến hóa tư duy tài chính từ:
Triệu chứng bề ngoài (Symptoms)
↓
Bản chất Dòng tiền (Cash Flow Reality)
↓
Đánh đổi Chiến lược (Strategic Trade-offs)

| Giai đoạn tư duy | Câu hỏi trung tâm | Biểu hiện trong game |
|---|---|---|
| **Triệu chứng bề ngoài** | "Bệnh nhân có vấn đề gì?" | Net loss kéo dài, CapEx bị cắt, nợ giao dịch dưới mệnh giá |
| **Bản chất Dòng tiền** | "Tại sao lại thiếu tiền mặt?" | EBIT tăng nhưng lãi vay ăn hết lợi nhuận; DSO cao nhưng vận hành vẫn ổn |
| **Đánh đổi Chiến lược** | "Chữa thế nào và cái giá phải trả là gì?" | Chapter 11 đúng lý thuyết nhưng sai thời điểm → mất niềm tin nhà cung cấp |

---

## Độ phức tạp tăng dần

Khi đi sâu vào case, các cạm bẫy tâm lý và yếu tố nhiễu (confounders) ngày càng phức tạp:

| Cấp độ | Thách thức | Ví dụ trong Case #01 |
|---|---|---|
| **Level 1 — Quan sát** | Phân biệt triệu chứng thật và nhiễu | Net loss kéo dài có thể do vận hành kém HOẶC do nợ đè |
| **Level 2 — Chẩn đoán** | Phân biệt bệnh có cùng triệu chứng | Bệnh vận hành (Operational) vs Bệnh cấu trúc vốn (Capital Structure) — triệu chứng bề ngoài giống hệt nhau |
| **Level 3 — Điều trị** | Đánh đổi giữa lý thuyết và thực thi | Chapter 11 là công cụ đúng để xóa nợ, nhưng nếu nộp trước mùa lễ hội sẽ kích hoạt phản ứng dây chuyền từ nhà cung cấp |

---

### Case #01 — Toys "R" Us (Capital Structure Disease)

Mục đích: liệt kê **mọi trường dữ liệu** được nạp vào game cho case này, để bất kỳ ai trong team cũng hiểu field đó nghĩa là gì, đơn vị gì, định dạng gì, lấy từ đâu, và nó ảnh hưởng tới output/quyết định nào trong game.

| Field | Ý nghĩa (meaning) | Đơn vị (unit) | Định dạng (format) | Nguồn (source) | Output bị ảnh hưởng |
|---|---|---|---|---|---|
| `net_sales` | Doanh thu thuần hợp nhất theo năm tài chính | triệu USD | number (int) | Báo cáo kết quả kinh doanh FY2016 (8-K, PRNewswire 12/04/2017) | Vitals hiển thị cho player ở bước "khám tổng quát"; dùng để tính % thay đổi YoY |
| `operating_earnings` (EBIT) | Lợi nhuận từ hoạt động kinh doanh, trước lãi vay và thuế | triệu USD | number (int) | 8-K FY2016 full year results | **Manh mối chẩn đoán #1** — nếu EBIT tăng YoY mà net loss vẫn âm → gợi ý bệnh cấu trúc vốn, không phải bệnh vận hành |
| `adjusted_ebitda` | EBITDA đã điều chỉnh loại trừ khoản bất thường (impairment...) | triệu USD | number (int) | 8-K FY2015/FY2016 reconciliation table | Dùng làm chỉ số phụ để so sánh "sức khỏe vận hành thô" qua các năm |
| `interest_expense` | Chi phí lãi vay ròng phải trả trong năm | triệu USD | number (int), có khoảng dao động 400–450 do các nguồn công khai không thống nhất tuyệt đối | 8-K reconciliation (426/447) + PESP report (ước tính tròn "400tr/năm") | Dùng để tính "EBIT còn lại sau lãi vay" — con số then chốt giải thích vì sao công ty lỗ ròng dù vận hành ổn |
| `net_loss` | Lợi nhuận/lỗ ròng sau cùng | triệu USD, số âm = lỗ | number (int) | 8-K FY2016 | Hiển thị ở "sinh hiệu" ban đầu — chỉ số gây nhiễu vì giống nhau ở cả 2 giả thuyết bệnh |
| `same_store_sales_*` | % thay đổi doanh thu tại các cửa hàng đã mở >1 năm, theo khu vực | % (số thập phân, có dấu âm) | float | 8-K FY2016 full year highlights | **Manh mối chẩn đoán #2** — mức giảm 1 chữ số (không phải 2 chữ số) loại trừ giả thuyết "sụp đổ vận hành do Amazon" |
| `debt_pct` / `equity_pct` (pre/post LBO) | Tỷ trọng nợ và vốn chủ sở hữu trong cấu trúc vốn | % | integer | Bài phân tích LBO (LinkedIn, đối chiếu số liệu 10-K/424B5 giai đoạn 2004-2005) | **Manh mối chẩn đoán #3** — bước nhảy 30%→78% xảy ra tại MỘT thời điểm (sự kiện LBO), không tăng dần → chỉ ra nguyên nhân là quyết định tài chính, không phải xói mòn thị trường dần dần |
| `operating_cash_flow_3yr` | Dòng tiền từ hoạt động kinh doanh, 3 năm liền trước LBO (2002-2004) | triệu USD | array[int] | Bài phân tích LBO dẫn lại số liệu 10-K | Dùng để chứng minh công ty "khỏe mạnh trước khi bị can thiệp" — bằng chứng loại trừ giả thuyết bệnh vận hành có từ trước |
| `transaction_value_usd_m` | Tổng giá trị thương vụ LBO 2005 | triệu USD | integer (6600) | SEC DEFA14A 17/03/2005 + 8-K hoàn tất thương vụ 21/07/2005 | Bối cảnh nền (background), không trực tiếp tính điểm nhưng dùng cho narrative/hội thoại NPC |
| `debt_raised_usd_m` | Số nợ vay để tài trợ thương vụ | triệu USD | integer (~5300) | Bài phân tích LBO (đối chiếu công bố nợ khi phá sản ~5 tỷ USD, PESP) | Dùng để tính `annual_interest_burden` giả định (lãi suất ngụ ý ≈ 400/5300 ≈ 7.5%/năm) |
| `annual_interest_burden_usd_m` | Số tiền lãi vay cố định phải trả mỗi năm do khoản nợ LBO | triệu USD | integer (400, làm tròn) | PESP report + hồ sơ phá sản 9/2017 ("~400 triệu USD/năm") | Biến trung tâm của toàn bộ case — đây là con số "giết chết bệnh nhân dù vận hành ổn" |
| `sponsor_fees_extracted_usd_m` | Tổng phí + lãi mà 3 quỹ sở hữu (KKR/Bain/Vornado) thu về trong thời gian sở hữu | triệu USD | integer (464) | PESP report (breakdown: 128 phí giao dịch + 185 phí tư vấn + 143 lãi + ~8 chi phí) | Dùng làm "bằng chứng động cơ" trong hội thoại chẩn đoán — không dùng để tính điểm số học nhưng dùng để tính điểm thuyết phục (persuasion score) khi player giải thích chẩn đoán |
| `treatment_options[].success_prob_base` | Xác suất cơ sở của mỗi phác đồ điều trị THÀNH CÔNG nếu không có modifier | 0.0–1.0 | float | **Giả định thiết kế của nhóm game** (KHÔNG có nguồn tài chính thật — xem ASSUMPTIONS.md) | Trực tiếp quyết định kết quả random trong game engine khi player chọn phác đồ |
| `treatment_options[].success_prob_modifier` | Hệ số cộng/trừ vào xác suất cơ sở tùy điều kiện bối cảnh (vd chủ nợ có phải sponsor không) | delta, -1.0 đến +1.0 | float | Giả định thiết kế, lấy cảm hứng từ diễn biến thật (chủ nợ TRU có liên quan sponsor; TRU nộp Chapter 11 ngay trước mùa lễ hội) | Thay đổi kết quả treatment phase tùy lựa chọn trước đó của player |
| `real_world_outcome` | Kết quả thực tế đã xảy ra, dùng để so sánh sau khi player chơi xong | text (string) | string | Tổng hợp tin tức công khai (CFO.com, PRNewswire, Reuters qua tra cứu) | Hiển thị ở màn hình "So sánh với thực tế" sau khi player hoàn thành case |

---

**Quy ước bắt buộc cho mọi field mới thêm sau này:**
1. Field nào lấy từ nguồn tài chính thật → phải có dòng tương ứng trong `SOURCE_USE_MAP.md`.
2. Field nào là giả định thiết kế (không truy được về nguồn thật) → phải có dòng tương ứng trong `ASSUMPTIONS.md`, không được để lẫn vào bảng trên mà không đánh dấu.
3. Không thêm field vào JSON case mà chưa thêm dòng vào file này — nếu không truy được ý nghĩa/đơn vị/nguồn, field đó coi như "chưa sẵn sàng" theo tiêu chí cuối trang.
