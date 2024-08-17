import express from 'express';
import 'express-async-errors';

import morgan from 'morgan';
import * as dotenv from 'dotenv';
import jobRouter from './routes/jobRouter.js';
import mongoose from 'mongoose';
import errorHandlerMiddleware from './middleware/errorHandlerMiddleware.js';

dotenv.config();

const app = express();

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev')); // middleware to log requests
}

app.use(express.json());

//job route:
app.use('/api/v1/jobs', jobRouter);

//error handler middleware:
app.use(errorHandlerMiddleware);

//test api:
app.get('/', (req, res) => {
  res.send('Hello World!');
});

//not found middleware"
app.use('*', (req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

//error handling middleware:
app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({ message: 'Something went wrong' });
});

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
