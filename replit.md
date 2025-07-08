# IntegraDev.IA - Full Stack Web Application

## Overview

IntegraDev.IA is a modern full-stack web application showcasing AI and development solutions. The application features a React frontend built with Vite, TypeScript, and Tailwind CSS, backed by an Express.js server with PostgreSQL database integration using Drizzle ORM.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: Radix UI primitives with shadcn/ui components
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query for server state management
- **Animation**: Framer Motion for smooth animations

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Session Management**: PostgreSQL-based session storage
- **Development**: Hot reload with Vite integration in development mode

## Key Components

### Frontend Structure
- `client/src/App.tsx` - Main application component with routing
- `client/src/pages/` - Page components (Home, About, Products, NotFound)
- `client/src/components/` - Reusable UI components
- `client/src/components/ui/` - shadcn/ui component library
- `client/src/hooks/` - Custom React hooks
- `client/src/lib/` - Utility functions and configurations

### Backend Structure
- `server/index.ts` - Express server setup and middleware
- `server/routes.ts` - API route definitions
- `server/storage.ts` - Database abstraction layer with in-memory fallback
- `server/vite.ts` - Vite integration for development

### Shared Components
- `shared/schema.ts` - Database schema definitions with Drizzle and Zod validation

## Data Flow

### Database Schema
- **Users Table**: Basic user management with username/password authentication
- **Schema Validation**: Zod schemas for type-safe data validation
- **ORM**: Drizzle ORM for type-safe database operations

### API Communication
- RESTful API endpoints prefixed with `/api`
- JSON request/response format
- Error handling with proper HTTP status codes
- Request logging middleware for development

### State Management
- TanStack Query for server state caching and synchronization
- React hooks for local component state
- Form state management with react-hook-form

## External Dependencies

### UI and Styling
- **Radix UI**: Accessible component primitives
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library
- **Lucide React**: Icon library

### Database and Backend
- **@neondatabase/serverless**: Neon database driver
- **Drizzle ORM**: Type-safe database toolkit
- **connect-pg-simple**: PostgreSQL session store

### Development Tools
- **Vite**: Build tool and development server
- **TypeScript**: Type safety and developer experience
- **ESBuild**: Fast JavaScript bundler for production

## Deployment Strategy

### Build Process
1. **Frontend Build**: Vite builds React app to `dist/public`
2. **Backend Build**: ESBuild bundles server code to `dist/index.js`
3. **Database**: Drizzle migrations stored in `migrations/` directory

### Environment Configuration
- `DATABASE_URL` environment variable required for PostgreSQL connection
- Development vs production mode detection via `NODE_ENV`
- Replit-specific integrations for cloud deployment

### Production Considerations
- Static file serving from `dist/public`
- PostgreSQL connection pooling
- Error boundaries and graceful error handling
- Session management with persistent storage

## Changelog

```
Changelog:
- July 04, 2025: Initial setup
- July 04, 2025: Enhanced design with attractive images and streamlined content
  - Homepage: Added visual cards with relevant tech images, removed mission section
  - Products page: Simplified with visual headers, reduced content length
  - Overall: More compact sections, better visual hierarchy
- July 08, 2025: Logo integration and readability improvements
  - Created SVG logo component based on user-provided design
  - Replaced hero sections with clean gradient backgrounds (no text over images)
  - Updated navbar and footer to use new logo
  - Improved text readability with better contrast and backgrounds
  - Updated footer location to Niterói, RJ - Brasil
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
Design preferences: Attractive visuals, compact content, not overwhelming for clients.
```