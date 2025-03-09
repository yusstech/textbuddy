import { TextProcessingMode, TextProcessingResult, ChatMessage } from '@/types/ai';

interface ProcessTextOptions {
  mode: TextProcessingMode;
  input: string;
  chatHistory?: ChatMessage[];
}

interface AIService {
  processText: (options: ProcessTextOptions) => Promise<TextProcessingResult>;
}

// Demo AI service for testing without API key
export const demoAIService: AIService = {
  processText: async ({ mode, input }) => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    return {
      input,
      output: `Demo ${mode} response for: ${input}`,
      mode
    };
  }
};

// Create the AI service if API key is available
export function createAIService(): AIService | null {
  // We'll check for the API key on the server side
  return {
    processText: async ({ mode, input, chatHistory = [] }) => {
      try {
        const response = await fetch('/api/chat', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            mode,
            input,
            chatHistory,
          }),
        });

        if (!response.ok) {
          const error = await response.json();
          throw new Error(error.error || 'Failed to process text');
        }

        const result = await response.json();
        return result;
      } catch (error) {
        console.error('API error:', error);
        return {
          input,
          error: error instanceof Error ? error.message : 'An error occurred',
          mode
        };
      }
    }
  };
} 