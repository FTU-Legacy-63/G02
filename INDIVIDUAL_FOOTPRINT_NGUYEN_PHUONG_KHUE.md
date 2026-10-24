# INDIVIDUAL REPORT

| | |
|---|---|
| **Họ và tên** | Nguyễn Phương Khuê |
| **Mã sinh viên** | 2413380023 |
| **Dự án** | MEDIFIN — Financial Clinic · Case #01 Toy Kingdom Inc. |
| **Vai trò** | Coordinator & Scenario Designer |

---

## 1. Vai trò trong dự án

**Phụ trách chính:** Thiết kế scenario, viết storyline và dialogue.

**Vai trò chính:** Xây dựng scenario, storyline và dialogue cho Case #01 — Toy Kingdom Inc.; thiết kế case flow, execution conditions và governance storyline sao cho phù hợp với luồng MVP của MEDIFIN.

**Các công việc liên quan:**

- Đề xuất ý tưởng game và base concept.
- Thiết kế scenario, storyline, dialogue khớp với MVP flow.
- Góp phần chốt game scope và reasoning flow.
- Biên tập, tinh chỉnh MVP flow và User Flow.
- Tích hợp scenario, story, dialogue vào MVP.
- Hoàn thiện các tài liệu nền tảng: Project Proposal, Project Logic Chain, Assumptions, Source Use Map.
- Giải thích vì sao một số nội dung được đưa vào hoặc cắt bỏ, và các nhánh câu chuyện dẫn tới quyết định ở các màn sau như thế nào.

---

## 2. Dấu ấn cá nhân trong sản phẩm

Dấu ấn cá nhân của em thể hiện rõ nhất ở phần "xương sống" của sản phẩm: ý tưởng game, câu chuyện của Toy Kingdom và cách câu chuyện đó được chuyển thành một luồng quyết định có logic. Em chịu trách nhiệm thiết kế scenario, viết storyline và dialogue (David, Michael, Richard và các nhân vật liên quan) sao cho người chơi, trong vai Junior Financial Counselor, có đủ bối cảnh để điều tra, chẩn đoán, chọn phác đồ và quan sát hệ quả mà không được cho sẵn nguyên nhân gốc.

Em cũng tham gia chốt game scope và reasoning flow (**Investigate → Diagnose → Treat → Observe Consequences → Reassess**), làm cơ sở cho cấu trúc cuối cùng của game gồm 13 màn hình, chia thành 6 phase. Bên cạnh nội dung câu chuyện, em phụ trách các tài liệu giúp tách bạch thông tin lịch sử và thông tin hư cấu (Assumptions và Source Use Map), để mọi chi tiết của Toy Kingdom đều truy được về nguồn lịch sử (S), giả định của nhóm (A) hoặc trạng thái do người chơi tạo ra (G).

Ngoài ra, em chủ động biên tập và tinh chỉnh User Flow ở phần nội dung (câu chữ, tên gọi, thông báo, các dòng hệ quả) để câu chuyện, hội thoại và logic chấm điểm khớp với nhau mà không làm thay đổi cấu trúc màn hình hay số lượng lựa chọn đã chốt với đội Code/UI-UX.

---

## 3. Những việc đã thực sự làm

### 3.1. Ý tưởng, scenario và storyline

- Đề xuất ý tưởng game và base concept: một mô phỏng tư vấn tài chính theo kịch bản, trong đó người chơi là "bác sĩ tài chính" của một công ty bán lẻ đồ chơi chịu nhiều áp lực cùng lúc (cạnh tranh, thanh khoản, tái đầu tư, gánh nặng nợ), lấy cảm hứng từ case Toys "R" Us.
- Thiết kế scenario và viết storyline, dialogue cho Toy Kingdom Inc.: bối cảnh gia đình Anderson; mâu thuẫn lợi ích giữa **David** (ưu tiên tái đầu tư và phục hồi tài chính), **Michael** (cân nhắc thay đổi quyền kiểm soát) và **Richard** (tìm hướng bán tài sản quốc tế); thỏa thuận có điều kiện với Houndstooth Capital là yếu tố quản trị ẩn.
- Thiết kế case flow, execution conditions và governance storyline: quyết định thông tin nào người chơi nhận được ở từng màn, điều kiện nào khiến một phác đồ hợp lý vẫn cho kết quả yếu (timing, mức độ chuẩn bị các bên liên quan) và hệ quả nào xuất hiện ở Màn 10.

