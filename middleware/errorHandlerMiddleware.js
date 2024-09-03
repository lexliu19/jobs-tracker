import { StatusCodes } from 'http-status-codes';

const errorHandlerMiddleware = (err, req, res) => {
  const statusCode = err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR;
  const message = err.message || 'Something went wrong';
  res.status(statusCode).json({ message });
};

export default errorHandlerMiddleware;
