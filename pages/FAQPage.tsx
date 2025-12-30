
import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { useLanguage, Language } from '../App';

const FAQPage: React.FC = () => {
  const { language } = useLanguage();

  const content: Record<Language, any> = {
    en: {
      title: 'Frequently Asked Questions',
      desc: 'Common questions about our services and the mortgage process.',
      faqs: [
        { q: "What does a mortgage broker do?", a: "A mortgage broker provides credit assistance by helping you compare suitable loan options from a panel of approved lenders and guiding you through the loan application process." },
        { q: "Do you charge a fee for your service?", a: "In most cases, mortgage brokers are paid a commission by the lender if your loan settles. Any fees payable by you will be disclosed clearly." }
      ]
    },
    zh: {
      title: '常见问题解答',
      desc: '关于我们服务和贷款流程的常见问题。',
      faqs: [
        { q: "房贷经纪人是做什么的？", a: "房贷经纪人通过帮助您从批准的贷款机构名单中对比合适的贷款方案，并指导您完成贷款申请流程，来提供信贷协助。" },
        { q: "你们的服务收费吗？", a: "在大多数情况下，如果您的贷款结算成功，贷款机构会向房贷经纪人支付佣金。任何需要您支付的费用都会在之前明确告知。" }
      ]
    },
    es: {
      title: 'Preguntas Frecuentes',
      desc: 'Preguntas comunes sobre nuestros servicios y el proceso hipotecario.',
      faqs: [
        { q: "¿Qué hace un broker hipotecario?", a: "Un broker hipotecario proporciona asistencia crediticia ayudándole a comparar opciones de préstamos adecuados de un panel de prestamistas aprobados." },
        { q: "¿Cobran honorarios por su servicio?", a: "En la mayoría de los casos, los prestamistas pagan una comisión al broker si el préstamo se liquida. Cualquier cargo será revelado claramente." }
      ]
    },
    vi: {
      title: 'Các câu hỏi thường gặp',
      desc: 'Các câu hỏi phổ biến về dịch vụ của chúng tôi và quy trình thế chấp.',
      faqs: [
        { q: "Broker thế chấp làm gì?", a: "Broker cung cấp hỗ trợ tín dụng bằng cách giúp bạn so sánh các phương án vay phù hợp từ danh sách các ngân hàng được phê duyệt." },
        { q: "Bạn có tính phí dịch vụ không?", a: "Trong hầu hết các trường hợp, broker được bên cho vay trả hoa hồng khi khoản vay được giải ngân. Mọi khoản phí bạn phải trả sẽ được tiết lộ rõ ràng." }
      ]
    },
    hi: {
      title: 'अक्सर पूछे जाने वाले प्रश्न',
      desc: 'हमारी सेवाओं और मॉर्गेज प्रक्रिया के बारे में सामान्य प्रश्न।',
      faqs: [
        { q: "मॉर्गेज ब्रोकर क्या करता है?", a: "एक मॉर्गेज ब्रोकर स्वीकृत ऋणदाताओं के पैनल से उपयुक्त ऋण विकल्पों की तुलना करने और आवेदन प्रक्रिया में आपका मार्गदर्शन करने में मदद करता है।" },
        { q: "क्या आप अपनी सेवा के लिए शुल्क लेते हैं?", a: "ज्यादातर मामलों में, ऋणदाता ब्रोकर को कमीशन देते हैं। आपके द्वारा देय किसी भी शुल्क का स्पष्ट रूप से खुलासा किया जाएगा।" }
      ]
    }
  };

  const current = content[language];

  return (
    <div className="py-16 bg-slate-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-16">
          <HelpCircle className="w-16 h-16 text-gold mx-auto mb-6 opacity-50" />
          <h1 className="text-4xl md:text-5xl font-serif-brand italic font-bold text-slate-900 mb-4">{current.title}</h1>
          <p className="text-lg text-slate-600 font-medium">{current.desc}</p>
        </header>

        <div className="space-y-4">
          {current.faqs.map((faq: any, i: number) => (
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
      <button onClick={() => setIsOpen(!isOpen)} className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-slate-50 transition-colors">
        <span className="text-lg font-bold text-slate-900 pr-8 leading-tight">{title}</span>
        <ChevronDown className={`w-6 h-6 text-slate-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && <div className="px-8 pb-6 text-slate-600 border-t border-slate-50 pt-4 font-medium">{content}</div>}
    </div>
  );
};

export default FAQPage;
