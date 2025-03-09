# TextBuddy Coding Exercises

This document contains progressive coding exercises designed to build your skills incrementally as we develop TextBuddy. Each exercise focuses on a specific concept or component that will be part of the final application.

## Beginner Exercises

### Exercise 1: Basic React Component Structure
**Goal**: Create a simple draggable widget component

1. Create a basic React component for the widget
2. Add styling to make it look like a small floating card
3. Implement basic state with useState (open/closed state)
4. Add a button that toggles the widget state

**Key learning**: Component structure, useState hook, CSS styling

### Exercise 2: TypeScript Props and Interfaces
**Goal**: Add TypeScript typing to components

1. Create interfaces for component props
2. Add proper typing to state variables
3. Create a reusable Button component with TypeScript props
4. Implement type-safe event handlers

**Key learning**: TypeScript interfaces, typing React components, event typing

### Exercise 3: Simple Text Processing Component
**Goal**: Create components for text input and output

1. Build a form with text input (textarea)
2. Create a component to display processed text
3. Implement a simple text transformation (e.g., capitalize, reverse text)
4. Add proper form handling with React

**Key learning**: Form handling, controlled components, simple state transformations

## Intermediate Exercises

### Exercise 4: Draggable UI Element
**Goal**: Make the widget draggable on the screen

1. Research and implement a draggable component (using React libraries or DOM API)
2. Add logic to remember the widget position
3. Create boundaries for the draggable area
4. Add smooth transitions when dragging

**Key learning**: DOM manipulation, draggable UI, position state management

### Exercise 5: Context API for Global State
**Goal**: Implement global state management with Context API

1. Create a context provider for widget settings
2. Implement state and actions in the context
3. Connect components to read from and update the context
4. Add persistent storage of settings using localStorage

**Key learning**: Context API, global state management, localStorage

### Exercise 6: API Integration Simulation
**Goal**: Simulate AI API integration

1. Create a service function that mimics API behavior
2. Implement loading states and error handling
3. Add a delay to simulate network requests
4. Display results with proper formatting

**Key learning**: Async operations, loading states, error handling

## Advanced Exercises

### Exercise 7: Chrome Extension Setup
**Goal**: Set up basic Chrome extension structure

1. Create a manifest.json file
2. Set up content script injection
3. Implement a basic popup UI
4. Test the extension in developer mode

**Key learning**: Browser extension basics, manifest structure, content scripts

### Exercise 8: Content Script Injection
**Goal**: Inject the widget into web pages

1. Create a content script that injects the widget component
2. Handle React rendering within the page context
3. Ensure the widget doesn't interfere with page styling
4. Implement communication between popup and content script

**Key learning**: DOM injection, isolation of components, message passing

### Exercise 9: OpenAI API Integration
**Goal**: Connect to the actual OpenAI API

1. Set up secure API key handling
2. Create a text completion service
3. Implement proper error handling for API limits
4. Add text processing options (tone, length, etc.)

**Key learning**: API integration, async processing, configuration options

## Capstone Exercises

### Exercise 10: Complete Widget Functionality
**Goal**: Combine all features into a cohesive widget

1. Integrate draggable UI, text processing, and API integration
2. Add animations for smooth user experience
3. Implement keyboard shortcuts
4. Add copy-to-clipboard functionality

**Key learning**: Feature integration, polish, advanced user interactions

### Exercise 11: User Settings and Preferences
**Goal**: Create a settings panel for the widget

1. Build a settings UI with form controls
2. Connect settings to the Context API
3. Implement persistent storage of preferences
4. Add theme options (light/dark mode)

**Key learning**: Settings UI, preference management, themes

### Exercise 12: Packaging and Deployment
**Goal**: Prepare the extension for distribution

1. Optimize the build process
2. Create proper icons and assets
3. Write user documentation
4. Package the extension for Chrome Web Store

**Key learning**: Build process, optimization, deployment preparation

---

*Note: These exercises should be completed sequentially as they build on skills and code from previous exercises. Each exercise can be expanded or modified based on your learning pace and interests.* 