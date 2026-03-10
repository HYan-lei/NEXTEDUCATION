import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Globe, CheckCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

export default function BridgeProgram() {
  const { language } = useLanguage();
  const t = translations[language].bridge_program;

  return (
    <div className="bg-white">
      {/* Hero */}
      <div className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-4 mb-6">
            <Globe className="w-8 h-8 text-slate-300" />
            <span className="text-slate-300 font-medium tracking-wider uppercase text-sm">{t.focus}</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-serif mb-6">{t.title}</h1>
          <p className="text-xl text-slate-300 max-w-3xl font-light leading-relaxed">
            {t.subtitle}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-16">
            <section>
              <h2 className="text-2xl font-serif text-slate-900 mb-6">{t.overview_title}</h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                {t.overview_text1}
              </p>
              <p className="text-slate-600 leading-relaxed">
                {t.overview_text2}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-slate-900 mb-6">{t.activities_title}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-slate-50 p-6 rounded-sm border border-slate-100">
                  <h3 className="font-bold text-slate-900 mb-2">{t.activity1_title}</h3>
                  <p className="text-sm text-slate-600">{t.activity1_desc}</p>
                </div>
                <div className="bg-slate-50 p-6 rounded-sm border border-slate-100">
                  <h3 className="font-bold text-slate-900 mb-2">{t.activity2_title}</h3>
                  <p className="text-sm text-slate-600">{t.activity2_desc}</p>
                </div>
                <div className="bg-slate-50 p-6 rounded-sm border border-slate-100">
                  <h3 className="font-bold text-slate-900 mb-2">{t.activity3_title}</h3>
                  <p className="text-sm text-slate-600">{t.activity3_desc}</p>
                </div>
                <div className="bg-slate-50 p-6 rounded-sm border border-slate-100">
                  <h3 className="font-bold text-slate-900 mb-2">{t.activity4_title}</h3>
                  <p className="text-sm text-slate-600">{t.activity4_desc}</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-slate-900 mb-6">{t.outcomes_title}</h2>
              <ul className="space-y-4">
                {t.outcomes.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-slate-900 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-600">{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-slate-50 p-8 border border-slate-200 sticky top-24">
              <h3 className="font-serif text-xl text-slate-900 mb-6">{t.sidebar_title}</h3>
              
              <div className="mb-8">
                <h4 className="font-bold text-xs uppercase tracking-wider text-slate-500 mb-2">{t.who_title}</h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {t.who_desc}
                </p>
              </div>

              <div className="mb-8">
                <h4 className="font-bold text-xs uppercase tracking-wider text-slate-500 mb-2">{t.format_title}</h4>
                <p className="text-sm text-slate-600">{t.format_desc}</p>
              </div>

              <Link 
                to="/partners" 
                className="block w-full text-center px-6 py-3 bg-slate-900 text-white font-medium rounded-sm hover:bg-slate-800 transition-colors"
              >
                {t.cta}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
