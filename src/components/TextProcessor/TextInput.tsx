"use client";

import React, { useState } from 'react';

// Define TypeScript interfaces for the component props
interface TextInputProps {
  onSubmit: (text: string) => void;
  placeholder?: string;
  buttonText?: string;
  initialValue?: string;
}

/**
 * TextInput - A component for user text input with a submit button
 */
const TextInput: React.FC<TextInputProps> = ({
  onSubmit,
  placeholder = 'Enter text or a prompt...',
  buttonText = 'Process',
  initialValue = '',
}) => {
  const [inputText, setInputText] = useState(initialValue);
  const [isLoading, setIsLoading] = useState(false);

  // Handle text change
  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputText(e.target.value);
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputText.trim()) {
      setIsLoading(true);
      
      // Submit the text to the parent component
      onSubmit(inputText);
      
      // In a real implementation, we would wait for the response
      // before setting isLoading back to false
      // For now, we'll simulate a delay
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <textarea
        className="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white text-sm resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
        placeholder={placeholder}
        rows={3}
        value={inputText}
        onChange={handleTextChange}
        disabled={isLoading}
      />
      <div className="mt-2 flex justify-end">
        <button
          type="submit"
          className={`px-3 py-1 rounded-md text-sm font-medium text-white ${
            isLoading
              ? 'bg-blue-400 cursor-not-allowed'
              : 'bg-blue-500 hover:bg-blue-600'
          }`}
          disabled={isLoading || !inputText.trim()}
        >
          {isLoading ? 'Processing...' : buttonText}
        </button>
      </div>
    </form>
  );
};

export default TextInput; 