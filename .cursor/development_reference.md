# TextBuddy Development Reference Guide

## MVP Approach & Roadmap

### Phase 1: Browser Extension MVP
- **Platform**: Chrome Extension (with potential for Edge, Firefox compatibility)
- **Core Features**:
  - Floating widget that can be moved around the browser window
  - Text input area for users to enter prompts or paste text
  - AI-powered text generation, refinement, and correction
  - Simple copy-paste functionality
  - Basic user settings (widget size, position)
  - Landing page for extension download
- **Success Metrics**:
  - User retention (how often users activate the widget)
  - Task completion (successful text generations)
  - User feedback on accuracy and usefulness

### Phase 2: Desktop Application
- System-wide floating widget (using Electron)
- Enhanced settings and customization
- Optional premium features

### Phase 3: Mobile Applications
- iOS and Android implementations
- Touch-optimized interface
- Platform-specific adaptations

## Tech Stack Reference

### Browser Extension MVP
- **Frontend**:
  - React + TypeScript for UI components
  - Tailwind CSS for styling
  - Manifest V3 API for Chrome Extension
  - Context API for state management
- **Backend**:
  - Next.js API routes for serverless functions
  - OpenAI API for text processing
  - MongoDB for user data and preferences
- **Deployment**:
  - Vercel for web hosting & API
  - Chrome Web Store for extension distribution

## Development Workflow

1. **Setup Phase**
   - Initialize Next.js project with TypeScript & Tailwind
   - Configure Chrome extension manifest
   - Set up API connections and authentication
   - Create core UI components

2. **Implementation Phase**
   - Build floating widget component
   - Implement AI text processing features
   - Develop settings and user preferences
   - Create landing page for the extension

3. **Testing Phase**
   - Local browser testing
   - User feedback collection
   - Performance optimization
   - Security review

4. **Deployment Phase**
   - Package extension for Chrome Web Store
   - Deploy website to Vercel
   - Set up monitoring and feedback channels

## Key Technical Considerations

### Extension Architecture
- **Background Script**: Manages API calls and authentication
- **Content Script**: Renders the floating widget in web pages
- **Popup**: Optional quick access to settings

### API & Data Flow
- User text → Local processing → API request → AI response → Display
- Token management to stay within API limits
- Caching responses for similar requests to reduce costs

### Common Gotchas
- Chrome extension context isolation (background vs. content scripts)
- API rate limiting and token usage
- User privacy considerations with text processing
- Cross-browser compatibility issues
- State persistence in browser extension context

## Code Standards Reference

- Use TypeScript interfaces for all data structures
- Follow component naming convention: `PascalCase.tsx`
- Utility functions in `camelCase.ts`
- Use CSS modules or Tailwind for styling
- Commit messages format: `type(scope): message`
  - Types: feat, fix, docs, style, refactor, test, chore

## Security Checklist

- No API keys in frontend code
- Secure user data storage
- Use HTTPS for all API requests
- Get only necessary permissions in extension manifest
- Validate all user inputs

---

*This document should be updated as development progresses and decisions are made* 