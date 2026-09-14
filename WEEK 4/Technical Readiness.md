## 5. Technical Readiness

### 5.1 Required Week 4 Files / Outputs

| Output | Purpose | Status |
|---|---|---|
| `docs/LOGIC_SPEC_v1.md` | Full input/state -> rule -> output -> claim boundary logic for Toy Kingdom Inc. (mô phỏng Toys "R" Us). | Ready to draft from this Week 4 package. |
| `docs/SCORING_ARCHITECTURE_v0.1.md` | Event-based scoring contract and pillar separation across Uy tín (Credibility), Sức khỏe Tài chính (Financial Resilience) and Ổn định Quản trị - Gia tộc (Governance Stability). | Logic defined; weights are ready for team approval. |
| `tests/W4_EXPECTED_RESULTS.md` | Good, poor and bad-execution paths (Path A/B/C) with expected vs actual. | Expected paths defined; actual requires runnable engine. |
| Case 01 rule/effect metadata | Encodes HS-A…HS-G dossier, CH1/CH2 question, CD-A…CD-F diagnosis, PD-A…PD-F protocol, TG-A…TG-D timing and Màn 9 priority-group consequence rules. | Defined conceptually; must be implemented in case config. |
| Feedback / Outcome panel | Shows Result -> Reason -> Meaning -> Action -> Limit. | UI requirement defined; implementation pending. |
| Claim / limitation audit | Labels claims as calculation, classification, recommendation or simulation assumption. | Core audit included above; should be copied into repo docs. |

### 5.2 Engine Readiness Checklist

| Area | Required Capability | Ready? |
|---|---|---|
| Decision validation | Min/max selection per screen (3/7 dossiers, 2/7 questions, 1/7 final question, 1/6 diagnosis, 1/6 protocol, 1/4 timing, 3/7 priorities), evidence prerequisites, Credibility gates for PD-A/PD-F. | Spec ready |
| Draft vs confirmed state | Draft choices do not trigger consequences until Confirm. | Spec ready |
| State transition | Deterministic transition returns next state, feedback, events and next node. | Spec ready |
| Evidence system | OPEN (chosen at Màn 2) / PERMANENTLY LOCKED (unchosen at Màn 2) / REFERENCED (cited in a diagnosis). | Spec ready |
| Treatment resolver | Applies Credibility gates and the point-based Financial Resilience modifiers (protocol x timing x priority combination) defined in Màn 7-9-12. | Spec ready |
| Scoring engine | Listens to investigation, diagnosis, treatment, timing, preparation and re-examination (Màn 11) events; updates Credibility, Financial Resilience and Governance Stability. | Spec ready |
| Final result | Separates Uy tín (Credibility), Sức khỏe Tài chính (Financial Resilience) and Ổn định Quản trị - Gia tộc (Governance Stability) into the 3x3 outcome matrix. | Spec ready |
| Tests | Expected paths and boundary tests defined. | Expected defined; automated tests pending. |

### 5.3 Minimum Test Set For Week 4

| Test | Expected Behavior |
|---|---|
| Diagnose before opening any dossier at Màn 2 | Diagnosis accepted with zero evidence coverage triggers a Credibility penalty and a premature-diagnosis warning. |
| Select a dossier not opened at Màn 2 | Dossier cannot be selected or cited later, including at Màn 11 re-examination. |
| Correct diagnosis with HS-A, HS-D and CH1-D | Diagnosis reasoning reaches full strength; no Credibility penalty; all six protocols unlock (subject to Credibility gates). |
| PD-B (Deep Cost Cutting) alone | Short-term cash feedback positive; long-term Financial Resilience/root-cause outcome negative if the real disease was capital structure. |
| PD-E (Bankrupt with Reorganization) with TG-A and no Suppliers priority at Màn 9 | Financial Resilience modifier = -2; Vendor Update shows cash-in-advance demands and inventory shortage. |
| PD-E with Suppliers priority at Màn 9 and avoiding TG-D | Financial Resilience modifier = +1; restructuring has a credible chance of a "Sống sót" tier. |
| Both Màn 3 questions spent on an already-opened dossier | Investigation efficiency falls (wasted opportunity to narrow gaps before Màn 4). |
| Same state scored twice | Same score result both times. |
| Uy tín (Credibility) vs Sức khỏe Tài chính (Financial Resilience) | Good diagnosis/process can still produce a poor Financial Resilience outcome if a timing or preparation event goes badly (Path C). |
| Final screen | Shows dossiers opened, questions asked, diagnosis and protocol before/after re-exam, timing, priorities, final Credibility, both score tiers, and real-world comparison. |

### 5.4 Definition Of Done For Week 4

Week 4 is done when a reviewer can:

1. Read one player input and predict the expected output before running the game.
2. See which rule caused each state change.
3. See which dossier/question supports or limits each diagnosis/treatment.
4. Confirm Uy tín (Credibility) is separated from Sức khỏe Tài chính (Financial Resilience) and Ổn định Quản trị - Gia tộc (Governance Stability).
5. Verify all point-based modifiers (protocol x timing x priority, HS-G effects) are documented in the design spec, not hard-coded as opaque values inside engine code.
6. Identify assumptions, source limitations and unsupported claims.
