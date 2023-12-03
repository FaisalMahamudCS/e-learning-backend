// src/models/Course.ts
import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/connection';

class Course extends Model {
  public id!: number;
  public name!: string;
}

Course.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'course',
  }
);

export default Course;
