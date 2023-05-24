import dotenv from 'dotenv';

import express from 'express';

import notFoundMiddleware from './middleware/not-found.js';
import errorHandlerMiddleware from './middleware/error-handler.js';

const app = express();

dotenv.config();
app.get('/', (req, res) => {
  res.send('Welcome');
});

// middleware:
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`server is running on ${port}`));
