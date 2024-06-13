// services/courseService.ts
import {Category} from '../models/Category';
import {Course} from '../models/Course';

class CourseService {
  async getAllCourses() {
    return Course.findAll();
  }

  async createCourse(data: any) {
    return Course.create(data);
  }
  async createCategory(data: any) {
    return Category.create(data);
  }
  async allCategory() {
    return Category.findAll();
  }

  // Add other service methods as needed
}

export default new CourseService();
