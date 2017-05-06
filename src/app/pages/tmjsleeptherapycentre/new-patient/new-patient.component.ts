import { Component } from "@angular/core";

import { constGlobals } from "../../../shared/globals";

import { NewPatientService} from "./new-patient.service";

@Component({
    selector: "tmj-new-patient",
    templateUrl: "new-patient.html",
    styles: [``],
    providers: [NewPatientService]
})
export class NewPatientComponent {
    bower_components = constGlobals.bower_components;
    objUser; // holds user contents

    constructor(newPatientService: NewPatientService) {
        this.objUser = newPatientService.objUser;
    }
} // NewPatientComponent