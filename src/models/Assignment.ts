// src/models/Course.ts
// import { DataTypes, Model } from 'sequelize';
// import { sequelize } from '../config/connection';

// class Course extends Model {
//   public id!: number;
//   public name!: string;
// }

// Course.init(
//   {
//     id: {
//       type: DataTypes.INTEGER,
//       autoIncrement: true,
//       primaryKey: true,
//     },
//     name: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//   },
//   {
//     sequelize,
//     modelName: 'course',
//   }
// );

// export default Course;

// models/User.ts
import { Sequelize, DataTypes, Model } from 'sequelize';

interface CourseAttributes {
  id: number;
  name: string;
  // Add other fields as needed
}

class Course extends Model<CourseAttributes> implements CourseAttributes {
  public id!: number;
  public name!: string;
  // Add other fields as needed
}

export default (sequelize: Sequelize) => {
  Course.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
  name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // Add other fields as needed
  }, {
    sequelize,
    modelName: 'User', // Set the model name
    // Other options here
  });

  return Course;
};
export {Course}

// export default initUserModel;
