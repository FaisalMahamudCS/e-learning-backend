

import { Sequelize, DataTypes, Model } from 'sequelize';

interface CourseReviewAttributes {
  reviewId: number;
  studentId: number;
  courseId: number;
  rating: number;
  reviewText?: string;
  reviewDate: Date;
  createdAt?: Date;
  updatedAt?: Date;

  // Add other quiz-related fields as needed
}

class CourseReview extends Model<CourseReviewAttributes> implements CourseReviewAttributes {
  public reviewId!: number;
  public studentId!: number;
  public courseId!: number;
  public rating!: number;
  public reviewText?: string;
  public reviewDate!: Date;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;}

export default (sequelize: Sequelize) => {
  CourseReview.init({
    reviewId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
  },
  studentId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
          model: 'students',
          key: 'student_id',
      },
  },
  courseId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
          model: 'courses',
          key: 'course_id',
      },
  },
  rating: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      validate: {
          min: 1,
          max: 5,
      },
  },
  reviewText: {
      type: DataTypes.TEXT,
      allowNull: true,
  },
  reviewDate: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
  },
    // Add other fields as needed
  }, {
    sequelize,
    modelName: 'User', // Set the model name
    // Other options here
  });

  return CourseReview;
};
export {CourseReview}

// export default initUserModel;
