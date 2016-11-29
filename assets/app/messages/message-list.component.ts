import {Component} from '@angular/core';
import {Message} from './message.model';

@Component({
    selector: 'app-message-list',
    template: `
        <div class="col-md-8 col-md-offset-2">
            <app-message
                    [message]="message"
                    (editClicked)="message.content = $event"
            *ngFor="let message of messages">  <!-- Creates local variable, references messages in message.component -->
            </app-message>
        </div>
    `
})
export class MessageListComponent {
    messages: Message[] = [
        new Message('Test Content', 'Jordan'),
        new Message('More Content', 'Mr. Null'),
        new Message('Third time\`s the charm', 'Mr. Optimism'),
    ]

}