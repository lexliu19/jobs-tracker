import Job from '../models/JobModel.js';
import StatusCodes from 'http-status-codes';

export const getJobs = async (req, res) => {
  const jobs = await Job.find({ createdBy: req.user.userId });
  res.status(StatusCodes.OK).json({ jobs });
};

export const createJob = async (req, res) => {
  req.body.createdBy = req.user.userId;
  const job = await Job.create(req.body);
  res.status(StatusCodes.CREATED).json({ job });
};

export const getJob = async (req, res) => {
  const { id } = req.params;
  const job = await Job.findById(id);
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

  res.status(StatusCodes.OK).json({ job: updatedJob });
};

export const deleteJob = async (req, res) => {
  const { id } = req.params;
  await Job.findByIdAndDelete(id);
  res.status(StatusCodes.OK).json({ message: 'Job removed' });
};
