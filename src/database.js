// @ts-nocheck
import config from "./knexfile.js";
import Knex from "knex";

const {
  NODE_ENV,
} = process.env;

export const database = Knex(config[NODE_ENV || 'development']);