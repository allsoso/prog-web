// @ts-nocheck
import config from "./sequelize.js";
import Sequelize from "sequelize";

const {
  NODE_ENV,
} = process.env;

export const sequelize = new Sequelize(config.development.connection);