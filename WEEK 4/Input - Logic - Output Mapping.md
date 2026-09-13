## 3. Input - Logic - Output Mapping

### 3.1 Main Flow

| Phase | Player Input | Logic / Rule | Output |
|---|---|---|---|
| Phase 1 - Examination & Vitals | Player sees net loss, CapEx pressure, surface sales decline, CEO framing. | Present symptoms without giving root cause. | Player may suspect operations/Amazon, but evidence is incomplete. |
| Phase 2 - Deep Diagnostics | Player chooses which financial evidence to request. | Evidence has materiality and source reliability. Critical evidence unlocks root-cause reasoning. | Income statement, SSS detail, capital structure, pre-LBO cash flow, supplier/timing data. |
| Diagnosis | Player selects diagnosis and cites evidence. | Score evidence relevance, sufficiency, contradiction handling and causal logic. | Diagnosis result, explanation, unlocked/narrowed treatment options. |
| Phase 3 - Treatment | Player chooses treatment option and execution conditions. | Treatment is evaluated by root-cause coverage, timing, feasibility and stakeholder risk. | Simulated financial outcome and stakeholder consequences. |
| Follow-up / Consequence | Event resolver applies timing/vendor/liquidity consequences. | Wrong timing or missing supplier preparation can reduce success probability. | Outcome feedback and learning comparison with real world. |
| Final Screen | Game summarizes process, outcome and learning. | Separate Counselor Process, Financial Outcome and Client Experience. | Player sees what was correct, what was incomplete and what claim limits apply. |

### 3.2 Evidence-To-Logic Mapping

| Evidence / Input | Logic It Supports | Expected Output |
|---|---|---|
| FY2026 operating earnings = 460m, up from 378m. | Operating performance improved despite net loss. | Supports capital structure diagnosis; contradicts pure operating collapse. |
| Interest expense around 400-450m. | Interest absorbs operating gains. | Explains why net income remains weak despite EBIT improvement. |
| Consolidated SSS = -1.4%. | Sales pressure exists but is not catastrophic. | Treats e-commerce/operations as comorbidity, not sole cause. |
| Adjusted EBITDA = 792m. | The business still generated operating cash proxy before debt burden. | Supports "not dead operationally" interpretation. |
| Pre/post LBO debt mix 30/70 -> 78/22. | Leverage jump came from a financing event. | Supports root cause as capital structure decision, not gradual market erosion only. |
| Pre-LBO OCF 575/801/746m. | Company had positive operating cash flow before LBO. | Supports "healthy before debt intervention" narrative, with source limitation. |
| Chapter 11 filed before holiday season. | Correct tool can fail if timing is wrong. | Applies timing modifier to Option D. |
| Supplier confidence / vendor terms. | Retail survival depends on inventory availability. | Missing supplier prep can trigger domino failure. |
| Sponsor fees / incentives. | Stakeholder incentives may be conflicted. | Used for narrative/persuasion, not direct numerical outcome. |

### 3.3 Sample Input - Logic - Output

| Scenario | Input | Logic | Output |
|---|---|---|---|
| Premature diagnosis | Player diagnoses `operational_disease_amazon` after 20 seconds and requests no evidence. | Critical evidence coverage is zero; player accepts CEO's initial framing. | Stage 1 score = 0; feedback says a counselor should not diagnose from client testimony alone; treatment path narrows toward operational cuts. |
| Correct diagnosis | Player requests income statement, capital structure, same-store sales and selects `capital_structure_disease`. | Evidence supports EBIT improved, leverage jumped, SSS decline was mild. | Stage 1 score can reach 100; all treatment options unlock. |
| Chapter 11 with bad timing | Player selects Option D but does not check supplier communication or holiday timing; filing month September. | Base success 0.45 plus holiday modifier -0.35. | Success probability = 0.10; likely domino failure: vendors demand COD, inventory shortage, Q4 collapse, liquidation. |
| Chapter 11 with preparation | Player selects Option D, prepares supplier communication and avoids holiday-season filing. | Base success 0.45 plus supplier prep +0.25; no holiday penalty. | Success probability = 0.70; restructuring has a credible chance. |
| Operational cuts only | Player selects Option B alone. | Addresses symptom and short-term cash, not debt burden. | Short-term false positive; later SSS/reinvestment worsens; long-term outcome score falls. |

### 3.4 Expected Path A - Good Counselor

| Step | Player Input | Expected Result |
|---|---|---|
| Investigation | Requests income statement, capital structure, same-store sales and pre-LBO cash-flow evidence. | High critical evidence coverage. |
| Diagnosis | Selects Capital Structure / Financing Disease. | Strong reasoning score. |
| Evidence cited | EBIT improved, interest burden absorbs EBIT, leverage jumped after LBO, SSS decline is mild. | Evidence bonus achieved. |
| Treatment | Selects debt restructuring / Chapter 11 with timing and supplier preparation. | High suitability, because root cause and execution risk are both addressed. |
| Follow-up | Updates plan when vendor or timing risk appears. | High adaptation score. |
| Final | Counselor Process high; Financial Outcome depends on execution event; Client Experience high if explanation is clear. |

### 3.5 Expected Path B - Poor Information / Wrong Diagnosis

| Step | Player Input | Expected Result |
|---|---|---|
| Investigation | Opens only sales/Amazon surface evidence. | Low critical evidence coverage. |
| Diagnosis | Selects Operational / Amazon Disease. | Low reasoning score due to missing capital structure evidence. |
| Treatment | Selects operational cuts only. | Short-term cash may improve, but long-term financial outcome deteriorates. |
| Follow-up | Ignores continuing interest burden. | Low adaptation. |
| Final | Feedback explains "treated symptoms, not disease." |

### 3.6 Expected Path C - Correct Tool, Bad Execution

| Step | Player Input | Expected Result |
|---|---|---|
| Investigation | Discovers capital structure problem. | Good investigation and diagnosis. |
| Treatment | Selects Chapter 11. | Potentially suitable tool. |
| Execution | Files before holiday season without supplier communication. | Success probability falls to 0.10. |
| Consequence | Suppliers demand cash terms; holiday inventory fails. | Financial Outcome low despite better diagnosis. |
| Final | Game teaches "right tool, wrong timing can still fail." |

---
