# Copilot Instructions for Tanish Portfolio

## Project Overview
This is a **React-based portfolio website** showcasing full-stack development experience using modern tools and practices. The site is built with Create React App, styled with Tailwind CSS, and uses Framer Motion for animations.

**Key Characteristics:**
- Portfolio site (not a multi-user app requiring authentication)
- Responsive design with mobile-first approach
- Showcase of ERP systems, APIs, and database work
- Email contact form integration via EmailJS
- Client-side only (no backend server)

## Architecture & Structure

### Routing
The app uses **React Router v7** with nested layouts:
- Single `<Layout>` wrapper in [src/layout/Layout.jsx](src/layout/Layout.jsx)
- All routes (/, /about, /experience, /projects, /projects/csm, /contact) nested under this layout
- Outlet pattern: Layout provides `<Navbar>`, `<main>`, `<Footer>` around page content

### Key Components

**Layout Components** ([src/layout/](src/layout/)):
- [Navbar.jsx](src/layout/Navbar.jsx) - Sticky navigation with mobile toggle (uses Lucide icons, useState for menu state)
- [Footer.jsx](src/layout/Footer.jsx) - Shared footer across all pages
- [Layout.jsx](src/layout/Layout.jsx) - Wrapper providing max-width container (`max-w-7xl`)

**Page Components** ([src/pages/](src/pages/)):
- All pages are simple functional components returning JSX
- No component composition within pages (each page is self-contained)
- Examples: [Home.jsx](src/pages/Home.jsx), [About.jsx](src/pages/About.jsx), [Projects.jsx](src/pages/Projects.jsx)

**Special Pattern:** Project detail pages like [ProjectCSM.jsx](src/pages/projects/ProjectCSM.jsx) live in `src/pages/projects/` subdirectory

### State Management
- **Navbar:** Local `useState` for mobile menu toggle
- **Contact Form** ([src/pages/Contact.jsx](src/pages/Contact.jsx)): Local `useState` for form data (name, email, phone, message)
- **No Redux/Context:** All state is page-level only

## Styling & Design Patterns

### Tailwind CSS
- Configured with utility classes only (no custom components)
- Responsive breakpoints: `sm:`, `md:`, `lg:` prefixes
- Color scheme: slate grays + indigo accents (#4f46e5 / `bg-indigo-600`)
- Common utilities: `max-w-7xl mx-auto px-6`, `space-y-*` for vertical gaps

**Mobile-First Approach:** Design for mobile, then enhance with `md:` and `lg:` classes
- Example: `text-3xl sm:text-4xl md:text-5xl` (progressively larger on bigger screens)

### Framer Motion
- Used in all pages for entrance animations and hover effects
- Common patterns:
  - `whileInView={{ opacity: 1, y: 0 }}` with `viewport={{ once: true }}` for scroll-triggered animations
  - `whileHover={{ y: -6 }}` for lift effects on cards
  - `initial={{ opacity: 0, y: 40 }}` + `animate={{ opacity: 1, y: 0 }}` for page load

## External Integrations

### EmailJS Contact Form
- Service: emailjs-com package
- [Contact.jsx](src/pages/Contact.jsx) demonstrates pattern:
  1. Form state with `useState`
  2. `emailjs.send()` with service/template/credentials
  3. Success/error handling with SweetAlert2 modals
- **Note:** Credentials are hardcoded in source (service_*, template_*, public key)

### SweetAlert2
- Used for confirmation dialogs (sending form, success/error messages)
- Styled with `confirmButtonColor: "#4f46e5"` (indigo)

### Lucide React Icons
- Lightweight icon library used in [Navbar.jsx](src/layout/Navbar.jsx) (`Menu`, `X` icons)
- Import as `import { Menu, X } from "lucide-react"`

## Conventions & Patterns

### File Naming & Structure
- **Components:** PascalCase (e.g., `Home.jsx`, `Navbar.jsx`)
- **Directories:** lowercase (e.g., `src/layout/`, `src/pages/`, `src/pages/projects/`)

### Component Pattern
```jsx
export default function ComponentName() {
  const [state, setState] = useState(initialValue);
  
  return (
    <section>
      {/* Content with Tailwind + optional Framer Motion */}
    </section>
  );
}
```

### Data as Constants
- Lists and config stored as JS objects at component top
- Example: `whatIDoItems` array in [Home.jsx](src/pages/Home.jsx) - data structure, not separate config file

### CSS Files
- Minimal use: only [App.css](src/App.css), [index.css](src/index.css), component-level Tailwind
- **Don't** create new `.css` files; use Tailwind utilities inline

## Development Workflow

### Available Scripts
- `npm start` - Development server on http://localhost:3000 (hot reload enabled)
- `npm test` - Jest test runner (interactive watch mode)
- `npm run build` - Production build to `/build` folder
- `npm run eject` - One-way operation (avoid unless necessary)

### Testing Setup
- Jest + React Testing Library configured via Create React App
- Config: [setupTests.js](src/setupTests.js), [App.test.js](src/App.test.js)
- **Current state:** Minimal test files; focus on UI testing if adding tests

### Build & Deployment
- Production build uses Tailwind's purge to minimize CSS
- No environment variables currently used (EmailJS credentials hardcoded)

## When Adding Features

### Adding a New Page
1. Create component in `src/pages/NewPage.jsx`
2. Import in [App.js](src/App.js)
3. Add route in `<Routes>` with `<Route path="/newpage" element={<NewPage />} />`
4. Add link to navigation array in [Navbar.jsx](src/layout/Navbar.jsx)
5. Style with Tailwind classes matching existing pages

### Adding Form Submissions
- Follow [Contact.jsx](src/pages/Contact.jsx) pattern: useState → emailjs/API call → SweetAlert2 feedback
- For new email services, update emailjs service ID, template ID, public key

### Adding Animations
- Prefer Framer Motion `motion` component wrappers over CSS animations
- Use `whileInView` for scroll-triggered, `whileHover` for interactive effects
- Keep transitions under 0.5s duration for snappy feel

### Component Composition
- Pages are primary; avoid deep nesting
- Extract repeated UI patterns into separate components (e.g., card layouts)
- Each component should fit in ~150-200 lines for readability

## Dependencies to Know

| Package | Purpose | Example Usage |
|---------|---------|---------|
| `react-router-dom` v7 | Client-side routing | `<BrowserRouter>`, `<Routes>`, `<NavLink>` |
| `framer-motion` | Animations | `<motion.div>`, `whileHover`, `whileInView` |
| `tailwindcss` | Styling | `className="px-6 py-4 bg-indigo-600"` |
| `emailjs-com` | Email integration | `emailjs.send(service, template, params)` |
| `sweetalert2` | Alert dialogs | `Swal.fire({ icon, title, text })` |
| `lucide-react` | Icons | `import { Menu } from "lucide-react"` |

## Key Metrics
- Package.json config: ESLint extends `react-app`, browserlist targets modern browsers
- No TypeScript; plain JavaScript/JSX only
- No environment-specific configs (.env files not used)
