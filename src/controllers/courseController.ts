// controllers/userController.ts
import { Request, Response } from 'express';
import userService from '../services/userServices';
import courseServices from '../services/courseServices';

class CourseController {
  async getAllCourse(req: Request, res: Response) {
    const users = await courseServices.getAllCourses();
    res.json(users);
  }
  async getCourseById(req: Request, res: Response){
    const id=req.params.id
    const users = await courseServices.getCourseById(Number(id));
    res.json(users);
  }

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
