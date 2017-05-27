import { Injectable } from "@angular/core";
import { Http, Response, Headers } from "@angular/http";

// Model
import { User } from "./user.interface";

// rxjs
import {Observable} from "rxjs/Observable";
import "rxjs/Rx"; // used for .map

@Injectable()
export class JobApplicationService {
    // REST API Location
    strRegisterAPI: string = "http://localhost:3003/forms/secure-forms/changessalon/job-application";

    isTesting: boolean = false;
    objUser: User;

    
    
    
    
    constructor (private http: Http) {
        if (this.isTesting) {
            // Contains user's info.
            this.objUser = {
                /* ========================================================
                    Section 1: Personal Information
                ======================================================== */
                s1FullName: "Duane Leem",
                s1Date: "05/26/2017",
                s1Phone_home: "Home Phone",
                s1Phone_mobile: "Mobile Phone",
                s1Email: "Duane@LeemTek.com",
                s1SSN: "SSN",
                s1Address: "123 Test Ln",
                s1State: "CA", s1City: "Antioch", s1Zip: "94531",


                /* ========================================================
                    Section 2: Questions
                ======================================================== */
                s2position: "Web Developer",
                s2under18: "No",
                s2authorizedUS: "Yes",
                s2student: "Yes", s2student_where: "From DuaneLeem.com",
                s2highSchool: "4", s2highSchool_name: "Pittsburg High School",
                s2college: "4", s2college_graduated: "Yes",
                s2college_name: "Golden Gate University", s2college_major: "IT Management",
                s2why: "Because it's awesome.",
                s2startDate: "Long time ago.", s2desiredSalary: "A lot.",
                s2maximumHours: "40",
                s2essentialFunctions: "Yes",
                s2essentialFunctions_why: null,
                s2appliedBefore: "No",


                /* ========================================================
                    Section 3: Work History
                ======================================================== */
                // Company 1
                s3companyName_1: "StagedHomes.com",
                s3companyAddress_1: "123 Test Ln.",
                s3supervisorName_1: "Duane's Boss", s3supervisorContact_1: "Yes",
                s3phone_1: "Main Phone", s3employmentDate_from_1: "2006", s3employmentDate_to_1: "Current",
                s3jobDutiesandTitle_1: "Making Applications",
                s3reasonLeaving_1: "Never left.",
                s3salary_starting_1: "100k", s3salary_ending_1: "140k",

                // Company 2
                s3companyName_2: null,
                s3companyAddress_2: null,
                s3supervisorName_2: null, s3supervisorContact_2: "Choose",
                s3phone_2: null, s3employmentDate_from_2: null, s3employmentDate_to_2: null,
                s3jobDutiesandTitle_2: null,
                s3reasonLeaving_2: null,
                s3salary_starting_2: null, s3salary_ending_2: null,

                // Company 3
                s3companyName_3: null,
                s3companyAddress_3: null,
                s3supervisorName_3: null, s3supervisorContact_3: "Choose",
                s3phone_3: null, s3employmentDate_from_3: null, s3employmentDate_to_3: null,
                s3jobDutiesandTitle_3: null,
                s3reasonLeaving_3: null,
                s3salary_starting_3: null, s3salary_ending_3: null,

                // Additional company information.
                s3additionalCompanyInfo: null,


                /* ========================================================
                    Section 4: References
                ======================================================== */
                // Reference 1
                s4name_1: null, s4phone_1: null,
                s4address_1: null,
                s4yearsAcquainted_1: null, s4occupation_1: null,

                // Reference 2
                s4name_2: null, s4phone_2: null,
                s4address_2: null,
                s4yearsAcquainted_2: null, s4occupation_2: null,

                // Reference 3
                s4name_3: null, s4phone_3: null,
                s4address_3: null,
                s4yearsAcquainted_3: null, s4occupation_3: null,


                /* ========================================================
                    Section 5: Availability
                ======================================================== */
                s5sunday_earliest: null, s5sunday_latest: null,
                s5monday_earliest: null, s5monday_latest: null,
                s5tuesday_earliest: null, s5tuesday_latest: null,
                s5wednesday_earliest: null, s5wednesday_latest: null,
                s5thursday_earliest: null, s5thursday_latest: null,
                s5friday_earliest: null, s5friday_latest: null,
                s5saturday_earliest: null, s5saturday_latest: null,
                

                /* ========================================================
                    Final Section: Google reCaptcha
                ======================================================== */
                sfSignature: null, sfSignatureDate: null,
                googleResponse: null
            }; // objUser
        } else {
            // Contains user's info.
            this.objUser = {
                /* ========================================================
                    Section 1: Personal Information
                ======================================================== */
                s1FullName: null,
                s1Date: null,
                s1Phone_home: null,
                s1Phone_mobile: null,
                s1Email: null,
                s1SSN: null,
                s1Address: null,
                s1State: null, s1City: null, s1Zip: null,


                /* ========================================================
                    Section 2: Questions
                ======================================================== */
                s2position: null,
                s2under18: "Choose",
                s2authorizedUS: "Choose",
                s2student: "Choose", s2student_where: null,
                s2highSchool: "Choose", s2highSchool_name: null,
                s2college: "Choose", s2college_graduated: "na",
                s2college_name: null, s2college_major: null,
                s2why: null,
                s2startDate: null, s2desiredSalary: null,
                s2maximumHours: null,
                s2essentialFunctions: "Choose",
                s2essentialFunctions_why: null,
                s2appliedBefore: "Choose",


                /* ========================================================
                    Section 3: Work History
                ======================================================== */
                // Company 1
                s3companyName_1: null,
                s3companyAddress_1: null,
                s3supervisorName_1: null, s3supervisorContact_1: "Choose",
                s3phone_1: null, s3employmentDate_from_1: null, s3employmentDate_to_1: null,
                s3jobDutiesandTitle_1: null,
                s3reasonLeaving_1: null,
                s3salary_starting_1: null, s3salary_ending_1: null,

                // Company 2
                s3companyName_2: null,
                s3companyAddress_2: null,
                s3supervisorName_2: null, s3supervisorContact_2: "Choose",
                s3phone_2: null, s3employmentDate_from_2: null, s3employmentDate_to_2: null,
                s3jobDutiesandTitle_2: null,
                s3reasonLeaving_2: null,
                s3salary_starting_2: null, s3salary_ending_2: null,

                // Company 3
                s3companyName_3: null,
                s3companyAddress_3: null,
                s3supervisorName_3: null, s3supervisorContact_3: "Choose",
                s3phone_3: null, s3employmentDate_from_3: null, s3employmentDate_to_3: null,
                s3jobDutiesandTitle_3: null,
                s3reasonLeaving_3: null,
                s3salary_starting_3: null, s3salary_ending_3: null,

                // Additional company information.
                s3additionalCompanyInfo: null,


                /* ========================================================
                    Section 4: References
                ======================================================== */
                // Reference 1
                s4name_1: null, s4phone_1: null,
                s4address_1: null,
                s4yearsAcquainted_1: null, s4occupation_1: null,

                // Reference 2
                s4name_2: null, s4phone_2: null,
                s4address_2: null,
                s4yearsAcquainted_2: null, s4occupation_2: null,

                // Reference 3
                s4name_3: null, s4phone_3: null,
                s4address_3: null,
                s4yearsAcquainted_3: null, s4occupation_3: null,


                /* ========================================================
                    Section 5: Availability
                ======================================================== */
                s5sunday_earliest: null, s5sunday_latest: null,
                s5monday_earliest: null, s5monday_latest: null,
                s5tuesday_earliest: null, s5tuesday_latest: null,
                s5wednesday_earliest: null, s5wednesday_latest: null,
                s5thursday_earliest: null, s5thursday_latest: null,
                s5friday_earliest: null, s5friday_latest: null,
                s5saturday_earliest: null, s5saturday_latest: null,
                

                /* ========================================================
                    Final Section: Google reCaptcha
                ======================================================== */
                sfSignature: null, sfSignatureDate: null,
                googleResponse: null
            }; // objUser
        }
    } // constructor

    // Send Payment and Registration
    mdSendData(objFinalUserInfo: any) {
        const strBody = JSON.stringify(objFinalUserInfo);
        const constHeaders = new Headers({ 'Content-Type': 'application/json' });

        return this.http.post(this.strRegisterAPI, strBody, { headers: constHeaders })
            .map((data: Response) => data.json())
        ; // this.http.post()
    } // mdSendData
} // RegisterService