import { BadRequest } from "../exceptions/bad-request";


export class TransactionController {
 
    public async send(amount: number, sender: string, receiver: string) {
        if (amount < 0) {
            return new BadRequest("Amount must be positive");
        }

        if (sender === receiver) {
            return new BadRequest("Sender and receiver must be different");
        }

        if (sender === null || receiver === null) {
            return new BadRequest("Sender and receiver must be defined");
        }

        // TODO: Implement the logic to send the transaction
    }
}