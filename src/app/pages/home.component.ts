import { Component } from "@angular/core";

import { constGlobals } from "../shared/globals";

@Component({
    selector: "leemtek-home",
    template: `
        <h1>LeemTek Secure Forms</h1>
    `,
    styles: [``]
})
export class HomeComponent {
    bower_components = constGlobals.bower_components;
} // NewPatientComponent