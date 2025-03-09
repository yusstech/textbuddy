"use client";

import { useState, useEffect } from 'react';
import { TextProcessingMode, TextProcessingResult, ChatMessage } from '@/types/ai';
import { createAIService, demoAIService } from '@/services/ai';

interface UseAIOptions {
  initialMode?: TextProcessingMode;
}

export function useAI(options: UseAIOptions = {}) {
  const { initialMode = 'chat' } = options; // Default to chat mode
  
  const [mode, setMode] = useState<TextProcessingMode>(initialMode);
  const [isProcessing, setIsProcessing] = useState(false);
  const [result, setResult] = useState<TextProcessingResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([]);
  const [usingRealAPI, setUsingRealAPI] = useState<boolean | null>(null);
  
  // Determine if we're using the real API or demo mode
  useEffect(() => {
    const aiService = createAIService();
    setUsingRealAPI(!!aiService);
    
    if (!aiService) {
      console.log('Using demo AI service (no API key found)');
    } else {
      console.log('Using real OpenAI service');
    }
  }, []);
  
  // Load chat history from localStorage when component mounts
  useEffect(() => {
    const savedHistory = localStorage.getItem('textbuddy_chat_history');
    if (savedHistory) {
      try {
        setChatHistory(JSON.parse(savedHistory));
      } catch (err) {
        console.error('Failed to parse saved chat history:', err);
      }
    }
  }, []);
  
  // Save chat history to localStorage whenever it changes
  useEffect(() => {
    if (chatHistory.length > 0) {
      localStorage.setItem('textbuddy_chat_history', JSON.stringify(chatHistory));
    }
  }, [chatHistory]);
  
  // Process text using the selected mode
  const processText = async (input: string) => {
    if (!input.trim()) {
      setError('Please enter some text to process');
      return;
    }
    
    setIsProcessing(true);
    setError(null);
    
    try {
      // Try to use the real API service first, fallback to demo
      const aiService = createAIService() || demoAIService;
      
      // Add user message to chat history
      if (mode === 'chat') {
        const userMessage: ChatMessage = {
          role: 'user',
          content: input,
          timestamp: Date.now()
        };
        
        const updatedHistory = [...chatHistory, userMessage];
        setChatHistory(updatedHistory);
        
        // Get AI response
        const result = await aiService.processText({
          mode,
          input,
          chatHistory: updatedHistory
        });
        
        if (result.error) {
          setError(result.error);
        } else if (result.output) {
          // Add AI response to chat history
          const aiMessage: ChatMessage = {
            role: 'assistant',
            content: result.output,
            timestamp: Date.now()
          };
          
          setChatHistory([...updatedHistory, aiMessage]);
          setResult(result);
        } else {
          setError('No response received from AI');
        }
      } else {
        // Process text normally for other modes
        const result = await aiService.processText({
          mode,
          input
        });
        
        if (result.error) {
          setError(result.error);
        } else if (result.output) {
          setResult(result);
        } else {
          setError('No response received from AI');
        }
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred while processing text');
    } finally {
      setIsProcessing(false);
    }
  };
  
  // Change the processing mode
  const changeMode = (newMode: TextProcessingMode) => {
    setMode(newMode);
    setResult(null); // Clear result when mode changes
  };
  
  // Clear chat history
  const clearChatHistory = () => {
    setChatHistory([]);
    localStorage.removeItem('textbuddy_chat_history');
  };
  
  return {
    mode,
    isProcessing,
    result,
    error,
    chatHistory,
    usingRealAPI,
    processText,
    changeMode,
    clearChatHistory
  };
} 