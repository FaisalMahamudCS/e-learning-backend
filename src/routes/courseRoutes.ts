import { Router } from 'express'
import userController from '../controllers/userController';
import courseController from '../controllers/courseController';

const router = Router()

router.get('/all',courseController.getAllCourse);
router.get('/:id',courseController.getCourseById);
router.post('/create', courseController.createCourse);
router.post('/createCategory', courseController.createCourse);

// Add other routes as needed

export default router;