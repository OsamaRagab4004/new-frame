import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { CookieConsent } from './components/CookieConsent';
import { Chatbot } from './components/Chatbot';
import { Home } from './pages/Home';
import { Consulting } from './pages/Consulting';
import { Coaching } from './pages/Coaching';
import { Team } from './pages/Team';
import { NewsList } from './pages/NewsList';
import { NewsDetail } from './pages/NewsDetail';
import { Network } from './pages/Network';
import { Contact } from './pages/Contact';
import { LegalPage } from './pages/LegalPage';

// Scroll to top helper on route changes
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    });
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      
      {/* Base shell layout */}
      <div className="flex flex-col min-h-screen bg-brand-cream/10 text-brand-dark selection:bg-brand-red/15">
        
        {/* Navigation */}
        <Navbar />

        {/* Main Content Area */}
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/consulting" element={<Consulting />} />
            <Route path="/coaching" element={<Coaching />} />
            <Route path="/aktuelles" element={<NewsList />} />
            <Route path="/aktuelles/:slug" element={<NewsDetail />} />
            <Route path="/team" element={<Team />} />
            <Route path="/netzwerk" element={<Network />} />
            <Route path="/kontakt" element={<Contact />} />
            <Route path="/impressum" element={<LegalPage type="impressum" />} />
            <Route path="/datenschutz" element={<LegalPage type="datenschutz" />} />
            <Route path="/agbs" element={<LegalPage type="agbs" />} />
            
            {/* Fallback to Home */}
            <Route path="*" element={<Home />} />
          </Routes>
        </main>

        {/* Footer info and copyright */}
        <Footer />

        {/* Cookie Acceptance Banner */}
        <CookieConsent />

        {/* Floating Interactive Decision-Tree Chatbot */}
        <Chatbot />

      </div>
    </Router>
  );
};

export default App;
