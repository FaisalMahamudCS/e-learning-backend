import { Router } from 'express'
import userController from '../controllers/userController';

const router = Router()

router.get('/users', userController.getAllUsers);
router.post('/create/user', userController.createUser);

// Add other routes as needed

export default router;