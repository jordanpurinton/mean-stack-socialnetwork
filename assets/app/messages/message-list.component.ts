import {Component, OnInit} from '@angular/core';
import {Message} from './message.model';
import {MessageService} from "./message.service";

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
export class MessageListComponent implements OnInit{
    messages: Message[]; // points to the same array I store in message.service.ts

    constructor(private messageService: MessageService) {}

    ngOnInit() {
        this.messages = this.messageService.getMessages();
    }
}