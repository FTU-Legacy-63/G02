# SAMPLE_INPUT_OUTPUT.md
### Case #01 — Toys "R" Us

Mục đích: cho mỗi loại thông tin/hành động mẫu mà player đưa vào game, ghi rõ **output hoặc hệ quả** mà hệ thống phải trả về — để dev/QA kiểm tra logic game có khớp thiết kế không.

---

### Ví dụ 1 — Player chẩn đoán vội ngay ở bước "Sinh hiệu" (chưa xem xét nghiệm chuyên sâu)

**Sample information (input của player):**
```json
{
  "phase": "diagnosis",
  "player_diagnosis": "operational_disease_amazon",
  "evidence_requested": [],
  "time_spent_before_diagnosis_sec": 20
}
```

**Intended output / consequence:**
- Kết quả: **Chẩn đoán sai — 0 điểm giai đoạn 1.**
- Thông báo trong game (dạng feedback, không phải la mắng): *"CEO đồng ý với bạn ngay lập tức — vì đây đúng là điều họ đã tin. Nhưng bạn chưa yêu cầu xem cấu trúc vốn hay dòng tiền lịch sử. Một bác sĩ giỏi không chẩn đoán chỉ dựa vào lời khai bệnh nhân."*
- Game **khóa quyền chọn phác đồ điều trị "đúng" (Option A)** ở giai đoạn sau — player chỉ được chọn Option B (cắt giảm vận hành), vì đó là hướng đi tự nhiên nếu tin bệnh là "vận hành". Đây là cách game **để hệ quả của chẩn đoán sai tự nhiên dẫn tới treatment sai**, thay vì chặn cứng.
- Ở màn hình kết case: hiển thị `real_world_outcome` kèm dòng "Bạn đã đi đúng con đường mà công ty thật đã đi — và kết quả thật là thanh lý toàn bộ năm 2018."

---

### Ví dụ 2 — Player yêu cầu thêm dữ liệu trước khi chẩn đoán

**Sample information (input của player):**
```json
{
  "phase": "diagnosis",
  "evidence_requested": ["income_statement_3yr", "capital_structure_pre_post_lbo", "same_store_sales_detail"],
  "player_diagnosis": "capital_structure_disease",
  "cited_clues": ["ebit_increase_yoy", "leverage_jump_single_event", "cash_flow_positive_pre_lbo"]
}
```

**Intended output / consequence:**
- Kết quả: **+30 điểm** (thưởng vì yêu cầu xét nghiệm trước khi kết luận) **+50 điểm** (chẩn đoán đúng) **+20 điểm bonus** (trích dẫn đúng 3/3 manh mối quyết định) = **100 điểm giai đoạn 1**.
- Mở khóa toàn bộ 4 phác đồ điều trị (A/B/C/D) ở giai đoạn 2.
- NPC "CEO" phản hồi bất ngờ trong hội thoại: *"Tôi... chưa từng nghĩ theo hướng đó. Nếu đúng vậy, vấn đề nằm ở thỏa thuận với chủ nợ, không phải ở cửa hàng của tôi."*

---

### Ví dụ 3 — Player chọn Option D (Chapter 11) NHƯNG không kiểm tra thời điểm mùa vụ

**Sample information (input của player):**
```json
{
  "phase": "treatment",
  "chosen_option": "D_chapter_11",
  "context_checked": {"supplier_comms_prepared": false, "timing_checked_vs_holiday_season": false},
  "filing_month": "September"
}
```

