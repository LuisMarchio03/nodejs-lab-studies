import { ITransactionRepository } from "../repositories/transaction.repository";
import { IUserRepository } from "../repositories/user.repository";


export interface ITransactionService {
    send(amount: number, senderId: string, receiverId: string): Promise<void>;
}

export class TransactionService {
    private transactionRepository: ITransactionRepository;
    private userRepository: IUserRepository;
    
    constructor(transactionRepository: ITransactionRepository, userRepository: IUserRepository) {
        this.transactionRepository = transactionRepository;
        this.userRepository = userRepository;
    }

    public async send(amount: number, senderId: string, receiverId: string) {
        const sender = await this.userRepository.getUser(senderId);
        const receiver = await this.userRepository.getUser(receiverId);

        if (sender.balance < amount) {
            throw new Error('Insufficient balance');
        }

        sender.balance -= amount;
        receiver.balance += amount;

        await this.userRepository.updateUserBalance(sender);
        await this.userRepository.updateUserBalance(receiver);
    }
}