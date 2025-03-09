import { GoogleGenerativeAI } from '@google/generative-ai';
import { NextResponse } from 'next/server';
import { TextProcessingMode } from '@/types/ai';

// Initialize Gemini with server-side API key
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');

// Add proper export naming for Next.js API route
export const runtime = 'nodejs';

export async function POST(req: Request) {
  try {
    const { mode, input, chatHistory } = await req.json();
    
    if (!process.env.GEMINI_API_KEY) {
      throw new Error('Gemini API key is not configured');
    }

    if (!input || typeof input !== 'string') {
      return NextResponse.json(
        { error: 'Invalid input' },
        { status: 400 }
      );
    }

    // Use the newer model version and configuration
    const model = genAI.getGenerativeModel({ 
      model: "gemini-1.5-flash",
    });

    let response;
    if (mode === 'chat' && Array.isArray(chatHistory)) {
      // Format chat history according to the API spec
      const contents = [
        ...chatHistory.map(msg => ({
          role: msg.role === 'user' ? 'user' : 'model',
          parts: [{ text: msg.content }]
        })),
        {
          role: 'user',
          parts: [{ text: input }]
        }
      ];

      response = await model.generateContent({
        contents,
        generationConfig: {
          maxOutputTokens: 1000,
          temperature: 0.7,
        }
      });
    } else {
      // Handle other modes with specific prompts
      let prompt = input;
      switch (mode as TextProcessingMode) {
        case 'summarize':
          prompt = `Please summarize the following text:\n\n${input}`;
          break;
        case 'analyze':
          prompt = `Please analyze the following text:\n\n${input}`;
          break;
        case 'translate':
          prompt = `Please translate the following text to English if it's not in English, or to Spanish if it's in English:\n\n${input}`;
          break;
      }

      response = await model.generateContent({
        contents: [{
          role: 'user',
          parts: [{ text: prompt }]
        }],
        generationConfig: {
          maxOutputTokens: 1000,
          temperature: 0.7,
        }
      });
    }

    const result = await response.response;
    const output = result.text();
    
    return NextResponse.json({
      input,
      output,
      mode
    });
  } catch (error) {
    console.error('Gemini API error:', error);
    return NextResponse.json({
      input: '',
      error: error instanceof Error ? error.message : 'Internal server error',
      mode: 'chat'
    }, { status: 500 });
  }
} 