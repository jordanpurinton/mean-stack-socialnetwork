import {Message} from "./message.model";
import {Http, Response, Headers} from "@angular/http";
import 'rxjs/Rx'; // observable 3rd party library angular 2 uses
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";

@Injectable() // needed for http service
export class MessageService {
    private messages: Message[] = [];

    constructor(private http: Http) {}

    addMessage(message: Message) {
        this.messages.push(message);
        const body = JSON.stringify(message);
        const headers = new Headers({'Content-Type' : 'application/json'});
        return this.http.post('http://localhost:3000/message', body, {headers: headers})
            .map((response: Response) => response.json()) // allows data transformation once obtained from server
            .catch((error: Response) => Observable.throw(error.json()));
    }

    getMessages(){
        return this.messages;
    }

    deleteMessage(message: Message) {
        this.messages.splice(this.messages.indexOf(message), 1);
    }
}