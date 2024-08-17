import { StatusCodes } from 'http-status-codes';

export class NotFoundError extends Error {
  constructor(message = 'Not Found') {
    super(message);
    this.name = 'NotFoundError';
    this.statusCode = StatusCodes.NOT_FOUND;
    this.message = message;
  }
}

export class BadRequestError extends Error {
  constructor(message = 'Bad Request') {
    super(message);
    this.name = 'BadRequestError';
    this.message = message;
    this.statusCode = StatusCodes.BAD_REQUEST;
  }
}

export class UnauthorizedError extends Error {
  constructor(message = 'Unauthorized') {
    super(message);
    this.name = 'UnauthorizedError';
    this.message = message;
    this.statusCode = StatusCodes.UNAUTHORIZED;
  }
}

export class ForbiddenError extends Error {
  constructor(message = 'Forbidden') {
    super(message);
    this.name = 'ForbiddenError';
    this.message = message;
    this.statusCode = StatusCodes.FORBIDDEN;
  }
}
