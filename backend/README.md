# National_Examination

Lean backend starter built with:

- Express.js
- TypeScript
- PostgreSQL
- Prisma
- JWT auth
- Zod validation
- Pino logging
- Swagger/OpenAPI

## What is included

- Auth: register, login, refresh, logout, password reset, email verification
- Users: profile, roles, admin status/role management
- Health checks: `/health`, `/health/live`, `/health/ready`
- File upload support with local storage
- Strict TypeScript, linting, formatting, and Prisma seeding

## What was intentionally removed

- Docker
- Tests
- Redis
- Cron jobs
- Queues
- Advanced audit systems
- DTO mapping layers
- Repository abstractions

## Quick start

1. Copy `.env.example` to `.env`.
2. Install dependencies with `npm install`.
3. Make sure PostgreSQL is running locally.
4. Run Prisma generate/migrate:
   - `npm run prisma:generate`
   - `npm run prisma:migrate:dev`
5. Seed the database:
   - `npm run db:seed`
6. Start the app:
   - `npm run dev`

## Scripts

- `npm run dev`
- `npm run build`
- `npm run start`
- `npm run typecheck`
- `npm run lint`
- `npm run format`
- `npm run prisma:generate`
- `npm run prisma:migrate:dev`
- `npm run prisma:migrate:deploy`
- `npm run prisma:migrate:reset`
- `npm run prisma:studio`
- `npm run db:seed`
