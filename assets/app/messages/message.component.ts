import {Component, Input, Output, EventEmitter} from "@angular/core";
import {Message} from "./message.model";

@Component({
    selector: 'app-message',
    templateUrl: './message.component.html',
    styles: [` 
        .author {
            display: inline-block;
            font-style: italic;
            font-size: 12px;
            width: 80%;
        }
        .config {
            display: inline-block;
            text-align: right;
            font-size: 12px;
            width: 19%;
        }
    `] // styles limited to the scope of this component
})

export class MessageComponent{
    @Input() message: Message; // allows to pass an argument with property binding
    @Output() editClicked = new EventEmitter<string>();

    onEdit() {
        this.editClicked.emit('New value'); // emits new event
    }
}