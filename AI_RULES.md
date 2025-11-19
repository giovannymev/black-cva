# AI Rules for Black CVA Landing Page

## Tech Stack

- **React 19.2.0** - Modern React with latest features and optimizations
- **TypeScript** - Type-safe JavaScript development with strict configuration
- **Vite** - Fast build tool and development server with HMR
- **Tailwind CSS** - Utility-first CSS framework for rapid styling
- **Lucide React** - Icon library for consistent and beautiful icons
- **ES2022** - Modern JavaScript features with bundler module resolution

## Library Usage Rules

### UI Components & Styling
- **ALWAYS** use Tailwind CSS classes for styling - no inline styles or CSS files
- **PREFER** shadcn/ui components when available - they provide consistent, accessible patterns
- **USE** Lucide React for all icons - maintain visual consistency
- **CREATE** custom components only when shadcn/ui doesn't meet specific needs

### Component Architecture
- **KEEP** components under 100 lines - split larger components into smaller, focused ones
- **USE** TypeScript interfaces for all props - ensure type safety
- **ORGANIZE** components in `src/components/` directory
- **CREATE** pages in `src/pages/` directory
- **MAINTAIN** routes in `src/App.tsx` - single source of truth for routing

### Development Practices
- **FOLLOW** existing naming conventions - PascalCase for components, camelCase for variables
- **USE** functional components with hooks - no class components
- **IMPLEMENT** responsive design by default - mobile-first approach
- **AVOID** over-engineering - keep solutions simple and elegant
- **USE** semantic HTML5 elements for better accessibility

### File Structure Rules
- **IMPORT** using absolute paths with `@/` alias for cleaner imports
- **EXPORT** components as default exports for consistency
- **GROUP** related constants in `constants.ts` - maintain single source of truth
- **KEEP** utility functions focused and reusable

### Performance & Best Practices
- **LAZY LOAD** components when appropriate for better performance
- **USE** React.memo for expensive components that don't need frequent re-renders
- **AVOID** unnecessary re-renders by proper state management
- **IMPLEMENT** proper error boundaries for better user experience
- **OPTIMIZE** images and assets for web performance

### Code Quality
- **WRITE** self-documenting code with clear variable and function names
- **AVOID** TODO comments - implement features completely or create proper issues
- **USE** TypeScript strict mode - catch errors at compile time
- **MAINTAIN** consistent code formatting and structure
- **REVIEW** imports regularly - remove unused dependencies