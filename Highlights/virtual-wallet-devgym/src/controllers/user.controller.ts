import { Exceptions } from "../exceptions";
import { IUserService } from "../services/user.service";
import { Response, Request } from 'express';


interface IUser {
    username: string;
    password: string;
}

export class UserController {
    private userService: IUserService;

    constructor(userService: IUserService) {
        this.userService = userService;
    }

    public async create(request: Request, response: Response) {
        const {  username, password } = request.body as IUser;

        try {
            const user = await this.userService.createUser(username, password);
            const exceptions = new Exceptions("Successfully created user: " + user.id, 201);
            return exceptions.handle(response);
        } catch (error: any) {
            const exceptions = new Exceptions(error.message, 400);
            return exceptions.handle(response);
        }
    }

}