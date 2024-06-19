// services/userService.ts
import { UserAttributes } from '../interfaces/user.interface';
import {User} from '../models/User';
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

class UserService {
  async getAllUsers() {
    await User.findAll();
  }

  async createUser(data: any) {
    return User.create(data);
  }
  async updateUser(email:any, updateData:any){
    const filter = { email: email };
      const options = { upsert: true };
     console.log("email",email,updateData)
  
  const resultQuantity=await User.findOrCreate({
   where:{
      email:email,
    },
    defaults:{
      image:updateData?.image,
      name:updateData?.name,
      email:email,
      role:'student'
    }
    
    });

  return resultQuantity
};

  // Add other service methods as needed
}

export default new UserService();