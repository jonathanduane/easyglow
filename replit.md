# EasyGlow - Premium Smokeless Coal Delivery

## Overview

EasyGlow is a modern e-commerce website for a premium smokeless coal and solid fuels company based in Ireland. The application is built as a full-stack web application featuring a React frontend with a Node.js/Express backend, designed to showcase smokeless coal products, traditional coal, logs, briquettes, and mixed pallets with super fast delivery throughout Ireland. Established in 2012, the company is located on the Fermanagh-Monaghan border.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **Routing**: Wouter for lightweight client-side routing
- **UI Components**: Radix UI primitives with custom Shadcn/ui components
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **State Management**: TanStack Query (React Query) for server state management
- **Form Handling**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Development**: tsx for TypeScript execution in development
- **Production Build**: esbuild for server-side bundling

### Database Layer
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Database**: PostgreSQL (configured via DATABASE_URL)
- **Connection**: Neon Database serverless adapter
- **Schema Management**: Drizzle Kit for migrations and schema management
- **Validation**: Zod schemas integrated with Drizzle

## Key Components

### Database Schema
- **Users Table**: Basic user authentication with username/password
- **Contact Submissions Table**: Stores customer contact form submissions with timestamps
- Shared schema definitions in `shared/schema.ts` for type safety across frontend and backend

### API Endpoints
- `POST /api/contact` - Submit contact form with validation
- `GET /api/contact` - Retrieve all contact submissions (admin functionality)

### Frontend Components
- **Navigation**: Fixed header with EasyGlow logo and product category navigation (Smokeless, Traditional Coal, Logs/Briquettes, Mixed Pallets, Half Pallets, Contact)
- **Hero Section**: Cozy fire background with "Clean smokeless coal delivered across Ireland" message and Shop Online CTA
- **Welcome Section**: White background section featuring company history, product image, and "Great Smokeless Heat - Low Ash" messaging
- **Delivery Section**: Super fast delivery information with product grid and delivery features
- **Benefits Section**: Four key benefits of EasyGlow smokeless coal (Low Smoke, Low Carbon, Smokeless City Coal, Quality delivery)
- **Contact Section**: Contact form with company location and delivery information
- **Footer**: Company information with product links and delivery details

### UI System
- Consistent design system using Shadcn/ui components
- Dark theme with fire-inspired orange color scheme
- Responsive design with mobile-first approach
- Custom CSS variables for consistent theming

## Data Flow

1. **Contact Form Submission**:
   - User fills out contact form on frontend
   - Form data validated using Zod schemas
   - API request sent to `/api/contact` endpoint
   - Server validates data and stores in database
   - Success/error feedback displayed to user

2. **Product Display**:
   - Static product data rendered on homepage
   - Featured products showcase with images and pricing
   - Future integration points for dynamic product data

3. **Navigation**:
   - Smooth scrolling between page sections
   - Mobile-responsive navigation with hamburger menu
   - Fixed header with scroll-based styling changes

## External Dependencies

### Production Dependencies
- **Frontend**: React ecosystem (React, React DOM, React Query)
- **UI Components**: Radix UI primitives, Lucide React icons
- **Styling**: Tailwind CSS, class-variance-authority, clsx
- **Forms**: React Hook Form, Hookform resolvers
- **Database**: Drizzle ORM, Neon Database adapter
- **Backend**: Express.js, session management
- **Validation**: Zod for schema validation
- **Date Handling**: date-fns for date utilities

### Development Dependencies
- **Build Tools**: Vite, esbuild, TypeScript
- **Development**: tsx for TypeScript execution
- **Database Tools**: Drizzle Kit for schema management

## Deployment Strategy

### Environment Configuration
- **Development**: `npm run dev` - runs with tsx and Vite dev server
- **Build**: `npm run build` - Vite build for frontend, esbuild for backend
- **Production**: `npm run start` - runs compiled Node.js application
- **Database**: `npm run db:push` - pushes schema changes to database

### Replit Configuration
- **Modules**: Node.js 20, Web, PostgreSQL 16
- **Port**: Application runs on port 5000, exposed as port 80
- **Deployment**: Autoscale deployment target
- **Build Command**: `npm run build`
- **Start Command**: `npm run start`

### File Structure
- `client/` - Frontend React application
- `server/` - Backend Express.js application
- `shared/` - Shared TypeScript definitions and schemas
- `dist/` - Built application files
- `migrations/` - Database migration files

## Changelog

```
Changelog:
- June 26, 2025. Initial setup
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```