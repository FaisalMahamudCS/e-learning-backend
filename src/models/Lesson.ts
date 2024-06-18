import { Sequelize, DataTypes, Model } from 'sequelize';

interface LessonAttributes {
  id: number;
  title: string;
  lessons: string;
  duration: string;
  order: number;
  courseId: number;
}

class Lesson extends Model<LessonAttributes> implements LessonAttributes {
  public id!: number;
  public title!: string;
  public lessons!: string;
  public duration!: string;
  public order!: number;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
  public readonly courseId!: number;

  // We also initialize the associations here
  public readonly course?: any; // Define course association type

  // public static associate(models: any): void {
  //   Lesson.belongsTo(models.Course, { foreignKey: 'courseId' });
  // }
}

export default (sequelize: Sequelize) => {
  Lesson.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lessons: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      duration: {
        type: DataTypes.STRING,
        allowNull: false,
      },
     
      order: {
        type: DataTypes.INTEGER,
      },
   
      courseId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Lesson',
    }
  );

  return Lesson
};
export {Lesson}
