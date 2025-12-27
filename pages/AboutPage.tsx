
import React from 'react';
import { Shield, BookOpen, UserCheck, Scale } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="flex flex-col py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <header className="mb-16">
            <h1 className="text-4xl md:text-5xl font-serif-brand italic font-bold text-slate-900 mb-6 flex items-baseline flex-wrap">
              <span className="mr-4">About</span>
              <span className="inline-flex items-baseline mr-3">
                {/* 
                  Numeric '1' increased by 'two sizes' (1.5em) relative to the heading.
                  Kept perfectly on the baseline of 'Mortgage Group'.
                */}
                <span className="text-[1.5em] leading-none font-serif-brand font-bold">1</span>
                <span className="text-[0.6em] font-bold ml-1">st</span>
              </span>
              <span>Mortgage Group</span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed font-medium">
              1st Mortgage Group is a mortgage broking business built on professionalism, transparency, and compliance. Our focus is on helping clients understand their options clearly so they can make informed decisions about their lending needs.
            </p>
          </header>

          <section className="mb-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
             <div className="space-y-6">
                <h2 className="text-3xl font-serif-brand italic font-bold text-slate-900">Our Approach</h2>
                <p className="text-slate-600 text-lg font-medium">
                  We believe that good mortgage advice should be simple, ethical, and built for the long term. Our processes are designed to put your needs first.
                </p>
                <ul className="space-y-4">
                  {[
                    { text: "Clear and documented advice", icon: <BookOpen className="w-5 h-5 text-gold" /> },
                    { text: "Delivered in your best interests", icon: <UserCheck className="w-5 h-5 text-gold" /> },
                    { text: "Aligned with regulatory standards", icon: <Scale className="w-5 h-5 text-gold" /> },
                    { text: "Focused on long-term outcomes", icon: <Shield className="w-5 h-5 text-gold" /> },
                  ].map((item, i) => (
                    <li key={i} className="flex items-center space-x-3 text-slate-700 font-semibold">
                      {item.icon}
                      <span>{item.text}</span>
                    </li>
                  ))}
                </ul>
             </div>
             <div className="rounded-3xl overflow-hidden shadow-2xl">
               <img src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=800" alt="Our Team" />
             </div>
          </section>

          <section className="p-12 bg-slate-900 text-white rounded-[40px] relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <Shield className="w-48 h-48" />
            </div>
            <div className="relative">
              <h2 className="text-3xl font-serif-brand italic font-bold mb-6">Licensing & Authorisation</h2>
              <div className="space-y-6 text-slate-300 leading-relaxed text-lg font-medium">
                <p>
                  1st Mortgage Group provides credit assistance as a Credit Representative of Purple Circle Financial Services Pty Ltd (ACL 423568).
                </p>
                <p>
                  All services are provided in accordance with the National Consumer Credit Protection Act and ASIC requirements. This means our processes are audited, professional, and strictly compliant with Australian law.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
