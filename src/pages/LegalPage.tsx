import React, { useEffect } from 'react';
import { legalData } from '../data/legal';

interface LegalPageProps {
  type: 'impressum' | 'datenschutz' | 'agbs';
}

export const LegalPage: React.FC<LegalPageProps> = ({ type }) => {
  const doc = legalData[type];

  // Scroll to top on type change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [type]);

  if (!doc) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <p className="text-gray-500">Inhalt nicht gefunden.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      
      {/* Header Banner */}
      <section className="bg-brand-dark text-white pt-36 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(165,31,32,0.15),transparent_40%)]" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left space-y-3">
          <span className="text-brand-gold text-xs uppercase tracking-widest font-semibold px-3 py-1 bg-white/5 border border-white/10 rounded-full">
            Rechtliche Hinweise
          </span>
          <h1 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            {doc.title}
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white flex-1">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-brand-cream/30 border border-gray-100 rounded-3xl p-6 sm:p-12 shadow-sm space-y-10">
            {doc.sections.map((section, sIdx) => (
              <div key={sIdx} className="space-y-4">
                
                {/* Render Heading if exists */}
                {section.heading && (
                  <h2 className="font-display font-bold text-xl sm:text-2xl text-brand-dark border-b border-gray-100 pb-2">
                    {section.heading}
                  </h2>
                )}

                {/* Render Paragraphs */}
                <div className="space-y-3 font-sans text-gray-600 text-sm sm:text-base leading-relaxed">
                  {section.paragraphs.map((p, pIdx) => {
                    // Check if it looks like a list or has bold elements
                    const isList = p.startsWith('- ');
                    if (isList) {
                      return (
                        <ul key={pIdx} className="list-disc pl-5 space-y-1 text-xs sm:text-sm">
                          <li>{p.replace('- ', '')}</li>
                        </ul>
                      );
                    }
                    return (
                      <p key={pIdx}>
                        {p}
                      </p>
                    );
                  })}
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};
