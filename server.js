import express from 'express';
import 'express-async-errors';

import { dirname } from 'path';
import { fileURLToPath } from 'url';
import path from 'path';

import morgan from 'morgan';
import * as dotenv from 'dotenv';
import jobRouter from './routes/jobRouter.js';
import authRouter from './routes/authRouter.js';
import userRouter from './routes/userRouter.js';
import mongoose from 'mongoose';
import errorHandlerMiddleware from './middleware/errorHandlerMiddleware.js';
import { authenticateUser } from './middleware/authMiddleware.js';
import cookieParser from 'cookie-parser';
import cloudinary from 'cloudinary';

dotenv.config();
const app = express();

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev')); // middleware to log requests
}
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const __dirname = dirname(fileURLToPath(import.meta.url));
app.use(express.static(path.resolve(__dirname, './public')));

app.use(cookieParser());
app.use(express.json());

//test route:
app.get('/api/v1/test', (req, res) => {
  res.json({ message: 'The api routing is working' });
});

//job route:
app.use('/api/v1/jobs', authenticateUser, jobRouter);
//auth route:
app.use('/api/v1/auth', authRouter);
//user route:
app.use('/api/v1/users', authenticateUser, userRouter);
//not found middleware"
app.use('*', (req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

//error handler middleware:
app.use(errorHandlerMiddleware);

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
