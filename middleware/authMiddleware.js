import { BadRequestError, UnauthorizedError } from '../errors/customErrors.js';
import { verifyJWT } from '../utils/tokenUtils.js';

const authenticateUser = async (req, res, next) => {
  const { token } = req.cookies;

  if (!token) {
    throw new UnauthorizedError('Unauthorized');
  }
  try {
    const { userId, role } = verifyJWT(token);
    const testUser = userId === 'testUserId';

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
  if (req.user.textUser) {
    throw new BadRequestError('Read Only for demo ueser');
  }
  next();
};
export { authenticateUser, authorizePermissions, checkForTestUser };
