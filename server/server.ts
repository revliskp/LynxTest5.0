import { postgresDB } from 'databases/postgres-db';
import {qaRouter} from 'routes/qa-routes';
import {userRouter} from 'routes/user-routes';
import * as bodyParser from 'koa-bodyparser';

const app = require('./app');

const bootstrap = async () => {

    // Initialize the database
    await postgresDB();
    app.use(bodyParser());

    //Tell our application to use the router we have created to handle routes related to testing
    app.use(qaRouter.routes(), qaRouter.allowedMethods());

    //Tell our application to use the router we have created to handle routes for our rest api
    app.use(userRouter.routes(), userRouter.allowedMethods());

    //Tell the app to listen on port 3000
    app.listen(3000);
};

bootstrap();
