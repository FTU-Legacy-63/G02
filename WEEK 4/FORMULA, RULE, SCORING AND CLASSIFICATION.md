## 2. Formula, Rule, Scoring And Classification

### 2.1 Financial Formulas

| Formula | Calculation | Use | Boundary |
|---|---:|---|---|
| FY2026 sales decline | `(11,540 - 11,802) / 11,802 = -2.2%` | Shows sales pressure existed but was not a collapse. | Sales decline alone does not identify root cause. |
| FY2026 consolidated same-store sales | `-1.4%` | Supports the idea that store performance was weak but not catastrophic. | SSS is one operating metric, not the entire business. |
| EBIT improvement FY2025-FY2026 | `(460 - 378) / 378 = +21.7%` | Key clue: operating earnings improved while net loss persisted. | EBIT improvement does not mean the company was healthy overall. |
| Adjusted EBITDA vs interest burden | `792 / 400 = 2.0x` | Shows EBITDA covered interest only with limited flexibility for reinvestment and shocks. | Uses rounded interest burden. |
| EBIT vs exact FY2026 interest expense | `460 / 457 = 1.0x` | Shows operating earnings were almost entirely absorbed by interest. | Exact interest depends on source/table. |
| Implied LBO debt cost | `400 / 5,300 = 7.5%` | Simple teaching calculation for annual debt burden. | Approximation, not contractual coupon rate. |
| Debt share increase | `78% - 30% = +48 percentage points` | Shows leverage jump after LBO. | Based on secondary source ratio. |
| Option D bad timing probability | `0.45 - 0.35 = 0.10` | Models Chapter 11 filed before holiday season without supplier preparation. | Educational simulation assumption. |
| Option D prepared probability | `0.45 + 0.25 = 0.70` | Models Chapter 11 with supplier communication and better timing. | Counterfactual, not historical fact. |

### 2.2 Diagnosis Classification Rules

| Diagnosis | Classification | Rule |
|---|---|---|
| Capital Structure / Financing Disease | Primary root cause | Supported when player discovers EBIT improvement, mild SSS decline, leverage jump, pre-LBO cash-flow strength and annual interest burden. |
| Operational / Amazon Disease | Comorbidity / incomplete diagnosis | Supported by sales pressure and e-commerce disruption, but contradicted as sole cause by improved EBIT and mild SSS (Same-Store Sales) decline. |
| Pure Liquidity Disease | Symptom-level diagnosis | Liquidity stress exists, but cash shortage is downstream of debt burden and constrained reinvestment. |
| Product / Category Disease | Secondary pressure | Some categories are weak, but this does not explain why interest absorbs operating gains. |
| Governance / Sponsor Incentive Conflict | Narrative / stakeholder risk | Useful for persuasion and treatment framing, but not the core financial calculation. |

### 2.3 Evidence Materiality

| Tag | Weight | Meaning | Toys "R" Us Examples |
|---|---:|---|---|
| CRITICAL | 4 | Required for root-cause diagnosis or treatment safety. | Capital structure history, annual interest burden, EBIT vs interest, pre-LBO cash flow, Chapter 11 timing. |
| USEFUL | 2 | Helps refine reasoning but cannot prove root cause alone. | Same-store sales detail, adjusted EBITDA, supplier/vendor context. |
| CONTEXTUAL | 1 | Adds narrative or stakeholder background. | Sponsor fees, press commentary, store count. |
| RED_HERRING | 0 | Distracts from root cause if used alone. | "Amazon killed the company" without checking leverage. |
| REDUNDANT | 0 | Repeats already known information. | Reopening the same sales clue without new evidence. |

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
| Investigation before diagnosis | 30 | Player requests relevant deep diagnostics before submitting diagnosis. |
| Correct diagnosis | 50 | Player selects capital structure / financing disease. |
| Evidence bonus | 20 | Player cites 3 decisive clues: EBIT improved, leverage jumped after LBO, cash flow was positive before LBO / SSS decline was mild. |
| Total | 100 | Stage 1 diagnosis score. |

Premature diagnosis rule:

| Condition | Result |
|---|---|
| Player diagnoses "Operational / Amazon Disease" without requesting capital structure or cash-flow evidence. | Diagnosis stage score = 0; feedback explains premature closure; later treatment options are narrowed toward operational cuts. |

### 2.6 Treatment Scoring Logic

Treatment should be scored by attributes, not fixed manual points.

| Treatment | Root-Cause Coverage | Key Risk | Expected Scoring Logic |
|---|---|---|---|
| Option A - Debt restructuring / creditor negotiation | High | Sponsor/creditor incentives may resist concessions. | High suitability if diagnosis is capital structure disease and stakeholder risk is addressed. |
| Option B - Operational cuts / store closures only | Low to medium | Improves short-term cash but worsens long-term sales base and reinvestment. | Can create false positive short-term outcome but low long-term suitability if used alone. |
| Option C - Asset sale / partial refinancing / hybrid liquidity plan | Medium | May sell valuable assets and fail to fix leverage permanently. | Useful if paired with debt solution; weaker if framed as complete cure. |
| Option D - Chapter 11 restructuring | High | Timing and supplier confidence risk. | Good tool only if execution timing and vendor communication are handled. |

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

### 2.7 Financial Outcome Score

Suggested Toys "R" Us outcome metrics:

| Metric | Desired Direction | Weight | Notes |
|---|---:|---:|---|
| Interest burden relief | Higher relief is better | 30% | Central to capital structure disease. |
| Liquidity runway | Longer runway is better | 20% | Especially before holiday inventory season. |
| Supplier/vendor confidence | Higher is better | 20% | Critical for Chapter 11 and holiday inventory. |
| Reinvestment capacity | Higher is better | 15% | Needed for stores, digital, fulfillment. |
| Operating momentum | Stable/improving is better | 15% | Tracks SSS, sales base and customer confidence. |

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
