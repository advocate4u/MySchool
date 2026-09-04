# MySchool

Enterprise-oriented React + TypeScript school website starter.

## Architecture

- **Presentation:** reusable layout, page and UI components
- **Application:** custom hooks and feature-level orchestration
- **Infrastructure:** typed API client and service layer
- **Configuration:** environment-driven public runtime/build configuration
- **Routing:** React Router with route-level lazy loading
- **Robustness:** application error boundary, loading states and typed API errors
- **SEO:** semantic HTML, per-page metadata, robots.txt and sitemap.xml
- **Responsive UI:** mobile-first responsive CSS and accessible navigation

## Design patterns in use

- Component composition
- Container/presentation separation where useful
- Custom Hook pattern
- Service layer pattern
- Repository-style data abstraction through services
- Dependency Inversion through service boundaries
- Adapter-friendly API/domain separation
- Error Boundary pattern
- Lazy-loading/code-splitting pattern

Patterns are introduced only where they solve a real maintainability problem.

## Configuration

Copy `.env.example` to the appropriate environment file. Only non-secret `VITE_*` values belong in the frontend because Vite exposes these values to the browser. Secrets must remain server-side.

## Development

```bash
npm install
npm run dev
```

## Type checking and production build

```bash
npm run typecheck
npm run build
npm run preview
```

## Learning roadmap

1. JavaScript fundamentals
2. Modern JavaScript and asynchronous programming
3. TypeScript fundamentals and advanced typing
4. React fundamentals
5. React + TypeScript patterns
6. Enterprise architecture and state management
7. ASP.NET Core Web API integration
8. Authentication and authorization
9. Validation, security and OWASP practices
10. Testing, performance, accessibility and SEO
11. CI/CD and production deployment

## Backend target architecture

```text
React + TypeScript
       |
    REST API
       |
ASP.NET Core
       |
Application / Domain / Infrastructure
       |
   SQL Server
```
