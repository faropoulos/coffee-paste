export class User {
    id: string;
    uid: string;
    name: string;
    email: string;
    username: string;
    constructor(name: string, email: string) {
        this.name = name;
        this.email = email;
    }
}