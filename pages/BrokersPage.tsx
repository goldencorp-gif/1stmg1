
import React from 'react';
import { Briefcase, TrendingUp, Shield, Laptop, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const BrokersPage: React.FC = () => {
  return (
    <div className="py-24 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="max-w-4xl mx-auto text-center mb-20">
          <span className="text-gold font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block">Opportunities</span>
          <h1 className="text-4xl md:text-5xl font-serif-brand italic font-bold text-slate-900 mb-6">For Mortgage Brokers</h1>
          <p className="text-xl text-slate-600 leading-relaxed font-medium">
            1st Mortgage Group provides a professional, compliance-focused environment for mortgage brokers seeking structured support and sustainable growth.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div className="bg-white p-12 rounded-[40px] shadow-sm border border-slate-100">
             <h2 className="text-3xl font-serif-brand italic font-bold text-slate-900 mb-8">Who This May Suit</h2>
             <ul className="space-y-8">
                {[
                  { title: "New Brokers", desc: "Those entering the industry and needing high-quality mentoring and structure.", icon: <Briefcase className="w-6 h-6 text-gold" /> },
                  { title: "Experienced Brokers", desc: "Professionals seeking a better structure and a compliance-first brand.", icon: <TrendingUp className="w-6 h-6 text-gold" /> },
                  { title: "Value-Driven Professionals", desc: "Brokers who value governance, professional ethics, and long-term client care.", icon: <Shield className="w-6 h-6 text-gold" /> },
                ].map((item, i) => (
                  <li key={i} className="flex space-x-6">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 uppercase tracking-widest text-[11px] mb-2">{item.title}</h3>
                      <p className="text-slate-600 text-sm font-medium leading-relaxed">{item.desc}</p>
                    </div>
                  </li>
                ))}
             </ul>
          </div>

          <div className="bg-slate-900 text-white p-12 rounded-[40px] shadow-2xl relative overflow-hidden">
             <div className="relative z-10">
               <h2 className="text-3xl font-serif-brand italic font-bold mb-8">Professional Support</h2>
               <p className="text-slate-400 mb-8 italic text-sm uppercase tracking-widest font-bold">Support may include:</p>
               <ul className="grid grid-cols-1 gap-6">
                 {[
                   "Structured onboarding processes",
                   "Access to approved lender panels via aggregator arrangements",
                   "Compliance frameworks aligned with ASIC expectations",
                   "Professional development guidance",
                   "CRM and process support (subject to approval)"
                 ].map((text, i) => (
                   <li key={i} className="flex items-start space-x-3">
                     <CheckMark />
                     <span className="text-slate-200 font-medium text-sm leading-relaxed">{text}</span>
                   </li>
                 ))}
               </ul>
               <p className="mt-8 pt-8 border-t border-slate-800 text-[10px] uppercase tracking-widest font-bold text-slate-500">
                 Commercial terms are discussed individually and confidentially.
               </p>
             </div>
             <Laptop className="absolute -bottom-8 -right-8 w-64 h-64 text-white opacity-5" />
          </div>
        </div>

        <section className="bg-white p-12 rounded-[40px] shadow-xl text-center max-w-4xl mx-auto border border-slate-100">
           <h2 className="text-3xl font-serif-brand italic font-bold text-slate-900 mb-6">Expression of Interest</h2>
           <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto font-medium leading-relaxed">
             If you would like to explore a professional alignment with 1st Mortgage Group, please submit a confidential enquiry. No financial or sensitive information is collected at this stage.
           </p>
           <Link to="/contact" className="inline-flex items-center px-10 py-5 gold-gradient text-slate-900 rounded-xl font-bold shadow-lg hover:scale-105 transition-transform uppercase tracking-[0.2em] text-[11px]">
             Start a Confidential Conversation
             <ChevronRight className="ml-2 w-5 h-5" />
           </Link>
        </section>
      </div>
    </div>
  );
};

const CheckMark = () => (
  <svg className="w-5 h-5 text-gold mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
  </svg>
);

export default BrokersPage;
