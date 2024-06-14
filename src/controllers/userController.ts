// controllers/userController.ts
import { Request, Response } from 'express';
import userServices from '../services/userServices';

class UserController {
  async getAllUsers(req: Request, res: Response) {
    const users = await userServices.getAllUsers();
    res.json(users);
  }

  async createUser(req: Request, res: Response) {
    const userData = req.body;
    const newUser = await userServices.createUser(userData);
    res.json(newUser);
  }

  // Add other controller methods as needed
}

export default new UserController();
