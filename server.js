import express from 'express';
import morgan from 'morgan';
import * as dotenv from 'dotenv';
import { nanoid } from 'nanoid';

let jobs = [
  { id: nanoid(), company: 'Apple', position: 'front end developer' },
  { id: nanoid(), company: 'Google', position: 'back end developer' },
  { id: nanoid(), company: 'Facebook', position: 'full stack developer' },
];

dotenv.config();

const app = express();

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev')); // middleware to log requests
}

//test api:
app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.post('/', (req, res) => {
  console.log(req);
  res.json({ message: 'Post request received', data: req.body });
});

//get all jobs:
app.get('/api/v1/jobs', (req, res) => {
  res.status(200).json({ jobs });
});

//create a job:
app.post('/api/v1/jobs', (req, res) => {
  const { company, position } = req.body;
  if (!company || !position) {
    return res
      .status(400)
      .json({ message: 'Please provide company and position' });
  }

  const id = nanoid();
  const job = { id, company, position };
  jobs.push(job);

  res.status(201).json({ job });
});

// get a job:
app.get('/api/v1/jobs/:id', (req, res) => {
  const { id } = req.params;
  const job = jobs.find((job) => job.id === id);
  if (!job) {
    return res.status(404).json({ message: 'Job not found' });
  }

  res.status(200).json({ job });
});
//update a job:
app.patch('/api/v1/jobs/:id', (req, res) => {
  const { id } = req.params;
  const { company, position } = req.body;
  if (!company && !position) {
    return res
      .status(400)
      .json({ message: 'Please provide company or position' });
  }

  const job = jobs.find((job) => job.id === id);
  if (!job) {
    return res.status(404).json({ message: 'Job not found' });
  }

  job.company = company;
  job.position = position;
  res.status(200).json({ message: 'Job modified', job });
});

//delete a job
app.delete('/api/v1/jobs/:id', (req, res) => {
  const { id } = req.params;

  const job = jobs.find((job) => job.id === id);
  if (!job) {
    return res.status(404).json({ message: 'Job not found' });
  }

  jobs = jobs.filter((job) => job.id !== id);
  res.status(200).json({ message: 'Job deleted' });
});

//run server:
const port = process.env.PORT || 5101;
app.listen(port, () => {
  console.log('Server is running on port', port);
});
