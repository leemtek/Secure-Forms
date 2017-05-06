import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./pages/home.component";

export const APP_ROUTES: Routes = [
    { path: "", component: HomeComponent },
    
    // Landing Pages
    { path: "tmjsleeptherapycentre", loadChildren: "app/pages/tmjsleeptherapycentre/new-patient/new-patient.module#NewPatientModule" }
];

export const routing = RouterModule.forRoot(APP_ROUTES);