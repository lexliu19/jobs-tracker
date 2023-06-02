import dotenv from 'dotenv';
import 'express-async-errors';
import express from 'express';

import notFoundMiddleware from './middleware/not-found.js';
import errorHandlerMiddleware from './middleware/error-handler.js';
// router:
import authRouter from './routes/authRoutes.js';
import jobsRouter from './routes/jobsRoutes.js';

// db:
import connectDB from './db/connect.js';

const app = express();
app.use(express.json());

dotenv.config();
app.get('/', (req, res) => {
  res.json({ msg: 'welcome' });
});

app.get('/api/v1', (req, res) => {
  res.json({ msg: 'welcome' });
});

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/jobs', jobsRouter);

// middleware:
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () => console.log(`server is running on ${port}`));
  } catch (e) {
    console.log(e);
  }
};

start();
