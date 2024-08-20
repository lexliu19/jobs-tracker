import { UnauthorizedError } from '../errors/customErrors.js';
import { verifyJWT } from '../utils/tokenUtils.js';

const authenticateUser = async (req, res, next) => {
  const { token } = req.cookies;

  if (!token) {
    throw new UnauthorizedError('Unauthorized');
  }
  try {
    const { userId, role } = verifyJWT(token);
    req.user = { userId, role };
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
export { authenticateUser, authorizePermissions };
