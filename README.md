# MEDIFIN — Inside the Mind of a Counselor

> **MEDIFIN** là game mô phỏng tư vấn tài chính, trong đó người chơi đóng vai một “bác sĩ tài chính”, điều tra tình hình khách hàng, chẩn đoán các “căn bệnh” tài chính và đề xuất phương án xử lý phù hợp.

---

## 1. Team Members and Roles

| Họ tên | Mã sinh viên | Vai trò chính | Output |
|---|---|---|---|
| **Nguyễn Phương Khuê** | 2413380023 | Coordinator & Scenario Designer | Kiểm soát tiến độ, kiểm tra output, thiết kế các tình huống tài chính và xây dựng các phương án xử lý mẫu. |
| **Trương Vĩnh Thịnh** | 2412380046 | Frontend & Integration Developer | Phát triển giao diện chơi và tích hợp các scenario, đồng thời hỗ trợ triển khai game logic, testing và debugging. |
| **Lâm Diệu Anh** | 2413380007 | Financial Content Lead | Xây dựng các chỉ số tài chính cho từng “căn bệnh”, dữ liệu báo cáo tài chính mẫu và answer keys. |
| **Bùi Lê Trà Giang** | 2413380015 | UI/UX Designer & Dialogue Writer | Thiết kế screen flow, wireframe, kịch bản tình huống và hội thoại cho từng scenario. |
| **Lê Bảo Ngọc** | 2412380033 | Game Engine & Logic Developer | Phát triển core game engine, bao gồm diagnosis logic, scoring system, treatment outcomes và player progression. |

---

## 2. Product Overview

**MEDIFIN – Financial Clinic** là game mô phỏng trong đó người chơi đóng vai một **Financial Counselor** – tương tự một “bác sĩ tài chính” – có nhiệm vụ chẩn đoán và xử lý các vấn đề tài chính của khách hàng thông qua quá trình điều tra, phân tích số liệu và ra quyết định.

Game không nói trực tiếp cho người chơi biết khách hàng đang gặp vấn đề gì. Thay vào đó, người chơi chỉ được tiếp nhận các **“triệu chứng”** và phải tự tìm ra **“căn bệnh tài chính”** thực sự.

> **Client Symptoms → Investigation → Financial Evidence → Diagnosis → Treatment**

---

## 3. Problem Candidates

Trong giai đoạn xác định vấn đề ban đầu, nhóm đã xem xét ba hướng phát triển sản phẩm.

| Candidate | Target User | Task / Decision | Khó khăn chính | Đánh giá |
|---|---|---|---|---|
| **Candidate 1: Financial Clinic – Financial Diagnosis & Counseling Simulation** | Sinh viên Tài chính – Ngân hàng có định hướng làm Financial Counselor; chuyên viên tư vấn/RM/Advisor mới vào nghề | Thu thập chứng cứ, phân biệt triệu chứng và nguyên nhân, chẩn đoán “bệnh lý” tài chính và đề xuất giải pháp có tính đến hành vi và ràng buộc của khách hàng | Bài tập trên lớp thường cung cấp dữ liệu và vấn đề rõ ràng. Trong thực tế, khách hàng có thể cung cấp thông tin thiếu, mâu thuẫn hoặc ra quyết định dựa trên cảm xúc | **ĐƯỢC CHỌN** – Giải quyết khoảng trống giữa lý thuyết và thực hành, hỗ trợ nhiều scenario và tạo khác biệt với game mô phỏng đầu tư |
| **Candidate 2: SME Cash-Flow & Working Capital Diagnostic Tool** | Chủ doanh nghiệp SME, chuyên viên phân tích tín dụng doanh nghiệp | Phân tích dòng tiền, vòng quay tồn kho, DSO và lập kế hoạch tái cấu trúc vốn lưu động | Doanh nghiệp thường nhầm giữa lợi nhuận kế toán và dòng tiền thực, dẫn đến thiếu thanh khoản dù doanh thu tăng | **KHẢ THI NHƯNG HẸP** – Có chiều sâu định lượng nhưng chủ yếu tập trung vào tài chính doanh nghiệp ngắn hạn và ít yếu tố tương tác con người |
| **Candidate 3: Personal Wealth & Debt Restructuring Simulator** | Cá nhân/gia đình gặp khó khăn tài chính và chuyên viên lập kế hoạch tài chính cá nhân | Đánh giá tài sản, nợ, xây dựng kế hoạch trả nợ và phân bổ dòng tiền | Người vay có thể giấu nợ, ra quyết định theo cảm xúc và thiếu kỷ luật trong việc cắt giảm chi tiêu | **KHÔNG ĐƯỢC CHỌN** – Đã có nhiều sản phẩm quản lý tài chính cá nhân tương tự và chưa khai thác hết kiến thức tài chính của sinh viên |

