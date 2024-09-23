import { readFile } from 'fs/promises';
import mongoose from 'mongoose';

import dotenv from 'dotenv';
import Job from '../models/JobModel.js';
import User from '../models/UserModel.js';

dotenv.config();

try {
  await mongoose.connect(process.env.MONGO_URI);
  const user = await User.findOne({ email: 'test@test.com' });
  const jobsData = JSON.parse(
    await readFile(new URL('./jobs_mock_data.json', import.meta.url))
  );

  const jobs = jobsData.map((job) => {
    return { ...job, createdBy: user._id };
  });
  await Job.deleteMany({ createdBy: user._id });
  await Job.create(jobs);
  console.log('Inject Success');
  process.exit(0);
} catch (error) {
  console.log(error);
  process.exit(1);
}
