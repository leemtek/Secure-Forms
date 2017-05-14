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
        Section 3: Nightime Sleepiness Evaluation
    ======================================================== */
    s3snoring_a: number; s3snoring_b: number;
    s3gasp: number;
    s3collarSize: number;
    s3sleep_busyOrActive: number; s3sleep_drivingOrStoppedAtLight: number;
    s3highBloodPressure: number;
    s3total: number;

    s3PatientSignature: string;
    s3SignatureDate: string;


    /* ========================================================
        Section 4: Patient Information
    ======================================================== */
    s4title: string;
    s4firstName: string; s4middleName: string; s4lastName: string;
    s4age: number; s4dob: string;
    s4referredBy: string; s4referredBy_title: string;
    s4locationHealthProvider: string;
    s4patient_address: string;
    s4patient_city: string; s4patient_state: string; s4patient_zip: string;
    s4patient_homePhone: string; s4patient_altPhone: string;
    s4empType: string;

    // Responsible Party
    s4responsibleParty: string;
    s4responsibleParty_address: string;
    s4responsibleParty_city: string; s4responsibleParty_state: string; s4responsibleParty_zip: string;

    // Family Dentist
    s4familyDentist: string; s4familyDentist_contact: string;
    s4familyPhysician: string; s4familyPhysician_contact: string;
    s4reasonForAppt: string;


    /* ========================================================
        Final Section: Google reCaptcha
    ======================================================== */
    googleResponse: string;
}