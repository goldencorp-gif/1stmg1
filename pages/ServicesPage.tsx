
import React from 'react';
import { Home, RefreshCcw, Building2, Hammer, Landmark, AlertCircle, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServicesPage: React.FC = () => {
  const services = [
    {
      title: "Home Loans",
      icon: <Home className="w-8 h-8" />,
      features: ["First home buyer loans", "Owner-occupied purchases"],
      color: "bg-blue-50 text-blue-600"
    },
    {
      title: "Refinancing",
      icon: <RefreshCcw className="w-8 h-8" />,
      features: ["Reviewing existing loans", "Interest rate comparisons", "Loan restructuring"],
      color: "bg-green-50 text-green-600"
    },
    {
      title: "Investment Loans",
      icon: <Building2 className="w-8 h-8" />,
      features: ["Residential investment properties", "Portfolio considerations"],
      color: "bg-purple-50 text-purple-600"
    },
    {
      title: "Construction Loans",
      icon: <Hammer className="w-8 h-8" />,
      features: ["House and land packages", "Construction funding (subject to lender criteria)"],
      color: "bg-orange-50 text-orange-600"
    },
    {
      title: "Debt Consolidation",
      icon: <Landmark className="w-8 h-8" />,
      features: ["Combining multiple debts into one structure"],
      color: "bg-red-50 text-red-600"
    }
  ];

  return (
    <div className="py-24 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-gold font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block text-center">Our Solutions</span>
          <h1 className="text-4xl md:text-5xl font-serif-brand italic font-bold text-slate-900 mb-6">Mortgage & Loan Services</h1>
          <p className="text-xl text-slate-600 font-medium leading-relaxed">
            We assist with a range of residential lending solutions, helping you navigate the complex landscape of Australian finance.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, i) => (
            <div key={i} className="bg-white p-10 rounded-[32px] shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className={`w-16 h-16 rounded-2xl ${service.color} flex items-center justify-center mb-8`}>
                {service.icon}
              </div>
              <h2 className="text-2xl font-serif-brand italic font-bold text-slate-900 mb-5">{service.title}</h2>
              <ul className="space-y-4 mb-8">
                {service.features.map((feature, j) => (
                  <li key={j} className="flex items-start text-slate-600 text-sm font-medium">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2 mr-3 flex-shrink-0"></div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          
          <div className="bg-slate-900 p-10 rounded-[32px] shadow-2xl flex flex-col justify-between text-white overflow-hidden relative group">
             <div className="relative z-10">
               <h3 className="text-2xl font-serif-brand italic font-bold mb-4">Need something else?</h3>
               <p className="text-slate-400 font-medium mb-10 leading-relaxed">Contact us to discuss your unique lending situation and see how we can help.</p>
               <Link to="/contact" className="inline-flex items-center text-gold font-bold hover:translate-x-2 transition-transform uppercase tracking-widest text-[11px]">
                 Get in touch
                 <ChevronRight className="ml-2 w-5 h-5" />
               </Link>
             </div>
             <div className="absolute -bottom-4 -right-4 opacity-10 transform scale-150 rotate-12 transition-transform group-hover:rotate-0">
               <Landmark className="w-32 h-32" />
             </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto bg-white border border-slate-200 rounded-[32px] p-10 flex items-start space-x-6 shadow-sm">
          <AlertCircle className="w-8 h-8 text-gold flex-shrink-0 mt-1" />
          <div>
            <h3 className="text-xl font-serif-brand italic font-bold text-slate-900 mb-2">Important Note</h3>
            <p className="text-slate-600 leading-relaxed font-medium italic">
              We provide credit assistance only. Loan approval and credit decisions are made by the lender. Our role is to find the most suitable option and manage the application process on your behalf.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
