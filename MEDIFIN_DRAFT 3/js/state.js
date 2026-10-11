const gameState = {

    // Current position
    currentScreen: 0,
    currentPhase: 0,


    // =========================
    // INVESTIGATION
    // =========================

    investigation: {

        selectedFiles: [],

        selectedQuestions: [],

        openedEvidence: []

    },


    // =========================
    // DIAGNOSIS
    // =========================

    diagnosis: {

        selected: null,

        rationale: ""

    },


    // =========================
    // TREATMENT
    // =========================

    treatment: {

        selected: null

    },


    // =========================
    // EXECUTION
    // =========================

    execution: {

        timing: null,

        stakeholders: []

    },


    // =========================
    // REASSESSMENT
    // =========================

    reassessment: {

        diagnosis: null,

        treatment: null,

        rationale: ""

    },


    // =========================
    // COUNSELOR SCORE
    // =========================

    scores: {

        investigation: null,

        diagnosis: null,

        treatment: null,

        execution: null,

        reassessment: null,

        total: null

    },


    // =========================
    // COMPANY OUTCOME
    // =========================

    outcome: {

        financialResilience: null,

        governanceStability: null,

        finalOutcome: null

    }

};