/**
 * Centralized success messages for consistent API responses.
 * Single source of truth — change here, reflects everywhere.
 */
export class SuccessMessages {
  static readonly AUTH = {
    REGISTERED: 'Account created successfully',
    LOGIN: 'Login successful',
    LOGOUT: 'Logout successful',
    PASSWORD_RESET: 'Password reset successfully',
    PASSWORD_UPDATED: 'Password updated successfully',
  };

  static readonly USER = {
    FETCHED: 'User retrieved successfully',
    UPDATED: 'User updated successfully',
    DELETED: 'User deleted successfully',
  };

  static readonly GENERAL = {
    CREATED: 'Resource created successfully',
    UPDATED: 'Resource updated successfully',
    DELETED: 'Resource deleted successfully',
    FETCHED: 'Resource retrieved successfully',
  };
}
