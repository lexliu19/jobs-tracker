import { StatusCodes } from 'http-status-codes';
import User from '../models/UserModel.js';
import Job from '../models/JobModel.js';

const getCurrentUser = async (req, res) => {
  const user = await User.findOne({ _id: req.user.userId });
  const userWithoutPassword = user.toJSON(); //`toJSON` method defined in the User model to delete password
  res.status(StatusCodes.OK).json({ user: userWithoutPassword });
};
const getApplicationStats = async (req, res) => {
  const users = await User.countDocuments();
  const jobs = await Job.countDocuments();

  res.status(StatusCodes.OK).json({ users, jobs });
};

const updateUser = async (req, res) => {
  await User.findByIdAndUpdate(req.user.userId, req.body);
  res.status(StatusCodes.OK).json({ message: 'User updated' });
};
export { getCurrentUser, updateUser, getApplicationStats };
