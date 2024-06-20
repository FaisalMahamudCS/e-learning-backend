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

interface OrderAttributes {
  id: number;
  courseId: number;
  userId:number;
  transactionId:string;
  
  // Add other fields as needed
}

class Order extends Model<OrderAttributes> implements OrderAttributes {
  public id!: number;
  public userId!: number ;
  public courseId!:number;
  public transactionId!:string;
  
  // Add other fields as needed
}

export default (sequelize: Sequelize) => {
Order.init({
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
    transactionId: {
        type: DataTypes.STRING,
    }
    // Add other fields as needed
  }, {
    sequelize,
    modelName: 'Order', // Set the model name
    // Other options here
  });

  return Order;
};
export {Order}

// export default initUserModel;
