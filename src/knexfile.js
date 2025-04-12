// @ts-nocheck
import Knex from 'knex';
import 'dotenv/config';

const {
  DB_HOST,
  DB_PORT,
  DB_DATABASE,
  DB_USER,
  DB_PASSWORD,
  NODE_ENV,
} = process.env;

const config = {
  development: {
    client: 'postgresql',
    migrations: {
      directory: './knex/migrations',
      tableName: 'knex_migrations'
    },
    seeds: {
      directory: './knex/seeds'
    },
    connection: {
      host: DB_HOST,
      port: parseInt(DB_PORT),
      database: DB_DATABASE,
      user: DB_USER,
      password: DB_PASSWORD
    }
  }
}


export default config;