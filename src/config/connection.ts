// src/config/database.ts
import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: 'postgres',
  port: 5432,
});
