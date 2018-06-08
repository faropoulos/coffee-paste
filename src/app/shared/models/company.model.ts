export class Company {
    id: string;
    title: string;
    status: string;
    constructor(title: string, status?: string) {
        this.title = title;
        this.status = status || 'external';
    }
}