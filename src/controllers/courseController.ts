// controllers/userController.ts
import { Request, Response } from 'express';
import userService from '../services/userServices';
import courseServices from '../services/courseServices';

class CourseController {
  async getAllCourse(req: Request, res: Response) {
    const users = await courseServices.getAllCourses();
    res.send(users);
  }
  async getCourseById(req: Request, res: Response){
    const id=req.params.id
    const users = await courseServices.getCourseById(Number(id));
    res.json(users);
  }
  
async createPaymentIntent(req:Request, res:Response) {
  try {
    const service = req.body;
    const price = service.price;
    const amount = price*100;
    const paymentIntent = await courseServices.createPaymentIntent(service,price,amount);
    res.status(200).send({clientSecret: paymentIntent.client_secret});
  } catch (error:any) {
    res.status(500).json({ message: error.message });
  }
};

  async createCourse(req: Request, res: Response) {
    const userData = req.body;
    const newUser = await courseServices.createCourse(userData);
    res.json(newUser);
  }
  async createCategory(req: Request, res: Response) {
    const userData = req.body;
    const newUser = await courseServices.createCategory(userData);
    res.json(newUser);
  }
  async getAllCategory(req: Request, res: Response) {
    const {categoryId}=req.query
    const users = await courseServices.getCourseCountByCategory(Number(categoryId));
    res.json(users);
  }
  // Add other controller methods as needed
}

export default new CourseController();
