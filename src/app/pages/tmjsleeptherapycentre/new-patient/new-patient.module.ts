import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

// Required for form
import { FormsModule  } from '@angular/forms';
import { ReCaptchaModule } from 'angular2-recaptcha';

import { newPatientRouting } from "./new-patient.routing";

import { HeaderComponent } from "./header.component";
import { NewPatientComponent } from "./new-patient.component";
import { ThankYouComponent } from "./thank-you.component";

@NgModule({
    declarations: [
        HeaderComponent,
        NewPatientComponent,
        ThankYouComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReCaptchaModule,
        newPatientRouting
    ]
})

export class NewPatientModule {}