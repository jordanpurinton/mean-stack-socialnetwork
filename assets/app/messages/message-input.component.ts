import {Component, OnInit} from "@angular/core";
import {NgForm} from "@angular/forms";
import {MessageService} from "./message.service";
import {Message} from "./message.model";

@Component ({
    selector: 'app-message-input',
    templateUrl: './message-input.component.html',
})

export class MessageInputComponent implements OnInit{
    message: Message; // goes to our ngModel in HTML

    constructor(private messageService: MessageService) {}

    onSubmit(form: NgForm) { // value is from the #input value we grab from the form
        if (this.message) { // editting
            this.message.content = form.value.content;
            this.message = null; // reset message
        }
        else { //creating
            const message = new Message(form.value.content, 'Jordan');
            this.messageService.addMessage(message)
                .subscribe(
                    data => console.log(data),
                    error => console.error(error),
                );
        }
        form.resetForm();
    }

    onClear(form: NgForm) {
        this.message = null; // reset message
        form.resetForm();
    }

    ngOnInit() {
        this.messageService.messageIsEdit.subscribe(  // component informed when edit button is clicked
            (message: Message) => this.message = message
        );
    }
}