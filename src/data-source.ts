import { DataSource } from 'typeorm';
// import { TimesheetEntry } from './entities/TimesheetEntry';
import dotenv from 'dotenv';
dotenv.config();

export const AppDataSource = new DataSource({
    type: 'postgres',
    host: process.env.DB_HOST || 'db',
    port: Number(process.env.DB_PORT) || 5432,
    username: process.env.DB_USER || 'erp_usr',
    password: process.env.DB_PASS || 'secret',
    database: process.env.DB_NAME || 'erp',
    entities: [],
    migrations: ['src/migrations/*.ts'],
    synchronize: false   // off in prod, use migrations
});