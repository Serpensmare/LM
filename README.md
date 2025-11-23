# LM Portfolio

Portfolio website for Luca Marrella built with React, Vite, and Tailwind CSS.

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to the URL shown in the terminal (usually `http://localhost:5173`)

### Build for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

To preview the production build locally:

```bash
npm run preview
```

## Tech Stack

- **React** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling
- **lucide-react** - Icons

## Project Structure

```
LM-Portfolio/
├── src/
│   ├── components/
│   │   └── Portfolio.jsx    # Main portfolio component
│   ├── App.jsx              # App entry point
│   ├── main.jsx             # React DOM render
│   └── index.css            # Tailwind imports
├── index.html               # HTML template
├── package.json             # Dependencies
├── vite.config.js           # Vite configuration
├── tailwind.config.js       # Tailwind configuration
└── postcss.config.js        # PostCSS configuration
```

## Features

- Responsive design
- Smooth scrolling navigation
- Timeline of ventures
- Contact section with social links
- Privacy policy page

