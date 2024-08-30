import { Router } from 'express';
import { validateJobInput } from '../middleware/validationMiddleware.js';
const router = Router();

import {
  getJob,
  getJobs,
  createJob,
  updateJob,
  deleteJob,
  showStats,
} from '../controllers/jobController.js';
import { checkForTestUser } from '../middleware/authMiddleware.js';

router
  .route('/')
  .get(getJobs)
  .post(validateJobInput, checkForTestUser, createJob);

router.route('/stats').get(showStats);

router
  .route('/:id')
  .get(getJob)
  .patch(checkForTestUser, validateJobInput, updateJob)
  .delete(checkForTestUser, deleteJob);

export default router;
