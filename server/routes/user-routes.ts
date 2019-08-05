import * as Router from 'koa-router';
import controller = require('controllers');

export const userRouter = new Router();

//Routes for the user entity
userRouter.get('/users', controller.user.getUsers);
userRouter.get('/users/:id', controller.user.getUser);          //Get a single user by id
userRouter.post('/users', controller.user.createUser);          //Create a single user in the database
userRouter.put('/users/:id', controller.user.updateUser);       //Update a single user that matches the passed id
userRouter.delete('/users/:id', controller.user.deleteUser);    //Delete a single user that matches the passed id
