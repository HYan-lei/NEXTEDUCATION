import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Building2, Users, CheckSquare, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

export default function Partners() {
  const { language } = useLanguage();
  const t = translations[language].partners;

  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-slate-50 py-16 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-serif text-slate-900 mb-6">{t.title}</h1>
          <p className="text-xl text-slate-600 max-w-3xl font-light">
            {t.subtitle}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Main Content */}
          <div className="lg:col-span-8">
            <section className="mb-16">
              <h2 className="text-2xl font-serif text-slate-900 mb-6">{t.why_title}</h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                {t.why_text1}
              </p>
              <p className="text-slate-600 leading-relaxed">
                {t.why_text2}
              </p>
            </section>

            <section className="mb-16">
              <h2 className="text-2xl font-serif text-slate-900 mb-6">{t.roles_title}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border border-slate-200 p-6 rounded-sm">
                  <Building2 className="w-8 h-8 text-slate-900 mb-4" />
                  <h3 className="font-bold text-slate-900 mb-2">{t.role_school}</h3>
                  <p className="text-sm text-slate-600">{t.role_school_desc}</p>
                </div>
                <div className="border border-slate-200 p-6 rounded-sm">
                  <Users className="w-8 h-8 text-slate-900 mb-4" />
                  <h3 className="font-bold text-slate-900 mb-2">{t.role_agency}</h3>
                  <p className="text-sm text-slate-600">{t.role_agency_desc}</p>
                </div>
              </div>
            </section>

            <section className="mb-16">
              <h2 className="text-2xl font-serif text-slate-900 mb-6">{t.framework_title}</h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3">{t.provide_title}</h3>
                  <ul className="grid grid-cols-1 gap-3">
                    {t.provide_list.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <CheckSquare className="w-5 h-5 text-slate-900 mr-3 mt-0.5" />
                        <span className="text-slate-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3">{t.ask_title}</h3>
                  <ul className="grid grid-cols-1 gap-3">
                    {t.ask_list.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <CheckSquare className="w-5 h-5 text-slate-900 mr-3 mt-0.5" />
                        <span className="text-slate-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>
          </div>

          {/* Contact Form / CTA */}
          <div className="lg:col-span-4">
            <div className="bg-slate-900 text-white p-8 rounded-sm sticky top-24">
              <h3 className="font-serif text-2xl mb-4">{t.cta_title}</h3>
              <p className="text-slate-300 text-sm mb-8">
                {t.cta_text}
              </p>
              
              <Link 
                to="/contact" 
                className="w-full inline-flex justify-center items-center px-6 py-4 bg-white text-slate-900 font-medium rounded-sm hover:bg-slate-100 transition-colors mb-4"
              >
                {t.cta_button}
              </Link>
              
              <p className="text-xs text-slate-400 text-center">
                {t.cta_note}
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
