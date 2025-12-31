# NotSlop.ai

## Overview

NotSlop.ai is a satirical SaaS landing page that parodies AI art authentication services. The concept humorously offers "plausible deniability" for AI-generated content by having fake artists claim the work as their own. The application uses a polished corporate aesthetic with absurd copy for comedic effect, drawing inspiration from premium SaaS sites like Stripe and Vercel.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight React router)
- **Styling**: Tailwind CSS with CSS variables for theming (light/dark mode support)
- **Component Library**: shadcn/ui components built on Radix UI primitives
- **State Management**: TanStack React Query for server state
- **Build Tool**: Vite with hot module replacement

### Backend Architecture
- **Runtime**: Node.js with Express
- **Language**: TypeScript (ESM modules)
- **API Pattern**: RESTful endpoints prefixed with `/api`
- **Development**: tsx for TypeScript execution without compilation

### Data Storage
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Schema Location**: `shared/schema.ts` for shared type definitions
- **Migrations**: Drizzle Kit with migrations in `/migrations` directory
- **Current Storage**: In-memory storage (`MemStorage` class) as default, ready for PostgreSQL

### Project Structure
```
├── client/           # React frontend application
│   └── src/
│       ├── components/ui/  # shadcn/ui components
│       ├── pages/          # Route page components
│       ├── hooks/          # Custom React hooks
│       └── lib/            # Utilities and query client
├── server/           # Express backend
│   ├── index.ts      # Server entry point
│   ├── routes.ts     # API route definitions
│   └── storage.ts    # Data storage interface
├── shared/           # Shared code between client/server
│   └── schema.ts     # Drizzle schema and Zod types
└── migrations/       # Database migrations
```

### Design System
- **Typography**: DM Sans (primary), with additional fonts for variety
- **Color Scheme**: Purple primary (`hsl(258, 90%, 58%)`), neutral base with CSS variable theming
- **Spacing**: Tailwind's 4-unit scale (4, 6, 8, 12, 16, 20, 24)
- **Components**: Rounded corners (lg: 9px, md: 6px, sm: 3px), subtle shadows

## External Dependencies

### Frontend Libraries
- **@tanstack/react-query**: Server state management
- **@radix-ui/***: Accessible UI primitives (dialog, dropdown, tabs, etc.)
- **class-variance-authority**: Component variant management
- **lucide-react**: Icon library
- **react-hook-form** with **zod**: Form handling and validation
- **embla-carousel-react**: Carousel component
- **date-fns**: Date formatting utilities

### Backend Libraries
- **express**: Web server framework
- **drizzle-orm**: Database ORM
- **drizzle-zod**: Schema to Zod type generation
- **connect-pg-simple**: PostgreSQL session store (when auth is implemented)

### Database
- **PostgreSQL**: Primary database (requires `DATABASE_URL` environment variable)
- **Drizzle Kit**: Database migration and push tooling

### Build & Development
- **Vite**: Frontend build tool with React plugin
- **esbuild**: Server bundling for production
- **tsx**: TypeScript execution for development
- **@replit/vite-plugin-***: Replit-specific development enhancements