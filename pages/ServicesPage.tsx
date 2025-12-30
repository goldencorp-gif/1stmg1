
import React from 'react';
import { Home, RefreshCcw, Building2, Hammer, Landmark, AlertCircle, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage, Language } from '../App';

const ServicesPage: React.FC = () => {
  const { language } = useLanguage();

  const content: Record<Language, any> = {
    en: {
      tag: 'Our Solutions',
      title: 'Mortgage & Loan Services',
      desc: 'We assist with a range of residential lending solutions, helping you navigate the complex landscape of Australian finance.',
      cta_title: 'Need something else?',
      cta_desc: 'Contact us to discuss your unique lending situation and see how we can help.',
      cta_btn: 'Get in touch',
      note_title: 'Important Note',
      note_desc: 'We provide credit assistance only. Loan approval and credit decisions are made by the lender. Our role is to find the most suitable option and manage the application process on your behalf.',
      s1: 'Home Loans',
      s1_f: ['First home buyer loans', 'Owner-occupied purchases'],
      s2: 'Refinancing',
      s2_f: ['Reviewing existing loans', 'Interest rate comparisons', 'Loan restructuring'],
      s3: 'Investment Loans',
      s3_f: ['Residential investment properties', 'Portfolio considerations'],
      s4: 'Construction Loans',
      s4_f: ['House and land packages', 'Construction funding'],
      s5: 'Debt Consolidation',
      s5_f: ['Combining multiple debts into one structure']
    },
    zh: {
      tag: '我们的解决方案',
      title: '抵押贷款与贷款服务',
      desc: '我们协助提供一系列住宅贷款解决方案，帮助您在复杂的澳洲金融格局中游刃有余。',
      cta_title: '有其他需求吗？',
      cta_desc: '联系我们讨论您的独特贷款情况，看看我们能如何提供帮助。',
      cta_btn: '联系我们',
      note_title: '重要提示',
      note_desc: '我们仅提供信贷协助。贷款审批和信贷决策由贷款机构做出。我们的职责是代表您寻找最合适的方案并管理申请流程。',
      s1: '住房贷款',
      s1_f: ['首次置业贷款', '自住房购买'],
      s2: '转贷/再融资',
      s2_f: ['审查现有贷款', '利率对比', '贷款重组'],
      s3: '投资贷款',
      s3_f: ['住宅投资物业', '投资组合规划'],
      s4: '建筑贷款',
      s4_f: ['房地套餐 (House & Land)', '建筑资金申请'],
      s5: '债务合并',
      s5_f: ['将多项债务合并为一个结构']
    },
    es: {
      tag: 'Nuestras Soluciones',
      title: 'Servicios de Hipotecas y Préstamos',
      desc: 'Le ayudamos con una gama de soluciones de préstamos residenciales, ayudándole a navegar por el complejo panorama de las finanzas australianas.',
      cta_title: '¿Necesita algo más?',
      cta_desc: 'Contáctenos para discutir su situación crediticia única y ver cómo podemos ayudarle.',
      cta_btn: 'Ponerse en contacto',
      note_title: 'Nota Importante',
      note_desc: 'Sólo proporcionamos asistencia crediticia. La aprobación de los préstamos y las decisiones de crédito son tomadas por el prestamista. Nuestra función es encontrar la opción más adecuada y gestionar el proceso de solicitud en su nombre.',
      s1: 'Préstamos para Vivienda',
      s1_f: ['Préstamos para primeros compradores', 'Compras de vivienda propia'],
      s2: 'Refinanciación',
      s2_f: ['Revisión de préstamos existentes', 'Comparación de tasas de interés', 'Reestructuración de préstamos'],
      s3: 'Préstamos para Inversión',
      s3_f: ['Propiedades de inversión residencial', 'Consideraciones de cartera'],
      s4: 'Préstamos para Construcción',
      s4_f: ['Paquetes de casa y terreno', 'Financiación de la construcción'],
      s5: 'Consolidación de Deudas',
      s5_f: ['Combinación de múltiples deudas en una sola estructura']
    },
    vi: {
      tag: 'Giải pháp của chúng tôi',
      title: 'Dịch vụ Thế chấp & Cho vay',
      desc: 'Chúng tôi hỗ trợ hàng loạt giải pháp cho vay nhà ở, giúp bạn định hướng trong bối cảnh tài chính phức tạp của Úc.',
      cta_title: 'Cần giải pháp khác?',
      cta_desc: 'Liên hệ với chúng tôi để thảo luận về tình huống vay vốn độc đáo của bạn.',
      cta_btn: 'Liên hệ ngay',
      note_title: 'Lưu ý quan trọng',
      note_desc: 'Chúng tôi chỉ cung cấp hỗ trợ tín dụng. Việc phê duyệt khoản vay và quyết định tín dụng do bên cho vay thực hiện. Vai trò của chúng tôi là tìm phương án phù hợp nhất và quản lý quy trình hồ sơ thay mặt bạn.',
      s1: 'Vay mua nhà',
      s1_f: ['Vay mua nhà lần đầu', 'Mua nhà để ở'],
      s2: 'Tái cấp vốn',
      s2_f: ['Xem xét khoản vay hiện tại', 'So sánh lãi suất', 'Tái cấu trúc khoản vay'],
      s3: 'Vay đầu tư',
      s3_f: ['Bất động sản đầu tư nhà ở', 'Xem xét danh mục đầu tư'],
      s4: 'Vay xây dựng',
      s4_f: ['Gói nhà và đất', 'Nguồn vốn xây dựng'],
      s5: 'Hợp nhất nợ',
      s5_f: ['Kết hợp nhiều khoản nợ thành một cấu trúc duy nhất']
    },
    hi: {
      tag: 'हमारे समाधान',
      title: 'मॉर्गेज और ऋण सेवाएं',
      desc: 'हम आवासीय ऋण समाधानों की एक श्रृंखला के साथ सहायता करते हैं, जिससे आपको ऑस्ट्रेलियाई वित्त के जटिल परिदृश्य को समझने में मदद मिलती है।',
      cta_title: 'कुछ और चाहिए?',
      cta_desc: 'अपनी अद्वितीय ऋण स्थिति पर चर्चा करने के लिए हमसे संपर्क करें।',
      cta_btn: 'संपर्क करें',
      note_title: 'महत्वपूर्ण नोट',
      note_desc: 'हम केवल ऋण सहायता प्रदान करते हैं। ऋण स्वीकृति और ऋण निर्णय ऋणदाता द्वारा लिए जाते हैं। हमारी भूमिका सबसे उपयुक्त विकल्प खोजना और आपकी ओर से आवेदन प्रक्रिया का प्रबंधन करना है।',
      s1: 'होम लोन',
      s1_f: ['पहली बार घर खरीदार ऋण', 'स्वयं के रहने के लिए खरीदारी'],
      s2: 'पुनर्वित्त (Refinancing)',
      s2_f: ['मौजूदा ऋणों की समीक्षा', 'ब्याज दर की तुलना', 'ऋण पुनर्गठन'],
      s3: 'निवेश ऋण',
      s3_f: ['आवासीय निवेश संपत्ति', 'पोर्टफोलियो विचार'],
      s4: 'निर्माण ऋण',
      s4_f: ['हाउस और लैंड पैकेज', 'निर्माण वित्तपोषण'],
      s5: 'ऋण समेकन (Debt Consolidation)',
      s5_f: ['एकाधिक ऋणों को एक संरचना में जोड़ना']
    }
  };

  const current = content[language];

  const services = [
    { title: current.s1, icon: <Home className="w-8 h-8" />, features: current.s1_f, color: "bg-blue-50 text-blue-600" },
    { title: current.s2, icon: <RefreshCcw className="w-8 h-8" />, features: current.s2_f, color: "bg-green-50 text-green-600" },
    { title: current.s3, icon: <Building2 className="w-8 h-8" />, features: current.s3_f, color: "bg-purple-50 text-purple-600" },
    { title: current.s4, icon: <Hammer className="w-8 h-8" />, features: current.s4_f, color: "bg-orange-50 text-orange-600" },
    { title: current.s5, icon: <Landmark className="w-8 h-8" />, features: current.s5_f, color: "bg-red-50 text-red-600" }
  ];

  return (
    <div className="py-24 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-gold font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block text-center">{current.tag}</span>
          <h1 className="text-4xl md:text-5xl font-serif-brand italic font-bold text-slate-900 mb-6">{current.title}</h1>
          <p className="text-xl text-slate-600 font-medium leading-relaxed">{current.desc}</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, i) => (
            <div key={i} className="bg-white p-10 rounded-[32px] shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className={`w-16 h-16 rounded-2xl ${service.color} flex items-center justify-center mb-8`}>
                {service.icon}
              </div>
              <h2 className="text-2xl font-serif-brand italic font-bold text-slate-900 mb-5">{service.title}</h2>
              <ul className="space-y-4 mb-8">
                {service.features.map((feature: string, j: number) => (
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
               <h3 className="text-2xl font-serif-brand italic font-bold mb-4">{current.cta_title}</h3>
               <p className="text-slate-400 font-medium mb-10 leading-relaxed">{current.cta_desc}</p>
               <Link to="/contact" className="inline-flex items-center text-gold font-bold hover:translate-x-2 transition-transform uppercase tracking-widest text-[11px]">
                 {current.cta_btn}
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
            <h3 className="text-xl font-serif-brand italic font-bold text-slate-900 mb-2">{current.note_title}</h3>
            <p className="text-slate-600 leading-relaxed font-medium italic">
              {current.note_desc}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
