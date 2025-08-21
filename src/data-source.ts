import { DataSource } from 'typeorm';
import { TimesheetEntry } from './entities/TimesheetEntry';
import dotenv from 'dotenv';
import {TimesheetEntryError} from "./entities/TimesheetEntryError";
import {TimesheetEntryLog} from "./entities/TimesheetEntryLog";
import {User} from "./entities/User";
import {DailyTimeEntry} from "./entities/DailyTimeEntry";
dotenv.config();

export const AppDataSource = new DataSource({
    type: 'postgres',
    host: process.env.DB_HOST || 'db',
    port: Number(process.env.DB_PORT) || 5432,
    username: process.env.DB_USER || 'erp_usr',
    password: process.env.DB_PASS || 'secret',
    database: process.env.DB_NAME || 'erp',
    entities: [TimesheetEntry, TimesheetEntryLog, TimesheetEntryError, User, DailyTimeEntry],
    migrations: ['src/migrations/*.ts'],
    synchronize: true   // off in prod, use migrations
});