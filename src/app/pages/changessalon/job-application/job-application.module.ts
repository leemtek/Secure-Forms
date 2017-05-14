import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

// Required for form
import { FormsModule  } from '@angular/forms';
import { ReCaptchaModule } from 'angular2-recaptcha';

import { jobApplicationRouting } from "./job-application.routing";

import { HeaderComponent } from "./header.component";
import { JobApplicationComponent } from "./job-application.component";
import { ThankYouComponent } from "./thank-you.component";

@NgModule({
    declarations: [
        HeaderComponent,
        JobApplicationComponent,
        ThankYouComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReCaptchaModule,
        jobApplicationRouting
    ]
})

export class NewPatientModule {}