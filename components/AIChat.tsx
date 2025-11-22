import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChatMessage } from '../types';
import { sendMessageToGemini } from '../services/geminiService';

const AIChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: "Greetings. I am Maryum's digital concierge. How may I assist you with your artistic inquiries today?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input;
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setInput('');
    setIsLoading(true);

    const responseText = await sendMessageToGemini(userMsg);

    setMessages(prev => [...prev, { role: 'model', text: responseText }]);
    setIsLoading(false);
  };

  return (
    <>
      {/* Floating Button */}
      <motion.button
        className="fixed bottom-8 right-8 w-16 h-16 bg-brand-secondary rounded-full shadow-[0_10px_30px_rgba(44,62,80,0.3)] flex items-center justify-center z-50 hover:bg-brand-primary transition-colors border border-white/10"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1, rotate: 180 }}
        whileTap={{ scale: 0.9 }}
      >
        {isOpen ? (
             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M6 18L18 6M6 6l12 12" />
           </svg>
        ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        )}
      </motion.button>

      {/* Chat Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-28 right-6 md:right-8 w-[90vw] md:w-[380px] h-[550px] bg-white rounded-2xl shadow-2xl border border-brand-bg z-50 flex flex-col overflow-hidden"
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.95 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            {/* Header */}
            <div className="p-6 bg-brand-secondary flex items-center justify-between">
              <div>
                <h3 className="font-serif text-white text-xl italic">Concierge</h3>
                <p className="text-xs text-brand-primary font-sans tracking-wide uppercase mt-1">At your service</p>
              </div>
              <div className="w-2 h-2 rounded-full bg-brand-primary animate-pulse shadow-[0_0_10px_#C6A87C]"></div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-brand-bg/30">
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] p-4 rounded-xl text-sm font-sans leading-relaxed shadow-sm ${
                    msg.role === 'user' 
                      ? 'bg-brand-dark text-white rounded-br-none' 
                      : 'bg-white text-gray-700 rounded-bl-none border border-gray-100'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              {isLoading && (
                 <div className="flex justify-start">
                    <div className="bg-white p-4 rounded-xl rounded-bl-none border border-gray-100 shadow-sm">
                       <div className="flex space-x-1">
                         <div className="w-1.5 h-1.5 bg-brand-primary rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                         <div className="w-1.5 h-1.5 bg-brand-primary rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                         <div className="w-1.5 h-1.5 bg-brand-primary rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                       </div>
                    </div>
                 </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-gray-100 bg-white">
              <div className="flex items-center space-x-3">
                <input
                  type="text"
                  className="flex-1 bg-brand-bg rounded-full px-5 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-brand-primary transition-shadow font-sans text-brand-dark"
                  placeholder="Ask about availability..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                />
                <button 
                  onClick={handleSend}
                  disabled={isLoading}
                  className="w-10 h-10 rounded-full bg-brand-primary text-white flex items-center justify-center hover:bg-brand-secondary transition-colors disabled:opacity-50 shadow-md"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AIChat;