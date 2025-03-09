# Cursor Guide: TextBuddy

## Project Overview
TextBuddy is an AI-powered floating text assistant designed to help users refine, generate, and improve their writing in real-time across various apps and platforms. The application operates as a browser extension and a mobile widget, enabling seamless text correction, rewriting, and generation without requiring users to switch apps. 

### **Goals:**
- Provide an intuitive, non-intrusive writing assistant for web and mobile.
- Ensure fast and efficient AI-driven text enhancements.
- Maintain user privacy by processing text only on demand.

### **Target Users:**
- Professionals seeking quick email or document refinement.
- Social media users needing engaging captions and posts.
- Students and content creators requiring grammar and clarity improvements.

---

## Project Rules
1. **Use TypeScript for Type Safety**
   - Ensures robust type definitions and reduces runtime errors.

2. **Follow RESTful API Conventions**
   - Keep API endpoints structured with clear naming, e.g., `/api/rewrite`, `/api/correct`.

3. **Optimize for Performance (Caching & Lazy Loading)**
   - Use Redis for caching AI responses and avoid unnecessary API calls.

4. **Ensure Accessibility (a11y)**
   - Follow WCAG guidelines to ensure screen reader support and keyboard navigation.

5. **Use Modular and Reusable Components**
   - Keep UI components in `/components` and ensure reusability across web and mobile.

6. **Secure Authentication & Data Handling**
   - Implement OAuth-based authentication (Google, GitHub) and encrypt sensitive data.

7. **Follow Git Best Practices**
   - Use feature branches (`feature/branch-name`), clear commit messages, and pull requests for code reviews.

---

## Contextual Details

### **Key Files & Directories:**
- `src/components/` → Stores reusable React/React Native UI components.
- `src/utils/` → Contains helper functions for text processing and API calls.
- `src/pages/api/` → Manages serverless API routes for text interactions.
- `src/hooks/` → Custom React hooks for managing widget state and user interactions.
- `public/manifest.json` → Defines the Chrome extension’s permissions and background services.

### **Dependencies:**
- **Frontend:** `React`, `Next.js`, `Tailwind CSS`, `React Native (Mobile)`
- **Backend:** `Node.js`, `Express`, `MongoDB`, `Redis`
- **AI Services:** `OpenAI API`, `Claude API`

---

## Usage Tips for Cursor
1. **Use `@file` to reference specific code files**
   - Example: `@file src/hooks/useTextProcessing.ts` for AI text functions.

2. **Prioritize step-by-step reasoning for complex tasks**
   - Example: If refactoring the AI processing logic, break it down into helper functions first.

3. **Suggest optimized query and caching mechanisms**
   - Example: Use `Redis` to cache frequent API responses and improve speed.

4. **Ensure cross-platform compatibility (Web & Mobile)**
   - Example: When writing UI components, use `react-native-web` for shared styles.

5. **Follow ESLint & Prettier for Code Consistency**
   - Run `npm run lint` before committing to main
   tain code standards.



