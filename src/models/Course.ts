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
  duration:string;
  instructor:string;
  level:string;
  photo:string;
price:string;
details:string;
  // Add other fields as needed
}

class Course extends Model<CourseAttributes> implements CourseAttributes {
  public id!: number;
  public name!: string;
  public duration!: string;
  public instructor!: string;
  public level!: string;
  public photo!: string;
  public price!: string;
  public details!: string;
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
  details: {
      type: DataTypes.STRING,
    },
  photo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    
  instructor: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  duration: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  level: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price:{
      type:DataTypes.STRING,
      allowNull:false
    }
    // Add other fields as needed
  }, {
    sequelize,
    modelName: 'Course', // Set the model name
    // Other options here
  });

  return Course;
};
export {Course}

// export default initUserModel;
