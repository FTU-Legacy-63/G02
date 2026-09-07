# FINANCIAL CLINIC — Checkpoint Tuần 3

> Học phần: **NHA408E**  
> Nhóm: **G08**

---

# WEEK 3 — INPUT, INFORMATION AND EVIDENCE READINESS

---

## 1. Mục tiêu của Week 3

Câu hỏi trung tâm của Week 3 là:

> **Financial Clinic cần những thông tin nào để tạo ra Financial Diagnosis Report và Treatment Recommendation, các thông tin đó được tổ chức như thế nào, và chúng có đủ khả thi để chuyển sang xây dựng logic ở Week 4 hay không?**

Week 1 đã xác định **Financial Diagnosis & Treatment Advisory** là problem direction. Week 2 đã xác định sản phẩm là một **Visual Novel Financial Diagnosis Game**, với main output là **Financial Diagnosis Report + Treatment Recommendation**.

Week 3 cụ thể hóa bốn nhóm thông tin từ `SOLUTION_STRUCTURE.md`:

1. **Client Profile Information**: giúp người chơi hiểu bối cảnh và vấn đề của client.
2. **Financial Statement Information**: giúp người chơi phân tích sức khỏe tài chính.
3. **Diagnosis & Treatment Information**: giúp người chơi chẩn đoán và kê đơn.
4. **Consequence & Learning Evidence**: giúp người chơi hiểu hậu quả và rút ra bài học.

---

## 2. Data Scope và Data Type

### Operational Data

Operational data là dữ liệu trực tiếp được game sử dụng để tạo ra Diagnosis Report và Treatment Recommendation. Toàn bộ operational data là **simulated data do nhóm tự xây dựng**, vì sản phẩm là educational prototype.

Operational data bao gồm:
- dữ liệu client profile và background;
- báo cáo tài chính (Income Statement, Balance Sheet, Cash Flow);
- các chỉ số tài chính (DSO, Current Ratio, Quick Ratio, D/E, ICR, v.v.);
- ngưỡng an toàn và cảnh báo;
- các diagnosis option và evidence mapping;
- treatment option và consequence mapping;
- learning objective và bài học rút ra.

### Problem Evidence

Problem evidence không dùng để tính toán trong game. Nó dùng để chứng minh problem direction của Week 1: sinh viên tài chính hiểu lý thuyết nhưng thiếu kỹ năng thực hành chẩn đoán và tư vấn tài chính cho doanh nghiệp.

---

## 3. Input Dictionary

### 3.1. Client Profile Information

| Input name | Meaning | Type | Unit | Example | Validation | Owner |
|---|---|---|---|---|---|---|
| client_name | Tên client | text | — | Jungkook | không rỗng | Writer |
| client_age | Tuổi client | number | years | 28 | >18 | Writer |
| client_industry | Ngành nghề | category | — | Xây dựng & Thương mại | thuộc danh sách | Writer |
| client_employee_count | Số nhân viên | number | người | 150 | >0 | Writer |
| client_communication_style | Phong cách giao tiếp | category | — | Tự tin nhưng tội lỗi | thuộc danh sách | Writer |
| client_bias | Bias ảnh hưởng quyết định | text | — | "Vay thêm là giải pháp duy nhất" | không rỗng | Writer |
| client_fear | Nỗi sợ của client | text | — | Sợ anh trai biết sự thật | không rỗng | Writer |
| client_initial_request | Yêu cầu ban đầu | text | — | "Giúp tôi vay 15 tỷ" | không rỗng | Writer |
| client_secret | Bí mật chưa tiết lộ | text | — | "Đã xóa tên anh trai khỏi giấy phép" | có thể null | Writer |

### 3.2. Financial Statement Information

#### Income Statement

