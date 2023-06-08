import { StatusCodes } from 'http-status-codes';
import customAPIError from './customAPIError.js';

class UnauthenticatedError extends customAPIError {
  constructor(message) {
    super(message);
    this.statusCode = StatusCodes.UNAUTHORIZED;
  }
}

export default UnauthenticatedError;
