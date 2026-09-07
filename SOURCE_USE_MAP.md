# SOURCE_USE_MAP.md
### Case #01 — Toys "R" Us

Mục đích: với mỗi nguồn dữ liệu đã dùng, ghi rõ **claim/use** (nó được dùng để khẳng định điều gì trong game) và **limitation** (nó KHÔNG chứng minh được điều gì, hoặc có độ tin cậy tới đâu). Không có nguồn nào được dùng để khẳng định vượt quá những gì nó thực sự nói.

---

### Nguồn 1 — SEC Form 8-K, Toys "R" Us, "Reports Results for the Full Year and Fourth Quarter of Fiscal 2016" (PRNewswire, 12/04/2017)

- **Claim/use trong game**: Cung cấp số liệu chính thức về net sales (11.540tr), operating earnings (460tr, tăng so với 378tr năm trước), adjusted EBITDA (792tr), net loss (-36tr), và same-store sales (-1,4% hợp nhất). Đây là nguồn nền cho toàn bộ "manh mối chẩn đoán #1 và #2".
- **Limitation**:
  - Đây là số liệu do chính công ty công bố (self-reported), không phải báo cáo đã kiểm toán độc lập ở dạng game đang trích (một số số liệu quý trong bản gốc còn ghi rõ "preliminary and unaudited").
  - Chỉ phản ánh 1 năm tài chính (FY2016) — không tự nó chứng minh xu hướng dài hạn nếu không đối chiếu thêm các năm khác.
  - Không nói trực tiếp "nguyên nhân gốc là cấu trúc vốn" — đây là **suy luận của người thiết kế case** dựa trên việc đối chiếu EBIT với interest expense, không phải kết luận do chính công ty phát biểu.

### Nguồn 2 — SEC DEFA14A, "Toys 'R' Us, Inc. Announces Agreement to be Acquired by KKR, Bain Capital and Vornado" (17/03/2005) + 8-K hoàn tất thương vụ (21/07/2005)

- **Claim/use trong game**: Xác nhận giá trị thương vụ LBO 6,6 tỷ USD, các bên tham gia (KKR, Bain, Vornado), thời điểm hoàn tất giao dịch (tháng 7/2005).
- **Limitation**:
  - Đây là thông cáo báo chí (press release) tại thời điểm công bố — mang tính chất PR, dùng ngôn từ tích cực từ cả 2 phía (không có thông tin về rủi ro cấu trúc vốn tương lai, vì tại thời điểm đó rủi ro chưa xảy ra).
  - Không chứa chi tiết cơ cấu nợ/vốn cụ thể sau giao dịch — con số 78% nợ/22% vốn phải lấy từ nguồn 3.

### Nguồn 3 — Bài phân tích "The Rise and Collapse of Toys 'R' Us" (LinkedIn, tác giả Maano Andy Thovhakale, đối chiếu dữ liệu 10-K)

- **Claim/use trong game**: Cung cấp tỷ lệ cấu trúc vốn trước/sau LBO (30%/70% → 78%/22%), dòng tiền hoạt động 3 năm trước LBO (575/801/746 triệu USD), số nợ vay ước tính (~5,3 tỷ USD).
- **Limitation**:
  - Đây là bài viết tổng hợp thứ cấp (secondary source) trên nền tảng mạng xã hội chuyên môn, không phải hồ sơ SEC gốc — mức độ tin cậy thấp hơn nguồn 1 và 2.
  - Không rõ phương pháp tính tỷ lệ 78%/22% (tính theo giá trị sổ sách hay giá trị thị trường của vốn CSH) — game coi đây là **con số minh họa xu hướng**, không phải con số kiểm toán chính xác tuyệt đối.
  - Cần đối chiếu thêm 10-K gốc nếu muốn dùng cho mục đích ngoài giáo dục/demo.

### Nguồn 4 — Private Equity Stakeholder Project (PESP), "KKR, Bain Capital, Vornado repeatedly rewarded themselves for adding debt to Toys 'R' Us"

- **Claim/use trong game**: Cung cấp số liệu lãi vay hàng năm (~400 triệu USD/năm), tổng nợ tại thời điểm phá sản (~5 tỷ USD), và tổng phí/lãi mà 3 sponsor thu về (464 triệu USD, chia nhỏ thành phí giao dịch/tư vấn/lãi/chi phí).
- **Limitation**:
  - PESP là tổ chức vận động chính sách (advocacy organization) có lập trường công khai phản đối mô hình private equity trong LBO bán lẻ — đây **không phải nguồn trung lập**, số liệu có thể được chọn lọc/trình bày theo hướng bất lợi cho PE.
  - Game dùng con số của PESP để dựng "động cơ" trong narrative (giúp case hấp dẫn hơn), nhưng **không dùng con số 464tr để tính điểm số học** trong treatment phase — chỉ dùng cho persuasion/narrative score, đúng như đã ghi chú trong `INPUT_DICTIONARY.md`.
  - Cần gắn nhãn rõ trong UI game "theo ước tính của tổ chức vận động chính sách PESP" nếu hiển thị con số này cho player, để tránh trình bày như sự thật khách quan tuyệt đối.

### Nguồn 5 — CFO.com, "Toys R Us Files Bankruptcy With $5B in Debt" (19/09/2017)

- **Claim/use trong game**: Xác nhận thời điểm nộp đơn Chapter 11 (9/2017) rơi ngay trước mùa xây dựng tồn kho lễ hội, Q4 chiếm ~40% doanh thu năm — dùng làm cơ sở cho `success_prob_modifier.if_filed_before_holiday_season` của Option D.
- **Limitation**:
  - Bài báo, không phải hồ sơ tòa án gốc — số liệu "40% doanh thu Q4" là trích dẫn gián tiếp lời của CEO Dave Brandon trong hồ sơ tòa, không phải số do CFO.com tự kiểm chứng độc lập.
  - Chỉ mô tả hậu quả đã xảy ra ở case thật — game dùng nó để **hiệu chỉnh xác suất trong mô hình giả lập**, không có nghĩa là mọi trường hợp Chapter 11 nộp trước mùa cao điểm đều thất bại với xác suất y hệt.

---

## Nguyên tắc chung khi thêm nguồn mới

1. Mọi con số đưa vào `INPUT_DICTIONARY.md` phải trỏ được về đúng 1 dòng trong file này.
2. Nếu nguồn là advocacy/press release/bài thứ cấp → bắt buộc ghi rõ trong `limitation`, không được trình bày trong game như số liệu kiểm toán.
3. Nếu 2 nguồn đưa ra con số hơi khác nhau (vd interest expense 400 vs 426 vs 447) → không được tự ý chọn 1 số và giấu phần chênh lệch; phải ghi khoảng dao động và nêu rõ ở `INPUT_DICTIONARY.md`.
