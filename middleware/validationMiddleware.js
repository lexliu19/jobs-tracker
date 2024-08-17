import { BadRequestError, NotFoundError } from '../errors/customErrors.js';
import { body, validationResult, param } from 'express-validator';
import { JOB_STATUS, JOB_TYPE } from '../utils/constants.js';
import mongoose from 'mongoose';

const withValidationErrors = (validateValues) => {
  return [
    ...validateValues,
    (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        const errorMessages = errors.array().map((error) => error.msg);
        if (errorMessages[0].startsWith('no job')) {
          throw new NotFoundError('Job not found');
        }
        throw new BadRequestError('🔥Error: ' + errorMessages.join(','));
      }
      next();
    },
  ];
};

//job input validation:
export const validateJobInput = withValidationErrors([
  body('company').notEmpty().withMessage('company is required'),
  body('position').notEmpty().withMessage('position is required'),
  body('jobLocation').notEmpty().withMessage('job location is required'),
  body('jobStatus')
    .isIn(Object.values(JOB_STATUS))
    .withMessage('invalid job status value'),
  body('jobType').isIn(Object.values(JOB_TYPE)).withMessage('invalid job type'),
]);

export const validateIdParam = withValidationErrors([
  param('id').custom(async (value) => {
    const isValidID = await mongoose.Types.ObjectId.isValid(value);
    if (!isValidID) {
      throw new BadRequestError('Invalid MongoDB id value');
    }
    const job = await Job.findById(value);
    if (!job) {
      throw new NotFoundError('Job not found');
    }
  }),
]);
