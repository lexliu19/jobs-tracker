import { NotFoundError } from '../errors/customErrors.js';
import Job from '../models/JobModel.js';
import StatusCodes from 'http-status-codes';
export const getJobs = async (req, res) => {
  const jobs = await Job.find({});
  res.status(StatusCodes.OK).json({ jobs });
};

export const createJob = async (req, res) => {
  const { company, position } = req.body;

  const job = await Job.create({ company, position });
  res.status(StatusCodes.CREATED).json({ job });
};

export const getJob = async (req, res) => {
  const { id } = req.params;
  const job = await Job.findById(id);

  if (!job) {
    throw new NotFoundError('Job not found');
  }

  res.status(StatusCodes.OK).json({ job });
};

export const updateJob = async (req, res) => {
  const { id } = req.params;
  const { company, position } = req.body;

  const updatedJob = await Job.findByIdAndUpdate(
    id,
    { company, position },
    { new: true }
  );
  if (!updateJob) {
    throw new NotFoundError('Job not found');
  }

  res.status(StatusCodes.OK).json({ job: updatedJob });
};

export const deleteJob = async (req, res) => {
  const { id } = req.params;
  const removedJob = await Job.findByIdAndDelete(id);

  if (!removedJob) {
    throw new NotFoundError('Job not found');
  }
  res.status(StatusCodes.OK).json({ message: 'Job removed' });
};
