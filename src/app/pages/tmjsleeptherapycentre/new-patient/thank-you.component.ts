import { Component } from "@angular/core";

@Component({
    selector: "tmj-new-patient-thank-you",
    template: `
        <tmj-new-patient-header>Loading...</tmj-new-patient-header>

        <section class="container">
            <div class="row">
                <div class="col-lg-8 col-lg-offset-2">
                    <h2 class="text-bold text-center margin-bottom-40">Form Successfully Sent</h2>
                    <p class="lead text-center margin-bottom-40">
                        Your form submission has been successfully sent to our
                        team at TMJ &amp; Sleep Therapy Centre.  Thanks!
                    </p>
                    <div class="text-center"><a class="btn btn-success btn-lg" href="https://tmjsleeptherapycentre.com">Return to Homepage</a></div>
                </div><!-- /col -->
            </div><!-- /row -->
        </section>
    `,
    styles: [``]
})
export class ThankYouComponent {

} // ThankYouComponent