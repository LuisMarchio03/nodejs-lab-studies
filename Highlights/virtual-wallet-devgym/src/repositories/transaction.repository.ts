import { db } from "../db";
import { Transaction } from "../models/transaction";

export interface ITransactionRepository {
    createTransaction(amount: number, senderId: string, receiverId: string): void;
}

export class TransactionRepository implements ITransactionRepository {
    public async createTransaction(amount: number, senderId: string, receiverId: string) {
        const transaction: Transaction = {
            amount,
            senderId,
            receiverId,
            createdAt: new Date(),
            updatedAt: new Date(),
        }

        await db.query('INSERT INTO transactions (amount, senderId, receiverId, createdAt, updatedAt) VALUES ($1, $2, $3, $4, $5)', [transaction.amount, transaction.senderId, transaction.receiverId, transaction.createdAt, transaction.updatedAt]);
    }
}