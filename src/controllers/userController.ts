// controllers/userController.ts
import { Request, Response } from 'express';
import userServices from '../services/userServices';
import jwt from 'jsonwebtoken';

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

async updateUser(req:Request, res:Response){
  try {
    const email = req.params.email;
    const user = req.body;
    console.log("User",user)
    const updatedProduct = await userServices.updateUser(email, req.body);
    const token = jwt.sign({ email: email }, process.env.ACCESS_TOKEN_SECRET as string, { expiresIn: '1d' })

    // if (!updatedProduct) {
    //   return res.status(404).json({ message: 'Product not found' });
    // }
    res.status(200).json({updatedProduct,token});
  } catch (error:any) {
    console.log(error)
    res.status(500).json({ message: error.message });
  }
};

  // Add other controller methods as needed
}

export default new UserController();
