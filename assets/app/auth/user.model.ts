export class User {
    constructor(public email: string,
                public password: string,
                public firstName?: string, // question mark indicates optional field
                public lastName?: string) {}
}