### 3.2. MVP flow và game scope

- Góp phần chốt game scope và reasoning flow.
- Biên tập và tinh chỉnh MVP flow.
- Tích hợp scenario, story và dialogue vào MVP.

### 3.3. Tài liệu nền tảng

| Tài liệu | Nội dung em thực hiện |
|---|---|
| `ASSUMPTIONS.md` | Ghi nhận các giả định A01–A10: Toy Kingdom và gia đình Anderson, Houndstooth Capital Trigger, xung đột gia đình và kịch bản bán tài sản, điều chỉnh mốc thời gian tài chính, kịch bản đầu tư và quản lý, kịch bản thanh khoản mùa lễ, quy ước về kết quả phác đồ và chỉ số kết cục, giới hạn tiếp cận thông tin. Mỗi mục có lý do cần thiết, giới hạn và cách công bố. |
| `SOURCE_USE_MAP.md` | Lập bản đồ nguồn: S01–S03 (Form 10-K FY2016, earnings release FY2016, hồ sơ SEC vụ mua lại 2005), A01–A06, G01–G03; nêu rõ thông tin nào được dùng ở đâu và giới hạn của từng nguồn. |
| `PROJECT_LOGIC_CHAIN.md` | Mô tả chuỗi logic *Input / State → Investigation → Diagnosis → Treatment → Execution → Consequence → Reassessment → Final Output*, cấu trúc 13 màn hình – 6 phase, các nguyên tắc ra quyết định và ranh giới claim (Counselor Performance ≠ Case Outcome). |
| `PROJECT_PROPOSAL.md` | Xác định vấn đề, người dùng mục tiêu, nhiệm vụ của người dùng, kết quả mong muốn, product pattern, tính khả thi và các câu hỏi mở. |

### 3.4. Biên tập và tinh chỉnh User Flow

Áp dụng các chỉnh sửa **câu chữ** vào những chỗ còn gượng, giữ nguyên 13 màn hình, số lượng lựa chọn, mã định danh (HS-x, CH-x, CD-x, PD-x, TG-x) và luật chấm điểm. Một số ví dụ:

- **Màn 3 · CH1-G:** làm mờ chi tiết ngưỡng EBITDA ở câu hỏi bổ sung để việc mở hồ sơ HS-G vẫn có giá trị.
- **Màn 8:** đổi tên thành "Thời điểm & Trình tự hành động" cho đúng bản chất của lựa chọn TG-C.
- **Màn 6:** đổi tên 6 chẩn đoán theo khung "tầng vấn đề" để không ngầm cho người chơi biết đáp án.
- **Màn 10:** bổ sung các dòng logic hệ quả để mỗi chẩn đoán sai đều có bằng chứng phản bác trực tiếp cho Màn 11.

---

## 4. File, tính năng, dữ liệu, logic, giao diện, tài liệu hoặc phần demo đã đóng góp

| Hạng mục | File / Link |
|---|---|
| Assumptions | `ASSUMPTIONS.md` |
| Source Use Map | `SOURCE_USE_MAP.md` |
| Project Logic Chain | `PROJECT_LOGIC_CHAIN.md` |
| Project Proposal | `PROJECT_PROPOSAL.md` |
| User Flow (biên tập, tinh chỉnh) | `USER_FLOW_FINAL.md` |

---

## 5. Bằng chứng đóng góp

### 1) Assumptions

<!-- ![Assumptions](media/INDIVIDUAL_FOOTPRINT_NGUYEN_PHUONG_KHUE/image1.png) -->

### 2) Source Use Map

<!-- ![Source Use Map](media/INDIVIDUAL_FOOTPRINT_NGUYEN_PHUONG_KHUE/image2.png) -->

### 3) Project Logic Chain

