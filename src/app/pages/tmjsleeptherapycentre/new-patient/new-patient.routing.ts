import { Routes, RouterModule } from "@angular/router";

import { HeaderComponent } from "./header.component";
import { NewPatientComponent } from "./new-patient.component";
import { ThankYouComponent } from "./thank-you.component";

export const newPatientRouting = RouterModule.forChild([
    { path: "new-patient", component: NewPatientComponent },
    { path: "thank-you", component: ThankYouComponent }

]); // registerRouting