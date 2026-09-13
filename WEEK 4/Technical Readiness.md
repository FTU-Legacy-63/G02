## 5. Technical Readiness

### 5.1 Required Week 4 Files / Outputs

| Output | Purpose | Status |
|---|---|---|
| `docs/LOGIC_SPEC_v1.md` | Full input/state -> rule -> output -> claim boundary logic for Toys "R" Us. | Ready to draft from this Week 4 package. |
| `docs/SCORING_ARCHITECTURE_v0.1.md` | Event-based scoring contract and pillar separation. | Logic defined; weights are ready for team approval. |
| `tests/W4_EXPECTED_RESULTS.md` | Good, poor and bad-execution paths with expected vs actual. | Expected paths defined; actual requires runnable engine. |
| Case 01 rule/effect metadata | Encodes evidence, diagnosis, treatment and consequence rules. | Defined conceptually; must be implemented in case config. |
| Feedback / Outcome panel | Shows Result -> Reason -> Meaning -> Action -> Limit. | UI requirement defined; implementation pending. |
| Claim / limitation audit | Labels claims as calculation, classification, recommendation or simulation assumption. | Core audit included above; should be copied into repo docs. |

### 5.2 Engine Readiness Checklist

| Area | Required Capability | Ready? |
|---|---|---|
| Decision validation | Min/max selection, evidence prerequisites, treatment preconditions. | Spec ready |
| Draft vs confirmed state | Draft choices do not trigger consequences until Confirm. | Spec ready |
| State transition | Deterministic transition returns next state, feedback, events and next node. | Spec ready |
| Evidence system | LOCKED / DISCOVERED / VERIFIED / CITED. | Spec ready |
| Treatment resolver | Applies base success probabilities and modifiers. | Spec ready |
| Scoring engine | Listens to investigation, diagnosis, treatment, communication and adaptation events. | Spec ready |
| Final result | Separates Counselor Process, Financial Outcome and Client Experience. | Spec ready |
| Tests | Expected paths and boundary tests defined. | Expected defined; automated tests pending. |

### 5.3 Minimum Test Set For Week 4

| Test | Expected Behavior |
|---|---|
| Diagnose before opening any critical evidence | Diagnosis score = 0 or strong premature-diagnosis penalty. |
| Select evidence not discovered | Evidence cannot be selected/cited. |
| Correct diagnosis with 3 decisive clues | Diagnosis score can reach full score. |
| Option B operational cuts only | Short-term cash feedback positive, long-term outcome negative. |
| Option D in September without supplier preparation | Success probability = 0.10. |
| Option D with supplier preparation and non-holiday timing | Success probability = 0.70. |
| Red herring overuse | Investigation efficiency falls. |
| Same state scored twice | Same score result both times. |
| Counselor Process vs Financial Outcome | Good process can still have bad outcome if execution event is bad. |
| Final screen | Shows evidence used, diagnosis, treatment, modifiers, limitations and real-world comparison. |

### 5.4 Definition Of Done For Week 4

Week 4 is done when a reviewer can:

1. Read one player input and predict the expected output before running the game.
2. See which rule caused each state change.
3. See which evidence supports or limits each diagnosis/recommendation.
4. Confirm Counselor Process is separated from Financial Outcome and Client Experience.
5. Verify the game does not use hidden option-specific point tables.
6. Identify assumptions, source limitations and unsupported claims.
