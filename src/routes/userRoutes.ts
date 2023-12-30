import { Router } from 'express'
import userController from '../controllers/userController';

const router = Router()

router.get('/users', userController.getAllUsers);
router.post('/users', userController.createUser);

// Add other routes as needed

export default router;