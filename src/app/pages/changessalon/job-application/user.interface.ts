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
        Section 2: Questions
    ======================================================== */
    s2position: string;
    s2under18: string;
    s2authorizedUS: string;
    s2student: string; s2student_where: string;
    s2highSchool: string; s2highSchool_name: string;
    s2college: string; s2college_graduated: string;


    /* ========================================================
        Final Section: Signature & Google reCaptcha
    ======================================================== */
    sfSignature: string; sfSignatureDate: string;
    googleResponse: string;
}