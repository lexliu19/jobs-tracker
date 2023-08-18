import { readFile } from 'fs/promises';
import dotenv from 'dotenv';
dotenv.config();

import connectDB from './db/connect.js';
import Job from './models/Job.js';

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    await Job.deleteMany();

    const jsonProducts = JSON.parse(
      await readFile(new URL('./devData/jobsData.json', import.meta.url))
    );

    await Job.create(jsonProducts);
    console.log('Imported job data');
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

start();
