import { DataSource } from 'typeorm';
// import { TimesheetEntry } from './entities/TimesheetEntry';
import dotenv from 'dotenv';
dotenv.config();

export const AppDataSource = new DataSource({
    type: 'postgres',
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT) || 5432,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    entities: [],
    migrations: ['src/migrations/*.ts'],
    synchronize: false   // off in prod, use migrations
});