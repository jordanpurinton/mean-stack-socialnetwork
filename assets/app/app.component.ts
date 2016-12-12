import {Component} from '@angular/core';
import {MessageService} from "./messages/message.service";

@Component({
    selector: 'messenger-app', // referenced as HTML tag in index.hbs
    templateUrl: './app.component.html',
    providers: [MessageService]
})
export class AppComponent {
}