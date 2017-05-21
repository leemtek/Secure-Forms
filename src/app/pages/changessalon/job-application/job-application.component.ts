import { Component, ViewChild } from "@angular/core";
import { ReCaptchaComponent } from 'angular2-recaptcha';
import { constGlobals } from "../../../shared/globals";

import { SeoService } from "../../../shared/seo.service";
import { JobApplicationService} from "./job-application.service";

// Enables jQuery
declare var $:any;

@Component({
    selector: "changessalon-job-application",
    templateUrl: "job-application.html",
    styles: [`
        h2 { font-size: 24px; font-weight: bold; }

        .lead { font-size: 18px; }
    `],
    providers: [JobApplicationService, SeoService]
})
export class JobApplicationComponent {
    @ViewChild(ReCaptchaComponent) captcha: ReCaptchaComponent;
    bower_components = constGlobals.bower_components;
    objUser; // holds user contents

    constructor(private JobApplicationService: JobApplicationService, private seoService: SeoService) {
        this.objUser = JobApplicationService.objUser;

        // SEO settings.
        seoService.setTitle("Job Application | Changes Salon");
        seoService.setMetaDescription("Walnut Creek's Premier Salon and Day Spa.");
    } // constructor()

    // Send to REST endpoint.
    mdSend() {
        // Disable submit button and indicate "Please wait...".
        document.getElementById("btnSubmit").textContent = "Please Wait...";
        document.getElementById("btnSubmit").classList.remove("btn-primary");
        document.getElementById("btnSubmit").classList.add("btn-info");
        (<HTMLInputElement> document.getElementById("btnSubmit")).disabled = true;

        // Attempt to send email.
        this.JobApplicationService.mdSendData(this.objUser)
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