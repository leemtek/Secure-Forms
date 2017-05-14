import { Routes, RouterModule } from "@angular/router";

import { HeaderComponent } from "./header.component";
import { JobApplicationComponent } from "./job-application.component";
import { ThankYouComponent } from "./thank-you.component";

export const jobApplicationRouting = RouterModule.forChild([
    { path: "job-application", component: JobApplicationComponent },
    { path: "thank-you", component: ThankYouComponent }

]); // registerRouting