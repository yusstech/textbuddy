"use client";

import React, { useState } from 'react';

// Define TypeScript interfaces for the component props
interface TextOutputProps {
  text: string;
  label?: string;
}

/**
 * TextOutput - A component for displaying AI-generated text with copy functionality
 */
const TextOutput: React.FC<TextOutputProps> = ({
  text,
  label = 'AI Response:',
}) => {
  const [isCopied, setIsCopied] = useState(false);

  // Handle copy to clipboard
  const handleCopy = () => {
    if (text) {
      navigator.clipboard.writeText(text)
        .then(() => {
          setIsCopied(true);
          // Reset copy status after 2 seconds
          setTimeout(() => {
            setIsCopied(false);
          }, 2000);
        })
        .catch(err => {
          console.error('Failed to copy text: ', err);
        });
    }
  };

  if (!text) {
    return null;
  }

  return (
    <div className="mt-4 border rounded-md p-3 bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
      <div className="flex justify-between items-center mb-2">
        <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
          {label}
        </span>
        <button
          onClick={handleCopy}
          className="text-xs text-blue-500 hover:text-blue-600 dark:text-blue-400 flex items-center"
          title="Copy to clipboard"
        >
          {isCopied ? (
            <>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Copied!
            </>
          ) : (
            <>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
                <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z" />
              </svg>
              Copy
            </>
          )}
        </button>
      </div>
      <div className="text-sm text-gray-700 dark:text-gray-300 whitespace-pre-wrap">
        {text}
      </div>
    </div>
  );
};

export default TextOutput; 