# skillbridge

Centralized API response messages and error handling for TypeScript backends.

## Why

Scattered message strings across the codebase means changing "User not found" becomes a grep-and-replace exercise. This keeps everything in one place — one edit, done.

## Usage

```ts
import { SuccessMessages, ErrorMessages, NotFoundError, ConflictError } from './shared';

throw new ConflictError(ErrorMessages.AUTH.EMAIL_TAKEN);

return {
  statusCode: 201,
  message: SuccessMessages.AUTH.REGISTERED,
  data: { ... },
};
```

See `src/example-usage.ts` for a full auth service example.
