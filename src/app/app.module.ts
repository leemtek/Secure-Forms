import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HttpModule, Http, RequestOptions } from '@angular/http';

// Routing
import { RouterModule } from '@angular/router';
import { APP_ROUTES } from "./app.routing";

// Main Router Page
import { AppComponent } from './app.component';

// Pages
import { HomeComponent } from "./pages/home.component";

@NgModule({
  declarations: [
    AppComponent,

    // Pages
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,

    // Routing
    RouterModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
