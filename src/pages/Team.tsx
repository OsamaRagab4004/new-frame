import React from 'react';
import { CustomVideoPlayer } from '../components/CustomVideoPlayer';
import { Award, CheckCircle2, Star } from 'lucide-react';

const certifications = [
  "NLP Lehrtrainerin (DVNLP)",
  "NLP Coach (DVNLP)",
  "wingwave-Coach",
  "TTT – Trauma Tapping Technique",
  "Coach für Energetische Psychologie nach Dr. Fred Gallo",
  "Ausbildung in Provokativem Stil nach Dr. Frank Farrelly",
  "Crew Ressource Management"
];

const videosList = [
  {
    title: "new-frame Imagefilm",
    description: "Imagefilm über die Arbeit von new-frame, mit Stimmen von Christiane Waller (CEO new-frame) und verschiedenen Klienten.",
    src: "assets/videos/new-frame_imagefilm_christiane_waller_s.mp4",
    poster: "assets/images/videos/new-frame_imagefilm_christiane_waller_s.jpg"
  },
  {
    title: "Testimonial Anna Klink",
    description: "Anna Klink spricht als Torhüterin und U20 Weltmeisterin über ihre Erfahrungen im Personal Coaching mit new-frame.",
    src: "assets/videos/new-frame_christiane_waller_testimonial_anna_klink_s.mp4",
    poster: "assets/images/videos/new-frame_christiane_waller_testimonial_anna_klink_s.jpg"
  },
  {
    title: "Duale Karriere: Anna Klink",
    description: "Statements von Torhüterin Anna Klink über die Vorteile des Trainings und des dualen Karrierecoachings über den TSV Bayer 04 Leverkusen.",
    src: "assets/videos/newframeblog_Duale-Karriere_01.mp4",
    poster: "assets/images/videos/newframeblog_Duale-Karriere_01.jpg"
  }
];

