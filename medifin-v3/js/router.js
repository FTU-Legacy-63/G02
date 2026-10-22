const SCREEN_FLOW = [

    // =========================
    // INTRO / ONBOARDING
    // =========================

    {
        id: 0,
        phase: 0,
        name: "Landing"
    },

    {
        id: 1,
        phase: 0,
        name: "Login"
    },

    {
        id: 2,
        phase: 0,
        name: "Receive Assignment"
    },


    // =========================
    // PHASE 1 — INVESTIGATION
    // =========================

    {
        id: 3,
        phase: 1,
        name: "Client Intake File"
    },

    {
        id: 4,
        phase: 1,
        name: "Client Interview"
    },

    {
        id: 5,
        phase: 1,
        name: "Case Files"
    },

    {
        id: 6,
        phase: 1,
        name: "Questions"
    },

    {
        id: 7,
        phase: 1,
        name: "Financial Statements"
    },


    // =========================
    // PHASE 2 — DIAGNOSIS
    // =========================

    {
        id: 8,
        phase: 2,
        name: "Primary Diagnosis"
    },


    // =========================
    // PHASE 3 — TREATMENT
    // =========================

    {
        id: 9,
        phase: 3,
        name: "Treatment Strategy"
    },

    {
        id: 10,
        phase: 3,
        name: "Execution Plan"
    },


    // =========================
    // PHASE 4 — CONSEQUENCES
    // =========================

    {
        id: 11,
        phase: 4,
        name: "Consequences"
    },


    // =========================
    // PHASE 5 — REASSESSMENT
    // =========================

    {
        id: 12,
        phase: 5,
        name: "New Development"
    },

    {
        id: 13,
        phase: 5,
        name: "Reassessment"
    },


    // =========================
    // PHASE 6 — FINAL REPORT
    // =========================

    {
        id: 14,
        phase: 6,
        name: "Counselor Case Report"
    },

    {
        id: 15,
        phase: 6,
        name: "Reflection"
    }

];


function goToScreen(screenId) {

    const target = SCREEN_FLOW.find(
        screen => screen.id === screenId
    );

    if (!target) {
        console.error("Screen not found:", screenId);
        return;
    }

    gameState.currentScreen = target.id;
    gameState.currentPhase = target.phase;

    renderApp();

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}