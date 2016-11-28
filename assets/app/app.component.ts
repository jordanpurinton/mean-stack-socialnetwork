import {Component} from '@angular/core';

@Component({
    selector: 'my-app', // referenced as HTML tag in index.hbs
    templateUrl: './app.component.html',
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
export class AppComponent {
    message = {
        content: 'Test message',
        author: 'Jordan'
    }
}