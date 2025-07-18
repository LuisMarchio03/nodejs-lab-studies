import { Response } from 'express';

export class Exceptions {
    public message: string;
    public statusCode: number;
    constructor(message: string, statusCode: number) {
        this.message = message;
        this.statusCode = statusCode;
    }

    public handle(response: Response) {
        switch (this.statusCode) {
            case 400:
                return this.badRequest(response);
            case 500:
                return this.internalServerError(response);
            default:
                return this.internalServerError(response);
        }
    }

   private badRequest(response: Response) {
        return response.status(400).send({ message: "Amount must be defined" }); 
    }

    private internalServerError(response: Response) {
        return response.status(500).send({ message: "Internal server error" });
    }
}