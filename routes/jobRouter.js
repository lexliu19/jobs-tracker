import { Router } from 'express';
import { validateJobInput } from '../middleware/validationMiddleware.js';
const router = Router();

import {
  getJob,
  getJobs,
  createJob,
  updateJob,
  deleteJob,
} from '../controllers/jobController.js';

router.route('/').get(getJobs).post(validateJobInput, createJob);
router
  .route('/:id')
  .get(getJob)
  .patch(validateJobInput, updateJob)
  .delete(deleteJob);

export default router;
