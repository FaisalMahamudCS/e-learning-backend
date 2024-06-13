import { Sequelize, DataTypes, Model } from 'sequelize';

interface LessonAttributes {
  id: number;
  title: string;
  content: string;
  order: number;
  resources?: Record<string, any>; // Define type for resources as per your requirement
  visibility: boolean;
  completionStatus: boolean;
  courseId: number;
}

class Lesson extends Model<LessonAttributes> implements LessonAttributes {
  public id!: number;
  public title!: string;
  public content!: string;
  public order!: number;
  public resources!: Record<string, any>;
  public visibility!: boolean;
  public completionStatus!: boolean;
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
      content: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      order: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      resources: {
        type: DataTypes.JSONB, // Adjust type as necessary
      },
      visibility: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
      completionStatus: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      courseId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Lesson',
      timestamps: true,
    }
  );

  return Lesson;
};