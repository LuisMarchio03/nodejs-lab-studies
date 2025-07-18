import { User } from "../models/user";
import { IUserRepository } from "../repositories/user.repository";

export interface IUserService {
    createUser(username: string, password: string): Promise<User>;
}

export class UserService {
    private userRepository: IUserRepository;

    constructor(userRepository: IUserRepository) {
        this.userRepository = userRepository;
    }

    public async createUser(username: string, password: string) {
        const alreadyExists = await this.userRepository.getUserByUsername(username);

        if (alreadyExists) {
            throw new Error("User already exists");
        }

        const user = await this.userRepository.createUser(username, password);

        return user;
    }
}