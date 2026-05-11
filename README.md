# skillbridge — shared backend patterns

A reference implementation of centralized API response messages and error handling for Node.js/TypeScript backends.

## Structure

```
src/
└── shared/
    ├── messages/
    │   ├── SuccessMessages.ts   # All success messages grouped by domain
    │   ├── ErrorMessages.ts     # All error messages grouped by domain
    │   └── index.ts
    ├── errors/
    │   ├── AppError.ts          # Base error class
    │   ├── HttpErrors.ts        # 400, 401, 403, 404, 409, 422, 500
    │   └── index.ts
    └── index.ts                 # Single import point
```

## Why

Instead of scattering message strings across the codebase, everything lives in one place. Need to change "User not found"? One edit, done.

## Usage

```ts
import { SuccessMessages, ErrorMessages, NotFoundError, ConflictError } from './shared';

// Throw typed errors with centralized messages
throw new ConflictError(ErrorMessages.AUTH.EMAIL_TAKEN);

// Return consistent success responses
return {
  statusCode: 201,
  message: SuccessMessages.AUTH.REGISTERED,
  data: { ... },
};
```

See `src/example-usage.ts` for a full auth service example.
