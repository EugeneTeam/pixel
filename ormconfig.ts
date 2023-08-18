import { DataSource } from 'typeorm';
import { config } from 'dotenv';

config();

export const databaseConfig = new DataSource({
  type: 'postgres',
  database: process.env.POSTGRES_DB,
  host: process.env.POSTGRES_HOST,
  port: parseInt(process.env.POSTGRES_PORT),
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  entities: ['dist/src/**/*.entity{.ts,.js}'],
  migrations: ['dist/migrations/*{.ts,.js}']
});
