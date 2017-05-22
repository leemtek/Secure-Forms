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
    s2college_name: string; s2college_major: string;
    s2why: string;
    s2startDate: string; s2desiredSalary: string;
    s2maximumHours: string;
    s2essentialFunctions: string;
    s2essentialFunctions_why: string;
    s2appliedBefore: string;


    /* ========================================================
        Section 3: Work History
    ======================================================== */
    s3companyName_1;
    s3companyAddress_1;
    s3supervisorName_1; s3supervisorContact_1;
    s3phone_1; s3employmentDate_from_1; s3employmentDate_to_1;
    s3jobDutiesandTitle_1;
    s3reasonLeaving_1;
    s3salary_starting_1; s3salary_ending_1;


    /* ========================================================
        Final Section: Signature & Google reCaptcha
    ======================================================== */
    sfSignature: string; sfSignatureDate: string;
    googleResponse: string;
}