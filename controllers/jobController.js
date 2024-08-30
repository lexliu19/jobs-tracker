import mongoose from 'mongoose';
import Job from '../models/JobModel.js';
import StatusCodes from 'http-status-codes';
import day from 'dayjs';
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

export const showStats = async (req, res) => {
  let stats = await Job.aggregate([
    // Filter jobs with userId
    { $match: { createdBy: new mongoose.Types.ObjectId(req.user.userId) } },
    // Group by jobStatus and count the number of jobs in each status
    { $group: { _id: '$jobStatus', count: { $sum: 1 } } },
  ]);

  // Transform the aggregation result into an object with jobStatus as keys and counts as values
  stats = stats.reduce((acc, curr) => {
    const { _id: title, count } = curr;
    acc[title] = count;
    return acc;
  }, {});

  const defaultStats = {
    pending: stats.pending || 0,
    interview: stats.interview || 0,
    declined: stats.declined || 0,
  };

  let monthlyApplications = await Job.aggregate([
    { $match: { createdBy: new mongoose.Types.ObjectId(req.user.userId) } },
    {
      $group: {
        _id: { year: { $year: '$createdAt' }, month: { $month: '$createdAt' } },
        count: { $sum: 1 },
      },
    },

    { $sort: { '_id.year': -1, '_id.month': -1 } },
    { $limit: 6 },
  ]);
  monthlyApplications = monthlyApplications
    .map((item) => {
      const {
        _id: { year, month },
        count,
      } = item;

      const date = day()
        .month(month - 1)
        .year(year)
        .format('MMM YY');
      return { date, count };
    })
    .reverse();
  res.status(StatusCodes.OK).json({ defaultStats, monthlyApplications });
};
