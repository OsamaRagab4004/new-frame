import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Cookie } from 'lucide-react';
import { Link } from 'react-router-dom';

export const CookieConsent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('new-frame-cookie-consent');
    if (!consent) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('new-frame-cookie-consent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('new-frame-cookie-consent', 'declined');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:max-w-md bg-white rounded-3xl shadow-2xl border border-brand-gold/10 p-6 z-50 overflow-hidden"
        >
          {/* Border accent */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-brand-red" />
          
          <div className="flex items-start gap-4">
            <div className="p-3 bg-brand-cream rounded-xl text-brand-red shrink-0">
              <Cookie className="h-6 w-6" />
            </div>
            
            <div className="flex-1 space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="font-display font-bold text-base text-brand-dark">
                  Datenschutz & Cookies
                </h4>
                <button
                  onClick={handleDecline}
                  className="text-gray-400 hover:text-brand-red p-1 rounded-lg transition-colors"
                  aria-label="Schließen"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
              
              <p className="text-xs text-gray-500 leading-relaxed font-sans font-light">
                Diese Website verwendet Cookies, um Ihre Nutzererfahrung zu verbessern. Mit dem Klick auf "Akzeptieren" stimmen Sie der Speicherung von Cookies zu. Weitere Details finden Sie in unserer{' '}
                <Link to="/datenschutz" className="text-brand-red hover:underline font-semibold">
                  Datenschutzerklärung
                </Link>
                .
              </p>
              
              <div className="flex items-center gap-3 pt-1">
                <button
                  onClick={handleAccept}
                  className="flex-1 px-4 py-2 bg-brand-red hover:bg-brand-red-dark text-white text-xs font-semibold rounded-lg transition-colors duration-200 shadow-sm"
                >
                  Akzeptieren
                </button>
                <button
                  onClick={handleDecline}
                  className="px-4 py-2 border border-gray-200 hover:bg-gray-50 text-brand-dark text-xs font-semibold rounded-lg transition-colors duration-200"
                >
                  Ablehnen
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
