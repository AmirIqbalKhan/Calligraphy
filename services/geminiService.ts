import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";

const API_KEY = process.env.API_KEY || '';

let chatSession: Chat | null = null;

export const initializeChat = (): Chat => {
  if (chatSession) return chatSession;

  if (!API_KEY) {
    console.warn("Gemini API Key is missing. Chat features will not work.");
    // Return a dummy object or handle error appropriately in a real app
    // For now, we will let the calls fail gracefully if no key
  }

  const ai = new GoogleGenAI({ apiKey: API_KEY });

  chatSession = ai.chats.create({
    model: 'gemini-2.5-flash',
    config: {
      systemInstruction: `You are the Concierge for "CaligraphyByMaryum", a luxury calligraphy studio. 
      Your tone is refined, polite, serene, and minimalist. 
      You assist visitors with questions about custom artwork, wedding calligraphy, and the artist's philosophy.
      Keep answers concise and elegant, under 50 words when possible.
      Do not use emojis. Use soft language.`,
    },
  });

  return chatSession;
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  try {
    const chat = initializeChat();
    const response: GenerateContentResponse = await chat.sendMessage({ message });
    return response.text || "I apologize, I cannot compose a response at this moment.";
  } catch (error) {
    console.error("Error communicating with Gemini:", error);
    return "I am currently reflecting in silence. Please try again later.";
  }
};