<!-- ![Project Logic Chain](media/INDIVIDUAL_FOOTPRINT_NGUYEN_PHUONG_KHUE/image3.png) -->

### 4) Project Proposal

<!-- ![Project Proposal](media/INDIVIDUAL_FOOTPRINT_NGUYEN_PHUONG_KHUE/image4.png) -->

### 5) User Flow (biên tập, tinh chỉnh)

<!-- ![User Flow](media/INDIVIDUAL_FOOTPRINT_NGUYEN_PHUONG_KHUE/image5.png) -->

### 6) Phân công vai trò trong báo cáo giữa kỳ

<!-- ![Phân công 1](media/INDIVIDUAL_FOOTPRINT_NGUYEN_PHUONG_KHUE/image6.png) -->
<!-- ![Phân công 2](media/INDIVIDUAL_FOOTPRINT_NGUYEN_PHUONG_KHUE/image7.png) -->

---

## 6. Phần đóng góp kết nối với sản phẩm cuối cùng

Phần việc của em gắn trực tiếp với trải nghiệm người chơi: toàn bộ câu chuyện Toy Kingdom, các cuộc hội thoại với David, Michael, Richard và luồng 13 màn hình mà người chơi đi qua đều xuất phát từ scenario, storyline và reasoning flow em tham gia xây dựng. Nhờ đó, người chơi bắt đầu từ một mô tả vấn đề chưa có nguyên nhân gốc, tự chọn bằng chứng, chẩn đoán, chọn phác đồ cùng thời điểm và ưu tiên các bên liên quan, rồi nhìn thấy hệ quả và tái khám.

Các tài liệu em hoàn thiện giúp sản phẩm minh bạch và có thể kiểm chứng. Source Use Map và Assumptions phân biệt rõ dữ kiện lịch sử, phần hư cấu hoặc điều chỉnh và trạng thái do người chơi tạo ra. Project Logic Chain và Project Proposal giữ cho đội cùng hiểu một hướng sản phẩm: MEDIFIN là mô phỏng giáo dục về quá trình ra quyết định, không phải mô hình dự báo hay tư vấn tài chính chuyên nghiệp. Việc biên tập User Flow giữ cho câu chữ, cơ chế đánh đổi thông tin và hệ quả khớp nhau mà vẫn tương thích với phần việc của đội Code và UI-UX.

---

## 7. Điều cá nhân học được

- **Chuyển case thực tế thành kịch bản mô phỏng có kiểm soát.** Giữ phần nền lịch sử đáng tin cậy, đồng thời tạo phần hư cấu đủ để người chơi phải suy luận. Qua việc viết Assumptions và Source Use Map, em hiểu rõ hơn rằng bằng chứng lịch sử không tự động chứng minh cho các sự kiện hay chẩn đoán hư cấu, nên mỗi thông tin cần có nguồn hoặc được ghi rõ là giả định.
- **Thiết kế logic cho game ra quyết định.** Tách "chẩn đoán đúng" khỏi "kết quả thành công", để người chơi thấy rằng thời điểm và sự chuẩn bị của các bên liên quan có thể làm thay đổi hệ quả. Khi viết hội thoại, em nhận ra mỗi lời thoại vừa phải tự nhiên, vừa phải mang đúng lượng thông tin, không tiết lộ đáp án nhưng cũng không làm người chơi bế tắc.
- **Điều phối và làm việc nhóm.** Rèn kỹ năng kết nối các phần việc (nội dung, logic chấm điểm, dữ liệu tài chính, giao diện) và biết cách chỉnh sửa trong phạm vi cho phép để không ảnh hưởng tiến độ của những bạn khác.
- **Giải thích và bảo vệ quyết định thiết kế,** đặc biệt là vì sao một số nội dung được đưa vào hoặc cắt bỏ.

---

## 8. Khó khăn gặp phải và cách xử lý

### (1) Tách thông tin lịch sử khỏi thông tin hư cấu

