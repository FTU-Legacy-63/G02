# MEDIFIN - SOLUTION STRUCTURE

## 1. User → Input → Process → Output → User Action

Đây là luồng tổng thể của sản phẩm:

> **User → Client Scenario & Financial Information → Investigate & Diagnose & Treat → Consequence & Learning Feedback → Apply Learning to Next Case**

### User

Sinh viên Tài chính – Ngân hàng có kiến thức tài chính cơ bản và muốn thực hành công việc của **Financial Counselor**.

↓

### Input

Người chơi nhận một tình huống khách hàng gồm:

- Câu chuyện và hoàn cảnh khách hàng.
- Triệu chứng/vấn đề khách hàng đang trình bày.
- Một số thông tin tài chính ban đầu.
- Các nguồn thông tin có thể điều tra thêm.

↓

### Process

Người chơi:

1. Tiếp nhận vấn đề.
2. Lựa chọn thông tin cần điều tra.
3. Phân tích các bằng chứng tài chính.
4. Chẩn đoán nguyên nhân gốc rễ.
5. Lựa chọn phương án xử lý.
6. Giao tiếp/tư vấn với khách hàng.

↓

### Output

Người chơi nhận:

- Kết quả chẩn đoán.
- Đánh giá phương án tư vấn.
- Hậu quả tài chính từ quyết định.
- Điểm đánh giá năng lực.
- Giải thích những gì làm tốt/chưa tốt.

↓

### User Action

Người chơi sử dụng feedback để:

- Hiểu lỗi trong quá trình tư vấn.
- Điều chỉnh cách ra quyết định.
- Tiếp tục xử lý tình huống tiếp theo.

---

## 2. Initial Required Information

Để một scenario hoạt động, ban đầu game cần **4 nhóm thông tin**.

### A. Client Information

Thông tin về khách hàng:

- Loại khách hàng: cá nhân/doanh nghiệp.
- Hoàn cảnh.
- Mục tiêu tài chính.
- Vấn đề khách hàng đang gặp.
- Các ràng buộc và mối quan tâm.

### B. Financial Information

Tùy từng case, có thể bao gồm:

- Income Statement.
- Balance Sheet.
- Cash Flow Statement.
- Accounts Receivable.
- Inventory.
- Loan Information.
- Income & Expenses.
- Investment Portfolio.

> **Không phải case nào cũng cần tất cả. Người chơi phải xác định thông tin nào thực sự cần thiết.**

### C. Scenario Information

Mỗi case cần xác định:

> **Scenario → State → Choice → Consequence → Feedback → Next State**

**Ví dụ:**

- **State:** Công ty có lợi nhuận nhưng thiếu tiền.
- **Choice:** Kiểm tra Accounts Receivable.
- **Consequence:** Phát hiện DSO = 162 ngày.
- **Next State:** Người chơi có thêm bằng chứng để chẩn đoán.

### D. Decision Set

Mỗi case có 4 nhóm quyết định:

| Decision | Ý nghĩa |
|---|---|
| **Investigation** | Người chơi quyết định cần tìm thông tin gì |
| **Diagnosis** | Xác định vấn đề tài chính cốt lõi |
| **Treatment** | Lựa chọn giải pháp tài chính |
| **Communication** | Lựa chọn cách tư vấn/giao tiếp với khách hàng |

---

## 3. Core Process Type

### Product Pattern

> **Scenario-Based Decision Simulation**

### Core Process

Core process của game:

> **OBSERVE → INVESTIGATE → DIAGNOSE → TREAT → CONSEQUENCE → LEARN → NEXT STATE**

### Observe

Khách hàng trình bày **triệu chứng**, không đưa ra sẵn vấn đề thật sự.

### Investigate

Người chơi quyết định:

- Hỏi khách hàng điều gì?
- Xem tài liệu nào?
- Phân tích chỉ số nào?

### Diagnose

Dựa trên bằng chứng thu thập được, người chơi xác định **root cause**.

### Treat

Người chơi lựa chọn giải pháp phù hợp với tình hình khách hàng.

### Consequence

Game mô phỏng hậu quả của quyết định.

### Learn

Game giải thích:

- Người chơi làm đúng ở đâu.
- Sai hoặc bỏ sót điều gì.
- Vì sao quyết định tạo ra hậu quả đó.

### Next State

Tình hình khách hàng thay đổi và có thể tạo ra quyết định tiếp theo.

---

## 4. MVP Flow

### Proposed MVP Case

**“The Profitable Company That Is Running Out of Cash”**

### 1. Client Introduction

Một SME đến gặp Financial Counselor với **goal được nói ra trực tiếp** và một chi tiết nhỏ chưa được giải thích rõ nhằm gợi mở cho player tự điều tra:

> “Doanh thu và lợi nhuận của công ty đều tăng nhưng chúng tôi liên tục thiếu tiền. Tôi nghĩ công ty cần vay thêm. Kế toán cũ mới nghỉ nên sổ sách hơi rối, nhưng chắc không sao.”

---

### 2. Investigation

Player được lựa chọn **tối đa 4 trong 6 nguồn thông tin**, tạo giới hạn điều tra và buộc phải chọn lọc:

- Cash Flow Statement
- AR Aging
- Inventory
- Debt
- Supplier Payment Terms
- Client Interview