**Intended output / consequence:**
- Hệ thống áp modifier: `success_prob_base (0.45) + if_filed_before_holiday_season (-0.35) = 0.10` xác suất thành công.
- Kết quả roll xác suất: **phần lớn lượt chơi sẽ THẤT BẠI.**
- Output hiển thị: sự kiện domino — "Nhà cung cấp Hasbro/Mattel yêu cầu thanh toán trước (COD) → tồn kho mùa lễ hội thiếu hụt → doanh thu Q4 sụp đổ → buộc phải chuyển từ 'tái cấu trúc' sang 'thanh lý toàn bộ'."
- Điểm giai đoạn 2: thấp, kèm ghi chú giải thích: *"Bạn chọn đúng công cụ tài chính (Chapter 11 là cách đúng để xử lý nợ quá tải), nhưng sai thời điểm thực thi. Trong tài chính, 'đúng công cụ, sai thời điểm' vẫn có thể giết bệnh nhân."*

---

### Ví dụ 4 — Player chọn Option D nhưng CÓ chuẩn bị truyền thông trước với nhà cung cấp và tránh nộp đơn sát mùa cao điểm

**Sample information (input của player):**
```json
{
  "phase": "treatment",
  "chosen_option": "D_chapter_11",
  "context_checked": {"supplier_comms_prepared": true, "timing_checked_vs_holiday_season": true},
  "filing_month": "February"
}
```

**Intended output / consequence:**
- Hệ thống áp modifier: `success_prob_base (0.45) + if_supplier_comms_prepared (+0.25) = 0.70` xác suất thành công (không bị trừ vì không nộp đơn sát mùa lễ hội).
- Output hiển thị: "Nhà cung cấp vẫn lo ngại nhưng duy trì quan hệ tín dụng thương mại nhờ được thông báo trước và có kế hoạch DIP financing rõ ràng. Công ty bước vào quá trình tái cấu trúc mà không mất toàn bộ mùa kinh doanh cao điểm."
- Điểm giai đoạn 2: cao, kèm ghi chú: *"Đây là kịch bản phản thực (không xảy ra trong lịch sử thật) — minh họa rằng nếu thực thi đúng thời điểm và có chuẩn bị, công cụ tài chính đúng đắn có thể tránh được thảm họa thực thi."*

---

### Ví dụ 5 — Player chọn Option B (cắt giảm vận hành) làm giải pháp DUY NHẤT, không kèm A/C

**Sample information (input của player):**
```json
{
  "phase": "treatment",
  "chosen_option": "B_operational_cuts",
  "combined_with": [],
  "player_reasoning_text": "Cắt chi phí để có tiền trả nợ nhanh hơn."
}
```

**Intended output / consequence:**
- Kết quả ngắn hạn hiển thị tích cực giả (dòng tiền quý sau cải thiện) — **đây là intentional "false positive feedback"** để mô phỏng đúng cạm bẫy thật của loại quyết định này.
- Ở vòng chơi tiếp theo (mô phỏng 2-3 quý sau), game tự động cập nhật: `same_store_sales` giảm thêm, CapEx giảm thêm, và hiển thị cảnh báo: *"Bạn đã điều trị triệu chứng, không điều trị bệnh. Khoản nợ 400 triệu USD/năm vẫn còn nguyên."*
- Điểm giai đoạn 2: bị trừ điểm "long-term outcome", dù điểm "short-term cash flow" ban đầu có thể cao — để dạy rằng game chấm cả 2 loại điểm riêng biệt (ngắn hạn vs dài hạn), không cộng gộp che giấu lẫn nhau.

---

## Quy ước áp dụng cho case mới (không chỉ riêng Toys "R" Us)

1. Mỗi ví dụ trong file này phải có đủ 2 phần: **input mẫu dạng JSON/structured** và **output/consequence mô tả bằng lời** — không được chỉ ghi input mà thiếu output, hoặc ngược lại.
2. Ít nhất phải có 1 ví dụ minh họa "chẩn đoán sai" và 1 ví dụ "chẩn đoán đúng" để test được cả 2 nhánh logic.
3. Với các case có "công cụ đúng nhưng thực thi sai thời điểm" (như Option D ở đây), bắt buộc có ít nhất 2 ví dụ đối lập (thời điểm đúng vs sai) để QA có thể verify modifier hoạt động đúng chiều.
