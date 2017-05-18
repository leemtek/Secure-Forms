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
            Section 3: Nightime Sleepiness Evaluation
        ======================================================== */
            s3snoring_a: 0,  s3snoring_b: 0, 
            s3gasp: 0, 
            s3collarSize: 0, 
            s3sleep_busyOrActive: 0, s3sleep_drivingOrStoppedAtLight: 0,
            s3highBloodPressure: 0,
            s3total: 0, 

            s3PatientSignature: "Duane Leem S3",
            s3SignatureDate: "5/13/2017",


        /* ========================================================
            Section 4: Patient Information
        ======================================================== */
            s4title: "na",
            s4firstName: "Duane", s4middleName: null, s4lastName: "Leem",
            s4age: 30, s4dob: "5/16/2000",
            s4referredBy: "Dr. Alkhoury", s4referredBy_title: "DDS",
            s4locationHealthProvider: null,
            s4patient_address: null,
            s4patient_city: null, s4patient_state: null, s4patient_zip: null,
            s4patient_homePhone: null, s4patient_altPhone: null,
            s4empType: null,

            // Responsible Party
            s4responsibleParty: "Duane Leem",
            s4responsibleParty_address: "123 Test Ln",
            s4responsibleParty_city: "San Francisco", s4responsibleParty_state: "CA", s4responsibleParty_zip: "94531",

            // Family Dentist
            s4familyDentist: null, s4familyDentist_contact: null,
            s4familyPhysician: null, s4familyPhysician_contact: null,
            s4reasonForAppt: null,

        
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

    get_s3total(): number {
        this.objUser.s3total = 
            Number.parseInt(this.objUser.s3snoring_a.toString()) + 
            Number.parseInt(this.objUser.s3snoring_b.toString()) + 
            Number.parseInt(this.objUser.s3gasp.toString()) + 
            Number.parseInt(this.objUser.s3collarSize.toString()) + 
            Number.parseInt(this.objUser.s3sleep_busyOrActive.toString()) + 
            Number.parseInt(this.objUser.s3sleep_drivingOrStoppedAtLight.toString()) + 
            Number.parseInt(this.objUser.s3highBloodPressure.toString())
        ; // this.objUser.s2total
        return this.objUser.s3total;
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