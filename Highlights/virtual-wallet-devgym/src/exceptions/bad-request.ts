export class BadRequest {
    public message: string;
    public statusCode: number;
    constructor(message: string) {
        this.message = message;
        this.statusCode = 400;
    }
}