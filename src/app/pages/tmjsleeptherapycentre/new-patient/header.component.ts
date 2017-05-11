import { Component } from "@angular/core";

@Component({
    selector: "tmj-new-patient-header",
    template: `
        <!-- Static navbar -->
        <nav class="navbar navbar-default navbar-static-top">
            <div class="container">
                <div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="#">TMJ &amp; Sleep Therapy Centre of SF</a>
                </div>
                <div id="navbar" class="navbar-collapse collapse">
                <ul class="nav navbar-nav navbar-right">
                    <li><a href="https://tmjsleeptherapycentre.com">Home</a></li>
                    <li><a href="https://tmjsleeptherapycentre.com/meet-dr">Meet Dr. Alkhoury</a></li>
                    <li class="dropdown">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Services <span class="caret"></span></a>
                        <ul class="dropdown-menu">
                            <li><a href="https://tmjsleeptherapycentre.com/">TMJ - Adults</a></li>
                            <li><a href="https://tmjsleeptherapycentre.com/">TMJ - Children</a></li>
                            <li><a href="https://tmjsleeptherapycentre.com/">Sleep Disorders - Adults</a></li>
                            <li><a href="https://tmjsleeptherapycentre.com/">Sleep Disorders - Children</a></li>
                            <li><a href="https://tmjsleeptherapycentre.com/">Craniofacial Pain</a></li>
                            <li><a href="https://tmjsleeptherapycentre.com/">Facial Pain</a></li>
                            <li><a href="https://tmjsleeptherapycentre.com/">Neck &amp; Jaw Pain</a></li>
                            <li><a href="https://tmjsleeptherapycentre.com/">Complex Orthodontics</a></li>
                        </ul>
                    </li>
                    <li class="dropdown">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Education <span class="caret"></span></a>
                        <ul class="dropdown-menu">
                            <li><a href="https://tmjsleeptherapycentre.com/">TMJ &amp; TMD</a></li>
                            <li><a href="https://tmjsleeptherapycentre.com/">Sleep Disorders</a></li>
                        </ul>
                    </li>
                    <li><a href="https://tmjsleeptherapycentre.com/testimonials">Patient Testimonials</a></li>
                    <li class="active"><a href="#">Referral Form</a></li>
                    <li><a href="https://tmjsleeptherapycentre.com/contact">Contact</a></li>
                </ul>
                </div><!--/.nav-collapse -->
            </div>
        </nav>

        <!-- Jumbotron -->
        <section class="jumbotron">
            <div class="container">
                <h1 class="text-center">Patient Health Questionnaire</h1>
            </div>
        </section>
    `,
    styles: [`
        section.jumbotron {
            margin-top: -20px;
        }

        section.jumbotron h1 {
            margin-top: 0px;
            font-size: 40px;
            font-weight: bold;
        }
    `]
})
export class HeaderComponent {

} // ThankYouComponent