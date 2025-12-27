
import React from 'react';
import { Mail, Phone, Globe, MessageSquare, Clock } from 'lucide-react';

const ContactPage: React.FC = () => {
  return (
    <div className="py-24 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-20">
          <span className="text-gold font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block">Connect</span>
          <h1 className="text-4xl md:text-5xl font-serif-brand italic font-bold text-slate-900 mb-6 leading-tight">
            Contact 1st Mortgage Group
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl leading-relaxed font-medium">
            If you would like to discuss your lending needs or enquire about professional opportunities, please contact us.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ContactCard 
                icon={<Mail className="w-6 h-6" />}
                title="Primary Email"
                content="info@1stmg.com.au"
                subContent="For general enquiries"
              />
              <ContactCard 
                icon={<Mail className="w-6 h-6" />}
                title="Office Email"
                content="1stmortgage.vic@gmail.com"
                subContent="Specific Victorian enquiries"
              />
              <ContactCard 
                icon={<Phone className="w-6 h-6" />}
                title="Call Us"
                content="(+61) 432 866 168"
                subContent="Mon - Fri, 9am - 5pm"
              />
              <ContactCard 
                icon={<Globe className="w-6 h-6" />}
                title="Website"
                content="www.1stmg.com.au"
                subContent="Online enquiries 24/7"
              />
            </div>
            
            <div className="bg-slate-50 p-10 rounded-[32px] border border-slate-100">
               <h3 className="text-xl font-serif-brand italic font-bold text-slate-900 mb-6 flex items-center">
                 <Clock className="w-5 h-5 mr-3 text-gold" />
                 National Coverage
               </h3>
               <p className="text-slate-600 mb-4 font-medium leading-relaxed">
                 We assist clients Australia-wide via phone, video call, and digital communication. Our flexible approach allows us to help you regardless of your location.
               </p>
               <p className="text-[10px] text-slate-400 italic font-bold uppercase tracking-widest">
                 Head Office: Melbourne, Australia
               </p>
            </div>
          </div>

          <div className="bg-slate-950 text-white p-12 rounded-[40px] shadow-2xl flex flex-col justify-center relative overflow-hidden">
             <div className="absolute top-0 right-0 p-12 opacity-5">
                <MessageSquare className="w-32 h-32" />
             </div>
             <h2 className="text-3xl font-serif-brand italic font-bold mb-6 text-gold">Have a Complaint?</h2>
             <p className="text-slate-400 mb-10 leading-relaxed font-medium">
               We are committed to providing high-quality service. If we have failed to meet your expectations, we want to hear from you.
             </p>
             <div className="space-y-8">
               <div className="flex items-start space-x-6">
                 <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-[10px] font-bold flex-shrink-0 border border-white/20">1</div>
                 <p className="text-slate-300 font-medium text-sm leading-relaxed">Contact us directly using the details on this page. We will attempt to resolve the issue internally.</p>
               </div>
               <div className="flex items-start space-x-6">
                 <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-[10px] font-bold flex-shrink-0 border border-white/20">2</div>
                 <p className="text-slate-300 font-medium text-sm leading-relaxed">If unresolved, you can contact the Australian Financial Complaints Authority (AFCA) on 1800 931 678.</p>
               </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ContactCard = ({ icon, title, content, subContent }: any) => (
  <div className="p-8 rounded-[32px] bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300">
    <div className="w-12 h-12 rounded-2xl gold-gradient text-slate-900 flex items-center justify-center mb-8">
      {icon}
    </div>
    <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">{title}</h3>
    <p className="text-base font-bold text-slate-900 mb-1">{content}</p>
    <p className="text-[11px] text-slate-400 italic font-medium">{subContent}</p>
  </div>
);

export default ContactPage;
