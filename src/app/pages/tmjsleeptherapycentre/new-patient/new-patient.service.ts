import { Injectable } from "@angular/core";
import { Http, Response, Headers } from "@angular/http";

// Model
import { User } from "./user.interface";

// rxjs
import {Observable} from "rxjs/Observable";
import "rxjs/Rx"; // used for .map

@Injectable()
export class NewPatientService {
    // Contains user's info.
    objUser: User = {
        /* ========================================================
            Section 1: Authorization for Information Release
        ======================================================== */
        s1DrName1: "Dr. Jamil Alkhoury", s1DrLocationPhone1: "925-526-5229",
        s1DrName2: null, s1DrLocationPhone2: null,
        s1DrName3: null, s1DrLocationPhone3: null,
        s1DrName4: null, s1DrLocationPhone4: null,
        s1DrName5: null, s1DrLocationPhone5: null,
        s1DrName6: null, s1DrLocationPhone6: null,
        s1DrName7: null, s1DrLocationPhone7: null,

        s1PatientSignature: "Duane Leem",
        s1SignatureDate: "05/06/2017",

        /* ========================================================
            Section 2: Daytime Sleepiness Evaluation
        ======================================================== */
    };

    // REST API Location
    strRegisterAPI: string = "http://localhost:8010/iahsp-31959/us-central1/register/member/payment";
    
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