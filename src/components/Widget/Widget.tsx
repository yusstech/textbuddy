"use client";

import React, { useState } from 'react';
import WidgetHeader from './WidgetHeader';
import TextInput from '../TextProcessor/TextInput';
import TextOutput from '../TextProcessor/TextOutput';
import ProcessingModeSelector from '../TextProcessor/ProcessingModeSelector';
import ChatInterface from '../TextProcessor/ChatInterface';
import { useAI } from '@/hooks/useAI';

// Define TypeScript interfaces for the component props
interface WidgetProps {
  initialPosition?: {
    x: number;
    y: number;
  };
  initialIsOpen?: boolean;
}

/**
 * Widget - A floating, draggable UI component that serves as the main interface for TextBuddy
 */
const Widget: React.FC<WidgetProps> = ({ 
  initialPosition = { x: 20, y: 20 },
  initialIsOpen = false
}) => {
  // State for tracking if the widget is open or closed
  const [isOpen, setIsOpen] = useState<boolean>(initialIsOpen);
  
  // State for tracking the widget's position
  const [position, setPosition] = useState(initialPosition);
  
  // Use our AI hook for text processing
  const { 
    mode, 
    isProcessing, 
    result, 
    error, 
    chatHistory,
    usingRealAPI,
    processText, 
    changeMode,
    clearChatHistory
  } = useAI();
  
  // Toggle the widget open/closed state
  const toggleWidget = () => {
    setIsOpen(!isOpen);
  };

  // Update the widget position
  const handlePositionChange = (newPosition: { x: number; y: number }) => {
    setPosition(newPosition);
  };
  
  // Handle text submission for processing
  const handleTextSubmit = (text: string) => {
    processText(text);
  };

  return (
    <div 
      className="fixed shadow-lg rounded-lg bg-white dark:bg-gray-800 overflow-hidden"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        width: isOpen ? '350px' : '48px',
        height: isOpen ? (mode === 'chat' ? '500px' : 'auto') : '48px',
        transition: 'width 0.3s, height 0.3s',
        zIndex: 9999,
      }}
    >
      {/* Widget Header - Using the WidgetHeader component */}
      <WidgetHeader
        title={mode === 'chat' ? "TextBuddy Chat" : "TextBuddy"}
        isOpen={isOpen}
        onToggle={toggleWidget}
        onPositionChange={handlePositionChange}
      />
      
      {/* Widget Body - Only shown when widget is open */}
      {isOpen && (
        <div className={`p-4 ${mode === 'chat' ? 'h-[calc(100%-48px)] flex flex-col' : ''}`}>
          {/* Mode Selector */}
          <div className="flex justify-between items-center">
            <ProcessingModeSelector 
              selectedMode={mode} 
              onModeChange={changeMode} 
            />
            
            {/* API Mode Indicator */}
            {usingRealAPI !== null && (
              <div className={`text-xs px-2 py-1 rounded ${
                usingRealAPI 
                  ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' 
                  : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
              }`}>
                {usingRealAPI ? 'API Mode' : 'Demo Mode'}
              </div>
            )}
          </div>
          
          {mode === 'chat' ? (
            /* Chat Interface */
            <div className="flex-1 mt-2 flex flex-col overflow-hidden">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Chat with TextBuddy
                </h3>
                {chatHistory.length > 0 && (
                  <button 
                    onClick={clearChatHistory}
                    className="text-xs text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                  >
                    Clear History
                  </button>
                )}
              </div>
              <div className="flex-1 overflow-hidden">
                <ChatInterface 
                  messages={chatHistory}
                  onSendMessage={handleTextSubmit}
                  isProcessing={isProcessing}
                />
              </div>
            </div>
          ) : (
            /* Text Processing Interface */
            <>
              <p className="text-gray-700 dark:text-gray-300 text-sm my-2">
                Enter text to process using the selected mode:
              </p>
              
              {/* Text Input Component */}
              <TextInput 
                onSubmit={handleTextSubmit}
                placeholder="Enter text to process..."
                buttonText={isProcessing ? "Processing..." : "Process Text"}
                initialValue=""
              />
              
              {/* Error Message */}
              {error && (
                <div className="mt-3 p-2 bg-red-50 border border-red-200 rounded-md text-red-600 text-xs">
                  {error}
                </div>
              )}
              
              {/* Text Output Component - only shown when there's output */}
              {result && result.output && (
                <TextOutput text={result.output} />
              )}
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Widget; 