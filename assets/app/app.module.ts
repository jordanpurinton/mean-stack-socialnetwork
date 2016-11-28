import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from "./app.component";

@NgModule({ // decorator defines what I'm going to use in addition to the class AppModule
    declarations: [
        AppComponent
    ],
    imports: [BrowserModule],
    bootstrap: [AppComponent] // set root component
})
export class AppModule {

}