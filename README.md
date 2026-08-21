Every push to the main branch automatically triggers a new Vercel deployment.

Main Features
Public Portfolio

The public website includes:

Responsive landing page
Full-screen boot/loading experience
About page
Skills and capabilities
Technology stack
Experience section
Featured projects
Project listing
Dynamic project case studies
Contact form
Responsive navigation
Footer
Custom 404 page
SEO metadata
Sitemap
Robots configuration
Open Graph metadata
Social sharing metadata
Boot Experience

The portfolio includes a full-screen loading experience shown when the application initially opens.

The loading screen contains:

Responsive GM branding
Portfolio system status
Boot sequence progress
Responsive viewport-based typography
Full-screen layout
Exit animation
Reduced-motion support
Technical interface styling
Project Case Studies

Projects are stored in PostgreSQL and rendered dynamically.

Each project may include:

Title
Slug
Description
Overview
Category
Year
Development status
Display order
Featured status
Publishing status
Technologies
GitHub URL
Live project URL
Main project image
Screenshot gallery
Challenge
Solution
Result / Outcome
Publishing Workflow

Projects support three publishing states:

DRAFT
PUBLISHED
ARCHIVED
Draft

Draft projects remain available in the administration dashboard but are not displayed publicly.

Published

Published projects are visible on the public portfolio and included in the generated sitemap.

Archived

Archived projects remain stored in the database but are hidden from the public website.

This workflow allows projects to be managed without permanently deleting historical records.

Mobile Project Presentation

Projects categorized as:

Mobile Application

receive a mobile-focused visual presentation.

Mobile projects support:

Phone-shaped project previews
Portrait screenshots
Responsive screenshot grids
Multiple application screens
Theme variations
Mobile case-study presentation
Featured Projects
PulseDaily

PulseDaily is a configurable mobile productivity application designed to combine daily planning, habit tracking, fitness monitoring, reminders, schedule management, and personal statistics.

Features
Today dashboard
Daily planning
P2 teaching dashboard
Habit tracking
Fitness tracking
Statistics
Settings and integrations
Configurable routines
Midnight theme
Daylight theme
Mobile-first navigation
Technologies
React Native
Expo
TypeScript
JavaScript
Expo Router
Expo Notifications
AsyncStorage
Android development tools
Status
In Development
SJC Campus Navigator

SJC Campus Navigator is a web-based campus navigation and information system developed to help students, faculty members, staff, and visitors locate important destinations within the PHINMA Saint Jude College Dasmariñas campus.

Features
Campus search
Floor navigation
Room information
Faculty information
Facility information
Search results
Campus information
Responsive web interface
Technologies
PHP
MySQL
JavaScript
HTML
CSS
Bootstrap
PDO
Fetch API
SVG
Status
Completed
Administration Dashboard

The portfolio includes a private administration system.

Administration routes are located under:

/admin

The administration dashboard is intentionally not linked from the public website.

Authentication is required before protected pages can be accessed.

Admin Authentication

Authentication is implemented using Auth.js with a credentials provider.

Administrator passwords are stored as bcrypt hashes.

Protected administration routes require:

role = ADMIN

Unauthenticated users attempting to access protected routes are redirected to:

/admin/login
Admin Navigation

The protected administration dashboard includes:

Dashboard
Projects
Messages
Settings
View Portfolio
Sign Out

The sign-out action includes confirmation before terminating the current admin session.

Project Management

Administrators can:

Create projects
Edit projects
Delete projects
Change publishing status
Mark projects as featured
Change project display order
Add technologies
Add project descriptions
Add case-study information
Add GitHub links
Add live URLs
Add main project images
Add gallery screenshots

Project changes are reflected dynamically on the public website.

Confirmation Workflows

Important actions include confirmation prompts to reduce accidental submissions or destructive changes.

Confirmation is currently used for:

Create Project
Save Project Changes
Delete Project
Send Contact Message
Delete Contact Message
Save Site Settings
Sign Out

Destructive actions also display warnings indicating that they cannot be undone.

Project Validation

Project form validation is implemented at both browser and server level.

Browser validation currently matches the server-side Zod schema for:

Field	Rules
Title	2–150 characters
Description	10–500 characters
Overview	20–5000 characters
Category	2–100 characters
Status	2–100 characters
Year	2000–2100
Display Order	0–9999
Image URL	Maximum 500 characters
Challenge	Maximum 5000 characters
Solution	Maximum 5000 characters
Result	Maximum 5000 characters

The validation flow is:

User submits form
        ↓
Browser validation
        ↓
Confirmation dialog
        ↓
Server-side Zod validation
        ↓
Database operation
Site Settings CMS

The portfolio contains editable site settings stored in PostgreSQL.

Administrators can manage:

Name
Professional title
Biography
Location
Contact email
Availability
GitHub URL
LinkedIn URL
Site label

These values can be reused throughout the public portfolio.

This allows profile information to be updated without editing React components directly.

Contact Management System

Visitors can submit messages through the public contact form.

Messages are stored in PostgreSQL and can be reviewed from the administration dashboard.

