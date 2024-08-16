import { nanoid } from 'nanoid';

let jobs = [
  { id: nanoid(), company: 'Apple', position: 'front end developer' },
  { id: nanoid(), company: 'Google', position: 'back end developer' },
  { id: nanoid(), company: 'Facebook', position: 'full stack developer' },
];

export const getAJob = async (req, res) => {
  res.status(200).json({ jobs });
};

export const createJob = async (req, res) => {
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
};

export const getJob = async (req, res) => {
  const { id } = req.params;
  const job = jobs.find((job) => job.id === id);

  if (!job) {
    return res.status(404).json({ message: 'Job not found' });
  }

  res.status(200).json({ job });
};

export const updateJob = async (req, res) => {
  const { id } = req.params;
  const { company, position } = req.body;
  if (!company || !position) {
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
};

export const deleteJob = async (req, res) => {
  const { id } = req.params;
  const job = jobs.find((job) => job.id === id);
  if (!job) {
    res.status(404).json({ message: 'Job not found' });
  }

  const jobs = jobs.filter((job) => job.id !== id);
  res.status(200).json({ message: 'Job deleted' });
};
