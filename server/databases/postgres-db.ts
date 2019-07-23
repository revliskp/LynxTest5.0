import { createConnection } from 'typeorm';
import { postgresTables } from './postgres-tables'

export const postgresDB = async () => {

    return await createConnection({
        type     : 'postgres',
        host     : 'ec2-54-246-84-100.eu-west-1.compute.amazonaws.com',
        port     :  5432,
        username : 'xyhovntqowmilr',
        password : 'e70e1d2c729c17e9018282dea09e4409def20bba78650ca86e43760c0378bee1',
        database : 'd6o7qla1innrf9',
        ssl: true,
        entities: postgresTables,
        logging: ['query', 'error'],
        synchronize: true,
    }).then((connection) => {
        console.log('Database connection established');

    });
};