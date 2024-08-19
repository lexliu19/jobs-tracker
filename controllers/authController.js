import { StatusCodes } from 'http-status-codes';
import User from '../models/UserModel.js';
import { hashPassword, comparePasswords } from '../utils/passwordUtils.js';
import { UnauthorizedError } from '../errors/customErrors.js';

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
  if (!user) throw new UnauthorizedError('Not user find with the email');
  const isPasswordMatch = await comparePasswords(
    req.body.password,
    user.password
  );
  if (!isPasswordMatch) throw new UnauthorizedError('Password does not match');

  res.send('login route');
};
