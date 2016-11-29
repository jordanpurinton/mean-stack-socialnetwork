import {Component} from '@angular/core';
import {Message} from './messages/message.model';

@Component({
    selector: 'my-app', // referenced as HTML tag in index.hbs
    templateUrl: './app.component.html'
})
export class AppComponent {
    message: Message = new Message('Test content', 'Jordan')
}