| Input name | Meaning | Type | Unit | Example | Validation | Owner |
|---|---|---|---|---|---|---|
| revenue | Doanh thu thuần | number | Tỷ VND | 185 | >0 | Finance |
| cost_of_goods_sold | Giá vốn hàng bán | number | Tỷ VND | 148 | >0, < revenue | Finance |
| gross_profit | Lợi nhuận gộp | number | Tỷ VND | 37 | = revenue - COGS | Finance |
| selling_expense | Chi phí bán hàng | number | Tỷ VND | 15 | ≥0 | Finance |
| admin_expense | Chi phí quản lý | number | Tỷ VND | 12 | ≥0 | Finance |
| ebitda | EBITDA | number | Tỷ VND | 10 | = gross profit - selling - admin | Finance |
| depreciation | Khấu hao | number | Tỷ VND | 2 | ≥0 | Finance |
| ebit | EBIT | number | Tỷ VND | 8 | = EBITDA - depreciation | Finance |
| interest_expense | Chi phí lãi vay | number | Tỷ VND | 0.5 | ≥0 | Finance |
| ebt | Lợi nhuận trước thuế | number | Tỷ VND | 7.5 | = EBIT - interest | Finance |
| tax | Thuế (20%) | number | Tỷ VND | 1.5 | = EBT × 20% | Finance |
| net_income | Lợi nhuận sau thuế | number | Tỷ VND | 6.0 | = EBT - tax | Finance |

#### Balance Sheet

| Input name | Meaning | Type | Unit | Example | Validation | Owner |
|---|---|---|---|---|---|---|
| cash | Tiền & tương đương | number | Tỷ VND | 1.2 | ≥0 | Finance |
| accounts_receivable | Khoản phải thu | number | Tỷ VND | 116 | ≥0 | Finance |
| inventory | Hàng tồn kho | number | Tỷ VND | 24 | ≥0 | Finance |
| other_current_assets | TSNH khác | number | Tỷ VND | 0.8 | ≥0 | Finance |
| total_current_assets | Tổng TSNH | number | Tỷ VND | 142 | = sum | Finance |
| fixed_assets | Tài sản cố định | number | Tỷ VND | 25 | ≥0 | Finance |
| long_term_investments | Đầu tư dài hạn | number | Tỷ VND | 3 | ≥0 | Finance |
| total_assets | Tổng tài sản | number | Tỷ VND | 170 | = total_current_assets + fixed + long_term | Finance |
| short_term_debt | Nợ ngắn hạn (ngân hàng) | number | Tỷ VND | 0 | ≥0 | Finance |
| accounts_payable | Phải trả NCC | number | Tỷ VND | 60 | ≥0 | Finance |
| accruals | Chi phí phải trả | number | Tỷ VND | 4 | ≥0 | Finance |
| black_debt | Nợ đen | number | Tỷ VND | 8 | ≥0 | Finance |
| total_current_liabilities | Tổng nợ ngắn hạn | number | Tỷ VND | 80 | = sum | Finance |
| long_term_debt | Nợ dài hạn | number | Tỷ VND | 20 | ≥0 | Finance |
| total_liabilities | Tổng nợ | number | Tỷ VND | 100 | = current_liabilities + long_term_debt | Finance |
| equity_capital | Vốn góp | number | Tỷ VND | 65 | >0 | Finance |
| retained_earnings | Lợi nhuận giữ lại | number | Tỷ VND | 25 | ≥0 | Finance |
| total_equity | Tổng VCSH | number | Tỷ VND | 90 | = equity_capital + retained_earnings | Finance |

#### Cash Flow Statement

| Input name | Meaning | Type | Unit | Example | Validation | Owner |
|---|---|---|---|---|---|---|
| cash_received_customers | Tiền thu từ KH | number | Tỷ VND | 69 | ≥0 | Finance |
| cash_paid_suppliers | Tiền trả NCC | number | Tỷ VND | 68 | ≥0 | Finance |
| cash_paid_employees | Tiền trả lương | number | Tỷ VND | 12 | ≥0 | Finance |
| cash_paid_interest | Tiền trả lãi vay | number | Tỷ VND | 0.5 | ≥0 | Finance |
| cash_paid_tax | Tiền nộp thuế | number | Tỷ VND | 3 | ≥0 | Finance |
| cash_flow_operations | Dòng tiền HĐKD | number | Tỷ VND | -14.5 | = sum | Finance |
| capex | Chi mua TSCĐ | number | Tỷ VND | 3 | ≥0 | Finance |
| cash_flow_investing | Dòng tiền HĐĐT | number | Tỷ VND | -3 | = -capex | Finance |
| black_debt_proceeds | Tiền nhận từ vay đen | number | Tỷ VND | 8 | ≥0 | Finance |
| cash_flow_financing | Dòng tiền HĐTC | number | Tỷ VND | 8 | = black_debt_proceeds | Finance |
| net_cash_change | Thay đổi tiền thuần | number | Tỷ VND | -0.8 | = CFO + CFI + CFF | Finance |
| cash_beginning | Tiền đầu kỳ | number | Tỷ VND | 2.0 | ≥0 | Finance |
| cash_ending | Tiền cuối kỳ | number | Tỷ VND | 1.2 | = cash_beginning + net_cash_change | Finance |

