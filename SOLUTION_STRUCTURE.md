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

**MVP = One Complete Playable Financial Counseling Case**

MVP tập trung vào **1 khách hàng doanh nghiệp SME** để chứng minh toàn bộ core game loop của MEDIFIN hoạt động từ đầu đến cuối.

### Proposed MVP Case

**“The Profitable Company That Is Running Out of Cash”**

Một SME có doanh thu và lợi nhuận tăng nhưng liên tục thiếu tiền mặt. Chủ doanh nghiệp cho rằng cần vay thêm, trong khi nguyên nhân thực sự có thể nằm ở quản trị vốn lưu động.

### MVP Gameplay

**1. Client Introduction**  
Người chơi tiếp nhận triệu chứng và nhận định ban đầu của khách hàng.

**2. Investigation**  
Lựa chọn câu hỏi và tài liệu cần kiểm tra như Financial Statements, AR Aging, Inventory, Debt và Supplier Terms.

**3. Evidence Analysis**  
Phân tích các dấu hiệu như Revenue ↑, Profit ↑, AR ↑, DSO ↑, Inventory ↑ và Operating Cash Flow ↓.

**4. Diagnosis**  
Xác định nguyên nhân cốt lõi, phân biệt giữa triệu chứng và “căn bệnh” tài chính thực sự.

**5. Treatment**  
Lựa chọn giải pháp phù hợp và cân nhắc trade-off giữa các phương án như vay thêm, thu hồi công nợ, giảm tồn kho hoặc kết hợp nhiều biện pháp.

**6. Client Communication**  
Xử lý phản ứng và các ràng buộc thực tế của khách hàng đối với phương án tư vấn.

**7. Consequence – Six Months Later**  
Game mô phỏng sự thay đổi của các financial metrics dựa trên decision path của người chơi.

**8. Counselor Case Report**  
Cuối case mới hiển thị kết quả gồm:
- Investigation Quality
- Diagnosis Accuracy
- Treatment Quality
- Client Communication
- Financial Consequences
- What You Did Well / What You Missed

### Core MVP Loop

> **Observe → Investigate → Analyze → Diagnose → Treat → Communicate → Consequence → Learn**

MVP không nhằm mô phỏng toàn bộ Financial Counseling mà chứng minh rằng core diagnosis–treatment–consequence loop của MEDIFIN có thể hoạt động hoàn chỉnh trước khi mở rộng sang các scenario khác.

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
