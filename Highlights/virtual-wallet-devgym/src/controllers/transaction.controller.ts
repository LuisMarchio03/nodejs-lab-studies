import { Exceptions } from "../exceptions";
import { ITransactionService } from "../services/transaction.service";
import { Response, Request } from 'express';


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
        const transaction = request.body as ITransaction;

        const { amount, sender, receiver } = transaction;

        try {
            if (amount === null || amount === undefined) {
                const exceptions = new Exceptions("Amount must be defined", 400);
                return exceptions.handle(response);
            }

            if (amount < 0) {
                const exceptions = new Exceptions("Amount must be greater than 0", 400);
                return exceptions.handle(response);
            }

            if (sender === receiver) {
                const exceptions = new Exceptions("Sender and receiver must be different", 400);
                return exceptions.handle(response);
            }

            if (sender === null || receiver === null) {
                const exceptions = new Exceptions("Sender and receiver must be defined", 400);
                return exceptions.handle(response);
            }

            if (sender === undefined || receiver === undefined) {
                const exceptions = new Exceptions("Sender and receiver must be defined", 400);
                return exceptions.handle(response);
            }

            if (sender === "" || receiver === "") {
                const exceptions = new Exceptions("Sender and receiver must be defined", 400);
                return exceptions.handle(response);
            }

            await this.transactionService.send(amount, sender, receiver);

            return response.status(200).send({ message: "Transaction sent" });
        }
        catch (error) {
            const exceptions = new Exceptions("Internal Server error", 500);
            return exceptions.handle(response);
        }
    }
}