export type TextProcessingMode = 'chat' | 'summarize' | 'analyze' | 'translate';

export interface TextProcessingOptions {
  mode: TextProcessingMode;
  input: string;
  maxTokens?: number;
  temperature?: number;
  chatHistory?: ChatMessage[];
}

export interface TextProcessingResult {
  input: string;
  output?: string;
  error?: string;
  mode: TextProcessingMode;
}

export interface AIServiceOptions {
  apiKey: string;
  model: string;
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
  timestamp: number;
}

export interface ChatSession {
  messages: ChatMessage[];
  lastUpdated: number;
} 