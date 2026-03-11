import { motion } from 'motion/react';
import { Award, BookOpen, Cpu, Globe, GraduationCap, Star, Atom } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

export default function Founders() {
  const { language } = useLanguage();
  const t = translations[language].founders;

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-hero-gradient text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-serif mb-6">{t.title}</h1>
            <p className="text-xl text-slate-300 max-w-3xl font-light leading-relaxed">
              {t.subtitle}
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 gap-16">
          
          {/* Christopher Wang */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden"
          >
            <div className="grid grid-cols-1 md:grid-cols-12">
              <div className="md:col-span-4 bg-subtle-gradient min-h-[300px] flex items-center justify-center relative group overflow-hidden">
                <img 
                  src="https://lh3.googleusercontent.com/pw/AP1GczOeMxjSHrXrGk9XbvQBgevme7AZjrLW3NqdjvTEOKfUallCW6q5zDfWLxeAJEmxYhys8BrtNqvXMvUA6AFO-IgEJ06_-EUcduWGRLglk9nfiTX0UmyF_Xib7atBSZBMTqmdZgYYbGou9d92i-BBOG_3IA=w662-h882-s-no?authuser=0" 
                  alt={t.chris.name}
                  className="absolute inset-0 w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextElementSibling?.classList.remove('hidden');
                  }}
                />
                <div className="text-center hidden w-full h-full flex flex-col items-center justify-center z-10">
                  <div className="w-32 h-32 bg-slate-200 rounded-full mx-auto mb-4 flex items-center justify-center text-4xl font-serif text-slate-400">
                    CW
                  </div>
                  <p className="text-sm text-slate-500 uppercase tracking-widest">{language === 'en' ? 'Co-Founder' : '联合创始人'}</p>
                </div>
              </div>
              <div className="md:col-span-8 p-8 md:p-12">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                  <div>
                    <h2 className="text-3xl font-serif text-slate-900 mb-1">{t.chris.name}</h2>
                    <h3 className="text-lg text-slate-500 font-medium">{t.chris.chineseName}</h3>
                  </div>
                  <div className="mt-4 md:mt-0 inline-flex items-center px-4 py-2 bg-slate-50 text-slate-700 rounded-full text-sm font-medium border border-slate-200">
                    <GraduationCap className="w-4 h-4 mr-2" />
                    {t.chris.school}
                  </div>
                </div>
                
                <p className="text-slate-600 leading-relaxed mb-8">
                  {t.chris.bio}
                </p>

                <div className="grid grid-cols-1 gap-4">

                  {/* ===== NEW: USAPHO (FIRST, same style as other items) ===== */}
                  <div className="flex items-start p-4 bg-slate-50 rounded-xl border border-slate-100">
                    <Award className="w-5 h-5 text-slate-900 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-slate-700 font-medium">
                        {language === 'en'
                          ? "USA Physics Olympiad (USAPHO) Qualifier — Christopher Wang"
                          : "美国物理奥林匹克（USAPHO）资格赛入围 — 王皓宇"}
                      </p>
                    </div>
                  </div>

                  {/* FTC */}
                  <div className="flex items-start p-4 bg-slate-50 rounded-xl border border-slate-100">
                    <Cpu className="w-5 h-5 text-slate-900 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-slate-700 font-medium">{t.chris.role1}</p>
                    </div>
                  </div>
                  <div className="flex items-start p-4 bg-slate-50 rounded-xl border border-slate-100">
                    <Award className="w-5 h-5 text-slate-900 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-slate-700 font-medium">{t.chris.role2}</p>
                    </div>
                  </div>
                  <div className="flex items-start p-4 bg-slate-50 rounded-xl border border-slate-100">
                    <BookOpen className="w-5 h-5 text-slate-900 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-slate-700 font-medium">{t.chris.role3}</p>
                    </div>
                  </div>
                  <div className="flex items-start p-4 bg-slate-50 rounded-xl border border-slate-100">
                    <Atom className="w-5 h-5 text-slate-900 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-slate-700 font-medium">{t.chris.role4}</p>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </motion.div>

          {/* Sophia Wang */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden"
          >
            <div className="grid grid-cols-1 md:grid-cols-12">
              <div className="md:col-span-4 bg-subtle-gradient min-h-[300px] flex items-center justify-center order-1 md:order-2 overflow-hidden relative">
                <img 
                  src="https://lh3.googleusercontent.com/pw/AP1GczPiy8Ocb5nlo4A8PLsrTAGsWN8PnHcBaiQQiPjneBN_IymRmyyQlH6CseQgPYTTWsc5gAWVIiVtwPbIfCDz3iLZOn175OZkpO5M_dg4fhIy7BrQp0BwT7UhftMO2OhtSqujxU-wo-ggTv2Vpk9eoBDVWQ=w662-h882-s-no?authuser=0" 
                  alt={t.sophia.name}
                  className="absolute inset-0 w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextElementSibling?.classList.remove('hidden');
                  }}
                />
                <div className="text-center hidden w-full h-full flex flex-col items-center justify-center z-10">
                  <div className="w-32 h-32 bg-slate-200 rounded-full mx-auto mb-4 flex items-center justify-center text-4xl font-serif text-slate-400">
                    SW
                  </div>
                  <p className="text-sm text-slate-500 uppercase tracking-widest">{language === 'en' ? 'Co-Founder' : '联合创始人'}</p>
                </div>
              </div>
              <div className="md:col-span-8 p-8 md:p-12 order-2 md:order-1">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                  <div>
                    <h2 className="text-3xl font-serif text-slate-900 mb-1">{t.sophia.name}</h2>
                    <h3 className="text-lg text-slate-500 font-medium">{t.sophia.chineseName}</h3>
                  </div>
                  <div className="mt-4 md:mt-0 inline-flex items-center px-4 py-2 bg-slate-50 text-slate-700 rounded-full text-sm font-medium border border-slate-200">
                    <GraduationCap className="w-4 h-4 mr-2" />
                    {t.sophia.school}
                  </div>
                </div>
                
                <p className="text-slate-600 leading-relaxed mb-8">
                  {t.sophia.bio}
                </p>

                <div className="grid grid-cols-1 gap-4">
                  <div className="flex items-start p-4 bg-slate-50 rounded-xl border border-slate-100">
                    <Cpu className="w-5 h-5 text-slate-900 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-slate-700 font-medium">{t.sophia.role1}</p>
                    </div>
                  </div>
                  <div className="flex items-start p-4 bg-slate-50 rounded-xl border border-slate-100">
                    <Award className="w-5 h-5 text-slate-900 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-slate-700 font-medium">{t.sophia.role2}</p>
                    </div>
                  </div>
                  <div className="flex items-start p-4 bg-slate-50 rounded-xl border border-slate-100">
                    <Globe className="w-5 h-5 text-slate-900 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-slate-700 font-medium">{t.sophia.role3}</p>
                    </div>
                  </div>
                  <div className="flex items-start p-4 bg-slate-50 rounded-xl border border-slate-100">
                    <Star className="w-5 h-5 text-slate-900 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-slate-700 font-medium">{t.sophia.role4}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
