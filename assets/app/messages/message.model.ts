export class Message {
    content: string; // property is limited to specified type or error
    username: string;
    messageId?: string; // question mark indicates optional field
    userId?: string;

    constructor(content: string, username: string, messageId?: string, userId?: string) {
        this.content = content;
        this.username = username;
        this.messageId = messageId;
        this.userId = userId;
    }
}