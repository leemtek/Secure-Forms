import { Component, ViewChild } from "@angular/core";
import { ReCaptchaComponent } from 'angular2-recaptcha';
import { constGlobals } from "../../../shared/globals";

import { SeoService } from "../../../shared/seo.service";
import { NewPatientService} from "./new-patient.service";

// Enables jQuery
declare var $:any;

@Component({
    selector: "tmj-new-patient",
    templateUrl: "new-patient.html",
    styles: [`
        h2 { font-size: 24px; }
    `],
    providers: [NewPatientService, SeoService]
})
export class NewPatientComponent {
    @ViewChild(ReCaptchaComponent) captcha: ReCaptchaComponent;
    bower_components = constGlobals.bower_components;
    objUser; // holds user contents

    constructor(private newPatientService: NewPatientService, private seoService: SeoService) {
        this.objUser = newPatientService.objUser;

        // SEO settings.
        seoService.setTitle("Patient Health Questionnaire | TMJ & Sleep Therapy Centre of San Francisco");
        seoService.setMetaDescription("Patient Health Questionnaire for TMJ & Sleep Therapy Centre of San Francisco.");
    } // constructor()

    // Send to REST endpoint.
    mdSend() {
        // Disable submit button and indicate "Please wait...".
        document.getElementById("btnSubmit").textContent = "Please Wait...";
        document.getElementById("btnSubmit").classList.remove("btn-primary");
        document.getElementById("btnSubmit").classList.add("btn-info");
        (<HTMLInputElement> document.getElementById("btnSubmit")).disabled = true;

        // Attempt to send email.
        this.newPatientService.mdSendData(this.objUser)
            .subscribe(data => {
                if (data.sent === "yes") {
                    // Success
                    document.getElementById("btnSubmit").textContent = "Email Sent!";
                    document.getElementById("btnSubmit").classList.remove("btn-info");
                    document.getElementById("btnSubmit").classList.add("btn-success");
                    (<HTMLInputElement> document.getElementById("btnSubmit")).disabled = true;
                } else {
                    // Something went wrong.
                    document.getElementById("btnSubmit").textContent = "Please try again.";
                    document.getElementById("btnSubmit").classList.remove("btn-info");
                    document.getElementById("btnSubmit").classList.add("btn-danger");
                    (<HTMLInputElement> document.getElementById("btnSubmit")).disabled = false;

                    // Reset captcha.
                    this.objUser.googleResponse = null;
                    this.captcha.reset();
                } // else
            }) // subscribe()
        ; // sendEmailService.mdSendData()
    } // mdSend()

    // Handle the captcha response and save to objUserDetails.captchaResponse
    mdCaptchaHandle(strResponse: string): void {
        this.objUser.googleResponse = strResponse;
    } // mdCaptchaHandle(response)

    // Handles expired captchas.
    mdCaptchaExpired(): void {
        this.objUser.googleResponse = null;
        this.captcha.reset();
    }
} // NewPatientComponent