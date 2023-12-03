// src/config/database.ts
import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize('db', 'postgresql', 'password', {
  host: 'localhost',
  dialect: 'postgres',
  port: 5432,
});
