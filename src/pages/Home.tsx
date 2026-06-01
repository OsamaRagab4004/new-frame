import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, FileText, ArrowRight, ArrowUpRight, Award, Compass, Users, Target } from 'lucide-react';

const testimonials = [
  {
    text: "Ich kann PRI jeder Führungskraft empfehlen, die sich in ihrem Berufsalltag mit unterschiedlichen und komplexen Themen auseinandersetzen muss. Es ist ein sehr detaillierter Weg, um herauszufinden, wo Ihre Vorteile liegen und in welchem Bereich Sie die Chance haben, sich weiterzuentwickeln um effizienter zu werden und gleichzeitig sowohl im Beruf, als auch in zwischenmenschlichen Beziehungen stets überlegt und souverän zu agieren.",
    author: "Christian Kühnel",
    company: "Lausitzer Stahlbau Ruhland GmbH"
  },
  {
    text: "Der PRI hat mir geholfen, die Stressfaktoren besser zu identifizieren und gezielt Maßnahmen für eine positive Veränderung zu ergreifen. Wir setzen den PRI auch für unser Team ein. Alle Mitarbeiter sollen ebenfalls von diesen Vorteilen profitieren. Das hat die Bewältigung von Herausforderungen und Stress extrem leichter gemacht als früher.",
    author: "Michael Radmer",
    company: "WELL SERVICES GmbH"
  },
  {
    text: "New Frame hat mir damals geholfen, meine Augen zu öffnen. Ich wusste nicht genau, wo ich im Leben stehe bzw. wo mein Weg irgendwann hinführen sollte. Durch verschiedene Coachings konnte ich herausfinden, wo mein derzeitiger Standpunkt gerade ist und was ich brauche um die wichtigen Entscheidungen für meine Zukunft zu treffen. Auch sportlich war das Coaching ein voller Erfolg. Als zweite Torhüterin ist es oft nicht leicht, ruhig und sachlich auf die Situation zu schauen. Durch das Coaching habe ich viele Techniken erlernt, die ich auf gewisse Situationen im Sport anwenden kann, um auch mal einen anderen Blickwinkel auf manche Dinge zu bekommen.",
    author: "Anna Klink",
    company: "Torhüterin Bayer 04 Leverkusen - Duale Karriere"
  },
  {
    text: "...Ihr Auftrag war es, uns als junges und neu zusammengestelltes Team in unseren bestehenden Abläufen zu analysieren, weiter zu entwickeln und gewinnbringend zu unterstützen. Dies haben Sie in mehreren Ein- und Mehrtagesseminaren hervorragend umgesetzt. Die Vorbereitung auf die einzelnen Schulungen war immer sehr professionell. Sowohl die Auswahl der Übungen mit einem Wechsel zwischen theoretischem Input und Gruppenarbeiten in der Praxis, als auch die Vermittlung der Inhalte waren stets leicht nachvollziehbar und sehr gut erklärt. Dies machte die vorgeschlagene Implementierung der Ergebnisse in unsere Prozesse sehr einfach...",
    author: "Herbert Ott",
    company: "Betriebliches Gesundheitsmanagement TSV Bayer 04 Leverkusen e.V.",
    pdfLink: "/assets/documents/Referenz_TSV_Betriebliches_Gesundheitsmanagement.pdf"
  }
];

const clientLogos = [
  { name: "Bayer 04 Leverkusen", type: "text" },
  { name: "Lausitzer Stahlbau", type: "text" },
  { name: "WELL SERVICES GmbH", type: "text" },
  { name: "Issberner Consulting", type: "image", src: "/assets/images/network/issberner_coaching_consulting.png" },
  { name: "Peaceful Heart Network", type: "image", src: "/assets/images/network/TTT-empower-logo.png" },
  { name: "EMCA", type: "image", src: "/assets/images/network/EMCA_logo_kl.png" },
  { name: "Seminarmarkt.de", type: "image", src: "/assets/images/weiterbildungsexperten_200px.png" }
];

