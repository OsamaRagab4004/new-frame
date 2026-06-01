import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

const navigationLinks = [
  { name: 'Startseite', path: '/' },
  { name: 'Consulting', path: '/consulting' },
  { name: 'Coaching/Training', path: '/coaching' },
  { name: 'Aktuelles', path: '/aktuelles' },
  { name: 'Über mich', path: '/team' },
  { name: 'Netzwerk', path: '/netzwerk' },
  { name: 'Kontakt', path: '/kontakt' }
];

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const isHomePage = location.pathname === '/';
  const isTransparent = isHomePage && !scrolled && !isOpen;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isTransparent
          ? 'bg-transparent py-5'
          : 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-200/50 py-3'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src="/assets/images/logo/logo.png"
              alt="new-frame Logo"
              className="h-10 sm:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
            <div className="flex flex-col">
              <span
                className={`font-display font-bold text-xl sm:text-2xl tracking-tight transition-colors duration-300 ${
                  isTransparent
                    ? 'text-white group-hover:text-brand-gold'
                    : 'text-brand-dark group-hover:text-brand-red'
                }`}
              >
                new-frame
              </span>
              <span
                className={`text-[9px] sm:text-[10px] tracking-wider uppercase -mt-1 hidden sm:block transition-colors duration-300 ${
                  isTransparent ? 'text-gray-300' : 'text-gray-500'
                }`}
              >
                Training • Coaching • Consulting
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navigationLinks.map((link) => {
              const isActive =
                link.path === '/'
                  ? location.pathname === '/'
                  : location.pathname.startsWith(link.path);
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`relative px-4 py-2 text-sm font-medium tracking-wide transition-colors duration-300 rounded-md ${
                    isTransparent
                      ? isActive
                        ? 'text-brand-gold'
                        : 'text-white/80 hover:text-white'
                      : isActive
                        ? 'text-brand-red'
                        : 'text-brand-dark/75 hover:text-brand-red'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className={`absolute bottom-0 left-4 right-4 h-0.5 rounded-full ${
                        isTransparent ? 'bg-brand-gold' : 'bg-brand-red'
                      }`}
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-xl transition-all duration-300 focus:outline-none ${
                isTransparent
                  ? 'text-white hover:text-brand-gold hover:bg-white/10'
                  : 'text-brand-dark/85 hover:text-brand-red hover:bg-gray-100'
              }`}
              aria-label="Hauptmenü öffnen"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-white border-b border-gray-200 overflow-hidden shadow-2xl"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navigationLinks.map((link) => {
                const isActive =
                  link.path === '/'
                    ? location.pathname === '/'
                    : location.pathname.startsWith(link.path);
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`block px-4 py-3.5 rounded-2xl text-base font-semibold transition-all duration-200 ${
                      isActive
                        ? 'bg-brand-red/10 text-brand-red pl-6'
                        : 'text-brand-dark/85 hover:bg-brand-cream/60 hover:text-brand-red hover:pl-6'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