### Selected Direction

> **Candidate 1: Financial Clinic – Financial Diagnosis & Counseling Simulation**

MEDIFIN tập trung vào **quá trình tư duy và ra quyết định của một Financial Counselor**, thay vì chỉ yêu cầu người chơi tính toán chỉ số hoặc lựa chọn một khoản đầu tư.

---

## 4. Selected Target Users

### Primary Target User

Đối tượng người dùng chính là:

> **Sinh viên Tài chính – Ngân hàng năm 2–4 tại FTU, có định hướng làm việc trong lĩnh vực tư vấn tài chính hoặc Financial Advisory.**

Người chơi được kỳ vọng đã có kiến thức tài chính cơ bản nhưng chưa có nhiều kinh nghiệm xử lý các tình huống khách hàng thực tế.

Vì vậy, game không tập trung dạy:

> *“Current Ratio là gì?”*

Mà rèn luyện cách suy nghĩ:

> *“Khi nào tôi cần xem Current Ratio? Chỉ số này cho tôi biết điều gì về tình hình khách hàng? Và thông tin đó ảnh hưởng như thế nào đến lời khuyên của tôi?”*

---

## 5. User Task or Decision

Nhiệm vụ chính của người chơi là:

> **Điều tra tình hình tài chính của khách hàng, xác định vấn đề tài chính cốt lõi và đề xuất phương án xử lý phù hợp.**

Người chơi **không được cung cấp sẵn chẩn đoán**.

Thay vào đó:

> **Khách hàng đưa ra triệu chứng → Người chơi điều tra → Phân tích bằng chứng → Chẩn đoán → Đề xuất phương án xử lý**

Trong quá trình này, người chơi phải quyết định:

- Cần hỏi khách hàng những gì.
- Cần xem những thông tin và tài liệu tài chính nào.
- Bằng chứng nào thực sự liên quan.
- Nguyên nhân gốc rễ của vấn đề là gì.
- Phương án xử lý nào phù hợp.
- Nên giao tiếp và tư vấn với khách hàng như thế nào.

---

## 6. Draft Problem Statement

Sinh viên ngành Tài chính – Ngân hàng nắm được các lý thuyết và công cụ phân tích tài chính nhưng thường gặp khó khăn khi áp dụng vào tư vấn thực tế, do các bài tập trên lớp thường dựa trên dữ liệu tương đối đầy đủ và vấn đề đã được xác định rõ ràng.

Trong thực tế, khách hàng có thể đưa ra các triệu chứng mơ hồ, thông tin không đầy đủ, mục tiêu mâu thuẫn và quyết định chịu ảnh hưởng bởi cảm xúc.

> **Do đó, sinh viên Tài chính – Ngân hàng thiếu một môi trường an toàn và thực tế để rèn luyện khả năng điều tra các tình huống tài chính chưa rõ ràng, chẩn đoán nguyên nhân gốc rễ và đưa ra quyết định tư vấn phù hợp trước khi bước vào môi trường làm việc thực tế.**

---

## 7. Visible Contribution — Week 1

