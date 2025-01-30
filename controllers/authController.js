import { StatusCodes } from 'http-status-codes';
import User from '../models/UserModel.js';
import { hashPassword, comparePasswords } from '../utils/passwordUtils.js';
import { UnauthorizedError } from '../errors/customErrors.js';
import { createJWT } from '../utils/tokenUtils.js';

const ONE_DAY = 1000 * 60 * 60 * 24;

export const register = async (req, res) => {
  const hashedPassword = await hashPassword(req.body.password);
  req.body.password = hashedPassword;
  //add role:
  const isFirstAccount = (await User.countDocuments({})) === 0;
  req.body.role = isFirstAccount ? 'admin' : 'user';
  const user = await User.create(req.body);
  res.status(StatusCodes.CREATED).json({ user });
};

export const login = async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user) throw new UnauthorizedError('Not user found with the email');
  const isPasswordMatch = await comparePasswords(
    req.body.password,
    user.password
  );
  if (!isPasswordMatch) throw new UnauthorizedError('Password does not match');

  const token = createJWT({ userId: user._id, role: user.role });
  res.cookie('token', token, {
    httpOnly: true,
    expires: new Date(Date.now() + ONE_DAY),
    // secure: process.env.NODE_ENV === 'production',
  });

  res.status(StatusCodes.OK).json({ message: 'User logged in' });
};

export const logoutUser = async (req, res) => {
  res.cookie('token', 'logout', {
    httpOnly: true,
    expires: new Date(Date.now()),
  });

  res.status(StatusCodes.OK).json({ message: 'User logged out' });
};
