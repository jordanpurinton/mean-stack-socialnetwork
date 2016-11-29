import {Component} from "@angular/core";
import {MessageService} from "./message.service";
import {Message} from "./message.model";

@Component ({
    selector: 'app-message-input',
    templateUrl: './message-input.component.html',
})

export class MessageInputComponent{
    constructor(private messageService: MessageService) {}

    onSave(value: string) { // value is from the #input value we grab from the form
        const message = new Message(value, 'Jordan');
        this.messageService.addMessage(message);
    }
}