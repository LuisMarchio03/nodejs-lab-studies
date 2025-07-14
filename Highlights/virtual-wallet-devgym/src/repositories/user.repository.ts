import { db } from "../db";
import { User } from "../models/user";

export interface IUserRepository {
    getUser(id: string): Promise<User>;
    updateUserBalance(user: User): Promise<void>;
}

export class UserRepository implements IUserRepository {
    public async getUser(id: string): Promise<User> {
        const result = await db.query('SELECT * FROM users WHERE id = $1', [id]);
        return result.rows[0];
    }

    public async updateUserBalance(user: User): Promise<void> {
        await db.query('UPDATE users SET balance = $1 WHERE id = $2', [user.balance, user.id]);
    }
}