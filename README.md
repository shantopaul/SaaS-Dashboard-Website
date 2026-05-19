# ✈️ FlowPilot SaaS Dashboard

[![React](https://img.shields.io/badge/React-19.0-61DAFB?logo=react&logoColor=black&style=flat-square)](#)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?logo=typescript&logoColor=white&style=flat-square)](#)
[![Vite](https://img.shields.io/badge/Vite-6.0-646CFF?logo=vite&logoColor=white&style=flat-square)](#)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?logo=tailwind-css&logoColor=white&style=flat-square)](#)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.0-F024B6?logo=framer&logoColor=white&style=flat-square)](#)
[![Zustand](https://img.shields.io/badge/Zustand-4.5-orange?style=flat-square)](#)
[![Accessibility (a11y)](https://img.shields.io/badge/Accessibility-WCAG_2.1_AA-success?style=flat-square)](#)

FlowPilot is a premium, high-performance SaaS dashboard designed for modern product and growth teams who need real-time data visibility without the friction. It combines a conversion-optimized marketing landing page, secure simulated authentication flows, and a dense, beautiful, responsive administration panel featuring high-fidelity interactive state management, custom client-facing copy, accessibility (a11y) safeguards, and fluid staggered animations.

Designed and engineered with **React**, **TypeScript**, and **Tailwind CSS**, FlowPilot offers a pixel-perfect, premium look in both light and dark modes, backed by professional engineering practices like robust form validation, custom search indexes, global accessibility skip links, and instant UI responsiveness.

---

## ⚡ Core Features

### 💻 Marketing & Landing Pages

- **Interactive Hero & Visual Previews**: Modern visual grid systems and real-time dashboard mini-previews to instantly demonstrate the platform value proposition to incoming visitors.
- **Punchy Copy & Case Studies**: Entirely customized, outcome-oriented content, realistic FAQs, and high-fidelity client testimonials with metric-backed details.
- **Interactive Pricing Matrix**: Standard vs. Professional vs. Enterprise comparisons with custom benefit listings and flexible action-oriented buttons.

### 🛡️ Secure Auth Flows (Simulated)

- **Register & Login Pages**: Handled by **React Hook Form** + **Zod** schema validations with instant error state announcements.
- **Password Toggles**: Clean interactive show/hide password buttons to prevent input entry mistakes.
- **State Persistence**: Uses **Zustand** stores for authenticated sessions, custom avatar generation, and instant, clean dashboard navigation.

### 📊 Real-time Growth Analytics

- **Interactive Metrics Grid**: Live data components displaying Total Revenue, Active Users, New Customers, and Trial-to-Paid conversions, complete with month-over-month trend directions.
- **Custom Charts (Recharts-based)**:
  - **Revenue Growth**: Visual forecasting tool that stacks monthly recurring revenue (MRR) alongside projected growth.
  - **Monthly Sales**: Sleek sales trends comparison grids.
  - **Traffic Funnel**: Deep funnel conversion analytics (Visitors → Signups → Trials → Paid).
  - **Device Breakdown & Traffic Sources**: Radial and circular device session distribution tracking.

### 💳 Billing & Account Settings

- **Seat Allocation**: Dynamic team seat progress bars highlighting current consumption vs. contract boundaries (e.g. _14 of 25 seats used_).
- **Payment Methods**: Add and edit card panels with instant local form validation and responsive credit card logo generation.
- **Transaction & Invoice History**: Searchable payment entries with status chips (`Paid`, `Pending`, `Failed`) and instant client-facing invoices.
- **Preferences Dashboard**: Light/Dark theme toggles, two-factor authentication controls, custom notification subscriptions, and team role managers.

### 🔍 Command Search Experience

- **Ctrl + K Command Bar**: A global, accessible search overlay indexing dashboard routes, specific customers, active invoices, payment transactions, and generated analytics reports.
- **Interactive Navigation**: Instant keyword-based keyup searches directing keyboard users cleanly to target states.

---

## 📸 Screenshots Gallery

| Public Landing Page                                                                                 | Responsive Analytics Dashboard                                                                                   |
| --------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| ![Landing Page Placeholder](https://placehold.co/600x400/1e293b/ffffff?text=FlowPilot+Landing+Page) | ![Dashboard Overview Placeholder](https://placehold.co/600x400/1e293b/ffffff?text=FlowPilot+Analytics+Dashboard) |

| Billing & Team Seats Manager                                                                              | Account Settings & Theme Toggle                                                                          |
| --------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| ![Billing Page Placeholder](https://placehold.co/600x400/1e293b/ffffff?text=FlowPilot+Billing+Management) | ![Settings Page Placeholder](https://placehold.co/600x400/1e293b/ffffff?text=FlowPilot+Account+Settings) |

---

## ♿ Accessibility (a11y) Focus

FlowPilot is built following professional accessibility guidelines to be fully usable by assistive technology and keyboard users:

- **Skip-to-Content Navigation**: Hidden skip links present on both public and dashboard layouts, immediately appearing on initial `Tab` keypress to target main content areas.
- **Semantic Structure**: Semantic HTML5 tags (`<header>`, `<nav>`, `<main>`, `<footer/>`) are used strictly with consistent heading levels.
- **Keyboard Navigation Support**: Escape keys close all modals, dropdowns, and sidebar overlays.
- **Focus Management**: Modals feature keyboard focus traps that move focus to active control nodes on open and restore focus cleanly to the trigger button on dismiss.
- **Screen Reader Richness**: Redundant vector graphics have `aria-hidden="true"`, buttons are explicitly named via `aria-label`, active states declare `aria-current="page"`, and custom error notifications utilize `aria-live`.
- **Motion Safetynet**: Global support for the system-level `prefers-reduced-motion` media query, disabling all heavy translation and transition delays for users with motion sensitivities.

---

## 🛠️ Technical Stack

- **Build Tooling & Bundler**: [Vite 6](https://vite.dev/)
- **Frontend Library**: [React 19](https://react.dev/)
- **Type System**: [TypeScript 5](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 3](https://tailwindcss.com/)
- **Animations**: [Framer Motion 11](https://www.framer.com/motion/)
- **State Management**: [Zustand 4](https://github.com/pmndrs/zustand)
- **Form Handling**: [React Hook Form](https://react-hook-form.com/) & [Zod Validation](https://zod.dev/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Routing**: [React Router DOM 6](https://reactrouter.com/)

---

## 📂 Project Structure

```text
SaaS-Dashboard-Website/
├── public/                 # Static brand assets
├── src/
│   ├── components/         # Modular reusable components
│   │   ├── common/         # Buttons, Inputs, Modals, Dropdowns, Toggles, PageMotion
│   │   ├── dashboard/      # StatCards, ActivityFeeds, CustomersTables, Charts
│   │   └── layout/         # Sidebars, Navbars, Footers, Page Layout wrappers
│   ├── data/               # Realistic mocked databases (pricing, faq, statistics, invoices)
│   ├── hooks/              # Custom utilities (useLocalStorage, useTheme)
│   ├── pages/              # Primary route pages
│   │   ├── auth/           # Login, Registration flows
│   │   ├── dashboard/      # Dashboard Overview, Analytics, Billing, Settings, Profile
│   │   └── public/         # Landing, Features, Pricing, Contact Pages
│   ├── providers/          # ThemeProvider, ToastProvider
│   ├── store/              # Zustand global state slices (auth, billing, notifications)
│   ├── styles/             # Global CSS variables and tailwind baseline layers
│   ├── types/              # Strong TypeScript type definitions
│   └── utils/              # cn (classnames helper), data parsers
├── index.html              # Main application entrypoint
├── tailwind.config.js      # Custom theme, typography scales, HSL color tokens
└── vite.config.ts          # Build optimization, path alias mapping
```

---

## 💻 Getting Started

### Prerequisites

- **Node.js** (v18.0.0 or higher recommended)
- **npm** (v9.0.0 or higher) or your preferred package manager (Yarn, pnpm)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/shantopaul/SaaS-Dashboard-Website.git
   cd SaaS-Dashboard-Website
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

### Running Locally

To launch the hot-reloading development server:

```bash
npm run dev
```

The application will launch on your local host (usually `http://localhost:5173/`).

### Building for Production

To generate a highly optimized static bundle:

```bash
npm run build
```

The production bundle will be built inside the `/dist` directory. You can preview the production build locally:

```bash
npm run preview
```

### Code Quality Tools

Format code following styling guidelines:

```bash
npm run format
```

Analyze codebase for code smells and structure:

```bash
npm run lint
```

---

## 🚀 Deployment Instructions

### Deploying to Vercel

1. Install the Vercel CLI or import the project directly via the [Vercel Dashboard](https://vercel.com).
2. Connect your Git repository.
3. Configure the following project parameters:
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
4. Click **Deploy**.

---

## 💡 Future Enhancements Roadmap

- **Bundle Code-Splitting**: Code-split larger vendor modules (e.g., Recharts) using dynamic imports and Rollup output chunking parameters to eliminate bundle size warning alerts.
- **Persistent Backend Integration**: Swap mock stores with real REST or GraphQL APIs (e.g., Node.js/Express, Supabase, or Firebase) to handle persistent database structures.
- **OAuth Providers**: Integrate real-world social authentication (Google OAuth, GitHub Auth) through secure JWT auth servers.
- **PDF Invoice Exporters**: Add automated PDF rendering libraries to export dynamic user invoices directly from the Billing history grid.

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