export const Home: React.FC = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 9000);
    return () => clearInterval(timer);
  }, []);

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="flex flex-col min-h-screen">
      
      {/* 1. Hero Section */}
      <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden bg-brand-dark pt-16">
        {/* Background Image with Zoom animation */}
        <div className="absolute inset-0 z-0">
          <motion.img
            initial={{ scale: 1.1 }}
            animate={{ scale: 1.0 }}
            transition={{ duration: 2.5, ease: 'easeOut' }}
            src="/assets/images/slideshows/startseite.jpg"
            alt="new-frame Startseite Banner"
            className="w-full h-full object-cover opacity-35 object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/85 to-brand-dark/20" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Left side: Content with Staggered animations */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <motion.div
                initial={{ opacity: 0, y: -15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-brand-red/25 border border-brand-red/45 rounded-full text-brand-gold text-xs font-semibold uppercase tracking-widest"
              >
                <Award className="h-4 w-4 shrink-0" />
                High-End Coaching & Consulting
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.7, ease: "easeOut" }}
                className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl tracking-tight leading-[1.1] text-white"
              >
                Persönlichkeiten entwickeln. <br/>
                <span className="text-brand-gold bg-clip-text">Erfolge sichern.</span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.7, ease: "easeOut" }}
                className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed font-sans max-w-2xl font-light"
              >
                new-frame begleitet Fach- und Führungskräfte, Spitzensportler sowie Organisationen bei nachhaltigen Veränderungsprozessen. Wir kombinieren fundiertes Consulting mit modernsten Coaching-Techniken.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45, duration: 0.7, ease: "easeOut" }}
                className="flex flex-wrap items-center gap-4 pt-6"
              >
                <Link
                  to="/kontakt"
                  className="px-8 py-4 bg-brand-red hover:bg-brand-red-dark text-white font-semibold rounded-2xl transition-all duration-300 shadow-xl flex items-center gap-2 group transform hover:-translate-y-0.5"
                >
                  <span>Erstgespräch vereinbaren</span>
                  <ArrowRight className="h-4.5 w-4.5 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  to="/coaching"
                  className="px-8 py-4 border border-white/20 hover:border-white hover:bg-white/5 text-white font-semibold rounded-2xl transition-all duration-300 flex items-center gap-2"
                >
                  <span>Unsere Leistungen</span>
                </Link>
              </motion.div>
            </div>

            {/* Right side: Portrait with Float and Glow animation */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, x: 40 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ delay: 0.35, duration: 0.8, ease: "easeOut" }}
              className="lg:col-span-5 relative flex justify-center lg:justify-end"
            >
              {/* Back-glow ring */}
              <div className="absolute inset-0 bg-brand-red/10 rounded-[2.5rem] blur-2xl opacity-60 -z-10" />
              
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut"
                }}
                className="relative rounded-[2.5rem] overflow-hidden border-4 border-white/10 shadow-2xl w-[320px] sm:w-[350px] aspect-[4/5] max-w-full"
              >
                <img
                  src="/assets/images/team/christiane_waller.jpg"
                  alt="Christiane Waller - new-frame Coach"
                  className="w-full h-full object-cover object-top scale-102 hover:scale-105 transition-transform duration-700"
                />
                
                {/* Overlay card for credentials */}
                <div className="absolute bottom-6 left-6 right-6 bg-brand-dark/90 backdrop-blur-md border border-white/15 p-4 rounded-2xl flex flex-col shadow-xl">
                  <span className="font-display font-extrabold text-white text-base">Christiane Waller</span>
                  <span className="text-brand-gold text-xs font-light">Gründerin & Senior Coach</span>
                </div>
              </motion.div>
            </motion.div>
            
          </div>
        </div>
      </section>

      {/* 1b. Trusted Clients Marquee */}
      <section className="bg-brand-cream py-10 border-b border-brand-gold/15 overflow-hidden select-none">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-5">
          <p className="text-center font-display font-semibold text-xs text-gray-400 uppercase tracking-widest">
            Vertrauensvolle Zusammenarbeit & Netzwerke
          </p>
        </div>
        
        {/* Infinite scrolling track container */}
        <div className="relative w-full flex overflow-x-hidden">
          <div className="flex gap-16 whitespace-nowrap animate-marquee hover-pause py-4">
            {/* First Set of Logos */}
            {clientLogos.map((logo, idx) => (
              <div key={`set1-${idx}`} className="flex items-center justify-center min-w-[150px] h-12 grayscale opacity-55 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                {logo.type === 'image' ? (
                  <img
                    src={logo.src}
                    alt={logo.name}
                    className="max-h-full max-w-[140px] object-contain"
                  />
                ) : (
                  <span className="font-display font-extrabold text-sm tracking-tight text-brand-dark px-4 py-2 border border-brand-gold/25 rounded-xl bg-white shadow-sm">
                    {logo.name}
                  </span>
                )}
              </div>
            ))}
            
            {/* Second Set (identical duplicate to complete infinite looping) */}
            {clientLogos.map((logo, idx) => (
              <div key={`set2-${idx}`} className="flex items-center justify-center min-w-[150px] h-12 grayscale opacity-55 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                {logo.type === 'image' ? (
                  <img
                    src={logo.src}
                    alt={logo.name}
                    className="max-h-full max-w-[140px] object-contain"
                  />
                ) : (
                  <span className="font-display font-extrabold text-sm tracking-tight text-brand-dark px-4 py-2 border border-brand-gold/25 rounded-xl bg-white shadow-sm">
                    {logo.name}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Intro Section */}
      <section className="py-24 bg-white relative">
        {/* Background graphic elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-cream/50 rounded-full blur-3xl -z-10" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 space-y-6"
            >
              <div className="text-brand-red font-semibold tracking-widest uppercase text-xs">
                Unser Leitbild & Versprechen
              </div>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-brand-dark leading-tight">
                Wir verbinden Menschen und Organisationen
              </h2>
              <div className="h-1 w-20 bg-brand-gold rounded-full" />
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed font-sans font-light">
                Mit einem erlesenen, internationalen High-End-Netzwerk unterstützt <strong>new-frame</strong> Firmen und Organisationen dabei, geschäftliche Abläufe – zum Beispiel im internationalen Vertrieb – noch erfolgreicher zu gestalten. Die gesamten Prozesse werden professionell begleitet, strategisch gesteuert und konsequent bis zum erfolgreichen Abschluss gebracht.
              </p>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed font-sans font-light">
                Ihre geschäftliche und persönliche Weiterentwicklung steht im Mittelpunkt unserer Arbeit. Hierfür verknüpfen wir wirtschaftliches Consulting mit hocheffektivem Emotions- und Mentalcoaching.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5 bg-brand-cream border border-brand-gold/15 rounded-[2.5rem] p-8 sm:p-10 space-y-8 shadow-lg shadow-brand-dark/5"
            >
              <h3 className="font-display font-bold text-2xl text-brand-dark border-b border-brand-gold/20 pb-4">
                Warum new-frame?
              </h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="p-3 bg-brand-red/10 text-brand-red rounded-2xl shrink-0 h-12 w-12 flex items-center justify-center">
                    <Users className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-brand-dark text-base">Internationales Netzwerk</h4>
                    <p className="text-gray-500 text-sm mt-1">Branchenübergreifende Experten für globale Erfolge und neue Märkte.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="p-3 bg-brand-red/10 text-brand-red rounded-2xl shrink-0 h-12 w-12 flex items-center justify-center">
                    <Target className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-brand-dark text-base">Spitzensport-Methodik</h4>
                    <p className="text-gray-500 text-sm mt-1">Übertragung mentaler Erfolgsfaktoren für maximale Resilienz im Business.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="p-3 bg-brand-red/10 text-brand-red rounded-2xl shrink-0 h-12 w-12 flex items-center justify-center">
                    <Compass className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-brand-dark text-base">Ganzheitlicher Fokus</h4>
                    <p className="text-gray-500 text-sm mt-1">Zertifizierte Methoden wie wingwave® und Energetische Psychologie.</p>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 3. Services Grid Section */}
      <section className="py-24 bg-brand-cream border-y border-brand-gold/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <div className="text-brand-red font-semibold tracking-widest uppercase text-xs">
              Unsere Kernkompetenzen
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-brand-dark">
              Maßgeschneiderte Lösungen
            </h2>
            <div className="h-1 w-20 bg-brand-gold rounded-full mx-auto" />
            <p className="text-gray-500 font-sans font-light text-base sm:text-lg">
              Erfolgsstrategien für Unternehmen, Führungskräfte, Teams und Spitzenathleten.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
            
            {/* Consulting Card */}
            <motion.div
              whileHover={{ y: -8 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="bg-white rounded-[2rem] overflow-hidden shadow-xl shadow-brand-dark/5 border border-brand-gold/10 flex flex-col h-full"
            >
              <div className="relative h-72 sm:h-80 overflow-hidden">
                <img
                  src="/assets/images/consulting/consulting-new-frame.jpg"
                  alt="new-frame Consulting"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute top-6 left-6 bg-brand-red text-white text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-md">
                  Consulting
                </div>
              </div>
              <div className="p-8 sm:p-10 flex-1 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <h3 className="font-display font-bold text-2xl sm:text-3xl text-brand-dark">
                    Consulting für Ihren Erfolg
                  </h3>
                  <p className="text-gray-500 text-sm sm:text-base leading-relaxed font-sans font-light">
                    Veränderungen und neue Strukturen können Verunsicherung hervorrufen. Wir analysieren Ihre Ausgangslage und konzipieren die passenden Schulungs- und Führungskonzepte für eine reibungslose Implementierung neuer Unternehmenskulturen.
                  </p>
                </div>
                <div>
                  <Link
                    to="/consulting"
                    className="inline-flex items-center gap-2 text-brand-red hover:text-brand-red-dark font-semibold text-sm sm:text-base group transition-colors"
                  >
                    <span>Mehr zum Consulting</span>
                    <ArrowRight className="h-4.5 w-4.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Coaching & Training Card */}
            <motion.div
              whileHover={{ y: -8 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="bg-white rounded-[2rem] overflow-hidden shadow-xl shadow-brand-dark/5 border border-brand-gold/10 flex flex-col h-full"
            >
              <div className="relative h-72 sm:h-80 overflow-hidden">
                <img
                  src="/assets/images/2023/12/18/coaching-training-new-frame.jpg"
                  alt="new-frame Coaching & Training"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute top-6 left-6 bg-brand-red text-white text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-md">
                  Coaching & Training
                </div>
              </div>
              <div className="p-8 sm:p-10 flex-1 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <h3 className="font-display font-bold text-2xl sm:text-3xl text-brand-dark">
                    Coaching & Training
                  </h3>
                  <p className="text-gray-500 text-sm sm:text-base leading-relaxed font-sans font-light">
                    Mit verschiedenen Trainings- und Coachingkompetenzen begleiten wir Sie im Soft-Skills-Bereich. Unser Hauptfokus liegt dabei auf Talenten im Management und im Hochleistungssport (Duale Karriere).
                  </p>
                </div>
                <div>
                  <Link
                    to="/coaching"
                    className="inline-flex items-center gap-2 text-brand-red hover:text-brand-red-dark font-semibold text-sm sm:text-base group transition-colors"
                  >
                    <span>Mehr zum Coaching & Training</span>
                    <ArrowRight className="h-4.5 w-4.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 4. Testimonials Slider Section */}
      <section className="py-24 bg-brand-dark text-white overflow-hidden relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(197,168,128,0.15),transparent_60%)]" />
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 space-y-3">
            <div className="text-brand-gold text-xs uppercase tracking-widest font-semibold">
              Erfolgsgeschichten
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white">
              Stimmen unserer Klienten
            </h2>
            <div className="h-1 w-16 bg-brand-gold rounded-full mx-auto" />
          </div>

          {/* Testimonial Box */}
          <div className="min-h-[380px] sm:min-h-[280px] flex flex-col justify-between relative bg-white/5 backdrop-blur-md border border-white/10 p-8 sm:p-12 rounded-[2rem] shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTestimonial}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="space-y-6"
              >
                {/* Large Quotation Mark */}
                <span className="absolute top-4 left-6 text-brand-gold/10 text-9xl font-serif pointer-events-none select-none">
                  “
                </span>
                
                <p className="text-gray-200 text-sm sm:text-base lg:text-lg italic leading-relaxed relative z-10 font-sans font-light">
                  {testimonials[activeTestimonial].text}
                </p>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-6 border-t border-white/10">
                  <div>
                    <h4 className="font-display font-bold text-brand-gold text-lg sm:text-xl">
                      {testimonials[activeTestimonial].author}
                    </h4>
                    <p className="text-gray-400 text-xs sm:text-sm mt-0.5">
                      {testimonials[activeTestimonial].company}
                    </p>
                  </div>
                  
                  {testimonials[activeTestimonial].pdfLink && (
                    <a
                      href={testimonials[activeTestimonial].pdfLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-semibold bg-brand-red hover:bg-brand-red-dark text-white px-5 py-3 rounded-xl transition-all shadow-md group shrink-0"
                    >
                      <FileText className="h-4.5 w-4.5" />
                      <span>Vollständiges Referenzschreiben</span>
                      <ArrowUpRight className="h-3.5 w-3.5 opacity-70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Slider Navigation controls */}
            <div className="flex items-center justify-end gap-4 mt-8 pt-4 border-t border-white/5">
              <button
                onClick={prevTestimonial}
                className="p-2.5 rounded-full border border-white/10 hover:border-white/40 bg-white/5 hover:bg-white/10 text-white transition-all focus:outline-none"
                aria-label="Vorheriges Testimonial"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <div className="flex gap-2">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveTestimonial(idx)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      activeTestimonial === idx ? 'w-8 bg-brand-gold' : 'w-2 bg-white/20'
                    }`}
                    aria-label={`Gehe zu Slide ${idx + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={nextTestimonial}
                className="p-2.5 rounded-full border border-white/10 hover:border-white/40 bg-white/5 hover:bg-white/10 text-white transition-all focus:outline-none"
                aria-label="Nächstes Testimonial"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Contact CTA Preview Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-brand-cream border border-brand-gold/15 rounded-[3rem] overflow-hidden shadow-xl grid grid-cols-1 lg:grid-cols-12">
            
            {/* Contact Details Text */}
            <div className="p-8 sm:p-12 lg:p-16 lg:col-span-7 flex flex-col justify-center space-y-6">
              <div className="text-brand-red font-semibold uppercase tracking-wider text-xs">
                Persönliche Begleitung
              </div>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-brand-dark leading-tight">
                Lassen Sie uns ins Gespräch kommen
              </h2>
              <div className="h-1 w-16 bg-brand-gold rounded-full" />
              
              <div className="space-y-1">
                <p className="font-display font-extrabold text-xl text-brand-dark">
                  Christiane Waller
                </p>
                <p className="text-gray-500 text-sm sm:text-base font-light">
                  Geschäftsführerin new-frame & zertifizierter Senior Coach
                </p>
              </div>

              <div className="space-y-4 pt-6 border-t border-brand-gold/20">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs sm:text-sm text-gray-600 leading-relaxed font-sans">
                  <div>
                    <p className="font-bold text-brand-dark mb-1 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 bg-brand-red rounded-full" />
                      Standort Gangelt
                    </p>
                    <p className="font-light pl-3">Historisches Gebäude</p>
                    <p className="font-light pl-3">„Alter Bahnhof Gangelt“</p>
                    <p className="font-light pl-3">Hanxler Str. 15, 52538 Gangelt</p>
                  </div>
                  <div>
                    <p className="font-bold text-brand-dark mb-1 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 bg-brand-red rounded-full" />
                      Standort Selfkant-Wehr
                    </p>
                    <p className="font-light pl-3">Barrierefreies Arbeiten auf dem Bauernhof</p>
                    <p className="font-light pl-3">Dorfstr. 55, 52538 Selfkant-Wehr</p>
                  </div>
                </div>
              </div>

              <div className="pt-6 flex flex-wrap gap-4 items-center">
                <Link
                  to="/kontakt"
                  className="px-6 py-3.5 bg-brand-red hover:bg-brand-red-dark text-white font-semibold rounded-xl transition-all shadow-md"
                >
                  Zum Kontaktformular
                </Link>
                <a
                  href="mailto:info@new-frame.de"
                  className="px-6 py-3.5 border border-gray-300 hover:bg-gray-50 text-brand-dark font-semibold rounded-xl transition-all"
                >
                  info@new-frame.de
                </a>
              </div>
            </div>

            {/* Profile Image Column */}
            <div className="relative min-h-[380px] lg:min-h-full lg:col-span-5 overflow-hidden">
              <img
                src="/assets/images/team/christiane_waller.jpg"
                alt="Christiane Waller - new-frame"
                className="absolute inset-0 w-full h-full object-cover object-top hover:scale-102 transition-transform duration-700"
              />
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};
