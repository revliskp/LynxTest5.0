import { BaseContext } from 'koa';
import { getManager, Repository, Not, Equal } from 'typeorm';
import { validate, ValidationError } from 'class-validator';
import { User } from 'models/user';

export default class UserController {
    public static async getUsers (ctx: BaseContext) {

        // get a user repository to perform operations with user
        const userRepository: Repository<User> = getManager().getRepository(User);

        // load all users
        const users: User[] = await userRepository.find();

        // return OK status code and loaded users array
        ctx.status = 200;
        ctx.body = users;
    }
}
