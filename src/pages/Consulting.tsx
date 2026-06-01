import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, TrendingUp, Layers, Compass, ArrowRight, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const outcomes = [
  {
    title: "Neue Unternehmenskultur",
    description: "Gemeinsame Erarbeitung und Etablierung moderner Werte, Führungsleitlinien und offener Kommunikationskanäle.",
    icon: Compass
  },
  {
    title: "Veränderungsprozesse",
    description: "Begleitung von Fusionen, Digitalisierungsschritten oder strategischen Neuausrichtungen mit emotionaler Einbindung.",
    icon: TrendingUp
  },
  {
    title: "Umstrukturierung",
    description: "Strukturelle Anpassungen im Unternehmen reibungslos organisieren und Ressourcen optimal verteilen.",
    icon: Layers
  },
  {
    title: "Generationenverträge",
    description: "Erfolgreicher Know-how-Transfer und Wissenstransfer durch z.B. strukturierte Mentoren-/Mentee-Programme.",
    icon: ShieldCheck
  },
  {
    title: "Teamtrainings",
    description: "Konfliktlösung und Stärkung des Zusammenhalts in Abteilungen oder auf Management-Ebene für maximale Performance.",
    icon: CheckCircle2
  }
];

export const Consulting: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* Banner / Header */}
      <section className="bg-brand-dark text-white pt-36 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(165,31,32,0.2),transparent_50%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex"
          >
            <span className="text-brand-gold text-xs uppercase tracking-widest font-semibold px-3.5 py-1.5 bg-white/5 border border-white/10 rounded-full">
              Dienstleistungen
            </span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight"
          >
            Consulting für Ihren Erfolg
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base lg:text-lg font-light font-sans"
          >
            Strategische Begleitung und Vorbereitung Ihrer Organisation auf anstehende Veränderungen.
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Left side: Sticky brief summary card */}
            <div className="lg:col-span-4 lg:sticky lg:top-28 space-y-6">
              <div className="bg-brand-cream border border-brand-gold/15 rounded-3xl p-8 shadow-sm">
                <h3 className="font-display font-bold text-xl text-brand-dark mb-4">
                  Consulting-Fokus
                </h3>
                <ul className="space-y-4 text-xs sm:text-sm text-gray-600 font-sans font-light">
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 bg-brand-red rounded-full mt-2 shrink-0" />
                    <span>Verhinderung von Leistungsabfall bei Veränderungsprozessen.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 bg-brand-red rounded-full mt-2 shrink-0" />
                    <span>Gemeinsame Situationsanalyse im Vorfeld.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 bg-brand-red rounded-full mt-2 shrink-0" />
                    <span>Reibungslose Umsetzung neuer Strukturen.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 bg-brand-red rounded-full mt-2 shrink-0" />
                    <span>Vermeidung von unnötigem Energieverlust im Team.</span>
                  </li>
                </ul>
              </div>

              {/* Expert quote card */}
              <div className="border-l-4 border-brand-red bg-brand-cream/40 p-6 rounded-r-2xl italic text-brand-dark/90 text-sm font-sans">
                „Eine erfolgreiche Umstrukturierung gelingt nur dann, wenn Sie die emotionale Beteiligung der Mitarbeiter im Vorfeld gewinnen.“
              </div>
            </div>

            {/* Right side: Detailed descriptions */}
            <div className="lg:col-span-8 space-y-12">
              <div className="space-y-6 text-gray-600 text-base sm:text-lg leading-relaxed font-sans font-light">
                <h2 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-brand-dark">
                  Veränderung als strategische Chance gestalten
                </h2>
                <div className="h-1 w-16 bg-brand-gold rounded-full" />
                <p>
                  Veränderungen und neue Prozesse oder Strukturen in Ihrem Unternehmen sind einschneidende Maßnahmen, die die Arbeitsumgebung Ihrer Mitarbeiter elementar verändern. Ohne fundierte Begleitung führen solche Phasen häufig zu tiefer Verunsicherung, Konflikten und einem spürbaren Leistungsabfall.
                </p>
                <p>
                  Deshalb ist es im Vorfeld sinnvoll, im Rahmen gemeinsamer Gespräche die Situation strategisch zu analysieren. So können wir bereits im Vorfeld die notwendigen Trainings- und Coaching-Maßnahmen festlegen. Dadurch ermöglichen Sie sich und Ihren Mitarbeitern eine reibungslose und schnelle Umsetzung der Neuerungen, vermeiden Energieverlust und können gut trainiert nach vorne gehen.
                </p>
              </div>

              {/* Outcomes list section */}
              <div className="pt-8 border-t border-gray-150/60">
                <h3 className="font-display font-bold text-xl sm:text-2xl text-brand-dark mb-8">
                  Ergebnisse eines erfolgreichen Consultings
                </h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {outcomes.map((item, idx) => {
                    const IconComponent = item.icon;
                    return (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.05, duration: 0.4 }}
                        className="p-6 bg-brand-cream/40 border border-brand-gold/10 rounded-2xl flex items-start gap-4 hover:shadow-md transition-all group"
                      >
                        <div className="p-3 bg-brand-red/10 text-brand-red rounded-xl shrink-0 group-hover:bg-brand-red group-hover:text-white transition-colors duration-300">
                          <IconComponent className="h-5 w-5" />
                        </div>
                        <div className="space-y-1.5">
                          <h4 className="font-display font-bold text-brand-dark text-base sm:text-lg">
                            {item.title}
                          </h4>
                          <p className="text-gray-500 text-xs sm:text-sm leading-relaxed font-sans font-light">
                            {item.description}
                          </p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              {/* Action Box */}
              <div className="bg-brand-dark text-white rounded-3xl p-8 sm:p-12 text-center space-y-6 relative overflow-hidden shadow-xl border border-brand-red/20">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(165,31,32,0.1),transparent_40%)]" />
                <h3 className="font-display font-bold text-2xl sm:text-3xl text-white relative z-10">
                  Steht Ihr Unternehmen vor einer Neuausrichtung?
                </h3>
                <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed relative z-10 font-light font-sans">
                  Gerne erarbeiten wir mit Ihnen ein individuelles Trainings- und Beratungsprogramm, das genau auf die Anforderungen Ihres Unternehmens abgestimmt ist.
                </p>
                <div className="relative z-10 pt-2">
                  <Link
                    to="/kontakt"
                    className="inline-flex items-center gap-2 px-6 py-3.5 bg-brand-red hover:bg-brand-red-dark text-white font-semibold rounded-xl transition-all shadow-lg group"
                  >
                    <span>Jetzt unverbindlich anfragen</span>
                    <ArrowRight className="h-4.5 w-4.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

    </div>
  );
};
