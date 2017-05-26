export interface User {
    /* ========================================================
        Section 1: Authorization for Information Release
    ======================================================== */
    s1DrName1; s1DrLocationPhone1;
    s1DrName2; s1DrLocationPhone2;
    s1DrName3; s1DrLocationPhone3;
    s1DrName4; s1DrLocationPhone4;
    s1DrName5; s1DrLocationPhone5;
    s1DrName6; s1DrLocationPhone6;
    s1DrName7; s1DrLocationPhone7;

    s1PatientSignature;
    s1SignatureDate;


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

    s2PatientSignature;
    s2SignatureDate;


    /* ========================================================
        Section 3: Nightime Sleepiness Evaluation
    ======================================================== */
    s3snoring_a: number; s3snoring_b: number;
    s3gasp: number;
    s3collarSize: number;
    s3sleep_busyOrActive: number; s3sleep_drivingOrStoppedAtLight: number;
    s3highBloodPressure: number;
    s3total: number;

    s3PatientSignature;
    s3SignatureDate;


    /* ========================================================
        Section 4: Patient Information
    ======================================================== */
    s4title;
    s4firstName; s4middleName; s4lastName;
    s4age: number; s4dob;
    s4referredBy; s4referredBy_title;
    s4locationHealthProvider;
    s4patient_address;
    s4patient_city; s4patient_state; s4patient_zip;
    s4patient_homePhone; s4patient_altPhone;
    s4empType;

    // Responsible Party
    s4responsibleParty;
    s4responsibleParty_address;
    s4responsibleParty_city; s4responsibleParty_state; s4responsibleParty_zip;

    // Family Dentist
    s4familyDentist; s4familyDentist_contact;
    s4familyPhysician; s4familyPhysician_contact;
    s4reasonForAppt;


    /* ========================================================
        Section 5: Chief Complaint
    ======================================================== */
    // Left Column
    s5headachePain;
    s5earPain;
    s5jawPain;
    s5painChewing;
    s5facialPain;
    s5eyePain;
    s5throatPain;
    s5neckPain;
    s5shoulderPain;
    s5backPain;
    s5limitedOpenMouth;
    s5jawJointLocking;
    s5jawJointNoises;
    s5earCongestion;
    s5sinusCongestion;
    s5diziness;
    s5tinnitus;
    s5muscleTwitching;
    s5visionProblems;

    // Right Column
    s5kickingJerkingLeg;
    s5swellingAnklesFeed;
    s5morningHoarseness;
    s5dryMouth;
    s5fatigue;
    s5difficultyFallingAsleep;
    s5tossingTurning;
    s5repeatedlyAwakening;
    s5unrefreshed;
    s5significantDaytimeDrowsiness;
    s5snoring;
    s5affectSleepOthers;
    s5gaspingWaking;
    s5stopBreathing;
    s5nightChokingSpells;
    s5cpap;
    s5toothGrinding;
    s5teethCrowding;
    s5other;

    // Do you have concerns in any of these areas?
    s5concerns;

    // More
    s5comments;
    s5affectDailyLife;
    s5resultsFromTreatment;

    // Signature
    s5PatientSignature;
    s5SignatureDate;

    /* ========================================================
        Final Section: Google reCaptcha
    ======================================================== */
    googleResponse;
}