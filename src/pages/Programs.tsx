import { Link } from 'react-router-dom';
import { ArrowRight, Cpu, Globe, Bot } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

export default function Programs() {
  const { language } = useLanguage();
  const t = translations[language].programs_page;

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
        <div className="grid grid-cols-1 gap-16">
          
          {/* ORCA Block */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 border border-slate-200 p-8 md:p-12 shadow-sm">
            <div className="md:col-span-8">
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2 bg-slate-100 rounded-full">
                  <Cpu className="w-6 h-6 text-slate-900" />
                </div>
                <h2 className="text-3xl font-serif text-slate-900">{t.orca_title}</h2>
              </div>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                {t.orca_desc}
              </p>
              <Link 
                to="/programs/orca" 
                className="inline-flex items-center px-6 py-3 bg-slate-900 text-white font-medium rounded-sm hover:bg-slate-800 transition-colors"
              >
                {t.view_details}
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
            <div className="md:col-span-4 bg-slate-100 flex items-center justify-center min-h-[200px] overflow-hidden relative">
               <img 
                  src="https://lh3.googleusercontent.com/pw/AP1GczNcDA2zO3uQSTCwt1gLlRZx0qRVwefeFXwgGUkwoExeFEeuZMXKEH7F5Yzg2Jq_mILxg-Tl--hhIUk5iDaPRpnL8AtLySEjpc0D35jBPIYFwwJenw25jC4974k73JbuBU8gc2wzJIsGArB5YaCtvQ-iHw=w1176-h882-s-no?authuser=0" 
                  alt="FTC Robot"
                  className="absolute inset-0 w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextElementSibling?.classList.remove('hidden');
                  }}
               />
               <div className="hidden w-full h-full flex items-center justify-center">
                 <Bot className="w-24 h-24 text-slate-300" />
               </div>
            </div>
          </div>

          {/* Bridge Block */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 border border-slate-200 p-8 md:p-12 shadow-sm">
            <div className="md:col-span-8">
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2 bg-slate-100 rounded-full">
                  <Globe className="w-6 h-6 text-slate-900" />
                </div>
                <h2 className="text-3xl font-serif text-slate-900">{t.bridge_title}</h2>
              </div>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                {t.bridge_desc}
              </p>
              <Link 
                to="/programs/bridge" 
                className="inline-flex items-center px-6 py-3 bg-slate-900 text-white font-medium rounded-sm hover:bg-slate-800 transition-colors"
              >
                {t.view_details}
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
            <div className="md:col-span-4 bg-slate-100 flex items-center justify-center min-h-[200px] overflow-hidden relative">
               <img 
                  src="https://lh3.googleusercontent.com/pw/AP1GczPzSJIxkmr5USOFU_zLxWS1MczHQXxio6FtvMrtSTf29lCCcIQigBNIkH_sqG7AqawdWqwxlfMiqiQL9eobG-dEyV_Q4MjBVaWcH5yyzopX1Vhrv8GLGRO2zeE7BI5bwPTDsAdj5zZhcx74KIH80y07zg=w1323-h882-s-no?authuser=0" 
                  alt="Global STEM Bridge"
                  className="absolute inset-0 w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextElementSibling?.classList.remove('hidden');
                  }}
               />
               <div className="hidden w-full h-full flex items-center justify-center">
                 <Globe className="w-24 h-24 text-slate-300" />
               </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
