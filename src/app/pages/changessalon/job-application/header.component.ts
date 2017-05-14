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
                <a class="navbar-brand" href="#">Changes Salon</a>
                </div>
                <div id="navbar" class="navbar-collapse collapse">
                <ul class="nav navbar-nav navbar-right">
                    <li><a href="http://changesalon.com">Home</a></li>
                    <li class="active"><a href="#">Job Application Form</a></li>
                    <li><a href="http://changessalon.com/contact-us.html">Contact</a></li>
                </ul>
                </div><!--/.nav-collapse -->
            </div>
        </nav>

        <!-- Jumbotron -->
        <section class="jumbotron">
            <div class="container">
                <h1 class="text-center">Application for Employment</h1>
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