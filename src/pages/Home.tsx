import { motion } from 'motion/react';
import { ArrowRight, Globe, Cpu, Users, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

export default function Home() {
  const { language } = useLanguage();
  const t = translations[language].home;

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-hero-gradient text-white py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-900/50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <h1 className="text-5xl md:text-7xl font-serif font-medium leading-tight mb-8 tracking-tight">
              {language === 'en' ? (
                <>Empowering the Next Generation of <span className="text-gradient-gold">Global Leaders</span></>
              ) : (
                t.hero.title
              )}
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-10 font-light leading-relaxed max-w-2xl">
              {t.hero.subtitle}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                to="/programs" 
                className="inline-flex items-center px-8 py-4 bg-white text-slate-900 font-medium rounded-sm hover:bg-slate-100 transition-all shadow-lg shadow-slate-900/20 hover:shadow-xl hover:-translate-y-0.5"
              >
                {t.hero.cta_programs}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link 
                to="/partners" 
                className="inline-flex items-center px-8 py-4 border border-slate-500 text-white font-medium rounded-sm hover:bg-white/10 transition-colors backdrop-blur-sm"
              >
                {t.hero.cta_partners}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-subtle-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-slate-900/5 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-start">
            <div className="md:col-span-4 sticky top-24">
              <h2 className="text-4xl font-serif text-slate-900 mb-6">{t.mission.title}</h2>
              <div className="h-1 w-24 bg-slate-900 mb-6"></div>
              <p className="text-slate-500 text-lg font-light italic">
                "Bridging technical excellence with global citizenship."
              </p>
            </div>
            <div className="md:col-span-8">
              <p className="text-2xl text-slate-700 leading-relaxed font-light mb-16">
                {t.mission.text}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-12">
                <div className="flex flex-col group">
                  <div className="w-16 h-16 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center mb-6 group-hover:shadow-md transition-shadow">
                    <Cpu className="w-8 h-8 text-slate-900" />
                  </div>
                  <h3 className="font-bold text-sm uppercase tracking-wider mb-3 text-slate-900">{t.mission.tech}</h3>
                  <p className="text-slate-600 leading-relaxed">{t.mission.tech_desc}</p>
                </div>
                <div className="flex flex-col group">
                  <div className="w-16 h-16 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center mb-6 group-hover:shadow-md transition-shadow">
                    <Globe className="w-8 h-8 text-slate-900" />
                  </div>
                  <h3 className="font-bold text-sm uppercase tracking-wider mb-3 text-slate-900">{t.mission.global}</h3>
                  <p className="text-slate-600 leading-relaxed">{t.mission.global_desc}</p>
                </div>
                <div className="flex flex-col group">
                  <div className="w-16 h-16 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center mb-6 group-hover:shadow-md transition-shadow">
                    <Users className="w-8 h-8 text-slate-900" />
                  </div>
                  <h3 className="font-bold text-sm uppercase tracking-wider mb-3 text-slate-900">{t.mission.lead}</h3>
                  <p className="text-slate-600 leading-relaxed">{t.mission.lead_desc}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif text-slate-900 mb-4">{t.programs.title}</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              {t.programs.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* FTC ORCA */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white p-8 md:p-12 border border-slate-200 shadow-sm flex flex-col"
            >
              <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center mb-6">
                <Cpu className="w-6 h-6 text-slate-900" />
              </div>
              <h3 className="text-2xl font-serif text-slate-900 mb-4">FTC ORCA ROBOTICS</h3>
              <p className="text-slate-600 mb-8 flex-grow leading-relaxed">
                {t.programs.orca_desc}
              </p>
              <Link 
                to="/programs/orca" 
                className="inline-flex items-center text-slate-900 font-medium hover:text-slate-700 group"
              >
                {t.programs.learn_more_orca}
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>

            {/* Global STEM Bridge */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white p-8 md:p-12 border border-slate-200 shadow-sm flex flex-col"
            >
              <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center mb-6">
                <Globe className="w-6 h-6 text-slate-900" />
              </div>
              <h3 className="text-2xl font-serif text-slate-900 mb-4">Global STEM Bridge</h3>
              <p className="text-slate-600 mb-8 flex-grow leading-relaxed">
                {t.programs.bridge_desc}
              </p>
              <Link 
                to="/programs/bridge" 
                className="inline-flex items-center text-slate-900 font-medium hover:text-slate-700 group"
              >
                {t.programs.learn_more_bridge}
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Institutional Collaboration */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <GraduationCap className="w-12 h-12 mx-auto mb-6 text-slate-300" />
          <h2 className="text-3xl md:text-4xl font-serif mb-6">{t.collaboration.title}</h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            {t.collaboration.text}
          </p>
          <Link 
            to="/partners" 
            className="inline-block px-8 py-4 bg-white text-slate-900 font-medium rounded-sm hover:bg-slate-100 transition-colors"
          >
            {t.collaboration.cta}
          </Link>
        </div>
      </section>
    </div>
  );
}
