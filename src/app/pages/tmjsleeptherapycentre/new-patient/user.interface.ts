export interface User {
    /* ========================================================
        Section 1: Authorization for Information Release
    ======================================================== */
    s1DrName1: string; s1DrLocationPhone1: string;
    s1DrName2: string; s1DrLocationPhone2: string;
    s1DrName3: string; s1DrLocationPhone3: string;
    s1DrName4: string; s1DrLocationPhone4: string;
    s1DrName5: string; s1DrLocationPhone5: string;
    s1DrName6: string; s1DrLocationPhone6: string;
    s1DrName7: string; s1DrLocationPhone7: string;

    s1PatientSignature: string;
    s1SignatureDate: string;

    /* ========================================================
        Section 2: Daytime Sleepiness Evaluation
    ======================================================== */
    s2sittingReading: number;
    s2watcingTV: number;
    s2inactive: number;
    s2passenger: number;
    s2lyingDown: number;
    s2talking: number;
    s2noAlcohol: number;
    s2traffic: number;
    s2total: number;

    s2PatientSignature: string;
    s2SignatureDate: string;

    /* ========================================================
        Final Section: Google reCaptcha
    ======================================================== */
    googleResponse: string;
}