import User from '../models/user.js';
import { StatusCodes } from 'http-status-codes';
import { BadRequestError, UnauthenticatedError } from '../errors/index.js';
import attachCookies from '../utils/attachCookies.js';
import user from '../models/user.js';
const register = async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    throw new BadRequestError('Please provide all values');
  }
  // check user email duplicate:
  const userAlreadyExist = await User.findOne({ email });
  if (userAlreadyExist) throw new BadRequestError('Email already in use.');

  const user = await User.create({ name, email, password });
  const token = user.createJWT();

  attachCookies({ res, token });
  res.status(StatusCodes.CREATED).json({
    user: {
      email: user.email,
      name: user.name,
      lastName: user.lastName,
      location: user.location,
    },
    location: user.location,
  });
};

// eslint-disable-next-line no-unused-vars
const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new BadRequestError('Please provide all values.');
  }

  // query user from database by email
  const user = await User.findOne({ email }).select('+password'); // by default the password is not provide
  if (!user) {
    throw new UnauthenticatedError('Invalid Credentials');
  }

  const isPasswordCorrect = await user.comparePassword(password);
  if (!isPasswordCorrect) throw new UnauthenticatedError('Invalid Credentials');

  const token = user.createJWT();
  attachCookies({ res, token });

  res.status(StatusCodes.OK).json({ user, location: user.location });
};
const updateUser = async (req, res) => {
  const { email, name, lastName, location } = req.body;
  if (!email || !name || !lastName || !location) {
    throw new BadRequestError('Please provide all values');
  }

  const user = await User.findOne({ _id: req.user.userId });

  user.email = email;
  user.name = name;
  user.lastName = lastName;
  user.location = location;
  await user.save();
  const token = user.createJWT();
  attachCookies({ res, token });
  res.status(StatusCodes.OK).json({
    user,
    location: user.location,
  });
};

const getCurrentUser = async (req, res) => {
  const user = await User.findOne({ _id: req.user.userId });
  res.status(StatusCodes.OK).json({ user, location: user.location });
};
export { register, login, updateUser, getCurrentUser };
