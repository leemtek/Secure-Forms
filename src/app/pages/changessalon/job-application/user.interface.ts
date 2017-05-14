export interface User {
    /* ========================================================
        Section 1: Personal Information
    ======================================================== */
    s1FullName: string;
    s1Date: string;
    s1Phone_home: string;
    s1Phone_mobile: string;
    s1Email: string;
    s1SSN: string;
    s1Address: string;
    s1State: string; s1City: string; s1Zip: string;


    /* ========================================================
        Final Section: Signature & Google reCaptcha
    ======================================================== */
    sfSignature: string; sfSignatureDate: string;
    googleResponse: string;
}