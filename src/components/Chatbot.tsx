import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, FileText, Download, Play, ExternalLink, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { chatbotDatabase } from '../data/chatbot';
import type { ChatAction, ChatOption } from '../data/chatbot';
import { CustomVideoPlayer } from './CustomVideoPlayer';

interface Message {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  actions?: ChatAction[];
}

export const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentNodeId, setCurrentNodeId] = useState('root');
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'init',
      sender: 'bot',
      text: chatbotDatabase.root.message,
      actions: chatbotDatabase.root.actions
    }
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping, isOpen]);

  const handleOptionClick = (option: ChatOption) => {
    // 1. Append user's selection to thread
    const userMsgId = `user-${Date.now()}`;
    setMessages(prev => [
      ...prev,
      {
        id: userMsgId,
        sender: 'user',
        text: option.label
      }
    ]);

    // 2. Trigger typing delay simulation
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      const nextNode = chatbotDatabase[option.nodeId] || chatbotDatabase.root;
      
      const botMsgId = `bot-${Date.now()}`;
      setMessages(prev => [
        ...prev,
        {
          id: botMsgId,
          sender: 'bot',
          text: nextNode.message,
          actions: nextNode.actions
        }
      ]);
      setCurrentNodeId(option.nodeId);
    }, 600);
  };

  // Helper to split text by linebreaks and render paragraphs safely
  const formatMessageText = (text: string) => {
    return text.split('\n').map((line, index) => (
      <span key={index} className="block mt-1 first:mt-0 font-light font-sans text-xs sm:text-sm">
        {line}
      </span>
    ));
  };

  const currentNode = chatbotDatabase[currentNodeId] || chatbotDatabase.root;

  return (
    <>
      {/* 1. Floating Toggle Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative w-14 h-14 bg-brand-red hover:bg-brand-red-dark text-white rounded-full flex items-center justify-center shadow-2xl focus:outline-none transition-colors border border-brand-red-dark/10 group cursor-pointer"
          title="new-frame Chatbot öffnen"
          aria-label="new-frame Chatbot öffnen"
        >
          {/* Pulsing ring animation */}
          <span className="absolute -inset-1 rounded-full bg-brand-red/30 animate-ping -z-10 opacity-75 group-hover:opacity-0 transition-opacity" />
          
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X className="h-6 w-6" />
              </motion.div>
            ) : (
              <motion.div
                key="chat"
                initial={{ scale: 0.6, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.6, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <MessageSquare className="h-6 w-6" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      {/* 2. Chat Window Box */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ scale: 0.85, opacity: 0, y: 30, x: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0, x: 0 }}
            exit={{ scale: 0.85, opacity: 0, y: 30, x: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 220 }}
            className="fixed bottom-24 right-6 w-[360px] sm:w-[450px] h-[520px] sm:h-[580px] max-h-[calc(100vh-120px)] bg-white/95 backdrop-blur-md border border-brand-gold/15 rounded-[2rem] shadow-2xl z-50 flex flex-col overflow-hidden"
          >
            {/* Header bar */}
            <div className="bg-brand-dark text-white px-5 py-4 border-b border-brand-gold/15 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img
                  src="assets/images/team/christiane_waller.jpg"
                  alt="Christiane Waller Avatar"
                  className="h-8 w-8 rounded-full border border-brand-gold/30 object-cover object-top shrink-0"
                />
                <div className="flex flex-col">
                  <span className="font-display font-bold text-sm tracking-wide">new-frame Assistent</span>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-[10px] text-gray-400 font-light font-sans">Online</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-white p-1 rounded-lg transition-colors focus:outline-none"
                aria-label="Chatbot schließen"
              >
                <X className="h-4.5 w-4.5" />
              </button>
            </div>

            {/* Messages Thread Container */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-none">
              {messages.map((msg) => (
                <div key={msg.id} className="space-y-2">
                  <div className={`flex items-start gap-2.5 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                    {msg.sender === 'bot' && (
                      <img
                        src="assets/images/logo/logo.png"
                        alt="new-frame Avatar"
                        className="h-6 w-6 rounded-full border border-gray-200 p-0.5 bg-white object-contain shrink-0 mt-0.5"
                      />
                    )}
                    
                    <div
                      className={`p-3.5 max-w-[85%] rounded-[1.5rem] shadow-sm leading-relaxed ${
                        msg.sender === 'user'
                          ? 'bg-brand-cream border border-brand-gold/15 text-brand-dark rounded-tr-none ml-auto'
                          : 'bg-brand-dark text-white border-l-4 border-brand-gold rounded-tl-none'
                      }`}
                    >
                      {formatMessageText(msg.text)}
                    </div>
                  </div>

                  {/* Actions (PDF download or video player) inside this message bubble */}
                  {msg.actions && msg.actions.length > 0 && (
                    <div className="pl-8 pr-4 space-y-3">
                      {msg.actions.map((act, idx) => (
                        <div key={idx} className="bg-brand-cream/60 border border-brand-gold/10 p-3.5 rounded-2xl shadow-sm space-y-3">
                          
                          {act.type === 'pdf' && (
                            <div className="flex items-center justify-between gap-3 text-xs sm:text-sm">
                              <div className="flex items-center gap-2 text-brand-dark">
                                <FileText className="h-4.5 w-4.5 text-brand-red shrink-0" />
                                <span className="font-semibold leading-tight line-clamp-1">{act.label}</span>
                              </div>
                              <a
                                href={act.payload}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 bg-brand-red hover:bg-brand-red-dark text-white rounded-lg transition-colors flex items-center justify-center shrink-0"
                                title="Herunterladen"
                              >
                                <Download className="h-4 w-4" />
                              </a>
                            </div>
                          )}

                          {act.type === 'video' && (
                            <div className="space-y-2">
                              <div className="flex items-center gap-2 text-xs sm:text-sm text-brand-dark font-semibold">
                                <Play className="h-4 w-4 text-brand-red fill-brand-red shrink-0" />
                                <span>{act.label}</span>
                              </div>
                              <CustomVideoPlayer
                                src={act.payload}
                                poster={act.poster}
                                className="w-full"
                              />
                            </div>
                          )}

                          {act.type === 'link' && (
                            <div className="flex items-center justify-between gap-3 text-xs sm:text-sm">
                              <span className="text-gray-600 font-light line-clamp-1">{act.label}</span>
                              {act.payload.startsWith('/') ? (
                                <Link
                                  to={act.payload}
                                  onClick={() => setIsOpen(false)}
                                  className="inline-flex items-center gap-1 bg-brand-red hover:bg-brand-red-dark text-white px-3 py-1.5 rounded-lg text-xs font-semibold shadow-sm transition-colors shrink-0"
                                >
                                  <span>Öffnen</span>
                                  <ArrowRight className="h-3 w-3" />
                                </Link>
                              ) : (
                                <a
                                  href={act.payload}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1 bg-brand-red hover:bg-brand-red-dark text-white px-3 py-1.5 rounded-lg text-xs font-semibold shadow-sm transition-colors shrink-0"
                                >
                                  <span>Besuchen</span>
                                  <ExternalLink className="h-3 w-3" />
                                </a>
                              )}
                            </div>
                          )}

                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {/* Bouncing Dots Typing Indicator */}
              {isTyping && (
                <div className="flex items-start gap-2.5 justify-start">
                  <img
                    src="assets/images/logo/logo.png"
                    alt="new-frame Avatar"
                    className="h-6 w-6 rounded-full border border-gray-200 p-0.5 bg-white object-contain shrink-0 mt-0.5"
                  />
                  <div className="bg-brand-dark/95 text-white p-3.5 rounded-[1.5rem] rounded-tl-none border-l-4 border-brand-gold flex items-center justify-center gap-1 shadow-sm">
                    <span className="w-1.5 h-1.5 bg-brand-gold rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <span className="w-1.5 h-1.5 bg-brand-gold rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <span className="w-1.5 h-1.5 bg-brand-gold rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Options Interactive Panel */}
            <div className="p-4 bg-brand-cream/40 border-t border-brand-gold/10">
              <AnimatePresence mode="wait">
                {!isTyping && currentNode.options && currentNode.options.length > 0 && (
                  <motion.div
                    key={currentNodeId}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="flex flex-col gap-2 w-full"
                  >
                    {currentNode.options.map((opt, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleOptionClick(opt)}
                        className="w-full px-4 py-2 bg-white hover:bg-brand-red hover:text-white border border-brand-gold/15 rounded-xl text-[11px] font-semibold text-brand-dark transition-all duration-200 shadow-sm focus:outline-none active:scale-[0.99] text-left flex items-center justify-between group cursor-pointer"
                      >
                        <span>{opt.label}</span>
                        <span className="text-brand-gold group-hover:text-white transition-colors duration-200 text-[10px] ml-2 shrink-0">➔</span>
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
