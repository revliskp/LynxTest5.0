import * as Router from 'koa-router';
import controller = require('controllers');

export const userRouter = new Router();

//Routes for the user entity
userRouter.get('/users', controller.user.getUsers);
