import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from "./app.component";
import {FormsModule} from "@angular/forms";
import {MessageComponent} from "./messages/message.component";
import {MessageListComponent} from "./messages/message-list.component";
import {MessageInputComponent} from "./messages/message-input.component";
import {MessagesComponent} from "./messages/messages.component";
import {AuthenticationComponent} from "./auth/authentication.component";
import {HeaderComopnent} from "./header.component";
import {routing} from './app.routing';

@NgModule({ // decorator defines what I'm going to use in addition to the class AppModule
    declarations: [
        AppComponent,
        MessageComponent,
        MessageListComponent,
        MessageInputComponent,
        MessagesComponent,
        AuthenticationComponent,
        HeaderComopnent
    ],
    imports: [BrowserModule, FormsModule, routing],
    bootstrap: [AppComponent] // set root component
})
export class AppModule {

}