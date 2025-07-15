import { BadRequest } from "../exceptions/bad-request";
import { ITransactionService } from "../services/transaction.service";


interface ITransaction {
    amount: number;
    sender: string;
    receiver: string;
}

export class TransactionController {
    private transactionService: ITransactionService;

    constructor(transactionService: ITransactionService) {
        this.transactionService = transactionService;
    }

    public async send(request: Request, response: Response) {
       const transaction = request.body as unknown as ITransaction;

        const { amount, sender, receiver } = transaction;

        if (amount === null || amount === undefined) {
            return new BadRequest("Amount must be defined");
        }
        
        if (amount < 0) {
            return new BadRequest("Amount must be positive");
        }

        if (sender === receiver) {
            return new BadRequest("Sender and receiver must be different");
        }

        if (sender === null || receiver === null) {
            return new BadRequest("Sender and receiver must be defined");
        }

        if (sender === undefined || receiver === undefined) {
            return new BadRequest("Sender and receiver must be defined");
        }

        if (sender === "" || receiver === "") {
            return new BadRequest("Sender and receiver must be defined");
        }
        
        await this.transactionService.send(amount, sender, receiver);
    }
}