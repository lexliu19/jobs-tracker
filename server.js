import express from 'express';
import 'express-async-errors';

import morgan from 'morgan';
import * as dotenv from 'dotenv';
import jobRouter from './routes/jobRouter.js';
import authRouter from './routes/authRouter.js';
import mongoose from 'mongoose';
import errorHandlerMiddleware from './middleware/errorHandlerMiddleware.js';
import { authenticateUser } from './middleware/authMiddleware.js';
import cookieParser from 'cookie-parser';

dotenv.config();

const app = express();

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev')); // middleware to log requests
}
app.use(cookieParser());

app.use(express.json());
//job route:
app.use('/api/v1/jobs', authenticateUser, jobRouter);
//auth route:
app.use('/api/v1/auth', authRouter);

//not found middleware"
app.use('*', (req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

//error handler middleware:
app.use(errorHandlerMiddleware);

//run server:
const port = process.env.PORT || 5101;

try {
  console.log('Connecting to MongoDB...');
  await mongoose.connect(process.env.MONGO_URI);
  app.listen(port, () => {
    console.log('Server is running on port', port);
  });
} catch (error) {
  console.log(error);
  process.exit(1);
}
