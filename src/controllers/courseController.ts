// controllers/userController.ts
import { Request, Response } from 'express';
import userService from '@service/userServices';

class CourseController {
  async getAllCourse(req: Request, res: Response) {
    const users = await courseService.getAllCourses();
    res.json(users);
  }

  async createUser(req: Request, res: Response) {
    const userData = req.body;
    const newUser = await userService.createUser(userData);
    res.json(newUser);
  }

  // Add other controller methods as needed
}

export default new UserController();
