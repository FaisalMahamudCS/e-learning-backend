// services/courseService.ts
import { Course } from '../models';

class CourseService {
  async getAllCourses() {
    return Course.findAll();
  }

  async createCourse(data: any) {
    return Course.create(data);
  }

  // Add other service methods as needed
}

export default new CourseService();
