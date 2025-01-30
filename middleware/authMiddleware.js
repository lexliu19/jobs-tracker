import { BadRequestError, UnauthorizedError } from '../errors/customErrors.js';
import { verifyJWT } from '../utils/tokenUtils.js';

const authenticateUser = async (req, res, next) => {
  const { token } = req.cookies;
  console.log('token!', token);

  if (!token) {
    throw new UnauthorizedError('Unauthorized');
  }
  try {
    const { userId, role } = verifyJWT(token);

    const testUser = userId === '66d21a117fd96616ff1a690a'; // testUser Id in database

    req.user = { userId, role, testUser };
    next();
  } catch (error) {
    throw new UnauthorizedError('Unauthorized');
  }
};
const authorizePermissions = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      throw new UnauthorizedError('Unauthorized');
    }
    next();
  };
};

const checkForTestUser = (req, res, next) => {
  if (req.user.testUser) {
    throw new BadRequestError('Read only for demo user');
  }
  next();
};
export { authenticateUser, authorizePermissions, checkForTestUser };
