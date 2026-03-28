# node-ts-template

## Stack

| Layer | Lib |
|---|---|
| Runtime | Node.js 20+ |
| Language | TypeScript 5 |
| Framework | Express 4 |
| Validation | Zod |
| Logging | Winston |
| Testing | Vitest + Supertest |
| Linting | ESLint + Prettier |

## Structure

```
src/
  config/       # env validation, logger
  controllers/  # request/response handlers
  middlewares/  # error handler, rate limit, logger, validate
  models/       # data models / ORM schemas
  routes/       # route definitions
  services/     # business logic
  types/        # shared TS types
  utils/        # AppError, asyncHandler, response helpers, paginate
  app.ts        # express factory
  server.ts     # entry point + graceful shutdown
tests/
  unit/
  integration/
```

## Getting started

```bash
cp .env.example .env
npm install
npm run dev
```

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Dev server with hot reload |
| `npm run build` | Compile to dist/ |
| `npm start` | Run compiled app |
| `npm test` | Run all tests |
| `npm run test:coverage` | Tests + coverage report |
| `npm run lint` | ESLint |
| `npm run typecheck` | Type check without emit |

## Adding a new feature

1. Create `src/models/thing.model.ts`
2. Create `src/services/thing.service.ts`
3. Create `src/controllers/thing.controller.ts`
4. Create `src/routes/thing.routes.ts`
5. Register the router in `src/routes/index.ts`