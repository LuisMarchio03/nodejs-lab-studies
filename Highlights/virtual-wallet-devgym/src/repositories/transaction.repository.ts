export interface ITransactionRepository {
    send(amount: number, sender: string, receiver: string): void;
}

export class TransactionRepository implements ITransactionRepository {
    public send(amount: number, sender: string, receiver: string): void {
        console.log(`Sending ${amount} from ${sender} to ${receiver}`);
    }
}