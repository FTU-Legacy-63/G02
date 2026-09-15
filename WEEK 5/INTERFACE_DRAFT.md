# WORKING INTERFACE DRAFT & REVISION EVIDENCE

## 1. Working Interface Draft

- 🎨 [Canva — UI/UX Draft](https://www.canva.com/design/DAHUrjuo2iU/TwEgLcpHq5jNEXqZxAyq5Q/edit?ui=eyJBIjp7fX0)
- 🖥️ [Figma — Interactive Prototype](https://www.figma.com/proto/VtlhknTup0qQw5TX7OhloF/Medifin?node-id=1-14&p=f&t=Q6iSnSJUCTCF9sF1-0&scaling=min-zoom&content-scaling=fixed&page-id=1%3A8&starting-point-node-id=1%3A14)

The Canva draft shows the initial UI/UX concept, while the Figma prototype demonstrates the interactive version of MEDIFIN's financial counseling flow.

---

## 2. Interface Evidence

| Requirement | Current Interface Evidence |
|---|---|
| **Input Screen** | Diagnostic Files, Follow-Up Questions, Diagnosis, Treatment, Timing, Stakeholder Priorities, and Reassessment |
| **Output Screen** | Consequence Screen and final Counselor Case Report |
| **Error Message** | Validation prevents incomplete or invalid selections before the player continues |
| **Link to Logic** | Interface decisions are connected to the Week 4 decision, scoring, consequence, and outcome rules |

### Example Error Messages

- `Select exactly 3 Diagnostic Files to continue.`
- `Select a Primary Diagnosis before continuing.`
- `Select exactly 3 stakeholder priorities.`

### Logic Links

- [USER_FLOW.md](USER_FLOW.md)
- [PROJECT_LOGIC_CHAIN.md](../WEEK%204/PROJECT_LOGIC_CHAIN.md)
- [DECISION_RULES_AND_SCORING.md](../WEEK%204/DECISION_RULES_AND_SCORING.md)
- [EXPECTED_RESULT_AND_LOGIC_TEST.md](../WEEK%204/EXPECTED_RESULT_AND_LOGIC_TEST.md)

---

## 3. Revision Evidence

| Feedback / Issue | Change Made | Owner | Evidence |
|---|---|---|---|
| Initial interface was mainly a static visual concept | Converted the concept into a decision-based interactive prototype | **Bùi Lê Trà Giang** | [Canva Draft](https://www.canva.com/design/DAHUrjuo2iU/TwEgLcpHq5jNEXqZxAyq5Q/edit?ui=eyJBIjp7fX0) → [Figma Prototype](https://www.figma.com/proto/VtlhknTup0qQw5TX7OhloF/Medifin?node-id=1-14&p=f&t=Q6iSnSJUCTCF9sF1-0&scaling=min-zoom&content-scaling=fixed&page-id=1%3A8&starting-point-node-id=1%3A14) |
| Decision flow needed to be clearer | Connected screens into a continuous counseling process rather than isolated questions | **Bùi Lê Trà Giang** | [Figma Prototype](https://www.figma.com/proto/VtlhknTup0qQw5TX7OhloF/Medifin?node-id=1-14&p=f&t=Q6iSnSJUCTCF9sF1-0&scaling=min-zoom&content-scaling=fixed&page-id=1%3A8&starting-point-node-id=1%3A14) |
| Financial information needs to remain accessible during analysis | Refined the interface toward a dashboard / split-view structure with navigation and information workspace | **Bùi Lê Trà Giang** | [Figma Prototype](https://www.figma.com/proto/VtlhknTup0qQw5TX7OhloF/Medifin?node-id=1-14&p=f&t=Q6iSnSJUCTCF9sF1-0&scaling=min-zoom&content-scaling=fixed&page-id=1%3A8&starting-point-node-id=1%3A14) |
| Interface needs to connect with approved product logic | Linked player inputs and outputs to Week 4 decision and scoring logic | **Trương Vĩnh Thịnh + Lê Bảo Ngọc** | [Decision Rules & Scoring](../WEEK%204/DECISION_RULES_AND_SCORING.md) |

---

## 4. Current Status

**Canva Concept → Figma Interactive Prototype → Frontend & Logic Integration**

The current priority is to connect the refined interface with the working game logic and complete one testable Case #01 flow.
