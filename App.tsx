
import React, { useEffect, useState, createContext, useContext } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, AlertCircle, ExternalLink } from 'lucide-react';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import CalculatorPage from './pages/CalculatorPage';
import EnquiryPage from './pages/EnquiryPage';
import BrokersPage from './pages/BrokersPage';
import ContactPage from './pages/ContactPage';
import FAQPage from './pages/FAQPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import CreditGuidePage from './pages/CreditGuidePage';

// --- Language & Internationalization System ---

export type Language = 'en' | 'zh' | 'es' | 'vi' | 'hi';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    nav_home: 'Home',
    nav_about: 'About',
    nav_services: 'Services',
    nav_calc: 'Calculator',
    nav_enquiry: 'Enquiry',
    nav_brokers: 'Brokers',
    nav_contact: 'Contact',
    btn_get_started: 'Get Started',
    footer_tagline: '"Clear Advice. Smart Lending. Trusted Outcomes."',
    footer_nav: 'Navigation',
    footer_compliance: 'Compliance',
    footer_location: 'Location',
    footer_partners: 'Strategic Partners'
  },
  zh: {
    nav_home: '首页',
    nav_about: '关于我们',
    nav_services: '服务项目',
    nav_calc: '贷款计算器',
    nav_enquiry: '在线咨询',
    nav_brokers: '经纪人加盟',
    nav_contact: '联系我们',
    btn_get_started: '立即开始',
    footer_tagline: '"清晰建议，智慧贷款，信赖之选。"',
    footer_nav: '网站导航',
    footer_compliance: '合规信息',
    footer_location: '公司地址',
    footer_partners: '战略合作伙伴'
  },
  es: {
    nav_home: 'Inicio',
    nav_about: 'Nosotros',
    nav_services: 'Servicios',
    nav_calc: 'Calculadora',
    nav_enquiry: 'Consulta',
    nav_brokers: 'Brokers',
    nav_contact: 'Contacto',
    btn_get_started: 'Empezar',
    footer_tagline: '"Asesoramiento claro. Préstamos inteligentes. Resultados confiables."',
    footer_nav: 'Navegación',
    footer_compliance: 'Cumplimiento',
    footer_location: 'Ubicación',
    footer_partners: 'Socios Estratégicos'
  },
  vi: {
    nav_home: 'Trang chủ',
    nav_about: 'Giới thiệu',
    nav_services: 'Dịch vụ',
    nav_calc: 'Công cụ tính',
    nav_enquiry: 'Yêu cầu tư vấn',
    nav_brokers: 'Dành cho Broker',
    nav_contact: 'Liên hệ',
    btn_get_started: 'Bắt đầu ngay',
    footer_tagline: '"Tư vấn rõ ràng. Cho vay thông minh. Kết quả tin cậy."',
    footer_nav: 'Điều hướng',
    footer_compliance: 'Tuân thủ',
    footer_location: 'Vị trí',
    footer_partners: 'Đối tác Chiến lược'
  },
  hi: {
    nav_home: 'होम',
    nav_about: 'हमारे बारे में',
    nav_services: 'सेवाएं',
    nav_calc: 'कैलकुलेटर',
    nav_enquiry: 'पूछताछ',
    nav_brokers: 'ब्रोकर्स के लिए',
    nav_contact: 'संपर्क',
    btn_get_started: 'शुरू करें',
    footer_tagline: '"स्पष्ट सलाह। स्मार्ट ऋण। विश्वसनीय परिणाम।"',
    footer_nav: 'नेविगेशन',
    footer_compliance: 'अनुपालन',
    footer_location: 'स्थान',
    footer_partners: 'रणनीतिक भागीदार'
  }
};

const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  setLanguage: () => {},
  t: (k) => k
});

export const useLanguage = () => useContext(LanguageContext);

// --- Site Configuration System ---

interface SiteConfig {
  logoUrl: string;
  footerLogoUrl: string;
  companyName: string;
  contactPhone: string;
  contactEmail: string;
  contactPhoneLink: string;
  contactEmailLink: string;
}

