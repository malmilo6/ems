import 'reflect-metadata';
import express from 'express';
import dotenv from 'dotenv';
import { AppDataSource } from './data-source';

dotenv.config();

const app = express();
app.use(express.json());

// demo route
app.get('/', (_, res) => res.send('ERP API up'));

async function boot() {
    await AppDataSource.initialize();
    app.listen(process.env.PORT ?? 3000, () =>
        console.log(`⇢ http://localhost:${process.env.PORT ?? 3000}`)
    );
}

boot().catch(err => {
    console.error(err);
    process.exit(1);
});