import { StatusCodes } from 'http-status-codes';
import User from '../models/UserModel.js';
const getCurrentUser = async (req, res) => {
  const user = await User.findOne({ _id: req.user.userId });
  const userWithoutPassword = user.toJSON(); //`toJSON` method defined in the User model
  res.status(StatusCodes.OK).json({ userWithoutPassword });
};
const getApplicationStats = async (req, res) => {
  res.status(StatusCodes.OK).json({ message: 'Application stats found' });
};

const updateUser = async (req, res) => {
  res.status(StatusCodes.OK).json({ message: 'User updated' });
};
export { getCurrentUser, updateUser, getApplicationStats };
