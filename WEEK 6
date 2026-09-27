# Week 6 - Working Build, Integration and Testing

## Core Flow Protected

The demo satisfies a single primary mission: the user acts as a **Junior Financial Counselor** to investigate a client company's financial health, diagnose root financial issues, prescribe an appropriate treatment, execute an action plan, observe simulated consequences, reassess their decision based on new developments, and receive an explainable Counselor Case Report.

The complete counseling interaction flow runs in [`demo/index.html`](../demo/index.html):

```text
Select Diagnostic Files & Questions
  -> Validate information choices
  -> Load financial statements (Toy Kingdom Inc.)
  -> Formulate Primary Diagnosis & select Treatment Strategy
  -> Define Execution Timing & Stakeholder Priorities
  -> Engine simulates consequences & company outcomes
  -> Reassess decision under updated developments
  -> Generate Counselor Case Report & Performance Feedback
  -> Player records final decisions and reflection rationale
```

The MEDIFIN MVP interface retains the structured 13-screen / 6-phase layout defined in Week 4 and Week 5, incorporating dark green financial theme styling, step-by-step progress sidebars, and hierarchical decision dashboards. Interface visuals mirror the initial UI/UX designs while drawing live scenario state evaluation from the rule engine in `demo/engine.js`.

## Build and Deployment Check

