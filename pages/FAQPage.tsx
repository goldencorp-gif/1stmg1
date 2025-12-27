
import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const FAQPage: React.FC = () => {
  const faqs = [
    {
      q: "What does a mortgage broker do?",
      a: "A mortgage broker provides credit assistance by helping you compare suitable loan options from a panel of approved lenders and guiding you through the loan application process. We do not lend money directly."
    },
    {
      q: "Do you charge a fee for your service?",
      a: "In most cases, mortgage brokers are paid a commission by the lender if your loan settles. Any fees payable by you will be disclosed clearly before you proceed."
    },
    {
      q: "Do you work for the lender or the borrower?",
      a: "We assist borrowers and are required by law to act in your best interests when providing credit assistance. We work with multiple lenders to compare suitable options based on your circumstances."
    },
    {
      q: "How many lenders do you work with?",
      a: "We work with a panel of approved lenders available through our aggregator arrangements. The lenders we consider will depend on your situation and lending needs."
    },
    {
      q: "Can you help first home buyers?",
      a: "Yes. We regularly assist first home buyers and explain the process step-by-step, including loan options, required documents, and next steps."
    },
    {
      q: "What is the difference between pre-approval and formal approval?",
      a: "Pre-approval is an initial indication of borrowing capacity, subject to conditions. Formal approval occurs only after a lender has fully assessed your application and documentation."
    },
    {
      q: "Is my information kept private?",
      a: "Yes. Personal information is handled in accordance with our Privacy Policy and Australian privacy laws."
    },
    {
      q: "Do you provide advice over the phone or online?",
      a: "Yes. We assist clients Australia-wide via phone, video call, and digital communication."
    }
  ];

  return (
    <div className="py-16 bg-slate-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-16">
          <HelpCircle className="w-16 h-16 text-gold mx-auto mb-6 opacity-50" />
          <h1 className="text-4xl md:text-5xl font-serif-brand italic font-bold text-slate-900 mb-4">Frequently Asked Questions</h1>
          <p className="text-lg text-slate-600 font-medium">Common questions about our services and the mortgage process.</p>
        </header>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <Accordion key={i} title={faq.q} content={faq.a} />
          ))}
        </div>
      </div>
    </div>
  );
};

const Accordion = ({ title, content }: any) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-slate-50 transition-colors"
      >
        <span className="text-lg font-bold text-slate-900 pr-8 leading-tight">{title}</span>
        <ChevronDown className={`w-6 h-6 text-slate-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <div 
        className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}
      >
        <div className="px-8 pb-6 text-slate-600 leading-relaxed border-t border-slate-50 pt-4 font-medium">
          {content}
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
