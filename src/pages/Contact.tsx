import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, RefreshCw, Send, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

interface ContactFormData {
  companyName: string;
  companyAddress: string;
  clientName: string;
  clientPhone: string;
  clientEmail: string;
  interests: string[];
  message: string;
  preferredContact: 'email' | 'phone';
  privacyConsent: boolean;
  captchaAnswer: string;
}

const slideVariants = {
  enter: (direction: 'forward' | 'backward') => ({
    x: direction === 'forward' ? 60 : -60,
    opacity: 0
  }),
  center: {
    x: 0,
    opacity: 1
  },
  exit: (direction: 'forward' | 'backward') => ({
    x: direction === 'forward' ? -60 : 60,
    opacity: 0
  })
};

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    companyName: '',
    companyAddress: '',
    clientName: '',
    clientPhone: '',
    clientEmail: '',
    interests: [],
    message: '',
    preferredContact: 'email',
    privacyConsent: false,
    captchaAnswer: ''
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [direction, setDirection] = useState<'forward' | 'backward'>('forward');
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [charsLeft, setCharsLeft] = useState(1000);

  // Custom Math CAPTCHA
  const [captchaNum1, setCaptchaNum1] = useState(0);
  const [captchaNum2, setCaptchaNum2] = useState(0);

  const generateCaptcha = () => {
    setCaptchaNum1(Math.floor(Math.random() * 9) + 2); // 2 to 10
    setCaptchaNum2(Math.floor(Math.random() * 8) + 1); // 1 to 8
    setFormData(prev => ({ ...prev, captchaAnswer: '' }));
  };

  useEffect(() => {
    generateCaptcha();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    if (name === 'message') {
      setCharsLeft(1000 - value.length);
    }

    // Clear error for that specific input field
    if (errors[name as keyof ContactFormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleCheckboxChange = (interest: string) => {
    setFormData(prev => {
      const interests = prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest];
      
      // Clear interest error if any are selected
      if (interests.length > 0 && errors.interests) {
        setErrors(err => ({ ...err, interests: undefined }));
      }
      return { ...prev, interests };
    });
  };

  const handleToggleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: checked }));
    if (errors[name as keyof ContactFormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const validateStep1 = (): boolean => {
    const stepErrors: Partial<Record<keyof ContactFormData, string>> = {};
    if (formData.interests.length === 0) {
      stepErrors.interests = 'Bitte wählen Sie mindestens einen Bereich aus.';
    }
    if (!formData.message.trim()) {
      stepErrors.message = 'Bitte hinterlassen Sie eine Nachricht.';
    }
    setErrors(prev => ({ ...prev, ...stepErrors }));
    return !stepErrors.interests && !stepErrors.message;
  };

  const validateStep2 = (): boolean => {
    const stepErrors: Partial<Record<keyof ContactFormData, string>> = {};
    if (!formData.clientName.trim()) {
      stepErrors.clientName = 'Bitte geben Sie Ihren Namen an.';
    }
    if (!formData.clientPhone.trim()) {
      stepErrors.clientPhone = 'Bitte geben Sie Ihre Telefonnummer an.';
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.clientEmail.trim()) {
      stepErrors.clientEmail = 'Bitte geben Sie Ihre E-Mail-Adresse an.';
    } else if (!emailRegex.test(formData.clientEmail)) {
      stepErrors.clientEmail = 'Bitte geben Sie eine gültige E-Mail-Adresse ein.';
    }
    setErrors(prev => ({ ...prev, ...stepErrors }));
    return !stepErrors.clientName && !stepErrors.clientPhone && !stepErrors.clientEmail;
  };

  const validateStep3 = (): boolean => {
    const stepErrors: Partial<Record<keyof ContactFormData, string>> = {};
    if (!formData.privacyConsent) {
      stepErrors.privacyConsent = 'Bitte stimmen Sie den Datenschutzbestimmungen zu.';
    }
    const expectedAnswer = (captchaNum1 + captchaNum2).toString();
    if (!formData.captchaAnswer.trim()) {
      stepErrors.captchaAnswer = 'Bitte lösen Sie das Rechenrätsel.';
    } else if (formData.captchaAnswer.trim() !== expectedAnswer) {
      stepErrors.captchaAnswer = 'Das Rechenergebnis ist falsch.';
    }
    setErrors(prev => ({ ...prev, ...stepErrors }));
    return !stepErrors.privacyConsent && !stepErrors.captchaAnswer;
  };

  const handleNextStep = () => {
    if (currentStep === 1) {
      if (validateStep1()) {
        setDirection('forward');
        setCurrentStep(2);
      }
    } else if (currentStep === 2) {
      if (validateStep2()) {
        setDirection('forward');
        setCurrentStep(3);
      }
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setDirection('backward');
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentStep === 3 && validateStep3()) {
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitSuccess(true);
        console.log('Contact form submitted successfully:', formData);
      }, 1500);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      
      {/* Header Banner */}
      <section className="bg-brand-dark text-white pt-36 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(165,31,32,0.2),transparent_50%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <span className="text-brand-gold text-xs uppercase tracking-widest font-semibold px-3.5 py-1.5 bg-white/5 border border-white/10 rounded-full">
            Kontaktieren Sie uns
          </span>
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight">
            Kontaktformular
          </h1>
          <p className="text-gray-400 max-w-xl mx-auto text-sm sm:text-base lg:text-lg font-light font-sans">
            Gerne können Sie zur Kontaktaufnahme das nachfolgende Formular nutzen.
          </p>
        </div>
      </section>

      {/* Contact Content split */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Left side details */}
            <div className="lg:col-span-4 space-y-8 bg-brand-cream border border-brand-gold/15 rounded-[2rem] p-8 sm:p-10 shadow-lg shadow-brand-dark/5">
              <div className="space-y-3">
                <h2 className="font-display font-bold text-2xl text-brand-dark">
                  new-frame Hauptbüro
                </h2>
                <div className="h-1 w-12 bg-brand-gold rounded-full" />
                <p className="text-sm text-gray-500 font-sans leading-relaxed font-light">
                  Haben Sie allgemeine Fragen zu unseren Dienstleistungen oder möchten Sie direkt einen Termin buchen? Kontaktieren Sie uns.
                </p>
              </div>

              <div className="border-t border-brand-gold/25 my-6" />

              <ul className="space-y-6 text-sm text-gray-600 font-sans leading-relaxed">
                <li className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-brand-gold mt-1 shrink-0" />
                  <div>
                    <p className="font-bold text-brand-dark">Hauptstandort Gangelt</p>
                    <p className="font-light text-gray-500">Historisches Gebäude</p>
                    <p className="font-light text-gray-500">„Alter Bahnhof Gangelt“</p>
                    <p className="font-light text-gray-500">Hanxler Str. 15, 52538 Gangelt</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-brand-gold mt-1 shrink-0" />
                  <div>
                    <p className="font-bold text-brand-dark">Standort Selfkant-Wehr</p>
                    <p className="font-light text-gray-500">Barrierefreies Arbeiten auf dem Bauernhof</p>
                    <p className="font-light text-gray-500">Dorfstr. 55, 52538 Selfkant-Wehr</p>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-brand-gold shrink-0" />
                  <a href="tel:+491736515053" className="hover:text-brand-red font-semibold text-brand-dark transition-colors duration-200">
                    +49 173 6515 053
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-brand-gold shrink-0" />
                  <a href="mailto:info@new-frame.de" className="hover:text-brand-red font-semibold text-brand-dark transition-colors duration-200">
                    info@new-frame.de
                  </a>
                </li>
              </ul>

              <div className="border-t border-brand-gold/25 my-6" />

              <p className="text-[11px] text-gray-400 font-sans font-light leading-relaxed">
                Hinweis: Ihre Angaben werden verschlüsselt per SSL übertragen und ausschließlich zur Beantwortung Ihrer Anfrage genutzt.
              </p>
            </div>

            {/* Right side form */}
            <div className="lg:col-span-8">
              {submitSuccess ? (
                /* Success Screen */
                <div className="bg-brand-cream border border-brand-gold/20 rounded-[2.5rem] p-12 text-center space-y-6 shadow-xl">
                  <div className="p-4 bg-brand-red/10 text-brand-red rounded-full inline-flex">
                    <CheckCircle className="h-14 w-14" />
                  </div>
                  <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-brand-dark">
                    Nachricht erfolgreich gesendet!
                  </h3>
                  <p className="text-gray-500 font-sans text-sm sm:text-base max-w-md mx-auto leading-relaxed font-light">
                    Vielen Dank für Ihre Anfrage. Wir haben Ihre Nachricht erhalten und werden uns schnellstmöglich bei Ihnen melden.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitSuccess(false);
                      setCurrentStep(1);
                      setFormData({
                        companyName: '',
                        companyAddress: '',
                        clientName: '',
                        clientPhone: '',
                        clientEmail: '',
                        interests: [],
                        message: '',
                        preferredContact: 'email',
                        privacyConsent: false,
                        captchaAnswer: ''
                      });
                      generateCaptcha();
                    }}
                    className="px-6 py-3.5 bg-brand-red hover:bg-brand-red-dark text-white font-semibold rounded-xl text-xs sm:text-sm transition-colors shadow-md"
                  >
                    Neue Nachricht senden
                  </button>
                </div>
              ) : (
                /* Form Card container with Multi-Step UI */
                <div className="bg-white border border-brand-gold/10 rounded-[2.5rem] p-6 sm:p-10 shadow-xl shadow-brand-dark/5 space-y-8">
                  
                  {/* Step Progress indicators */}
                  <div className="relative mb-6">
                    <div className="flex items-center justify-between relative max-w-lg mx-auto">
                      
                      {/* Connecting Line backgrounds */}
                      <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-100 -translate-y-1/2 -z-10" />
                      <div
                        className="absolute top-1/2 left-0 h-0.5 bg-brand-red -translate-y-1/2 transition-all duration-500 -z-10"
                        style={{ width: `${((currentStep - 1) / 2) * 100}%` }}
                      />

                      {/* Step 1 */}
                      <div className="flex flex-col items-center">
                        <button
                          type="button"
                          onClick={() => currentStep > 1 && setCurrentStep(1)}
                          disabled={currentStep === 1}
                          className={`w-9 h-9 rounded-full flex items-center justify-center font-display font-bold text-xs border-2 transition-all duration-300 ${
                            currentStep > 1
                              ? 'bg-brand-red border-brand-red text-white shadow-md'
                              : 'bg-white border-brand-red text-brand-red shadow-lg ring-4 ring-brand-red/10'
                          }`}
                        >
                          {currentStep > 1 ? '✓' : '1'}
                        </button>
                        <span className={`text-[10px] font-semibold mt-2 tracking-wide uppercase transition-colors duration-300 ${
                          currentStep === 1 ? 'text-brand-red' : 'text-gray-400'
                        }`}>
                          Anliegen
                        </span>
                      </div>

                      {/* Step 2 */}
                      <div className="flex flex-col items-center">
                        <button
                          type="button"
                          onClick={() => currentStep > 2 && setCurrentStep(2)}
                          disabled={currentStep <= 2}
                          className={`w-9 h-9 rounded-full flex items-center justify-center font-display font-bold text-xs border-2 transition-all duration-300 ${
                            currentStep > 2
                              ? 'bg-brand-red border-brand-red text-white shadow-md'
                              : currentStep === 2
                              ? 'bg-white border-brand-red text-brand-red shadow-lg ring-4 ring-brand-red/10'
                              : 'bg-white border-gray-200 text-gray-400'
                          }`}
                        >
                          {currentStep > 2 ? '✓' : '2'}
                        </button>
                        <span className={`text-[10px] font-semibold mt-2 tracking-wide uppercase transition-colors duration-300 ${
                          currentStep === 2 ? 'text-brand-red' : 'text-gray-400'
                        }`}>
                          Kontaktdaten
                        </span>
                      </div>

                      {/* Step 3 */}
                      <div className="flex flex-col items-center">
                        <div
                          className={`w-9 h-9 rounded-full flex items-center justify-center font-display font-bold text-xs border-2 transition-all duration-300 ${
                            currentStep === 3
                              ? 'bg-white border-brand-red text-brand-red shadow-lg ring-4 ring-brand-red/10'
                              : 'bg-white border-gray-200 text-gray-400'
                          }`}
                        >
                          3
                        </div>
                        <span className={`text-[10px] font-semibold mt-2 tracking-wide uppercase transition-colors duration-300 ${
                          currentStep === 3 ? 'text-brand-red' : 'text-gray-400'
                        }`}>
                          Absenden
                        </span>
                      </div>

                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="overflow-hidden">
                    <AnimatePresence mode="wait" custom={direction}>
                      
                      {currentStep === 1 && (
                        /* Step 1 Content */
                        <motion.div
                          key="step1"
                          custom={direction}
                          variants={slideVariants}
                          initial="enter"
                          animate="center"
                          exit="exit"
                          transition={{ duration: 0.35, ease: 'easeInOut' }}
                          className="space-y-6"
                        >
                          {/* Part 3: Interests */}
                          <div className="space-y-4">
                            <div className="flex items-center justify-between border-b border-gray-150/60 pb-2">
                              <h3 className="font-display font-bold text-base sm:text-lg text-brand-dark">
                                1. Ihr Interesse an*
                              </h3>
                              {errors.interests && <p className="text-xs text-red-500 font-sans font-medium">{errors.interests}</p>}
                            </div>
                            
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                              <label className="flex items-center gap-3.5 p-3.5 bg-brand-cream/30 hover:bg-brand-cream/60 rounded-xl cursor-pointer border border-brand-gold/10 transition-colors">
                                <input
                                  type="checkbox"
                                  checked={formData.interests.includes('Mitarbeitertrainings')}
                                  onChange={() => handleCheckboxChange('Mitarbeitertrainings')}
                                  className="accent-brand-red rounded h-4.5 w-4.5"
                                />
                                <span className="font-light">Mitarbeitertrainings</span>
                              </label>
                              <label className="flex items-center gap-3.5 p-3.5 bg-brand-cream/30 hover:bg-brand-cream/60 rounded-xl cursor-pointer border border-brand-gold/10 transition-colors">
                                <input
                                  type="checkbox"
                                  checked={formData.interests.includes('Workshops "Spitzenleistungen mit Spitzensportlern"')}
                                  onChange={() => handleCheckboxChange('Workshops "Spitzenleistungen mit Spitzensportlern"')}
                                  className="accent-brand-red rounded h-4.5 w-4.5"
                                />
                                <span className="font-light">Workshops "Spitzenleistungen mit Spitzensportlern"</span>
                              </label>
                              <label className="flex items-center gap-3.5 p-3.5 bg-brand-cream/30 hover:bg-brand-cream/60 rounded-xl cursor-pointer border border-brand-gold/10 transition-colors">
                                <input
                                  type="checkbox"
                                  checked={formData.interests.includes('Maßnahmen zu BGM/BGF')}
                                  onChange={() => handleCheckboxChange('Maßnahmen zu BGM/BGF')}
                                  className="accent-brand-red rounded h-4.5 w-4.5"
                                />
                                <span className="font-light">Maßnahmen zu BGM/BGF (Gesundheitsmanagement)</span>
                              </label>
                              <label className="flex items-center gap-3.5 p-3.5 bg-brand-cream/30 hover:bg-brand-cream/60 rounded-xl cursor-pointer border border-brand-gold/10 transition-colors">
                                <input
                                  type="checkbox"
                                  checked={formData.interests.includes('Anderer Bereich')}
                                  onChange={() => handleCheckboxChange('Anderer Bereich')}
                                  className="accent-brand-red rounded h-4.5 w-4.5"
                                />
                                <span className="font-light">Anderer Bereich</span>
                              </label>
                            </div>
                          </div>

                          {/* Part 4: Message */}
                          <div className="space-y-4">
                            <div className="flex items-center justify-between border-b border-gray-150/60 pb-2">
                              <h3 className="font-display font-bold text-base sm:text-lg text-brand-dark">
                                2. Ihre Nachricht*
                              </h3>
                              <span className="text-xs text-gray-400 font-sans font-light">{charsLeft} Zeichen übrig</span>
                            </div>
                            
                            <div className="space-y-1.5">
                              <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleInputChange}
                                maxLength={1000}
                                rows={6}
                                className={`w-full px-4 py-3 bg-brand-cream/30 border ${errors.message ? 'border-red-500' : 'border-gray-200'} rounded-xl focus:border-brand-red focus:ring-1 focus:ring-brand-red text-sm outline-none transition-all resize-none`}
                                placeholder="Wie können wir Ihnen helfen? Beschreiben Sie Ihr Anliegen..."
                              />
                              {errors.message && <p className="text-xs text-red-500 font-sans font-medium mt-1">{errors.message}</p>}
                            </div>
                          </div>
                        </motion.div>
                      )}

                      {currentStep === 2 && (
                        /* Step 2 Content */
                        <motion.div
                          key="step2"
                          custom={direction}
                          variants={slideVariants}
                          initial="enter"
                          animate="center"
                          exit="exit"
                          transition={{ duration: 0.35, ease: 'easeInOut' }}
                          className="space-y-6"
                        >
                          {/* Contact Person Details */}
                          <div className="space-y-4">
                            <h3 className="font-display font-bold text-base sm:text-lg text-brand-dark border-b border-gray-150/60 pb-2">
                              3. Ansprechpartner (Pflichtfelder)
                            </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                              <div className="space-y-1.5">
                                <label htmlFor="clientName" className="text-xs font-semibold text-gray-500 uppercase tracking-wider font-display">Ihr Name*</label>
                                <input
                                  type="text"
                                  id="clientName"
                                  name="clientName"
                                  value={formData.clientName}
                                  onChange={handleInputChange}
                                  className={`w-full px-4 py-3 bg-brand-cream/30 border ${errors.clientName ? 'border-red-500' : 'border-gray-200'} rounded-xl focus:border-brand-red focus:ring-1 focus:ring-brand-red text-sm outline-none transition-all`}
                                  placeholder="Vorname Nachname"
                                />
                                {errors.clientName && <p className="text-xs text-red-500 font-sans font-medium mt-1">{errors.clientName}</p>}
                              </div>
                              
                              <div className="space-y-1.5">
                                <label htmlFor="clientPhone" className="text-xs font-semibold text-gray-500 uppercase tracking-wider font-display">Telefonnummer*</label>
                                <input
                                  type="tel"
                                  id="clientPhone"
                                  name="clientPhone"
                                  value={formData.clientPhone}
                                  onChange={handleInputChange}
                                  className={`w-full px-4 py-3 bg-brand-cream/30 border ${errors.clientPhone ? 'border-red-500' : 'border-gray-200'} rounded-xl focus:border-brand-red focus:ring-1 focus:ring-brand-red text-sm outline-none transition-all`}
                                  placeholder="+49 123 456789"
                                />
                                {errors.clientPhone && <p className="text-xs text-red-500 font-sans font-medium mt-1">{errors.clientPhone}</p>}
                              </div>

                              <div className="space-y-1.5">
                                <label htmlFor="clientEmail" className="text-xs font-semibold text-gray-500 uppercase tracking-wider font-display">E-Mail-Adresse*</label>
                                <input
                                  type="email"
                                  id="clientEmail"
                                  name="clientEmail"
                                  value={formData.clientEmail}
                                  onChange={handleInputChange}
                                  className={`w-full px-4 py-3 bg-brand-cream/30 border ${errors.clientEmail ? 'border-red-500' : 'border-gray-200'} rounded-xl focus:border-brand-red focus:ring-1 focus:ring-brand-red text-sm outline-none transition-all`}
                                  placeholder="name@firma.de"
                                />
                                {errors.clientEmail && <p className="text-xs text-red-500 font-sans font-medium mt-1">{errors.clientEmail}</p>}
                              </div>
                            </div>
                          </div>

                          {/* Preference of Contact */}
                          <div className="space-y-4">
                            <h3 className="font-display font-bold text-base sm:text-lg text-brand-dark border-b border-gray-150/60 pb-2">
                              4. Bevorzugte Kontaktaufnahme
                            </h3>
                            <div className="flex gap-8 text-xs sm:text-sm">
                              <label className="flex items-center gap-3 cursor-pointer">
                                <input
                                  type="radio"
                                  name="preferredContact"
                                  value="email"
                                  checked={formData.preferredContact === 'email'}
                                  onChange={handleInputChange}
                                  className="accent-brand-red h-4.5 w-4.5"
                                />
                                <span className="font-light">Per E-Mail</span>
                              </label>
                              <label className="flex items-center gap-3 cursor-pointer">
                                <input
                                  type="radio"
                                  name="preferredContact"
                                  value="phone"
                                  checked={formData.preferredContact === 'phone'}
                                  onChange={handleInputChange}
                                  className="accent-brand-red h-4.5 w-4.5"
                                />
                                <span className="font-light">Per Telefon</span>
                              </label>
                            </div>
                          </div>

                          {/* Company Details (optional) */}
                          <div className="space-y-4">
                            <h3 className="font-display font-bold text-base sm:text-lg text-brand-dark border-b border-gray-150/60 pb-2">
                              5. Ihre Firma (optional)
                            </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                              <div className="space-y-1.5">
                                <label htmlFor="companyName" className="text-xs font-semibold text-gray-500 uppercase tracking-wider font-display">Firmenname</label>
                                <input
                                  type="text"
                                  id="companyName"
                                  name="companyName"
                                  value={formData.companyName}
                                  onChange={handleInputChange}
                                  className="w-full px-4 py-3 bg-brand-cream/30 border border-gray-200 rounded-xl focus:border-brand-red focus:ring-1 focus:ring-brand-red text-sm outline-none transition-all"
                                  placeholder="z.B. Muster GmbH"
                                />
                              </div>
                              <div className="space-y-1.5">
                                <label htmlFor="companyAddress" className="text-xs font-semibold text-gray-500 uppercase tracking-wider font-display">Firmenanschrift</label>
                                <input
                                  type="text"
                                  id="companyAddress"
                                  name="companyAddress"
                                  value={formData.companyAddress}
                                  onChange={handleInputChange}
                                  className="w-full px-4 py-3 bg-brand-cream/30 border border-gray-200 rounded-xl focus:border-brand-red focus:ring-1 focus:ring-brand-red text-sm outline-none transition-all"
                                  placeholder="Musterstraße 12, 12345 Stadt"
                                />
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}

                      {currentStep === 3 && (
                        /* Step 3 Content */
                        <motion.div
                          key="step3"
                          custom={direction}
                          variants={slideVariants}
                          initial="enter"
                          animate="center"
                          exit="exit"
                          transition={{ duration: 0.35, ease: 'easeInOut' }}
                          className="space-y-6"
                        >
                          {/* Step 3 Details */}
                          <div className="space-y-6">
                            <h3 className="font-display font-bold text-base sm:text-lg text-brand-dark border-b border-gray-150/60 pb-2">
                              6. Bestätigung & Sicherheit
                            </h3>
                            
                            {/* Privacy consent checkbox */}
                            <div className="space-y-1.5">
                              <label className="flex items-start gap-3.5 cursor-pointer">
                                <input
                                  type="checkbox"
                                  name="privacyConsent"
                                  checked={formData.privacyConsent}
                                  onChange={handleToggleChange}
                                  className="accent-brand-red rounded h-5 w-5 mt-0.5 shrink-0"
                                />
                                <span className="text-[11px] sm:text-xs text-gray-500 leading-relaxed font-sans font-light">
                                  Ich stimme zu, dass meine Angaben und Daten zur Beantwortung meiner Anfrage elektronisch erhoben und gespeichert werden. Hinweis: Sie können Ihre Einwilligung jederzeit für die Zukunft per E-Mail an <a href="mailto:info@new-frame.de" className="text-brand-red hover:underline font-semibold">info@new-frame.de</a> widerrufen. Details entnehmen Sie bitte unserer <Link to="/datenschutz" className="text-brand-red hover:underline font-semibold">Datenschutzerklärung</Link>.*
                                </span>
                              </label>
                              {errors.privacyConsent && <p className="text-xs text-red-500 font-sans font-medium mt-1">{errors.privacyConsent}</p>}
                            </div>

                            {/* CAPTCHA row */}
                            <div className="p-5 bg-brand-cream border border-brand-gold/15 rounded-2xl max-w-sm flex items-center justify-between gap-4 shadow-sm">
                              <div className="space-y-2 flex-1">
                                <label htmlFor="captchaAnswer" className="text-xs font-semibold text-brand-dark uppercase tracking-wider font-display">
                                  Spam-Schutz: Was ist {captchaNum1} + {captchaNum2}?*
                                </label>
                                <input
                                  type="number"
                                  id="captchaAnswer"
                                  name="captchaAnswer"
                                  value={formData.captchaAnswer}
                                  onChange={handleInputChange}
                                  className={`w-full px-4 py-2 bg-white border ${errors.captchaAnswer ? 'border-red-500' : 'border-gray-250'} rounded-xl focus:border-brand-red outline-none text-sm font-semibold`}
                                  placeholder="Antwort"
                                />
                                {errors.captchaAnswer && <p className="text-xs text-red-500 font-sans font-medium mt-1">{errors.captchaAnswer}</p>}
                              </div>
                              
                              <button
                                type="button"
                                onClick={generateCaptcha}
                                className="p-3 rounded-xl border border-gray-250 hover:bg-gray-100 text-gray-500 shrink-0 transition-colors focus:outline-none mt-5"
                                title="Captcha neu generieren"
                                aria-label="Captcha neu generieren"
                              >
                                <RefreshCw className="h-4.5 w-4.5" />
                              </button>
                            </div>

                          </div>
                        </motion.div>
                      )}

                    </AnimatePresence>

                    {/* Step wizard navigation buttons */}
                    <div className="pt-6 flex items-center justify-between gap-4 border-t border-gray-150/60 mt-8">
                      {currentStep > 1 ? (
                        <button
                          type="button"
                          onClick={handlePrevStep}
                          className="px-6 py-3 bg-brand-cream hover:bg-gray-150/60 text-brand-dark font-semibold rounded-xl text-xs sm:text-sm transition-colors focus:outline-none flex items-center gap-1.5 border border-brand-gold/10"
                        >
                          Zurück
                        </button>
                      ) : (
                        <div />
                      )}

                      {currentStep < 3 ? (
                        <button
                          type="button"
                          onClick={handleNextStep}
                          className="px-6 py-3 bg-brand-red hover:bg-brand-red-dark text-white font-semibold rounded-xl text-xs sm:text-sm transition-colors shadow-md focus:outline-none flex items-center gap-1.5"
                        >
                          Weiter
                        </button>
                      ) : (
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="px-6 py-3 bg-brand-red hover:bg-brand-red-dark disabled:bg-gray-400 text-white font-semibold rounded-xl text-xs sm:text-sm transition-all shadow-md flex items-center justify-center gap-2 focus:outline-none"
                        >
                          {isSubmitting ? (
                            <>
                              <RefreshCw className="h-4 w-4 animate-spin" />
                              <span>Wird gesendet...</span>
                            </>
                          ) : (
                            <>
                              <Send className="h-4 w-4" />
                              <span>Absenden</span>
                            </>
                          )}
                        </button>
                      )}
                    </div>

                  </form>
                </div>
              )}
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};
