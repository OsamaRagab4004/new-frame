import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { newsArticles } from '../data/news';
import { Calendar, ArrowLeft, Download, FileText, Image as ImageIcon } from 'lucide-react';
import { motion } from 'framer-motion';

export const NewsDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  
  const article = newsArticles.find(item => item.slug === slug);

  // Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-brand-cream/30 pt-20">
        <div className="text-center space-y-4">
          <h2 className="font-display font-bold text-2xl text-brand-dark">Artikel nicht gefunden</h2>
          <p className="text-gray-500 text-sm font-sans">Der gesuchte Newsbeitrag existiert leider nicht.</p>
          <Link
            to="/aktuelles"
            className="inline-flex items-center gap-2 px-6 py-3 bg-brand-red hover:bg-brand-red-dark text-white font-semibold rounded-2xl text-sm transition-colors"
          >
            <ArrowLeft className="h-4.5 w-4.5" />
            <span>Zurück zur Übersicht</span>
          </Link>
        </div>
      </div>
    );
  }

  // Simple Markdown-to-React text parser for bold tags, lists and linebreaks
  const renderTextContent = (text: string) => {
    return text.split('\n\n').map((paragraph, idx) => {
      // Check if it's a heading
      if (paragraph.startsWith('### ')) {
        return (
          <h3 key={idx} className="font-display font-bold text-xl text-brand-dark mt-8 mb-3">
            {paragraph.replace('### ', '')}
          </h3>
        );
      }
      if (paragraph.startsWith('## ')) {
        return (
          <h2 key={idx} className="font-display font-extrabold text-2xl sm:text-3xl text-brand-dark mt-10 mb-4 border-b border-gray-150/60 pb-2">
            {paragraph.replace('## ', '')}
          </h2>
        );
      }
      
      // Check if it has markdown links [text](url)
      const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
      
      // Simple inline bold parser **text**
      const boldRegex = /\*\*([^*]+)\*\*/g;

      let htmlContent = paragraph
        .replace(boldRegex, '<strong>$1</strong>')
        .replace(linkRegex, '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-brand-red hover:text-brand-red-dark hover:underline font-semibold transition-colors">$1</a>');

      return (
        <p
          key={idx}
          className="text-gray-600 leading-relaxed font-sans text-base sm:text-lg font-light"
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        />
      );
    });
  };

  return (
    <div className="flex flex-col min-h-screen">
      
      {/* Article Header */}
      <section className="bg-brand-dark text-white pt-36 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(165,31,32,0.2),transparent_50%)]" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
          <Link
            to="/aktuelles"
            className="inline-flex items-center gap-2 text-xs sm:text-sm text-brand-gold hover:text-white transition-colors duration-200"
          >
            <ArrowLeft className="h-4.5 w-4.5" />
            <span>Zurück zur Übersicht</span>
          </Link>
          
          <div className="flex items-center gap-2 text-brand-gold/90 text-xs sm:text-sm font-semibold">
            <Calendar className="h-4 w-4" />
            <span>{article.date}</span>
          </div>

          <h1 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
            {article.title}
          </h1>
        </div>
      </section>

      {/* Article Content Layout */}
      <section className="py-20 bg-white flex-1">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-brand-gold/10 rounded-[2.5rem] p-6 sm:p-12 shadow-xl shadow-brand-dark/5 space-y-10">
            
            {/* Featured Image if present */}
            {article.image && (
              <div className="rounded-[2rem] overflow-hidden shadow-md border border-gray-100 max-h-[500px]">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            {/* Article Text Content */}
            <div className="space-y-6">
              {renderTextContent(article.content)}
            </div>

            {/* PDF Attachment Download Card */}
            {article.pdfLink && (
              <div className="p-6 bg-brand-cream border border-brand-gold/15 rounded-[1.5rem] flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm mt-8">
                <div className="flex items-center gap-3.5">
                  <div className="p-3 bg-brand-red/10 text-brand-red rounded-2xl shrink-0">
                    <FileText className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-brand-dark text-base">
                      Zugehöriges Dokument
                    </h4>
                    <p className="text-xs text-gray-500 mt-0.5 font-sans font-light leading-relaxed">
                      Laden Sie weitere Informationen zu diesem Beitrag als PDF-Datei herunter.
                    </p>
                  </div>
                </div>
                
                <a
                  href={article.pdfLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-brand-red hover:bg-brand-red-dark text-white font-semibold text-xs sm:text-sm rounded-xl shadow-md transition-colors shrink-0"
                >
                  <Download className="h-4 w-4" />
                  <span>PDF herunterladen</span>
                </a>
              </div>
            )}

            {/* Photo Gallery (for Chinese trip or KickOff event) */}
            {article.images && article.images.length > 0 && (
              <div className="pt-10 border-t border-gray-150/60 space-y-6">
                <div className="flex items-center gap-2 text-brand-dark font-display font-bold text-lg">
                  <ImageIcon className="h-5 w-5 text-brand-red" />
                  <span>Bildergalerie</span>
                </div>
                
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {article.images.map((imgUrl, imgIdx) => (
                    <motion.div
                      key={imgIdx}
                      whileHover={{ scale: 1.03 }}
                      className="rounded-2xl overflow-hidden shadow-sm border border-brand-gold/10 aspect-square bg-gray-50"
                    >
                      <a href={imgUrl} target="_blank" rel="noopener noreferrer">
                        <img
                          src={imgUrl}
                          alt={`${article.title} Impression ${imgIdx + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </a>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {/* Back Button */}
            <div className="pt-10 border-t border-gray-150/60 flex items-center justify-start">
              <button
                onClick={() => navigate('/aktuelles')}
                className="inline-flex items-center gap-2 px-5 py-3 border border-gray-200 hover:bg-gray-50 text-brand-dark font-semibold rounded-xl text-xs sm:text-sm transition-all shadow-sm"
              >
                <ArrowLeft className="h-4.5 w-4.5" />
                <span>Zurück zur Übersicht</span>
              </button>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};
