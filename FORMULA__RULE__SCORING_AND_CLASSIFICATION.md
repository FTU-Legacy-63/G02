## 2. Formula, Rule, Scoring And Classification

### 2.1 Financial Formulas

| Formula | Calculation | Use | Boundary |
|---|---:|---|---|
| FY2026 sales decline | `(11,540 - 11,802) / 11,802 = -2.2%` | Shows sales pressure existed but was not a collapse. | Sales decline alone does not identify root cause. |
| FY2026 consolidated same-store sales | `-1.4%` | Supports the idea that store performance was weak but not catastrophic. | SSS is one operating metric, not the entire business. |
| EBIT improvement FY2025-FY2026 | `(460 - 378) / 378 = +21.7%` | Key clue: operating earnings improved while net loss persisted. | EBIT improvement does not mean the company was healthy overall. |
| Adjusted EBITDA vs interest burden | `792 / 450 ≈ 1.8x` | Shows EBITDA covered interest only with limited flexibility for reinvestment and shocks. | Uses rounded interest burden (actual FY2026 Interest Expense per HS-D/Income Statement is $457m). |
| EBIT vs exact FY2026 interest expense | `460 / 457 = 1.0x` | Shows operating earnings were almost entirely absorbed by interest. | Exact interest expense taken directly from the Income Statement (Màn 4). |
| Implied LBO debt cost | `450 / 4,800 ≈ 9.4%` | Simple teaching calculation for annual debt burden relative to Total Indebtedness (~$4.8bn per HS-D). | Approximation, not contractual coupon rate; do not confuse Total Indebtedness with the original $6.6bn LBO transaction value. |
| Debt share (of capital structure) increase, pre- vs post-2015 LBO | `78% - 30% = +48 percentage points` | Educational illustration of the leverage jump caused by the 2015 LBO. | Illustrative teaching assumption, not a disclosed figure in any Hồ sơ (HS-A...G). Do not confuse this 78% with the Anderson family's 78% equity stake stated in the Case Overview — the two are unrelated numbers that happen to coincide. |
| PD-E (Bankruptcy with reorganization) — unprepared timing probability | `0.45 - 0.35 = 0.10` | Models Chapter 11 filed before holiday season without supplier preparation (TG-A/TG-D combined with no Suppliers priority at Màn 9). | Educational simulation assumption, not a contractual or historical probability. |
| PD-E (Bankruptcy with reorganization) — prepared probability | `0.45 + 0.25 = 0.70` | Models Chapter 11 with supplier communication (Suppliers priority at Màn 9) and better timing (TG-B/TG-C). | Counterfactual simulation input, not historical fact. |

### 2.2 Diagnosis Classification Rules

The six selectable diagnoses at Màn hình 6 are CD-A through CD-F. Classification below shows how each is scored relative to the true root cause.

| Diagnosis | Classification | Rule |
|---|---|---|
| CD-D — Capital Structure / Financing Disease | Primary root cause | Supported when player discovers EBIT improvement, mild SSS decline, leverage jump after the 2015 LBO, pre-LBO cash-flow strength, and the annual interest burden (HS-D, CH1-D). |
| CD-A — Competitive / E-commerce Disease | Comorbidity / incomplete diagnosis | Supported by traffic decline and channel shift toward e-commerce (HS-A, CH1-A), but contradicted as the sole cause by improved EBIT and the mild SSS decline. |
| CD-B — Operating / Store Network Disease | Secondary pressure | Supported by years of deferred CapEx and renovation delays (HS-B, CH1-B), but does not explain why interest absorbs operating gains. |
| CD-C — Liquidity Disease | Symptom-level diagnosis | Liquidity stress exists (HS-C, CH1-C), but cash shortage is downstream of the debt burden and constrained reinvestment capacity. |
| CD-E — Product & Category Disease | Secondary pressure | Some categories (entertainment/licensing tie-ins) are weak (HS-E, CH1-E), but this does not explain why interest absorbs operating gains. |
| CD-F — Mixed Disease | Broadest scope, not automatically "best" | Requires HS-D plus at least one other relevant Hồ sơ (HS-A / HS-B / HS-E / HS-F). Chosen without that evidence base, it reads as avoidance of accountability rather than synthesis (Uy tín −1, per Màn 6 rule). CD-F does not by itself point to a treatment — unlike the other five, it does not narrow the player toward one clear phác đồ. |

