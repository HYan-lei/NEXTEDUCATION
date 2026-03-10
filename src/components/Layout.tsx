import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';
import { useState, useEffect, ReactNode } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

export default function Layout({ children }: { children: ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { language, setLanguage } = useLanguage();
  const t = translations[language].nav;

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: t.home, path: '/' },
    { name: t.about, path: '/about' },
    { name: t.founders, path: '/founders' },
    { name: t.programs, path: '/programs' },
    { name: t.partners, path: '/partners' },
    { name: t.contact, path: '/contact' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200/60 supports-[backdrop-filter]:bg-white/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-slate-900 flex items-center justify-center rounded-sm">
                <span className="text-white font-serif font-bold text-xl">N</span>
              </div>
              <div className="flex flex-col">
                <span className="font-serif font-bold text-lg leading-none tracking-tight text-slate-900">NEXT EDUCATION</span>
                <span className="text-[10px] uppercase tracking-widest text-slate-500 font-medium">Est. 2025</span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8">
              <nav className="flex space-x-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`text-sm font-medium transition-colors duration-200 ${
                      location.pathname === link.path
                        ? 'text-slate-900 border-b-2 border-slate-900'
                        : 'text-slate-500 hover:text-slate-900'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
              
              {/* Language Switcher */}
              <div className="flex items-center space-x-2 border-l border-slate-200 pl-6">
                <button 
                  onClick={() => setLanguage('en')}
                  className={`text-xs font-medium px-2 py-1 rounded-sm transition-colors ${language === 'en' ? 'bg-slate-900 text-white' : 'text-slate-500 hover:text-slate-900'}`}
                >
                  EN
                </button>
                <button 
                  onClick={() => setLanguage('zh')}
                  className={`text-xs font-medium px-2 py-1 rounded-sm transition-colors ${language === 'zh' ? 'bg-slate-900 text-white' : 'text-slate-500 hover:text-slate-900'}`}
                >
                  中文
                </button>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-4">
              <button 
                onClick={() => setLanguage(language === 'en' ? 'zh' : 'en')}
                className="text-slate-600 font-medium text-sm flex items-center"
              >
                <Globe className="w-4 h-4 mr-1" />
                {language === 'en' ? 'ZH' : 'EN'}
              </button>
              <button
                className="p-2 text-slate-600 hover:text-slate-900"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-b border-slate-100 overflow-hidden"
            >
              <nav className="flex flex-col px-4 py-4 space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`text-base font-medium ${
                      location.pathname === link.path ? 'text-slate-900' : 'text-slate-500'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main className="flex-grow">
        {children}
      </main>

      <footer className="bg-slate-50 border-t border-slate-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <h3 className="font-serif font-bold text-lg text-slate-900 mb-4">NEXT EDUCATION, INC.</h3>
              <p className="text-slate-600 text-sm max-w-md leading-relaxed">
                {language === 'en' 
                  ? 'A student-founded nonprofit advancing global STEM education and leadership development through high-level competition and cross-cultural exchange.'
                  : '一个由学生创立的非营利组织，通过高水平的竞赛和跨文化交流，推动全球STEM教育和领导力发展。'}
              </p>
            </div>
            <div>
              <h4 className="font-bold text-sm uppercase tracking-wider text-slate-900 mb-4">{t.programs}</h4>
              <ul className="space-y-2 text-sm text-slate-600">
                <li><Link to="/programs/orca" className="hover:text-slate-900">FTC ORCA ROBOTICS</Link></li>
                <li><Link to="/programs/bridge" className="hover:text-slate-900">Global STEM Bridge</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-sm uppercase tracking-wider text-slate-900 mb-4">{t.contact}</h4>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>contact@nexteducationglobal.org</li>
                <li>Rockville, Maryland</li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
            <p>&copy; {new Date().getFullYear()} Next Education, Inc. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <span>{language === 'en' ? 'Privacy Policy' : '隐私政策'}</span>
              <span>{language === 'en' ? 'Terms of Service' : '服务条款'}</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
