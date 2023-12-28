// models/User.ts
import { Sequelize, DataTypes, Model } from 'sequelize';

interface UserAttributes {
  id: number;
  username: string;
  // Add other fields as needed
}

class User extends Model<UserAttributes> implements UserAttributes {
  public id!: number;
  public username!: string;
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