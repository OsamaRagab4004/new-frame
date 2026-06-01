import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, MapPin, ExternalLink } from 'lucide-react';

const partners = [
  {
    name: "Issberner Coaching & Consulting",
    logo: "assets/images/network/issberner_coaching_consulting.png",
    subtitle: "Dr. Karin Issberner",
    address: "Mutschenweg 40b, 47877 Willich, Germany",
    description: "Spezialisiert auf systemisches Coaching, Führungskräfteentwicklung und strategische Beratung. Langjährige Partnerin im new-frame Expertennetzwerk.",
    website: "http://www.issberner-coaching.de/"
  },
  {
    name: "Peaceful Heart Network (Sweden)",
    logo: "assets/images/network/TTT-empower-logo.png",
    subtitle: "TTT - Trauma Tapping Technique",
    contact: "Gunilla Hamne & Ulf Sandström",
    description: "Ein weltweites humanitäres Netzwerk zur Traumabewältigung und Selbsthilfe. Schulung einfacher Techniken zur emotionalen Stabilisierung in Krisenregionen.",
    website: "http://www.peacefulheart.se"
  },
  {
    name: "EMCA (European Multisport Club Association)",
    logo: "assets/images/network/EMCA_logo_kl.png",
    subtitle: "Multisport Club Association",
    address: "Via Monte Zebio 9, CAP: 00195 Rome, Italy",
    description: "Dachverband europäischer Breitensportvereine zur Förderung von Gesundheit, Sportkooperationen und dualen Karrierewegen für junge Spitzenathleten.",
    website: "http://www.multisportclubs.eu"
  }
];

export const Network: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* Header Banner */}
      <section className="bg-brand-dark text-white pt-36 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(165,31,32,0.2),transparent_50%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <span className="text-brand-gold text-xs uppercase tracking-widest font-semibold px-3.5 py-1.5 bg-white/5 border border-white/10 rounded-full">
            Kooperationen & Partner
          </span>
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight">
            Unser Netzwerk
          </h1>
          <p className="text-gray-400 max-w-xl mx-auto text-sm sm:text-base lg:text-lg font-light font-sans">
            Durch enge Kooperationen mit internationalen Institutionen und Experten bieten wir Ihnen ganzheitliche Begleitung.
          </p>
        </div>
      </section>

      {/* Network partners Grid */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
            <div className="text-brand-red font-semibold tracking-widest uppercase text-xs">
              Synergien nutzen
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-brand-dark leading-tight">
              Verlässliche Partnerschaften
            </h2>
            <div className="h-1 w-16 bg-brand-gold rounded-full mx-auto" />
            <p className="text-gray-500 font-sans font-light text-base sm:text-lg">
              Im Rahmen komplexer Aufgabenstellungen greifen wir auf ein eingespieltes Netzwerk zurück. Dies sichert Ihnen Kompetenzen in allen Phasen.
            </p>
          </div>

          {/* Partners Grid list */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {partners.map((partner, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-brand-cream/40 border border-brand-gold/10 rounded-[2rem] p-8 flex flex-col justify-between h-full hover:shadow-xl hover:bg-white transition-all duration-300 relative overflow-hidden"
              >
                {/* Accent gold top border */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-brand-gold to-brand-red" />
                
                <div className="space-y-6">
                  {/* Partner logo container */}
                  <div className="h-20 flex items-center justify-start bg-white px-4 py-3 rounded-2xl border border-brand-gold/5 max-w-[180px] shadow-sm">
                    <img
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      className="h-full w-full object-contain"
                    />
                  </div>
                  
                  {/* Name and subtitle */}
                  <div className="space-y-1">
                    <h3 className="font-display font-bold text-xl text-brand-dark leading-snug">
                      {partner.name}
                    </h3>
                    <p className="text-xs font-semibold text-brand-red uppercase tracking-wider">
                      {partner.subtitle}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-gray-500 text-sm leading-relaxed font-sans font-light">
                    {partner.description}
                  </p>

                  {/* Contact Info (if available) */}
                  {(partner.address || partner.contact) && (
                    <div className="pt-4 border-t border-gray-150/65 space-y-3.5 text-xs sm:text-sm text-gray-500 font-sans font-light">
                      {partner.address && (
                        <div className="flex items-start gap-2.5">
                          <MapPin className="h-4.5 w-4.5 text-brand-gold shrink-0 mt-0.5" />
                          <span>{partner.address}</span>
                        </div>
                      )}
                      {partner.contact && (
                        <div className="flex items-start gap-2.5">
                          <ShieldCheck className="h-4.5 w-4.5 text-brand-gold shrink-0 mt-0.5" />
                          <span>Ansprechpartner: {partner.contact}</span>
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {/* External link */}
                <div className="pt-6 border-t border-gray-150/40 mt-6">
                  <a
                    href={partner.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold bg-white hover:bg-brand-red hover:text-white hover:border-brand-red text-brand-dark px-5 py-3 rounded-xl border border-gray-200 transition-all shadow-sm group w-full justify-center"
                  >
                    <span>Website besuchen</span>
                    <ExternalLink className="h-4 w-4 opacity-75 group-hover:text-white" />
                  </a>
                </div>

              </motion.div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
};