export const Team: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* Header Banner */}
      <section className="bg-brand-dark text-white pt-36 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(165,31,32,0.2),transparent_50%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <span className="text-brand-gold text-xs uppercase tracking-widest font-semibold px-3.5 py-1.5 bg-white/5 border border-white/10 rounded-full">
            Geschäftsführung & Gründerin
          </span>
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight">
            Über mich
          </h1>
          <p className="text-gray-400 max-w-xl mx-auto text-sm sm:text-base lg:text-lg font-light font-sans">
            Lernen Sie Christiane Waller, das Gesicht hinter new-frame, näher kennen.
          </p>
        </div>
      </section>

      {/* Profile & Biography */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Left side: Photo card */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-brand-cream aspect-[4/5] max-w-md mx-auto lg:max-w-none">
                <img
                  src="assets/images/team/christiane_waller.jpg"
                  alt="Christiane Waller"
                  className="w-full h-full object-cover object-top hover:scale-[1.02] transition-transform duration-500"
                />
                {/* Gold gradient accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-brand-gold via-brand-red to-brand-gold" />
              </div>
            </div>

            {/* Right side: Biography */}
            <div className="lg:col-span-7 space-y-6">
              <div className="text-brand-red font-semibold uppercase tracking-wider text-xs">
                Mein Weg & Meine Vision
              </div>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-brand-dark leading-tight">
                Christiane Waller
              </h2>
              <div className="h-1 w-16 bg-brand-gold rounded-full" />
              
              <div className="space-y-4 text-gray-600 text-base sm:text-lg leading-relaxed font-sans font-light">
                <p>
                  Ich wurde 1963 in Weil am Rhein geboren und bin dort aufgewachsen. Bedingt durch die Nähe zur Schweiz habe ich mich auf einer renommierten privaten Handelsschule (NSH - Handel und Kader) in Basel ausbilden lassen. Über eine spannende Zeit bei der Lufthansa führte mich mein Weg schließlich in die Selbständigkeit als leidenschaftliche Trainerin und Coach.
                </p>
                <p>
                  Begegnungen mit Menschen sind das zentrale Thema in meinem Leben. Es ist für mich immer wieder absolut faszinierend und erfüllend zu sehen, zu welchen Höchstleistungen Menschen fähig sind, wenn sie die richtigen Impulse, Instrumente und Begleitung bekommen.
                </p>
              </div>

              {/* High-end Blockquote */}
              <blockquote className="border-l-4 border-brand-gold bg-brand-cream/60 p-6 sm:p-8 rounded-r-3xl italic text-brand-dark/95 text-base sm:text-lg lg:text-xl my-8 font-serif leading-relaxed relative overflow-hidden">
                <span className="absolute -top-2 left-2 text-brand-gold/10 text-9xl font-serif select-none pointer-events-none">“</span>
                <p className="relative z-10 font-sans font-light">
                  „Der Mensch ist kein human being, sondern ein human becoming.“
                </p>
                <cite className="block text-xs uppercase tracking-wider font-semibold text-gray-500 mt-3 not-italic font-sans">
                  — Heinz von Förster
                </cite>
              </blockquote>

              <p className="text-gray-600 text-base sm:text-lg leading-relaxed font-sans font-light">
                Dieses Zitat gibt meine innere Grundhaltung gegenüber meinen Mitmenschen ziemlich genau wieder: Ich glaube fest an die unerschöpflichen Entwicklungs- und Entfaltungsmöglichkeiten, die uns allen offenstehen. Mein Bestreben ist es, nachhaltig, empathisch und absolut erfolgsorientiert für Sie zu arbeiten. Das bestmögliche Rüstzeug für dieses Ziel sichere ich durch kontinuierliche zertifizierte Weiterbildungen und regelmäßige Supervisionen.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Certifications list */}
      <section className="py-24 bg-brand-cream border-t border-b border-brand-gold/10 relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <div className="p-3 bg-brand-red/10 text-brand-red rounded-2xl inline-flex">
              <Award className="h-6 w-6" />
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-brand-dark">
              Qualifikationen & Zertifizierungen
            </h2>
            <div className="h-1 w-16 bg-brand-gold rounded-full mx-auto" />
            <p className="text-gray-500 text-sm sm:text-base font-sans font-light">
              Fundiertes, wissenschaftlich geprüftes Methodenspektrum für höchste Coaching-Qualität.
            </p>
          </div>

          <div className="bg-white border border-brand-gold/10 rounded-[2rem] p-8 sm:p-10 shadow-xl shadow-brand-dark/5">
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {certifications.map((cert, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3.5 text-sm sm:text-base text-brand-dark font-medium font-sans border-b border-gray-50 pb-4 last:border-0 md:last:border-b-0"
                >
                  <div className="p-1 bg-brand-red/10 text-brand-red rounded-lg shrink-0 mt-0.5">
                    <CheckCircle2 className="h-4.5 w-4.5" />
                  </div>
                  <span className="font-light">{cert}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Videos Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
            <div className="p-3 bg-brand-red/10 text-brand-red rounded-2xl inline-flex">
              <Star className="h-6 w-6" />
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-brand-dark">
              Die Coaching-Arbeit im Überblick
            </h2>
            <div className="h-1 w-16 bg-brand-gold rounded-full mx-auto" />
            <p className="text-gray-500 text-sm sm:text-base font-sans font-light">
              Sehen Sie Eindrücke, Stimmen und Feedback zu unseren Trainingsprogrammen in Videoform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {videosList.map((video, idx) => (
              <div key={idx} className="space-y-4 flex flex-col justify-between h-full bg-brand-cream/40 p-6 rounded-[2rem] border border-brand-gold/10 hover:shadow-md transition-shadow duration-300">
                <div className="space-y-4">
                  <CustomVideoPlayer
                    src={video.src}
                    poster={video.poster}
                    className="w-full"
                  />
                  <h3 className="font-display font-bold text-lg sm:text-xl text-brand-dark pt-2">
                    {video.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-gray-500 leading-relaxed font-sans font-light pt-2 border-t border-gray-150/40">
                  {video.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};
