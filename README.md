# Alghi - SEO Content Writer & Copywriter Portfolio

A professional, "easy-to-skim" one-page portfolio website built for a copywriter named Alghi. Designed to showcase works, detail about professional experiences, and provide contact information in a clean, responsive, dark-themed UI.

## Features

- **Modern One-Page Layout:** Smooth navigation between Hero, Works, About, and Contact sections.
- **Dynamic Portfolio:** Projects and experiences are managed in a centralized data file (`src/data/portfolioData.ts`) for easy textual and content updates.
- **Responsive Design:** Optimized for both desktop and mobile viewing using Tailwind CSS.
- **Dark Mode Aesthetics:** A clean, professional dark gray background (`bg-gray-950`) customized for a modern portfolio look.

## Technology Stack

- **Framework:** [React 18](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Tooling:** ESLint with TypeScript linting rules

## Project Structure

```
alghi-web/
├── public/                 # Static assets
├── src/
│   ├── assets/             # Images and other media
│   ├── components/         # Reusable React UI components
│   │   ├── AboutSection.tsx
│   │   ├── ContactSection.tsx
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── HeroSection.tsx
│   │   ├── PortfolioCard.tsx
│   │   └── WorksSection.tsx
│   ├── data/
│   │   └── portfolioData.ts # Centralized portfolio content
│   ├── App.tsx             # Main application layout grouping sections
│   ├── index.css           # Global CSS and Tailwind directives
│   └── main.tsx            # Application entry point
├── tailwind.config.js      # Tailwind CSS configuration options
├── package.json            # Project dependencies and script commands
└── vite.config.ts          # Vite bundler configuration
```

## Getting Started

### Prerequisites

Ensure you have Node.js and an npm-compatible package manager installed.

### Installation

Navigate into the project directory and install the required dependencies:

```bash
# Clone the repository if you haven't already
# cd alghi-web

npm install
```

### Running Locally

To start the Vite development server with Hot Module Replacement (HMR):

```bash
npm run dev
```

Open your browser and navigate to the local server URL provided in the terminal (usually `http://localhost:5173`).

### Building for Production

To create an optimized production build for deployment:

```bash
npm run build
```

This runs the TypeScript compiler and uses Vite to bundle the application into the `dist` directory.

### Previewing the Build

To test the production build locally before deploying:

```bash
npm run preview
```

## Customization

If you need to update the portfolio content (such as project links, work descriptions, or bio details), simply modify the data structures within `src/data/portfolioData.ts`. The UI components are designed to automatically reflect these data changes without needing to rewrite React layouts.
