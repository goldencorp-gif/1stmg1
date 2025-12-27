
import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, Home, ArrowUpRight, Users, ShieldCheck, Star, Quote } from 'lucide-react';

const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 z-0">
           <img 
            src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1600" 
            alt="Friendly Modern Home" 
            className="w-full h-full object-cover"
           />
           <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-[1px]"></div>
           <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/30 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white w-full">
          <div className="max-w-4xl">
            <div className="inline-flex items-center space-x-2 bg-gold/20 border border-gold/30 rounded-full px-5 py-2 mb-10">
               <Star className="w-4 h-4 text-gold fill-gold" />
               <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gold">Trusted Australian Finance Partners</span>
            </div>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif-brand italic font-bold mb-10 leading-[0.95] tracking-tight">
              Mortgage Brokers <br /><span className="text-gold">You Can Trust</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-200 mb-14 leading-relaxed max-w-2xl font-medium opacity-90">
              At 1st Mortgage Group, we help Australians make confident home loan decisions through clear advice, responsible lending, and a client-first approach.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Link to="/pre-approval-enquiry" className="px-12 py-6 gold-gradient text-slate-900 rounded-2xl font-bold shadow-2xl transition-all hover:scale-105 hover:shadow-gold/40 flex items-center justify-center uppercase tracking-widest text-[14px]">
                Start a Pre-Approval Enquiry
              </Link>
              <Link to="/services" className="px-12 py-6 bg-white/10 backdrop-blur-md text-white border border-white/20 rounded-2xl font-bold hover:bg-white/20 flex items-center justify-center uppercase tracking-widest text-[14px] transition-all">
                Our Services
              </Link>
            </div>
          </div>
        </div>
        
        {/* Subtle Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block animate-bounce opacity-50">
           <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center pt-2">
             <div className="w-1 h-2 bg-white rounded-full"></div>
           </div>
        </div>
      </section>

      {/* Trust Banner: Partners */}
      <div className="bg-slate-50 py-10 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <p className="text-center text-[10px] uppercase tracking-[0.4em] font-bold text-slate-400 mb-8">Access to Australia's Leading Lenders</p>
           <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
             {/* Note: In a real app, these would be SVG logos of major banks like Westpac, ANZ, CBA, NAB etc. */}
             <span className="text-xl font-bold font-serif-brand italic">CBA</span>
             <span className="text-xl font-bold font-serif-brand italic">Westpac</span>
             <span className="text-xl font-bold font-serif-brand italic">ANZ</span>
             <span className="text-xl font-bold font-serif-brand italic">NAB</span>
             <span className="text-xl font-bold font-serif-brand italic">Suncorp</span>
             <span className="text-xl font-bold font-serif-brand italic">Macquarie</span>
           </div>
        </div>
      </div>

      {/* Friendly Imagery: Family Success Banner */}
      <section className="bg-white py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-10">
               <span className="text-gold font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block">Our Commitment</span>
               <h2 className="text-5xl md:text-6xl font-serif-brand italic font-bold text-slate-900 leading-tight tracking-tight">Helping You Achieve <br /><span className="text-gold">Trusted Outcomes</span></h2>
               <p className="text-lg text-slate-600 leading-relaxed font-medium">
                  Whether you are buying your first home, refinancing, or investing, our role is to guide you through the lending process with transparency and care. We handle the complexity so you can focus on your future.
               </p>
               <div className="flex items-center space-x-10">
                 <div className="flex flex-col">
                   <span className="text-4xl font-bold font-serif-brand italic text-slate-900">60+</span>
                   <span className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Approved Lenders</span>
                 </div>
                 <div className="w-px h-12 bg-slate-200"></div>
                 <div className="flex flex-col">
                   <span className="text-4xl font-bold font-serif-brand italic text-slate-900">100%</span>
                   <span className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Client First Focus</span>
                 </div>
               </div>
            </div>
            <div className="relative group">
               <div className="absolute -inset-4 bg-gold/10 rounded-[48px] rotate-2 group-hover:rotate-0 transition-transform duration-500"></div>
               <div className="relative rounded-[40px] overflow-hidden shadow-2xl aspect-[4/3]">
                 <img 
                   src="https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80&w=800" 
                   alt="Happy Family at Home" 
                   className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                 />
                 <div className="absolute inset-0 bg-gold/5 pointer-events-none"></div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-32 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-24">
            <h2 className="text-5xl font-serif-brand italic font-bold text-slate-900 mb-8">What We Do</h2>
            <div className="h-1.5 w-24 gold-gradient mx-auto rounded-full mb-10"></div>
            <p className="text-xl text-slate-600 font-medium leading-relaxed">
              We provide credit assistance services, helping you compare suitable loan options from a panel of approved lenders and supporting you through application, approval, and settlement.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">
             <div className="bg-white p-14 rounded-[40px] shadow-sm border border-slate-100 flex flex-col justify-center card-hover">
                <div className="space-y-8">
                   <div className="inline-flex items-center space-x-4 text-slate-900 font-bold bg-gold/10 px-8 py-4 rounded-2xl border border-gold/20">
                      <ShieldCheck className="w-8 h-8 text-gold" />
                      <span className="text-lg">We do not lend money directly.</span>
                   </div>
                   <p className="text-slate-600 leading-relaxed font-medium text-lg">
                      Our independence is your advantage. We focus entirely on your needs, acting as the strategic bridge between you and Australia's leading financial institutions.
                   </p>
                </div>
             </div>
             <div className="rounded-[40px] overflow-hidden shadow-xl">
               <img 
                src="https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?auto=format&fit=crop&q=80&w=800" 
                alt="Professional Consultation" 
                className="w-full h-full object-cover"
               />
             </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-24">
            <span className="text-gold font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block">Our Difference</span>
            <h2 className="text-5xl md:text-7xl font-serif-brand italic font-bold text-slate-900 mb-8 leading-[1.1] flex items-baseline justify-center flex-wrap tracking-tight">
              <span className="mr-4">Why Clients Choose</span>
              <span className="inline-flex items-baseline mr-4">
                <span className="text-[1.5em] leading-none font-serif-brand font-bold">1</span>
                <span className="text-[0.6em] ml-1">st</span>
              </span>
              <span>Mortgage Group</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              { title: "Clear Explanations", desc: "No jargon. Just simple, easy-to-understand advice tailored to your personal circumstances.", icon: <CheckCircle2 className="w-6 h-6" /> },
              { title: "Responsible Lending", desc: "Our advice is always aligned with your financial situation, ensuring stability and long-term peace of mind.", icon: <Users className="w-6 h-6" /> },
              { title: "Transparent Disclosure", desc: "Full transparency on all commissions and fees. You'll know exactly how it works before any decision.", icon: <ShieldCheck className="w-6 h-6" /> },
              { title: "Long-term Support", desc: "We are your partners for the life of the loan, providing ongoing support and annual reviews.", icon: <Home className="w-6 h-6" /> },
              { title: "Compliance-Driven", desc: "Strict adherence to Australian credit laws and ASIC requirements for a professional service you can trust.", icon: <ArrowUpRight className="w-6 h-6" /> },
              { title: "Friendly Guidance", desc: "A person-first approach that treats every application with the care it deserves.", icon: <Star className="w-6 h-6" /> },
            ].map((item, i) => (
              <div key={i} className="group p-12 rounded-[40px] bg-slate-50 border border-slate-100 hover:border-gold/30 hover:bg-white hover:shadow-2xl transition-all duration-500 card-hover">
                <div className="w-16 h-16 rounded-2xl gold-gradient flex items-center justify-center text-slate-900 mb-10 group-hover:scale-110 transition-transform shadow-lg">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-serif-brand italic font-bold text-slate-900 mb-5">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section (New - Improvements) */}
      <section className="py-32 bg-slate-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-32 opacity-5">
           <Quote className="w-96 h-96 text-white" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <span className="text-gold font-bold uppercase tracking-[0.4em] text-[10px] mb-4 block">Testimonials</span>
            <h2 className="text-4xl md:text-6xl font-serif-brand italic font-bold text-white mb-6">Trusted by Families <br />Across Australia</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              { name: "The Harrison Family", text: "1st Mortgage Group made buying our first home surprisingly simple. The advice was clear and they handled all the heavy lifting with the bank.", role: "First Home Buyers" },
              { name: "Michael T.", text: "I saved thousands by refinancing through their expert guidance. They explained the math clearly and the process was seamless.", role: "Refinance Client" },
              { name: "Sarah & David", text: "Professional, responsive, and truly looked after our best interests. We won't go anywhere else for our future investment loans.", role: "Property Investors" },
            ].map((t, i) => (
              <div key={i} className="bg-white/5 border border-white/10 p-12 rounded-[40px] backdrop-blur-sm">
                <Quote className="w-8 h-8 text-gold mb-8 opacity-50" />
                <p className="text-slate-300 text-lg mb-10 italic leading-relaxed font-medium">"{t.text}"</p>
                <div>
                  <p className="text-white font-bold font-serif-brand italic text-xl">{t.name}</p>
                  <p className="text-gold text-[10px] uppercase tracking-widest font-bold mt-1">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Friendly Imagery: Home Lifestyle */}
      <section className="h-[70vh] relative overflow-hidden bg-slate-100">
         <img 
           src="https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&q=80&w=1600" 
           alt="Dream Home Backyard" 
           className="w-full h-full object-cover" 
         />
         <div className="absolute inset-0 bg-slate-950/50 flex items-center justify-center">
            <div className="max-w-4xl text-center px-4">
               <h2 className="text-5xl md:text-7xl font-serif-brand italic font-bold text-white mb-10 tracking-tight">Clear Advice. Smart Lending. <br /><span className="text-gold">Trusted Outcomes.</span></h2>
               <Link to="/pre-approval-enquiry" className="inline-block px-14 py-6 gold-gradient text-slate-900 rounded-2xl font-bold uppercase tracking-[0.2em] text-sm shadow-2xl transition-transform hover:scale-105 active:scale-95">
                 Start Your Conversation
               </Link>
            </div>
         </div>
      </section>

      {/* Final CTA */}
      <section className="py-40 bg-slate-950 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1600" alt="Architecture" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-gold font-bold uppercase tracking-[0.4em] text-[11px] mb-8 block">Take the next step</span>
          <h2 className="text-6xl md:text-8xl font-serif-brand italic font-bold mb-12 leading-[1.05] tracking-tight">Ready to find the <br />right loan structure?</h2>
          <p className="text-xl md:text-2xl text-slate-400 mb-16 max-w-3xl mx-auto font-medium leading-relaxed">
            Join the many Australians who trust 1st Mortgage Group for their residential and investment lending needs. Professional guidance is just a click away.
          </p>
          <Link to="/pre-approval-enquiry" className="inline-flex items-center px-14 py-7 gold-gradient rounded-2xl text-slate-900 font-bold shadow-2xl hover:scale-105 transition-transform uppercase tracking-[0.25em] text-[15px]">
            Start a Pre-Approval Enquiry
            <ArrowUpRight className="ml-4 w-6 h-6" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