const defaultConfig: SiteConfig = {
  logoUrl: "/logo.png",
  footerLogoUrl: "",
  companyName: "1st Mortgage Group",
  contactPhone: "(+61) 432 866 168",
  contactEmail: "info@1stmg.com.au",
  contactPhoneLink: "tel:+61432866168",
  contactEmailLink: "mailto:info@1stmg.com.au"
};

const SiteConfigContext = createContext<SiteConfig>(defaultConfig);
export const useSiteConfig = () => useContext(SiteConfigContext);

const BrandLogo = ({ inverted = false, type = 'header' }: { inverted?: boolean, type?: 'header' | 'footer' }) => {
  const config = useSiteConfig();
  const [imageError, setImageError] = useState(false);
  const logoSrc = (type === 'footer' && config.footerLogoUrl) ? config.footerLogoUrl : config.logoUrl;

  useEffect(() => { setImageError(false); }, [logoSrc]);

  if (imageError || !logoSrc) {
    return (
      <span className={`text-2xl md:text-3xl font-black tracking-tighter uppercase font-serif-brand transition-colors duration-300 ${inverted ? 'text-white' : 'text-slate-900'}`}>
        {config.companyName}
      </span>
    );
  }
  
  // Increased sizes: Header h-24 (was h-20), Footer h-32 (was h-20)
  // Responsive sizing added for better scalability
  const sizeClasses = type === 'header' ? 'h-24 md:h-28' : 'h-32 md:h-40';
  
  return (
    <div className="flex items-center justify-center py-2 select-none">
       <img 
         src={logoSrc} 
         alt={config.companyName}
         className={`${sizeClasses} w-auto object-contain transition-all duration-300`}
         onError={() => setImageError(true)}
       />
    </div>
  );
};

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();

  const navLinks = [
    { name: t('nav_home'), path: '/' },
    { name: t('nav_about'), path: '/about' },
    { name: t('nav_services'), path: '/services' },
    { name: t('nav_calc'), path: '/mortgage-calculator' },
    { name: t('nav_enquiry'), path: '/pre-approval-enquiry' },
    { name: t('nav_brokers'), path: '/for-brokers' },
    { name: t('nav_contact'), path: '/contact' },
  ];

  const languages: { code: Language, nativeLabel: string }[] = [
    { code: 'en', nativeLabel: 'English' },
    { code: 'zh', nativeLabel: '中文' },
    { code: 'vi', nativeLabel: 'Tiếng Việt' },
    { code: 'hi', nativeLabel: 'हिन्दी' },
    { code: 'es', nativeLabel: 'Español' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-slate-950/95 backdrop-blur-md border-b border-slate-900 shadow-2xl transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-28 lg:h-32">
          <Link to="/" className="flex items-center shrink-0 hover:opacity-80 transition-opacity">
            <BrandLogo inverted={true} type="header" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center space-x-5">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-[9.5px] font-black tracking-[0.15em] uppercase transition-all pb-1 relative whitespace-nowrap ${
                  location.pathname === link.path ? 'text-[#D4AF37]' : 'text-slate-400 hover:text-white'
                }`}
              >
                {link.name}
                {location.pathname === link.path && (
                  <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-[#D4AF37]"></span>
                )}
              </Link>
            ))}

            {/* Language Switcher */}
            <div className="flex items-center space-x-3 ml-2 pl-4 border-l border-slate-800">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => setLanguage(lang.code)}
                  className={`text-[9px] font-bold tracking-tight transition-colors whitespace-nowrap px-1 ${
                    language === lang.code ? 'text-[#D4AF37]' : 'text-slate-600 hover:text-white'
                  }`}
                  lang={lang.code}
                >
                  {lang.nativeLabel}
                </button>
              ))}
            </div>

            <Link
              to="/pre-approval-enquiry"
              className="ml-4 px-6 py-4 bg-[#D4AF37] hover:bg-[#b8962e] text-white rounded-xl font-black text-[10px] uppercase tracking-[0.15em] shadow-[0_10px_20px_rgba(212,175,55,0.2)] transition-all hover:-translate-y-1 active:scale-95 whitespace-nowrap"
            >
              {t('btn_get_started')}
            </Link>
          </nav>

          <div className="xl:hidden flex items-center space-x-4">
             <select 
              value={language} 
              onChange={(e) => setLanguage(e.target.value as Language)}
              className="bg-slate-900/50 text-[10px] font-bold text-slate-400 border border-slate-800 rounded px-2 py-1.5 focus:outline-none"
             >
               {languages.map(l => <option key={l.code} value={l.code} className="bg-slate-950">{l.nativeLabel}</option>)}
             </select>

            <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-slate-400 hover:text-[#D4AF37] transition-colors">
              {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="xl:hidden bg-slate-950 border-t border-slate-900 py-8 px-6 space-y-2 shadow-2xl animate-in fade-in slide-in-from-top-4 overflow-y-auto max-h-[80vh]">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`block px-6 py-5 rounded-2xl text-xs font-black uppercase tracking-[0.25em] ${
                location.pathname === link.path ? 'bg-white/5 text-[#D4AF37]' : 'text-slate-400 hover:text-white'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

const Footer: React.FC = () => {
  const config = useSiteConfig();
  const { t } = useLanguage();

  const partners = [
    { name: '8 Miles Estate', specialty: 'Real Estate Agency', url: 'https://www.8milesestate.com.au' },
    { name: 'Core-Base Construction', specialty: 'Foundation & Groundworks', url: 'https://www.corebasecons.com.au' },
    { name: 'Le Sector', specialty: 'Modular Housing Builder', url: 'https://www.lesector.com.au' }
  ];

  return (
    <footer className="bg-slate-950 text-slate-400 pt-24 pb-12 border-t border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-16 mb-20">
          <div className="space-y-8 text-center lg:text-left">
            <div className="flex justify-center lg:justify-start">
              <BrandLogo inverted={true} type="footer" />
            </div>
            <p className="text-xl leading-relaxed text-slate-500 font-serif-brand italic font-medium px-4 lg:px-0">
              {t('footer_tagline')}
            </p>
            <div className="space-y-4 pt-4 inline-block text-left">
              <div className="flex items-center space-x-4 text-xs font-bold group cursor-pointer" onClick={() => window.location.href = config.contactPhoneLink}>
                <div className="w-8 h-8 rounded-lg bg-slate-900 flex items-center justify-center border border-slate-800 group-hover:border-gold transition-colors">
                  <Phone className="w-4 h-4 text-[#D4AF37]" />
                </div>
                <span className="text-slate-300 group-hover:text-[#D4AF37] transition-colors tracking-widest">{config.contactPhone}</span>
              </div>
              <div className="flex items-center space-x-4 text-xs font-bold group cursor-pointer" onClick={() => window.location.href = config.contactEmailLink}>
                <div className="w-8 h-8 rounded-lg bg-slate-900 flex items-center justify-center border border-slate-800 group-hover:border-gold transition-colors">
                  <Mail className="w-4 h-4 text-[#D4AF37]" />
                </div>
                <span className="text-slate-300 group-hover:text-[#D4AF37] transition-colors tracking-widest uppercase">{config.contactEmail}</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-white font-black uppercase tracking-[0.3em] text-[10px] mb-10 border-l-2 border-[#D4AF37] pl-5">{t('footer_nav')}</h3>
            <ul className="space-y-5 text-xs font-bold uppercase tracking-[0.2em]">
              <li><Link to="/about" className="hover:text-[#D4AF37] transition-colors">{t('nav_about')}</Link></li>
              <li><Link to="/services" className="hover:text-[#D4AF37] transition-colors">{t('nav_services')}</Link></li>
              <li><Link to="/mortgage-calculator" className="hover:text-[#D4AF37] transition-colors">{t('nav_calc')}</Link></li>
              <li><Link to="/faqs" className="hover:text-[#D4AF37] transition-colors">FAQs</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-black uppercase tracking-[0.3em] text-[10px] mb-10 border-l-2 border-[#D4AF37] pl-5">{t('footer_partners')}</h3>
            <ul className="space-y-6">
              {partners.map(partner => (
                <li key={partner.name}>
                  <a href={partner.url} target="_blank" rel="noopener noreferrer" className="group block">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-white font-serif-brand italic font-bold text-sm group-hover:text-gold transition-colors">{partner.name}</span>
                      <ExternalLink className="w-3 h-3 text-slate-700 group-hover:text-gold transition-colors" />
                    </div>
                    <span className="text-[9px] uppercase tracking-widest font-black text-slate-600 block">{partner.specialty}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-black uppercase tracking-[0.3em] text-[10px] mb-10 border-l-2 border-[#D4AF37] pl-5">{t('footer_compliance')}</h3>
            <ul className="space-y-5 text-xs font-bold uppercase tracking-[0.2em]">
              <li><Link to="/privacy-policy" className="hover:text-[#D4AF37] transition-colors">Privacy Policy</Link></li>
              <li><Link to="/credit-guide" className="hover:text-[#D4AF37] transition-colors">Credit Guide</Link></li>
              <li><Link to="/contact" className="hover:text-[#D4AF37] transition-colors">Complaints</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-black uppercase tracking-[0.3em] text-[10px] mb-10 border-l-2 border-[#D4AF37] pl-5">{t('footer_location')}</h3>
            <p className="text-xs text-slate-500 font-medium leading-relaxed mb-6">Assisting clients Australia-wide via digital consultation. Based in Melbourne, VIC.</p>
            <div className="h-[2px] w-12 bg-[#D4AF37]/30 mb-6"></div>
            <p className="text-[10px] uppercase tracking-[0.4em] font-black text-slate-600">Established Excellence</p>
          </div>
        </div>

        <div className="border-t border-slate-900 pt-12 text-center">
          {/* AI Disclaimer Card - Refined to match site styling */}
          <div className="max-w-4xl mx-auto mb-16 px-6 bg-slate-900/40 rounded-[32px] p-8 border border-slate-800/60 shadow-inner">
             <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6 text-center md:text-left">
               <div className="shrink-0 p-3 bg-slate-950 rounded-2xl border border-slate-800">
                  <AlertCircle className="w-6 h-6 text-[#D4AF37]" />
               </div>
               <p className="text-[11px] text-slate-500 leading-relaxed font-medium italic">
                 <strong className="text-slate-400 uppercase tracking-widest not-italic mr-2 block mb-1">AI System Disclosure:</strong>
                 The AI Assistant provided on this platform is for general informational purposes only and does not constitute professional financial or legal advice. 
                 Responses are generated by large-scale artificial intelligence models and may occasionally contain inaccuracies. 
                 1st Mortgage Group strongly recommends a direct strategy session with our qualified brokers before executing any financial decisions.
               </p>
             </div>
          </div>
          <div className="flex flex-col items-center space-y-4">
            <p className="text-[10px] text-slate-600 font-bold uppercase tracking-[0.3em]">
              © <span className="font-serif-brand italic font-bold text-slate-400 text-base mx-1">{config.companyName}</span> | Credit Rep of Purple Circle Financial Services Pty Ltd | ACL No. 423568
            </p>
            <div className="flex items-center space-x-3 text-[9px] uppercase tracking-[0.2em] font-black text-slate-800">
              <span className="px-3 py-1 bg-slate-900 rounded-full border border-slate-800">Version 1.0</span>
              <span className="text-gold opacity-50">•</span>
              <span className="px-3 py-1 bg-slate-900 rounded-full border border-slate-800">The Editorial Edition</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
};

const App: React.FC = () => {
  const [config, setConfig] = useState<SiteConfig>(defaultConfig);
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    fetch(`/site-settings.json?t=${new Date().getTime()}`)
      .then(r => r.ok ? r.json() : Promise.reject())
      .then(data => setConfig(prev => ({ ...prev, ...data })))
      .catch(() => {});
  }, []);

  const t = (key: string) => translations[language][key] || key;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      <SiteConfigContext.Provider value={config}>
        <Router>
          <ScrollToTop />
          <div className="min-h-screen flex flex-col font-sans selection:bg-[#D4AF37]/30 selection:text-slate-950" lang={language}>
            <Header />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/mortgage-calculator" element={<CalculatorPage />} />
                <Route path="/pre-approval-enquiry" element={<EnquiryPage />} />
                <Route path="/for-brokers" element={<BrokersPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/faqs" element={<FAQPage />} />
                <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
                <Route path="/credit-guide" element={<CreditGuidePage />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </SiteConfigContext.Provider>
    </LanguageContext.Provider>
  );
};

export default App;
