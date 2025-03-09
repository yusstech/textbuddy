"use client";

import React from 'react';
import { TextProcessingMode } from '@/types/ai';

interface ProcessingModeSelectorProps {
  selectedMode: TextProcessingMode;
  onModeChange: (mode: TextProcessingMode) => void;
}

const ProcessingModeSelector: React.FC<ProcessingModeSelectorProps> = ({
  selectedMode,
  onModeChange
}) => {
  const modes: { value: TextProcessingMode; label: string; description: string }[] = [
    { 
      value: 'chat', 
      label: 'Chat', 
      description: 'Have a conversation with AI' 
    },
    { 
      value: 'summarize', 
      label: 'Summarize', 
      description: 'Create a concise summary'
    },
    { 
      value: 'analyze', 
      label: 'Analyze', 
      description: 'Analyze text content and structure' 
    },
    { 
      value: 'translate', 
      label: 'Translate', 
      description: 'Translate text to another language' 
    }
  ];

  return (
    <div className="mb-4">
      <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-2">
        Processing Mode:
      </label>
      <div className="flex flex-wrap gap-2">
        {modes.map(mode => (
          <button
            key={mode.value}
            className={`text-xs px-2 py-1 rounded-md transition-colors ${
              selectedMode === mode.value
                ? 'bg-blue-500 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600'
            }`}
            onClick={() => onModeChange(mode.value)}
            title={mode.description}
          >
            {mode.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProcessingModeSelector; 