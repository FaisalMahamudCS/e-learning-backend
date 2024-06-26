// services/courseService.ts
import { Sequelize } from 'sequelize';
import {Category} from '../models/Category';
import {Course} from '../models/Course';
import {CourseReview} from '../models/CourseReview';
import {User} from '../models/User';
import {Lesson} from '../models/Lesson';
import {Order} from '../models/Order';
import {Enrollment} from '../models/Enrollment';
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
class CourseService {
  async getAllCourses() {
    return Course.findAll();
  }
  async createPaymentIntent(service:any,price:any,amount:any){
    const paymentIntent = await stripe.paymentIntents.create({
      amount : amount,
      currency: 'usd',
      payment_method_types:['card']
    });
    return paymentIntent
    };
  async createCourse(data: any) {
    return Course.create(data);
  }
  async createOrder(data: any) {
     const order=await Order.create(data);
     const enrollment=await Enrollment.create(data);
     return enrollment
  }
  async getCourseById(id:number){
    return Course.findOne({
      where:{id:id},
      include:[
      {
      model:User
      },
      {
      model:Lesson
      },
      {
      model:CourseReview
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
