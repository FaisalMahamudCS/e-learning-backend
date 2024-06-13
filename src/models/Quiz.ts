
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

interface QuizAttributes {
  id: number;
  title: string;
  duration: number; // Duration in minutes
  difficulty: string; // Difficulty level (e.g., easy, medium, hard)
  instructions: string; // Instructions for the quiz
  // Add other quiz-related fields as needed
}

class Quiz extends Model<QuizAttributes> implements QuizAttributes {
  public id!: number;
  public title!: string;
  public difficulty!: string;
  public duration!: number;
  public instructions!: string;
  // Add other fields as needed
}

export default (sequelize: Sequelize) => {
  Quiz.init({
    id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  duration: {
    type: DataTypes.INTEGER, // Assuming duration in minutes
    allowNull: false,
  },
  difficulty: {
    type: DataTypes.STRING,
    allowNull: false,
  },
    
   
  instructions: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
    // Add other fields as needed
  }, {
    sequelize,
    modelName: 'User', // Set the model name
    // Other options here
  });

  return Quiz;
};
export {Quiz}

// export default initUserModel;
