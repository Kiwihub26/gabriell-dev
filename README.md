# Gabriell.dev — Debugged Lesson 10 Snapshot

This ZIP contains the portfolio through Lesson 10: public portfolio, PostgreSQL/Prisma models, database-driven projects, boot animation, Auth.js credentials login, and a protected admin dashboard.

## Important architecture fix

Public pages are inside `src/app/(public)` and have their own layout. Admin pages are outside that group, so the public navbar/footer/boot loader never wrap `/admin`. Admin protection is enforced in `src/app/admin/(protected)/layout.tsx` using `auth()` and an `ADMIN` role check. A Proxy is intentionally not required at this stage; the server layout is the authorization boundary.

## Setup on Windows

1. Extract this folder.
2. Open PowerShell in it.
3. Run `npm install`.
4. Copy `.env.example` to `.env`.
5. Fill in `DATABASE_URL`, `AUTH_SECRET`, `ADMIN_EMAIL`, and `ADMIN_PASSWORD`.
6. Ensure PostgreSQL has a database named `gabriell_portfolio`.
7. Run:

```powershell
npx prisma validate
npx prisma generate
npx prisma migrate dev --name init
npm run db:seed
npm run typecheck
npm run dev
```

Then open:
- Public: http://localhost:3000
- Admin: http://localhost:3000/admin/login

## AUTH_SECRET

Generate one with:

```powershell
npx auth secret
```

If that command writes to a different env file, copy the generated `AUTH_SECRET` into `.env`.

## PostgreSQL password characters

If your password contains special URL characters, percent-encode them in `DATABASE_URL`. Example: `!` becomes `%21`, `@` becomes `%40`.

## Existing database

If you already migrated the same schema, `npx prisma migrate dev --name init` may report that the database is already synchronized. That is fine. If your existing migration history is inconsistent, use a fresh development database named `gabriell_portfolio_debugged` and update `DATABASE_URL` accordingly.

## Security

`.env` is ignored by Git. Never commit your real database or admin passwords.
