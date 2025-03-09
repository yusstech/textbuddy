# TextBuddy Project Structure Guide

This document provides a detailed breakdown of our project structure with explanations for each directory and file to help you understand the architecture and purpose of each component.

## Root Directory Structure

```
textbuddy/
├── public/              # Static assets and extension manifest
├── src/                 # Source code
│   ├── components/      # Reusable UI components
│   ├── pages/           # Next.js pages and API routes
│   ├── hooks/           # Custom React hooks
│   ├── utils/           # Helper functions and utilities
│   ├── styles/          # Global styles and Tailwind configuration
│   ├── types/           # TypeScript type definitions
│   ├── contexts/        # React context providers
│   └── services/        # External service integrations (API, etc.)
├── extension/           # Chrome extension specific code
│   ├── background/      # Extension background scripts
│   ├── content/         # Content scripts injected into pages
│   └── popup/           # Extension popup UI
├── tests/               # Test files
└── config/              # Configuration files
```

## Key Files & Their Purpose

### Next.js Core Files

- `src/pages/_app.tsx` - Main application wrapper with global providers
- `src/pages/index.tsx` - Landing page for the web application
- `src/pages/api/` - API routes for server-side functionality
- `src/styles/globals.css` - Global CSS and Tailwind imports

### Extension Files

- `public/manifest.json` - Chrome extension manifest file defining permissions and metadata
- `extension/background/index.ts` - Background script managing extension lifecycle
- `extension/content/index.tsx` - Content script that injects the widget into web pages
- `extension/popup/index.tsx` - UI for the extension popup when clicking the toolbar icon

### Component Structure

- `src/components/Widget/` - The floating widget component
  - `Widget.tsx` - Main component
  - `WidgetHeader.tsx` - Draggable header with controls
  - `WidgetBody.tsx` - Content area with text input/output
  - `WidgetControls.tsx` - Buttons for actions

- `src/components/TextProcessor/` - Text processing components
  - `TextInput.tsx` - User input area
  - `TextOutput.tsx` - AI-generated text display
  - `ActionButtons.tsx` - Text processing action buttons

### Service Integration

- `src/services/ai.ts` - OpenAI API integration
- `src/services/auth.ts` - Authentication service
- `src/services/storage.ts` - Data persistence service

## Configuration Files

- `next.config.js` - Next.js configuration
- `tsconfig.json` - TypeScript configuration
- `tailwind.config.js` - Tailwind CSS configuration
- `package.json` - Dependencies and scripts

## Learning Focus Areas

### For beginners, focus on understanding:

1. **Component Structure**
   - How components are organized and nested
   - Props passing between components
   - Component state management

2. **React Hooks**
   - How `useState` and `useEffect` manage component state and lifecycle
   - Custom hooks for reusable logic

3. **TypeScript Basics**
   - Type definitions for props and state
   - Interface definitions for data structures

As you progress, explore:

4. **Context API**
   - How global state is managed across components
   - Provider patterns for state distribution

5. **Extension Architecture**
   - Communication between different extension contexts
   - DOM manipulation via content scripts

---

*This document will evolve as the project grows. Refer to it whenever you need clarity on where files should be placed or how different parts of the application interact.* 