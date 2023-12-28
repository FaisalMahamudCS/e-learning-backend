// services/userService.ts
import {User} from '../models/User';

class UserService {
  async getAllUsers() {
    await User.findAll();
  }

  async createUser(data: any) {
    return User.create(data);
  }

  // Add other service methods as needed
}

export default new UserService();