Administrators can:

View contact messages
Mark messages as read
Mark messages as unread
Reply using email
Delete messages

The contact form includes:

Server-side validation
Browser validation
Email validation
Required fields
Character limits
Honeypot spam protection
Submission confirmation
Database

The application uses PostgreSQL through Prisma ORM.

The production database is hosted using Prisma Postgres.

Database Models

The application currently includes four primary database models:

Project
User
Message
SiteSettings
Project Model

The Project model stores project and case-study information.

Important fields include:

id
title
slug
description
overview
year
status
category
featured
displayOrder
publishStatus
technologies
githubUrl
liveUrl
imageUrl
galleryImages
challenge
solution
result
createdAt
updatedAt
User Model

The User model stores administrator accounts.

Important fields include:

id
name
email
passwordHash
role
createdAt
updatedAt

Passwords are never stored as plain text.

Message Model

The Message model stores public contact submissions.

Important fields include:

id
name
email
subject
message
isRead
createdAt
SiteSettings Model

The SiteSettings model stores editable portfolio information.

Important fields include:

id
name
title
bio
location
contactEmail
availability
githubUrl
linkedinUrl
siteLabel
createdAt
updatedAt
Prisma Configuration

The project uses Prisma ORM with PostgreSQL.

Prisma Client is automatically generated during the production build.

The build command executes:

prisma generate && next build

This ensures Prisma Client and generated types are available in clean deployment environments such as Vercel.

Environment Variables

The application requires the following environment variables:

DATABASE_URL="your-postgresql-connection-string"


DIRECT_URL="your-direct-postgresql-connection-string"


AUTH_SECRET="your-auth-secret"


ADMIN_EMAIL="your-admin-email"


ADMIN_PASSWORD="your-admin-password"

Real credentials must never be committed to the repository.

Environment files are excluded through .gitignore.

Database SSL connections are configured using:

sslmode=verify-full

for stricter certificate verification.

Local Development

Clone the repository:

git clone https://github.com/Kiwihub26/gabriell-dev.git

Move into the project:

cd gabriell-dev

Install dependencies:

npm install

Create a local .env file.

Example:

DATABASE_URL="your-local-or-development-postgresql-url"


DIRECT_URL="your-direct-postgresql-url"


AUTH_SECRET="your-development-auth-secret"


ADMIN_EMAIL="your-admin-email"


ADMIN_PASSWORD="your-admin-password"

Generate Prisma Client:

npx prisma generate

Synchronize the schema:

npx prisma db push

Seed the administrator account:

npx prisma db seed

Start development:

npm run dev

Open:

http://localhost:3000
Type Checking

Run:

npm run typecheck

The project uses:

tsc --noEmit

to verify TypeScript correctness without creating build output.

Production Build

Run:

npm run build

The production build performs:

Prisma Client Generation
        ↓
Next.js Production Build
        ↓
TypeScript Validation
        ↓
Static Page Generation
        ↓
Server Route Generation
Production Deployment

The portfolio uses a production stack consisting of:

Component	Service
Application Hosting	Vercel
Database	Prisma Postgres
ORM	Prisma
Authentication	Auth.js
Repository	GitHub
HTTPS	Vercel
Deployment Automation	Vercel + GitHub
Live Site

https://gabriell-dev-zvh3.vercel.app

Continuous Deployment

The GitHub repository is connected directly to Vercel.

Deployment workflow:

Local Development
        ↓
git add
        ↓
git commit
        ↓
git push
        ↓
GitHub main branch
        ↓
Vercel detects commit
        ↓
Production build
        ↓
Production deployment

This allows updates to be deployed automatically after every push to main.

SEO

The portfolio includes search-engine optimization support.

Current SEO features include:

Site metadata
Page-specific titles
Page descriptions
Dynamic project metadata
Open Graph metadata
Twitter / X sharing metadata
Dynamic sitemap generation
Robots configuration
Project-specific metadata

Generated endpoints:

/sitemap.xml
/robots.txt

Production sitemap:

https://gabriell-dev-zvh3.vercel.app/sitemap.xml

Production robots file:

https://gabriell-dev-zvh3.vercel.app/robots.txt
Search Engine Rules

Public portfolio pages are indexable.

Administrative and API routes are excluded from indexing.

Current rules include:

Allow: /
Disallow: /admin/
Disallow: /api/
Security

The portfolio implements several application-security measures.

Authentication
Auth.js credentials authentication
bcrypt password hashing
Protected administrator routes
Role-based admin verification
Server-Side Authorization

Sensitive Server Actions verify administrator authentication before modifying data.

Protected operations include:

Project creation
Project editing
Project deletion
Message management
Site settings management
Validation

Zod is used to validate server-side form input.

Validation includes:

Email validation
URL validation
Required fields
Length restrictions
Numeric validation
Publishing validation
Contact Protection

The contact form includes:

Required fields
Browser validation
Server-side validation
Character limits
Honeypot spam prevention
Submission confirmation
Security Headers

The application sends security-related headers including:

X-Content-Type-Options: nosniff


