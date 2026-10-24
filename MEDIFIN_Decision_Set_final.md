# MEDIFIN — Case #01: Toy Kingdom Inc.

**Decision Set — Markdown reference**

> Converted from `MEDIFIN_Decision_Set_final (2).xlsx`. The original Excel workbook remains the authoritative interactive scoring model. Markdown is a static representation: dropdowns, recalculation, formatting, and data validation do not operate here. Excel formulas are shown as expressions where present; they are not evaluated by GitHub.

## Contents

1. [README](#readme)
2. [DECISION_MATRIX](#decisionmatrix)
3. [Comparison](#comparison)
4. [Scorecard](#scorecard)
5. [Case_Facts](#casefacts)
6. [Financials](#financials)
7. [Config](#config)
8. [Lists](#lists)
9. [S2_Files](#s2files)
10. [S3_Questions](#s3questions)
11. [S5_FinalQ](#s5finalq)
12. [M1_File_x_Q](#m1filexq)
13. [M2_File_x_FQ](#m2filexfq)
14. [S6_Diagnosis](#s6diagnosis)
15. [M3_Dx_x_File](#m3dxxfile)
16. [S7_Treatment](#s7treatment)
17. [M4_Dx_x_Tx](#m4dxxtx)
18. [S8_Timing](#s8timing)
19. [M5_Tx_x_Timing](#m5txxtiming)
20. [S9_Stakeholders](#s9stakeholders)
21. [M6_Tx_x_Stake](#m6txxstake)
22. [S10_Consequence](#s10consequence)
23. [S11_Reassess](#s11reassess)
24. [Endings](#endings)
25. [Feedback](#feedback)

---

## README

| Column A | Column B | Column C |
| --- | --- | --- |
| MEDIFIN · Case #01 Toy Kingdom Inc. — Decision Set (đã khớp USER_FLOW gốc) |  |  |
| 👉 Xem tất cả ma trận tại sheet DECISION_MATRIX (tab đỏ, ngay sau README). |  |  |
| 1. Cách dùng nhanh |  |  |
| Bước 1: Mở Scorecard → đổi các ô dropdown màu vàng (mỗi cột = một người chơi). |  |  |
| Bước 2: Xem điểm từng phần, điểm tổng, Uy tín, điểm Tài chính / Quản trị và kết cục 3×3 ở Scorecard; hoặc xem Comparison để so sánh song song. |  |  |
| Bước 3: Muốn chỉnh cân bằng → sửa các ô chữ xanh (blue) trong sheet S*, M* và Config; mọi điểm tự tính lại. |  |  |
| 2. Bản đồ sheet ↔ màn hình (theo USER_FLOW gốc) |  |  |
| Màn hình | Sheet | Nội dung |
| Màn 0–1 | Case_Facts | Tổng quan, bí mật nền, 3 trục theo dõi + các giả định thiết kế. |
| Màn 4 | Financials | BCTC FY2024–26, chỉ số vận hành, snapshot bảng cân đối, đòn bẩy. |
| Màn 2 | S2_Files + M1 + M2 | 7 hồ sơ HS-A..G (chọn 3); M1: hồ sơ × CH1 (cùng khu vực chỉ =1); M2: hồ sơ × CH2. |
| Màn 3 | S3_Questions | 7 câu hỏi CH1-A..G (chọn 2), điểm bề mặt. |
| Màn 5 | S5_FinalQ | 7 câu hỏi CH2-A..G (chọn 1). |
| Màn 6 | S6_Diagnosis + M3 | 6 chẩn đoán CD-A..F (chọn 1), điều kiện CD-F, M3: chẩn đoán × hồ sơ. |
| Màn 7 | S7_Treatment + M4 | 6 phác đồ PD-A..F (chọn 1), điều kiện Uy tín (PD-A ≥TB, PD-F Cao), M4: chẩn đoán × phác đồ. |
| Màn 8 | S8_Timing + M5 | 4 thời điểm TG-A..D; M5: phác đồ × thời điểm. |
| Màn 9 | S9_Stakeholders + M6 | 7 nhóm (chọn 3); M6: phác đồ × nhóm; điểm Quản trị của Governance & Family. |
| Màn 10 | S10_Consequence | M7/M8/M9 = công thức điểm Tài chính; bảng 14 diễn biến (7 gốc + 4 phản bác chẩn đoán sai + 3 hệ quả nhóm ưu tiên) và dữ liệu mới biện minh Tái khám. |
| Màn 11 | S11_Reassess | Giữ / Đổi chẩn đoán / Đổi phác đồ, chi phí Uy tín. |
| Màn 12 | Endings + Feedback + Comparison | Ma trận 3×3 (Tài chính × Gia tộc), mô tả theo Uy tín, feedback, bảng so sánh. |
| Hỗ trợ | Config, Lists | Ngưỡng, trọng số, điểm Uy tín; dropdown tự sinh. |
| 3. Công thức chấm điểm |  |  |
| Kết cục (theo USER_FLOW gốc) | Điểm Tài chính = M7 (PD×TG) + M8/M9 (nhóm ưu tiên). Tier: Ổn định / Mong manh (1–3) / Sụp đổ (≤0). Điểm Quản trị = +1 mở HS-G; +2/−1 Governance & Family; −1 mỗi lần mất Uy tín; −2 nếu Sụp đổ tài chính; −1 nếu PD-D chưa mở HS-E. Tier: ≥3 Đoàn kết · 0–2 Chia rẽ · <0 Mất kiểm soát. → ô 3×3. |  |
| Uy tín | Thấp / Trung bình / Cao. Không đổi ô kết cục, đổi cách mô tả. Là điều kiện mở PD-A và PD-F; thay đổi bởi CD-F thiếu điều kiện, TG-C thất bại, đổi thiếu dữ liệu mới. |  |
| Lớp điểm /100 (bổ sung) | Investigation, Diagnosis, Treatment, Execution, Reassessment (0–100) và Overall (20/25/20/20/15%) để so sánh người chơi. |  |
| 4. Đã chốt theo USER_FLOW bản sửa (không còn là giả định) |  |  |
| • Ngưỡng 'Ổn định tài chính' = ≥4 (Config → fr_stable). Ngưỡng ≥5 trong bản nháp đầu không đạt được (điểm tối đa chỉ +4) — đội đã chốt lại ≥4, có ghi chú ngay trong USER_FLOW Màn 12. |  |  |
| • 6 chẩn đoán CD-A..F đổi tên theo khung '6 tầng vấn đề' (Áp lực Cạnh tranh, Nút thắt Vận hành, Biểu hiện Thanh khoản, Nguyên nhân Cấu trúc, Áp lực Danh mục, Đa yếu tố) — không còn khung đúng/sai ngầm định. |  |  |
| • Màn 10 có đủ 14 diễn biến: 7 gốc + 4 sự kiện phản bác trực tiếp cho CD-A/B/C/E + 3 hệ quả quan sát được cho Employees/Customers/Landlords. |  |  |
| 5. Điểm cần bạn xác nhận (case gốc không nêu) |  |  |
| • Uy tín khởi điểm, quy tắc tăng (+1 chẩn đoán có căn cứ, +1 điều tra hiệu quả) và cách xác định 'refinance thử thành công / có dữ liệu mới' là GIẢ ĐỊNH của file — chỉnh ở Config và S10. |  |  |
| • CD-D 'Nguyên nhân Cấu trúc' được dùng làm MỐC CHẤM ĐIỂM Treatment (không phải tuyên bố '5 chẩn đoán kia sai') — nếu nhóm muốn đổi mốc, sửa Config → true_dx và bảng M3, M4. |  |  |
| • Các nhóm ưu tiên ở Màn 9 không có mã trong case gốc; file đặt GR-1..GR-7. |  |  |
| • Chữ xanh = số liệu nhập; đen = công thức; ô nền vàng ở Scorecard = dropdown lựa chọn. |  |  |

## DECISION_MATRIX

| Column A | Column B | Column C | Column D | Column E | Column F | Column G | Column H | Column I |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| DECISION MATRIX — tất cả ma trận quyết định trong 1 sheet |  |  |  |  |  |  |  |  |
| Hàng = lựa chọn A, cột = lựa chọn B, ô giao nhau = điểm/kết quả. Ô liên kết tự động tới sheet gốc (sửa số ở sheet M*/S* tương ứng). |  |  |  |  |  |  |  |  |
| M1 · Hồ sơ (Màn 2) × Câu hỏi bổ sung (Màn 3) — giá trị thông tin tăng thêm (cùng khu vực = 1) |  |  |  |  |  |  |  |  |
| Hàng ↓ / Cột → |  | =M1_File_x_Q!C4 | =M1_File_x_Q!D4 | =M1_File_x_Q!E4 | =M1_File_x_Q!F4 | =M1_File_x_Q!G4 | =M1_File_x_Q!H4 | =M1_File_x_Q!I4 |
| ID | Lựa chọn | =M1_File_x_Q!C5 | =M1_File_x_Q!D5 | =M1_File_x_Q!E5 | =M1_File_x_Q!F5 | =M1_File_x_Q!G5 | =M1_File_x_Q!H5 | =M1_File_x_Q!I5 |
| =M1_File_x_Q!A6 | =M1_File_x_Q!B6 | =M1_File_x_Q!C6 | =M1_File_x_Q!D6 | =M1_File_x_Q!E6 | =M1_File_x_Q!F6 | =M1_File_x_Q!G6 | =M1_File_x_Q!H6 | =M1_File_x_Q!I6 |
| =M1_File_x_Q!A7 | =M1_File_x_Q!B7 | =M1_File_x_Q!C7 | =M1_File_x_Q!D7 | =M1_File_x_Q!E7 | =M1_File_x_Q!F7 | =M1_File_x_Q!G7 | =M1_File_x_Q!H7 | =M1_File_x_Q!I7 |
| =M1_File_x_Q!A8 | =M1_File_x_Q!B8 | =M1_File_x_Q!C8 | =M1_File_x_Q!D8 | =M1_File_x_Q!E8 | =M1_File_x_Q!F8 | =M1_File_x_Q!G8 | =M1_File_x_Q!H8 | =M1_File_x_Q!I8 |
| =M1_File_x_Q!A9 | =M1_File_x_Q!B9 | =M1_File_x_Q!C9 | =M1_File_x_Q!D9 | =M1_File_x_Q!E9 | =M1_File_x_Q!F9 | =M1_File_x_Q!G9 | =M1_File_x_Q!H9 | =M1_File_x_Q!I9 |
| =M1_File_x_Q!A10 | =M1_File_x_Q!B10 | =M1_File_x_Q!C10 | =M1_File_x_Q!D10 | =M1_File_x_Q!E10 | =M1_File_x_Q!F10 | =M1_File_x_Q!G10 | =M1_File_x_Q!H10 | =M1_File_x_Q!I10 |
| =M1_File_x_Q!A11 | =M1_File_x_Q!B11 | =M1_File_x_Q!C11 | =M1_File_x_Q!D11 | =M1_File_x_Q!E11 | =M1_File_x_Q!F11 | =M1_File_x_Q!G11 | =M1_File_x_Q!H11 | =M1_File_x_Q!I11 |
| =M1_File_x_Q!A12 | =M1_File_x_Q!B12 | =M1_File_x_Q!C12 | =M1_File_x_Q!D12 | =M1_File_x_Q!E12 | =M1_File_x_Q!F12 | =M1_File_x_Q!G12 | =M1_File_x_Q!H12 | =M1_File_x_Q!I12 |
| M2 · Hồ sơ (Màn 2) × Câu hỏi cuối (Màn 5) — điểm thông tin thêm |  |  |  |  |  |  |  |  |
| Hàng ↓ / Cột → |  | =M2_File_x_FQ!C4 | =M2_File_x_FQ!D4 | =M2_File_x_FQ!E4 | =M2_File_x_FQ!F4 | =M2_File_x_FQ!G4 | =M2_File_x_FQ!H4 | =M2_File_x_FQ!I4 |
| ID | Lựa chọn | =M2_File_x_FQ!C5 | =M2_File_x_FQ!D5 | =M2_File_x_FQ!E5 | =M2_File_x_FQ!F5 | =M2_File_x_FQ!G5 | =M2_File_x_FQ!H5 | =M2_File_x_FQ!I5 |
| =M2_File_x_FQ!A6 | =M2_File_x_FQ!B6 | =M2_File_x_FQ!C6 | =M2_File_x_FQ!D6 | =M2_File_x_FQ!E6 | =M2_File_x_FQ!F6 | =M2_File_x_FQ!G6 | =M2_File_x_FQ!H6 | =M2_File_x_FQ!I6 |
| =M2_File_x_FQ!A7 | =M2_File_x_FQ!B7 | =M2_File_x_FQ!C7 | =M2_File_x_FQ!D7 | =M2_File_x_FQ!E7 | =M2_File_x_FQ!F7 | =M2_File_x_FQ!G7 | =M2_File_x_FQ!H7 | =M2_File_x_FQ!I7 |
| =M2_File_x_FQ!A8 | =M2_File_x_FQ!B8 | =M2_File_x_FQ!C8 | =M2_File_x_FQ!D8 | =M2_File_x_FQ!E8 | =M2_File_x_FQ!F8 | =M2_File_x_FQ!G8 | =M2_File_x_FQ!H8 | =M2_File_x_FQ!I8 |
| =M2_File_x_FQ!A9 | =M2_File_x_FQ!B9 | =M2_File_x_FQ!C9 | =M2_File_x_FQ!D9 | =M2_File_x_FQ!E9 | =M2_File_x_FQ!F9 | =M2_File_x_FQ!G9 | =M2_File_x_FQ!H9 | =M2_File_x_FQ!I9 |
| =M2_File_x_FQ!A10 | =M2_File_x_FQ!B10 | =M2_File_x_FQ!C10 | =M2_File_x_FQ!D10 | =M2_File_x_FQ!E10 | =M2_File_x_FQ!F10 | =M2_File_x_FQ!G10 | =M2_File_x_FQ!H10 | =M2_File_x_FQ!I10 |
| =M2_File_x_FQ!A11 | =M2_File_x_FQ!B11 | =M2_File_x_FQ!C11 | =M2_File_x_FQ!D11 | =M2_File_x_FQ!E11 | =M2_File_x_FQ!F11 | =M2_File_x_FQ!G11 | =M2_File_x_FQ!H11 | =M2_File_x_FQ!I11 |
| =M2_File_x_FQ!A12 | =M2_File_x_FQ!B12 | =M2_File_x_FQ!C12 | =M2_File_x_FQ!D12 | =M2_File_x_FQ!E12 | =M2_File_x_FQ!F12 | =M2_File_x_FQ!G12 | =M2_File_x_FQ!H12 | =M2_File_x_FQ!I12 |
| M3 · Chẩn đoán (Màn 6) × Hồ sơ (Màn 2) — bằng chứng ủng hộ |  |  |  |  |  |  |  |  |
| Hàng ↓ / Cột → |  | =M3_Dx_x_File!C4 | =M3_Dx_x_File!D4 | =M3_Dx_x_File!E4 | =M3_Dx_x_File!F4 | =M3_Dx_x_File!G4 | =M3_Dx_x_File!H4 | =M3_Dx_x_File!I4 |
| ID | Lựa chọn | =M3_Dx_x_File!C5 | =M3_Dx_x_File!D5 | =M3_Dx_x_File!E5 | =M3_Dx_x_File!F5 | =M3_Dx_x_File!G5 | =M3_Dx_x_File!H5 | =M3_Dx_x_File!I5 |
| =M3_Dx_x_File!A6 | =M3_Dx_x_File!B6 | =M3_Dx_x_File!C6 | =M3_Dx_x_File!D6 | =M3_Dx_x_File!E6 | =M3_Dx_x_File!F6 | =M3_Dx_x_File!G6 | =M3_Dx_x_File!H6 | =M3_Dx_x_File!I6 |
| =M3_Dx_x_File!A7 | =M3_Dx_x_File!B7 | =M3_Dx_x_File!C7 | =M3_Dx_x_File!D7 | =M3_Dx_x_File!E7 | =M3_Dx_x_File!F7 | =M3_Dx_x_File!G7 | =M3_Dx_x_File!H7 | =M3_Dx_x_File!I7 |
| =M3_Dx_x_File!A8 | =M3_Dx_x_File!B8 | =M3_Dx_x_File!C8 | =M3_Dx_x_File!D8 | =M3_Dx_x_File!E8 | =M3_Dx_x_File!F8 | =M3_Dx_x_File!G8 | =M3_Dx_x_File!H8 | =M3_Dx_x_File!I8 |
| =M3_Dx_x_File!A9 | =M3_Dx_x_File!B9 | =M3_Dx_x_File!C9 | =M3_Dx_x_File!D9 | =M3_Dx_x_File!E9 | =M3_Dx_x_File!F9 | =M3_Dx_x_File!G9 | =M3_Dx_x_File!H9 | =M3_Dx_x_File!I9 |
| =M3_Dx_x_File!A10 | =M3_Dx_x_File!B10 | =M3_Dx_x_File!C10 | =M3_Dx_x_File!D10 | =M3_Dx_x_File!E10 | =M3_Dx_x_File!F10 | =M3_Dx_x_File!G10 | =M3_Dx_x_File!H10 | =M3_Dx_x_File!I10 |
| =M3_Dx_x_File!A11 | =M3_Dx_x_File!B11 | =M3_Dx_x_File!C11 | =M3_Dx_x_File!D11 | =M3_Dx_x_File!E11 | =M3_Dx_x_File!F11 | =M3_Dx_x_File!G11 | =M3_Dx_x_File!H11 | =M3_Dx_x_File!I11 |
| M4 · Chẩn đoán (Màn 6) × Phác đồ (Màn 7) — độ phù hợp 0–100 |  |  |  |  |  |  |  |  |
| Hàng ↓ / Cột → |  | =M4_Dx_x_Tx!C4 | =M4_Dx_x_Tx!D4 | =M4_Dx_x_Tx!E4 | =M4_Dx_x_Tx!F4 | =M4_Dx_x_Tx!G4 | =M4_Dx_x_Tx!H4 |  |
| ID | Lựa chọn | =M4_Dx_x_Tx!C5 | =M4_Dx_x_Tx!D5 | =M4_Dx_x_Tx!E5 | =M4_Dx_x_Tx!F5 | =M4_Dx_x_Tx!G5 | =M4_Dx_x_Tx!H5 |  |
| =M4_Dx_x_Tx!A6 | =M4_Dx_x_Tx!B6 | =M4_Dx_x_Tx!C6 | =M4_Dx_x_Tx!D6 | =M4_Dx_x_Tx!E6 | =M4_Dx_x_Tx!F6 | =M4_Dx_x_Tx!G6 | =M4_Dx_x_Tx!H6 |  |
| =M4_Dx_x_Tx!A7 | =M4_Dx_x_Tx!B7 | =M4_Dx_x_Tx!C7 | =M4_Dx_x_Tx!D7 | =M4_Dx_x_Tx!E7 | =M4_Dx_x_Tx!F7 | =M4_Dx_x_Tx!G7 | =M4_Dx_x_Tx!H7 |  |
| =M4_Dx_x_Tx!A8 | =M4_Dx_x_Tx!B8 | =M4_Dx_x_Tx!C8 | =M4_Dx_x_Tx!D8 | =M4_Dx_x_Tx!E8 | =M4_Dx_x_Tx!F8 | =M4_Dx_x_Tx!G8 | =M4_Dx_x_Tx!H8 |  |
| =M4_Dx_x_Tx!A9 | =M4_Dx_x_Tx!B9 | =M4_Dx_x_Tx!C9 | =M4_Dx_x_Tx!D9 | =M4_Dx_x_Tx!E9 | =M4_Dx_x_Tx!F9 | =M4_Dx_x_Tx!G9 | =M4_Dx_x_Tx!H9 |  |
| =M4_Dx_x_Tx!A10 | =M4_Dx_x_Tx!B10 | =M4_Dx_x_Tx!C10 | =M4_Dx_x_Tx!D10 | =M4_Dx_x_Tx!E10 | =M4_Dx_x_Tx!F10 | =M4_Dx_x_Tx!G10 | =M4_Dx_x_Tx!H10 |  |
| =M4_Dx_x_Tx!A11 | =M4_Dx_x_Tx!B11 | =M4_Dx_x_Tx!C11 | =M4_Dx_x_Tx!D11 | =M4_Dx_x_Tx!E11 | =M4_Dx_x_Tx!F11 | =M4_Dx_x_Tx!G11 | =M4_Dx_x_Tx!H11 |  |
| M5 · Phác đồ (Màn 7) × Thời điểm (Màn 8) — điểm thực thi 0–100 |  |  |  |  |  |  |  |  |
| Hàng ↓ / Cột → |  | =M5_Tx_x_Timing!C4 | =M5_Tx_x_Timing!D4 | =M5_Tx_x_Timing!E4 | =M5_Tx_x_Timing!F4 |  |  |  |
| ID | Lựa chọn | =M5_Tx_x_Timing!C5 | =M5_Tx_x_Timing!D5 | =M5_Tx_x_Timing!E5 | =M5_Tx_x_Timing!F5 |  |  |  |
| =M5_Tx_x_Timing!A6 | =M5_Tx_x_Timing!B6 | =M5_Tx_x_Timing!C6 | =M5_Tx_x_Timing!D6 | =M5_Tx_x_Timing!E6 | =M5_Tx_x_Timing!F6 |  |  |  |
| =M5_Tx_x_Timing!A7 | =M5_Tx_x_Timing!B7 | =M5_Tx_x_Timing!C7 | =M5_Tx_x_Timing!D7 | =M5_Tx_x_Timing!E7 | =M5_Tx_x_Timing!F7 |  |  |  |
| =M5_Tx_x_Timing!A8 | =M5_Tx_x_Timing!B8 | =M5_Tx_x_Timing!C8 | =M5_Tx_x_Timing!D8 | =M5_Tx_x_Timing!E8 | =M5_Tx_x_Timing!F8 |  |  |  |
| =M5_Tx_x_Timing!A9 | =M5_Tx_x_Timing!B9 | =M5_Tx_x_Timing!C9 | =M5_Tx_x_Timing!D9 | =M5_Tx_x_Timing!E9 | =M5_Tx_x_Timing!F9 |  |  |  |
| =M5_Tx_x_Timing!A10 | =M5_Tx_x_Timing!B10 | =M5_Tx_x_Timing!C10 | =M5_Tx_x_Timing!D10 | =M5_Tx_x_Timing!E10 | =M5_Tx_x_Timing!F10 |  |  |  |
| =M5_Tx_x_Timing!A11 | =M5_Tx_x_Timing!B11 | =M5_Tx_x_Timing!C11 | =M5_Tx_x_Timing!D11 | =M5_Tx_x_Timing!E11 | =M5_Tx_x_Timing!F11 |  |  |  |
| M6 · Phác đồ (Màn 7) × Nhóm ưu tiên (Màn 9) — giá trị ưu tiên |  |  |  |  |  |  |  |  |
| Hàng ↓ / Cột → |  | =M6_Tx_x_Stake!C4 | =M6_Tx_x_Stake!D4 | =M6_Tx_x_Stake!E4 | =M6_Tx_x_Stake!F4 | =M6_Tx_x_Stake!G4 | =M6_Tx_x_Stake!H4 | =M6_Tx_x_Stake!I4 |
| ID | Lựa chọn | =M6_Tx_x_Stake!C5 | =M6_Tx_x_Stake!D5 | =M6_Tx_x_Stake!E5 | =M6_Tx_x_Stake!F5 | =M6_Tx_x_Stake!G5 | =M6_Tx_x_Stake!H5 | =M6_Tx_x_Stake!I5 |
| =M6_Tx_x_Stake!A6 | =M6_Tx_x_Stake!B6 | =M6_Tx_x_Stake!C6 | =M6_Tx_x_Stake!D6 | =M6_Tx_x_Stake!E6 | =M6_Tx_x_Stake!F6 | =M6_Tx_x_Stake!G6 | =M6_Tx_x_Stake!H6 | =M6_Tx_x_Stake!I6 |
| =M6_Tx_x_Stake!A7 | =M6_Tx_x_Stake!B7 | =M6_Tx_x_Stake!C7 | =M6_Tx_x_Stake!D7 | =M6_Tx_x_Stake!E7 | =M6_Tx_x_Stake!F7 | =M6_Tx_x_Stake!G7 | =M6_Tx_x_Stake!H7 | =M6_Tx_x_Stake!I7 |
| =M6_Tx_x_Stake!A8 | =M6_Tx_x_Stake!B8 | =M6_Tx_x_Stake!C8 | =M6_Tx_x_Stake!D8 | =M6_Tx_x_Stake!E8 | =M6_Tx_x_Stake!F8 | =M6_Tx_x_Stake!G8 | =M6_Tx_x_Stake!H8 | =M6_Tx_x_Stake!I8 |
| =M6_Tx_x_Stake!A9 | =M6_Tx_x_Stake!B9 | =M6_Tx_x_Stake!C9 | =M6_Tx_x_Stake!D9 | =M6_Tx_x_Stake!E9 | =M6_Tx_x_Stake!F9 | =M6_Tx_x_Stake!G9 | =M6_Tx_x_Stake!H9 | =M6_Tx_x_Stake!I9 |
| =M6_Tx_x_Stake!A10 | =M6_Tx_x_Stake!B10 | =M6_Tx_x_Stake!C10 | =M6_Tx_x_Stake!D10 | =M6_Tx_x_Stake!E10 | =M6_Tx_x_Stake!F10 | =M6_Tx_x_Stake!G10 | =M6_Tx_x_Stake!H10 | =M6_Tx_x_Stake!I10 |
| =M6_Tx_x_Stake!A11 | =M6_Tx_x_Stake!B11 | =M6_Tx_x_Stake!C11 | =M6_Tx_x_Stake!D11 | =M6_Tx_x_Stake!E11 | =M6_Tx_x_Stake!F11 | =M6_Tx_x_Stake!G11 | =M6_Tx_x_Stake!H11 | =M6_Tx_x_Stake!I11 |
| M7 · Phác đồ × Thời điểm → điểm Sức khỏe Tài chính cơ bản (TG-D = −1) |  |  |  |  |  |  |  |  |
| Hàng ↓ / Cột → |  | =S10_Consequence!C4 | =S10_Consequence!D4 | =S10_Consequence!E4 | =S10_Consequence!F4 |  |  |  |
| ID | Lựa chọn | =S10_Consequence!C5 | =S10_Consequence!D5 | =S10_Consequence!E5 | =S10_Consequence!F5 |  |  |  |
| =S10_Consequence!A6 | =S10_Consequence!B6 | =S10_Consequence!C6 | =S10_Consequence!D6 | =S10_Consequence!E6 | =S10_Consequence!F6 |  |  |  |
| =S10_Consequence!A7 | =S10_Consequence!B7 | =S10_Consequence!C7 | =S10_Consequence!D7 | =S10_Consequence!E7 | =S10_Consequence!F7 |  |  |  |
| =S10_Consequence!A8 | =S10_Consequence!B8 | =S10_Consequence!C8 | =S10_Consequence!D8 | =S10_Consequence!E8 | =S10_Consequence!F8 |  |  |  |
| =S10_Consequence!A9 | =S10_Consequence!B9 | =S10_Consequence!C9 | =S10_Consequence!D9 | =S10_Consequence!E9 | =S10_Consequence!F9 |  |  |  |
| =S10_Consequence!A10 | =S10_Consequence!B10 | =S10_Consequence!C10 | =S10_Consequence!D10 | =S10_Consequence!E10 | =S10_Consequence!F10 |  |  |  |
| =S10_Consequence!A11 | =S10_Consequence!B11 | =S10_Consequence!C11 | =S10_Consequence!D11 | =S10_Consequence!E11 | =S10_Consequence!F11 |  |  |  |
| M8 · Phác đồ × Nhóm → điểm Tài chính KHI nhóm ĐƯỢC ưu tiên |  |  |  |  |  |  |  |  |
| Hàng ↓ / Cột → |  | =S10_Consequence!C14 | =S10_Consequence!D14 | =S10_Consequence!E14 | =S10_Consequence!F14 | =S10_Consequence!G14 | =S10_Consequence!H14 | =S10_Consequence!I14 |
| ID | Lựa chọn | =S10_Consequence!C15 | =S10_Consequence!D15 | =S10_Consequence!E15 | =S10_Consequence!F15 | =S10_Consequence!G15 | =S10_Consequence!H15 | =S10_Consequence!I15 |
| =S10_Consequence!A16 | =S10_Consequence!B16 | =S10_Consequence!C16 | =S10_Consequence!D16 | =S10_Consequence!E16 | =S10_Consequence!F16 | =S10_Consequence!G16 | =S10_Consequence!H16 | =S10_Consequence!I16 |
| =S10_Consequence!A17 | =S10_Consequence!B17 | =S10_Consequence!C17 | =S10_Consequence!D17 | =S10_Consequence!E17 | =S10_Consequence!F17 | =S10_Consequence!G17 | =S10_Consequence!H17 | =S10_Consequence!I17 |
| =S10_Consequence!A18 | =S10_Consequence!B18 | =S10_Consequence!C18 | =S10_Consequence!D18 | =S10_Consequence!E18 | =S10_Consequence!F18 | =S10_Consequence!G18 | =S10_Consequence!H18 | =S10_Consequence!I18 |
| =S10_Consequence!A19 | =S10_Consequence!B19 | =S10_Consequence!C19 | =S10_Consequence!D19 | =S10_Consequence!E19 | =S10_Consequence!F19 | =S10_Consequence!G19 | =S10_Consequence!H19 | =S10_Consequence!I19 |
| =S10_Consequence!A20 | =S10_Consequence!B20 | =S10_Consequence!C20 | =S10_Consequence!D20 | =S10_Consequence!E20 | =S10_Consequence!F20 | =S10_Consequence!G20 | =S10_Consequence!H20 | =S10_Consequence!I20 |
| =S10_Consequence!A21 | =S10_Consequence!B21 | =S10_Consequence!C21 | =S10_Consequence!D21 | =S10_Consequence!E21 | =S10_Consequence!F21 | =S10_Consequence!G21 | =S10_Consequence!H21 | =S10_Consequence!I21 |
| M9 · Phác đồ × Nhóm → điểm Tài chính KHI nhóm KHÔNG được ưu tiên |  |  |  |  |  |  |  |  |
| Hàng ↓ / Cột → |  | =S10_Consequence!C24 | =S10_Consequence!D24 | =S10_Consequence!E24 | =S10_Consequence!F24 | =S10_Consequence!G24 | =S10_Consequence!H24 | =S10_Consequence!I24 |
| ID | Lựa chọn | =S10_Consequence!C25 | =S10_Consequence!D25 | =S10_Consequence!E25 | =S10_Consequence!F25 | =S10_Consequence!G25 | =S10_Consequence!H25 | =S10_Consequence!I25 |
| =S10_Consequence!A26 | =S10_Consequence!B26 | =S10_Consequence!C26 | =S10_Consequence!D26 | =S10_Consequence!E26 | =S10_Consequence!F26 | =S10_Consequence!G26 | =S10_Consequence!H26 | =S10_Consequence!I26 |
| =S10_Consequence!A27 | =S10_Consequence!B27 | =S10_Consequence!C27 | =S10_Consequence!D27 | =S10_Consequence!E27 | =S10_Consequence!F27 | =S10_Consequence!G27 | =S10_Consequence!H27 | =S10_Consequence!I27 |
| =S10_Consequence!A28 | =S10_Consequence!B28 | =S10_Consequence!C28 | =S10_Consequence!D28 | =S10_Consequence!E28 | =S10_Consequence!F28 | =S10_Consequence!G28 | =S10_Consequence!H28 | =S10_Consequence!I28 |
| =S10_Consequence!A29 | =S10_Consequence!B29 | =S10_Consequence!C29 | =S10_Consequence!D29 | =S10_Consequence!E29 | =S10_Consequence!F29 | =S10_Consequence!G29 | =S10_Consequence!H29 | =S10_Consequence!I29 |
| =S10_Consequence!A30 | =S10_Consequence!B30 | =S10_Consequence!C30 | =S10_Consequence!D30 | =S10_Consequence!E30 | =S10_Consequence!F30 | =S10_Consequence!G30 | =S10_Consequence!H30 | =S10_Consequence!I30 |
| =S10_Consequence!A31 | =S10_Consequence!B31 | =S10_Consequence!C31 | =S10_Consequence!D31 | =S10_Consequence!E31 | =S10_Consequence!F31 | =S10_Consequence!G31 | =S10_Consequence!H31 | =S10_Consequence!I31 |
| M10 · Quyết định Tái khám (Màn 11) × Tình huống — điểm |  |  |  |  |  |  |  |  |
| Quyết định | Mô tả | Strong | Partial | Weak |  |  |  |  |
| =S11_Reassess!A6 | =S11_Reassess!B6 | =S11_Reassess!C6 | =S11_Reassess!D6 | =S11_Reassess!E6 |  |  |  |  |
| =S11_Reassess!A7 | =S11_Reassess!B7 | =S11_Reassess!C7 | =S11_Reassess!D7 | =S11_Reassess!E7 |  |  |  |  |
| =S11_Reassess!A8 | =S11_Reassess!B8 | =S11_Reassess!C8 | =S11_Reassess!D8 | =S11_Reassess!E8 |  |  |  |  |
| =S11_Reassess!A9 | =S11_Reassess!B9 | =S11_Reassess!C9 | =S11_Reassess!D9 | =S11_Reassess!E9 |  |  |  |  |
| M11 · Tài chính (hàng) × Quản trị/Gia tộc (cột) → Kết cục cuối (Màn 12) |  |  |  |  |  |  |  |  |
| Tài chính \ Gia tộc |  | Gia tộc đoàn kết | Gia tộc chia rẽ, chưa vỡ | Mất kiểm soát |  |  |  |  |
| =Endings!A6 |  | =Endings!B6 | =Endings!C6 | =Endings!D6 |  |  |  |  |
| =Endings!A7 |  | =Endings!B7 | =Endings!C7 | =Endings!D7 |  |  |  |  |
| =Endings!A8 |  | =Endings!B8 | =Endings!C8 | =Endings!D8 |  |  |  |  |

## Comparison

| Column A | Column B | Column C | Column D | Column E | Column F | Column G |
| --- | --- | --- | --- | --- | --- | --- |
| MEDIFIN Case #01 — Score Comparison (Counselor Case Report) |  |  |  |  |  |  |
| Kết quả song song của mọi lượt chơi trong Scorecard. Điểm /100 + kết cục 3 trục theo USER_FLOW gốc. |  |  |  |  |  |  |
| Metric | Weight / Max | =Scorecard!C4 | =Scorecard!D4 | =Scorecard!E4 | =Scorecard!F4 | =Scorecard!G4 |
| Profile summary |  | =Scorecard!C5 | =Scorecard!D5 | =Scorecard!E5 | =Scorecard!F5 | =Scorecard!G5 |
| Input status |  | =Scorecard!C41 | =Scorecard!D41 | =Scorecard!E41 | =Scorecard!F41 | =Scorecard!G41 |
| ★ OVERALL COUNSELOR SCORE /100 | 100 | =Scorecard!C146 | =Scorecard!D146 | =Scorecard!E146 | =Scorecard!F146 | =Scorecard!G146 |
| Xếp loại |  | =Scorecard!C147 | =Scorecard!D147 | =Scorecard!E147 | =Scorecard!F147 | =Scorecard!G147 |
| Xếp hạng (so với các cột khác) |  | =RANK(C7,$C$7:$G$7) | =RANK(D7,$C$7:$G$7) | =RANK(E7,$C$7:$G$7) | =RANK(F7,$C$7:$G$7) | =RANK(G7,$C$7:$G$7) |
| Uy tín cuối |  | =Scorecard!C131 | =Scorecard!D131 | =Scorecard!E131 | =Scorecard!F131 | =Scorecard!G131 |
| Tier Tài chính |  | =Scorecard!C135 | =Scorecard!D135 | =Scorecard!E135 | =Scorecard!F135 | =Scorecard!G135 |
| Tier Quản trị / Gia tộc |  | =Scorecard!C142 | =Scorecard!D142 | =Scorecard!E142 | =Scorecard!F142 | =Scorecard!G142 |
| ★ KẾT CỤC CUỐI |  | =Scorecard!C143 | =Scorecard!D143 | =Scorecard!E143 | =Scorecard!F143 | =Scorecard!G143 |
| ▶ Chi tiết 5 thành phần tạo nên Overall (bấm [+] để mở) |  |  |  |  |  |  |
| Investigation /100 | =Config!$B$41 | =Scorecard!C75 | =Scorecard!D75 | =Scorecard!E75 | =Scorecard!F75 | =Scorecard!G75 |
| Diagnosis /100 | =Config!$B$42 | =Scorecard!C79 | =Scorecard!D79 | =Scorecard!E79 | =Scorecard!F79 | =Scorecard!G79 |
| Treatment /100 | =Config!$B$43 | =Scorecard!C93 | =Scorecard!D93 | =Scorecard!E93 | =Scorecard!F93 | =Scorecard!G93 |
| Execution Planning /100 | =Config!$B$44 | =Scorecard!C99 | =Scorecard!D99 | =Scorecard!E99 | =Scorecard!F99 | =Scorecard!G99 |
| Reassessment /100 | =Config!$B$45 | =Scorecard!C128 | =Scorecard!D128 | =Scorecard!E128 | =Scorecard!F128 | =Scorecard!G128 |
| Điểm thô Sức khỏe Tài chính (trước khi quy tier) |  | =Scorecard!C134 | =Scorecard!D134 | =Scorecard!E134 | =Scorecard!F134 | =Scorecard!G134 |
| Điểm thô Ổn định Quản trị (trước khi quy tier) |  | =Scorecard!C141 | =Scorecard!D141 | =Scorecard!E141 | =Scorecard!F141 | =Scorecard!G141 |
| ▶ Lựa chọn của người chơi ở từng màn (bấm [+] để mở) |  |  |  |  |  |  |
| Hồ sơ đã xem (Màn 2) |  | =Scorecard!C148 | =Scorecard!D148 | =Scorecard!E148 | =Scorecard!F148 | =Scorecard!G148 |
| Câu hỏi CH1 / CH2 (Màn 3, 5) |  | =Scorecard!C149 | =Scorecard!D149 | =Scorecard!E149 | =Scorecard!F149 | =Scorecard!G149 |
| Chẩn đoán đầu → sau tái khám (Màn 6, 11) |  | =Scorecard!C150 | =Scorecard!D150 | =Scorecard!E150 | =Scorecard!F150 | =Scorecard!G150 |
| Phác đồ đầu → sau tái khám (Màn 7, 11) |  | =Scorecard!C151 | =Scorecard!D151 | =Scorecard!E151 | =Scorecard!F151 | =Scorecard!G151 |
| Thời điểm (Màn 8) |  | =Scorecard!C52 | =Scorecard!D52 | =Scorecard!E52 | =Scorecard!F52 | =Scorecard!G52 |
| Nhóm ưu tiên (Màn 9) |  | =Scorecard!C152 | =Scorecard!D152 | =Scorecard!E152 | =Scorecard!F152 | =Scorecard!G152 |
| ▶ FEEDBACK  (Result → Reason → Meaning → Action → Limit) — bấm [+] để mở |  |  |  |  |  |  |
| Investigation |  | =Scorecard!C155 | =Scorecard!D155 | =Scorecard!E155 | =Scorecard!F155 | =Scorecard!G155 |
| Diagnosis |  | =Scorecard!C157 | =Scorecard!D157 | =Scorecard!E157 | =Scorecard!F157 | =Scorecard!G157 |
| Treatment |  | =Scorecard!C159 | =Scorecard!D159 | =Scorecard!E159 | =Scorecard!F159 | =Scorecard!G159 |
| Execution Planning |  | =Scorecard!C161 | =Scorecard!D161 | =Scorecard!E161 | =Scorecard!F161 | =Scorecard!G161 |
| Reassessment |  | =Scorecard!C163 | =Scorecard!D163 | =Scorecard!E163 | =Scorecard!F163 | =Scorecard!G163 |

## Scorecard

| Column A | Column B | Column C | Column D | Column E | Column F | Column G |
| --- | --- | --- | --- | --- | --- | --- |
| Scorecard — nhập lựa chọn của người chơi, đọc toàn bộ điểm |  |  |  |  |  |  |
| Mỗi cột = một người chơi / lượt chơi. Đổi các dropdown vàng; mọi mục bên dưới tự tính lại. P1–P4 là lượt chơi mẫu để so sánh. |  |  |  |  |  |  |
| Item | Rule / source | P1 · Ideal Path | P2 · Debt-First (thiếu HS-G) | P3 · Competitive Trap | P4 · Cost-Cut + Chờ 6 tháng | P5 · Sandbox (sửa thoải mái) |
| Profile summary |  | Nợ + Quản trị + Thanh khoản → CD-D → PD-F sau holiday | Đúng gốc nợ, refinance thử, không mở HS-G | Lặp khu vực đã mở → CD-A → đầu tư cạnh tranh, bỏ Governance | CD-C → PD-B → TG-D; tái khám đổi chẩn đoán có dữ liệu mới | CD-F → Phá sản → sau holiday; thử đổi bất kỳ ô nào |
| A. PLAYER INPUTS (dropdowns) |  |  |  |  |  |  |
| Màn 2 · Hồ sơ 1 | S2_Files | HS-D - Capital Structure & Leverage History | HS-D - Capital Structure & Leverage History | HS-A - Sales & Customer | HS-C - Liquidity | HS-D - Capital Structure & Leverage History |
| Màn 2 · Hồ sơ 2 | S2_Files | HS-G - Governance & Family | HS-C - Liquidity | HS-E - Product & Category Trends | HS-F - Management Track Record | HS-A - Sales & Customer |
| Màn 2 · Hồ sơ 3 | S2_Files | HS-C - Liquidity | HS-A - Sales & Customer | HS-B - Stores & Investment | HS-B - Stores & Investment | HS-E - Product & Category Trends |
| Màn 3 · Câu hỏi bổ sung 1 | S3_Questions | CH1-A - Traffic giảm, e-commerce tăng — khách rời bỏ hay đổi kênh? | CH1-G - Có một điều khoản đặc biệt nào giữa Michael và nhà đầu tư bên ngoài không? | CH1-A - Traffic giảm, e-commerce tăng — khách rời bỏ hay đổi kênh? | CH1-D - Khoản nợ nào đến hạn sớm nhất? | CH1-C - Holiday kém 10% thì thanh khoản ra sao? |
| Màn 3 · Câu hỏi bổ sung 2 | S3_Questions | CH1-F - Ban lãnh đạo có đồng thuận không? | CH1-F - Ban lãnh đạo có đồng thuận không? | CH1-E - Nhóm sản phẩm nào đang hoạt động tốt nhất? | CH1-G - Có một điều khoản đặc biệt nào giữa Michael và nhà đầu tư bên ngoài không? | CH1-G - Có một điều khoản đặc biệt nào giữa Michael và nhà đầu tư bên ngoài không? |
| Màn 5 · Câu hỏi cuối | S5_FinalQ | CH2-G - Nếu EBITDA giảm thêm 5%, điều gì xảy ra ngay lập tức? | CH2-E - Nếu loại bỏ được phần lớn áp lực nợ, đã giải quyết toàn bộ vấn đề chưa? | CH2-D - Amazon biến mất thì công ty khỏe chưa? | CH2-F - Lo nhất điều gì trong 12 tháng tới? | CH2-E - Nếu loại bỏ được phần lớn áp lực nợ, đã giải quyết toàn bộ vấn đề chưa? |
| Màn 6 · Chẩn đoán | S6_Diagnosis | CD-D - Nguyên nhân Cấu trúc (Structural Driver) | CD-D - Nguyên nhân Cấu trúc (Structural Driver) | CD-A - Áp lực Cạnh tranh (Competitive Pressure) | CD-C - Biểu hiện Thanh khoản tức thời (Liquidity Manifestation) | CD-F - Chẩn đoán Đa yếu tố (Multi-Factor Diagnosis) |
| Màn 7 · Phác đồ | S7_Treatment | PD-F - Combined Restructuring | PD-C - Debt Restructuring | PD-A - Invest to Compete | PD-B - Deep Cost Cutting | PD-E - Bankruptcy Restructuring |
| Màn 8 · Thời điểm | S8_Timing | TG-B - Sau holiday season | TG-C - Thử tái cấp vốn trước khi cam kết kế hoạch | TG-A - Thực hiện ngay | TG-D - Chờ 6 tháng | TG-B - Sau holiday season |
| Màn 9 · Nhóm ưu tiên 1 | S9_Stakeholders | GR-4 - Creditors | GR-4 - Creditors | GR-3 - Customers | GR-2 - Employees | GR-1 - Suppliers |
| Màn 9 · Nhóm ưu tiên 2 | S9_Stakeholders | GR-7 - Governance & Family | GR-7 - Governance & Family | GR-6 - Holiday Inventory | GR-1 - Suppliers | GR-4 - Creditors |
| Màn 9 · Nhóm ưu tiên 3 | S9_Stakeholders | GR-6 - Holiday Inventory | GR-6 - Holiday Inventory | GR-2 - Employees | GR-5 - Landlords | GR-7 - Governance & Family |
| Màn 11 · Quyết định tái khám | S11_Reassess | Keep | Keep | Keep | Revise Diagnosis | Keep |
| Màn 11 · Chẩn đoán mới (nếu đổi) | S6_Diagnosis |  |  |  | CD-D - Nguyên nhân Cấu trúc (Structural Driver) |  |
| Màn 11 · Phác đồ mới (nếu đổi) | S7_Treatment |  |  |  |  |  |
| TÓM TẮT KẾT QUẢ — chỉ cần đọc phần này (chi tiết công thức gấp lại bên dưới) |  |  |  |  |  |  |
| Trạng thái nhập liệu |  | =C41 | =D41 | =E41 | =F41 | =G41 |
| Màn 2 · Điểm Hồ sơ đã chọn (đơn vị thô, không phải /100) | tra S2_Files | =C71 | =D71 | =E71 | =F71 | =G71 |
| Màn 3 · Điểm Câu hỏi bổ sung (đơn vị thô) | tra M1 | =C72+C73 | =D72+D73 | =E72+E73 | =F72+F73 | =G72+G73 |
| Màn 5 · Điểm Câu hỏi cuối (đơn vị thô) | tra S5+M2 | =C74 | 12 | 10 | 9 | 12 |
| → Investigation QUY VỀ /100 (3 dòng trên gộp lại, chia cho mức tối đa có thể đạt) |  | 100 | 83.606557377049185 | 50.819672131147541 | 67.213114754098356 | 77.049180327868854 |
| Màn 6 · Diagnosis /100 | primary+evidence, tự nhiên ra /100 | =C79 | =D79 | =E79 | =F79 | =G79 |
| Màn 7 · Treatment /100 | tra M4 (đã là thang 0–100 sẵn) | =C93 | =D93 | =E93 | =F93 | =G93 |
| Màn 8–9 · Execution /100 | M5 và M6 đều quy về /100 trước khi gộp | =C99 | =D99 | =E99 | =F99 | =G99 |
| Màn 11 · Reassessment /100 |  | =C128 | =D128 | =E128 | =F128 | =G128 |
| ★ TỔNG ĐIỂM COUNSELOR /100  (=20%×Inv +25%×Dia +20%×Tre +20%×Exe +15%×Rea — 5 số trên CỘNG CÓ TRỌNG SỐ, KHÔNG cộng điểm thô ở M2/M3/M5) | Config | =C146 | 91.858811475409837 | 53.047862997658079 | 65.692622950819668 | 84.197336065573779 |
| Xếp loại |  | Excellent | Excellent | Developing | Developing | Proficient |
| ─── 3 trục kết cục (điểm THÔ riêng, KHÔNG liên quan tới /100 ở trên) ─── |  |  |  |  |  |  |
| Uy tín cuối |  | =C131 | =D131 | =E131 | =F131 | =G131 |
| Sức khỏe Tài chính (điểm thô + tier) |  | =TEXT(C134,"0")&"  →  "&C135 | =TEXT(D134,"0")&"  →  "&D135 | =TEXT(E134,"0")&"  →  "&E135 | =TEXT(F134,"0")&"  →  "&F135 | =TEXT(G134,"0")&"  →  "&G135 |
| Ổn định Quản trị (điểm thô + tier) |  | =TEXT(C141,"0")&"  →  "&C142 | =TEXT(D141,"0")&"  →  "&D142 | =TEXT(E141,"0")&"  →  "&E142 | =TEXT(F141,"0")&"  →  "&F142 | =TEXT(G141,"0")&"  →  "&G142 |
| ★ KẾT CỤC CUỐI CÙNG | tra ma trận 3×3 Endings | =C143 | =D143 | =E143 | =F143 | =G143 |
| ▶ CHI TIẾT CÔNG THỨC BÊN DƯỚI (bấm nút [+] ở lề trái để mở — chỉ cần khi muốn kiểm tra lại cách tính) |  |  |  |  |  |  |
| B. VALIDATION (thông báo lỗi & cảnh báo) |  |  |  |  |  |  |
| Input status | OK = flow tiếp tục được | =IF(OR(COUNTA(C7:C9)<>3,C7=C8,C7=C9,C8=C9),"Select exactly 3 Diagnostic Files to continue.",IF(OR(COUNTA(C10:C11)<>2,C10=C11),"Select exactly 2 Follow-Up Questions to continue.",IF(C12="","Select one final question before continuing.",IF(C13="","Select a Primary Diagnosis before submitting your diagnosis.",IF(C14="","Select a treatment strategy to continue.",IF(C15="","Select an implementation timing.",IF(OR(COUNTA(C16:C18)<>3,C16=C17,C16=C18,C17=C18),"Select exactly 3 stakeholder priorities.",IF(OR(C19="",AND(OR(C19="Revise Diagnosis",C19="Revise Both"),C20=""),AND(OR(C19="Revise Treatment",C19="Revise Both"),C21="")),"Complete your revised decision before closing the case.","OK")))))))) | =IF(OR(COUNTA(D7:D9)<>3,D7=D8,D7=D9,D8=D9),"Select exactly 3 Diagnostic Files to continue.",IF(OR(COUNTA(D10:D11)<>2,D10=D11),"Select exactly 2 Follow-Up Questions to continue.",IF(D12="","Select one final question before continuing.",IF(D13="","Select a Primary Diagnosis before submitting your diagnosis.",IF(D14="","Select a treatment strategy to continue.",IF(D15="","Select an implementation timing.",IF(OR(COUNTA(D16:D18)<>3,D16=D17,D16=D18,D17=D18),"Select exactly 3 stakeholder priorities.",IF(OR(D19="",AND(OR(D19="Revise Diagnosis",D19="Revise Both"),D20=""),AND(OR(D19="Revise Treatment",D19="Revise Both"),D21="")),"Complete your revised decision before closing the case.","OK")))))))) | =IF(OR(COUNTA(E7:E9)<>3,E7=E8,E7=E9,E8=E9),"Select exactly 3 Diagnostic Files to continue.",IF(OR(COUNTA(E10:E11)<>2,E10=E11),"Select exactly 2 Follow-Up Questions to continue.",IF(E12="","Select one final question before continuing.",IF(E13="","Select a Primary Diagnosis before submitting your diagnosis.",IF(E14="","Select a treatment strategy to continue.",IF(E15="","Select an implementation timing.",IF(OR(COUNTA(E16:E18)<>3,E16=E17,E16=E18,E17=E18),"Select exactly 3 stakeholder priorities.",IF(OR(E19="",AND(OR(E19="Revise Diagnosis",E19="Revise Both"),E20=""),AND(OR(E19="Revise Treatment",E19="Revise Both"),E21="")),"Complete your revised decision before closing the case.","OK")))))))) | =IF(OR(COUNTA(F7:F9)<>3,F7=F8,F7=F9,F8=F9),"Select exactly 3 Diagnostic Files to continue.",IF(OR(COUNTA(F10:F11)<>2,F10=F11),"Select exactly 2 Follow-Up Questions to continue.",IF(F12="","Select one final question before continuing.",IF(F13="","Select a Primary Diagnosis before submitting your diagnosis.",IF(F14="","Select a treatment strategy to continue.",IF(F15="","Select an implementation timing.",IF(OR(COUNTA(F16:F18)<>3,F16=F17,F16=F18,F17=F18),"Select exactly 3 stakeholder priorities.",IF(OR(F19="",AND(OR(F19="Revise Diagnosis",F19="Revise Both"),F20=""),AND(OR(F19="Revise Treatment",F19="Revise Both"),F21="")),"Complete your revised decision before closing the case.","OK")))))))) | =IF(OR(COUNTA(G7:G9)<>3,G7=G8,G7=G9,G8=G9),"Select exactly 3 Diagnostic Files to continue.",IF(OR(COUNTA(G10:G11)<>2,G10=G11),"Select exactly 2 Follow-Up Questions to continue.",IF(G12="","Select one final question before continuing.",IF(G13="","Select a Primary Diagnosis before submitting your diagnosis.",IF(G14="","Select a treatment strategy to continue.",IF(G15="","Select an implementation timing.",IF(OR(COUNTA(G16:G18)<>3,G16=G17,G16=G18,G17=G18),"Select exactly 3 stakeholder priorities.",IF(OR(G19="",AND(OR(G19="Revise Diagnosis",G19="Revise Both"),G20=""),AND(OR(G19="Revise Treatment",G19="Revise Both"),G21="")),"Complete your revised decision before closing the case.","OK")))))))) |
| Cảnh báo hệ thống (Màn 6 / Màn 7) | theo USER_FLOW bản sửa | =IF(C69=1,"Chẩn đoán hỗn hợp cần nhiều bằng chứng hơn bạn có — hội đồng có thể coi đây là né tránh trách nhiệm. Uy tín −1. ","")&IF(C87=1,IF(C51="PD-A","Hội đồng chưa đủ tin tưởng để duyệt kế hoạch đầu tư — bạn buộc phải triển khai phương án cắt giảm chi phí.","Hội đồng chưa đủ tin tưởng để duyệt một kế hoạch tái cấu trúc nhiều mặt trận cùng lúc — bạn buộc phải thu hẹp lại thành cắt giảm chi phí."),"") | =IF(D69=1,"Chẩn đoán hỗn hợp cần nhiều bằng chứng hơn bạn có — hội đồng có thể coi đây là né tránh trách nhiệm. Uy tín −1. ","")&IF(D87=1,IF(D51="PD-A","Hội đồng chưa đủ tin tưởng để duyệt kế hoạch đầu tư — bạn buộc phải triển khai phương án cắt giảm chi phí.","Hội đồng chưa đủ tin tưởng để duyệt một kế hoạch tái cấu trúc nhiều mặt trận cùng lúc — bạn buộc phải thu hẹp lại thành cắt giảm chi phí."),"") | =IF(E69=1,"Chẩn đoán hỗn hợp cần nhiều bằng chứng hơn bạn có — hội đồng có thể coi đây là né tránh trách nhiệm. Uy tín −1. ","")&IF(E87=1,IF(E51="PD-A","Hội đồng chưa đủ tin tưởng để duyệt kế hoạch đầu tư — bạn buộc phải triển khai phương án cắt giảm chi phí.","Hội đồng chưa đủ tin tưởng để duyệt một kế hoạch tái cấu trúc nhiều mặt trận cùng lúc — bạn buộc phải thu hẹp lại thành cắt giảm chi phí."),"") | =IF(F69=1,"Chẩn đoán hỗn hợp cần nhiều bằng chứng hơn bạn có — hội đồng có thể coi đây là né tránh trách nhiệm. Uy tín −1. ","")&IF(F87=1,IF(F51="PD-A","Hội đồng chưa đủ tin tưởng để duyệt kế hoạch đầu tư — bạn buộc phải triển khai phương án cắt giảm chi phí.","Hội đồng chưa đủ tin tưởng để duyệt một kế hoạch tái cấu trúc nhiều mặt trận cùng lúc — bạn buộc phải thu hẹp lại thành cắt giảm chi phí."),"") | =IF(G69=1,"Chẩn đoán hỗn hợp cần nhiều bằng chứng hơn bạn có — hội đồng có thể coi đây là né tránh trách nhiệm. Uy tín −1. ","")&IF(G87=1,IF(G51="PD-A","Hội đồng chưa đủ tin tưởng để duyệt kế hoạch đầu tư — bạn buộc phải triển khai phương án cắt giảm chi phí.","Hội đồng chưa đủ tin tưởng để duyệt một kế hoạch tái cấu trúc nhiều mặt trận cùng lúc — bạn buộc phải thu hẹp lại thành cắt giảm chi phí."),"") |
| C. DECODED IDs (helper) |  |  |  |  |  |  |
| ID · F1 |  | =IFERROR(LEFT(C7,FIND(" ",C7)-1),"") | HS-D | HS-A | HS-C | HS-D |
| ID · F2 |  | HS-G | HS-C | HS-E | HS-F | HS-A |
| ID · F3 |  | HS-C | HS-A | HS-B | HS-B | HS-E |
| ID · Q1 |  | CH1-A | CH1-G | CH1-A | CH1-D | CH1-C |
| ID · Q2 |  | CH1-F | CH1-F | CH1-E | CH1-G | CH1-G |
| ID · FQ |  | CH2-G | CH2-E | CH2-D | CH2-F | CH2-E |
| ID · DX |  | CD-D | CD-D | CD-A | CD-C | CD-F |
| ID · T |  | PD-F | PD-C | PD-A | PD-B | PD-E |
| ID · TM |  | TG-B | TG-C | TG-A | TG-D | TG-B |
| ID · S1 |  | GR-4 | GR-4 | GR-3 | GR-2 | GR-1 |
| ID · S2 |  | GR-7 | GR-7 | GR-6 | GR-1 | GR-4 |
| ID · S3 |  | GR-6 | GR-6 | GR-2 | GR-5 | GR-7 |
| ID · RDX |  | =IFERROR(LEFT(C20,FIND(" ",C20)-1),"") | None | None | CD-D | None |
| ID · RT |  | None | None | None | None | None |
| D. FLAGS |  |  |  |  |  |  |
| Nhóm GR-1 (Suppliers) được ưu tiên? (1/0) |  | =IF(COUNTIF(C53:C55,"GR-1")>0,1,0) | =IF(COUNTIF(D53:D55,"GR-1")>0,1,0) | =IF(COUNTIF(E53:E55,"GR-1")>0,1,0) | =IF(COUNTIF(F53:F55,"GR-1")>0,1,0) | =IF(COUNTIF(G53:G55,"GR-1")>0,1,0) |
| Nhóm GR-2 (Employees) được ưu tiên? (1/0) |  | =IF(COUNTIF(C53:C55,"GR-2")>0,1,0) | =IF(COUNTIF(D53:D55,"GR-2")>0,1,0) | =IF(COUNTIF(E53:E55,"GR-2")>0,1,0) | =IF(COUNTIF(F53:F55,"GR-2")>0,1,0) | =IF(COUNTIF(G53:G55,"GR-2")>0,1,0) |
| Nhóm GR-3 (Customers) được ưu tiên? (1/0) |  | =IF(COUNTIF(C53:C55,"GR-3")>0,1,0) | =IF(COUNTIF(D53:D55,"GR-3")>0,1,0) | =IF(COUNTIF(E53:E55,"GR-3")>0,1,0) | =IF(COUNTIF(F53:F55,"GR-3")>0,1,0) | =IF(COUNTIF(G53:G55,"GR-3")>0,1,0) |
| Nhóm GR-4 (Creditors) được ưu tiên? (1/0) |  | =IF(COUNTIF(C53:C55,"GR-4")>0,1,0) | =IF(COUNTIF(D53:D55,"GR-4")>0,1,0) | =IF(COUNTIF(E53:E55,"GR-4")>0,1,0) | =IF(COUNTIF(F53:F55,"GR-4")>0,1,0) | =IF(COUNTIF(G53:G55,"GR-4")>0,1,0) |
| Nhóm GR-5 (Landlords) được ưu tiên? (1/0) |  | =IF(COUNTIF(C53:C55,"GR-5")>0,1,0) | =IF(COUNTIF(D53:D55,"GR-5")>0,1,0) | =IF(COUNTIF(E53:E55,"GR-5")>0,1,0) | =IF(COUNTIF(F53:F55,"GR-5")>0,1,0) | =IF(COUNTIF(G53:G55,"GR-5")>0,1,0) |
| Nhóm GR-6 (Holiday Inventory) được ưu tiên? (1/0) |  | =IF(COUNTIF(C53:C55,"GR-6")>0,1,0) | =IF(COUNTIF(D53:D55,"GR-6")>0,1,0) | =IF(COUNTIF(E53:E55,"GR-6")>0,1,0) | =IF(COUNTIF(F53:F55,"GR-6")>0,1,0) | =IF(COUNTIF(G53:G55,"GR-6")>0,1,0) |
| Nhóm GR-7 (Governance & Family) được ưu tiên? (1/0) |  | =IF(COUNTIF(C53:C55,"GR-7")>0,1,0) | =IF(COUNTIF(D53:D55,"GR-7")>0,1,0) | =IF(COUNTIF(E53:E55,"GR-7")>0,1,0) | =IF(COUNTIF(F53:F55,"GR-7")>0,1,0) | =IF(COUNTIF(G53:G55,"GR-7")>0,1,0) |
| Đã mở HS-G? (1/0) |  | =IF(COUNTIF(C44:C46,"HS-G")>0,1,0) | =IF(COUNTIF(D44:D46,"HS-G")>0,1,0) | =IF(COUNTIF(E44:E46,"HS-G")>0,1,0) | =IF(COUNTIF(F44:F46,"HS-G")>0,1,0) | =IF(COUNTIF(G44:G46,"HS-G")>0,1,0) |
| Đã mở HS-E? (1/0) |  | =IF(COUNTIF(C44:C46,"HS-E")>0,1,0) | =IF(COUNTIF(D44:D46,"HS-E")>0,1,0) | =IF(COUNTIF(E44:E46,"HS-E")>0,1,0) | =IF(COUNTIF(F44:F46,"HS-E")>0,1,0) | =IF(COUNTIF(G44:G46,"HS-E")>0,1,0) |
| Đủ điều kiện CD-F? (HS-D + ≥1 trong A/B/E/F) |  | =IF(AND(COUNTIF(C44:C46,"HS-D")>0,COUNTIF(C44:C46,"HS-A")+COUNTIF(C44:C46,"HS-B")+COUNTIF(C44:C46,"HS-E")+COUNTIF(C44:C46,"HS-F")>0),1,0) | =IF(AND(COUNTIF(D44:D46,"HS-D")>0,COUNTIF(D44:D46,"HS-A")+COUNTIF(D44:D46,"HS-B")+COUNTIF(D44:D46,"HS-E")+COUNTIF(D44:D46,"HS-F")>0),1,0) | =IF(AND(COUNTIF(E44:E46,"HS-D")>0,COUNTIF(E44:E46,"HS-A")+COUNTIF(E44:E46,"HS-B")+COUNTIF(E44:E46,"HS-E")+COUNTIF(E44:E46,"HS-F")>0),1,0) | =IF(AND(COUNTIF(F44:F46,"HS-D")>0,COUNTIF(F44:F46,"HS-A")+COUNTIF(F44:F46,"HS-B")+COUNTIF(F44:F46,"HS-E")+COUNTIF(F44:F46,"HS-F")>0),1,0) | =IF(AND(COUNTIF(G44:G46,"HS-D")>0,COUNTIF(G44:G46,"HS-A")+COUNTIF(G44:G46,"HS-B")+COUNTIF(G44:G46,"HS-E")+COUNTIF(G44:G46,"HS-F")>0),1,0) |
| Chọn CD-F nhưng thiếu điều kiện? (1/0) |  | =IF(AND(C50="CD-F",C68=0),1,0) | =IF(AND(D50="CD-F",D68=0),1,0) | =IF(AND(E50="CD-F",E68=0),1,0) | =IF(AND(F50="CD-F",F68=0),1,0) | =IF(AND(G50="CD-F",G68=0),1,0) |
| E. INVESTIGATION (Màn 2–5) |  |  |  |  |  |  |
| Điểm hồ sơ (tối đa 40) | Σ S2_Files | =IFERROR(INDEX(S2_Files!$E$5:$E$11,MATCH(C44,S2_Files!$A$5:$A$11,0)),0)+IFERROR(INDEX(S2_Files!$E$5:$E$11,MATCH(C45,S2_Files!$A$5:$A$11,0)),0)+IFERROR(INDEX(S2_Files!$E$5:$E$11,MATCH(C46,S2_Files!$A$5:$A$11,0)),0) | =IFERROR(INDEX(S2_Files!$E$5:$E$11,MATCH(D44,S2_Files!$A$5:$A$11,0)),0)+IFERROR(INDEX(S2_Files!$E$5:$E$11,MATCH(D45,S2_Files!$A$5:$A$11,0)),0)+IFERROR(INDEX(S2_Files!$E$5:$E$11,MATCH(D46,S2_Files!$A$5:$A$11,0)),0) | =IFERROR(INDEX(S2_Files!$E$5:$E$11,MATCH(E44,S2_Files!$A$5:$A$11,0)),0)+IFERROR(INDEX(S2_Files!$E$5:$E$11,MATCH(E45,S2_Files!$A$5:$A$11,0)),0)+IFERROR(INDEX(S2_Files!$E$5:$E$11,MATCH(E46,S2_Files!$A$5:$A$11,0)),0) | =IFERROR(INDEX(S2_Files!$E$5:$E$11,MATCH(F44,S2_Files!$A$5:$A$11,0)),0)+IFERROR(INDEX(S2_Files!$E$5:$E$11,MATCH(F45,S2_Files!$A$5:$A$11,0)),0)+IFERROR(INDEX(S2_Files!$E$5:$E$11,MATCH(F46,S2_Files!$A$5:$A$11,0)),0) | =IFERROR(INDEX(S2_Files!$E$5:$E$11,MATCH(G44,S2_Files!$A$5:$A$11,0)),0)+IFERROR(INDEX(S2_Files!$E$5:$E$11,MATCH(G45,S2_Files!$A$5:$A$11,0)),0)+IFERROR(INDEX(S2_Files!$E$5:$E$11,MATCH(G46,S2_Files!$A$5:$A$11,0)),0) |
| Câu hỏi 1: giá trị tăng thêm (M1, MIN qua 3 hồ sơ) | M1 | =MIN(IFERROR(INDEX(M1_File_x_Q!$C$6:$I$12,MATCH(C44,M1_File_x_Q!$A$6:$A$12,0),MATCH(C47,M1_File_x_Q!$C$5:$I$5,0)),0),IFERROR(INDEX(M1_File_x_Q!$C$6:$I$12,MATCH(C45,M1_File_x_Q!$A$6:$A$12,0),MATCH(C47,M1_File_x_Q!$C$5:$I$5,0)),0),IFERROR(INDEX(M1_File_x_Q!$C$6:$I$12,MATCH(C46,M1_File_x_Q!$A$6:$A$12,0),MATCH(C47,M1_File_x_Q!$C$5:$I$5,0)),0)) | =MIN(IFERROR(INDEX(M1_File_x_Q!$C$6:$I$12,MATCH(D44,M1_File_x_Q!$A$6:$A$12,0),MATCH(D47,M1_File_x_Q!$C$5:$I$5,0)),0),IFERROR(INDEX(M1_File_x_Q!$C$6:$I$12,MATCH(D45,M1_File_x_Q!$A$6:$A$12,0),MATCH(D47,M1_File_x_Q!$C$5:$I$5,0)),0),IFERROR(INDEX(M1_File_x_Q!$C$6:$I$12,MATCH(D46,M1_File_x_Q!$A$6:$A$12,0),MATCH(D47,M1_File_x_Q!$C$5:$I$5,0)),0)) | =MIN(IFERROR(INDEX(M1_File_x_Q!$C$6:$I$12,MATCH(E44,M1_File_x_Q!$A$6:$A$12,0),MATCH(E47,M1_File_x_Q!$C$5:$I$5,0)),0),IFERROR(INDEX(M1_File_x_Q!$C$6:$I$12,MATCH(E45,M1_File_x_Q!$A$6:$A$12,0),MATCH(E47,M1_File_x_Q!$C$5:$I$5,0)),0),IFERROR(INDEX(M1_File_x_Q!$C$6:$I$12,MATCH(E46,M1_File_x_Q!$A$6:$A$12,0),MATCH(E47,M1_File_x_Q!$C$5:$I$5,0)),0)) | =MIN(IFERROR(INDEX(M1_File_x_Q!$C$6:$I$12,MATCH(F44,M1_File_x_Q!$A$6:$A$12,0),MATCH(F47,M1_File_x_Q!$C$5:$I$5,0)),0),IFERROR(INDEX(M1_File_x_Q!$C$6:$I$12,MATCH(F45,M1_File_x_Q!$A$6:$A$12,0),MATCH(F47,M1_File_x_Q!$C$5:$I$5,0)),0),IFERROR(INDEX(M1_File_x_Q!$C$6:$I$12,MATCH(F46,M1_File_x_Q!$A$6:$A$12,0),MATCH(F47,M1_File_x_Q!$C$5:$I$5,0)),0)) | =MIN(IFERROR(INDEX(M1_File_x_Q!$C$6:$I$12,MATCH(G44,M1_File_x_Q!$A$6:$A$12,0),MATCH(G47,M1_File_x_Q!$C$5:$I$5,0)),0),IFERROR(INDEX(M1_File_x_Q!$C$6:$I$12,MATCH(G45,M1_File_x_Q!$A$6:$A$12,0),MATCH(G47,M1_File_x_Q!$C$5:$I$5,0)),0),IFERROR(INDEX(M1_File_x_Q!$C$6:$I$12,MATCH(G46,M1_File_x_Q!$A$6:$A$12,0),MATCH(G47,M1_File_x_Q!$C$5:$I$5,0)),0)) |
| Câu hỏi 2: giá trị tăng thêm (M1, MIN qua 3 hồ sơ) | M1 | =MIN(IFERROR(INDEX(M1_File_x_Q!$C$6:$I$12,MATCH(C44,M1_File_x_Q!$A$6:$A$12,0),MATCH(C48,M1_File_x_Q!$C$5:$I$5,0)),0),IFERROR(INDEX(M1_File_x_Q!$C$6:$I$12,MATCH(C45,M1_File_x_Q!$A$6:$A$12,0),MATCH(C48,M1_File_x_Q!$C$5:$I$5,0)),0),IFERROR(INDEX(M1_File_x_Q!$C$6:$I$12,MATCH(C46,M1_File_x_Q!$A$6:$A$12,0),MATCH(C48,M1_File_x_Q!$C$5:$I$5,0)),0)) | =MIN(IFERROR(INDEX(M1_File_x_Q!$C$6:$I$12,MATCH(D44,M1_File_x_Q!$A$6:$A$12,0),MATCH(D48,M1_File_x_Q!$C$5:$I$5,0)),0),IFERROR(INDEX(M1_File_x_Q!$C$6:$I$12,MATCH(D45,M1_File_x_Q!$A$6:$A$12,0),MATCH(D48,M1_File_x_Q!$C$5:$I$5,0)),0),IFERROR(INDEX(M1_File_x_Q!$C$6:$I$12,MATCH(D46,M1_File_x_Q!$A$6:$A$12,0),MATCH(D48,M1_File_x_Q!$C$5:$I$5,0)),0)) | =MIN(IFERROR(INDEX(M1_File_x_Q!$C$6:$I$12,MATCH(E44,M1_File_x_Q!$A$6:$A$12,0),MATCH(E48,M1_File_x_Q!$C$5:$I$5,0)),0),IFERROR(INDEX(M1_File_x_Q!$C$6:$I$12,MATCH(E45,M1_File_x_Q!$A$6:$A$12,0),MATCH(E48,M1_File_x_Q!$C$5:$I$5,0)),0),IFERROR(INDEX(M1_File_x_Q!$C$6:$I$12,MATCH(E46,M1_File_x_Q!$A$6:$A$12,0),MATCH(E48,M1_File_x_Q!$C$5:$I$5,0)),0)) | =MIN(IFERROR(INDEX(M1_File_x_Q!$C$6:$I$12,MATCH(F44,M1_File_x_Q!$A$6:$A$12,0),MATCH(F48,M1_File_x_Q!$C$5:$I$5,0)),0),IFERROR(INDEX(M1_File_x_Q!$C$6:$I$12,MATCH(F45,M1_File_x_Q!$A$6:$A$12,0),MATCH(F48,M1_File_x_Q!$C$5:$I$5,0)),0),IFERROR(INDEX(M1_File_x_Q!$C$6:$I$12,MATCH(F46,M1_File_x_Q!$A$6:$A$12,0),MATCH(F48,M1_File_x_Q!$C$5:$I$5,0)),0)) | =MIN(IFERROR(INDEX(M1_File_x_Q!$C$6:$I$12,MATCH(G44,M1_File_x_Q!$A$6:$A$12,0),MATCH(G48,M1_File_x_Q!$C$5:$I$5,0)),0),IFERROR(INDEX(M1_File_x_Q!$C$6:$I$12,MATCH(G45,M1_File_x_Q!$A$6:$A$12,0),MATCH(G48,M1_File_x_Q!$C$5:$I$5,0)),0),IFERROR(INDEX(M1_File_x_Q!$C$6:$I$12,MATCH(G46,M1_File_x_Q!$A$6:$A$12,0),MATCH(G48,M1_File_x_Q!$C$5:$I$5,0)),0)) |
| Câu hỏi cuối: cơ bản + M2 (chặn fq_cap) | S5 + M2 | =MIN(Config!$B$6,IFERROR(INDEX(S5_FinalQ!$E$5:$E$11,MATCH(C49,S5_FinalQ!$A$5:$A$11,0)),0)+IFERROR(INDEX(M2_File_x_FQ!$C$6:$I$12,MATCH(C44,M2_File_x_FQ!$A$6:$A$12,0),MATCH(C49,M2_File_x_FQ!$C$5:$I$5,0)),0)+IFERROR(INDEX(M2_File_x_FQ!$C$6:$I$12,MATCH(C45,M2_File_x_FQ!$A$6:$A$12,0),MATCH(C49,M2_File_x_FQ!$C$5:$I$5,0)),0)+IFERROR(INDEX(M2_File_x_FQ!$C$6:$I$12,MATCH(C46,M2_File_x_FQ!$A$6:$A$12,0),MATCH(C49,M2_File_x_FQ!$C$5:$I$5,0)),0)) | =MIN(Config!$B$6,IFERROR(INDEX(S5_FinalQ!$E$5:$E$11,MATCH(D49,S5_FinalQ!$A$5:$A$11,0)),0)+IFERROR(INDEX(M2_File_x_FQ!$C$6:$I$12,MATCH(D44,M2_File_x_FQ!$A$6:$A$12,0),MATCH(D49,M2_File_x_FQ!$C$5:$I$5,0)),0)+IFERROR(INDEX(M2_File_x_FQ!$C$6:$I$12,MATCH(D45,M2_File_x_FQ!$A$6:$A$12,0),MATCH(D49,M2_File_x_FQ!$C$5:$I$5,0)),0)+IFERROR(INDEX(M2_File_x_FQ!$C$6:$I$12,MATCH(D46,M2_File_x_FQ!$A$6:$A$12,0),MATCH(D49,M2_File_x_FQ!$C$5:$I$5,0)),0)) | =MIN(Config!$B$6,IFERROR(INDEX(S5_FinalQ!$E$5:$E$11,MATCH(E49,S5_FinalQ!$A$5:$A$11,0)),0)+IFERROR(INDEX(M2_File_x_FQ!$C$6:$I$12,MATCH(E44,M2_File_x_FQ!$A$6:$A$12,0),MATCH(E49,M2_File_x_FQ!$C$5:$I$5,0)),0)+IFERROR(INDEX(M2_File_x_FQ!$C$6:$I$12,MATCH(E45,M2_File_x_FQ!$A$6:$A$12,0),MATCH(E49,M2_File_x_FQ!$C$5:$I$5,0)),0)+IFERROR(INDEX(M2_File_x_FQ!$C$6:$I$12,MATCH(E46,M2_File_x_FQ!$A$6:$A$12,0),MATCH(E49,M2_File_x_FQ!$C$5:$I$5,0)),0)) | =MIN(Config!$B$6,IFERROR(INDEX(S5_FinalQ!$E$5:$E$11,MATCH(F49,S5_FinalQ!$A$5:$A$11,0)),0)+IFERROR(INDEX(M2_File_x_FQ!$C$6:$I$12,MATCH(F44,M2_File_x_FQ!$A$6:$A$12,0),MATCH(F49,M2_File_x_FQ!$C$5:$I$5,0)),0)+IFERROR(INDEX(M2_File_x_FQ!$C$6:$I$12,MATCH(F45,M2_File_x_FQ!$A$6:$A$12,0),MATCH(F49,M2_File_x_FQ!$C$5:$I$5,0)),0)+IFERROR(INDEX(M2_File_x_FQ!$C$6:$I$12,MATCH(F46,M2_File_x_FQ!$A$6:$A$12,0),MATCH(F49,M2_File_x_FQ!$C$5:$I$5,0)),0)) | =MIN(Config!$B$6,IFERROR(INDEX(S5_FinalQ!$E$5:$E$11,MATCH(G49,S5_FinalQ!$A$5:$A$11,0)),0)+IFERROR(INDEX(M2_File_x_FQ!$C$6:$I$12,MATCH(G44,M2_File_x_FQ!$A$6:$A$12,0),MATCH(G49,M2_File_x_FQ!$C$5:$I$5,0)),0)+IFERROR(INDEX(M2_File_x_FQ!$C$6:$I$12,MATCH(G45,M2_File_x_FQ!$A$6:$A$12,0),MATCH(G49,M2_File_x_FQ!$C$5:$I$5,0)),0)+IFERROR(INDEX(M2_File_x_FQ!$C$6:$I$12,MATCH(G46,M2_File_x_FQ!$A$6:$A$12,0),MATCH(G49,M2_File_x_FQ!$C$5:$I$5,0)),0)) |
| INVESTIGATION SCORE /100 | tổng ÷ điểm tối đa (Config) | =MAX(0,MIN(100,(C71+C72+C73+C74)/Config!$B$7*100)) | =MAX(0,MIN(100,(D71+D72+D73+D74)/Config!$B$7*100)) | =MAX(0,MIN(100,(E71+E72+E73+E74)/Config!$B$7*100)) | =MAX(0,MIN(100,(F71+F72+F73+F74)/Config!$B$7*100)) | =MAX(0,MIN(100,(G71+G72+G73+G74)/Config!$B$7*100)) |
| F. DIAGNOSIS (Màn 6) |  |  |  |  |  |  |
| Primary Diagnosis pts (tối đa 60; CD-F thiếu ĐK × hệ số) | S6_Diagnosis | =IFERROR(INDEX(S6_Diagnosis!$E$5:$E$10,MATCH(C50,S6_Diagnosis!$A$5:$A$10,0)),0)*IF(C69=1,Config!$B$10,1) | =IFERROR(INDEX(S6_Diagnosis!$E$5:$E$10,MATCH(D50,S6_Diagnosis!$A$5:$A$10,0)),0)*IF(D69=1,Config!$B$10,1) | =IFERROR(INDEX(S6_Diagnosis!$E$5:$E$10,MATCH(E50,S6_Diagnosis!$A$5:$A$10,0)),0)*IF(E69=1,Config!$B$10,1) | =IFERROR(INDEX(S6_Diagnosis!$E$5:$E$10,MATCH(F50,S6_Diagnosis!$A$5:$A$10,0)),0)*IF(F69=1,Config!$B$10,1) | =IFERROR(INDEX(S6_Diagnosis!$E$5:$E$10,MATCH(G50,S6_Diagnosis!$A$5:$A$10,0)),0)*IF(G69=1,Config!$B$10,1) |
| Evidence support (M3: hồ sơ + 50% × CH1) | chặn dxsup_cap | =MAX(0,MIN(Config!$B$8,IFERROR(INDEX(M3_Dx_x_File!$C$6:$I$11,MATCH(C50,M3_Dx_x_File!$A$6:$A$11,0),MATCH(C44,M3_Dx_x_File!$C$5:$I$5,0)),0)+IFERROR(INDEX(M3_Dx_x_File!$C$6:$I$11,MATCH(C50,M3_Dx_x_File!$A$6:$A$11,0),MATCH(C45,M3_Dx_x_File!$C$5:$I$5,0)),0)+IFERROR(INDEX(M3_Dx_x_File!$C$6:$I$11,MATCH(C50,M3_Dx_x_File!$A$6:$A$11,0),MATCH(C46,M3_Dx_x_File!$C$5:$I$5,0)),0)+Config!$B$9*(IFERROR(INDEX(M3_Dx_x_File!$C$6:$I$11,MATCH(C50,M3_Dx_x_File!$A$6:$A$11,0),MATCH("HS-"&RIGHT(C47,1),M3_Dx_x_File!$C$5:$I$5,0)),0)+IFERROR(INDEX(M3_Dx_x_File!$C$6:$I$11,MATCH(C50,M3_Dx_x_File!$A$6:$A$11,0),MATCH("HS-"&RIGHT(C48,1),M3_Dx_x_File!$C$5:$I$5,0)),0)))) | =MAX(0,MIN(Config!$B$8,IFERROR(INDEX(M3_Dx_x_File!$C$6:$I$11,MATCH(D50,M3_Dx_x_File!$A$6:$A$11,0),MATCH(D44,M3_Dx_x_File!$C$5:$I$5,0)),0)+IFERROR(INDEX(M3_Dx_x_File!$C$6:$I$11,MATCH(D50,M3_Dx_x_File!$A$6:$A$11,0),MATCH(D45,M3_Dx_x_File!$C$5:$I$5,0)),0)+IFERROR(INDEX(M3_Dx_x_File!$C$6:$I$11,MATCH(D50,M3_Dx_x_File!$A$6:$A$11,0),MATCH(D46,M3_Dx_x_File!$C$5:$I$5,0)),0)+Config!$B$9*(IFERROR(INDEX(M3_Dx_x_File!$C$6:$I$11,MATCH(D50,M3_Dx_x_File!$A$6:$A$11,0),MATCH("HS-"&RIGHT(D47,1),M3_Dx_x_File!$C$5:$I$5,0)),0)+IFERROR(INDEX(M3_Dx_x_File!$C$6:$I$11,MATCH(D50,M3_Dx_x_File!$A$6:$A$11,0),MATCH("HS-"&RIGHT(D48,1),M3_Dx_x_File!$C$5:$I$5,0)),0)))) | =MAX(0,MIN(Config!$B$8,IFERROR(INDEX(M3_Dx_x_File!$C$6:$I$11,MATCH(E50,M3_Dx_x_File!$A$6:$A$11,0),MATCH(E44,M3_Dx_x_File!$C$5:$I$5,0)),0)+IFERROR(INDEX(M3_Dx_x_File!$C$6:$I$11,MATCH(E50,M3_Dx_x_File!$A$6:$A$11,0),MATCH(E45,M3_Dx_x_File!$C$5:$I$5,0)),0)+IFERROR(INDEX(M3_Dx_x_File!$C$6:$I$11,MATCH(E50,M3_Dx_x_File!$A$6:$A$11,0),MATCH(E46,M3_Dx_x_File!$C$5:$I$5,0)),0)+Config!$B$9*(IFERROR(INDEX(M3_Dx_x_File!$C$6:$I$11,MATCH(E50,M3_Dx_x_File!$A$6:$A$11,0),MATCH("HS-"&RIGHT(E47,1),M3_Dx_x_File!$C$5:$I$5,0)),0)+IFERROR(INDEX(M3_Dx_x_File!$C$6:$I$11,MATCH(E50,M3_Dx_x_File!$A$6:$A$11,0),MATCH("HS-"&RIGHT(E48,1),M3_Dx_x_File!$C$5:$I$5,0)),0)))) | =MAX(0,MIN(Config!$B$8,IFERROR(INDEX(M3_Dx_x_File!$C$6:$I$11,MATCH(F50,M3_Dx_x_File!$A$6:$A$11,0),MATCH(F44,M3_Dx_x_File!$C$5:$I$5,0)),0)+IFERROR(INDEX(M3_Dx_x_File!$C$6:$I$11,MATCH(F50,M3_Dx_x_File!$A$6:$A$11,0),MATCH(F45,M3_Dx_x_File!$C$5:$I$5,0)),0)+IFERROR(INDEX(M3_Dx_x_File!$C$6:$I$11,MATCH(F50,M3_Dx_x_File!$A$6:$A$11,0),MATCH(F46,M3_Dx_x_File!$C$5:$I$5,0)),0)+Config!$B$9*(IFERROR(INDEX(M3_Dx_x_File!$C$6:$I$11,MATCH(F50,M3_Dx_x_File!$A$6:$A$11,0),MATCH("HS-"&RIGHT(F47,1),M3_Dx_x_File!$C$5:$I$5,0)),0)+IFERROR(INDEX(M3_Dx_x_File!$C$6:$I$11,MATCH(F50,M3_Dx_x_File!$A$6:$A$11,0),MATCH("HS-"&RIGHT(F48,1),M3_Dx_x_File!$C$5:$I$5,0)),0)))) | =MAX(0,MIN(Config!$B$8,IFERROR(INDEX(M3_Dx_x_File!$C$6:$I$11,MATCH(G50,M3_Dx_x_File!$A$6:$A$11,0),MATCH(G44,M3_Dx_x_File!$C$5:$I$5,0)),0)+IFERROR(INDEX(M3_Dx_x_File!$C$6:$I$11,MATCH(G50,M3_Dx_x_File!$A$6:$A$11,0),MATCH(G45,M3_Dx_x_File!$C$5:$I$5,0)),0)+IFERROR(INDEX(M3_Dx_x_File!$C$6:$I$11,MATCH(G50,M3_Dx_x_File!$A$6:$A$11,0),MATCH(G46,M3_Dx_x_File!$C$5:$I$5,0)),0)+Config!$B$9*(IFERROR(INDEX(M3_Dx_x_File!$C$6:$I$11,MATCH(G50,M3_Dx_x_File!$A$6:$A$11,0),MATCH("HS-"&RIGHT(G47,1),M3_Dx_x_File!$C$5:$I$5,0)),0)+IFERROR(INDEX(M3_Dx_x_File!$C$6:$I$11,MATCH(G50,M3_Dx_x_File!$A$6:$A$11,0),MATCH("HS-"&RIGHT(G48,1),M3_Dx_x_File!$C$5:$I$5,0)),0)))) |
| DIAGNOSIS SCORE /100 | 60 + 40 | =C77+C78 | =D77+D78 | =E77+E78 | =F77+F78 | =G77+G78 |
| G. UY TÍN & ĐIỀU KIỆN PHÁC ĐỒ (Màn 6–8) |  |  |  |  |  |  |
| Uy tín: chẩn đoán có căn cứ (+1 / −1) | Config | =IF(C50="CD-F",IF(C68=1,Config!$B$14,Config!$B$15),IF(OR(COUNTIF(C44:C46,"HS-"&RIGHT(C50,1))>0,COUNTIF(C47:C48,"CH1-"&RIGHT(C50,1))>0),Config!$B$14,Config!$B$15)) | =IF(D50="CD-F",IF(D68=1,Config!$B$14,Config!$B$15),IF(OR(COUNTIF(D44:D46,"HS-"&RIGHT(D50,1))>0,COUNTIF(D47:D48,"CH1-"&RIGHT(D50,1))>0),Config!$B$14,Config!$B$15)) | =IF(E50="CD-F",IF(E68=1,Config!$B$14,Config!$B$15),IF(OR(COUNTIF(E44:E46,"HS-"&RIGHT(E50,1))>0,COUNTIF(E47:E48,"CH1-"&RIGHT(E50,1))>0),Config!$B$14,Config!$B$15)) | =IF(F50="CD-F",IF(F68=1,Config!$B$14,Config!$B$15),IF(OR(COUNTIF(F44:F46,"HS-"&RIGHT(F50,1))>0,COUNTIF(F47:F48,"CH1-"&RIGHT(F50,1))>0),Config!$B$14,Config!$B$15)) | =IF(G50="CD-F",IF(G68=1,Config!$B$14,Config!$B$15),IF(OR(COUNTIF(G44:G46,"HS-"&RIGHT(G50,1))>0,COUNTIF(G47:G48,"CH1-"&RIGHT(G50,1))>0),Config!$B$14,Config!$B$15)) |
| Uy tín: CD-F thiếu điều kiện | Config | =IF(C69=1,Config!$B$17,0) | =IF(D69=1,Config!$B$17,0) | =IF(E69=1,Config!$B$17,0) | =IF(F69=1,Config!$B$17,0) | =IF(G69=1,Config!$B$17,0) |
| Uy tín: điều tra hiệu quả (2 CH1 ở khu vực chưa mở) | Config | =IF(AND(COUNTIF(C44:C46,"HS-"&RIGHT(C47,1))=0,COUNTIF(C44:C46,"HS-"&RIGHT(C48,1))=0),Config!$B$16,0) | =IF(AND(COUNTIF(D44:D46,"HS-"&RIGHT(D47,1))=0,COUNTIF(D44:D46,"HS-"&RIGHT(D48,1))=0),Config!$B$16,0) | =IF(AND(COUNTIF(E44:E46,"HS-"&RIGHT(E47,1))=0,COUNTIF(E44:E46,"HS-"&RIGHT(E48,1))=0),Config!$B$16,0) | =IF(AND(COUNTIF(F44:F46,"HS-"&RIGHT(F47,1))=0,COUNTIF(F44:F46,"HS-"&RIGHT(F48,1))=0),Config!$B$16,0) | =IF(AND(COUNTIF(G44:G46,"HS-"&RIGHT(G47,1))=0,COUNTIF(G44:G46,"HS-"&RIGHT(G48,1))=0),Config!$B$16,0) |
| Uy tín tại Màn 7 (điểm) | khởi điểm + các mục trên | =Config!$B$11+C81+C82+C83 | =Config!$B$11+D81+D82+D83 | =Config!$B$11+E81+E82+E83 | =Config!$B$11+F81+F82+F83 | =Config!$B$11+G81+G82+G83 |
| Uy tín tại Màn 7 (tier) | Config | =IF(C84>=Config!$B$13,"Cao",IF(C84>=Config!$B$12,"Trung bình","Thấp")) | =IF(D84>=Config!$B$13,"Cao",IF(D84>=Config!$B$12,"Trung bình","Thấp")) | =IF(E84>=Config!$B$13,"Cao",IF(E84>=Config!$B$12,"Trung bình","Thấp")) | =IF(F84>=Config!$B$13,"Cao",IF(F84>=Config!$B$12,"Trung bình","Thấp")) | =IF(G84>=Config!$B$13,"Cao",IF(G84>=Config!$B$12,"Trung bình","Thấp")) |
| Phác đồ HIỆU LỰC sau kiểm tra Uy tín | PD-A cần ≥TB; PD-F cần Cao | =IF(C51="PD-A",IF(C84>=Config!$B$12,"PD-A","PD-B"),IF(C51="PD-F",IF(C84>=Config!$B$13,"PD-F","PD-B"),C51)) | =IF(D51="PD-A",IF(D84>=Config!$B$12,"PD-A","PD-B"),IF(D51="PD-F",IF(D84>=Config!$B$13,"PD-F","PD-B"),D51)) | =IF(E51="PD-A",IF(E84>=Config!$B$12,"PD-A","PD-B"),IF(E51="PD-F",IF(E84>=Config!$B$13,"PD-F","PD-B"),E51)) | =IF(F51="PD-A",IF(F84>=Config!$B$12,"PD-A","PD-B"),IF(F51="PD-F",IF(F84>=Config!$B$13,"PD-F","PD-B"),F51)) | =IF(G51="PD-A",IF(G84>=Config!$B$12,"PD-A","PD-B"),IF(G51="PD-F",IF(G84>=Config!$B$13,"PD-F","PD-B"),G51)) |
| Bị hạ xuống PD-B? (1/0) |  | =IF(AND(C51<>"",C86<>C51),1,0) | =IF(AND(D51<>"",D86<>D51),1,0) | =IF(AND(E51<>"",E86<>E51),1,0) | =IF(AND(F51<>"",F86<>F51),1,0) | =IF(AND(G51<>"",G86<>G51),1,0) |
| TG-C refinance thử THẤT BẠI? (1/0) | TG-C + không ưu tiên Creditors | =IF(AND(C52="TG-C",C62=0),1,0) | =IF(AND(D52="TG-C",D62=0),1,0) | =IF(AND(E52="TG-C",E62=0),1,0) | =IF(AND(F52="TG-C",F62=0),1,0) | =IF(AND(G52="TG-C",G62=0),1,0) |
| Uy tín sau Màn 8 (điểm) |  | =C84+C88*Config!$B$18 | =D84+D88*Config!$B$18 | =E84+E88*Config!$B$18 | =F84+F88*Config!$B$18 | =G84+G88*Config!$B$18 |
| H. TREATMENT (Màn 7) |  |  |  |  |  |  |
| Độ phù hợp vs NGUYÊN NHÂN GỐC (M4) | row = Config true Dx | =IFERROR(INDEX(M4_Dx_x_Tx!$C$6:$H$11,MATCH(Config!$B$4,M4_Dx_x_Tx!$A$6:$A$11,0),MATCH(C86,M4_Dx_x_Tx!$C$5:$H$5,0)),0) | =IFERROR(INDEX(M4_Dx_x_Tx!$C$6:$H$11,MATCH(Config!$B$4,M4_Dx_x_Tx!$A$6:$A$11,0),MATCH(D86,M4_Dx_x_Tx!$C$5:$H$5,0)),0) | =IFERROR(INDEX(M4_Dx_x_Tx!$C$6:$H$11,MATCH(Config!$B$4,M4_Dx_x_Tx!$A$6:$A$11,0),MATCH(E86,M4_Dx_x_Tx!$C$5:$H$5,0)),0) | =IFERROR(INDEX(M4_Dx_x_Tx!$C$6:$H$11,MATCH(Config!$B$4,M4_Dx_x_Tx!$A$6:$A$11,0),MATCH(F86,M4_Dx_x_Tx!$C$5:$H$5,0)),0) | =IFERROR(INDEX(M4_Dx_x_Tx!$C$6:$H$11,MATCH(Config!$B$4,M4_Dx_x_Tx!$A$6:$A$11,0),MATCH(G86,M4_Dx_x_Tx!$C$5:$H$5,0)),0) |
| Độ phù hợp vs chẩn đoán của người chơi (M4) | row = Dx của bạn | =IFERROR(INDEX(M4_Dx_x_Tx!$C$6:$H$11,MATCH(C50,M4_Dx_x_Tx!$A$6:$A$11,0),MATCH(C86,M4_Dx_x_Tx!$C$5:$H$5,0)),0) | =IFERROR(INDEX(M4_Dx_x_Tx!$C$6:$H$11,MATCH(D50,M4_Dx_x_Tx!$A$6:$A$11,0),MATCH(D86,M4_Dx_x_Tx!$C$5:$H$5,0)),0) | =IFERROR(INDEX(M4_Dx_x_Tx!$C$6:$H$11,MATCH(E50,M4_Dx_x_Tx!$A$6:$A$11,0),MATCH(E86,M4_Dx_x_Tx!$C$5:$H$5,0)),0) | =IFERROR(INDEX(M4_Dx_x_Tx!$C$6:$H$11,MATCH(F50,M4_Dx_x_Tx!$A$6:$A$11,0),MATCH(F86,M4_Dx_x_Tx!$C$5:$H$5,0)),0) | =IFERROR(INDEX(M4_Dx_x_Tx!$C$6:$H$11,MATCH(G50,M4_Dx_x_Tx!$A$6:$A$11,0),MATCH(G86,M4_Dx_x_Tx!$C$5:$H$5,0)),0) |
| TREATMENT SCORE /100 | 60% gốc + 40% tự chẩn đoán | =Config!$B$20*C91+Config!$B$21*C92 | =Config!$B$20*D91+Config!$B$21*D92 | =Config!$B$20*E91+Config!$B$21*E92 | =Config!$B$20*F91+Config!$B$21*F92 | =Config!$B$20*G91+Config!$B$21*G92 |
| I. EXECUTION PLANNING (Màn 8–9) |  |  |  |  |  |  |
| Điểm thời điểm (M5) | PD hiệu lực × Thời điểm | =IFERROR(INDEX(M5_Tx_x_Timing!$C$6:$F$11,MATCH(C86,M5_Tx_x_Timing!$A$6:$A$11,0),MATCH(C52,M5_Tx_x_Timing!$C$5:$F$5,0)),0) | =IFERROR(INDEX(M5_Tx_x_Timing!$C$6:$F$11,MATCH(D86,M5_Tx_x_Timing!$A$6:$A$11,0),MATCH(D52,M5_Tx_x_Timing!$C$5:$F$5,0)),0) | =IFERROR(INDEX(M5_Tx_x_Timing!$C$6:$F$11,MATCH(E86,M5_Tx_x_Timing!$A$6:$A$11,0),MATCH(E52,M5_Tx_x_Timing!$C$5:$F$5,0)),0) | =IFERROR(INDEX(M5_Tx_x_Timing!$C$6:$F$11,MATCH(F86,M5_Tx_x_Timing!$A$6:$A$11,0),MATCH(F52,M5_Tx_x_Timing!$C$5:$F$5,0)),0) | =IFERROR(INDEX(M5_Tx_x_Timing!$C$6:$F$11,MATCH(G86,M5_Tx_x_Timing!$A$6:$A$11,0),MATCH(G52,M5_Tx_x_Timing!$C$5:$F$5,0)),0) |
| Điểm thô 3 nhóm ưu tiên (M6) | M6 | =IFERROR(INDEX(M6_Tx_x_Stake!$C$6:$I$11,MATCH(C86,M6_Tx_x_Stake!$A$6:$A$11,0),MATCH(C53,M6_Tx_x_Stake!$C$5:$I$5,0)),0)+IFERROR(INDEX(M6_Tx_x_Stake!$C$6:$I$11,MATCH(C86,M6_Tx_x_Stake!$A$6:$A$11,0),MATCH(C54,M6_Tx_x_Stake!$C$5:$I$5,0)),0)+IFERROR(INDEX(M6_Tx_x_Stake!$C$6:$I$11,MATCH(C86,M6_Tx_x_Stake!$A$6:$A$11,0),MATCH(C55,M6_Tx_x_Stake!$C$5:$I$5,0)),0) | =IFERROR(INDEX(M6_Tx_x_Stake!$C$6:$I$11,MATCH(D86,M6_Tx_x_Stake!$A$6:$A$11,0),MATCH(D53,M6_Tx_x_Stake!$C$5:$I$5,0)),0)+IFERROR(INDEX(M6_Tx_x_Stake!$C$6:$I$11,MATCH(D86,M6_Tx_x_Stake!$A$6:$A$11,0),MATCH(D54,M6_Tx_x_Stake!$C$5:$I$5,0)),0)+IFERROR(INDEX(M6_Tx_x_Stake!$C$6:$I$11,MATCH(D86,M6_Tx_x_Stake!$A$6:$A$11,0),MATCH(D55,M6_Tx_x_Stake!$C$5:$I$5,0)),0) | =IFERROR(INDEX(M6_Tx_x_Stake!$C$6:$I$11,MATCH(E86,M6_Tx_x_Stake!$A$6:$A$11,0),MATCH(E53,M6_Tx_x_Stake!$C$5:$I$5,0)),0)+IFERROR(INDEX(M6_Tx_x_Stake!$C$6:$I$11,MATCH(E86,M6_Tx_x_Stake!$A$6:$A$11,0),MATCH(E54,M6_Tx_x_Stake!$C$5:$I$5,0)),0)+IFERROR(INDEX(M6_Tx_x_Stake!$C$6:$I$11,MATCH(E86,M6_Tx_x_Stake!$A$6:$A$11,0),MATCH(E55,M6_Tx_x_Stake!$C$5:$I$5,0)),0) | =IFERROR(INDEX(M6_Tx_x_Stake!$C$6:$I$11,MATCH(F86,M6_Tx_x_Stake!$A$6:$A$11,0),MATCH(F53,M6_Tx_x_Stake!$C$5:$I$5,0)),0)+IFERROR(INDEX(M6_Tx_x_Stake!$C$6:$I$11,MATCH(F86,M6_Tx_x_Stake!$A$6:$A$11,0),MATCH(F54,M6_Tx_x_Stake!$C$5:$I$5,0)),0)+IFERROR(INDEX(M6_Tx_x_Stake!$C$6:$I$11,MATCH(F86,M6_Tx_x_Stake!$A$6:$A$11,0),MATCH(F55,M6_Tx_x_Stake!$C$5:$I$5,0)),0) | =IFERROR(INDEX(M6_Tx_x_Stake!$C$6:$I$11,MATCH(G86,M6_Tx_x_Stake!$A$6:$A$11,0),MATCH(G53,M6_Tx_x_Stake!$C$5:$I$5,0)),0)+IFERROR(INDEX(M6_Tx_x_Stake!$C$6:$I$11,MATCH(G86,M6_Tx_x_Stake!$A$6:$A$11,0),MATCH(G54,M6_Tx_x_Stake!$C$5:$I$5,0)),0)+IFERROR(INDEX(M6_Tx_x_Stake!$C$6:$I$11,MATCH(G86,M6_Tx_x_Stake!$A$6:$A$11,0),MATCH(G55,M6_Tx_x_Stake!$C$5:$I$5,0)),0) |
| Top-3 tốt nhất của phác đồ | M6 cột J | =IFERROR(INDEX(M6_Tx_x_Stake!$J$6:$J$11,MATCH(C86,M6_Tx_x_Stake!$A$6:$A$11,0)),0) | =IFERROR(INDEX(M6_Tx_x_Stake!$J$6:$J$11,MATCH(D86,M6_Tx_x_Stake!$A$6:$A$11,0)),0) | =IFERROR(INDEX(M6_Tx_x_Stake!$J$6:$J$11,MATCH(E86,M6_Tx_x_Stake!$A$6:$A$11,0)),0) | =IFERROR(INDEX(M6_Tx_x_Stake!$J$6:$J$11,MATCH(F86,M6_Tx_x_Stake!$A$6:$A$11,0)),0) | =IFERROR(INDEX(M6_Tx_x_Stake!$J$6:$J$11,MATCH(G86,M6_Tx_x_Stake!$A$6:$A$11,0)),0) |
| Stakeholder score | thô ÷ tốt nhất × 100 | =IF(C97=0,0,MAX(0,MIN(100,C96/C97*100))) | =IF(D97=0,0,MAX(0,MIN(100,D96/D97*100))) | =IF(E97=0,0,MAX(0,MIN(100,E96/E97*100))) | =IF(F97=0,0,MAX(0,MIN(100,F96/F97*100))) | =IF(G97=0,0,MAX(0,MIN(100,G96/G97*100))) |
| EXECUTION SCORE /100 | 50% thời điểm + 50% nhóm | =Config!$B$22*C95+Config!$B$23*C98 | =Config!$B$22*D95+Config!$B$23*D98 | =Config!$B$22*E95+Config!$B$23*E98 | =Config!$B$22*F95+Config!$B$23*F98 | =Config!$B$22*G95+Config!$B$23*G98 |
| J. DIỄN BIẾN MÀN 10 (1 = xảy ra) |  |  |  |  |  |  |
| E1 · Store Update: đóng thêm cửa hàng ngoài kế hoạch | PD hiệu lực = PD-B + TG-A + KHÔNG ưu tiê | =IF(AND(C86="PD-B",C52="TG-A",C60=0),1,0) | =IF(AND(D86="PD-B",D52="TG-A",D60=0),1,0) | =IF(AND(E86="PD-B",E52="TG-A",E60=0),1,0) | =IF(AND(F86="PD-B",F52="TG-A",F60=0),1,0) | =IF(AND(G86="PD-B",G52="TG-A",G60=0),1,0) |
| E2 · Liquidity Update: board hạ kế hoạch xuống PD-B | Chọn PD-A/PD-F nhưng Uy tín không đủ (Mà | =C87 | =D87 | =E87 | =F87 | =G87 |
| E3 · Debt Update: chủ nợ gia hạn nhưng tăng lãi 1.0–1.5% | PD-C + ưu tiên Creditors | =IF(AND(C86="PD-C",C62=1),1,0) | =IF(AND(D86="PD-C",D62=1),1,0) | =IF(AND(E86="PD-C",E62=1),1,0) | =IF(AND(F86="PD-C",F62=1),1,0) | =IF(AND(G86="PD-C",G62=1),1,0) |
| E4 · Family/Board Update: Michael & Richard họp riêng, bỏ | KHÔNG ưu tiên Governance & Family và chẩ | =IF(AND(C65=0,C50<>"CD-F",C50<>""),1,0) | =IF(AND(D65=0,D50<>"CD-F",D50<>""),1,0) | =IF(AND(E65=0,E50<>"CD-F",E50<>""),1,0) | =IF(AND(F65=0,F50<>"CD-F",F50<>""),1,0) | =IF(AND(G65=0,G50<>"CD-F",G50<>""),1,0) |
| E5 · Vendor Update: nhà cung cấp đòi cash-in-advance | PD-E + KHÔNG ưu tiên Suppliers | =IF(AND(C86="PD-E",C59=0),1,0) | =IF(AND(D86="PD-E",D59=0),1,0) | =IF(AND(E86="PD-E",E59=0),1,0) | =IF(AND(F86="PD-E",F59=0),1,0) | =IF(AND(G86="PD-E",G59=0),1,0) |
| E6 · Debt Update: thị trường đọc là tín hiệu yếu | TG-C + KHÔNG ưu tiên Creditors (refinanc | =C88 | =D88 | =E88 | =F88 | =G88 |
| E7 · Liquidity Update: runway cạn dần | Chọn TG-D (Chờ 6 tháng) | =IF(C52="TG-D",1,0) | =IF(D52="TG-D",1,0) | =IF(E52="TG-D",1,0) | =IF(F52="TG-D",1,0) | =IF(G52="TG-D",1,0) |
| E8 · Debt Update: phản bác CD-A | Chọn CD-A, chưa mở HS-D | =IF(AND(C50="CD-A",COUNTIF(C44:C46,"HS-D")=0),1,0) | =IF(AND(D50="CD-A",COUNTIF(D44:D46,"HS-D")=0),1,0) | =IF(AND(E50="CD-A",COUNTIF(E44:E46,"HS-D")=0),1,0) | =IF(AND(F50="CD-A",COUNTIF(F44:F46,"HS-D")=0),1,0) | =IF(AND(G50="CD-A",COUNTIF(G44:G46,"HS-D")=0),1,0) |
| E9 · Liquidity Update: phản bác CD-B | Chọn CD-B, chưa mở HS-C | =IF(AND(C50="CD-B",COUNTIF(C44:C46,"HS-C")=0),1,0) | =IF(AND(D50="CD-B",COUNTIF(D44:D46,"HS-C")=0),1,0) | =IF(AND(E50="CD-B",COUNTIF(E44:E46,"HS-C")=0),1,0) | =IF(AND(F50="CD-B",COUNTIF(F44:F46,"HS-C")=0),1,0) | =IF(AND(G50="CD-B",COUNTIF(G44:G46,"HS-C")=0),1,0) |
| E10 · Debt Update: phản bác CD-C | Chọn CD-C, chưa mở HS-D | =IF(AND(C50="CD-C",COUNTIF(C44:C46,"HS-D")=0),1,0) | =IF(AND(D50="CD-C",COUNTIF(D44:D46,"HS-D")=0),1,0) | =IF(AND(E50="CD-C",COUNTIF(E44:E46,"HS-D")=0),1,0) | =IF(AND(F50="CD-C",COUNTIF(F44:F46,"HS-D")=0),1,0) | =IF(AND(G50="CD-C",COUNTIF(G44:G46,"HS-D")=0),1,0) |
| E11 · Sales Update: phản bác CD-E | Chọn CD-E, chưa mở HS-D | =IF(AND(C50="CD-E",COUNTIF(C44:C46,"HS-D")=0),1,0) | =IF(AND(D50="CD-E",COUNTIF(D44:D46,"HS-D")=0),1,0) | =IF(AND(E50="CD-E",COUNTIF(E44:E46,"HS-D")=0),1,0) | =IF(AND(F50="CD-E",COUNTIF(F44:F46,"HS-D")=0),1,0) | =IF(AND(G50="CD-E",COUNTIF(G44:G46,"HS-D")=0),1,0) |
| E12 · Store Update: hệ quả ưu tiên Employees | Ưu tiên Employees ở Màn 9 | =C60 | 0 | 1 | 1 | 0 |
| E13 · Sales Update: hệ quả ưu tiên Customers | Ưu tiên Customers ở Màn 9 | 0 | 0 | 1 | 0 | 0 |
| E14 · Store Update: hệ quả ưu tiên Landlords | Ưu tiên Landlords ở Màn 9 | =C63 | =D63 | =E63 | =F63 | =G63 |
| Có dữ liệu mới biện minh đổi PHÁC ĐỒ? | S10 cột D | =IF(SUMPRODUCT(C101:C114,S10_Consequence!$D$36:$D$49)>0,1,0) | =IF(SUMPRODUCT(D101:D114,S10_Consequence!$D$36:$D$49)>0,1,0) | =IF(SUMPRODUCT(E101:E114,S10_Consequence!$D$36:$D$49)>0,1,0) | =IF(SUMPRODUCT(F101:F114,S10_Consequence!$D$36:$D$49)>0,1,0) | =IF(SUMPRODUCT(G101:G114,S10_Consequence!$D$36:$D$49)>0,1,0) |
| Có dữ liệu mới biện minh đổi CHẨN ĐOÁN? | S10 cột E | =IF(SUMPRODUCT(C101:C114,S10_Consequence!$E$36:$E$49)>0,1,0) | =IF(SUMPRODUCT(D101:D114,S10_Consequence!$E$36:$E$49)>0,1,0) | =IF(SUMPRODUCT(E101:E114,S10_Consequence!$E$36:$E$49)>0,1,0) | =IF(SUMPRODUCT(F101:F114,S10_Consequence!$E$36:$E$49)>0,1,0) | =IF(SUMPRODUCT(G101:G114,S10_Consequence!$E$36:$E$49)>0,1,0) |
| K. REASSESSMENT (Màn 11) |  |  |  |  |  |  |
| Đổi chẩn đoán? (1/0) |  | =IF(AND(OR(C19="Revise Diagnosis",C19="Revise Both"),C56<>"",C56<>C50),1,0) | =IF(AND(OR(D19="Revise Diagnosis",D19="Revise Both"),D56<>"",D56<>D50),1,0) | =IF(AND(OR(E19="Revise Diagnosis",E19="Revise Both"),E56<>"",E56<>E50),1,0) | =IF(AND(OR(F19="Revise Diagnosis",F19="Revise Both"),F56<>"",F56<>F50),1,0) | =IF(AND(OR(G19="Revise Diagnosis",G19="Revise Both"),G56<>"",G56<>G50),1,0) |
| Đổi phác đồ? (1/0) |  | =IF(AND(OR(C19="Revise Treatment",C19="Revise Both"),C57<>"",C57<>C51),1,0) | =IF(AND(OR(D19="Revise Treatment",D19="Revise Both"),D57<>"",D57<>D51),1,0) | =IF(AND(OR(E19="Revise Treatment",E19="Revise Both"),E57<>"",E57<>E51),1,0) | =IF(AND(OR(F19="Revise Treatment",F19="Revise Both"),F57<>"",F57<>F51),1,0) | =IF(AND(OR(G19="Revise Treatment",G19="Revise Both"),G57<>"",G57<>G51),1,0) |
| Số lần mất Uy tín (đổi thiếu dữ liệu mới) | −1 mỗi lần | =IF(AND(C118=1,C116=0),1,0)+IF(AND(C119=1,C115=0),1,0) | =IF(AND(D118=1,D116=0),1,0)+IF(AND(D119=1,D115=0),1,0) | =IF(AND(E118=1,E116=0),1,0)+IF(AND(E119=1,E115=0),1,0) | =IF(AND(F118=1,F116=0),1,0)+IF(AND(F119=1,F115=0),1,0) | =IF(AND(G118=1,G116=0),1,0)+IF(AND(G119=1,G115=0),1,0) |
| Tình huống (từ đáp án thiết kế) | Weak / Partial / Strong | =IF(AND(C50<>Config!$B$4,C50<>"CD-F"),"Weak",IF(C91>=Config!$B$24,"Strong","Partial")) | =IF(AND(D50<>Config!$B$4,D50<>"CD-F"),"Weak",IF(D91>=Config!$B$24,"Strong","Partial")) | =IF(AND(E50<>Config!$B$4,E50<>"CD-F"),"Weak",IF(E91>=Config!$B$24,"Strong","Partial")) | =IF(AND(F50<>Config!$B$4,F50<>"CD-F"),"Weak",IF(F91>=Config!$B$24,"Strong","Partial")) | =IF(AND(G50<>Config!$B$4,G50<>"CD-F"),"Weak",IF(G91>=Config!$B$24,"Strong","Partial")) |
| Điểm quyết định (S11) | Quyết định × Tình huống | =IFERROR(INDEX(S11_Reassess!$C$6:$E$9,MATCH(C19,S11_Reassess!$A$6:$A$9,0),MATCH(C121,S11_Reassess!$C$5:$E$5,0)),0) | =IFERROR(INDEX(S11_Reassess!$C$6:$E$9,MATCH(D19,S11_Reassess!$A$6:$A$9,0),MATCH(D121,S11_Reassess!$C$5:$E$5,0)),0) | =IFERROR(INDEX(S11_Reassess!$C$6:$E$9,MATCH(E19,S11_Reassess!$A$6:$A$9,0),MATCH(E121,S11_Reassess!$C$5:$E$5,0)),0) | =IFERROR(INDEX(S11_Reassess!$C$6:$E$9,MATCH(F19,S11_Reassess!$A$6:$A$9,0),MATCH(F121,S11_Reassess!$C$5:$E$5,0)),0) | =IFERROR(INDEX(S11_Reassess!$C$6:$E$9,MATCH(G19,S11_Reassess!$A$6:$A$9,0),MATCH(G121,S11_Reassess!$C$5:$E$5,0)),0) |
| Chẩn đoán CUỐI (ID) |  | =IF(C118=1,C56,C50) | CD-D | CD-A | CD-D | CD-F |
| Phác đồ CUỐI được chọn (ID) |  | PD-F | PD-C | PD-A | PD-B | PD-E |
| Phác đồ CUỐI hiệu lực (kiểm tra Uy tín sau Màn 8) | PD-A ≥TB; PD-F Cao | =IF(C124="PD-A",IF(C89>=Config!$B$12,"PD-A","PD-B"),IF(C124="PD-F",IF(C89>=Config!$B$13,"PD-F","PD-B"),C124)) | =IF(D124="PD-A",IF(D89>=Config!$B$12,"PD-A","PD-B"),IF(D124="PD-F",IF(D89>=Config!$B$13,"PD-F","PD-B"),D124)) | =IF(E124="PD-A",IF(E89>=Config!$B$12,"PD-A","PD-B"),IF(E124="PD-F",IF(E89>=Config!$B$13,"PD-F","PD-B"),E124)) | =IF(F124="PD-A",IF(F89>=Config!$B$12,"PD-A","PD-B"),IF(F124="PD-F",IF(F89>=Config!$B$13,"PD-F","PD-B"),F124)) | =IF(G124="PD-A",IF(G89>=Config!$B$12,"PD-A","PD-B"),IF(G124="PD-F",IF(G89>=Config!$B$13,"PD-F","PD-B"),G124)) |
| Chất lượng chẩn đoán cuối (0–100) | Primary ÷ 60 | =IFERROR(INDEX(S6_Diagnosis!$E$5:$E$10,MATCH(C123,S6_Diagnosis!$A$5:$A$10,0)),0)*IF(AND(C123="CD-F",C68=0),Config!$B$10,1)/MAX(S6_Diagnosis!$E$5:$E$10)*100 | =IFERROR(INDEX(S6_Diagnosis!$E$5:$E$10,MATCH(D123,S6_Diagnosis!$A$5:$A$10,0)),0)*IF(AND(D123="CD-F",D68=0),Config!$B$10,1)/MAX(S6_Diagnosis!$E$5:$E$10)*100 | =IFERROR(INDEX(S6_Diagnosis!$E$5:$E$10,MATCH(E123,S6_Diagnosis!$A$5:$A$10,0)),0)*IF(AND(E123="CD-F",E68=0),Config!$B$10,1)/MAX(S6_Diagnosis!$E$5:$E$10)*100 | =IFERROR(INDEX(S6_Diagnosis!$E$5:$E$10,MATCH(F123,S6_Diagnosis!$A$5:$A$10,0)),0)*IF(AND(F123="CD-F",F68=0),Config!$B$10,1)/MAX(S6_Diagnosis!$E$5:$E$10)*100 | =IFERROR(INDEX(S6_Diagnosis!$E$5:$E$10,MATCH(G123,S6_Diagnosis!$A$5:$A$10,0)),0)*IF(AND(G123="CD-F",G68=0),Config!$B$10,1)/MAX(S6_Diagnosis!$E$5:$E$10)*100 |
| Chất lượng phác đồ cuối (M4 vs gốc) | M4 | =IFERROR(INDEX(M4_Dx_x_Tx!$C$6:$H$11,MATCH(Config!$B$4,M4_Dx_x_Tx!$A$6:$A$11,0),MATCH(C125,M4_Dx_x_Tx!$C$5:$H$5,0)),0) | =IFERROR(INDEX(M4_Dx_x_Tx!$C$6:$H$11,MATCH(Config!$B$4,M4_Dx_x_Tx!$A$6:$A$11,0),MATCH(D125,M4_Dx_x_Tx!$C$5:$H$5,0)),0) | =IFERROR(INDEX(M4_Dx_x_Tx!$C$6:$H$11,MATCH(Config!$B$4,M4_Dx_x_Tx!$A$6:$A$11,0),MATCH(E125,M4_Dx_x_Tx!$C$5:$H$5,0)),0) | =IFERROR(INDEX(M4_Dx_x_Tx!$C$6:$H$11,MATCH(Config!$B$4,M4_Dx_x_Tx!$A$6:$A$11,0),MATCH(F125,M4_Dx_x_Tx!$C$5:$H$5,0)),0) | =IFERROR(INDEX(M4_Dx_x_Tx!$C$6:$H$11,MATCH(Config!$B$4,M4_Dx_x_Tx!$A$6:$A$11,0),MATCH(G125,M4_Dx_x_Tx!$C$5:$H$5,0)),0) |
| REASSESSMENT SCORE /100 | 70% quyết định + 30% chất lượng − phạt | =MAX(0,MIN(100,Config!$B$25*C122+Config!$B$26*AVERAGE(C126,C127)-Config!$B$27*C120)) | =MAX(0,MIN(100,Config!$B$25*D122+Config!$B$26*AVERAGE(D126,D127)-Config!$B$27*D120)) | =MAX(0,MIN(100,Config!$B$25*E122+Config!$B$26*AVERAGE(E126,E127)-Config!$B$27*E120)) | =MAX(0,MIN(100,Config!$B$25*F122+Config!$B$26*AVERAGE(F126,F127)-Config!$B$27*F120)) | =MAX(0,MIN(100,Config!$B$25*G122+Config!$B$26*AVERAGE(G126,G127)-Config!$B$27*G120)) |
| L. CASE OUTCOME — 3 TRỤC (Màn 12, theo USER_FLOW gốc) |  |  |  |  |  |  |
| Uy tín cuối (điểm) |  | =C89+C120*Config!$B$19 | =D89+D120*Config!$B$19 | =E89+E120*Config!$B$19 | =F89+F120*Config!$B$19 | =G89+G120*Config!$B$19 |
| UY TÍN CUỐI (tier) | Thấp / Trung bình / Cao | =IF(C130>=Config!$B$13,"Cao",IF(C130>=Config!$B$12,"Trung bình","Thấp")) | =IF(D130>=Config!$B$13,"Cao",IF(D130>=Config!$B$12,"Trung bình","Thấp")) | =IF(E130>=Config!$B$13,"Cao",IF(E130>=Config!$B$12,"Trung bình","Thấp")) | =IF(F130>=Config!$B$13,"Cao",IF(F130>=Config!$B$12,"Trung bình","Thấp")) | =IF(G130>=Config!$B$13,"Cao",IF(G130>=Config!$B$12,"Trung bình","Thấp")) |
| Tài chính: điểm cơ bản PD × TG (M7) | S10 M7 | =IFERROR(INDEX(S10_Consequence!$C$6:$F$11,MATCH(C125,S10_Consequence!$A$6:$A$11,0),MATCH(C52,S10_Consequence!$C$5:$F$5,0)),0) | =IFERROR(INDEX(S10_Consequence!$C$6:$F$11,MATCH(D125,S10_Consequence!$A$6:$A$11,0),MATCH(D52,S10_Consequence!$C$5:$F$5,0)),0) | =IFERROR(INDEX(S10_Consequence!$C$6:$F$11,MATCH(E125,S10_Consequence!$A$6:$A$11,0),MATCH(E52,S10_Consequence!$C$5:$F$5,0)),0) | =IFERROR(INDEX(S10_Consequence!$C$6:$F$11,MATCH(F125,S10_Consequence!$A$6:$A$11,0),MATCH(F52,S10_Consequence!$C$5:$F$5,0)),0) | =IFERROR(INDEX(S10_Consequence!$C$6:$F$11,MATCH(G125,S10_Consequence!$A$6:$A$11,0),MATCH(G52,S10_Consequence!$C$5:$F$5,0)),0) |
| Tài chính: điểm theo nhóm ưu tiên (M8/M9) | S10 M8+M9 | =IF(C59=1,IFERROR(INDEX(S10_Consequence!$C$16:$I$21,MATCH(C125,S10_Consequence!$A$16:$A$21,0),MATCH("GR-1",S10_Consequence!$C$15:$I$15,0)),0),IFERROR(INDEX(S10_Consequence!$C$26:$I$31,MATCH(C125,S10_Consequence!$A$26:$A$31,0),MATCH("GR-1",S10_Consequence!$C$25:$I$25,0)),0))+IF(C60=1,IFERROR(INDEX(S10_Consequence!$C$16:$I$21,MATCH(C125,S10_Consequence!$A$16:$A$21,0),MATCH("GR-2",S10_Consequence!$C$15:$I$15,0)),0),IFERROR(INDEX(S10_Consequence!$C$26:$I$31,MATCH(C125,S10_Consequence!$A$26:$A$31,0),MATCH("GR-2",S10_Consequence!$C$25:$I$25,0)),0))+IF(C61=1,IFERROR(INDEX(S10_Consequence!$C$16:$I$21,MATCH(C125,S10_Consequence!$A$16:$A$21,0),MATCH("GR-3",S10_Consequence!$C$15:$I$15,0)),0),IFERROR(INDEX(S10_Consequence!$C$26:$I$31,MATCH(C125,S10_Consequence!$A$26:$A$31,0),MATCH("GR-3",S10_Consequence!$C$25:$I$25,0)),0))+IF(C62=1,IFERROR(INDEX(S10_Consequence!$C$16:$I$21,MATCH(C125,S10_Consequence!$A$16:$A$21,0),MATCH("GR-4",S10_Consequence!$C$15:$I$15,0)),0),IFERROR(INDEX(S10_Consequence!$C$26:$I$31,MATCH(C125,S10_Consequence!$A$26:$A$31,0),MATCH("GR-4",S10_Consequence!$C$25:$I$25,0)),0))+IF(C63=1,IFERROR(INDEX(S10_Consequence!$C$16:$I$21,MATCH(C125,S10_Consequence!$A$16:$A$21,0),MATCH("GR-5",S10_Consequence!$C$15:$I$15,0)),0),IFERROR(INDEX(S10_Consequence!$C$26:$I$31,MATCH(C125,S10_Consequence!$A$26:$A$31,0),MATCH("GR-5",S10_Consequence!$C$25:$I$25,0)),0))+IF(C64=1,IFERROR(INDEX(S10_Consequence!$C$16:$I$21,MATCH(C125,S10_Consequence!$A$16:$A$21,0),MATCH("GR-6",S10_Consequence!$C$15:$I$15,0)),0),IFERROR(INDEX(S10_Consequence!$C$26:$I$31,MATCH(C125,S10_Consequence!$A$26:$A$31,0),MATCH("GR-6",S10_Consequence!$C$25:$I$25,0)),0))+IF(C65=1,IFERROR(INDEX(S10_Consequence!$C$16:$I$21,MATCH(C125,S10_Consequence!$A$16:$A$21,0),MATCH("GR-7",S10_Consequence!$C$15:$I$15,0)),0),IFERROR(INDEX(S10_Consequence!$C$26:$I$31,MATCH(C125,S10_Consequence!$A$26:$A$31,0),MATCH("GR-7",S10_Consequence!$C$25:$I$25,0)),0)) | =IF(D59=1,IFERROR(INDEX(S10_Consequence!$C$16:$I$21,MATCH(D125,S10_Consequence!$A$16:$A$21,0),MATCH("GR-1",S10_Consequence!$C$15:$I$15,0)),0),IFERROR(INDEX(S10_Consequence!$C$26:$I$31,MATCH(D125,S10_Consequence!$A$26:$A$31,0),MATCH("GR-1",S10_Consequence!$C$25:$I$25,0)),0))+IF(D60=1,IFERROR(INDEX(S10_Consequence!$C$16:$I$21,MATCH(D125,S10_Consequence!$A$16:$A$21,0),MATCH("GR-2",S10_Consequence!$C$15:$I$15,0)),0),IFERROR(INDEX(S10_Consequence!$C$26:$I$31,MATCH(D125,S10_Consequence!$A$26:$A$31,0),MATCH("GR-2",S10_Consequence!$C$25:$I$25,0)),0))+IF(D61=1,IFERROR(INDEX(S10_Consequence!$C$16:$I$21,MATCH(D125,S10_Consequence!$A$16:$A$21,0),MATCH("GR-3",S10_Consequence!$C$15:$I$15,0)),0),IFERROR(INDEX(S10_Consequence!$C$26:$I$31,MATCH(D125,S10_Consequence!$A$26:$A$31,0),MATCH("GR-3",S10_Consequence!$C$25:$I$25,0)),0))+IF(D62=1,IFERROR(INDEX(S10_Consequence!$C$16:$I$21,MATCH(D125,S10_Consequence!$A$16:$A$21,0),MATCH("GR-4",S10_Consequence!$C$15:$I$15,0)),0),IFERROR(INDEX(S10_Consequence!$C$26:$I$31,MATCH(D125,S10_Consequence!$A$26:$A$31,0),MATCH("GR-4",S10_Consequence!$C$25:$I$25,0)),0))+IF(D63=1,IFERROR(INDEX(S10_Consequence!$C$16:$I$21,MATCH(D125,S10_Consequence!$A$16:$A$21,0),MATCH("GR-5",S10_Consequence!$C$15:$I$15,0)),0),IFERROR(INDEX(S10_Consequence!$C$26:$I$31,MATCH(D125,S10_Consequence!$A$26:$A$31,0),MATCH("GR-5",S10_Consequence!$C$25:$I$25,0)),0))+IF(D64=1,IFERROR(INDEX(S10_Consequence!$C$16:$I$21,MATCH(D125,S10_Consequence!$A$16:$A$21,0),MATCH("GR-6",S10_Consequence!$C$15:$I$15,0)),0),IFERROR(INDEX(S10_Consequence!$C$26:$I$31,MATCH(D125,S10_Consequence!$A$26:$A$31,0),MATCH("GR-6",S10_Consequence!$C$25:$I$25,0)),0))+IF(D65=1,IFERROR(INDEX(S10_Consequence!$C$16:$I$21,MATCH(D125,S10_Consequence!$A$16:$A$21,0),MATCH("GR-7",S10_Consequence!$C$15:$I$15,0)),0),IFERROR(INDEX(S10_Consequence!$C$26:$I$31,MATCH(D125,S10_Consequence!$A$26:$A$31,0),MATCH("GR-7",S10_Consequence!$C$25:$I$25,0)),0)) | =IF(E59=1,IFERROR(INDEX(S10_Consequence!$C$16:$I$21,MATCH(E125,S10_Consequence!$A$16:$A$21,0),MATCH("GR-1",S10_Consequence!$C$15:$I$15,0)),0),IFERROR(INDEX(S10_Consequence!$C$26:$I$31,MATCH(E125,S10_Consequence!$A$26:$A$31,0),MATCH("GR-1",S10_Consequence!$C$25:$I$25,0)),0))+IF(E60=1,IFERROR(INDEX(S10_Consequence!$C$16:$I$21,MATCH(E125,S10_Consequence!$A$16:$A$21,0),MATCH("GR-2",S10_Consequence!$C$15:$I$15,0)),0),IFERROR(INDEX(S10_Consequence!$C$26:$I$31,MATCH(E125,S10_Consequence!$A$26:$A$31,0),MATCH("GR-2",S10_Consequence!$C$25:$I$25,0)),0))+IF(E61=1,IFERROR(INDEX(S10_Consequence!$C$16:$I$21,MATCH(E125,S10_Consequence!$A$16:$A$21,0),MATCH("GR-3",S10_Consequence!$C$15:$I$15,0)),0),IFERROR(INDEX(S10_Consequence!$C$26:$I$31,MATCH(E125,S10_Consequence!$A$26:$A$31,0),MATCH("GR-3",S10_Consequence!$C$25:$I$25,0)),0))+IF(E62=1,IFERROR(INDEX(S10_Consequence!$C$16:$I$21,MATCH(E125,S10_Consequence!$A$16:$A$21,0),MATCH("GR-4",S10_Consequence!$C$15:$I$15,0)),0),IFERROR(INDEX(S10_Consequence!$C$26:$I$31,MATCH(E125,S10_Consequence!$A$26:$A$31,0),MATCH("GR-4",S10_Consequence!$C$25:$I$25,0)),0))+IF(E63=1,IFERROR(INDEX(S10_Consequence!$C$16:$I$21,MATCH(E125,S10_Consequence!$A$16:$A$21,0),MATCH("GR-5",S10_Consequence!$C$15:$I$15,0)),0),IFERROR(INDEX(S10_Consequence!$C$26:$I$31,MATCH(E125,S10_Consequence!$A$26:$A$31,0),MATCH("GR-5",S10_Consequence!$C$25:$I$25,0)),0))+IF(E64=1,IFERROR(INDEX(S10_Consequence!$C$16:$I$21,MATCH(E125,S10_Consequence!$A$16:$A$21,0),MATCH("GR-6",S10_Consequence!$C$15:$I$15,0)),0),IFERROR(INDEX(S10_Consequence!$C$26:$I$31,MATCH(E125,S10_Consequence!$A$26:$A$31,0),MATCH("GR-6",S10_Consequence!$C$25:$I$25,0)),0))+IF(E65=1,IFERROR(INDEX(S10_Consequence!$C$16:$I$21,MATCH(E125,S10_Consequence!$A$16:$A$21,0),MATCH("GR-7",S10_Consequence!$C$15:$I$15,0)),0),IFERROR(INDEX(S10_Consequence!$C$26:$I$31,MATCH(E125,S10_Consequence!$A$26:$A$31,0),MATCH("GR-7",S10_Consequence!$C$25:$I$25,0)),0)) | =IF(F59=1,IFERROR(INDEX(S10_Consequence!$C$16:$I$21,MATCH(F125,S10_Consequence!$A$16:$A$21,0),MATCH("GR-1",S10_Consequence!$C$15:$I$15,0)),0),IFERROR(INDEX(S10_Consequence!$C$26:$I$31,MATCH(F125,S10_Consequence!$A$26:$A$31,0),MATCH("GR-1",S10_Consequence!$C$25:$I$25,0)),0))+IF(F60=1,IFERROR(INDEX(S10_Consequence!$C$16:$I$21,MATCH(F125,S10_Consequence!$A$16:$A$21,0),MATCH("GR-2",S10_Consequence!$C$15:$I$15,0)),0),IFERROR(INDEX(S10_Consequence!$C$26:$I$31,MATCH(F125,S10_Consequence!$A$26:$A$31,0),MATCH("GR-2",S10_Consequence!$C$25:$I$25,0)),0))+IF(F61=1,IFERROR(INDEX(S10_Consequence!$C$16:$I$21,MATCH(F125,S10_Consequence!$A$16:$A$21,0),MATCH("GR-3",S10_Consequence!$C$15:$I$15,0)),0),IFERROR(INDEX(S10_Consequence!$C$26:$I$31,MATCH(F125,S10_Consequence!$A$26:$A$31,0),MATCH("GR-3",S10_Consequence!$C$25:$I$25,0)),0))+IF(F62=1,IFERROR(INDEX(S10_Consequence!$C$16:$I$21,MATCH(F125,S10_Consequence!$A$16:$A$21,0),MATCH("GR-4",S10_Consequence!$C$15:$I$15,0)),0),IFERROR(INDEX(S10_Consequence!$C$26:$I$31,MATCH(F125,S10_Consequence!$A$26:$A$31,0),MATCH("GR-4",S10_Consequence!$C$25:$I$25,0)),0))+IF(F63=1,IFERROR(INDEX(S10_Consequence!$C$16:$I$21,MATCH(F125,S10_Consequence!$A$16:$A$21,0),MATCH("GR-5",S10_Consequence!$C$15:$I$15,0)),0),IFERROR(INDEX(S10_Consequence!$C$26:$I$31,MATCH(F125,S10_Consequence!$A$26:$A$31,0),MATCH("GR-5",S10_Consequence!$C$25:$I$25,0)),0))+IF(F64=1,IFERROR(INDEX(S10_Consequence!$C$16:$I$21,MATCH(F125,S10_Consequence!$A$16:$A$21,0),MATCH("GR-6",S10_Consequence!$C$15:$I$15,0)),0),IFERROR(INDEX(S10_Consequence!$C$26:$I$31,MATCH(F125,S10_Consequence!$A$26:$A$31,0),MATCH("GR-6",S10_Consequence!$C$25:$I$25,0)),0))+IF(F65=1,IFERROR(INDEX(S10_Consequence!$C$16:$I$21,MATCH(F125,S10_Consequence!$A$16:$A$21,0),MATCH("GR-7",S10_Consequence!$C$15:$I$15,0)),0),IFERROR(INDEX(S10_Consequence!$C$26:$I$31,MATCH(F125,S10_Consequence!$A$26:$A$31,0),MATCH("GR-7",S10_Consequence!$C$25:$I$25,0)),0)) | =IF(G59=1,IFERROR(INDEX(S10_Consequence!$C$16:$I$21,MATCH(G125,S10_Consequence!$A$16:$A$21,0),MATCH("GR-1",S10_Consequence!$C$15:$I$15,0)),0),IFERROR(INDEX(S10_Consequence!$C$26:$I$31,MATCH(G125,S10_Consequence!$A$26:$A$31,0),MATCH("GR-1",S10_Consequence!$C$25:$I$25,0)),0))+IF(G60=1,IFERROR(INDEX(S10_Consequence!$C$16:$I$21,MATCH(G125,S10_Consequence!$A$16:$A$21,0),MATCH("GR-2",S10_Consequence!$C$15:$I$15,0)),0),IFERROR(INDEX(S10_Consequence!$C$26:$I$31,MATCH(G125,S10_Consequence!$A$26:$A$31,0),MATCH("GR-2",S10_Consequence!$C$25:$I$25,0)),0))+IF(G61=1,IFERROR(INDEX(S10_Consequence!$C$16:$I$21,MATCH(G125,S10_Consequence!$A$16:$A$21,0),MATCH("GR-3",S10_Consequence!$C$15:$I$15,0)),0),IFERROR(INDEX(S10_Consequence!$C$26:$I$31,MATCH(G125,S10_Consequence!$A$26:$A$31,0),MATCH("GR-3",S10_Consequence!$C$25:$I$25,0)),0))+IF(G62=1,IFERROR(INDEX(S10_Consequence!$C$16:$I$21,MATCH(G125,S10_Consequence!$A$16:$A$21,0),MATCH("GR-4",S10_Consequence!$C$15:$I$15,0)),0),IFERROR(INDEX(S10_Consequence!$C$26:$I$31,MATCH(G125,S10_Consequence!$A$26:$A$31,0),MATCH("GR-4",S10_Consequence!$C$25:$I$25,0)),0))+IF(G63=1,IFERROR(INDEX(S10_Consequence!$C$16:$I$21,MATCH(G125,S10_Consequence!$A$16:$A$21,0),MATCH("GR-5",S10_Consequence!$C$15:$I$15,0)),0),IFERROR(INDEX(S10_Consequence!$C$26:$I$31,MATCH(G125,S10_Consequence!$A$26:$A$31,0),MATCH("GR-5",S10_Consequence!$C$25:$I$25,0)),0))+IF(G64=1,IFERROR(INDEX(S10_Consequence!$C$16:$I$21,MATCH(G125,S10_Consequence!$A$16:$A$21,0),MATCH("GR-6",S10_Consequence!$C$15:$I$15,0)),0),IFERROR(INDEX(S10_Consequence!$C$26:$I$31,MATCH(G125,S10_Consequence!$A$26:$A$31,0),MATCH("GR-6",S10_Consequence!$C$25:$I$25,0)),0))+IF(G65=1,IFERROR(INDEX(S10_Consequence!$C$16:$I$21,MATCH(G125,S10_Consequence!$A$16:$A$21,0),MATCH("GR-7",S10_Consequence!$C$15:$I$15,0)),0),IFERROR(INDEX(S10_Consequence!$C$26:$I$31,MATCH(G125,S10_Consequence!$A$26:$A$31,0),MATCH("GR-7",S10_Consequence!$C$25:$I$25,0)),0)) |
| ĐIỂM SỨC KHỎE TÀI CHÍNH | M7 + M8/M9 | =C132+C133 | =D132+D133 | =E132+E133 | =F132+F133 | =G132+G133 |
| Tier Tài chính | Config | =IF(C134>=Config!$B$28,"Ổn định tài chính",IF(C134>=Config!$B$29,"Ổn định mong manh","Sụp đổ tài chính")) | =IF(D134>=Config!$B$28,"Ổn định tài chính",IF(D134>=Config!$B$29,"Ổn định mong manh","Sụp đổ tài chính")) | =IF(E134>=Config!$B$28,"Ổn định tài chính",IF(E134>=Config!$B$29,"Ổn định mong manh","Sụp đổ tài chính")) | =IF(F134>=Config!$B$28,"Ổn định tài chính",IF(F134>=Config!$B$29,"Ổn định mong manh","Sụp đổ tài chính")) | =IF(G134>=Config!$B$28,"Ổn định tài chính",IF(G134>=Config!$B$29,"Ổn định mong manh","Sụp đổ tài chính")) |
| Quản trị: đã mở HS-G | +1 | =C66*Config!$B$32 | =D66*Config!$B$32 | =E66*Config!$B$32 | =F66*Config!$B$32 | =G66*Config!$B$32 |
| Quản trị: nhóm Governance & Family (+2 / −1) | S9 | =SUMPRODUCT(C59:C65,S9_Stakeholders!$D$5:$D$11)+SUMPRODUCT(1-C59:C65,S9_Stakeholders!$E$5:$E$11) | =SUMPRODUCT(D59:D65,S9_Stakeholders!$D$5:$D$11)+SUMPRODUCT(1-D59:D65,S9_Stakeholders!$E$5:$E$11) | =SUMPRODUCT(E59:E65,S9_Stakeholders!$D$5:$D$11)+SUMPRODUCT(1-E59:E65,S9_Stakeholders!$E$5:$E$11) | =SUMPRODUCT(F59:F65,S9_Stakeholders!$D$5:$D$11)+SUMPRODUCT(1-F59:F65,S9_Stakeholders!$E$5:$E$11) | =SUMPRODUCT(G59:G65,S9_Stakeholders!$D$5:$D$11)+SUMPRODUCT(1-G59:G65,S9_Stakeholders!$E$5:$E$11) |
| Quản trị: mất Uy tín ở Màn 11 | −1 mỗi lần | =C120*Config!$B$33 | =D120*Config!$B$33 | =E120*Config!$B$33 | =F120*Config!$B$33 | =G120*Config!$B$33 |
| Quản trị: Tài chính Sụp đổ (−2) |  | =IF(C135="Sụp đổ tài chính",Config!$B$34,0) | =IF(D135="Sụp đổ tài chính",Config!$B$34,0) | =IF(E135="Sụp đổ tài chính",Config!$B$34,0) | =IF(F135="Sụp đổ tài chính",Config!$B$34,0) | =IF(G135="Sụp đổ tài chính",Config!$B$34,0) |
| Quản trị: PD-D mà chưa mở HS-E (−1) |  | =IF(AND(C124="PD-D",C67=0),Config!$B$35,0) | =IF(AND(D124="PD-D",D67=0),Config!$B$35,0) | =IF(AND(E124="PD-D",E67=0),Config!$B$35,0) | =IF(AND(F124="PD-D",F67=0),Config!$B$35,0) | =IF(AND(G124="PD-D",G67=0),Config!$B$35,0) |
| ĐIỂM ỔN ĐỊNH QUẢN TRỊ — GIA TỘC | tổng | =C136+C137+C138+C139+C140 | =D136+D137+D138+D139+D140 | =E136+E137+E138+E139+E140 | =F136+F137+F138+F139+F140 | =G136+G137+G138+G139+G140 |
| Tier Quản trị | Config | =IF(C141>=Config!$B$30,"Gia tộc đoàn kết",IF(C141>=Config!$B$31,"Gia tộc chia rẽ, chưa vỡ","Mất kiểm soát")) | =IF(D141>=Config!$B$30,"Gia tộc đoàn kết",IF(D141>=Config!$B$31,"Gia tộc chia rẽ, chưa vỡ","Mất kiểm soát")) | =IF(E141>=Config!$B$30,"Gia tộc đoàn kết",IF(E141>=Config!$B$31,"Gia tộc chia rẽ, chưa vỡ","Mất kiểm soát")) | =IF(F141>=Config!$B$30,"Gia tộc đoàn kết",IF(F141>=Config!$B$31,"Gia tộc chia rẽ, chưa vỡ","Mất kiểm soát")) | =IF(G141>=Config!$B$30,"Gia tộc đoàn kết",IF(G141>=Config!$B$31,"Gia tộc chia rẽ, chưa vỡ","Mất kiểm soát")) |
| KẾT CỤC CUỐI (ô ma trận 3×3) | Endings | =IFERROR(INDEX(Endings!$B$6:$D$8,MATCH(C135,Endings!$A$6:$A$8,0),MATCH(C142,Endings!$B$5:$D$5,0)),"") | =IFERROR(INDEX(Endings!$B$6:$D$8,MATCH(D135,Endings!$A$6:$A$8,0),MATCH(D142,Endings!$B$5:$D$5,0)),"") | =IFERROR(INDEX(Endings!$B$6:$D$8,MATCH(E135,Endings!$A$6:$A$8,0),MATCH(E142,Endings!$B$5:$D$5,0)),"") | =IFERROR(INDEX(Endings!$B$6:$D$8,MATCH(F135,Endings!$A$6:$A$8,0),MATCH(F142,Endings!$B$5:$D$5,0)),"") | =IFERROR(INDEX(Endings!$B$6:$D$8,MATCH(G135,Endings!$A$6:$A$8,0),MATCH(G142,Endings!$B$5:$D$5,0)),"") |
| Cách báo chí/hội đồng mô tả người chơi | Endings (Uy tín) | =IFERROR(INDEX(Endings!$B$13:$B$15,MATCH(C131,Endings!$A$13:$A$15,0)),"") | =IFERROR(INDEX(Endings!$B$13:$B$15,MATCH(D131,Endings!$A$13:$A$15,0)),"") | =IFERROR(INDEX(Endings!$B$13:$B$15,MATCH(E131,Endings!$A$13:$A$15,0)),"") | =IFERROR(INDEX(Endings!$B$13:$B$15,MATCH(F131,Endings!$A$13:$A$15,0)),"") | =IFERROR(INDEX(Endings!$B$13:$B$15,MATCH(G131,Endings!$A$13:$A$15,0)),"") |
| M. COUNSELOR CASE REPORT |  |  |  |  |  |  |
| OVERALL COUNSELOR SCORE /100 | trọng số ở Config | =Config!$B$41*C75+Config!$B$42*C79+Config!$B$43*C93+Config!$B$44*C99+Config!$B$45*C128 | =Config!$B$41*D75+Config!$B$42*D79+Config!$B$43*D93+Config!$B$44*D99+Config!$B$45*D128 | =Config!$B$41*E75+Config!$B$42*E79+Config!$B$43*E93+Config!$B$44*E99+Config!$B$45*E128 | =Config!$B$41*F75+Config!$B$42*F79+Config!$B$43*F93+Config!$B$44*F99+Config!$B$45*F128 | =Config!$B$41*G75+Config!$B$42*G79+Config!$B$43*G93+Config!$B$44*G99+Config!$B$45*G128 |
| Grade | Config | =IF(C146>=Config!$A$50,Config!$B$50,IF(C146>=Config!$A$51,Config!$B$51,IF(C146>=Config!$A$52,Config!$B$52,Config!$B$53))) | =IF(D146>=Config!$A$50,Config!$B$50,IF(D146>=Config!$A$51,Config!$B$51,IF(D146>=Config!$A$52,Config!$B$52,Config!$B$53))) | =IF(E146>=Config!$A$50,Config!$B$50,IF(E146>=Config!$A$51,Config!$B$51,IF(E146>=Config!$A$52,Config!$B$52,Config!$B$53))) | =IF(F146>=Config!$A$50,Config!$B$50,IF(F146>=Config!$A$51,Config!$B$51,IF(F146>=Config!$A$52,Config!$B$52,Config!$B$53))) | =IF(G146>=Config!$A$50,Config!$B$50,IF(G146>=Config!$A$51,Config!$B$51,IF(G146>=Config!$A$52,Config!$B$52,Config!$B$53))) |
| Hồ sơ đã xem |  | =C44&", "&C45&", "&C46 | =D44&", "&D45&", "&D46 | =E44&", "&E45&", "&E46 | =F44&", "&F45&", "&F46 | =G44&", "&G45&", "&G46 |
| Câu hỏi bổ sung (CH1) / Câu hỏi cuối (CH2) |  | =C47&", "&C48&"  \|  "&C49 | =D47&", "&D48&"  \|  "&D49 | =E47&", "&E48&"  \|  "&E49 | =F47&", "&F48&"  \|  "&F49 | =G47&", "&G48&"  \|  "&G49 |
| Chẩn đoán đầu → sau tái khám |  | =C50&IF(C118=1," → "&C56,"") | =D50&IF(D118=1," → "&D56,"") | =E50&IF(E118=1," → "&E56,"") | =F50&IF(F118=1," → "&F56,"") | =G50&IF(G118=1," → "&G56,"") |
| Phác đồ đầu → sau tái khám |  | =C51&IF(C87=1," (hạ xuống "&C86&")","")&IF(C119=1," → "&C57,"") | =D51&IF(D87=1," (hạ xuống "&D86&")","")&IF(D119=1," → "&D57,"") | =E51&IF(E87=1," (hạ xuống "&E86&")","")&IF(E119=1," → "&E57,"") | =F51&IF(F87=1," (hạ xuống "&F86&")","")&IF(F119=1," → "&F57,"") | =G51&IF(G87=1," (hạ xuống "&G86&")","")&IF(G119=1," → "&G57,"") |
| Nhóm ưu tiên đã chọn |  | =C53&", "&C54&", "&C55 | =D53&", "&D54&", "&D55 | =E53&", "&E54&", "&E55 | =F53&", "&F54&", "&F55 | =G53&", "&G54&", "&G55 |
| N. FEEDBACK  (Result → Reason → Meaning → Action → Limit) |  |  |  |  |  |  |
| Investigation · feedback band |  | =IF(C75>=Config!$B$36,"High",IF(C75>=Config!$B$37,"Mid","Low")) | =IF(D75>=Config!$B$36,"High",IF(D75>=Config!$B$37,"Mid","Low")) | =IF(E75>=Config!$B$36,"High",IF(E75>=Config!$B$37,"Mid","Low")) | =IF(F75>=Config!$B$36,"High",IF(F75>=Config!$B$37,"Mid","Low")) | =IF(G75>=Config!$B$36,"High",IF(G75>=Config!$B$37,"Mid","Low")) |
| Investigation · feedback |  | ="RESULT: "&TEXT(C75,"0")&"/100 ("&C154&")  →  REASON: "&INDEX(Feedback!$D$5:$D$19,MATCH("Investigation\|"&C154,Feedback!$A$5:$A$19,0))&"  →  MEANING: "&INDEX(Feedback!$E$5:$E$19,MATCH("Investigation\|"&C154,Feedback!$A$5:$A$19,0))&"  →  ACTION: "&INDEX(Feedback!$F$5:$F$19,MATCH("Investigation\|"&C154,Feedback!$A$5:$A$19,0))&"  →  LIMIT: "&INDEX(Feedback!$G$5:$G$19,MATCH("Investigation\|"&C154,Feedback!$A$5:$A$19,0)) | ="RESULT: "&TEXT(D75,"0")&"/100 ("&D154&")  →  REASON: "&INDEX(Feedback!$D$5:$D$19,MATCH("Investigation\|"&D154,Feedback!$A$5:$A$19,0))&"  →  MEANING: "&INDEX(Feedback!$E$5:$E$19,MATCH("Investigation\|"&D154,Feedback!$A$5:$A$19,0))&"  →  ACTION: "&INDEX(Feedback!$F$5:$F$19,MATCH("Investigation\|"&D154,Feedback!$A$5:$A$19,0))&"  →  LIMIT: "&INDEX(Feedback!$G$5:$G$19,MATCH("Investigation\|"&D154,Feedback!$A$5:$A$19,0)) | ="RESULT: "&TEXT(E75,"0")&"/100 ("&E154&")  →  REASON: "&INDEX(Feedback!$D$5:$D$19,MATCH("Investigation\|"&E154,Feedback!$A$5:$A$19,0))&"  →  MEANING: "&INDEX(Feedback!$E$5:$E$19,MATCH("Investigation\|"&E154,Feedback!$A$5:$A$19,0))&"  →  ACTION: "&INDEX(Feedback!$F$5:$F$19,MATCH("Investigation\|"&E154,Feedback!$A$5:$A$19,0))&"  →  LIMIT: "&INDEX(Feedback!$G$5:$G$19,MATCH("Investigation\|"&E154,Feedback!$A$5:$A$19,0)) | ="RESULT: "&TEXT(F75,"0")&"/100 ("&F154&")  →  REASON: "&INDEX(Feedback!$D$5:$D$19,MATCH("Investigation\|"&F154,Feedback!$A$5:$A$19,0))&"  →  MEANING: "&INDEX(Feedback!$E$5:$E$19,MATCH("Investigation\|"&F154,Feedback!$A$5:$A$19,0))&"  →  ACTION: "&INDEX(Feedback!$F$5:$F$19,MATCH("Investigation\|"&F154,Feedback!$A$5:$A$19,0))&"  →  LIMIT: "&INDEX(Feedback!$G$5:$G$19,MATCH("Investigation\|"&F154,Feedback!$A$5:$A$19,0)) | ="RESULT: "&TEXT(G75,"0")&"/100 ("&G154&")  →  REASON: "&INDEX(Feedback!$D$5:$D$19,MATCH("Investigation\|"&G154,Feedback!$A$5:$A$19,0))&"  →  MEANING: "&INDEX(Feedback!$E$5:$E$19,MATCH("Investigation\|"&G154,Feedback!$A$5:$A$19,0))&"  →  ACTION: "&INDEX(Feedback!$F$5:$F$19,MATCH("Investigation\|"&G154,Feedback!$A$5:$A$19,0))&"  →  LIMIT: "&INDEX(Feedback!$G$5:$G$19,MATCH("Investigation\|"&G154,Feedback!$A$5:$A$19,0)) |
| Diagnosis · feedback band |  | =IF(C79>=Config!$B$36,"High",IF(C79>=Config!$B$37,"Mid","Low")) | =IF(D79>=Config!$B$36,"High",IF(D79>=Config!$B$37,"Mid","Low")) | =IF(E79>=Config!$B$36,"High",IF(E79>=Config!$B$37,"Mid","Low")) | =IF(F79>=Config!$B$36,"High",IF(F79>=Config!$B$37,"Mid","Low")) | =IF(G79>=Config!$B$36,"High",IF(G79>=Config!$B$37,"Mid","Low")) |
| Diagnosis · feedback |  | ="RESULT: "&TEXT(C79,"0")&"/100 ("&C156&")  →  REASON: "&INDEX(Feedback!$D$5:$D$19,MATCH("Diagnosis\|"&C156,Feedback!$A$5:$A$19,0))&"  →  MEANING: "&INDEX(Feedback!$E$5:$E$19,MATCH("Diagnosis\|"&C156,Feedback!$A$5:$A$19,0))&"  →  ACTION: "&INDEX(Feedback!$F$5:$F$19,MATCH("Diagnosis\|"&C156,Feedback!$A$5:$A$19,0))&"  →  LIMIT: "&INDEX(Feedback!$G$5:$G$19,MATCH("Diagnosis\|"&C156,Feedback!$A$5:$A$19,0)) | ="RESULT: "&TEXT(D79,"0")&"/100 ("&D156&")  →  REASON: "&INDEX(Feedback!$D$5:$D$19,MATCH("Diagnosis\|"&D156,Feedback!$A$5:$A$19,0))&"  →  MEANING: "&INDEX(Feedback!$E$5:$E$19,MATCH("Diagnosis\|"&D156,Feedback!$A$5:$A$19,0))&"  →  ACTION: "&INDEX(Feedback!$F$5:$F$19,MATCH("Diagnosis\|"&D156,Feedback!$A$5:$A$19,0))&"  →  LIMIT: "&INDEX(Feedback!$G$5:$G$19,MATCH("Diagnosis\|"&D156,Feedback!$A$5:$A$19,0)) | ="RESULT: "&TEXT(E79,"0")&"/100 ("&E156&")  →  REASON: "&INDEX(Feedback!$D$5:$D$19,MATCH("Diagnosis\|"&E156,Feedback!$A$5:$A$19,0))&"  →  MEANING: "&INDEX(Feedback!$E$5:$E$19,MATCH("Diagnosis\|"&E156,Feedback!$A$5:$A$19,0))&"  →  ACTION: "&INDEX(Feedback!$F$5:$F$19,MATCH("Diagnosis\|"&E156,Feedback!$A$5:$A$19,0))&"  →  LIMIT: "&INDEX(Feedback!$G$5:$G$19,MATCH("Diagnosis\|"&E156,Feedback!$A$5:$A$19,0)) | ="RESULT: "&TEXT(F79,"0")&"/100 ("&F156&")  →  REASON: "&INDEX(Feedback!$D$5:$D$19,MATCH("Diagnosis\|"&F156,Feedback!$A$5:$A$19,0))&"  →  MEANING: "&INDEX(Feedback!$E$5:$E$19,MATCH("Diagnosis\|"&F156,Feedback!$A$5:$A$19,0))&"  →  ACTION: "&INDEX(Feedback!$F$5:$F$19,MATCH("Diagnosis\|"&F156,Feedback!$A$5:$A$19,0))&"  →  LIMIT: "&INDEX(Feedback!$G$5:$G$19,MATCH("Diagnosis\|"&F156,Feedback!$A$5:$A$19,0)) | ="RESULT: "&TEXT(G79,"0")&"/100 ("&G156&")  →  REASON: "&INDEX(Feedback!$D$5:$D$19,MATCH("Diagnosis\|"&G156,Feedback!$A$5:$A$19,0))&"  →  MEANING: "&INDEX(Feedback!$E$5:$E$19,MATCH("Diagnosis\|"&G156,Feedback!$A$5:$A$19,0))&"  →  ACTION: "&INDEX(Feedback!$F$5:$F$19,MATCH("Diagnosis\|"&G156,Feedback!$A$5:$A$19,0))&"  →  LIMIT: "&INDEX(Feedback!$G$5:$G$19,MATCH("Diagnosis\|"&G156,Feedback!$A$5:$A$19,0)) |
| Treatment · feedback band |  | =IF(C93>=Config!$B$36,"High",IF(C93>=Config!$B$37,"Mid","Low")) | =IF(D93>=Config!$B$36,"High",IF(D93>=Config!$B$37,"Mid","Low")) | =IF(E93>=Config!$B$36,"High",IF(E93>=Config!$B$37,"Mid","Low")) | =IF(F93>=Config!$B$36,"High",IF(F93>=Config!$B$37,"Mid","Low")) | =IF(G93>=Config!$B$36,"High",IF(G93>=Config!$B$37,"Mid","Low")) |
| Treatment · feedback |  | ="RESULT: "&TEXT(C93,"0")&"/100 ("&C158&")  →  REASON: "&INDEX(Feedback!$D$5:$D$19,MATCH("Treatment\|"&C158,Feedback!$A$5:$A$19,0))&"  →  MEANING: "&INDEX(Feedback!$E$5:$E$19,MATCH("Treatment\|"&C158,Feedback!$A$5:$A$19,0))&"  →  ACTION: "&INDEX(Feedback!$F$5:$F$19,MATCH("Treatment\|"&C158,Feedback!$A$5:$A$19,0))&"  →  LIMIT: "&INDEX(Feedback!$G$5:$G$19,MATCH("Treatment\|"&C158,Feedback!$A$5:$A$19,0)) | ="RESULT: "&TEXT(D93,"0")&"/100 ("&D158&")  →  REASON: "&INDEX(Feedback!$D$5:$D$19,MATCH("Treatment\|"&D158,Feedback!$A$5:$A$19,0))&"  →  MEANING: "&INDEX(Feedback!$E$5:$E$19,MATCH("Treatment\|"&D158,Feedback!$A$5:$A$19,0))&"  →  ACTION: "&INDEX(Feedback!$F$5:$F$19,MATCH("Treatment\|"&D158,Feedback!$A$5:$A$19,0))&"  →  LIMIT: "&INDEX(Feedback!$G$5:$G$19,MATCH("Treatment\|"&D158,Feedback!$A$5:$A$19,0)) | ="RESULT: "&TEXT(E93,"0")&"/100 ("&E158&")  →  REASON: "&INDEX(Feedback!$D$5:$D$19,MATCH("Treatment\|"&E158,Feedback!$A$5:$A$19,0))&"  →  MEANING: "&INDEX(Feedback!$E$5:$E$19,MATCH("Treatment\|"&E158,Feedback!$A$5:$A$19,0))&"  →  ACTION: "&INDEX(Feedback!$F$5:$F$19,MATCH("Treatment\|"&E158,Feedback!$A$5:$A$19,0))&"  →  LIMIT: "&INDEX(Feedback!$G$5:$G$19,MATCH("Treatment\|"&E158,Feedback!$A$5:$A$19,0)) | ="RESULT: "&TEXT(F93,"0")&"/100 ("&F158&")  →  REASON: "&INDEX(Feedback!$D$5:$D$19,MATCH("Treatment\|"&F158,Feedback!$A$5:$A$19,0))&"  →  MEANING: "&INDEX(Feedback!$E$5:$E$19,MATCH("Treatment\|"&F158,Feedback!$A$5:$A$19,0))&"  →  ACTION: "&INDEX(Feedback!$F$5:$F$19,MATCH("Treatment\|"&F158,Feedback!$A$5:$A$19,0))&"  →  LIMIT: "&INDEX(Feedback!$G$5:$G$19,MATCH("Treatment\|"&F158,Feedback!$A$5:$A$19,0)) | ="RESULT: "&TEXT(G93,"0")&"/100 ("&G158&")  →  REASON: "&INDEX(Feedback!$D$5:$D$19,MATCH("Treatment\|"&G158,Feedback!$A$5:$A$19,0))&"  →  MEANING: "&INDEX(Feedback!$E$5:$E$19,MATCH("Treatment\|"&G158,Feedback!$A$5:$A$19,0))&"  →  ACTION: "&INDEX(Feedback!$F$5:$F$19,MATCH("Treatment\|"&G158,Feedback!$A$5:$A$19,0))&"  →  LIMIT: "&INDEX(Feedback!$G$5:$G$19,MATCH("Treatment\|"&G158,Feedback!$A$5:$A$19,0)) |
| Execution · feedback band |  | =IF(C99>=Config!$B$36,"High",IF(C99>=Config!$B$37,"Mid","Low")) | =IF(D99>=Config!$B$36,"High",IF(D99>=Config!$B$37,"Mid","Low")) | =IF(E99>=Config!$B$36,"High",IF(E99>=Config!$B$37,"Mid","Low")) | =IF(F99>=Config!$B$36,"High",IF(F99>=Config!$B$37,"Mid","Low")) | =IF(G99>=Config!$B$36,"High",IF(G99>=Config!$B$37,"Mid","Low")) |
| Execution · feedback |  | ="RESULT: "&TEXT(C99,"0")&"/100 ("&C160&")  →  REASON: "&INDEX(Feedback!$D$5:$D$19,MATCH("Execution\|"&C160,Feedback!$A$5:$A$19,0))&"  →  MEANING: "&INDEX(Feedback!$E$5:$E$19,MATCH("Execution\|"&C160,Feedback!$A$5:$A$19,0))&"  →  ACTION: "&INDEX(Feedback!$F$5:$F$19,MATCH("Execution\|"&C160,Feedback!$A$5:$A$19,0))&"  →  LIMIT: "&INDEX(Feedback!$G$5:$G$19,MATCH("Execution\|"&C160,Feedback!$A$5:$A$19,0)) | ="RESULT: "&TEXT(D99,"0")&"/100 ("&D160&")  →  REASON: "&INDEX(Feedback!$D$5:$D$19,MATCH("Execution\|"&D160,Feedback!$A$5:$A$19,0))&"  →  MEANING: "&INDEX(Feedback!$E$5:$E$19,MATCH("Execution\|"&D160,Feedback!$A$5:$A$19,0))&"  →  ACTION: "&INDEX(Feedback!$F$5:$F$19,MATCH("Execution\|"&D160,Feedback!$A$5:$A$19,0))&"  →  LIMIT: "&INDEX(Feedback!$G$5:$G$19,MATCH("Execution\|"&D160,Feedback!$A$5:$A$19,0)) | ="RESULT: "&TEXT(E99,"0")&"/100 ("&E160&")  →  REASON: "&INDEX(Feedback!$D$5:$D$19,MATCH("Execution\|"&E160,Feedback!$A$5:$A$19,0))&"  →  MEANING: "&INDEX(Feedback!$E$5:$E$19,MATCH("Execution\|"&E160,Feedback!$A$5:$A$19,0))&"  →  ACTION: "&INDEX(Feedback!$F$5:$F$19,MATCH("Execution\|"&E160,Feedback!$A$5:$A$19,0))&"  →  LIMIT: "&INDEX(Feedback!$G$5:$G$19,MATCH("Execution\|"&E160,Feedback!$A$5:$A$19,0)) | ="RESULT: "&TEXT(F99,"0")&"/100 ("&F160&")  →  REASON: "&INDEX(Feedback!$D$5:$D$19,MATCH("Execution\|"&F160,Feedback!$A$5:$A$19,0))&"  →  MEANING: "&INDEX(Feedback!$E$5:$E$19,MATCH("Execution\|"&F160,Feedback!$A$5:$A$19,0))&"  →  ACTION: "&INDEX(Feedback!$F$5:$F$19,MATCH("Execution\|"&F160,Feedback!$A$5:$A$19,0))&"  →  LIMIT: "&INDEX(Feedback!$G$5:$G$19,MATCH("Execution\|"&F160,Feedback!$A$5:$A$19,0)) | ="RESULT: "&TEXT(G99,"0")&"/100 ("&G160&")  →  REASON: "&INDEX(Feedback!$D$5:$D$19,MATCH("Execution\|"&G160,Feedback!$A$5:$A$19,0))&"  →  MEANING: "&INDEX(Feedback!$E$5:$E$19,MATCH("Execution\|"&G160,Feedback!$A$5:$A$19,0))&"  →  ACTION: "&INDEX(Feedback!$F$5:$F$19,MATCH("Execution\|"&G160,Feedback!$A$5:$A$19,0))&"  →  LIMIT: "&INDEX(Feedback!$G$5:$G$19,MATCH("Execution\|"&G160,Feedback!$A$5:$A$19,0)) |
| Reassessment · feedback band |  | =IF(C128>=Config!$B$36,"High",IF(C128>=Config!$B$37,"Mid","Low")) | =IF(D128>=Config!$B$36,"High",IF(D128>=Config!$B$37,"Mid","Low")) | =IF(E128>=Config!$B$36,"High",IF(E128>=Config!$B$37,"Mid","Low")) | =IF(F128>=Config!$B$36,"High",IF(F128>=Config!$B$37,"Mid","Low")) | =IF(G128>=Config!$B$36,"High",IF(G128>=Config!$B$37,"Mid","Low")) |
| Reassessment · feedback |  | ="RESULT: "&TEXT(C128,"0")&"/100 ("&C162&")  →  REASON: "&INDEX(Feedback!$D$5:$D$19,MATCH("Reassessment\|"&C162,Feedback!$A$5:$A$19,0))&"  →  MEANING: "&INDEX(Feedback!$E$5:$E$19,MATCH("Reassessment\|"&C162,Feedback!$A$5:$A$19,0))&"  →  ACTION: "&INDEX(Feedback!$F$5:$F$19,MATCH("Reassessment\|"&C162,Feedback!$A$5:$A$19,0))&"  →  LIMIT: "&INDEX(Feedback!$G$5:$G$19,MATCH("Reassessment\|"&C162,Feedback!$A$5:$A$19,0)) | ="RESULT: "&TEXT(D128,"0")&"/100 ("&D162&")  →  REASON: "&INDEX(Feedback!$D$5:$D$19,MATCH("Reassessment\|"&D162,Feedback!$A$5:$A$19,0))&"  →  MEANING: "&INDEX(Feedback!$E$5:$E$19,MATCH("Reassessment\|"&D162,Feedback!$A$5:$A$19,0))&"  →  ACTION: "&INDEX(Feedback!$F$5:$F$19,MATCH("Reassessment\|"&D162,Feedback!$A$5:$A$19,0))&"  →  LIMIT: "&INDEX(Feedback!$G$5:$G$19,MATCH("Reassessment\|"&D162,Feedback!$A$5:$A$19,0)) | ="RESULT: "&TEXT(E128,"0")&"/100 ("&E162&")  →  REASON: "&INDEX(Feedback!$D$5:$D$19,MATCH("Reassessment\|"&E162,Feedback!$A$5:$A$19,0))&"  →  MEANING: "&INDEX(Feedback!$E$5:$E$19,MATCH("Reassessment\|"&E162,Feedback!$A$5:$A$19,0))&"  →  ACTION: "&INDEX(Feedback!$F$5:$F$19,MATCH("Reassessment\|"&E162,Feedback!$A$5:$A$19,0))&"  →  LIMIT: "&INDEX(Feedback!$G$5:$G$19,MATCH("Reassessment\|"&E162,Feedback!$A$5:$A$19,0)) | ="RESULT: "&TEXT(F128,"0")&"/100 ("&F162&")  →  REASON: "&INDEX(Feedback!$D$5:$D$19,MATCH("Reassessment\|"&F162,Feedback!$A$5:$A$19,0))&"  →  MEANING: "&INDEX(Feedback!$E$5:$E$19,MATCH("Reassessment\|"&F162,Feedback!$A$5:$A$19,0))&"  →  ACTION: "&INDEX(Feedback!$F$5:$F$19,MATCH("Reassessment\|"&F162,Feedback!$A$5:$A$19,0))&"  →  LIMIT: "&INDEX(Feedback!$G$5:$G$19,MATCH("Reassessment\|"&F162,Feedback!$A$5:$A$19,0)) | ="RESULT: "&TEXT(G128,"0")&"/100 ("&G162&")  →  REASON: "&INDEX(Feedback!$D$5:$D$19,MATCH("Reassessment\|"&G162,Feedback!$A$5:$A$19,0))&"  →  MEANING: "&INDEX(Feedback!$E$5:$E$19,MATCH("Reassessment\|"&G162,Feedback!$A$5:$A$19,0))&"  →  ACTION: "&INDEX(Feedback!$F$5:$F$19,MATCH("Reassessment\|"&G162,Feedback!$A$5:$A$19,0))&"  →  LIMIT: "&INDEX(Feedback!$G$5:$G$19,MATCH("Reassessment\|"&G162,Feedback!$A$5:$A$19,0)) |

## Case_Facts

| Column A | Column B | Column C |
| --- | --- | --- |
| Case #01 — Toy Kingdom Inc. (mô phỏng Toys "R" Us): tổng quan & bí mật nền |  |  |
| Nội dung lấy từ USER_FLOW_GỐC. Mục 'GIẢ ĐỊNH THIẾT KẾ' là phần bổ sung để chấm điểm. |  |  |
| Nhóm | Trường | Nội dung |
| Tổng quan | Công ty | Toy Kingdom Inc. (mô phỏng Toys "R" Us, Inc.) |
| Tổng quan | Ngành / quy mô | Specialty retail — đồ chơi & sản phẩm trẻ em; ~1.700 cửa hàng toàn cầu. |
| Tổng quan | Doanh thu FY2026 | $11.540 tỷ |
| Tổng quan | Sở hữu | Gia đình Anderson 78% (David — CEO, Michael — em trai, Richard — chú); quỹ đầu tư tư nhân 22%. |
| Tổng quan | Kết quả FY2026 | Adjusted EBITDA $792m; Operating Earnings $460m; Net Loss attributable −$36m. |
| Tổng quan | Lý do khám | Kinh doanh có dấu hiệu cải thiện nhưng thiếu nguồn lực tái đầu tư, áp lực tài chính tăng, ban lãnh đạo gia đình chia rẽ. |
| Màn 1 | David (CEO) | "Sales tiếp tục giảm… Một số chỉ số tốt lên nhưng công ty vẫn ngày càng khó xoay xở." Không biết vấn đề nằm ở thị trường, cấu trúc tài chính hay ban lãnh đạo. |
| Bí mật nền | Thỏa thuận Michael–Houndstooth | Nếu Adjusted EBITDA giảm thêm 5% so với FY2026, Houndstooth có quyền mua ưu tiên cổ phần gia đình với giá thấp. Chỉ xác nhận đầy đủ khi mở HS-G. |
| Bí mật nền | Richard | Muốn thanh lý tài sản quốc tế để chia tiền mặt ngay. |
| Trục theo dõi | Uy tín | Thấp / Trung bình / Cao — không đổi ô kết cục, đổi cách mô tả người chơi; là điều kiện mở PD-A (≥ TB) và PD-F (Cao). |
| Trục theo dõi | Sức khỏe Tài chính | Điểm → Ổn định / Mong manh / Sụp đổ. |
| Trục theo dõi | Ổn định Quản trị — Gia tộc | Điểm → Đoàn kết / Chia rẽ chưa vỡ / Mất kiểm soát. |
| ĐÃ CHỐT (USER_FLOW bản sửa) | 6 tầng chẩn đoán | CD-A/B/C/E = tầng triệu chứng/biểu hiện; CD-D 'Nguyên nhân Cấu trúc' = tầng sâu nhất, dùng làm mốc chấm Treatment; CD-F = tầng đa yếu tố, hợp lệ khi đủ điều kiện. Không có nhãn đúng/sai (Màn 6). |
| GIẢ ĐỊNH THIẾT KẾ | Điểm Uy tín | Khởi điểm 2 (Trung bình). +1/−1 theo chẩn đoán có/không căn cứ; +1 điều tra hiệu quả; CD-F thiếu điều kiện −1; TG-C thất bại −1; đổi thiếu dữ liệu −1/lần. |
| ĐÃ CHỐT (USER_FLOW bản sửa) | Ngưỡng Tài chính | Ổn định tài chính ≥4 (Màn 12) — ngưỡng cũ ≥5 không đạt được với thang điểm, đã chốt chính thức, không còn là giả định. |
| GIẢ ĐỊNH THIẾT KẾ | Lớp điểm /100 | Investigation, Diagnosis, Treatment, Execution, Reassessment và Overall là lớp chấm điểm bổ sung để so sánh; kết cục cuối vẫn theo 3 trục của USER_FLOW gốc. |

## Financials

| Column A | Column B | Column C | Column D | Column E | Column F |
| --- | --- | --- | --- | --- | --- |
| Màn 4 — Báo cáo tài chính đầy đủ (triệu USD) |  |  |  |  |  |
| Số liệu từ USER_FLOW gốc (xanh = dữ liệu; đen = công thức). Chỉ số đòn bẩy là phần tính thêm. |  |  |  |  |  |
| Chỉ tiêu | FY2024 | FY2025 | FY2026 | FY26 vs FY25 | Tín hiệu |
| CONSOLIDATED INCOME STATEMENT |  |  |  |  |  |
| Net Sales | 12361 | 11802 | 11540 | =D6-C6 | Doanh thu giảm 2.2% |
| Cost of Sales | 7931 | 7576 | 7432 | -144 |  |
| Gross Margin | =B6-B7 | =C6-C7 | =D6-D7 | -118 |  |
| SG&A | 3915 | 3593 | 3480 | -113 |  |
| Depreciation & Amortization | 377 | 343 | 317 | -26 |  |
| Other Income, net | 53 | 88 | 149 | 61 | Tăng bất thường (bảo hiểm nhân thọ, tranh chấp) |
| Operating Earnings | =B8-B9-B10+B11 | =C8-C9-C10+C11 | =D8-D9-D10+D11 | 82 |  |
| Interest Expense | 451 | 429 | 457 | 28 | Lãi vay ≈ Operating Earnings |
| Interest Income | 4 | 3 | 2 | -1 |  |
| Earnings / (Loss) Before Tax | =B12-B13+B14 | =C12-C13+C14 | =D12-D13+D14 | 53 |  |
| Income Tax Expense | 32 | 76 | 34 | -42 |  |
| Net Loss | =B15-B16 | =C15-C16 | =D15-D16 | 95 |  |
| Noncontrolling Interest | 4 | 6 | 7 | 1 |  |
| Net Loss attributable to Toys "R" Us | =B17-B18 | =C17-C18 | =D17-D18 | 94 | Lỗ thu hẹp nhưng vẫn lỗ |
| OPERATING METRICS |  |  |  |  |  |
| Adjusted EBITDA | 642 | 800 | 792 | =D21-C21 | Giảm 1.0% — đã dùng 1/5 biên trigger Houndstooth |
| Consolidated SSS | 0 | 8.9999999999999993E-3 | -1.4E-2 |  |  |
| Gross Margin % | =B8/B6 | =C8/C6 | =D8/D6 |  |  |
| SG&A / Sales | =B9/B6 | =C9/C6 | =D9/D6 |  |  |
| Net Sales growth |  | =C6/B6-1 | =D6/C6-1 |  |  |
| BALANCE SHEET SNAPSHOT — FY2026 |  |  |  |  |  |
| Cash & Cash Equivalents |  |  | 566 |  |  |
| Receivables |  |  | 255 |  |  |
| Inventory |  |  | 2476 |  |  |
| Total Current Assets |  |  | 3389 |  |  |
| Property & Equipment |  |  | 3067 |  |  |
| Total Indebtedness |  |  | 4800 |  | ~$4.8bn |
| Secured Indebtedness |  |  | 3400 |  | ~$3.4bn |
| Stockholders' Equity (deficit) |  |  | -1300 |  | ~$1.3bn deficit |
| LEVERAGE INDICATORS — FY2026 (tính thêm) |  |  |  |  |  |
| Debt / Adj. EBITDA (x) |  |  | =D32/D21 |  | Đòn bẩy rất cao |
| Secured debt / Adj. EBITDA (x) |  |  | =D33/D21 |  |  |
| Net debt / Adj. EBITDA (x) |  |  | =(D32-D27)/D21 |  |  |
| Adj. EBITDA / Interest expense (x) |  |  | =D21/D13 |  | Bao phủ lãi mỏng |
| Operating Earnings / Interest (x) |  |  | =D12/D13 |  | ≈ 1.0x |
| Cash / Total debt |  |  | =D27/D32 |  |  |
| Inventory / Current assets |  |  | =D29/D30 |  |  |
| Houndstooth trigger: Adj. EBITDA thấp hơn (−5%) |  |  | =D21*0.95 |  | Giả định ngưỡng từ Bí mật nền |
| OPERATING CASH FLOW TRƯỚC GIAO DỊCH 2015 (HS-D) |  |  |  |  |  |
| Operating Cash Flow 2012 |  |  | 575 |  |  |
| Operating Cash Flow 2013 |  |  | 801 |  |  |
| Operating Cash Flow 2014 |  |  | 746 |  |  |

## Config

| Column A | Column B | Column C |
| --- | --- | --- |
| Config — tham số toàn cục (chữ xanh = chỉnh được) |  |  |
| Đổi giá trị ở đây, mọi điểm ở Scorecard / Comparison tự tính lại. |  |  |
| Parameter | Value | Note |
| Chẩn đoán ở TẦNG CẤU TRÚC sâu nhất, dùng làm mốc chấm Treatment (ID) | CD-D | HS-D ghi 'Gốc rễ: giao dịch 2015'. Đây là mốc CHẤM ĐIỂM, không phải tuyên bố '6 chẩn đoán kia sai' (USER_FLOW bản sửa, Màn 6). |
| Điểm câu hỏi bổ sung khi khu vực ĐÃ mở hồ sơ | 1 | USER_FLOW: chỉ củng cố thêm chi tiết nhỏ. |
| Trần điểm câu hỏi cuối | 15 |  |
| Điểm thông tin tối đa đạt được (chuẩn hóa Investigation) | 61 | Tính bằng vét cạn: 3 hồ sơ + 2 CH1 + 1 CH2 tốt nhất. Tính lại nếu đổi điểm. |
| Trần Evidence support (Diagnosis) | 40 |  |
| Hệ số bằng chứng từ câu hỏi CH1 (so với hồ sơ đầy đủ) | 0.5 |  |
| Hệ số điểm CD-F khi THIẾU điều kiện | 0.5 | Kèm Uy tín −1 (USER_FLOW Màn 6). |
| Uy tín khởi điểm (điểm) | 2 | GIẢ ĐỊNH: case gốc không nêu điểm khởi đầu. 2 = Trung bình. |
| Uy tín: Trung bình khi ≥ | 2 | Thấp: <2 · Trung bình: 2–3 · Cao: ≥4. |
| Uy tín: Cao khi ≥ | 4 | PD-F cần Cao; PD-A cần ≥ Trung bình. |
| Uy tín: chẩn đoán CÓ căn cứ | 1 | GIẢ ĐỊNH (case gốc: 'tăng/giảm theo lựa chọn có/không đủ căn cứ'). |
| Uy tín: chẩn đoán KHÔNG có căn cứ | -1 | Căn cứ = đã mở HS-x hoặc hỏi CH1-x của chính chẩn đoán (CD-F: đủ điều kiện). |
| Uy tín: điều tra hiệu quả (2 CH1 vào 2 khu vực chưa mở) | 1 | GIẢ ĐỊNH — thưởng cho việc không lãng phí 'cơ hội duy nhất'. |
| Uy tín: chọn CD-F thiếu điều kiện | -1 | Theo USER_FLOW Màn 6. |
| Uy tín: TG-C refinance thử thất bại | -1 | Theo USER_FLOW Màn 8. Thất bại = KHÔNG ưu tiên Creditors (GIẢ ĐỊNH). |
| Uy tín: mỗi lần đổi chẩn đoán/phác đồ thiếu dữ liệu mới | -1 | Theo USER_FLOW Màn 11. |
| Treatment: trọng số độ phù hợp với nguyên nhân gốc | 0.6 |  |
| Treatment: trọng số độ phù hợp với chẩn đoán của người chơi | 0.4 |  |
| Execution: trọng số thời điểm | 0.5 |  |
| Execution: trọng số nhóm ưu tiên | 0.5 |  |
| Độ phù hợp để tính là kế hoạch MẠNH (Reassessment) | 80 |  |
| Reassessment: trọng số quyết định | 0.7 |  |
| Reassessment: trọng số chất lượng phán đoán cuối | 0.3 |  |
| Reassessment: phạt (điểm /100) mỗi lần đổi thiếu căn cứ | 10 |  |
| Tài chính: Ổn định khi điểm ≥ | 4 | Đã CHỐT CHÍNH THỨC theo USER_FLOW bản sửa (Màn 12): ngưỡng ≥5 gốc không đạt được với thang điểm (tối đa +4) nên đội quyết định đổi thành ≥4 — không còn là giả định. |
| Tài chính: Mong manh khi điểm ≥ | 1 | USER_FLOW: 1–4 mong manh; ≤0 sụp đổ. |
| Quản trị: Đoàn kết khi điểm ≥ | 3 | USER_FLOW: ≥3. |
| Quản trị: Chia rẽ chưa vỡ khi điểm ≥ | 0 | USER_FLOW: 0–2; <0 mất kiểm soát. |
| Quản trị: đã mở HS-G | 1 |  |
| Quản trị: mỗi lần mất Uy tín ở Màn 11 | -1 |  |
| Quản trị: Tài chính rơi vào Sụp đổ | -2 |  |
| Quản trị: chọn PD-D mà chưa mở HS-E | -1 |  |
| Feedback band: High ≥ | 80 |  |
| Feedback band: Mid ≥ | 50 |  |
| Trọng số Counselor Score (tổng phải = 100%) |  |  |
| Dimension | Weight | Cách tính (tối đa 100) |
| Investigation | 0.2 | (Hồ sơ + CH1 + CH2 + synergy) ÷ điểm thông tin tối đa × 100 |
| Diagnosis | 0.25 | Primary (tối đa 60) + Evidence support M3 (tối đa 40) |
| Treatment | 0.2 | M4: 60% vs nguyên nhân gốc + 40% vs chẩn đoán của bạn |
| Execution | 0.2 | 50% thời điểm M5 + 50% nhóm ưu tiên M6 |
| Reassessment | 0.15 | 70% quyết định + 30% chất lượng phán đoán cuối − phạt đổi thiếu căn cứ |
| Total (check = 100%) | =SUM(B41:B45) |  |
| Grade (Overall Counselor Score) |  |  |
| Min score | Grade | Meaning |
| 85 | Excellent | Sẵn sàng tư vấn độc lập. |
| 70 | Proficient | Phán đoán vững, còn khoảng trống nhỏ. |
| 50 | Developing | Hiểu luồng; cần nối bằng chứng với quyết định chặt hơn. |
| 0 | Needs Review | Nên chơi lại. |

## Lists

| Column A | Column B | Column C | Column D | Column E | Column F | Column G | Column H |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Lists — nguồn dropdown (tự sinh, không sửa) |  |  |  |  |  |  |  |
| Files | Questions | Final Q | Diagnosis | Treatment | Timing | Stakeholder | Reassess decision |
| =S2_Files!A5&" - "&S2_Files!B5 | =S3_Questions!A5&" - "&S3_Questions!B5 | =S5_FinalQ!A5&" - "&S5_FinalQ!B5 | =S6_Diagnosis!A5&" - "&S6_Diagnosis!B5 | =S7_Treatment!A5&" - "&S7_Treatment!B5 | =S8_Timing!A5&" - "&S8_Timing!B5 | =S9_Stakeholders!A5&" - "&S9_Stakeholders!B5 | Keep |
| =S2_Files!A6&" - "&S2_Files!B6 | =S3_Questions!A6&" - "&S3_Questions!B6 | =S5_FinalQ!A6&" - "&S5_FinalQ!B6 | =S6_Diagnosis!A6&" - "&S6_Diagnosis!B6 | =S7_Treatment!A6&" - "&S7_Treatment!B6 | =S8_Timing!A6&" - "&S8_Timing!B6 | =S9_Stakeholders!A6&" - "&S9_Stakeholders!B6 | Revise Diagnosis |
| =S2_Files!A7&" - "&S2_Files!B7 | =S3_Questions!A7&" - "&S3_Questions!B7 | =S5_FinalQ!A7&" - "&S5_FinalQ!B7 | =S6_Diagnosis!A7&" - "&S6_Diagnosis!B7 | =S7_Treatment!A7&" - "&S7_Treatment!B7 | =S8_Timing!A7&" - "&S8_Timing!B7 | =S9_Stakeholders!A7&" - "&S9_Stakeholders!B7 | Revise Treatment |
| =S2_Files!A8&" - "&S2_Files!B8 | =S3_Questions!A8&" - "&S3_Questions!B8 | =S5_FinalQ!A8&" - "&S5_FinalQ!B8 | =S6_Diagnosis!A8&" - "&S6_Diagnosis!B8 | =S7_Treatment!A8&" - "&S7_Treatment!B8 | =S8_Timing!A8&" - "&S8_Timing!B8 | =S9_Stakeholders!A8&" - "&S9_Stakeholders!B8 | Revise Both |
| =S2_Files!A9&" - "&S2_Files!B9 | =S3_Questions!A9&" - "&S3_Questions!B9 | =S5_FinalQ!A9&" - "&S5_FinalQ!B9 | =S6_Diagnosis!A9&" - "&S6_Diagnosis!B9 | =S7_Treatment!A9&" - "&S7_Treatment!B9 |  | =S9_Stakeholders!A9&" - "&S9_Stakeholders!B9 |  |
| =S2_Files!A10&" - "&S2_Files!B10 | =S3_Questions!A10&" - "&S3_Questions!B10 | =S5_FinalQ!A10&" - "&S5_FinalQ!B10 | =S6_Diagnosis!A10&" - "&S6_Diagnosis!B10 | =S7_Treatment!A10&" - "&S7_Treatment!B10 |  | =S9_Stakeholders!A10&" - "&S9_Stakeholders!B10 |  |
| =S2_Files!A11&" - "&S2_Files!B11 | =S3_Questions!A11&" - "&S3_Questions!B11 | =S5_FinalQ!A11&" - "&S5_FinalQ!B11 |  |  |  | =S9_Stakeholders!A11&" - "&S9_Stakeholders!B11 |  |

## S2_Files

| Column A | Column B | Column C | Column D | Column E | Column F |
| --- | --- | --- | --- | --- | --- |
| Screen 2 — Hồ sơ chẩn đoán (chọn đúng 3 trong 7; 4 hồ sơ còn lại đóng vĩnh viễn) |  |  |  |  |  |
| Points = giá trị thông tin khi mở đầy đủ (best 3 = HS-D + HS-G + HS-C = 40). |  |  |  |  |  |
| ID | Option (player sees) | What it reveals | Category | Full-file pts | Design note |
| HS-A | Sales & Customer | SSS consolidated −1.4% (Domestic −1.3%, Intl −1.6%); Net sales $11.802bn → $11.540bn (−2.2%); e-commerce +11%. | Supporting | 8 | Traffic yếu nhưng không phải kênh nào cũng giảm. |
| HS-B | Stores & Investment | 6 chương trình đang tranh vốn hữu hạn: renovation, mobile & web, omnichannel, supply chain, customer experience, holiday inventory. | Supporting | 6 | Áp lực CapEx dồn nén. |
| HS-C | Liquidity | Cash $566m; Receivables $255m; Inventory $2.476bn; Current assets $3.389bn; PP&E $3.067bn. Cash cuối kỳ không phản ánh toàn bộ liquidity. | Core | 10 | Thanh khoản / covenant. |
| HS-D | Capital Structure & Leverage History | Total debt ~$4.8bn (secured ~$3.4bn); LBO 2015 $6.6bn; OCF trước 2015: $575m / $801m / $746m. 'Leverage cao nhưng đã tồn tại nhiều năm'. | Core (gốc rễ) | 15 | Historical Financing Event — 2015. |
| HS-E | Product & Category Trends | Toy ex-entertainment: Domestic +2.5% SSS, Consolidated +1.1%; entertainment/licensing yếu, phụ thuộc lịch phát hành bên ngoài. | Supporting | 5 | Đồ chơi truyền thống vẫn có nhu cầu thật. |
| HS-F | Management Track Record | 4 sáng kiến 3 năm qua: renovation pilot, cắt SG&A vòng 1, digital & app, tái cấu trúc một phần nợ quốc tế — mỗi thứ chỉ xử lý một phần. | Supporting | 7 | Chưa sáng kiến nào đủ lớn. |
| HS-G | Governance & Family | Cổ phần Anderson 78%; thỏa thuận Michael–Houndstooth (quyền mua ưu tiên nếu Adj. EBITDA giảm thêm 5%); Richard chào bán tài sản quốc tế; thư luật sư của Michael. | Core (bí mật nền) | 15 | Chỉ HS-G xác nhận đầy đủ bí mật nền. |

## S3_Questions

| Column A | Column B | Column C | Column D | Column E | Column F |
| --- | --- | --- | --- | --- | --- |
| Screen 3 — Câu hỏi bổ sung (chọn đúng 2 trong 7) |  |  |  |  |  |
| Points = giá trị BỀ MẶT nếu khu vực CHƯA mở hồ sơ đầy đủ. Nếu khu vực đã mở hồ sơ, câu hỏi chỉ củng cố chi tiết nhỏ (=1, xem M1 và Config). |  |  |  |  |  |
| ID | Option (player sees) | What it reveals | Area | Surface pts | Design note |
| CH1-A | Traffic giảm, e-commerce tăng — khách rời bỏ hay đổi kênh? | Phần lớn đổi kênh; biên online thấp hơn store. Tin đồn tái cấu trúc gia đình khiến một phần khách chuyển sang đối thủ. | Khu vực HS-A | 3 | Bề mặt của HS-A. |
| CH1-B | Chương trình vốn nào bị trì hoãn lâu nhất? | Store renovation — gác 3 năm liên tiếp; Richard nhiều lần bỏ phiếu trì hoãn vì đang đàm phán bán tài sản riêng. | Khu vực HS-B | 2 | Bề mặt của HS-B. |
| CH1-C | Holiday kém 10% thì thanh khoản ra sao? | Vẫn đủ cash hoạt động, nhưng biên an toàn covenant mỏng đi đáng kể. | Khu vực HS-C | 4 | Bề mặt của HS-C. |
| CH1-D | Khoản nợ nào đến hạn sớm nhất? | Một phần secured notes đáo hạn trong 18 tháng; EBITDA trigger của Houndstooth có thể phát sinh sớm hơn. | Khu vực HS-D | 6 | Bề mặt của HS-D (hé lộ Houndstooth). |
| CH1-E | Nhóm sản phẩm nào đang hoạt động tốt nhất? | Đồ chơi truyền thống nhưng quy mô nhỏ; Richard đang âm thầm rao bán mảng này. | Khu vực HS-E | 2 | Bề mặt của HS-E. |
| CH1-F | Ban lãnh đạo có đồng thuận không? | Không — Michael đã mời riêng luật sư chuyên 'chuyển giao quyền lực'. | Khu vực HS-F/G | 3 | Bề mặt của HS-F. |
| CH1-G | Có một điều khoản đặc biệt nào giữa Michael và nhà đầu tư bên ngoài không? | Có một thỏa thuận có điều kiện có thể ảnh hưởng đến quyền sở hữu của gia đình, nhưng chi tiết cụ thể (điều kiện kích hoạt, đối tác) chưa rõ — cần xem hồ sơ đầy đủ. | Khu vực HS-G | 3 | Bề mặt của HS-G — ĐÃ GIẢM 6→3đ và bớt chi tiết (bản sửa USER_FLOW) để việc mở HS-G vẫn có giá trị. |

## S5_FinalQ

| Column A | Column B | Column C | Column D | Column E | Column F |
| --- | --- | --- | --- | --- | --- |
| Screen 5 — Câu hỏi cuối (chọn đúng 1 trong 7) |  |  |  |  |  |
| Points = điểm phản tư cơ bản; cộng thêm điểm từ M2 nếu hồ sơ liên quan đã mở; tổng bị chặn ở Config (fq_cap). |  |  |  |  |  |
| ID | Option (player sees) | What it reveals | Category | Base pts | Design note |
| CH2-A | Khoản nào khó cắt nhất? | Nghĩa vụ tài chính có thể refinance nhưng không biến mất; Michael thúc cắt marketing mạnh hơn CFO khuyến nghị. | Phản tư | 3 | Nghiêng về chi phí/nợ. |
| CH2-B | Có thêm vốn thì dùng vào đâu? | Digital, fulfillment, renovation. Nếu Houndstooth thắng, phần lớn đầu tư này dừng ngay. | Phản tư | 3 | Nghiêng về đầu tư cạnh tranh. |
| CH2-C | Sao không đóng mạnh cửa hàng? | Một số nên đóng nhưng cắt sâu làm nhỏ sales base; nhiều hợp đồng thuê do Richard đứng tên cá nhân. | Phản tư | 3 | Nghiêng về mạng lưới cửa hàng. |
| CH2-D | Amazon biến mất thì công ty khỏe chưa? | Không — áp lực nội bộ (gia đình, nợ) vẫn còn nguyên. | Phản tư | 2 | Loại giả thuyết cạnh tranh. |
| CH2-E | Nếu loại bỏ được phần lớn áp lực nợ, đã giải quyết toàn bộ vấn đề chưa? | Không — vẫn phải xử lý store base và cạnh tranh; hết nợ thì Michael/Richard chuyển sang đấu tố quyền kiểm soát. | Phản tư | 4 | Nghiêng về giả thuyết hỗn hợp. |
| CH2-F | Lo nhất điều gì trong 12 tháng tới? | Liquidity & refinancing. David: Michael sẽ dùng khoản lỗ để thuyết phục cổ đông nhỏ lẻ rằng tôi hết năng lực. | Phản tư | 4 | Thanh khoản + quản trị. |
| CH2-G | Nếu EBITDA giảm thêm 5%, điều gì xảy ra ngay lập tức? | Điều khoản Houndstooth kích hoạt tự động — không cần họp hội đồng (đầy đủ nếu đã mở HS-G). | Phản tư | 4 | Giá trị cao nhất khi đã mở HS-G. |

## M1_File_x_Q

| Column A | Column B | Column C | Column D | Column E | Column F | Column G | Column H | Column I |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Matrix M1 — Hồ sơ (Màn 2) × Câu hỏi bổ sung (Màn 3): giá trị thông tin tăng thêm |  |  |  |  |  |  |  |  |
| Cùng khu vực (HS-X × CH1-X) = chỉ củng cố chi tiết nhỏ (=1). Khác khu vực = điểm bề mặt của câu hỏi (S3). Với mỗi câu hỏi, hệ thống lấy MIN qua 3 hồ sơ đã mở → nếu khu vực đã mở thì chỉ còn =1. |  |  |  |  |  |  |  |  |
| Hồ sơ ↓ / Câu hỏi → |  | Traffic giảm, e-commerce tăng — khách rời bỏ hay đổi kê | Chương trình vốn nào bị trì hoãn lâu nhất? | Holiday kém 10% thì thanh khoản ra sao? | Khoản nợ nào đến hạn sớm nhất? | Nhóm sản phẩm nào đang hoạt động tốt nhất? | Ban lãnh đạo có đồng thuận không? | Có một điều khoản đặc biệt nào giữa Michael và nhà đầu |
| ID | Option | CH1-A | CH1-B | CH1-C | CH1-D | CH1-E | CH1-F | CH1-G |
| HS-A | Sales & Customer | =IF(RIGHT($A6,1)=RIGHT(C$5,1),Config!$B$5,INDEX(S3_Questions!$E$5:$E$11,MATCH(C$5,S3_Questions!$A$5:$A$11,0))) | =IF(RIGHT($A6,1)=RIGHT(D$5,1),Config!$B$5,INDEX(S3_Questions!$E$5:$E$11,MATCH(D$5,S3_Questions!$A$5:$A$11,0))) | =IF(RIGHT($A6,1)=RIGHT(E$5,1),Config!$B$5,INDEX(S3_Questions!$E$5:$E$11,MATCH(E$5,S3_Questions!$A$5:$A$11,0))) | =IF(RIGHT($A6,1)=RIGHT(F$5,1),Config!$B$5,INDEX(S3_Questions!$E$5:$E$11,MATCH(F$5,S3_Questions!$A$5:$A$11,0))) | =IF(RIGHT($A6,1)=RIGHT(G$5,1),Config!$B$5,INDEX(S3_Questions!$E$5:$E$11,MATCH(G$5,S3_Questions!$A$5:$A$11,0))) | =IF(RIGHT($A6,1)=RIGHT(H$5,1),Config!$B$5,INDEX(S3_Questions!$E$5:$E$11,MATCH(H$5,S3_Questions!$A$5:$A$11,0))) | =IF(RIGHT($A6,1)=RIGHT(I$5,1),Config!$B$5,INDEX(S3_Questions!$E$5:$E$11,MATCH(I$5,S3_Questions!$A$5:$A$11,0))) |
| HS-B | Stores & Investment | =IF(RIGHT($A7,1)=RIGHT(C$5,1),Config!$B$5,INDEX(S3_Questions!$E$5:$E$11,MATCH(C$5,S3_Questions!$A$5:$A$11,0))) | =IF(RIGHT($A7,1)=RIGHT(D$5,1),Config!$B$5,INDEX(S3_Questions!$E$5:$E$11,MATCH(D$5,S3_Questions!$A$5:$A$11,0))) | =IF(RIGHT($A7,1)=RIGHT(E$5,1),Config!$B$5,INDEX(S3_Questions!$E$5:$E$11,MATCH(E$5,S3_Questions!$A$5:$A$11,0))) | =IF(RIGHT($A7,1)=RIGHT(F$5,1),Config!$B$5,INDEX(S3_Questions!$E$5:$E$11,MATCH(F$5,S3_Questions!$A$5:$A$11,0))) | =IF(RIGHT($A7,1)=RIGHT(G$5,1),Config!$B$5,INDEX(S3_Questions!$E$5:$E$11,MATCH(G$5,S3_Questions!$A$5:$A$11,0))) | =IF(RIGHT($A7,1)=RIGHT(H$5,1),Config!$B$5,INDEX(S3_Questions!$E$5:$E$11,MATCH(H$5,S3_Questions!$A$5:$A$11,0))) | =IF(RIGHT($A7,1)=RIGHT(I$5,1),Config!$B$5,INDEX(S3_Questions!$E$5:$E$11,MATCH(I$5,S3_Questions!$A$5:$A$11,0))) |
| HS-C | Liquidity | =IF(RIGHT($A8,1)=RIGHT(C$5,1),Config!$B$5,INDEX(S3_Questions!$E$5:$E$11,MATCH(C$5,S3_Questions!$A$5:$A$11,0))) | =IF(RIGHT($A8,1)=RIGHT(D$5,1),Config!$B$5,INDEX(S3_Questions!$E$5:$E$11,MATCH(D$5,S3_Questions!$A$5:$A$11,0))) | =IF(RIGHT($A8,1)=RIGHT(E$5,1),Config!$B$5,INDEX(S3_Questions!$E$5:$E$11,MATCH(E$5,S3_Questions!$A$5:$A$11,0))) | =IF(RIGHT($A8,1)=RIGHT(F$5,1),Config!$B$5,INDEX(S3_Questions!$E$5:$E$11,MATCH(F$5,S3_Questions!$A$5:$A$11,0))) | =IF(RIGHT($A8,1)=RIGHT(G$5,1),Config!$B$5,INDEX(S3_Questions!$E$5:$E$11,MATCH(G$5,S3_Questions!$A$5:$A$11,0))) | =IF(RIGHT($A8,1)=RIGHT(H$5,1),Config!$B$5,INDEX(S3_Questions!$E$5:$E$11,MATCH(H$5,S3_Questions!$A$5:$A$11,0))) | =IF(RIGHT($A8,1)=RIGHT(I$5,1),Config!$B$5,INDEX(S3_Questions!$E$5:$E$11,MATCH(I$5,S3_Questions!$A$5:$A$11,0))) |
| HS-D | Capital Structure & Leverage History | =IF(RIGHT($A9,1)=RIGHT(C$5,1),Config!$B$5,INDEX(S3_Questions!$E$5:$E$11,MATCH(C$5,S3_Questions!$A$5:$A$11,0))) | =IF(RIGHT($A9,1)=RIGHT(D$5,1),Config!$B$5,INDEX(S3_Questions!$E$5:$E$11,MATCH(D$5,S3_Questions!$A$5:$A$11,0))) | =IF(RIGHT($A9,1)=RIGHT(E$5,1),Config!$B$5,INDEX(S3_Questions!$E$5:$E$11,MATCH(E$5,S3_Questions!$A$5:$A$11,0))) | =IF(RIGHT($A9,1)=RIGHT(F$5,1),Config!$B$5,INDEX(S3_Questions!$E$5:$E$11,MATCH(F$5,S3_Questions!$A$5:$A$11,0))) | =IF(RIGHT($A9,1)=RIGHT(G$5,1),Config!$B$5,INDEX(S3_Questions!$E$5:$E$11,MATCH(G$5,S3_Questions!$A$5:$A$11,0))) | =IF(RIGHT($A9,1)=RIGHT(H$5,1),Config!$B$5,INDEX(S3_Questions!$E$5:$E$11,MATCH(H$5,S3_Questions!$A$5:$A$11,0))) | =IF(RIGHT($A9,1)=RIGHT(I$5,1),Config!$B$5,INDEX(S3_Questions!$E$5:$E$11,MATCH(I$5,S3_Questions!$A$5:$A$11,0))) |
| HS-E | Product & Category Trends | =IF(RIGHT($A10,1)=RIGHT(C$5,1),Config!$B$5,INDEX(S3_Questions!$E$5:$E$11,MATCH(C$5,S3_Questions!$A$5:$A$11,0))) | =IF(RIGHT($A10,1)=RIGHT(D$5,1),Config!$B$5,INDEX(S3_Questions!$E$5:$E$11,MATCH(D$5,S3_Questions!$A$5:$A$11,0))) | =IF(RIGHT($A10,1)=RIGHT(E$5,1),Config!$B$5,INDEX(S3_Questions!$E$5:$E$11,MATCH(E$5,S3_Questions!$A$5:$A$11,0))) | =IF(RIGHT($A10,1)=RIGHT(F$5,1),Config!$B$5,INDEX(S3_Questions!$E$5:$E$11,MATCH(F$5,S3_Questions!$A$5:$A$11,0))) | =IF(RIGHT($A10,1)=RIGHT(G$5,1),Config!$B$5,INDEX(S3_Questions!$E$5:$E$11,MATCH(G$5,S3_Questions!$A$5:$A$11,0))) | =IF(RIGHT($A10,1)=RIGHT(H$5,1),Config!$B$5,INDEX(S3_Questions!$E$5:$E$11,MATCH(H$5,S3_Questions!$A$5:$A$11,0))) | =IF(RIGHT($A10,1)=RIGHT(I$5,1),Config!$B$5,INDEX(S3_Questions!$E$5:$E$11,MATCH(I$5,S3_Questions!$A$5:$A$11,0))) |
| HS-F | Management Track Record | =IF(RIGHT($A11,1)=RIGHT(C$5,1),Config!$B$5,INDEX(S3_Questions!$E$5:$E$11,MATCH(C$5,S3_Questions!$A$5:$A$11,0))) | =IF(RIGHT($A11,1)=RIGHT(D$5,1),Config!$B$5,INDEX(S3_Questions!$E$5:$E$11,MATCH(D$5,S3_Questions!$A$5:$A$11,0))) | =IF(RIGHT($A11,1)=RIGHT(E$5,1),Config!$B$5,INDEX(S3_Questions!$E$5:$E$11,MATCH(E$5,S3_Questions!$A$5:$A$11,0))) | =IF(RIGHT($A11,1)=RIGHT(F$5,1),Config!$B$5,INDEX(S3_Questions!$E$5:$E$11,MATCH(F$5,S3_Questions!$A$5:$A$11,0))) | =IF(RIGHT($A11,1)=RIGHT(G$5,1),Config!$B$5,INDEX(S3_Questions!$E$5:$E$11,MATCH(G$5,S3_Questions!$A$5:$A$11,0))) | =IF(RIGHT($A11,1)=RIGHT(H$5,1),Config!$B$5,INDEX(S3_Questions!$E$5:$E$11,MATCH(H$5,S3_Questions!$A$5:$A$11,0))) | =IF(RIGHT($A11,1)=RIGHT(I$5,1),Config!$B$5,INDEX(S3_Questions!$E$5:$E$11,MATCH(I$5,S3_Questions!$A$5:$A$11,0))) |
| HS-G | Governance & Family | =IF(RIGHT($A12,1)=RIGHT(C$5,1),Config!$B$5,INDEX(S3_Questions!$E$5:$E$11,MATCH(C$5,S3_Questions!$A$5:$A$11,0))) | =IF(RIGHT($A12,1)=RIGHT(D$5,1),Config!$B$5,INDEX(S3_Questions!$E$5:$E$11,MATCH(D$5,S3_Questions!$A$5:$A$11,0))) | =IF(RIGHT($A12,1)=RIGHT(E$5,1),Config!$B$5,INDEX(S3_Questions!$E$5:$E$11,MATCH(E$5,S3_Questions!$A$5:$A$11,0))) | =IF(RIGHT($A12,1)=RIGHT(F$5,1),Config!$B$5,INDEX(S3_Questions!$E$5:$E$11,MATCH(F$5,S3_Questions!$A$5:$A$11,0))) | =IF(RIGHT($A12,1)=RIGHT(G$5,1),Config!$B$5,INDEX(S3_Questions!$E$5:$E$11,MATCH(G$5,S3_Questions!$A$5:$A$11,0))) | =IF(RIGHT($A12,1)=RIGHT(H$5,1),Config!$B$5,INDEX(S3_Questions!$E$5:$E$11,MATCH(H$5,S3_Questions!$A$5:$A$11,0))) | =IF(RIGHT($A12,1)=RIGHT(I$5,1),Config!$B$5,INDEX(S3_Questions!$E$5:$E$11,MATCH(I$5,S3_Questions!$A$5:$A$11,0))) |

## M2_File_x_FQ

| Column A | Column B | Column C | Column D | Column E | Column F | Column G | Column H | Column I |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Matrix M2 — Hồ sơ (Màn 2) × Câu hỏi cuối (Màn 5): điểm thông tin thêm khi có hồ sơ liên quan |  |  |  |  |  |  |  |  |
| Câu hỏi cuối mang tính phản tư: hiểu đầy đủ hơn khi đã mở hồ sơ liên quan (vd CH2-G cần HS-G). Cộng 3 hồ sơ đã mở + điểm cơ bản, tối đa fq_cap (Config). |  |  |  |  |  |  |  |  |
| Hồ sơ ↓ / Câu hỏi cuối → |  | Khoản nào khó cắt nhất? | Có thêm vốn thì dùng vào đâu? | Sao không đóng mạnh cửa hàng? | Amazon biến mất thì công ty khỏe chưa? | Nếu loại bỏ được phần lớn áp lực nợ, đã giải quyết toàn | Lo nhất điều gì trong 12 tháng tới? | Nếu EBITDA giảm thêm 5%, điều gì xảy ra ngay lập tức? |
| ID | Option | CH2-A | CH2-B | CH2-C | CH2-D | CH2-E | CH2-F | CH2-G |
| HS-A | Sales & Customer | 0 | 2 | 2 | 5 | 2 | 0 | 0 |
| HS-B | Stores & Investment | 0 | 5 | 5 | 0 | 3 | 0 | 0 |
| HS-C | Liquidity | 0 | 2 | 0 | 0 | 0 | 5 | 3 |
| HS-D | Capital Structure & Leverage History | 5 | 0 | 0 | 3 | 6 | 5 | 4 |
| HS-E | Product & Category Trends | 0 | 0 | 0 | 3 | 0 | 0 | 0 |
| HS-F | Management Track Record | 3 | 0 | 0 | 0 | 0 | 0 | 0 |
| HS-G | Governance & Family | 2 | 4 | 4 | 3 | 5 | 4 | 10 |

## S6_Diagnosis

| Column A | Column B | Column C | Column D | Column E | Column F |
| --- | --- | --- | --- | --- | --- |
| Screen 6 — Chẩn đoán (chọn đúng 1 trong 6) |  |  |  |  |  |
| 6 tên gọi thể hiện 6 TẦNG khác nhau của cùng một vấn đề (từ bề mặt đến cấu trúc), KHÔNG phải một đáp án đúng/sai — người chơi không bị game ngầm coi là "chọn sai" dù chọn tầng nào. "Nguyên nhân Cấu trúc" (CD-D) nằm ở tầng sâu nhất và có bằng chứng bao trùm nhất trong thiết kế điểm (dùng làm mốc chấm Treatment), nhưng vẫn là 1 trong 6 lựa chọn hợp lệ ngang hàng. Primary pts (tối đa 60) = độ khớp với mốc đó. Evidence support (tối đa 40) lấy từ M3. |  |  |  |  |  |
| ID | Chẩn đoán | Bản chất (chấm điểm) | Bằng chứng ủng hộ mạnh nhất | Primary pts | Điều kiện / hệ quả Uy tín |
| CD-A | Áp lực Cạnh tranh (Competitive Pressure) | Tầng bề mặt — triệu chứng | HS-A, CH1-A: SSS −1.4% nhưng e-com +11% — đổi kênh, không sụp cầu | 25 | Không có điều kiện |
| CD-B | Nút thắt Vận hành (Operational Bottleneck) | Tầng bề mặt — triệu chứng | HS-B, CH1-B: CapEx dồn nén nhiều năm | 25 | Không có điều kiện |
| CD-C | Biểu hiện Thanh khoản tức thời (Liquidity Manifestation) | Tầng biểu hiện — hệ quả của CD-D | HS-C, CH1-C: biên an toàn covenant mỏng | 40 | Không có điều kiện |
| CD-D | Nguyên nhân Cấu trúc (Structural Driver) | Tầng sâu nhất — trọng tâm thiết kế điểm | HS-D, CH1-D: nợ ~$4.8bn, lãi $457m ≈ Operating Earnings $460m; LBO 2015 | 60 | Không có điều kiện |
| CD-E | Áp lực Danh mục Sản phẩm (Category Pressure) | Tầng bề mặt — triệu chứng | HS-E, CH1-E: category truyền thống co lại | 20 | Không có điều kiện |
| CD-F | Chẩn đoán Đa yếu tố (Multi-Factor Diagnosis) | Phạm vi rộng nhất — hợp lệ khi đủ bằng chứng | Cần HS-D + ≥1 trong (HS-A/B/E/F) | 55 | Thiếu điều kiện: Uy tín −1 và điểm chẩn đoán × hệ số phạt (Config) |

## M3_Dx_x_File

| Column A | Column B | Column C | Column D | Column E | Column F | Column G | Column H | Column I |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Matrix M3 — Chẩn đoán (Màn 6) × Hồ sơ (Màn 2): bằng chứng ủng hộ |  |  |  |  |  |  |  |  |
| Hồ sơ mở đầy đủ cộng đủ điểm; câu hỏi CH1-X cộng 50% điểm của khu vực X. Tổng chặn ở dxsup_cap (Config). |  |  |  |  |  |  |  |  |
| Chẩn đoán ↓ / Hồ sơ → |  | Sales & Customer | Stores & Investment | Liquidity | Capital Structure & Leverage History | Product & Category Trends | Management Track Record | Governance & Family |
| ID | Option | HS-A | HS-B | HS-C | HS-D | HS-E | HS-F | HS-G |
| CD-A | Áp lực Cạnh tranh (Competitive Pressure) | 25 | 4 | 0 | 2 | 8 | 6 | 0 |
| CD-B | Nút thắt Vận hành (Operational Bottleneck) | 5 | 25 | 3 | 0 | 0 | 8 | 3 |
| CD-C | Biểu hiện Thanh khoản tức thời (Liquidity Manifestation) | 0 | 4 | 25 | 10 | 0 | 3 | 0 |
| CD-D | Nguyên nhân Cấu trúc (Structural Driver) | 2 | 0 | 10 | 25 | 0 | 8 | 6 |
| CD-E | Áp lực Danh mục Sản phẩm (Category Pressure) | 6 | 0 | 0 | 0 | 25 | 3 | 2 |
| CD-F | Chẩn đoán Đa yếu tố (Multi-Factor Diagnosis) | 6 | 6 | 6 | 15 | 6 | 8 | 10 |

## S7_Treatment

| Column A | Column B | Column C | Column D | Column E | Column F |
| --- | --- | --- | --- | --- | --- |
| Screen 7 — Phác đồ (chọn đúng 1 trong 6) |  |  |  |  |  |
| Điểm phù hợp theo chẩn đoán ở M4. Điểm Tài chính theo M7/M8/M9 (sheet S10). Điều kiện Uy tín áp dụng trước khi tính. |  |  |  |  |  |
| ID | Phác đồ | Nội dung | Điều kiện | Đánh đổi / rủi ro | Diễn biến điển hình (Màn 10) |
| PD-A | Invest to Compete | Đầu tư renovation/digital/omnichannel để cạnh tranh. | Cần Uy tín ≥ Trung bình; nếu không → tự động hạ xuống PD-B — hệ thống hiển thị: "Hội đồng chưa đủ tin tưởng để duyệt kế hoạch đầu tư — bạn buộc phải triển khai phương án cắt giảm chi phí." | Tốn cash khi thanh khoản đã mỏng. | Nếu bị hạ: board tự hạ kế hoạch xuống PD-B tối thiểu. |
| PD-B | Deep Cost Cutting | Cắt chi phí sâu, đóng cửa hàng yếu. | Không cần điều kiện. | Cash ngắn hạn tốt lên nhưng thu nhỏ sales base dài hạn. | PD-B + TG-A + không ưu tiên Employees → đóng thêm cửa hàng ngoài kế hoạch. |
| PD-C | Debt Restructuring | Đàm phán gia hạn/tái cấu trúc nợ với chủ nợ. | Phụ thuộc phản ứng chủ nợ; ưu tiên Creditors ở Màn 9 giúp đạt thỏa thuận tốt hơn. | Có thể tăng lãi suất. | PD-C + Creditors → chủ nợ gia hạn nhưng lãi +1.0–1.5%. |
| PD-D | Asset Sale | Bán tài sản để lấy thanh khoản. | Thường phải bán phần tài sản khỏe nhất (đồ chơi truyền thống). | Mất phần lõi khỏe; −1 Quản trị nếu chưa mở HS-E. | Thanh khoản cải thiện ngay; Richard hưởng lợi. |
| PD-E | Bankruptcy Restructuring | Chapter 11 — xử lý nợ triệt để; vô hiệu hóa thỏa thuận Michael–Houndstooth chưa kích hoạt. | Ưu tiên Suppliers để giảm sốc vendor. | Rủi ro mất niềm tin vendor/khách hàng cao nhất. | PD-E không ưu tiên Suppliers → vendor đòi cash-in-advance. |
| PD-F | Combined Restructuring | Kết hợp nhiều mảng chạy song song. | Cần Uy tín Cao; nếu không → hạ xuống PD-B — hệ thống hiển thị: "Hội đồng chưa đủ tin tưởng để duyệt một kế hoạch tái cấu trúc nhiều mặt trận cùng lúc — bạn buộc phải thu hẹp lại thành cắt giảm chi phí." | Rủi ro thực thi cao nhất. | Nếu đủ Uy tín: kết quả tài chính tốt nhất (+4). |

## M4_Dx_x_Tx

| Column A | Column B | Column C | Column D | Column E | Column F | Column G | Column H |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Matrix M4 — Chẩn đoán (Màn 6) × Phác đồ (Màn 7): độ phù hợp 0–100 |  |  |  |  |  |  |  |
| Treatment score = 60% × độ phù hợp với NGUYÊN NHÂN GỐC (CD-D) + 40% × độ phù hợp với chẩn đoán của người chơi. Dùng phác đồ HIỆU LỰC (sau kiểm tra Uy tín). |  |  |  |  |  |  |  |
| Chẩn đoán ↓ / Phác đồ → |  | Invest to Compete | Deep Cost Cutting | Debt Restructuring | Asset Sale | Bankruptcy Restructuring | Combined Restructuring |
| ID | Option | PD-A | PD-B | PD-C | PD-D | PD-E | PD-F |
| CD-A | Áp lực Cạnh tranh (Competitive Pressure) | 90 | 35 | 30 | 25 | 20 | 60 |
| CD-B | Nút thắt Vận hành (Operational Bottleneck) | 85 | 40 | 30 | 40 | 20 | 60 |
| CD-C | Biểu hiện Thanh khoản tức thời (Liquidity Manifestation) | 30 | 65 | 80 | 85 | 50 | 65 |
| CD-D | Nguyên nhân Cấu trúc (Structural Driver) | 20 | 40 | 85 | 55 | 80 | 90 |
| CD-E | Áp lực Danh mục Sản phẩm (Category Pressure) | 55 | 35 | 30 | 20 | 25 | 50 |
| CD-F | Chẩn đoán Đa yếu tố (Multi-Factor Diagnosis) | 45 | 40 | 65 | 55 | 70 | 90 |

## S8_Timing

| Column A | Column B | Column C | Column D | Column E |
| --- | --- | --- | --- | --- |
| Screen 8 — Thời điểm & Trình tự hành động (chọn đúng 1 trong 4) |  |  |  |  |
| TG-C không phải một mốc thời gian như 3 lựa chọn còn lại, mà là một hành động "thử trước khi cam kết". Không có lựa chọn trung lập. Điểm thực thi ở M5. |  |  |  |  |
| ID | Thời điểm | Khung | Cơ hội | Rủi ro |
| TG-A | Thực hiện ngay | 0–30 ngày | Hành động sớm khi vendor/lender còn linh hoạt. | Dữ liệu holiday chưa đầy đủ; Michael có cớ đòi họp cổ đông sớm để bác kế hoạch. |
| TG-B | Sau holiday season | Sau mùa cao điểm | Có dữ liệu thật. | Nếu holiday kém, thanh khoản xấu đi trước khi kịp hành động. |
| TG-C | Thử tái cấp vốn trước khi cam kết kế hoạch | Thử trước khi cam kết | Thành công → vị thế mạnh hơn hẳn. | Thất bại → thị trường đọc là tín hiệu yếu; Uy tín −1. |
| TG-D | Chờ 6 tháng | 6 tháng | Có thêm thời gian quan sát. | Rủi ro cao nhất nếu thanh khoản mỏng — có thể hết runway. Tài chính −1. |

## M5_Tx_x_Timing

| Column A | Column B | Column C | Column D | Column E | Column F |
| --- | --- | --- | --- | --- | --- |
| Matrix M5 — Phác đồ (Màn 7) × Thời điểm (Màn 8): điểm thực thi 0–100 |  |  |  |  |  |
| Chiếm 50% điểm Execution Planning. |  |  |  |  |  |
| Phác đồ ↓ / Thời điểm → |  | Thực hiện ngay | Sau holiday season | Thử tái cấp vốn trước khi cam kết kế hoạch | Chờ 6 tháng |
| ID | Option | TG-A | TG-B | TG-C | TG-D |
| PD-A | Invest to Compete | 55 | 85 | 60 | 30 |
| PD-B | Deep Cost Cutting | 80 | 60 | 50 | 25 |
| PD-C | Debt Restructuring | 65 | 60 | 90 | 20 |
| PD-D | Asset Sale | 75 | 55 | 55 | 20 |
| PD-E | Bankruptcy Restructuring | 60 | 85 | 35 | 10 |
| PD-F | Combined Restructuring | 60 | 80 | 70 | 20 |

## S9_Stakeholders

| Column A | Column B | Column C | Column D | Column E |
| --- | --- | --- | --- | --- |
| Screen 9 — Nhóm ưu tiên (chọn đúng 3 trong 7) |  |  |  |  |
| Cột D/E = điểm Ổn định Quản trị nếu nhóm được / không được ưu tiên (Governance & Family: +2 / −1). Điểm Tài chính theo nhóm ở M8/M9 (S10). Mã GR-x do file này đặt vì case gốc chỉ có tên nhóm. |  |  |  |  |
| ID | Nhóm | Được ưu tiên nghĩa là… | Δ GS nếu ưu tiên | Δ GS nếu KHÔNG ưu tiên |
| GR-1 | Suppliers | Đàm phán điều khoản trước khi công bố | 0 | 0 |
| GR-2 | Employees | Trấn an nội bộ, giữ nhân sự chủ chốt | 0 | 0 |
| GR-3 | Customers | Giữ niềm tin mua sắm | 0 | 0 |
| GR-4 | Creditors | Đàm phán sớm điều khoản nợ | 0 | 0 |
| GR-5 | Landlords | Giữ quan hệ thuê mặt bằng | 0 | 0 |
| GR-6 | Holiday Inventory | Đảm bảo hàng hóa mùa cao điểm | 0 | 0 |
| GR-7 | Governance & Family | Giữ ban điều hành ổn định; báo trước cổ đông gia đình nhỏ lẻ | 2 | -1 |

## M6_Tx_x_Stake

| Column A | Column B | Column C | Column D | Column E | Column F | Column G | Column H | Column I | Column J |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Matrix M6 — Phác đồ (Màn 7) × Nhóm ưu tiên (Màn 9): giá trị ưu tiên |  |  |  |  |  |  |  |  |  |
| Tổng 3 nhóm đã chọn ÷ top-3 tốt nhất của phác đồ (cột J) × 100 = Stakeholder score (50% Execution). |  |  |  |  |  |  |  |  |  |
| Phác đồ ↓ / Nhóm → |  | Suppliers | Employees | Customers | Creditors | Landlords | Holiday Inventory | Governance & Family |  |
| ID | Option | GR-1 | GR-2 | GR-3 | GR-4 | GR-5 | GR-6 | GR-7 | Top-3 max |
| PD-A | Invest to Compete | 15 | 10 | 25 | 15 | 20 | 25 | 15 | =LARGE(C6:I6,1)+LARGE(C6:I6,2)+LARGE(C6:I6,3) |
| PD-B | Deep Cost Cutting | 15 | 25 | 10 | 15 | 20 | 5 | 10 | 60 |
| PD-C | Debt Restructuring | 15 | 10 | 10 | 30 | 10 | 15 | 25 | 70 |
| PD-D | Asset Sale | 10 | 15 | 10 | 20 | 25 | 15 | 25 | 70 |
| PD-E | Bankruptcy Restructuring | 30 | 15 | 20 | 25 | 25 | 15 | 15 | 80 |
| PD-F | Combined Restructuring | 20 | 15 | 15 | 25 | 15 | 15 | 25 | 70 |

## S10_Consequence

| Column A | Column B | Column C | Column D | Column E | Column F | Column G | Column H | Column I |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Screen 10–12 — Điểm Sức khỏe Tài chính & Diễn biến (rules từ USER_FLOW gốc) |  |  |  |  |  |  |  |  |
| Điểm Tài chính = M7 (theo PD × TG) + Σ M8/M9 theo từng nhóm được / không được ưu tiên. Dùng phác đồ CUỐI CÙNG hiệu lực. Tier: xem Config. |  |  |  |  |  |  |  |  |
| M7 — Điểm Tài chính cơ bản: Phác đồ × Thời điểm (TG-D = −1) |  |  |  |  |  |  |  |  |
| M7: Phác đồ ↓ / Thời điểm → |  | Thực hiện ngay | Sau holiday season | Thử tái cấp vốn trước khi cam kết kế hoạch | Chờ 6 tháng |  |  |  |
| ID | Option | TG-A | TG-B | TG-C | TG-D |  |  |  |
| PD-A | Invest to Compete | 2 | 2 | 2 | 1 |  |  |  |
| PD-B | Deep Cost Cutting | 3 | 3 | 3 | 2 |  |  |  |
| PD-C | Debt Restructuring | 0 | 0 | 0 | -1 |  |  |  |
| PD-D | Asset Sale | 2 | 2 | 2 | 1 |  |  |  |
| PD-E | Bankruptcy Restructuring | 0 | 0 | 0 | -1 |  |  |  |
| PD-F | Combined Restructuring | 4 | 4 | 4 | 3 |  |  |  |
| M8 — Điểm Tài chính KHI nhóm ĐƯỢC ưu tiên (Phác đồ × Nhóm) |  |  |  |  |  |  |  |  |
| M8: Phác đồ ↓ / Nhóm → |  | Suppliers | Employees | Customers | Creditors | Landlords | Holiday Inventory | Governance & Family |
| ID | Option | GR-1 | GR-2 | GR-3 | GR-4 | GR-5 | GR-6 | GR-7 |
| PD-A | Invest to Compete | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| PD-B | Deep Cost Cutting | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| PD-C | Debt Restructuring | 0 | 0 | 0 | 2 | 0 | 0 | 0 |
| PD-D | Asset Sale | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| PD-E | Bankruptcy Restructuring | 1 | 0 | 0 | 0 | 0 | 0 | 0 |
| PD-F | Combined Restructuring | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| M9 — Điểm Tài chính KHI nhóm KHÔNG được ưu tiên (Phác đồ × Nhóm) |  |  |  |  |  |  |  |  |
| M9: Phác đồ ↓ / Nhóm → |  | Suppliers | Employees | Customers | Creditors | Landlords | Holiday Inventory | Governance & Family |
| ID | Option | GR-1 | GR-2 | GR-3 | GR-4 | GR-5 | GR-6 | GR-7 |
| PD-A | Invest to Compete | 0 | 0 | 0 | 0 | 0 | -1 | 0 |
| PD-B | Deep Cost Cutting | 0 | 0 | 0 | 0 | 0 | -1 | 0 |
| PD-C | Debt Restructuring | 0 | 0 | 0 | 0 | 0 | -1 | 0 |
| PD-D | Asset Sale | 0 | 0 | 0 | 0 | 0 | -1 | 0 |
| PD-E | Bankruptcy Restructuring | -2 | 0 | 0 | 0 | 0 | -1 | 0 |
| PD-F | Combined Restructuring | 0 | 0 | 0 | 0 | 0 | -1 | 0 |
| Diễn biến Màn 10 — sự kiện & việc có 'dữ liệu mới' để biện minh cho Tái khám (Màn 11) |  |  |  |  |  |  |  |  |
| ID | Diễn biến (tab) | Điều kiện kích hoạt | Biện minh đổi PHÁC ĐỒ (1/0) | Biện minh đổi CHẨN ĐOÁN (1/0) |  | Tường thuật |  |  |
| E1 | Store Update: đóng thêm cửa hàng ngoài kế hoạch | PD hiệu lực = PD-B + TG-A + KHÔNG ưu tiên Employees | 1 | 0 |  | Thiếu nhân sự quản lý nên phải đóng thêm cửa hàng. |  |  |
| E2 | Liquidity Update: board hạ kế hoạch xuống PD-B | Chọn PD-A/PD-F nhưng Uy tín không đủ (Màn 7) | 1 | 0 |  | Board đã tự hạ kế hoạch xuống mức PD-B tối thiểu. |  |  |
| E3 | Debt Update: chủ nợ gia hạn nhưng tăng lãi 1.0–1.5% | PD-C + ưu tiên Creditors | 0 | 0 |  | Thỏa thuận đạt được với giá lãi suất cao hơn. |  |  |
| E4 | Family/Board Update: Michael & Richard họp riêng, bỏ phiếu chống David | KHÔNG ưu tiên Governance & Family và chẩn đoán ≠ CD-F | 1 | 1 |  | Nếu đã mở HS-G: Michael dùng đúng thông tin đã lộ để thuyết phục thêm cổ đông. Bằng chứng mâu thuẫn với chẩn đoán chỉ nhìn thị trường/vận hành. |  |  |
| E5 | Vendor Update: nhà cung cấp đòi cash-in-advance | PD-E + KHÔNG ưu tiên Suppliers | 1 | 0 |  | Vendor siết điều khoản vì lo ngại phá sản. |  |  |
| E6 | Debt Update: thị trường đọc là tín hiệu yếu | TG-C + KHÔNG ưu tiên Creditors (refinance thử thất bại) | 1 | 0 |  | Refinance thử thất bại; trái phiếu và điều kiện vay xấu đi. |  |  |
| E7 | Liquidity Update: runway cạn dần | Chọn TG-D (Chờ 6 tháng) | 1 | 0 |  | Cải thiện vận hành chưa kịp phát huy trước khi hết runway. |  |  |
| E8 | Debt Update: phản bác CD-A | Chọn CD-A, chưa mở HS-D | 0 | 1 |  | Dù traffic đã ổn định trở lại, lãi vay vẫn ăn gần hết Operating Earnings — vấn đề không chỉ nằm ở sales. |  |  |
| E9 | Liquidity Update: phản bác CD-B | Chọn CD-B, chưa mở HS-C | 0 | 1 |  | Dù CapEx được cấp đủ, biên an toàn covenant vẫn mỏng — mạng lưới cửa hàng không phải nút thắt duy nhất. |  |  |
| E10 | Debt Update: phản bác CD-C | Chọn CD-C, chưa mở HS-D | 0 | 1 |  | Refinance chỉ mua thêm thời gian — nếu không xử lý cấu trúc nợ, biên thanh khoản sẽ mỏng trở lại sau vài quý. |  |  |
| E11 | Sales Update: phản bác CD-E | Chọn CD-E, chưa mở HS-D | 0 | 1 |  | Category truyền thống đã phục hồi nhẹ, nhưng đòn bẩy tài chính vẫn ở mức nguy hiểm. |  |  |
| E12 | Store Update: hệ quả ưu tiên Employees | Ưu tiên Employees ở Màn 9 | 0 | 0 |  | Nhân sự chủ chốt được giữ lại giúp quá trình đóng cửa hàng diễn ra suôn sẻ hơn, giảm rủi ro đóng cửa ngoài kế hoạch. |  |  |
| E13 | Sales Update: hệ quả ưu tiên Customers | Ưu tiên Customers ở Màn 9 | 0 | 0 |  | Khách hàng tiếp tục mua sắm bình thường dù có tin đồn tái cấu trúc gia đình. |  |  |
| E14 | Store Update: hệ quả ưu tiên Landlords | Ưu tiên Landlords ở Màn 9 | 0 | 0 |  | Chủ nhà đồng ý gia hạn thêm một số hợp đồng thuê, giảm áp lực phải đóng cửa hàng. |  |  |

## S11_Reassess

| Column A | Column B | Column C | Column D | Column E |
| --- | --- | --- | --- | --- |
| Screen 11 — Tái khám (quyết định × tình huống) |  |  |  |  |
| Tình huống: WEAK = chẩn đoán đầu ≠ CD-D và ≠ CD-F; STRONG = chẩn đoán đúng và phác đồ hiệu lực có độ phù hợp ≥ ngưỡng (Config); PARTIAL = còn lại. Reassessment = 70% chọn quyết định + 30% chất lượng phán đoán cuối − phạt mỗi lần đổi thiếu căn cứ. |  |  |  |  |
| Quyết định ↓ / Tình huống → |  |  |  |  |
| Quyết định | Ý nghĩa | Strong | Partial | Weak |
| Keep | Giữ nguyên chẩn đoán & phác đồ | 95 | 40 | 15 |
| Revise Diagnosis | Đổi chẩn đoán | 40 | 25 | 70 |
| Revise Treatment | Đổi phác đồ | 55 | 95 | 35 |
| Revise Both | Đổi cả hai | 30 | 60 | 95 |
| Chi phí Uy tín (USER_FLOW gốc): đổi chẩn đoán / đổi phác đồ = −1 Uy tín nếu không dựa trên dữ liệu mới từ Màn 10; 0 nếu có (xem cột biện minh ở S10). Mỗi lần mất Uy tín còn −1 Quản trị. |  |  |  |  |
| Validation: nếu chọn 'Revise …' phải điền chẩn đoán / phác đồ mới → 'Complete your revised decision before closing the case.' |  |  |  |  |

## Endings

| Column A | Column B | Column C | Column D |
| --- | --- | --- | --- |
| Màn 12 — Ma trận 3×3 kết cục cuối (Tài chính × Quản trị/Gia tộc) |  |  |  |
| Hàng = tier Sức khỏe Tài chính; cột = tier Ổn định Quản trị. Uy tín KHÔNG đổi ô, chỉ đổi cách mô tả người chơi (bảng dưới). |  |  |  |
| Tài chính ↓ / Gia tộc → |  |  |  |
| Tài chính \ Gia tộc | Gia tộc đoàn kết | Gia tộc chia rẽ, chưa vỡ | Mất kiểm soát |
| Ổn định tài chính | "Người kế nghiệp" — David giữ ghế, công ty ổn định, gia đình miễn cưỡng hợp tác. | "Hưu chiến có điều kiện" — công ty ổn nhưng David nhượng bớt quyền lực/cổ tức để giữ hòa khí. | "Thắng trận, thua nhà" — công ty khỏe nhưng David bị phế truất hoặc buộc bán rẻ cổ phần cho Houndstooth. |
| Ổn định mong manh | "Cầm cự cùng nhau" — công ty sống nhưng mỏng manh; gia đình đoàn kết vì cùng chung rủi ro. | "Chia phần trước khi chìm" — công ty nhỏ hơn hẳn; Michael/Richard rút được phần lớn giá trị; David bị ép nhượng bộ. | "Tự ăn thịt mình" — công ty còn tồn tại về kỹ thuật nhưng gia đình tan đàn xẻ nghé, kiện tụng tiêu tốn vốn còn lại. |
| Sụp đổ tài chính | "Chết trong danh dự" — công ty phá sản/bị tiếp quản nhưng ba anh em cùng chịu trách nhiệm, không đổ lỗi nhau. | "Quân cờ của quỹ" — Houndstooth hoặc chủ nợ tiếp quản; gia đình đấu đá đến phút cuối. | "Sụp đổ toàn diện" — tòa án tiếp quản tài sản, ba anh em kiện nhau ngay trong phiên tòa phá sản. |
| Vai trò của Uy tín (mô tả người chơi trong ô kết cục) |  |  |  |
| Uy tín | Mô tả |  |  |
| Cao | Được báo chí và hội đồng mô tả là bác sĩ phẫu thuật lạnh lùng, quyết đoán đúng lúc. |  |  |
| Trung bình | Được ghi nhận là làm việc chắc tay nhưng chưa thuyết phục hoàn toàn. (mô tả đề xuất) |  |  |
| Thấp | Bị coi là may mắn hơn là giỏi; hội đồng vẫn còn nghi ngờ năng lực. |  |  |

## Feedback

| Column A | Column B | Column C | Column D | Column E | Column F | Column G |
| --- | --- | --- | --- | --- | --- | --- |
| Feedback templates — Result → Reason → Meaning → Action → Limit |  |  |  |  |  |  |
| Ngưỡng band ở Config (High ≥ 80, Mid ≥ 50). Result sinh từ điểm; 4 trường còn lại là mẫu. |  |  |  |  |  |  |
| Key | Dimension | Band | Reason | Meaning | Action | Limit |
| =B5&"\|"&C5 | Investigation | High | Bạn phủ được các khu vực then chốt (nợ 2015, thanh khoản, quản trị) và dùng câu hỏi bổ sung vào khu vực chưa mở. | Chẩn đoán của bạn dựa trên dữ kiện thay vì suy đoán. | Tiếp tục dùng câu hỏi để thu hẹp khoảng trống thông tin, không lặp lại khu vực đã có hồ sơ. | Chỉ được mở 3/7 hồ sơ nên luôn còn khu vực chưa thấy — đó là thiết kế. |
| Investigation\|Mid | Investigation | Mid | Bạn có một phần bằng chứng cốt lõi nhưng bỏ sót khu vực quan trọng hoặc lặp câu hỏi ở khu vực đã mở. | Chẩn đoán có thể chỉ được ủng hộ một phần. | Chọn hồ sơ bao phủ nợ/thanh khoản/quản trị; dùng 2 câu hỏi cho khu vực còn trống. | Điểm dựa trên thiết kế case; các đường điều tra khác vẫn có thể hợp lệ. |
| Investigation\|Low | Investigation | Low | Phần lớn lựa chọn nằm ở khu vực ít giải thích áp lực tài chính hoặc bị trùng lặp. | Chẩn đoán xây trên nền bằng chứng mỏng. | Đọc kỹ các con số (lãi vay ≈ Operating Earnings) trước khi chọn hồ sơ. | Vẫn hoàn thành được case; hậu quả thể hiện qua điểm, không chặn game. |
| Diagnosis\|High | Diagnosis | High | Chẩn đoán của bạn chạm tới tầng cấu trúc sâu nhất (Nguyên nhân Cấu trúc / Đa yếu tố có đủ điều kiện) và có bằng chứng ủng hộ. | Bạn phân biệt được nguyên nhân với triệu chứng, không dừng ở tầng bề mặt. | Luôn hỏi: vấn đề này xảy ra trước hay là hệ quả? | 6 chẩn đoán là 6 TẦNG của cùng vấn đề, không phải đúng/sai; điểm cao hơn vì chạm tầng sâu, không vì 'đoán trúng đáp án'. |
| Diagnosis\|Mid | Diagnosis | Mid | Chẩn đoán chỉ ra một vấn đề có thật nhưng là hệ quả/triệu chứng hoặc thiếu bằng chứng. | Phác đồ nhắm vào triệu chứng có thể không chữa được bệnh. | Truy ngược về giao dịch 2015 và cấu trúc nợ. | CD-F cần HS-D và ≥1 hồ sơ liên quan, nếu không bị phạt Uy tín. |
| Diagnosis\|Low | Diagnosis | Low | Chẩn đoán thiếu bằng chứng hoặc là một giả thuyết bị các dữ kiện bác bỏ. | Mọi phác đồ dựng trên đó dễ đi sai hướng. | So chẩn đoán với hồ sơ đã mở trước khi nộp. | Có thể sửa ở Màn 11 nhưng có thể mất Uy tín. |
| Treatment\|High | Treatment | High | Phác đồ (sau khi qua điều kiện Uy tín) khớp gốc rễ và chẩn đoán của bạn. | Kế hoạch xử lý đúng chỗ thanh khoản/nợ bị kẹt. | Thử xem thời điểm và nhóm ưu tiên thay đổi hậu quả thế nào. | Không phác đồ nào thắng mọi trục; hậu quả còn phụ thuộc thực thi. |
| Treatment\|Mid | Treatment | Mid | Phác đồ giải quyết một phần vấn đề hoặc bị hạ cấp do thiếu Uy tín. | Có thể mua thời gian nhưng chưa gỡ nguyên nhân. | Cân nhắc phác đồ kết hợp nếu đủ Uy tín. | PD-A cần Uy tín ≥ TB, PD-F cần Uy tín Cao. |
| Treatment\|Low | Treatment | Low | Phác đồ không khớp vấn đề thật. | Có thể tiêu tốn cash/thời gian công ty không có. | Đọc lại chẩn đoán và hỏi phác đồ nào tác động đúng nguyên nhân đó. | Độ khớp được chấm theo thiết kế case, không theo lý thuyết chung. |
| Execution\|High | Execution | High | Thời điểm và nhóm ưu tiên phù hợp với phác đồ. | Kế hoạch vừa đúng vừa triển khai được. | Tiếp tục nối phác đồ với đúng nhóm phải thuyết phục. | Phản ứng của Michael/chủ nợ thực tế có thể khó đoán hơn mô hình. |
| Execution\|Mid | Execution | Mid | Thời điểm hoặc nhóm ưu tiên chỉ hỗ trợ một phần phác đồ. | Phác đồ tốt vẫn có thể yếu đi vì sai thứ tự. | Tự hỏi ai phải đồng ý để phác đồ chạy, và khi nào. | Chỉ chọn 3/7 nhóm — đánh đổi là chủ đích. |
| Execution\|Low | Execution | Low | Thời điểm/nhóm ưu tiên đi ngược phác đồ (ví dụ bỏ Governance khi Michael đang chờ cơ hội). | Kế hoạch khó thực hiện. | Chọn thời điểm theo runway và holiday; ưu tiên nhóm kiểm soát kết quả. | Kế hoạch yếu không chặn case, chỉ giảm điểm. |
| Reassessment\|High | Reassessment | High | Bạn giữ hoặc đổi phán đoán đúng với dữ liệu mới từ Màn 10. | Linh hoạt nghề nghiệp mà không phản ứng thái quá. | Luôn kiểm tra dữ liệu mới xác nhận hay mâu thuẫn chẩn đoán. | Đổi có dữ liệu mới thì không mất Uy tín; đổi không có thì −1. |
| Reassessment\|Mid | Reassessment | Mid | Tái khám chỉ khớp một phần với dữ liệu mới. | Có thể giữ phán đoán yếu hoặc đổi phán đoán tốt. | Hỏi: sự kiện nào ở Màn 10 thật sự mâu thuẫn chẩn đoán? | Một số đổi là phán đoán chủ quan; điểm từng phần là chủ đích. |
| Reassessment\|Low | Reassessment | Low | Tái khám không khớp dữ liệu mới hoặc bị trừ Uy tín vì đổi thiếu căn cứ. | Bỏ qua hoặc phản ứng thái quá làm giảm độ tin cậy. | Quyết định chẩn đoán sai hay chỉ phác đồ sai trước khi đổi. | Có thể chơi lại để thử đường tái khám khác. |