### 3.3. Diagnosis & Treatment Information

#### Financial Metrics

| Input name | Meaning | Formula | Giá trị | Ngưỡng an toàn | Unit | Owner |
|---|---|---|---|---|---|---|
| dso | Days Sales Outstanding | (AR/Revenue) × 365 | 229 | <60 | ngày | Finance |
| current_ratio | Current Ratio | TSNH/NNH | 1.78 | >1.5 | lần | Finance |
| quick_ratio | Quick Ratio | (Cash)/NNH | 0.015 | >0.5 | lần | Finance |
| debt_to_equity | D/E Ratio | Total Debt/Equity | 0.89 | <2.0 | lần | Finance |
| interest_coverage | Interest Coverage Ratio | EBIT/Interest | 16 | >3.0 | lần | Finance |
| gross_margin | Gross Margin | (Revenue-COGS)/Revenue | 20% | >15% | % | Finance |
| net_profit_margin | Net Profit Margin | Net Income/Revenue | 3.24% | >5% | % | Finance |
| ocf_to_ni | OCF/NI Ratio | OCF/Net Income | 0.75 | >1.0 | lần | Finance |
| ar_to_revenue | AR/Revenue | AR/Revenue | 62.7% | <30% | % | Finance |
| black_debt_interest_rate | Lãi suất nợ đen | - | 5% | <1% | %/tháng | Finance |
| black_debt_interest_annual | Lãi nợ đen/năm | Black Debt × 5% × 12 | 4.8 | - | Tỷ VND | Finance |
| profit_eaten_ratio | % LN bị bào mòn | Black Debt Interest / Net Income | 73.8% | <20% | % | Finance |

#### Diagnosis Options

| ID | Tên chẩn đoán | Root cause? | Evidence required |
|---|---|---|---|
| D-01 | Khủng hoảng dòng tiền do công nợ | ✅ | DSO>60, CFO<0, AR/DT>30% |
| D-02 | Trầm cảm tài chính | ❌ | Không có evidence tài chính |
| D-03 | Nợ xấu | ❌ | Chỉ có nợ đen, thiếu evidence về dòng tiền |
| D-04 | Sĩ diện | ❌ | Không có evidence tài chính |

#### Treatment Options

| ID | Tên phác đồ | Root cause? | Financial benefit | Feasibility |
|---|---|---|---|---|
| T-01 | Vay thêm nợ đen | ❌ | Có 9 tỷ ngay | Cao |
| T-02 | Thu hồi công nợ - chiết khấu 5% | ✅ | Thu 60 tỷ trong 30 ngày | Trung bình |
| T-03 | Gọi anh trai - cầu cứu | ✅ | Vay 15 tỷ lãi thấp | Thấp |
| T-04 | Kết hợp thu hồi nợ + gọi anh trai | ✅ | Thu 60 tỷ + vay 15 tỷ | Thấp nhất |

---

## 4. Source Register

### Operational Sources

| Source | Information used | Purpose | Limitation | Owner |
|---|---|---|---|---|
| Simulated Financial Statements | Revenue, NI, AR, Inventory, Cash, CFO | Financial Diagnosis | Dữ liệu giả lập | Finance |
| Simulated Financial Metrics | DSO, Current Ratio, Quick Ratio, D/E | Diagnosis Classification | Tính từ dữ liệu giả lập | Finance |
| Simulated Client Profile | Client background, communication style | Storyline và giao tiếp | Nhân vật giả lập | Writer |
| Simulated Diagnosis & Treatment Options | Diagnosis ID, Treatment ID | Core Gameplay Logic | Thiết kế cho learning flow | Finance/Game |

### Problem Evidence Status

| Evidence | Purpose | Status | Owner |
|---|---|---|---|
| Week 1 initial observation | Hỗ trợ assumption sinh viên thiếu kỹ năng thực hành | Có | Team |
| User observation / short test | Kiểm tra Financial Diagnosis difficulty | Cần bổ sung | Team |

---

## 5. Data Structure

```text
data/
  client-profiles.json
  financial-statements.json
  financial-metrics.json
  diagnosis-options.json
  treatment-options.json
  consequences.json
  dialogs.json
