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

interface EnrollmentAttributes {
  id: number;
  courseId: number;
  userId:number;
  enrollmentDate:Date;
  
  // Add other fields as needed
}

class Enrollment extends Model<EnrollmentAttributes> implements EnrollmentAttributes {
  public id!: number;
  public userId!: number ;
  public courseId!:number;
  public enrollmentDate!:Date;
  
  // Add other fields as needed
}

export default (sequelize: Sequelize) => {
Enrollment.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    userId: {
        type: DataTypes.INTEGER,
        
    },
    courseId: {
        type: DataTypes.INTEGER,
       
    },
    enrollmentDate: {
        type: DataTypes.DATE,
    }
    // Add other fields as needed
  }, {
    sequelize,
    modelName: 'Enrollment', // Set the model name
    // Other options here
  });

  return Enrollment;
};
export {Enrollment}

// export default initUserModel;
