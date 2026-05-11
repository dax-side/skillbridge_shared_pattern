import { SuccessMessages, ErrorMessages, NotFoundError, ConflictError } from '../shared';

// Example: Auth service
export class AuthService {
  async register(email: string) {
    const existingUser = false;

    if (existingUser) {
      throw new ConflictError(ErrorMessages.AUTH.EMAIL_TAKEN);
    }


    return {
      statusCode: 201,
      message: SuccessMessages.AUTH.REGISTERED,
      data: { email },
    };
  }

  async login(email: string, password: string) {
    const user = null; 

    if (!user) {
      throw new NotFoundError(ErrorMessages.AUTH.INVALID_CREDENTIALS);
    }

    return {
      statusCode: 200,
      message: SuccessMessages.AUTH.LOGIN,
      data: { token: 'jwt_token_here' },
    };
  }
}
