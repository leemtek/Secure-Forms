import { Injectable } from "@angular/core";
import { Http, Response, Headers } from "@angular/http";

// Model
import { User } from "./user.interface";

// rxjs
import {Observable} from "rxjs/Observable";
import "rxjs/Rx"; // used for .map

@Injectable()
export class NewPatientService {
    // REST API Location
    strRegisterAPI: string = "http://localhost:3003/forms/secure-forms/tmjsleeptherapycentre/new-patient";
    
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
        s2sittingReading: 0,
        s2watcingTV: 0,
        s2inactive: 1,
        s2passenger: 0,
        s2lyingDown: 0,
        s2talking: 0,
        s2noAlcohol: 0,
        s2traffic: 0,

        // Calculate Total
        s2total: 0,

        s2PatientSignature: "Duane Leem",
        s2SignatureDate: "05/06/2017",

        /* ========================================================
            Final Section: Google reCaptcha
        ======================================================== */
        googleResponse: null
    };

    get_s2total(): number {
        this.objUser.s2total = 
            Number.parseInt(this.objUser.s2sittingReading.toString()) + 
            Number.parseInt(this.objUser.s2watcingTV.toString()) + 
            Number.parseInt(this.objUser.s2inactive.toString()) + 
            Number.parseInt(this.objUser.s2passenger.toString()) + 
            Number.parseInt(this.objUser.s2lyingDown.toString()) + 
            Number.parseInt(this.objUser.s2talking.toString()) + 
            Number.parseInt(this.objUser.s2noAlcohol.toString()) + 
            Number.parseInt(this.objUser.s2traffic.toString())
        ; // this.objUser.s2total
        return this.objUser.s2total;
    } // set_s2total
    
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