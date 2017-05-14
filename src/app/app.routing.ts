import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./pages/home.component";

export const APP_ROUTES: Routes = [
    { path: "", component: HomeComponent },
    
    // Landing Pages
    { path: "changessalon", loadChildren: "app/pages/changessalon/job-application/job-application.module#NewPatientModule" },
    { path: "tmjsleeptherapycentre", loadChildren: "app/pages/tmjsleeptherapycentre/new-patient/new-patient.module#NewPatientModule" }
];

export const routing = RouterModule.forRoot(APP_ROUTES);