Note: Governance / Sponsor Incentive Conflict (the Michael–Houndstooth agreement and Richard's asset moves, revealed via HS-G) is **not** one of the six selectable diagnoses. It is a stakeholder-risk and narrative thread that feeds the Governance Stability axis and the Professionalism & Ethics dimension of Counselor Process (2.4), and it affects treatment framing at Màn 9–11 — but it cannot itself be submitted as a diagnosis at Màn 6.

### 2.3 Evidence Materiality

| Tag | Weight | Meaning | Toys "R" Us Examples |
|---|---:|---|---|
| CRITICAL | 4 | Required for root-cause diagnosis or treatment safety. | Capital structure history (HS-D), annual interest burden, EBIT vs interest, pre-LBO cash flow, Chapter 11 timing (Màn 8), the Houndstooth contingent share agreement (HS-G) as a treatment-safety constraint. |
| USEFUL | 2 | Helps refine reasoning but cannot prove root cause alone. | Same-store sales detail (HS-A), adjusted EBITDA, supplier/vendor context (HS-C). |
| CONTEXTUAL | 1 | Adds narrative or stakeholder background. | Sponsor/family ownership split, press commentary, store count, management track record (HS-F). |
| RED_HERRING | 0 | Distracts from root cause if used alone. | "Amazon killed the company" (CD-A) without checking leverage (HS-D). |
| REDUNDANT | 0 | Repeats already known information. | Reopening the same sales clue (HS-A) without new evidence. |

### 2.4 Counselor Process Score

Counselor Process is the quality of the player's advisory method, not whether the simulated company gets lucky.

| Dimension | Weight | Reads From |
|---|---:|---|
| Investigation | 20% | Critical/useful evidence coverage, cost efficiency, red herring use, redundancy. |
| Reasoning & Diagnosis | 20% | Diagnosis/evidence fit, causal chain, contradiction handling, symptom vs root cause separation. |
| Solution Suitability | 25% | Root-cause coverage, timing, stakeholder constraints, execution risk. |
| Communication | 15% | Clarity, empathy, technical accuracy, expectation management, client autonomy. |
| Professionalism & Ethics | 10% | Misleading certainty, hidden risk, conflict awareness, scope boundaries. |
| Monitoring & Adaptation | 10% | Response to new vendor/timing/liquidity information. |

```text
Counselor Process =
  0.20 x Investigation
+ 0.20 x Reasoning
+ 0.25 x Solution Suitability
+ 0.15 x Communication
+ 0.10 x Ethics
+ 0.10 x Adaptation
```

### 2.5 Diagnosis Stage Scoring

The Week 3 sample path can be preserved as a simple checkable rule:

| Component | Points | Rule |
|---|---:|---|
| Investigation before diagnosis | 30 | Player requests relevant deep diagnostics (Hồ sơ / CH1 questions) before submitting diagnosis. |
| Correct diagnosis | 50 | Player selects CD-D (Capital Structure / Financing Disease). |
| Evidence bonus | 20 | Player cites 3 decisive clues: EBIT improved, leverage jumped after the LBO, and cash flow was positive before the LBO while SSS decline stayed mild. |
| Total | 100 | Stage 1 diagnosis score. |

Premature diagnosis rule:

| Condition | Result |
|---|---|
| Player diagnoses CD-A (Competitive / E-commerce Disease) or CD-B (Operating / Store Network Disease) without requesting HS-D (Capital Structure) or HS-C (Liquidity/cash-flow) evidence. | Diagnosis stage score = 0; feedback explains premature closure; later treatment options are narrowed toward PD-B (Deep Cost Cutting). |

### 2.6 Treatment Scoring Logic

Treatment should be scored by attributes, not fixed manual points. The six selectable phác đồ at Màn hình 7 are PD-A through PD-F.

| Treatment | Root-Cause Coverage | Key Risk | Expected Scoring Logic |
|---|---|---|---|
| PD-A - Invest to Compete | Low for CD-D (capital structure); higher only if diagnosis is CD-A or CD-E. | Requires Uy tín ≥ Trung bình since liquidity is already thin per HS-C; if credibility is insufficient, the plan auto-downgrades to PD-B. | High suitability only when the diagnosis targets competitive/product pressure; low suitability if the root cause is capital structure and liquidity risk isn't addressed. |
| PD-B - Deep Cost Cutting | Low to medium. | No approval precondition. Improves short-term cash clearly, but shrinks the long-term sales base and reinvestment capacity. | Can create a false-positive short-term outcome; low long-term suitability if used alone or as the "fix" for CD-D. |
| PD-C - Debt Restructuring / Creditor Negotiation | High for CD-D (Capital Structure / Financing Disease). | Depends on creditor response; success rate is materially higher if Creditors are prioritized at Màn 9. | High suitability if diagnosis is capital structure disease and creditor stakeholder risk is actively managed. |
| PD-D - Asset Sale | Medium. | Improves liquidity immediately, but usually requires selling the strongest-performing assets (traditional toy categories, HS-E) to get a fair price. | Useful if paired with a debt solution; scored lower, and penalized (Governance score −1), if framed as a complete cure or if HS-E was never reviewed. |
| PD-E - Bankruptcy with Reorganization (Chapter 11) | High. | Highest timing and supplier/customer-confidence risk of the six options; uniquely also voids Michael's unactivated Houndstooth contingent share agreement. | Good tool only if timing (Màn 8) and vendor communication (Suppliers priority at Màn 9) are handled well; poor timing with no supplier preparation scores worst of all six options. |
| PD-F - Combined Restructuring | High, across multiple fronts at once. | Requires Uy tín Cao. Several workstreams run in parallel, creating the highest execution risk of the six options. | High suitability only when credibility supports it and execution risk across tracks is explicitly managed; otherwise the most likely option to underperform its own root-cause coverage. |

Treatment quality formula:

```text
Treatment Quality =
  Goal Alignment
x Root Cause Coverage
x Feasibility
x Timing Quality
x Stakeholder Risk Management
- Constraint Violations
- New Risk Created
```

Root Cause Coverage is always measured against the diagnosis actually submitted at Màn 6 (CD-A...CD-F), not assumed to be CD-D by default.

### 2.7 Financial Outcome Score

Suggested Toys "R" Us outcome metrics:

| Metric | Desired Direction | Weight | Notes |
|---|---:|---:|---|
| Interest burden relief | Higher relief is better | 30% | Central to CD-D (Capital Structure / Financing Disease). |
| Liquidity runway | Longer runway is better | 20% | Especially before holiday inventory season (HS-C, TG choice at Màn 8). |
| Supplier/vendor confidence | Higher is better | 20% | Critical for PD-E (Chapter 11) and for holiday inventory. |
| Reinvestment capacity | Higher is better | 15% | Needed for stores, digital, fulfillment (HS-B). |
| Operating momentum | Stable/improving is better | 15% | Tracks SSS, sales base and customer confidence (HS-A). |

Financial Outcome is a simulation proxy. It should not be presented as a real bankruptcy model.

### 2.8 Client Experience Score

```text
Client Experience =
  0.30 x Trust
+ 0.30 x Understanding
+ 0.25 x WillingnessToImplement
+ 0.15 x (100 - Stress)
```

Client Experience does not modify Communication score. For example, a client may dislike being told that operational cuts alone are insufficient, but the counselor can still score high for professional communication.

### 2.9 Overall Composite

If shown, Overall Score must be labeled as a composite:

```text
Overall =
  0.50 x Counselor Process
+ 0.30 x Financial Outcome
+ 0.20 x Client Experience
```

---
