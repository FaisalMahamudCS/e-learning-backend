// models/User.ts
import { Sequelize, DataTypes, Model } from 'sequelize';
// import { UserAttributes } from '@interface/';

interface UserAttributes {
  id: number;
  username: string;
  name: string;
  image: string;
  instructorDetail: string;
  email: string;
  password: string;
  role: 'student' | 'instructor' | 'admin';
  // Add other fields as needed
}
class User extends Model<UserAttributes> implements UserAttributes {
  public id!: number;
  public username!: string;
  public image!: string;
  public name!: string;
  public instructorDetail!: string;
  email!: string;
  password!: string;
  role!: 'student' | 'instructor' | 'admin';
  // Add other fields as needed
}

export default (sequelize: Sequelize) => {
  User.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    instructorDetail: {
      type: DataTypes.STRING,
    },
    image: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
    },
    role: {
      type: DataTypes.ENUM('student', 'instructor', 'admin'),
      allowNull: false,
    },

    // Add other fields as needed
  }, {
    sequelize,
    modelName: 'User', // Set the model name
    // Other options here
  });

  return User;
};
export {User}

// export default initUserModel;