'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];
const db: any = {};
console.log("Env",env)
const fileExtension = env === 'development' ? '.ts' : '.js';
let sequelize: any;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter((file: string) => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === fileExtension);
  })
  .forEach((file: any) => {
    const model = require(path.join(__dirname, file)).default(sequelize, Sequelize.DataTypes);
        db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
console.log("DB",db)


db.Sequelize = Sequelize;

db.Course.belongsTo(db.User, { foreignKey: 'userId' });
db.User.hasMany(db.Course, { foreignKey: 'userId' });
db.CourseReview.belongsTo(db.Course, { foreignKey: 'courseId' });
db.Course.hasMany(db.CourseReview, { foreignKey: 'courseId' });
db.Lesson.belongsTo(db.Course, { foreignKey: 'courseId' });
db.Course.hasMany(db.Lesson, { foreignKey: 'courseId' });
db.CourseReview.belongsTo(db.User, { foreignKey: 'userId' });
db.User.hasMany(db.CourseReview, { foreignKey: 'userId' });

export default db;