| Thành viên | Đóng góp Week 1 | Output nhìn thấy được |
|---|---|---|
| **Nguyễn Phương Khuê** | Tổ chức repository và tích hợp các phần Week 1 thành README có thể review | Cấu trúc README, liên kết evidence |
| **Lâm Diệu Anh** | Phân tích, định hình đối tượng người dùng và khảo sát định hướng sản phẩm | Target-user definition, problem candidate |
| **Trương Vĩnh Thịnh** | Tìm kiếm, phân tích và đề xuất Problem Candidates; xác định nhiệm vụ chính của người chơi | Problem candidates và user task |
| **Bùi Lê Trà Giang** | Xác định financial reasoning của MEDIFIN; làm rõ difficulty và finance relevance | Mô tả difficulty, problem statement |
| **Lê Bảo Ngọc** | Xác định những vấn đề còn tồn đọng của Week 1 và tổng hợp các góp ý | Open questions, tổng hợp Checkpoint 1 |

---

## 8. Open Questions

Những vấn đề nhóm vẫn cần tiếp tục kiểm chứng và thống nhất:

1. Game nên bao gồm cả **individual và corporate clients**, hay cần thu hẹp target scenarios?
2. Một case nên có bao nhiêu **decision points** để đủ chiều sâu nhưng không quá dài?
3. Investigation có nên bị giới hạn bằng **time / investigation points** hay không?
4. Financial datasets nên phức tạp đến mức nào để vừa thực tế vừa phù hợp với sinh viên?
5. Hệ thống scoring nên đánh giá những yếu tố nào: **Investigation, Diagnosis, Treatment, Communication**?
6. Treatment có nên có một **“best answer”**, hay cho phép nhiều phương án hợp lý với các trade-off khác nhau?
7. Cần thu thập evidence nào để xác nhận sinh viên thực sự gặp vấn đề mà nhóm đang giả định?

---

## 9. Checkpoint 1 Feedback and Revision

| Item | Nội dung |
|---|---|
| **Feedback Received** | Chủ đề Financial Counselor có nguy cơ giống Group 1's Shark Tank investment simulation; scenario cần độc đáo hơn và thể hiện được nhiều hoàn cảnh khách hàng. Responsibilities của hai developer ban đầu cũng bị overlap. |
| **Decision** | **Change / Refine** – Giữ concept Financial Counselor nhưng làm rõ core task và gameplay. |
| **Revision Made** | Chuyển trọng tâm từ investment selection sang **financial diagnosis and treatment**; sử dụng phép ẩn dụ **Financial Clinic**; tách technical roles thành **Game Engine & Logic Developer** và **Frontend & Integration Developer**. |
| **Reason** | Tạo sự khác biệt với investment simulation và đảm bảo mỗi thành viên có output riêng, có thể kiểm tra được. |
| **Remaining Questions** | Cần xác định bộ scenario cuối cùng và tiếp tục kiểm chứng vấn đề của target user. |

---

## 10. Week 2 — Product Development

Dựa trên problem direction đã lựa chọn, Week 2 tập trung chuyển MEDIFIN từ một ý tưởng thành một sản phẩm có cấu trúc cụ thể và có thể kiểm chứng.

### Week 2 Deliverables

- [Project Proposal](PROJECT_PROPOSAL.md)
- [Solution Structure](SOLUTION_STRUCTURE.md)

### Core Product Direction

Core loop dự kiến của MEDIFIN:

> **OBSERVE → INVESTIGATE → DIAGNOSE → TREAT → CONSEQUENCE → LEARN**

Mục tiêu của game không chỉ là tạo điểm số, badge hay leaderboard, mà quan trọng hơn là giúp sinh viên **thực hành cách suy nghĩ, điều tra và ra quyết định như một Financial Counselor thực tế**.

---

## 11. Project Status

**Current Stage:** Week 2 – Product Definition & MVP Planning

**Selected Concept:** MEDIFIN – Financial Clinic

**Product Pattern:** Scenario-Based Decision Simulation

**Initial MVP:** 1 case tư vấn tài chính hoàn chỉnh có thể chơi từ đầu đến cuối
