import { Routes, RouterModule } from "@angular/router";

import { NewPatientComponent } from "./new-patient.component";

export const newPatientRouting = RouterModule.forChild([
    { path: "new-patient", component: NewPatientComponent }
]); // registerRouting