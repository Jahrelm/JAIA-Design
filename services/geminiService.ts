
import { GoogleGenAI } from "@google/genai";

export const generateDesignCritique = async (prompt: string): Promise<string> => {
  // Always create a fresh instance to ensure the latest API key is used
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || "" });
  
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: [{
        parts: [{
          text: `You are JAIA (Jamaican Artificial Intelligence Assistant), a world-class AI Design Mentor. 
          Your tone is "Professional Irie"—exceptionally sharp, sophisticated, and harmoniously balanced. 
          Provide a design critique or advice for: "${prompt}". 
          Keep it high-end, concise, and use subtle island-inspired metaphors (rhythm, sun, steady roots).`
        }]
      }],
      config: {
        temperature: 0.7,
        topP: 0.95,
      }
    });

    if (!response || !response.text) {
      throw new Error("Empty response from JAIA hub.");
    }

    return response.text;
  } catch (error: any) {
    console.error("Gemini Connection Error:", error);
    
    if (error.message?.includes("refused to connect") || error.message?.includes("fetch")) {
      return "The connection to the Kingston Hub was refused. Please check your network or ensure your API configuration is active.";
    }
    
    return "Something dampened the rhythm. The neural link is choppy. Let's try again in a moment.";
  }
};

export const chatWithJAIA = async (message: string) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || "" });
  const chat = ai.chats.create({
    model: 'gemini-3-flash-preview',
    config: {
      systemInstruction: "You are JAIA, the voice of Caribbean tech excellence. You are an elegant AI interface for designers. You are professional, warm, and insightful."
    }
  });

  const result = await chat.sendMessage({ message });
  return result.text;
};
