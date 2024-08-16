import express from 'express';
import morgan from 'morgan';
import * as dotenv from 'dotenv';
dotenv.config();

const app = express();

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev')); // middleware to log requests
}

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/', (req, res) => {
  console.log(req);

  res.json({ message: 'Post request received', data: req.body });
});

const port = process.env.PORT || 5101;
app.listen(port, () => {
  console.log('Server is running on port', port);
});
