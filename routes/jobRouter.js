import { Router } from 'express';
const router = Router();

import {
  getJobs,
  getJob,
  createJob,
  updateJob,
  deleteJob,
} from '../controllers/jobController.js';

router.route('/').get(getJobs).post(createJob);
router.route('/:id').get(getJob).patch(updateJob).delete(deleteJob);

export default router;
