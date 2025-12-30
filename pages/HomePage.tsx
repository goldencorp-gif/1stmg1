
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Sparkles, ShieldCheck, Bot, BarChart3, ChevronRight } from 'lucide-react';
import { useLanguage, Language } from '../App';

const HomePage: React.FC = () => {
  const { language } = useLanguage();

  const content: Record<Language, any> = {
    en: {
      hero_tag: '1st Mortgage Group • Putting Clients 1st',
      hero_title: 'Mortgage Brokers Who Put You 1st',
      hero_desc_1: 'At 1st Mortgage Group, our name is our promise. We put clients 1st by combining deep industry expertise with modern financial technology to help you make confident, wealth-building property decisions.',
      hero_desc_2: 'From first homes to complex portfolios, we guide you with transparency, strategy, and care.',
      hero_btn_1: 'Start a Pre-Approval Enquiry',
      hero_btn_2: 'Meet the Team',
      trust_tag: 'Panel of Leading Australian Institutions',
      adv_tag: 'The 1st Mortgage Advantage',
      adv_title: 'More Than Just a Low Rate',
      adv_desc: 'We believe in empowering our clients. That means giving you the tools, the technology, and the strategic advice to pay off your mortgage faster.',
      f1_title: 'Wealth Strategy',
      f1_desc: 'We don\'t just find a loan; we structure it. We help you use offset accounts and loan splits to minimize interest.',
      f2_title: 'Smart Technology',
      f2_desc: 'Experience the future of broking. Use our AI Assistant for 24/7 answers to common questions.',
      f3_title: 'Market Advocacy',
      f3_desc: 'We negotiate with over 60 lenders on your behalf to secure terms and policy exceptions.',
      strat_tag: 'Our Methodology',
      strat_title: 'Intelligence-Led Lending',
      strat_desc: 'Our approach is designed for the modern borrower who demands transparency and data-driven results.'
    },
    zh: {
      hero_tag: '第一房贷集团 • 客户至上',
      hero_title: '始终将您放在第一位的房贷经纪',
      hero_desc_1: '在第一房贷集团（1st Mortgage Group），我们的名字就是我们的承诺。我们将深厚的行业专长与现代金融科技相结合，助力您做出自信且增值的置业决策。',
      hero_desc_2: '从首次置业到复杂的投资组合，我们为您提供透明、具策略性且细致的指导。',
      hero_btn_1: '开始预批咨询',
      hero_btn_2: '了解团队',
      trust_tag: '澳洲领先金融机构合作伙伴',
      adv_tag: '第一房贷的独特优势',
      adv_title: '不仅是低利率',
      adv_desc: '我们致力于赋能客户。这意味着为您提供工具、技术和战略建议，帮助您更快地付清抵押贷款。',
      f1_title: '财富战略',
      f1_desc: '我们不仅仅是寻找贷款，我们更在乎贷款结构。我们协助您利用对冲账户和贷款拆分来最大限度减少利息。',
      f2_title: '智能科技',
      f2_desc: '体验房贷经纪的未来。使用我们的AI助手，24/7全天候解答您的常见问题。',
      f3_title: '市场倡议',
      f3_desc: '我们代表您与超过60家贷款机构进行谈判，争取最优条款和政策例外。',
      strat_tag: '我们的方法论',
      strat_title: '智能驱动的贷款服务',
      strat_desc: '我们的服务专为追求透明度和数据驱动结果的现代借款人而设计。'
    },
    es: {
      hero_tag: '1st Mortgage Group • Clientes Primero',
      hero_title: 'Brokers Hipotecarios que te ponen Primero',
      hero_desc_1: 'En 1st Mortgage Group, nuestro nombre es nuestra promesa. Ponemos a los clientes primero combinando una profunda experiencia en la industria con tecnología financiera moderna.',
      hero_desc_2: 'Desde la primera vivienda hasta carteras complejas, te guiamos con transparencia, estrategia y cuidado.',
      hero_btn_1: 'Iniciar Consulta de Pre-Aprobación',
      hero_btn_2: 'Conoce al Equipo',
      trust_tag: 'Panel de Instituciones Australianas Líderes',
      adv_tag: 'La Ventaja de 1st Mortgage',
      adv_title: 'Más que una tasa baja',
      adv_desc: 'Creemos en empoderar a nuestros clientes. Eso significa darte las herramientas y el asesoramiento estratégico para pagar tu hipoteca más rápido.',
      f1_title: 'Estrategia de Riqueza',
      f1_desc: 'No solo buscamos un préstamo; lo estructuramos. Te ayudamos a usar cuentas offset para minimizar intereses.',
      f2_title: 'Tecnología Inteligente',
      f2_desc: 'Vive el futuro del corretaje. Usa nuestro Asistente de IA para respuestas 24/7.',
      f3_title: 'Defensa del Mercado',
      f3_desc: 'Negociamos con más de 60 prestamistas en tu nombre para asegurar términos y excepciones de póliza.',
      strat_tag: 'Nuestra Metodología',
      strat_title: 'Préstamos Liderados por Inteligencia',
      strat_desc: 'Nuestro enfoque está diseñado para el prestatario moderno que exige transparencia y resultados basados en datos.'
    },
    vi: {
      hero_tag: '1st Mortgage Group • Đặt Khách hàng Lên hàng đầu',
      hero_title: 'Nhà môi giới Thế chấp Đặt Bạn lên hàng đầu',
      hero_desc_1: 'Tại 1st Mortgage Group, tên gọi cũng là lời hứa của chúng tôi. Chúng tôi ưu tiên khách hàng bằng cách kết hợp chuyên môn sâu rộng với công nghệ tài chính hiện đại.',
      hero_desc_2: 'Từ căn nhà đầu tiên đến các danh mục đầu tư phức tạp, chúng tôi hướng dẫn bạn bằng sự minh bạch, chiến lược và tận tâm.',
      hero_btn_1: 'Bắt đầu yêu cầu duyệt trước',
      hero_btn_2: 'Gặp gỡ đội ngũ',
      trust_tag: 'Đối tác của các tổ chức hàng đầu Úc',
      adv_tag: 'Lợi thế của 1st Mortgage',
      adv_title: 'Không chỉ là Lãi suất thấp',
      adv_desc: 'Chúng tôi tin tưởng vào việc trao quyền cho khách hàng. Điều đó có nghĩa là cung cấp cho bạn các công cụ, công nghệ và lời khuyên chiến lược để trả nợ nhanh hơn.',
      f1_title: 'Chiến lược Tài chính',
      f1_desc: 'Chúng tôi không chỉ tìm một khoản vay; chúng tôi cấu trúc nó. Chúng tôi giúp bạn sử dụng tài khoản bù trừ để giảm thiểu lãi suất.',
      f2_title: 'Công nghệ Thông minh',
      f2_desc: 'Trải nghiệm tương lai của ngành môi giới. Sử dụng Trợ lý AI của chúng tôi để trả lời các câu hỏi 24/7.',
      f3_title: 'Đại diện Thị trường',
      f3_desc: 'Chúng tôi thay mặt bạn đàm phán với hơn 60 tổ chức cho vay để đảm bảo các điều khoản tốt nhất.',
      strat_tag: 'Phương pháp của chúng tôi',
      strat_title: 'Cho vay Dẫn dắt bởi Trí tuệ',
      strat_desc: 'Phương pháp của chúng tôi được thiết kế cho người đi vay hiện đại, những người yêu cầu sự minh bạch và kết quả dựa trên dữ liệu.'
    },
    hi: {
      hero_tag: '1st Mortgage Group • ग्राहकों को प्रथम स्थान देना',
      hero_title: 'मॉर्गेज ब्रोकर्स जो आपको प्रथम रखते हैं',
      hero_desc_1: '1st Mortgage Group में, हमारा नाम ही हमारा वादा है। हम आधुनिक वित्तीय तकनीक के साथ उद्योग की विशेषज्ञता को जोड़कर ग्राहकों को प्रथम रखते हैं।',
      hero_desc_2: 'पहले घर से लेकर जटिल पोर्टफोलियो तक, हम आपको पारदर्शिता, रणनीति और देखभाल के साथ मार्गदर्शन करते हैं।',
      hero_btn_1: 'प्री-अप्रूवल पूछताछ शुरू करें',
      hero_btn_2: 'टीम से मिलें',
      trust_tag: 'प्रमुख ऑस्ट्रेलियाई संस्थानों का पैनल',
      adv_tag: '1st Mortgage का लाभ',
      adv_title: 'सिर्फ एक कम दर से अधिक',
      adv_desc: 'हम अपने ग्राहकों को सशक्त बनाने में विश्वास करते हैं। इसका मतलब है कि आपको अपना मॉर्गेज जल्दी चुकाने के लिए उपकरण और रणनीति देना।',
      f1_title: 'धन रणनीति',
      f1_desc: 'हम सिर्फ ऋण नहीं खोजते; हम इसे संरचित करते हैं। हम ब्याज कम करने के लिए ऑफसेट खातों का उपयोग करने में आपकी मदद करते हैं।',
      f2_title: 'स्मार्ट तकनीक',
      f2_desc: 'ब्रोकिंग के भविष्य का अनुभव करें। सामान्य प्रश्नों के 24/7 उत्तर के लिए हमारे AI सहायक का उपयोग करें।',
      f3_title: 'बाजार वकालत',
      f3_desc: 'हम आपकी ओर से 60 से अधिक ऋणदाताओं के साथ बातचीत करते हैं ताकि सर्वोत्तम शर्तें सुरक्षित की जा सकें।',
      strat_tag: 'हमारी कार्यप्रणाली',
      strat_title: 'इंटेलिजेंस-आधारित ऋण देना',
      strat_desc: 'हमारा दृष्टिकोण आधुनिक उधारकर्ता के लिए डिज़ाइन किया गया है जो पारदर्शिता और डेटा-संचालित परिणामों की मांग करता है।'
    }
  };

  const current = content[language];

  return (
    <div className="flex flex-col bg-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-[#FDFCFB] overflow-hidden pt-12">
        <div className="absolute inset-0 z-0">
           <img 
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1600" 
            alt="Natural Modern Home" 
            className="w-full h-full object-cover opacity-[0.18] scale-105"
           />
           <div className="absolute inset-0 bg-gradient-to-tr from-[#FDFCFB] via-[#FDFCFB]/40 to-transparent"></div>
           <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#FDFCFB]"></div>
           <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[120px] -mr-48 -mt-48"></div>
           <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-stone-200/30 rounded-full blur-[100px] -ml-64 -mb-64"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
          <div className="max-w-4xl">
             <div className="inline-flex items-center space-x-3 bg-white/60 backdrop-blur-sm border border-stone-200 rounded-full px-5 py-2 mb-10 shadow-sm">
               <span className="w-2 h-2 rounded-full bg-gold animate-pulse"></span>
               <span className="text-[10px] font-black uppercase tracking-[0.3em] text-stone-900">{current.hero_tag}</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif-brand italic font-bold mb-10 leading-[1.1] tracking-tight text-slate-900">
               {language === 'hi' ? (
                 <>आपकी <span className="text-gold">प्राथमिकता</span> हमारी पहचान</>
               ) : (
                 <>{current.hero_title.split('You 1st')[0]} <span className="text-gold">You 1st</span></>
               )}
            </h1>
            
            <div className="flex flex-col space-y-6 mb-12">
              <p className="text-lg md:text-xl text-stone-600 leading-relaxed font-medium max-w-2xl border-l-2 border-gold/30 pl-6">
                {current.hero_desc_1}
              </p>
              <p className="text-lg md:text-xl text-stone-600 leading-relaxed font-medium max-w-2xl pl-6">
                {current.hero_desc_2}
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <Link to="/pre-approval-enquiry" className="px-12 py-5 bg-gold hover:bg-[#b8962e] text-white rounded-xl font-bold shadow-[0_20px_40px_-10px_rgba(212,175,55,0.3)] transition-all hover:scale-105 uppercase tracking-[0.2em] text-[11px] text-center active:scale-95 flex items-center justify-center">
                {current.hero_btn_1}
              </Link>
              <Link to="/about" className="px-12 py-5 bg-white hover:bg-slate-50 text-slate-900 border border-slate-200 rounded-xl font-bold shadow-sm transition-all hover:scale-105 uppercase tracking-[0.2em] text-[11px] text-center active:scale-95 flex items-center justify-center">
                {current.hero_btn_2}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Banner */}
      <div className="bg-[#FDFCFB] py-16 border-y border-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <p className="text-center text-[10px] uppercase tracking-[0.5em] font-black text-stone-300 mb-10">{current.trust_tag}</p>
           <div className="flex flex-wrap justify-center items-center gap-8 md:gap-20 opacity-30 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-1000">
             {['ANZ', 'CBA', 'NAB', 'WESTPAC', 'MACQUARIE', 'SUNCORP'].map(bank => (
               <span key={bank} className="text-xl md:text-2xl font-black tracking-[0.2em] font-sans text-slate-900">{bank}</span>
             ))}
           </div>
        </div>
      </div>

      {/* The Advantage Section */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
           <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-24 gap-12">
              <div className="max-w-3xl">
                <span className="text-gold font-bold uppercase tracking-[0.3em] text-[10px] mb-6 block">{current.adv_tag}</span>
                <h2 className="text-5xl md:text-7xl font-serif-brand italic font-bold text-slate-900 mb-8 leading-[1.1]">{current.adv_title}</h2>
                <div className="border-l-2 border-gold/30 pl-8">
                  <p className="text-xl text-slate-600 font-medium leading-relaxed max-w-2xl">{current.adv_desc}</p>
                </div>
              </div>
              <div className="shrink-0 pb-2">
                <Link to="/mortgage-calculator" className="inline-flex items-center space-x-3 text-slate-900 font-black uppercase tracking-[0.2em] text-[11px] hover:text-gold transition-colors group">
                  <span>Explore Intelligence Tools</span>
                  <div className="p-3 bg-slate-50 rounded-full group-hover:bg-gold group-hover:text-white transition-all">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </Link>
              </div>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <FeatureCard 
                icon={<BarChart3 className="w-7 h-7" />} 
                title={current.f1_title} 
                desc={current.f1_desc}
                accent="gold"
              />
              <FeatureCard 
                icon={<Sparkles className="w-7 h-7" />} 
                title={current.f2_title} 
                desc={current.f2_desc}
                accent="dark"
                special={true}
              />
              <FeatureCard 
                icon={<ShieldCheck className="w-7 h-7" />} 
                title={current.f3_title} 
                desc={current.f3_desc}
                accent="gold"
              />
           </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-32 bg-slate-50 border-t border-slate-100 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
              <div className="relative order-2 lg:order-1">
                 {/* Fixed Container to prevent overflow issues */}
                 <div className="relative">
                   <div className="aspect-[4/5] rounded-[48px] overflow-hidden shadow-2xl relative z-10 border border-white/50">
                      <img 
                        src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200" 
                        alt="Strategic Investment" 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent"></div>
                   </div>
                   {/* Background Accents contained with absolute layering */}
                   <div className="absolute -top-12 -left-12 w-64 h-64 bg-gold/5 rounded-full blur-[80px] -z-10"></div>
                   <div className="absolute -bottom-12 -right-12 w-96 h-96 bg-slate-200/50 rounded-full blur-[100px] -z-20"></div>
                 </div>
              </div>

              <div className="order-1 lg:order-2">
                 <span className="text-gold font-bold uppercase tracking-[0.3em] text-[10px] mb-8 block">{current.strat_tag}</span>
                 <h2 className="text-5xl md:text-6xl font-serif-brand italic font-bold text-slate-900 mb-10 leading-[1.1]">{current.strat_title}</h2>
                 <p className="text-xl text-stone-600 leading-relaxed font-medium mb-12 border-l-2 border-gold/30 pl-8 italic">
                   {current.strat_desc}
                 </p>
                 <div className="space-y-6">
                    <MethodItem title="Strategic Structuring" desc="Optimizing offset accounts and loan splits for maximum long-term benefit." />
                    <MethodItem title="Lender Neutrality" desc="We maintain complete independence, ensuring your best interest is the only metric that matters." />
                    <MethodItem title="Ongoing Advocacy" desc="Our commitment continues long after settlement, with regular rate reviews as standard." />
                 </div>
                 <Link to="/pre-approval-enquiry" className="mt-16 inline-flex items-center space-x-4 px-10 py-5 bg-slate-950 text-white rounded-xl font-bold uppercase tracking-[0.2em] text-[11px] hover:bg-slate-800 transition-all shadow-xl group">
                   <span>Secure Your Pre-Approval</span>
                   <ChevronRight className="w-5 h-5 text-gold group-hover:translate-x-1 transition-transform" />
                 </Link>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
};

const FeatureCard = ({ icon, title, desc, accent, special = false }: any) => (
  <div className={`
    p-12 rounded-[40px] border transition-all duration-500 group relative overflow-hidden
    ${accent === 'dark' ? 'bg-slate-950 text-white border-slate-800 shadow-2xl' : 'bg-white text-slate-900 border-slate-100 hover:shadow-2xl hover:-translate-y-2'}
  `}>
    {special && (
      <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:opacity-10 transition-opacity">
        <Bot className="w-48 h-48" />
      </div>
    )}
    <div className={`
      w-16 h-16 rounded-2xl flex items-center justify-center mb-10 transition-transform group-hover:scale-110
      ${accent === 'dark' ? 'bg-white/10 backdrop-blur-sm border border-white/10' : 'bg-slate-50 text-gold shadow-sm'}
    `}>
      {React.cloneElement(icon, { className: 'text-gold' })}
    </div>
    <h3 className={`text-2xl font-serif-brand italic font-bold mb-6 ${accent === 'dark' ? 'text-white' : 'text-slate-900'}`}>{title}</h3>
    <p className={`text-base font-medium leading-relaxed ${accent === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>{desc}</p>
  </div>
);

const MethodItem = ({ title, desc }: { title: string, desc: string }) => (
  <div className="flex items-start space-x-5 group cursor-default">
    <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2.5 shrink-0 group-hover:scale-150 transition-transform"></div>
    <div>
      <h4 className="text-[11px] font-black uppercase tracking-[0.25em] text-slate-900 mb-2">{title}</h4>
      <p className="text-sm text-slate-500 font-medium leading-relaxed">{desc}</p>
    </div>
  </div>
);

export default HomePage;
