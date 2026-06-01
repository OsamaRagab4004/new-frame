import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { newsArticles } from '../data/news';
import { Calendar, ArrowRight, Filter } from 'lucide-react';

export const NewsList: React.FC = () => {
  const [selectedYear, setSelectedYear] = useState<string>('All');

  // Parse years from the dates
  const years = ['All', '2022', '2020', '2019', '2017', '2015'];

  const filteredArticles = selectedYear === 'All'
    ? newsArticles
    : newsArticles.filter(article => article.date.includes(selectedYear));

  return (
    <div className="flex flex-col min-h-screen">
      
      {/* Header Banner */}
      <section className="bg-brand-dark text-white pt-36 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(165,31,32,0.2),transparent_50%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <span className="text-brand-gold text-xs uppercase tracking-widest font-semibold px-3.5 py-1.5 bg-white/5 border border-white/10 rounded-full">
            Neuigkeiten & Einblicke
          </span>
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight">
            Aktuelles
          </h1>
          <p className="text-gray-400 max-w-xl mx-auto text-sm sm:text-base lg:text-lg font-light font-sans">
            Berichte, Veranstaltungen, Fachvorträge und Coaching-Konzepte von new-frame.
          </p>
        </div>
      </section>

      {/* Articles Listing */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Year Filter Controls */}
          <div className="flex items-center justify-between gap-6 border-b border-gray-150/60 pb-8 flex-wrap">
            <div className="flex items-center gap-2.5 text-brand-dark font-display font-bold text-base">
              <Filter className="h-5 w-5 text-brand-red" />
              <span>Archiv filtern:</span>
            </div>
            
            <div className="flex overflow-x-auto gap-2 pb-2 md:pb-0 scrollbar-none -mx-4 px-4 md:mx-0 md:px-0">
              {years.map((year) => (
                <button
                  key={year}
                  onClick={() => setSelectedYear(year)}
                  className={`px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-semibold tracking-wide transition-all focus:outline-none shrink-0 ${
                    selectedYear === year
                      ? 'bg-brand-red text-white shadow-md shadow-brand-red/10'
                      : 'bg-brand-cream text-brand-dark hover:bg-gray-150/60'
                  }`}
                >
                  {year === 'All' ? 'Alle Beiträge' : year}
                </button>
              ))}
            </div>
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <AnimatePresence mode="popLayout">
              {filteredArticles.map((article, idx) => (
                <motion.article
                  key={article.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.35, delay: idx * 0.05 }}
                  className="bg-brand-cream/35 border border-brand-gold/10 rounded-[2rem] overflow-hidden shadow-sm flex flex-col justify-between h-full hover:shadow-lg transition-all duration-300"
                >
                  <div>
                    {/* Header Image or Gradient placeholder */}
                    <div className="relative h-56 overflow-hidden bg-gradient-to-br from-brand-red-dark to-brand-red flex items-center justify-center">
                      {article.image ? (
                        <img
                          src={article.image}
                          alt={article.title}
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-103"
                        />
                      ) : (
                        <div className="text-white/15 font-display font-extrabold text-5xl select-none tracking-tight">
                          new-frame
                        </div>
                      )}
                      
                      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-brand-dark text-[10px] sm:text-xs font-bold px-3 py-1.5 rounded-xl flex items-center gap-1.5 shadow-sm">
                        <Calendar className="h-4 w-4 text-brand-red shrink-0" />
                        <span>{article.date}</span>
                      </div>
                    </div>

                    {/* Article Excerpt Content */}
                    <div className="p-8 space-y-4">
                      <h3 className="font-display font-bold text-xl sm:text-2xl text-brand-dark leading-snug line-clamp-2">
                        {article.title}
                      </h3>
                      <p className="text-gray-500 text-sm leading-relaxed font-sans font-light line-clamp-3">
                        {article.excerpt}
                      </p>
                    </div>
                  </div>

                  {/* Read More link */}
                  <div className="p-8 pt-0 border-t border-gray-150/40 mt-4">
                    <Link
                      to={`/aktuelles/${article.slug}`}
                      className="inline-flex items-center gap-2 text-brand-red hover:text-brand-red-dark font-semibold text-sm group transition-colors"
                    >
                      <span>Mehr lesen</span>
                      <ArrowRight className="h-4.5 w-4.5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>

                </motion.article>
              ))}
            </AnimatePresence>
          </div>

          {/* Empty state */}
          {filteredArticles.length === 0 && (
            <div className="text-center py-24 bg-brand-cream/30 rounded-3xl border border-dashed border-brand-gold/20">
              <p className="text-gray-500 text-base font-light">Keine Beiträge für dieses Jahr gefunden.</p>
            </div>
          )}

        </div>
      </section>

    </div>
  );
};
