import { register, login, logoutUser } from '../controllers/authController.js';
import {
  validateRegisterInput,
  validateLoginInput,
} from '../middleware/validationMiddleware.js';
import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  res.send('Hello from auth router');
});
router.post('/register', validateRegisterInput, register);
router.post('/login', validateLoginInput, login);
router.get('/logout', logoutUser);
export default router;
