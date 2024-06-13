// models/User.ts
import { Sequelize, DataTypes, Model } from 'sequelize';
// import { UserAttributes } from '@interface/';

interface UserAttributes {
  id: number;
  username: string;
  email: string;
  password: string;
  role: 'student' | 'instructor' | 'admin';
  // Add other fields as needed
}
class User extends Model<UserAttributes> implements UserAttributes {
  public id!: number;
  public username!: string;
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
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
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