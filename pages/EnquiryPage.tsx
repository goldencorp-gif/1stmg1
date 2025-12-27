
import React, { useState } from 'react';
import { Send, Clock, MapPin, Search, CheckCircle, ShieldCheck } from 'lucide-react';

const EnquiryPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  // Note: Netlify detects forms by looking for the 'data-netlify="true"' attribute in the HTML.
  // When deploying, Netlify will handle the POST request automatically.
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // On a real Netlify deploy, we would let the form submit naturally or use fetch.
    // For this UI demo, we show the success state.
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData as any).toString(),
    })
      .then(() => {
        setSubmitted(true);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      })
      .catch((error) => alert("Form submission error: " + error));
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 py-16 px-4">
        <div className="max-w-md w-full bg-white p-12 rounded-3xl shadow-xl text-center border border-slate-100">
           <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
             <CheckCircle className="w-10 h-10 text-green-500" />
           </div>
           <h2 className="text-3xl font-serif-brand italic font-bold text-slate-900 mb-4">Enquiry Received</h2>
           <p className="text-slate-600 mb-8 leading-relaxed font-medium">
             Thank you for starting your conversation with 1st Mortgage Group. One of our specialist brokers will contact you shortly to discuss your borrowing position.
           </p>
           <button 
             onClick={() => setSubmitted(false)}
             className="text-gold font-bold uppercase tracking-widest text-xs underline"
           >
             Submit another enquiry
           </button>
        </div>
      </div>
    );
  }

  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          
          <div className="space-y-16">
            <header>
              <span className="text-gold font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block">Get Started</span>
              <h1 className="text-5xl md:text-6xl font-serif-brand italic font-bold text-slate-900 mb-8 leading-tight">
                Start Your <br />Pre-Approval <br /><span className="text-gold">Conversation</span>
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed font-medium max-w-lg">
                Pre-approval can help you understand your potential borrowing position before you start property searching. Submitting an enquiry allows us to discuss your circumstances securely.
              </p>
              <div className="mt-10 p-6 bg-slate-50 border border-slate-200 rounded-2xl flex items-start space-x-4">
                 <ShieldCheck className="w-6 h-6 text-gold flex-shrink-0" />
                 <p className="text-sm text-slate-500 italic leading-relaxed">
                  <strong>Security Note:</strong> Your data is encrypted and handled in accordance with Australian privacy laws. Submitting this enquiry does not constitute a formal loan application.
                 </p>
              </div>
            </header>

            <section>
              <h2 className="text-2xl font-serif-brand italic font-bold text-slate-900 mb-10">The Process</h2>
              <div className="space-y-10 relative">
                <div className="absolute left-5 top-0 bottom-0 w-px bg-slate-100"></div>
                {[
                  { step: "1", title: "Submit Enquiry", desc: "Provide your basic details and loan requirements via our secure form.", icon: <Send className="w-4 h-4" /> },
                  { step: "2", title: "Expert Contact", desc: "A qualified mortgage broker will reach out at your preferred time.", icon: <Clock className="w-4 h-4" /> },
                  { step: "3", title: "Lender Comparison", desc: "We analyze and explain suitable options from our approved panel.", icon: <Search className="w-4 h-4" /> },
                  { step: "4", title: "Formal Steps", desc: "A formal assessment only begins if you choose to move forward.", icon: <MapPin className="w-4 h-4" /> },
                ].map((item, i) => (
                  <div key={i} className="relative flex items-start space-x-8">
                    <div className="relative z-10 w-10 h-10 rounded-full gold-gradient text-slate-900 flex items-center justify-center text-sm font-bold shadow-lg border-4 border-white">
                      {item.step}
                    </div>
                    <div className="pt-1">
                      <h3 className="font-bold text-slate-900 mb-2 uppercase tracking-widest text-[11px]">{item.title}</h3>
                      <p className="text-slate-500 text-sm leading-relaxed font-medium">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <div className="bg-slate-50 p-10 md:p-14 rounded-[40px] shadow-2xl border border-slate-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-5">
               <ShieldCheck className="w-32 h-32" />
            </div>
            <h2 className="text-3xl font-serif-brand italic font-bold text-slate-900 mb-10 relative z-10">Secure Enquiry Form</h2>
            
            {/* Netlify Form Configuration */}
            <form 
              name="pre-approval-enquiry" 
              method="POST" 
              data-netlify="true"
              onSubmit={handleSubmit} 
              className="space-y-8 relative z-10"
            >
              {/* Hidden input for Netlify bot protection */}
              <input type="hidden" name="form-name" value="pre-approval-enquiry" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="group">
                  <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-3 group-focus-within:text-gold transition-colors">Full Name</label>
                  <input required name="full-name" type="text" className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-gold/20 focus:border-gold bg-white font-bold transition-all" placeholder="John Doe" />
                </div>
                <div className="group">
                  <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-3 group-focus-within:text-gold transition-colors">Phone Number</label>
                  <input required name="phone" type="tel" className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-gold/20 focus:border-gold bg-white font-bold transition-all" placeholder="0400 000 000" />
                </div>
              </div>

              <div className="group">
                <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-3 group-focus-within:text-gold transition-colors">Email Address</label>
                <input required name="email" type="email" className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-gold/20 focus:border-gold bg-white font-bold transition-all" placeholder="john@example.com" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="group">
                  <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-3 group-focus-within:text-gold transition-colors">Loan Purpose</label>
                  <select required name="purpose" className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-gold/20 focus:border-gold bg-white font-bold transition-all appearance-none">
                    <option value="">Select purpose...</option>
                    <option value="First Home Purchase">First Home Purchase</option>
                    <option value="Next Home Purchase">Next Home Purchase</option>
                    <option value="Refinance">Refinance / Rate Review</option>
                    <option value="Investment">Investment Property</option>
                  </select>
                </div>
                <div className="group">
                  <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-3 group-focus-within:text-gold transition-colors">Preferred Contact</label>
                  <select name="contact-time" className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-gold/20 focus:border-gold bg-white font-bold transition-all appearance-none">
                    <option value="Any time">Any time</option>
                    <option value="Morning">Morning (9am - 12pm)</option>
                    <option value="Afternoon">Afternoon (12pm - 5pm)</option>
                    <option value="Evening">Evening (After 5pm)</option>
                  </select>
                </div>
              </div>

              <div className="p-6 bg-white border border-slate-200 rounded-2xl space-y-4">
                 <p className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.2em]">Mandatory Disclosure</p>
                 <p className="text-[11px] text-slate-500 leading-relaxed font-medium italic">
                    By submitting this enquiry, you consent to being contacted by 1st Mortgage Group. No credit advice is provided at this stage and submitting this form does not constitute loan approval. Your personal information is handled in accordance with our Privacy Policy.
                 </p>
              </div>

              <button type="submit" className="w-full py-5 gold-gradient text-slate-900 rounded-2xl font-bold uppercase tracking-[0.2em] text-[13px] shadow-2xl hover:scale-[1.02] transition-transform active:scale-100">
                Submit Secure Enquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnquiryPage;
