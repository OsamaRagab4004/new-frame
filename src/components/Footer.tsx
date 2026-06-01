import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-dark text-white pt-16 pb-8 border-t-4 border-brand-red">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Logo & Intro */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="assets/images/logo/logo.png"
                alt="new-frame logo"
                className="h-10 w-auto object-contain"
              />
              <span className="font-display font-bold text-2xl tracking-tight text-white">
                new-frame
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Dienstleistungen für Einzelpersonen und Unternehmen in den Bereichen Training, Coaching und Consulting. Wir bringen Sie nachhaltig zum Erfolg.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-semibold text-lg text-white mb-6 tracking-wide">
              Navigation
            </h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <Link to="/" className="hover:text-brand-gold transition-colors duration-200">Startseite</Link>
              </li>
              <li>
                <Link to="/consulting" className="hover:text-brand-gold transition-colors duration-200">Consulting</Link>
              </li>
              <li>
                <Link to="/coaching" className="hover:text-brand-gold transition-colors duration-200">Coaching/Training</Link>
              </li>
              <li>
                <Link to="/team" className="hover:text-brand-gold transition-colors duration-200">Über mich</Link>
              </li>
              <li>
                <Link to="/netzwerk" className="hover:text-brand-gold transition-colors duration-200">Unser Netzwerk</Link>
              </li>
              <li>
                <Link to="/aktuelles" className="hover:text-brand-gold transition-colors duration-200">Aktuelles / News</Link>
              </li>
              <li>
                <Link to="/kontakt" className="hover:text-brand-gold transition-colors duration-200">Kontakt</Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="font-display font-semibold text-lg text-white mb-6 tracking-wide">
              Kontakt
            </h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-brand-gold shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">Historisches Gebäude</p>
                  <p>„Alter Bahnhof Gangelt“</p>
                  <p>Hanxler Str. 15, 52538 Gangelt</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-brand-gold shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">Barrierefreies Arbeiten</p>
                  <p>auf dem Bauernhof</p>
                  <p>Dorfstr. 55, 52538 Selfkant-Wehr</p>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-brand-gold shrink-0" />
                <a href="tel:+491736515053" className="hover:text-brand-gold transition-colors">+49 173 6515 053</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-brand-gold shrink-0" />
                <a href="mailto:info@new-frame.de" className="hover:text-brand-gold transition-colors">info@new-frame.de</a>
              </li>
            </ul>
          </div>

          {/* Connect / Socials */}
          <div>
            <h3 className="font-display font-semibold text-lg text-white mb-6 tracking-wide">
              Vernetzen
            </h3>
            <p className="text-gray-400 text-sm mb-4">
              Folgen und vernetzen Sie sich mit uns auf Social Media:
            </p>
            <div className="flex flex-col gap-3 text-sm">
              <a
                href="https://linkedin.com/company/new-frame"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-brand-gold text-gray-400 transition-colors"
              >
                {/* LinkedIn Custom SVG */}
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
                <span>LinkedIn</span>
                <ExternalLink className="h-3 w-3 opacity-50" />
              </a>

              <a
                href="https://xing.com/companies/new-frame"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-brand-gold text-gray-400 transition-colors"
              >
                {/* XING Custom SVG */}
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.188 0c-.517 0-.741.325-.927.662l-7.703 13.616c-.089.137-.089.302 0 .439l4.053 7.822c.186.337.472.461.927.461h4.605c.516 0 .736-.325.92-.662l-4.05-7.822c-.089-.137-.089-.302 0-.439l7.705-13.616c.187-.337-.028-.662-.544-.662h-4.996zm-11.644 5.378c-.517 0-.742.325-.928.662l-2.072 3.662c-.09.137-.09.302 0 .439l2.072 3.662c.186.337.472.662.928.662h4.526c.516 0 .734-.325.92-.662l-2.072-3.662c-.09-.137-.09-.302 0-.439l2.072-3.662c-.186-.337-.028-.662-.544-.662h-4.928z" />
                </svg>
                <span>XING</span>
                <ExternalLink className="h-3 w-3 opacity-50" />
              </a>

              <a
                href="https://youtube.com/channel/UCPgFAMVv5Xxe8sInwb-qhPw"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-brand-gold text-gray-400 transition-colors"
              >
                {/* YouTube Custom SVG */}
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.163c-.272-1.023-1.078-1.83-2.101-2.102-1.853-.5-9.397-.5-9.397-.5s-7.544 0-9.397.5c-1.023.272-1.829 1.079-2.101 2.102-.5 1.853-.5 5.728-.5 5.728s0 3.875.5 5.728c.272 1.023 1.078 1.829 2.101 2.102 1.853.5 9.397.5 9.397.5s7.544 0 9.397-.5c1.023-.273 1.829-1.079 2.101-2.102.5-1.853.5-5.728.5-5.728s0-3.875-.5-5.728zm-14.248 9.582v-7.49l6.5 3.745-6.5 3.745z" />
                </svg>
                <span>YouTube</span>
                <ExternalLink className="h-3 w-3 opacity-50" />
              </a>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-10" />

        {/* Bottom copyright and legal */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© {currentYear} new-frame. Alle Rechte vorbehalten.</p>
          <div className="flex items-center gap-6">
            <Link to="/impressum" className="hover:text-white transition-colors duration-200">Impressum</Link>
            <Link to="/datenschutz" className="hover:text-white transition-colors duration-200">Datenschutz</Link>
            <Link to="/agbs" className="hover:text-white transition-colors duration-200">AGBs</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};
