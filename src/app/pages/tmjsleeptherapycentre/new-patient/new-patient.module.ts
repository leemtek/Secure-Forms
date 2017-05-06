import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { newPatientRouting } from "./new-patient.routing";

import { NewPatientComponent } from "./new-patient.component";

@NgModule({
    declarations: [
        NewPatientComponent
    ],
    imports: [
        CommonModule,
        newPatientRouting
    ]
})

export class NewPatientModule {}