X-Frame-Options: DENY


Referrer-Policy: strict-origin-when-cross-origin


Permissions-Policy:
camera=(),
microphone=(),
geolocation=(),
browsing-topics=()
Accessibility

The portfolio includes accessibility-focused improvements such as:

Semantic HTML
Keyboard focus indicators
Responsive layouts
Image alternative text
Reduced-motion support
Accessible form labels
High-contrast interface elements
Native browser validation
Keyboard-friendly form submission

Focus-visible elements use the portfolio accent color.

Visual Design

The portfolio follows a restrained developer-focused visual system.

Primary Colors

Background:

#0A0A0A

Primary text:

#F4F4F2

Accent:

#A3FF12

The design combines:

Dark editorial layouts
Technical mono labels
Large responsive typography
Minimal borders
Responsive spacing
Acid-green interaction states
Restrained animations
Developer-oriented system language
Project Media

Project media is stored under:

public/images/projects/

Current structure includes:

public/
└── images/
    ├── about-portrait.png
    ├── og-cover.png
    │
    └── projects/
        ├── pulsedaily/
        │   ├── daylight/
        │   └── midnight/
        │
        └── sjcdc-navigator/
Project Structure
gabriell-dev/
│
├── prisma/
│   ├── schema.prisma
│   └── seed.ts
│
├── public/
│   └── images/
│       ├── about-portrait.png
│       ├── og-cover.png
│       └── projects/
│
├── src/
│   ├── app/
│   │   ├── (public)/
│   │   │   ├── about/
│   │   │   ├── contact/
│   │   │   ├── projects/
│   │   │   ├── layout.tsx
│   │   │   └── page.tsx
│   │   │
│   │   ├── admin/
│   │   │   ├── (protected)/
│   │   │   ├── actions/
│   │   │   └── login/
│   │   │
│   │   ├── api/
│   │   │   └── auth/
│   │   │
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── not-found.tsx
│   │   ├── robots.ts
│   │   └── sitemap.ts
│   │
│   ├── components/
│   │   ├── admin/
│   │   ├── AboutPreview.tsx
│   │   ├── BootLoader.tsx
│   │   ├── Capabilities.tsx
│   │   ├── ConfirmActionButton.tsx
│   │   ├── ConfirmForm.tsx
│   │   ├── ContactCTA.tsx
│   │   ├── ExperiencePreview.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── Navbar.tsx
│   │   ├── PageShell.tsx
│   │   ├── ProjectCard.tsx
│   │   ├── ProjectImage.tsx
│   │   ├── Projects.tsx
│   │   └── TechStack.tsx
│   │
│   ├── lib/
│   │   ├── admin.ts
│   │   ├── prisma.ts
│   │   ├── site-settings.ts
│   │   └── validation.ts
│   │
│   ├── types/
│   │
│   └── auth.ts
│
├── .gitignore
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── package-lock.json
├── postcss.config.mjs
├── prisma.config.ts
├── README.md
└── tsconfig.json
Development Roadmap

The portfolio was developed incrementally through a structured software engineering roadmap.

01–06  Portfolio Foundation and Frontend
07     PostgreSQL + Prisma
08     Database-Driven Projects
09     Boot / Loading Experience
10     Auth.js Authentication
11     Project CRUD
12     Publishing Workflow
13     Rich Project Case Study Data
14     Contact System
15     Site Settings CMS
16     Project Media and Galleries
17     SEO and Metadata
18     Security and Production Hardening
19     Production Deployment
20     Final Polish and Release

Current status:

Production Ready
Release

Initial production release:

v1.0.0

Release highlights:

Full-stack Next.js portfolio
PostgreSQL production database
Prisma ORM
Auth.js administrator authentication
Private CMS
Project CRUD
Project publishing workflow
Dynamic case studies
Contact management system
Site Settings CMS
Mobile project presentation
Responsive media galleries
Confirmation workflows
Browser and server validation
SEO metadata
Sitemap and robots configuration
Security hardening
Vercel deployment
Prisma Postgres production database
Automatic deployments through GitHub
Future Improvements

Possible future improvements include:

Custom domain
Portfolio analytics
Contact email notifications
Cloud image uploads
Admin media manager
Project drag-and-drop ordering
Rich text project editor
Project tags and filtering
Search functionality
Resume download
Automated database backups
Separate development and preview databases
Rate limiting
Advanced spam protection
Content Security Policy
Additional administrator accounts
Password reset functionality
Audit logging
Automated testing
End-to-end tests
CI validation before deployment
Image upload storage integration
Repository

GitHub:

https://github.com/Kiwihub26/gabriell-dev
Author

Gabriell Montero

Computer Engineering graduate focused on:

Software engineering
Full-stack development
Mobile application development
Database systems
System analysis
Practical digital solutions
License

This repository is maintained as a personal portfolio and software engineering project.

Unless otherwise stated, the portfolio content, branding, project materials, screenshots, and associated intellectual property remain the property of the author.

Third-party technologies, frameworks, libraries, and assets remain subject to their respective licenses.