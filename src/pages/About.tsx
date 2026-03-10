import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

export default function About() {
  const { language } = useLanguage();
  const t = translations[language].about;

  return (
    <div className="bg-white">
      <div className="bg-slate-50 py-16 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-serif text-slate-900 mb-6">{t.title}</h1>
          <p className="text-xl text-slate-600 max-w-3xl font-light">
            {t.subtitle}
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="prose prose-lg prose-slate max-w-none">
          <section className="mb-16">
            <h2 className="text-2xl font-serif text-slate-900 mb-4">{t.story_title}</h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              {t.story_text1}
            </p>
            <p className="text-slate-600 leading-relaxed">
              {t.story_text2}
            </p>
          </section>

          <section className="mb-16">
            <h2 className="text-2xl font-serif text-slate-900 mb-4">{t.philosophy_title}</h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              {t.philosophy_text}
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600">
              {t.philosophy_points.map((point, i) => (
                <li key={i}><strong>{point.title}</strong> {point.desc}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-slate-900 mb-4">{t.leadership_title}</h2>
            <p className="text-slate-600 leading-relaxed">
              {t.leadership_text}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
