
import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, ChevronRight } from 'lucide-react';
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

/**
 * ScrollToTop component ensures that whenever the URL path changes,
 * the window scrolls back to the top of the page.
 */
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

/**
 * Logo component utilizing the actual 'logo.png' file provided by the user.
 * Improved fallback to match the custom 1.5em serif branding if image is missing.
 */
const BrandLogo = ({ className = "h-24", inverted = false }: { className?: string, inverted?: boolean }) => (
  <div className={`flex items-center justify-center transition-all duration-300 ${className} ${inverted ? 'bg-white/95 px-4 py-2 rounded-xl shadow-sm' : ''}`}>
    <img 
      src="logo.png" 
      alt="1st Mortgage Group Logo" 
      className="max-h-full w-auto object-contain"
      onError={(e) => {
        // Fallback styling if the image is missing
        e.currentTarget.style.display = 'none';
        const parent = e.currentTarget.parentElement;
        if (parent) {
          parent.innerHTML = `
            <div class="flex items-baseline font-serif-brand italic font-bold ${inverted ? 'text-slate-900' : 'text-slate-900'} text-2xl tracking-tight">
              <span class="text-[1.3em] mr-1">1</span><span class="text-[0.6em] mr-2">st</span>
              <span class="not-italic uppercase tracking-widest text-[0.7em] font-sans">Mortgage Group</span>
            </div>
          `;
        }
      }}
    />
  </div>
);

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Calculator', path: '/mortgage-calculator' },
    { name: 'Enquiry', path: '/pre-approval-enquiry' },
    { name: 'Brokers', path: '/for-brokers' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-28 lg:h-32">
          <Link to="/" className="flex items-center">
            <BrandLogo className="h-20 lg:h-24" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-[11px] font-bold tracking-[0.25em] uppercase transition-all hover:text-gold relative group ${
                  location.pathname === link.path ? 'text-gold' : 'text-slate-500'
                }`}
              >
                {link.name}
                <span className={`absolute -bottom-2 left-0 w-full h-0.5 bg-gold transition-transform duration-300 origin-left ${location.pathname === link.path ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
              </Link>
            ))}
            <Link
              to="/pre-approval-enquiry"
              className="ml-4 px-6 py-3 gold-gradient text-slate-900 rounded-lg font-bold text-[10px] uppercase tracking-widest shadow-lg hover:shadow-gold/20 transition-all hover:scale-105"
            >
              Get Started
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-3 rounded-xl bg-slate-50 text-slate-600 hover:text-slate-900 focus:outline-none transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="lg:hidden border-t border-slate-100 bg-white py-8 px-6 space-y-2 shadow-2xl animate-in slide-in-from-top duration-300">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`block px-6 py-4 rounded-2xl text-base font-bold tracking-wide uppercase transition-all ${
                location.pathname === link.path
                  ? 'bg-slate-50 text-gold shadow-inner'
                  : 'text-slate-600 hover:bg-slate-50'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-8 mt-4 border-t border-slate-100">
            <Link
              to="/pre-approval-enquiry"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center py-5 rounded-2xl gold-gradient text-white font-bold uppercase tracking-widest shadow-xl"
            >
              Start Free Enquiry
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

const Footer: React.FC = () => (
  <footer className="bg-slate-950 text-slate-400 pt-24 pb-12 border-t border-slate-800">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
        <div className="space-y-10">
          <BrandLogo className="h-20" inverted={true} />
          <p className="text-sm leading-relaxed text-slate-500 font-medium italic max-w-xs">
            "Clear Advice. Smart Lending. Trusted Outcomes."
          </p>
          <div className="space-y-4 pt-8 border-t border-slate-900">
            <div className="flex items-center space-x-4 text-sm group">
               <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                 <Phone className="w-4 h-4 text-gold" />
               </div>
               <span className="text-slate-300 font-semibold">(+61) 432 866 168</span>
            </div>
            <div className="flex items-center space-x-4 text-sm group">
               <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                 <Mail className="w-4 h-4 text-gold" />
               </div>
               <span className="text-slate-300 font-semibold">info@1stmg.com.au</span>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-white font-bold uppercase tracking-[0.3em] text-[10px] mb-10">Navigation</h3>
          <ul className="space-y-6 text-sm">
            <li><Link to="/about" className="hover:text-gold transition-colors font-medium">About Our Firm</Link></li>
            <li><Link to="/services" className="hover:text-gold transition-colors font-medium">Lending Services</Link></li>
            <li><Link to="/mortgage-calculator" className="hover:text-gold transition-colors font-medium">Calculator Tools</Link></li>
            <li><Link to="/faqs" className="hover:text-gold transition-colors font-medium">Common Questions</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-bold uppercase tracking-[0.3em] text-[10px] mb-10">Legal & Privacy</h3>
          <ul className="space-y-6 text-sm">
            <li><Link to="/privacy-policy" className="hover:text-gold transition-colors font-medium">Privacy Policy</Link></li>
            <li><Link to="/credit-guide" className="hover:text-gold transition-colors font-medium">Credit Guide</Link></li>
            <li><Link to="/contact" className="hover:text-gold transition-colors font-medium">Complaints Handling</Link></li>
          </ul>
        </div>

        <div className="space-y-8">
          <h3 className="text-white font-bold uppercase tracking-[0.3em] text-[10px] mb-10">Online Service</h3>
          <p className="text-sm text-slate-500 font-medium leading-relaxed">We provide professional credit assistance across Australia via phone and digital consultation. Our process is designed for your convenience.</p>
          <div className="pt-4">
            <Link to="/pre-approval-enquiry" className="inline-flex items-center space-x-4 text-gold font-bold hover:translate-x-1 transition-transform group">
              <span className="uppercase tracking-widest text-[11px]">Start Your Enquiry</span>
              <div className="w-8 h-8 rounded-full border border-gold/30 flex items-center justify-center group-hover:bg-gold/10 transition-colors">
                <ChevronRight className="w-4 h-4" />
              </div>
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-900 pt-12 text-[11px] text-center text-slate-600 leading-relaxed font-medium">
        <div className="max-w-3xl mx-auto space-y-2 mb-10">
            <p className="text-slate-400 font-bold text-sm tracking-tight mb-2">© 1st Mortgage Group</p>
            <p>Credit Representative of Purple Circle Financial Services Pty Ltd</p>
            <p>Australian Credit Licence No. 423568</p>
            <p>Credit assistance is provided in accordance with Australian credit laws.</p>
        </div>
        <div className="flex justify-center space-x-8 uppercase tracking-[0.3em] font-bold text-[9px] text-slate-500">
            <Link to="/privacy-policy" className="hover:text-gold transition-colors">Privacy Policy</Link>
            <Link to="/credit-guide" className="hover:text-gold transition-colors">Credit Guide</Link>
            <Link to="/contact" className="hover:text-gold transition-colors">Complaints</Link>
        </div>
      </div>
    </div>
  </footer>
);

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col font-sans selection:bg-gold/30 selection:text-slate-900">
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
  );
};

export default App;