Mỗi nguồn có thể cung cấp một trong ba loại thông tin:

- **Critical:** Cần thiết để chẩn đoán đúng.
- **Useful:** Bổ trợ cho quá trình phân tích nhưng không bắt buộc.
- **Red Herring:** Nghe hợp lý nhưng không liên quan trực tiếp đến root cause, ví dụ biến động giá vật liệu hoặc tình hình thị trường.

---

### 3. Evidence

Tùy vào lựa chọn Investigation, player có thể phát hiện:

- Revenue ↑
- Profit ↑
- Customer AR ↑↑
- Một khoản Other Receivable bất thường nhưng không phải root cause
- DSO ↑
- Inventory ↑
- Operating Cash Flow ↓

Chi tiết bất thường đóng vai trò **nhiễu**, yêu cầu player phân biệt giữa thông tin đáng chú ý và nguyên nhân thực sự của vấn đề.

---

### 4. Diagnosis

Player phải:

1. Chọn **Diagnosis**.
2. Chọn **1–2 Evidence** để chứng minh cho diagnosis đó.

Các diagnosis gồm:

- Low Profitability
- Insufficient Sales
- Excessive Debt
- **Working-Capital Mismanagement**
- Insufficient Financing

> **Scoring Rule:** Diagnosis đúng nhưng không có evidence phù hợp chỉ nhận một phần điểm. Player phải chứng minh reasoning thay vì chỉ đoán đúng đáp án.

---

### 5. Treatment

Player lựa chọn giải pháp:

- Borrow More
- Stop All Credit Sales
- Improve AR Collection
- Improve Inventory
- **Combined Working-Capital Treatment**

Nếu chọn **Improve AR Collection** hoặc **Combined Treatment**, player phải lựa chọn thêm một treatment parameter, ví dụ:

- 2% Early Payment Discount
- 5% Early Payment Discount
- Targeted Discount by Customer Group

Điều này giúp Treatment trở thành một quyết định tài chính cụ thể thay vì chỉ lựa chọn hướng xử lý chung.

---

### 6. Communication

Player lựa chọn cách trình bày recommendation với khách hàng:

- **Data-First:** Đi thẳng vào số liệu và vấn đề.
- **Empathy-First:** Thấu hiểu mối quan tâm của khách hàng trước khi giải thích bằng số liệu.
- **Avoidance:** Né tránh các vấn đề nhạy cảm.

Communication ảnh hưởng đến **Trust / Client Experience**, tách biệt với Financial Outcome.

---

### 7. Consequence — Six Months Later

Game mô phỏng tình hình doanh nghiệp sau 6 tháng.

Financial metrics mới phụ thuộc vào tổ hợp:

**Diagnosis + Treatment + Treatment Parameter**

Do đó, một diagnosis sai vẫn có thể làm giảm chất lượng outcome ngay cả khi treatment được lựa chọn có vẻ hợp lý.

---

### 8. Counselor Case Report

Cuối case, player nhận báo cáo đánh giá gồm:

- **Investigation Quality:** Critical Evidence được khai thác và số lượt bị lãng phí vào Red Herring.
- **Diagnosis Accuracy**
- **Treatment Quality**
- **Communication / Client Experience**
- **Financial Consequences**
- **What You Did Well**
- **What You Missed**

### Core Game Loop

> **Observe → Investigate → Analyze Evidence → Diagnose → Treat → Communicate → Consequence → Learn**

## 5. Target / Fallback / Out of Scope

### MVP Scope

> **1 complete playable case**

**Mục đích:** Chứng minh toàn bộ core loop hoạt động.

### Target Scope

Phiên bản cuối dự kiến:

> **3–4 complete financial counseling cases**

Các case đại diện cho những hoàn cảnh khác nhau, chẳng hạn:

1. **Personal Finance**
2. **SME / Working Capital**
3. **Family Business**
4. **Startup Finance**
5. **Wealth Management**
6. **Complex Final Case**

Mỗi case vẫn sử dụng chung core loop nhưng có **financial problem, client behavior và decision set khác nhau**.

### Fallback Scope

Nếu thời gian hoặc khả năng development không đủ:

> **2 polished and complete cases**

Nhóm sẽ giảm **số lượng case**, không cắt bỏ core loop.

Tức là 3 case vẫn phải có:

> **Investigation → Diagnosis → Treatment → Consequence → Feedback**

### Out of Scope

Phiên bản hiện tại không tập trung phát triển:

- Multiplayer.
- 3D / Open World.
- Real-time Financial Market Data.
- AI-generated Scenarios.
- Open-ended AI Chatbot.
- Voice Interaction.
- Real-money Transactions.

Mục đích là tránh scope quá lớn và tập trung nguồn lực vào **financial counseling simulation**.

---

## 6. Initial Route Hypothesis

### Product Route

> **Code-Based Browser Game**

Game dự kiến được phát triển dưới dạng web để người chơi có thể truy cập trực tiếp bằng trình duyệt.

### Initial Technical Direction

> **VS Code → HTML/CSS/JavaScript hoặc React → GitHub → Browser Deployment**

### Proposed Technical Structure

```text
Scenario Data
      ↓
Game Engine
      ↓
Decision & Scoring Logic
      ↓
Frontend
      ↓
Browser
