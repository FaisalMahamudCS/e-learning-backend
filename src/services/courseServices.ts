// services/courseService.ts
import { Sequelize } from 'sequelize';
import {Category} from '../models/Category';
import {Course} from '../models/Course';
import {CourseReview} from '../models/CourseReview';
import {User} from '../models/User';

class CourseService {
  async getAllCourses() {
    return Course.findAll();
  }

  async createCourse(data: any) {
    return Course.create(data);
  }
  async getCourseById(id:number){
    return Course.findOne({
      where:{id:id},
      include:[
      {
      model:User
      }
      ]
    });
  }
  async getUserReviews(id:number){
    return CourseReview.findAll({where:{reviewerId:id}});
  }
  async createCategory(data: any) {
    return Category.create(data);
  }
  async allCategory() {
    return Category.findAll();
  }
  async  getCourseCountByCategory(categoryId:number) {
    try {
      const category = await Category.findByPk(categoryId, {
        include: [{
          model: Course,
          attributes: []
        }],
        attributes: {
          include: [
            [Sequelize.fn("COUNT", Sequelize.col("Courses.id")), "courseCount"]
          ]
        },
        group: ['Category.id']
      });
  
      if (!category) {
        console.log('Category not found!');
        return;
      }
  
      console.log(`Number of courses in category ${category.name}: ${category.get('courseCount')}`);
    } catch (error) {
      console.error('Error fetching course count:', error);
    }
  }
  

  // Add other service methods as needed
}

export default new CourseService();
