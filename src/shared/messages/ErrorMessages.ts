/**
 * Centralized error messages for consistent API responses.
 * Single source of truth — change here, reflects everywhere.
 */
export class ErrorMessages {
  static readonly AUTH = {
    INVALID_CREDENTIALS: 'Invalid email or password',
    UNAUTHORIZED: 'Unauthorized access',
    TOKEN_EXPIRED: 'Session expired, please log in again',
    TOKEN_INVALID: 'Invalid token',
    EMAIL_TAKEN: 'An account with this email already exists',
  };

  static readonly USER = {
    NOT_FOUND: 'User not found',
    FORBIDDEN: 'You do not have permission to perform this action',
  };

  static readonly VALIDATION = {
    REQUIRED_FIELDS: 'Please provide all required fields',
    INVALID_EMAIL: 'Please provide a valid email address',
    WEAK_PASSWORD: 'Password must be at least 8 characters',
  };

  static readonly GENERAL = {
    NOT_FOUND: 'Resource not found',
    INTERNAL_ERROR: 'Something went wrong, please try again later',
    BAD_REQUEST: 'Bad request',
  };
}
