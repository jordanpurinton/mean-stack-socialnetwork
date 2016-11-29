import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from "./app.component";
import {FormsModule} from "@angular/forms";
import {MessageComponent} from "./messages/message.component";

@NgModule({ // decorator defines what I'm going to use in addition to the class AppModule
    declarations: [
        AppComponent,
        MessageComponent
    ],
    imports: [BrowserModule, FormsModule],
    bootstrap: [AppComponent] // set root component
})
export class AppModule {

}