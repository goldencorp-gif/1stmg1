
import React from 'react';
import { Briefcase, TrendingUp, Shield, Laptop, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage, Language } from '../App';

const BrokersPage: React.FC = () => {
  const { language } = useLanguage();

  const content: Record<Language, any> = {
    en: {
      tag: 'Opportunities',
      title: 'For Mortgage Brokers',
      desc: '1st Mortgage Group provides a professional, compliance-focused environment for brokers seeking sustainable growth.',
      who_title: 'Who This May Suit',
      item1: 'New Brokers',
      item1_d: 'Mentoring and structure for those entering the industry.',
      item2: 'Experienced Brokers',
      item2_d: 'A better structure and compliance-first brand.',
      support_title: 'Professional Support',
      support_items: ['Structured onboarding', 'Lender panel access', 'ASIC-aligned compliance', 'CRM and process support'],
      cta_title: 'Expression of Interest',
      cta_desc: 'If you would like to explore professional alignment, please submit a confidential enquiry.',
      cta_btn: 'Start Confidential Conversation'
    },
    zh: {
      tag: '事业机会',
      title: '致房贷经纪人',
      desc: '第一房贷集团为寻求可持续增长的经纪人提供专业、注重合规的工作环境。',
      who_title: '我们的目标伙伴',
      item1: '新入行经纪人',
      item1_d: '为刚入行者提供高质量的辅导和架构支持。',
      item2: '资深经纪人',
      item2_d: '提供更好的提成结构和合规优先的品牌支持。',
      support_title: '专业支持',
      support_items: ['结构化入职流程', '广泛的银行面板访问', '符合ASIC标准的合规框架', 'CRM和流程管理支持'],
      cta_title: '意向表达',
      cta_desc: '如果您希望探索与我们的专业合作，请提交保密咨询。',
      cta_btn: '开始保密对话'
    },
    es: {
      tag: 'Oportunidades',
      title: 'Para Brokers Hipotecarios',
      desc: '1st Mortgage Group ofrece un entorno profesional y centrado en el cumplimiento para brokers que buscan un crecimiento sostenible.',
      who_title: 'A Quién Puede Interesar',
      item1: 'Nuevos Brokers',
      item1_d: 'Mentoría y estructura para quienes ingresan a la industria.',
      item2: 'Brokers Experimentados',
      item2_d: 'Una mejor estructura y una marca que prioriza el cumplimiento.',
      support_title: 'Apoyo Profesional',
      support_items: ['Incorporación estructurada', 'Acceso a paneles de prestamistas', 'Cumplimiento alineado con ASIC', 'Soporte de CRM y procesos'],
      cta_title: 'Expresión de Interés',
      cta_desc: 'Si desea explorar una alineación profesional, envíe una consulta confidencial.',
      cta_btn: 'Iniciar Conversación Confidencial'
    },
    vi: {
      tag: 'Cơ hội nghề nghiệp',
      title: 'Dành cho Broker thế chấp',
      desc: '1st Mortgage Group cung cấp môi trường chuyên nghiệp, tập trung vào tuân thủ cho các broker tìm kiếm sự tăng trưởng bền vững.',
      who_title: 'Ai phù hợp với chúng tôi',
      item1: 'Broker mới',
      item1_d: 'Cung cấp hướng dẫn và cấu trúc cho những người mới gia nhập ngành.',
      item2: 'Broker giàu kinh nghiệm',
      item2_d: 'Cấu trúc tốt hơn và thương hiệu ưu tiên tuân thủ.',
      support_title: 'Hỗ trợ chuyên nghiệp',
      support_items: ['Quy trình đào tạo bài bản', 'Truy cập danh sách ngân hàng lớn', 'Khung tuân thủ chuẩn ASIC', 'Hỗ trợ CRM và quy trình'],
      cta_title: 'Bày tỏ sự quan tâm',
      cta_desc: 'Nếu bạn muốn tìm hiểu cơ hội hợp tác chuyên nghiệp, hãy gửi yêu cầu bảo mật.',
      cta_btn: 'Bắt đầu trao đổi bảo mật'
    },
    hi: {
      tag: 'अवसर',
      title: 'मॉर्गेज ब्रोकर्स के लिए',
      desc: '1st Mortgage Group निरंतर विकास की तलाश करने वाले ब्रोकर्स के लिए एक पेशेवर, अनुपालन-केंद्रित वातावरण प्रदान करता है।',
      who_title: 'यह किसके लिए उपयुक्त है',
      item1: 'नए ब्रोकर्स',
      item1_d: 'उद्योग में प्रवेश करने वालों के लिए सलाह और संरचना।',
      item2: 'अनुभवी ब्रोकर्स',
      item2_d: 'एक बेहतर संरचना और अनुपालन-प्रथम ब्रांड।',
      support_title: 'पेशेवर सहायता',
      support_items: ['व्यवस्थित ऑनबोर्डिंग', 'ऋणदाता पैनल तक पहुंच', 'ASIC-संरेखित अनुपालन', 'CRM और प्रक्रिया सहायता'],
      cta_title: 'रुचि की अभिव्यक्ति',
      cta_desc: 'यदि आप पेशेवर जुड़ाव तलाशना चाहते हैं, तो कृपया एक गोपनीय पूछताछ सबमिट करें।',
      cta_btn: 'गोपनीय बातचीत शुरू करें'
    }
  };

  const current = content[language];

  return (
    <div className="py-24 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="max-w-4xl mx-auto text-center mb-20">
          <span className="text-gold font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block">{current.tag}</span>
          <h1 className="text-4xl md:text-5xl font-serif-brand italic font-bold text-slate-900 mb-6">{current.title}</h1>
          <p className="text-xl text-slate-600 leading-relaxed font-medium">
            {current.desc}
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div className="bg-white p-12 rounded-[40px] shadow-sm border border-slate-100">
             <h2 className="text-3xl font-serif-brand italic font-bold text-slate-900 mb-8">{current.who_title}</h2>
             <ul className="space-y-8">
                <li className="flex space-x-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center"><Briefcase className="w-6 h-6 text-gold" /></div>
                  <div>
                    <h3 className="font-bold text-slate-900 uppercase tracking-widest text-[11px] mb-2">{current.item1}</h3>
                    <p className="text-slate-600 text-sm font-medium leading-relaxed">{current.item1_d}</p>
                  </div>
                </li>
                <li className="flex space-x-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center"><TrendingUp className="w-6 h-6 text-gold" /></div>
                  <div>
                    <h3 className="font-bold text-slate-900 uppercase tracking-widest text-[11px] mb-2">{current.item2}</h3>
                    <p className="text-slate-600 text-sm font-medium leading-relaxed">{current.item2_d}</p>
                  </div>
                </li>
             </ul>
          </div>

          <div className="bg-slate-900 text-white p-12 rounded-[40px] shadow-2xl relative overflow-hidden">
             <div className="relative z-10">
               <h2 className="text-3xl font-serif-brand italic font-bold mb-8">{current.support_title}</h2>
               <ul className="grid grid-cols-1 gap-6">
                 {current.support_items.map((text: string, i: number) => (
                   <li key={i} className="flex items-start space-x-3">
                     <span className="text-gold font-bold mt-1">✓</span>
                     <span className="text-slate-200 font-medium text-sm leading-relaxed">{text}</span>
                   </li>
                 ))}
               </ul>
             </div>
             <Laptop className="absolute -bottom-8 -right-8 w-64 h-64 text-white opacity-5" />
          </div>
        </div>

        <section className="bg-white p-12 rounded-[40px] shadow-xl text-center max-w-4xl mx-auto border border-slate-100">
           <h2 className="text-3xl font-serif-brand italic font-bold text-slate-900 mb-6">{current.cta_title}</h2>
           <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto font-medium leading-relaxed">{current.cta_desc}</p>
           <Link to="/contact" className="inline-flex items-center px-10 py-5 gold-gradient text-slate-900 rounded-xl font-bold uppercase tracking-[0.2em] text-[11px]">
             {current.cta_btn}
             <ChevronRight className="ml-2 w-5 h-5" />
           </Link>
        </section>
      </div>
    </div>
  );
};

export default BrokersPage;
