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
    styles: [``],
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
        document.getElementById("registration_submit").textContent = "Please Wait...";
        document.getElementById("registration_submit").classList.remove("btn-primary");
        document.getElementById("registration_submit").classList.add("btn-info");
        (<HTMLInputElement> document.getElementById("registration_submit")).disabled = true;

        // Attempt to send email.
        this.newPatientService.mdSendData(this.objUser)
            .subscribe(data => {
                if (data.sent === "yes") {
                    // Success
                    document.getElementById("registration_submit").textContent = "Email Sent!";
                    document.getElementById("registration_submit").classList.remove("btn-info");
                    document.getElementById("registration_submit").classList.add("btn-success");
                    (<HTMLInputElement> document.getElementById("registration_submit")).disabled = true;
                } else {
                    // Something went wrong.
                    document.getElementById("registration_submit").textContent = "Please try again.";
                    document.getElementById("registration_submit").classList.remove("btn-info");
                    document.getElementById("registration_submit").classList.add("btn-danger");
                    (<HTMLInputElement> document.getElementById("registration_submit")).disabled = false;

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