# Gabriell.dev — Full-Stack Developer Portfolio

Gabriell.dev is a full-stack developer portfolio built with Next.js, TypeScript, PostgreSQL, Prisma, and Auth.js.

The project serves as both a public-facing professional portfolio and a private content management system for managing projects, site information, publishing states, and contact messages.

It was designed as a production-ready software engineering project rather than a static portfolio website.

---

# Live Portfolio

**Production Website**

https://gabriell-dev-zvh3.vercel.app

---

# Project Status

**Version:** `v1.0.0`  
**Status:** Production Ready  
**Deployment:** Vercel  
**Database:** Prisma Postgres

---

# Overview

Gabriell.dev provides a centralized platform for showcasing software engineering projects while allowing portfolio content to be managed through a protected administration dashboard.

The public website presents selected projects, technical skills, experience, project case studies, and contact information.

The private administration system allows project information, publishing states, site settings, and contact messages to be managed without directly editing source code.

The application demonstrates practical implementation of:

- Full-stack application development
- Responsive user-interface design
- Database-driven content
- Authentication and authorization
- Content management
- Server-side validation
- Project publishing workflows
- Dynamic SEO metadata
- Production deployment
- Security hardening

---

# Tech Stack

## Frontend

- Next.js 16
- React
- TypeScript
- Tailwind CSS
- Next.js App Router
- Next.js Image Optimization

## Backend

- Next.js Server Actions
- Auth.js
- Prisma ORM
- PostgreSQL
- Prisma Postgres

## Authentication and Security

- Auth.js Credentials Provider
- bcrypt password hashing
- Zod validation
- Server-side authorization
- Protected administration routes
- Security response headers
- Environment variable protection

## Development Tools

- Visual Studio Code
- Git
- GitHub
- PowerShell
- PostgreSQL
- Prisma Studio
- Vercel

---

# Production Architecture

```text
                     GitHub
                        │
                     git push
                        │
                        ▼
                     Vercel
                        │
                   Next.js 16
              ┌─────────┴─────────┐
              │                   │
           Public              Private
          Portfolio            Admin CMS
              │                   │
              └─────────┬─────────┘
                        │
                     Auth.js
                        │
                  Server Actions
                        │
                      Prisma
                        │
                   PostgreSQL
                        │
                 Prisma Postgres