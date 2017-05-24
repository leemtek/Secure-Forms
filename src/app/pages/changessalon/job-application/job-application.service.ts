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
    
    // Contains user's info.
    objUser: User = {
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
        s2position: "Web Developer",
        s2under18: "Choose",
        s2authorizedUS: "Choose",
        s2student: "Choose", s2student_where: "From DuaneLeem.com",
        s2highSchool: "Choose", s2highSchool_name: null,
        s2college: "Choose", s2college_graduated: "na",
        s2college_name: "Golden Gate University", s2college_major: "IT Management",
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
        

        /* ========================================================
            Final Section: Google reCaptcha
        ======================================================== */
        sfSignature: null, sfSignatureDate: null,
        googleResponse: null
    };
    
    constructor (private http: Http) {
        
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