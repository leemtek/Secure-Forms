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
    s5headachePain; s5headachePain_priority;
    s5earPain; s5earPain_priority;
    s5jawPain; s5jawPain_priority;
    s5painChewing; s5painChewing_priority;
    s5facialPain; s5facialPain_priority;
    s5eyePain; s5eyePain_priority;
    s5throatPain; s5throatPain_priority;
    s5neckPain; s5neckPain_priority;
    s5shoulderPain; s5shoulderPain_priority;
    s5backPain; s5backPain_priority;
    s5limitedOpenMouth; s5limitedOpenMouth_priority;
    s5jawJointLocking; s5jawJointLocking_priority;
    s5jawJointNoises; s5jawJointNoises_priority;
    s5earCongestion; s5earCongestion_priority;
    s5sinusCongestion; s5sinusCongestion_priority;
    s5diziness; s5diziness_priority;
    s5tinnitus; s5tinnitus_priority;
    s5muscleTwitching; s5muscleTwitching_priority;
    s5visionProblems; s5visionProblems_priority;

    // Right Column
    s5kickingJerkingLeg; s5kickingJerkingLeg_priority;
    s5swellingAnklesFeed; s5swellingAnklesFeed_priority;
    s5morningHoarseness; s5morningHoarseness_priority;
    s5dryMouth; s5dryMouth_priority;
    s5fatigue; s5fatigue_priority;
    s5difficultyFallingAsleep; s5difficultyFallingAsleep_priority;
    s5tossingTurning; s5tossingTurning_priority;
    s5repeatedlyAwakening; s5repeatedlyAwakening_priority;
    s5unrefreshed; s5unrefreshed_priority;
    s5significantDaytimeDrowsiness; s5significantDaytimeDrowsiness_priority;
    s5snoring; s5snoring_priority;
    s5affectSleepOthers; s5affectSleepOthers_priority;
    s5gaspingWaking; s5gaspingWaking_priority;
    s5stopBreathing; s5stopBreathing_priority;
    s5nightChokingSpells; s5nightChokingSpells_priority;
    s5cpap; s5cpap_priority;
    s5toothGrinding; s5toothGrinding_priority;
    s5teethCrowding; s5teethCrowding_priority;
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