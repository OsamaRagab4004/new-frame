import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CustomVideoPlayer } from '../components/CustomVideoPlayer';
import { FileText, ArrowUpRight, CheckCircle2, User, Users, Compass, Zap, HelpCircle } from 'lucide-react';

const coachingTabs = [
  {
    id: 'einzel',
    name: 'Einzelcoaching',
    icon: User,
    title: 'Individuelle Entfaltung im Einzelcoaching',
    content: (
      <div className="space-y-6 font-sans text-gray-600 text-sm sm:text-base leading-relaxed font-light">
        <p>
          Einzelcoachings bieten die Möglichkeit, Einzelpersonen ganz spezifisch und diskret weiterzuentwickeln. In einem absolut vertraulichen und professionellen Rahmen können berufliche Herausforderungen, Führungsaufgaben und persönliche Ziele gemeinsam mit dem Coach analysiert und verwirklicht werden.
        </p>
        <div className="space-y-2">
          <p className="font-semibold text-brand-dark font-display text-sm uppercase tracking-wider">Typische Anwendungsbereiche:</p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-gray-500 font-light mt-2">
            <li className="flex items-center gap-2"><CheckCircle2 className="h-4.5 w-4.5 text-brand-red shrink-0" /> Vorbereitung auf Führungsrollen</li>
            <li className="flex items-center gap-2"><CheckCircle2 className="h-4.5 w-4.5 text-brand-red shrink-0" /> Stress- und Blockadenmanagement</li>
            <li className="flex items-center gap-2"><CheckCircle2 className="h-4.5 w-4.5 text-brand-red shrink-0" /> Karriereplanung & Orientierung</li>
            <li className="flex items-center gap-2"><CheckCircle2 className="h-4.5 w-4.5 text-brand-red shrink-0" /> Konfliktbewältigung am Arbeitsplatz</li>
          </ul>
        </div>
      </div>
    )
  },
  {
    id: 'gruppe',
    name: 'Gruppencoaching',
    icon: Users,
    title: 'Gemeinsam wachsen im Gruppencoaching',
    content: (
      <div className="space-y-6 font-sans text-gray-600 text-sm sm:text-base leading-relaxed font-light">
        <p>
          In Gruppencoachings oder Supervisionsrunden können Sie für einzelne Teams oder Gruppen Ihres Unternehmens individuelle Problemlösungen herbeiführen. Das gemeinsame Coaching schweißt zusammen und befähigt die Mitarbeiter, Herausforderungen als Einheit zu bewältigen.
        </p>
        <div className="space-y-2">
          <p className="font-semibold text-brand-dark font-display text-sm uppercase tracking-wider">Besonders sinnvoll bei:</p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-gray-500 font-light mt-2">
            <li className="flex items-center gap-2"><CheckCircle2 className="h-4.5 w-4.5 text-brand-red shrink-0" /> Konflikten in einzelnen Abteilungen</li>
            <li className="flex items-center gap-2"><CheckCircle2 className="h-4.5 w-4.5 text-brand-red shrink-0" /> Teambildung in neuen Konstellationen</li>
            <li className="flex items-center gap-2"><CheckCircle2 className="h-4.5 w-4.5 text-brand-red shrink-0" /> Supervisionsprozessen auf Managementebene</li>
            <li className="flex items-center gap-2"><CheckCircle2 className="h-4.5 w-4.5 text-brand-red shrink-0" /> Etablierung neuer Kommunikationsregeln</li>
          </ul>
        </div>
      </div>
    )
  },
  {
    id: 'wingwave',
    name: 'wingwave®',
    icon: Compass,
    title: 'Effektives Kurzzeit-Coaching mit wingwave®',
    content: (
      <div className="space-y-6 font-sans text-gray-600 text-sm sm:text-base leading-relaxed font-light">
        <p>
          wingwave®-Coaching ist ein geschütztes Kurzzeit-Coaching-Konzept mit einer spürbar schnellen und nachhaltigen Wirkung auf Stressfaktoren und emotionale Blockaden. Es basiert auf der Simulation der REM-Phasen (Rapid Eye Movement) im Wachzustand.
        </p>
        
        <div className="bg-white border border-brand-gold/15 p-5 rounded-2xl space-y-4 shadow-sm mt-4">
          <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider font-display">Weiterführende Ressourcen & Zertifikate</p>
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-xs sm:text-sm">
            <a
              href="http://wingwave.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-brand-red hover:text-brand-red-dark font-semibold transition-colors"
            >
              <span>Was ist wingwave®-Coaching? (externer Link)</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
            <span className="text-gray-300 hidden sm:block">|</span>
            <a
              href="/assets/documents/images/downloads/sport-coaching_wingwave.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-brand-red hover:text-brand-red-dark font-semibold transition-colors"
            >
              <FileText className="h-4.5 w-4.5 shrink-0" />
              <span>wingwave®-Coaching in der Sportpraxis (PDF)</span>
            </a>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 'training',
    name: 'Training',
    icon: HelpCircle,
    title: 'Mitarbeiter fachlich und emotional mitnehmen',
    content: (
      <div className="space-y-6 font-sans text-gray-600 text-sm sm:text-base leading-relaxed font-light">
        <p>
          Das wichtigste Kapital eines Unternehmens sind die Mitarbeiter*innen. Diese müssen durch die kontinuierliche Weiterentwicklung eines Unternehmens geführt und emotional mitgenommen werden. Meist ist es deutlich leichter, Prozesse und Strukturen technisch zu verändern, als die emotionale Beteiligung der Belegschaft zu gewinnen.
        </p>
        <p>
          Ganz konkret können hier zum Beispiel gezielte Führungskräftetrainings in kleinen Gruppen schnell zu großen, messbaren Erfolgen führen. Wir machen Ihre Teams fit für die Herausforderungen der Zukunft.
        </p>
      </div>
    )
  },
  {
    id: 'energetisch',
    name: 'Energetische Psychologie',
    icon: Zap,
    title: 'Energetische Blockaden lösen nach Dr. Fred Gallo',
    content: (
      <div className="space-y-6 font-sans text-gray-600 text-sm sm:text-base leading-relaxed font-light">
        <p>
          Die energetische Psychologie basiert auf der Grundannahme, dass unsere Meridiane bzw. Energiefelder im Körper gelegentlich Blockaden aufweisen. Sie werden über eine Kombination aus einer sanften Klopftechnik, kinesiologischen Tests und begleitenden Sprachmustern wieder in Fluss gebracht.
        </p>
        <div className="space-y-2">
          <p className="font-semibold text-brand-dark font-display text-sm uppercase tracking-wider">Besonders erfolgreich bei:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-gray-500 font-light mt-2">
            <p className="flex items-center gap-2"><CheckCircle2 className="h-4.5 w-4.5 text-brand-red shrink-0" /> Spezifischen Ängsten & Phobien</p>
            <p className="flex items-center gap-2"><CheckCircle2 className="h-4.5 w-4.5 text-brand-red shrink-0" /> Leistungs- & Schreibblockaden</p>
            <p className="flex items-center gap-2"><CheckCircle2 className="h-4.5 w-4.5 text-brand-red shrink-0" /> Kummer, Schuld- & Schamgefühlen</p>
            <p className="flex items-center gap-2"><CheckCircle2 className="h-4.5 w-4.5 text-brand-red shrink-0" /> Nervosität, Stress & Jetlag</p>
            <p className="flex items-center gap-2"><CheckCircle2 className="h-4.5 w-4.5 text-brand-red shrink-0" /> Selbstwertproblemen & Energielosigkeit</p>
            <p className="flex items-center gap-2"><CheckCircle2 className="h-4.5 w-4.5 text-brand-red shrink-0" /> Frustration & Unruhe</p>
          </div>
        </div>
        <p className="pt-2">
          <a
            href="http://energypsych.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-brand-red hover:text-brand-red-dark font-semibold transition-colors"
          >
            <span>Mehr Informationen zu energetischer Psychologie (externer Link)</span>
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </p>
      </div>
    )
  }
];

export const Coaching: React.FC = () => {
  const [activeTab, setActiveTab] = useState('einzel');

  const activeTabInfo = coachingTabs.find((t) => t.id === activeTab) || coachingTabs[0];

  return (
    <div className="flex flex-col min-h-screen">
      
      {/* Header / Banner */}
      <section className="bg-brand-dark text-white pt-36 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(165,31,32,0.2),transparent_50%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <span className="text-brand-gold text-xs uppercase tracking-widest font-semibold px-3.5 py-1.5 bg-white/5 border border-white/10 rounded-full">
            Methoden & Coaching
          </span>
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl text-white tracking-tight">
            Coaching & Training
          </h1>
          <p className="text-gray-400 max-w-xl mx-auto text-sm sm:text-base lg:text-lg font-light font-sans">
            Ganzheitliche, emotionale und strukturelle Entwicklung auf höchstem Niveau.
          </p>
        </div>
      </section>

      {/* Main Section */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Left side: Overview text & Video & Expert Profile */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-4">
                <h2 className="font-display font-bold text-2xl sm:text-3xl text-brand-dark">
                  Die Basis unserer Coaching-Arbeit
                </h2>
                <div className="h-1 w-16 bg-brand-gold rounded-full" />
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed font-sans font-light">
                  Unsere Methoden basieren auf hocheffektiven Verfahren wie der bilateralen Hemisphärenstimulation (wingwave®), gezielten NLP-Fragetechniken, Kinesiologie und Energetischer Psychologie. Spezialisierte und erfahrene Coaches passen das Coaching individuell auf Ihre emotionalen und mentalen Bedürfnisse an.
                </p>
              </div>

              {/* Custom Video Player for Imagefilm */}
              <div className="space-y-3">
                <h3 className="font-display font-semibold text-xs sm:text-sm text-brand-dark uppercase tracking-widest">
                  Imagefilm: new-frame im Überblick
                </h3>
                <CustomVideoPlayer
                  src="/assets/videos/new-frame_imagefilm_christiane_waller_s.mp4"
                  poster="/assets/images/videos/new-frame_imagefilm_christiane_waller_s.jpg"
                />
              </div>

              {/* Expert Profile Banner link */}
              <div className="p-5 bg-brand-cream border border-brand-gold/15 rounded-3xl flex items-center justify-between gap-6 shadow-sm">
                <div className="space-y-1">
                  <h4 className="font-semibold text-brand-dark text-sm">
                    Gelisteter Weiterbildungsexperte
                  </h4>
                  <p className="text-[11px] text-gray-500 leading-relaxed font-sans font-light">
                    Besuchen Sie das Trainerprofil von Christiane Waller auf Seminarmarkt.de
                  </p>
                </div>
                <a
                  href="https://www.seminarmarkt.de/Expertenprofil/Christiane-Waller,13437"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 group hover:opacity-90 transition-opacity"
                >
                  <img
                    src="/assets/images/weiterbildungsexperten_200px.png"
                    alt="Weiterbildungsexperten Siegel"
                    className="h-14 w-auto object-contain border border-gray-200 rounded-xl p-1 bg-white shadow-sm transition-transform group-hover:scale-103"
                  />
                </a>
              </div>
            </div>

            {/* Right side: Interactive Tabs */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Tab Navigation row */}
              <div className="flex overflow-x-auto md:flex-wrap gap-2.5 border-b border-gray-150 pb-4 scrollbar-none -mx-4 px-4 md:mx-0 md:px-0">
                {coachingTabs.map((tab) => {
                  const Icon = tab.icon;
                  const isActive = activeTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`relative flex items-center gap-2 px-4 py-3 rounded-2xl text-xs sm:text-sm font-semibold tracking-wide transition-all focus:outline-none shrink-0 ${
                        isActive
                          ? 'bg-brand-red text-white shadow-lg shadow-brand-red/10'
                          : 'bg-brand-cream text-brand-dark hover:bg-gray-100'
                      }`}
                    >
                      <Icon className="h-4 w-4" />
                      <span>{tab.name}</span>
                    </button>
                  );
                })}
              </div>

              {/* Tab Content Display */}
              <div className="bg-brand-cream/40 border border-brand-gold/10 rounded-[2rem] p-8 sm:p-10 min-h-[400px] flex flex-col justify-between shadow-sm">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-6"
                  >
                    <h3 className="font-display font-extrabold text-2xl text-brand-dark leading-tight">
                      {activeTabInfo.title}
                    </h3>
                    
                    {activeTabInfo.content}
                  </motion.div>
                </AnimatePresence>
              </div>

            </div>

          </div>
        </div>
      </section>

    </div>
  );
};
