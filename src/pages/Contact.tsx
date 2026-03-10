import { motion } from 'motion/react';
import { Mail, MapPin, Phone } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

export default function Contact() {
  const { language } = useLanguage();
  const t = translations[language].contact;

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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-serif text-slate-900 mb-8">{t.general_title}</h2>
            <div className="space-y-8">
              <div className="flex items-start">
                <Mail className="w-6 h-6 text-slate-900 mr-4 mt-1" />
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">{t.email_label}</h3>
                  <p className="text-slate-600 mb-1">{t.general_q}</p>
                  <a href="mailto:info@nexteducationglobal.org" className="text-slate-900 font-medium hover:underline">info@nexteducationglobal.org</a>
                  <p className="text-slate-600 mt-2 mb-1">{t.partner_q}</p>
                  <a href="mailto:partners@nexteducationglobal.org" className="text-slate-900 font-medium hover:underline">partners@nexteducationglobal.org</a>
                </div>
              </div>

              <div className="flex items-start">
                <MapPin className="w-6 h-6 text-slate-900 mr-4 mt-1" />
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">{t.location_label}</h3>
                  <p className="text-slate-600 whitespace-pre-line">
                    {t.location_text}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 p-6 bg-slate-50 border border-slate-200">
              <h3 className="font-serif text-lg text-slate-900 mb-2">{t.student_note_title}</h3>
              <p className="text-sm text-slate-600">
                {t.student_note_text}
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white border border-slate-200 p-8 shadow-sm">
            <h2 className="text-2xl font-serif text-slate-900 mb-6">{t.form_title}</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-slate-700 mb-1">{t.form_first}</label>
                  <input type="text" id="firstName" className="w-full px-4 py-2 border border-slate-300 rounded-sm focus:ring-1 focus:ring-slate-900 focus:border-slate-900 outline-none transition-colors" />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-slate-700 mb-1">{t.form_last}</label>
                  <input type="text" id="lastName" className="w-full px-4 py-2 border border-slate-300 rounded-sm focus:ring-1 focus:ring-slate-900 focus:border-slate-900 outline-none transition-colors" />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">{t.form_email}</label>
                <input type="email" id="email" className="w-full px-4 py-2 border border-slate-300 rounded-sm focus:ring-1 focus:ring-slate-900 focus:border-slate-900 outline-none transition-colors" />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-1">{t.form_subject}</label>
                <select id="subject" className="w-full px-4 py-2 border border-slate-300 rounded-sm focus:ring-1 focus:ring-slate-900 focus:border-slate-900 outline-none transition-colors bg-white">
                  <option>General Inquiry</option>
                  <option>Institutional Partnership</option>
                  <option>Program Application</option>
                  <option>Media / Press</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">{t.form_message}</label>
                <textarea id="message" rows={4} className="w-full px-4 py-2 border border-slate-300 rounded-sm focus:ring-1 focus:ring-slate-900 focus:border-slate-900 outline-none transition-colors"></textarea>
              </div>

              <button type="submit" className="w-full px-6 py-3 bg-slate-900 text-white font-medium rounded-sm hover:bg-slate-800 transition-colors">
                {t.form_submit}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
