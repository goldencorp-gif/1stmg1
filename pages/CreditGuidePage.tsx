
import React from 'react';

const CreditGuidePage: React.FC = () => {
  return (
    <div className="py-16 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-serif-brand italic font-bold text-slate-900 mb-12">Credit Guide</h1>
        
        <div className="prose prose-slate max-w-none space-y-10 text-slate-600 leading-relaxed font-medium">
          <section className="p-8 bg-slate-50 border-l-4 border-gold rounded-r-2xl shadow-sm">
            <p className="text-sm italic font-semibold text-slate-800">
              Note: This is the website disclosure version. A full PDF Credit Guide must still be issued to clients before providing credit assistance.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif-brand italic font-bold text-slate-900 mb-4">About Us</h2>
            <p>
              1st Mortgage Group provides credit assistance services as a Credit Representative of Purple Circle Financial Services Pty Ltd (Australian Credit Licence No. 423568).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif-brand italic font-bold text-slate-900 mb-4">Our Services</h2>
            <p>We assist consumers with:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Home loans</li>
              <li>Refinancing</li>
              <li>Investment property loans</li>
              <li>Construction loans</li>
              <li>Debt consolidation</li>
            </ul>
            <p className="mt-4 font-bold text-slate-900">We do not provide loans directly.</p>
          </section>

          <section>
            <h2 className="text-2xl font-serif-brand italic font-bold text-slate-900 mb-4">How We Are Paid</h2>
            <p>
              We may receive commissions from lenders if a loan settles. Commission amounts vary between lenders and products. Any fees payable by you will be disclosed before proceeding.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif-brand italic font-bold text-slate-900 mb-4">Conflicts of Interest</h2>
            <p>
              Some lenders may pay higher commissions than others. Regardless of commission arrangements, we are required to act in your best interests.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif-brand italic font-bold text-slate-900 mb-4">Complaints Handling</h2>
            <p className="mb-6">If you have a complaint:</p>
            <ol className="space-y-6">
              <li className="flex items-start">
                <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-xs font-bold mr-4 flex-shrink-0">1</div>
                <div>
                  <strong className="text-slate-900">Contact 1st Mortgage Group directly:</strong>
                  <p className="mt-1">We will attempt to resolve your complaint quickly and fairly.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-xs font-bold mr-4 flex-shrink-0">2</div>
                <div>
                  <strong className="text-slate-900">External Resolution:</strong>
                  <p className="mt-1">If unresolved, you may contact the Australian Financial Complaints Authority (AFCA).</p>
                  <div className="mt-4 p-6 bg-slate-50 rounded-2xl border border-slate-100">
                    <p className="font-bold text-slate-900">AFCA</p>
                    <p>Phone: 1800 931 678</p>
                    <p>Website: <a href="https://afca.org.au" target="_blank" rel="noopener noreferrer" className="text-gold underline">afca.org.au</a></p>
                  </div>
                </div>
              </li>
            </ol>
          </section>

          <section className="pt-8 border-t border-slate-100">
            <h2 className="text-2xl font-serif-brand italic font-bold text-slate-900 mb-4">Privacy</h2>
            <p>
              Your personal information is handled in accordance with our Privacy Policy and Australian privacy laws.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CreditGuidePage;