| Check | Expected | Actual | Status |
| --- | --- | --- | --- |
| **Input -> Logic** | Form passes diagnostic choices, primary diagnosis, treatment, and execution plan into the simulation engine | `demo/app.js` calls `evaluateCounselorCase()` with the active scenario state | **Pass**, verified locally |
| **Data -> Product** | Fetches and processes Toy Kingdom Inc. baseline financial data and scenario branches | Engine processes 13 financial metrics and 7 diagnostic files (revenue USD 11,540M, EBITDA USD 792M, debt USD 4,800M) | **Pass** local live smoke, Sep 28, 2026 |
| **Logic -> Output** | Report reflects player choices with exact score breakdown and company state | Interface renders scores across 5 criteria (0–100), Financial Resilience, and Governance Stability | **Pass** Chrome/Safari local, Sep 28, 2026 |
| **Output -> Action** | Player records final reasoning, decision confirmation, and case reflections | Interactive form at case closure logs session decisions and qualitative notes | **Implemented**; browser verified |
| **Repo -> Local Run** | Executable locally using standard project scripts | `npm install` / `python3 demo/server.py` and navigate to `/demo/` | **Pass**, HTTP 200 & API 200 |
| **Repo -> Public URL** | Fully playable deployment accessible via public web URL | [medifin-simulation.vercel.app](https://medifin-simulation.vercel.app/) hosts static UI & Python engine API | **Pass**, production HTTP 200 & API 200 |

## Sample Input for In-Class Presentation

| Field | Value |
| --- | --- |
| **Client / Case** | Case #01 — Toy Kingdom Inc. (Educational financial simulation) |
| **Investigation Choices** | Diagnostic Files: HS-A (Sales), HS-C (Liquidity), HS-D (Capital Structure); Questions: CH1-C, CH1-D, CH2-F |
| **Primary Diagnosis** | CD-D — Capital Structure / Financing Problem |
| **Treatment Strategy** | PD-C — Debt Restructuring |
| **Execution Plan** | Timing: TG-A (Act Immediately); Stakeholders: Creditors, Suppliers, Holiday Inventory |
| **Reassessment Choice** | Maintain debt restructuring while allocating emergency liquidity for store operations |
| **Expected Output** | Counselor Score: ~89/100; Financial Resilience: Moderate; Outcome: Reorganization Success |

## Financial & Logic Consistency

- **Financial Statements & Data:** All client numbers are denominated in USD Millions (Net Sales $11,540M, Adjusted EBITDA $792M, Operating Earnings $460M, Interest Expense $457M, Cash $566M, Total Debt $4,800M). Financial ratios are derived deterministically: $\text{Interest Coverage} = \text{EBIT} / \text{Interest Expense} = 460 / 457 = 1.01\text{x}$; $\text{Leverage} = \text{Total Debt} / \text{EBITDA} = 4800 / 792 = 6.06\text{x}$.
- **Evidence-Based Evaluation:** Points are awarded based on discovered evidence, not blind guessing. A correct diagnosis without investigating corresponding files receives a score penalty.
- **Counselor Performance vs. Company Outcome:** Counselor Score evaluates decision process quality ($20\%\text{ Investigation} + 30\%\text{ Diagnosis} + 20\%\text{ Treatment} + 15\%\text{ Execution} + 15\%\text{ Reassessment}$). The company's Financial Resilience and Governance Stability are simulated separately based on initial debt burden, execution timing, and stakeholder alignment.
- **Consequence Engine Rules:** Scenario outcomes follow deterministic conditional logic:
  
  $$\text{Company State}_{t+1} = f(\text{State}_t, \text{Treatment}, \text{Timing}, \text{Stakeholders})$$
  
  Random variance is constrained within $\pm 2\%$ to preserve educational clarity without altering underlying diagnostic conclusions.

## Test Table

Automated logic tests are executed via `npm test` or `node --test demo/engine.test.mjs`.
API boundary and engine unit tests are run via `python3 -m unittest discover -s demo -p 'test_*.py'`.

| ID | Test Case & Input | Expected | Actual | Status | Author / Verifier |
| --- | --- | --- | --- | --- | --- |
| **T01** | **Normal:** Sample path (HS-A, C, D; CD-D; PD-C; Immediate; Creditors/Suppliers) | Complete score break, score $\approx 89$, valid consequence payload | Score = 88.8, all 5 component scores returned | **Pass** | Lê Bảo Ngọc / Trương Vĩnh Thịnh |
| **T02** | **Boundary:** Zero relevant diagnostic files selected | Investigation score = 40/100, Diagnosis Evidence Support penalized | Investigation = 40, Diagnosis evidence penalty applied | **Pass** | Lê Bảo Ngọc / Lâm Diệu Anh |
| **T03** | **Invalid:** Incomplete selections (2 files, 1 question) | Validation error triggered, screen advancement blocked | `Select exactly 3 Diagnostic Files` error thrown | **Pass** | Trương Vĩnh Thịnh / Nguyễn Phương Khuê |
| **T04** | **Financial Alignment:** Coverage 1.01x & Debt/EBITDA 6.06x calculation check | Mathematical precision within $10^{-4}$ tolerance | Interest coverage = 1.0065x, Debt/EBITDA = 6.0606x | **Pass** | Lâm Diệu Anh / Lê Bảo Ngọc |
| **T05** | **Execution Fit:** Optimal treatment (PD-C) with poor timing (Delayed) | Treatment score high, Execution Planning score drops below 60 | Treatment = 88, Execution = 52 | **Pass** | Lê Bảo Ngọc / Nguyễn Phương Khuê |
| **T06** | **Reassessment Logic:** Reassessment choice supported by new Screen 10 evidence | Reassessment score $\ge 90$, positive feedback generated | Reassessment = 94, rationale feedback matches | **Pass** | Lê Bảo Ngọc / Bùi Lê Trà Giang |
| **T07** | **API Boundary:** `/api/simulate` endpoint accepts complete state JSON | API returns status 200, valid report payload JSON | Payload parsed, HTTP 200 returned with full breakdown | **Pass** | Trương Vĩnh Thịnh / Lê Bảo Ngọc |
| **T08** | **Validation:** Invalid primary diagnosis string passed to API | API returns HTTP 400 with descriptive error message | Status 400 `Invalid Diagnosis Code` returned | **Pass** | Trương Vĩnh Thịnh / Lê Bảo Ngọc |
| **T09** | **Data Integrity:** Missing case file asset payload | Runtime exception handled gracefully, fallback error shown | Error banner displayed without crashing app UI | **Pass** | Trương Vĩnh Thịnh / Lê Bảo Ngọc |
| **T10** | **Live End-to-End Run:** Full playable session through Screen 0–12 | Session closes cleanly, Counselor Case Report generated | Completed in 4m 12s; final score 89/100 displayed | **Pass** | Nguyễn Phương Khuê / Trương Vĩnh Thịnh |

## Bug Log and Priorities

| ID | Issue / Steps | Severity | Expected | Actual / Status | Owner / Verifier |
| --- | --- | --- | --- | --- | --- |
| **B01** | Rapid clicking on "Submit Diagnosis" bypasses validation | Major | Button disables on click, preventing duplicate state pushes | Fixed in `app.js`; button disables immediately during state calculation | Trương Vĩnh Thịnh / Lê Bảo Ngọc |
| **B02** | Evidence Support score was granting full credit without checking file unlocks | Critical | Evidence Support evaluates unlocked file IDs against diagnosis requirement | Fixed in `engine.js`; T02 test now passes correctly | Lê Bảo Ngọc / Lâm Diệu Anh |
| **B03** | Screen 11 Reassessment allowed submitting blank reflection text | Minor | User must type at least 15 characters of rationale before closing case | Added input length validation; fixed | Bùi Lê Trà Giang / Trương Vĩnh Thịnh |
| **B04** | Scenario variation range exceeding $\pm 5\%$ under edge choices | Major | Case variation kept within $\pm 2\%$ to preserve financial conclusions | Calibrated variable bounded randomizer in `scenario.py` | Lê Bảo Ngọc / Lâm Diệu Anh |
| **B05** | Mobile layout clipping financial statement table on Screen 4 | Moderate | Responsive scroll container for financial tables on smaller screens | Updated Tailwind CSS overflow classes on table container | Bùi Lê Trà Giang / Trương Vĩnh Thịnh |

## Scope Freeze and Ownership

**Freeze for Week 6 MVP Demo:** One playable case (Case #01 — Toy Kingdom Inc.), 13 interactive screens across 6 phases, fixed financial statement set with controlled scenario variation, debt restructuring focus, deterministic scoring engine, and interactive counselor case reporting. Multi-case selection, real-time AI chatbots, custom company financial uploads, and multiplayer modes are strictly out of scope for this build.

| Component | Owner (Week 5 Assignment) | Evidence / File Asset | Verification Task |
| --- | --- | --- | --- |
| **Scenario & Narrative Flow** | Nguyễn Phương Khuê | `MEMBER_CONTRIBUTION.md`, `USER_FLOW.md` | Validated complete 13-screen user journey and dialogue clarity |
| **Frontend & UI Integration** | Trương Vĩnh Thịnh | `demo/app.js`, `demo/index.html` | Verified responsive UI, state persistence, and form validation |
| **Financial Content & Rules** | Lâm Diệu Anh | `DECISION_RULES_AND_SCORING.md` | Signed off on EBITDA, interest coverage, and financial balance logic |
| **UI/UX Design & Copywriting** | Bùi Lê Trà Giang | `FEATURE_MAP.md`, Canva Prototypes | Reviewed counselor feedback copy and typography readability |
| **Game Engine & Scoring Logic** | Lê Bảo Ngọc | `PROJECT_LOGIC_CHAIN.md`, `demo/engine.js` | Executed logic test suite (T01–T10) and verified score calculation |

## Production Deployment

- **Public Production URL:** [medifin-simulation.vercel.app](https://medifin-simulation.vercel.app/)
- **Infrastructure:** Hosted on Vercel utilizing static HTML5/JS frontend and Python Serverless Functions (`/api/simulate`, `/api/case-data`).
- **Deployment Status:** Live and verified on Sep 28, 2026. All static assets and API endpoints return HTTP 200 with sub-150ms response times.
