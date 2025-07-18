import { db } from "../db";
import { User } from "../models/user";
import { v4 as uuidV4 } from 'uuid';

export interface IUserRepository {
    createUser(username: string, password: string): Promise<void>;
    getUser(id: string): Promise<User>;
    getUserByUsername(username: string): Promise<User>;
    updateUserBalance(user: User): Promise<void>;
}

export class UserRepository implements IUserRepository {
    public async createUser(username: string, password: string): Promise<void> {
        const uuid = uuidV4();
        await db.query('INSERT INTO users (id, username, password, balance) VALUES ($1, $2, $3, $4)', [uuid, username, password, 0]);
    }

    public async getUser(id: string): Promise<User> {
        const result = await db.query('SELECT * FROM users WHERE id = $1', [id]);
        return result.rows[0];
    }
    
    public async getUserByUsername(username: string): Promise<User> {
        const result = await db.query('SELECT * FROM users WHERE username = $1', [username]);
        return result.rows[0];
    }

    public async updateUserBalance(user: User): Promise<void> {
        await db.query('UPDATE users SET balance = $1 WHERE id = $2', [user.balance, user.id]);
    }
}