- **Vấn đề:** Case lấy cảm hứng từ Toys "R" Us, nhưng Toy Kingdom, gia đình Anderson, Houndstooth Capital và nhiều sự kiện khác là hư cấu. Nếu không tách bạch, người xem dễ hiểu nhầm đó là sự thật lịch sử hoặc dùng một nguồn để hỗ trợ một kết luận mạnh hơn mức bằng chứng cho phép.
- **Cách xử lý:** Lập hệ thống mã S / A / G, ghi rõ mỗi thông tin thuộc loại nào (Historical, Historical / Adapted, Simulated, Game State) và nêu giới hạn, cách công bố của từng mục trong Assumptions và Source Use Map.

### (2) Cân bằng giữa "cho thông tin" và "giữ thử thách"

- **Vấn đề:** Có chi tiết quan trọng (như ngưỡng EBITDA của thỏa thuận Houndstooth) bị tiết lộ quá sớm ở câu hỏi bổ sung, làm việc mở hồ sơ đầy đủ HS-G gần như mất giá trị và cơ chế đánh đổi thông tin giữa các màn bị yếu đi.
- **Cách xử lý:** Chỉnh lại câu chữ của câu trả lời để chỉ nêu có một thỏa thuận có điều kiện ảnh hưởng tới quyền sở hữu, còn chi tiết cụ thể phải tìm trong hồ sơ. Không đổi vị trí câu hỏi hay số lượng lựa chọn.

### (3) Để câu hỏi mở nhưng không ngầm có đáp án đóng

- **Vấn đề:** Tên gọi của các chẩn đoán có thể ngầm báo cho người chơi đâu là nguyên nhân gốc, trong khi nhân vật David nói rằng mình chưa biết vấn đề nằm ở đâu.
- **Cách xử lý:** Đổi tên hiển thị theo khung các "tầng vấn đề", thêm một đoạn giải thích ngắn và giữ nguyên mã, số lượng lựa chọn, cột bằng chứng và luật chấm điểm.

### (4) Đảm bảo hệ quả ở Màn 10 hỗ trợ việc tái khám ở Màn 11

- **Vấn đề:** Nếu người chơi chẩn đoán sai mà không có sự kiện nào ở Màn 10 gợi ý điều đó, Màn 11 sẽ chỉ còn là đoán mò, không còn là cập nhật nhận định theo dữ liệu mới.
- **Cách xử lý:** Bổ sung các dòng logic hệ quả trong các tab đã có sẵn, để mỗi chẩn đoán sai đều có ít nhất một sự kiện phản bác trực tiếp, đồng thời các bên như nhân viên, khách hàng, chủ nhà cũng có hệ quả quan sát được. Cấu trúc màn hình giữ nguyên.

### (5) Điều phối khi phạm vi và thời gian có hạn

- **Vấn đề:** Một số góp ý của nhóm đòi hỏi thay đổi cấu trúc (thêm bước đề xuất lại phác đồ, giảm số hồ sơ hoặc câu hỏi, tách Màn 8 thành hai màn), ảnh hưởng tới đội Code và UI-UX và có thể không kịp hạn.
- **Cách xử lý:** Tách các góp ý thành hai nhóm: chỉnh sửa nội dung (áp dụng ngay) và thay đổi cấu trúc (để nhóm quyết định riêng), nhờ đó giữ ổn định cho phần đã làm.

---

## 9. Lời nhắn cho sinh viên khóa sau

Với một dự án mô phỏng, câu chuyện hay chưa đủ: mỗi chi tiết trong kịch bản cần có lý do tồn tại, được nối với một quyết định của người chơi và có nguồn hoặc giả định rõ ràng. Hãy tập thói quen ghi lại bạn lấy thông tin từ đâu và bạn tự tạo ra điều gì, vì khi bị hỏi, đó là thứ giúp các bạn bảo vệ được sản phẩm của mình.

Khi làm việc nhóm, hãy luôn hỏi *"chỉnh sửa này có làm đổi phần việc của bạn khác không?"*. Nhiều vấn đề có thể xử lý chỉ bằng việc sửa câu chữ mà không phải đổi cấu trúc, và những thay đổi lớn nên được cả nhóm cùng quyết định.

Cuối cùng, đừng ngại cắt bớt: nội dung nào không phục vụ quyết định của người chơi thì nên bỏ, để phần còn lại rõ ràng và có sức nặng.
