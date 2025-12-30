
import React from 'react';
import { Mail, Phone, Globe, MessageSquare, Clock } from 'lucide-react';
import { useLanguage, Language } from '../App';

const ContactPage: React.FC = () => {
  const { language } = useLanguage();

  const content: Record<Language, any> = {
    en: {
      tag: 'Connect',
      title: 'Contact 1st Mortgage Group',
      desc: 'Discuss your lending needs or enquire about professional opportunities.',
      c1: 'Primary Email',
      c2: 'Office Email',
      c3: 'Call Us',
      c4: 'Website',
      cov_title: 'National Coverage',
      cov_desc: 'We assist clients Australia-wide via phone, video call, and digital communication.',
      comp_title: 'Have a Complaint?',
      comp_desc: 'If we failed to meet your expectations, we want to hear from you.',
      step1: 'Contact us directly using the details on this page.',
      step2: 'If unresolved, contact AFCA on 1800 931 678.'
    },
    zh: {
      tag: '联系我们',
      title: '联系第一房贷集团',
      desc: '讨论您的贷款需求或咨询专业合作机会。',
      c1: '主要邮箱',
      c2: '办公室邮箱',
      c3: '联系电话',
      c4: '官方网站',
      cov_title: '全国覆盖',
      cov_desc: '我们通过电话、视频通话和数字通讯协助全澳洲的客户。',
      comp_title: '有任何投诉？',
      comp_desc: '如果我们未能达到您的期望，我们希望能听取您的反馈。',
      step1: '通过本页面的详细信息直接联系我们。',
      step2: '如未解决，可拨打 1800 931 678 联系 AFCA。'
    },
    es: {
      tag: 'Conectar',
      title: 'Contacto 1st Mortgage Group',
      desc: 'Discuta sus necesidades de préstamo o consulte sobre oportunidades profesionales.',
      c1: 'Correo Principal',
      c2: 'Correo de Oficina',
      c3: 'Llámenos',
      c4: 'Sitio Web',
      cov_title: 'Cobertura Nacional',
      cov_desc: 'Asistimos a clientes en toda Australia a través de teléfono, videollamada y comunicación digital.',
      comp_title: '¿Tiene una queja?',
      comp_desc: 'Si no cumplimos con sus expectativas, queremos saber de usted.',
      step1: 'Contáctenos directamente usando los detalles en esta página.',
      step2: 'Si no se resuelve, contacte a AFCA al 1800 931 678.'
    },
    vi: {
      tag: 'Kết nối',
      title: 'Liên hệ 1st Mortgage Group',
      desc: 'Thảo luận về nhu cầu vay vốn hoặc tìm hiểu các cơ hội chuyên nghiệp.',
      c1: 'Email chính',
      c2: 'Email văn phòng',
      c3: 'Gọi cho chúng tôi',
      c4: 'Trang web',
      cov_title: 'Phủ sóng toàn quốc',
      cov_desc: 'Chúng tôi hỗ trợ khách hàng trên khắp nước Úc qua điện thoại, video call và liên lạc kỹ thuật số.',
      comp_title: 'Bạn có khiếu nại?',
      comp_desc: 'Nếu chúng tôi chưa đáp ứng được kỳ vọng của bạn, chúng tôi muốn lắng nghe.',
      step1: 'Liên hệ trực tiếp với chúng tôi qua các thông tin trên trang này.',
      step2: 'Nếu chưa được giải quyết, liên hệ AFCA qua số 1800 931 678.'
    },
    hi: {
      tag: 'जुड़ें',
      title: '1st Mortgage Group से संपर्क करें',
      desc: 'अपनी ऋण आवश्यकताओं पर चर्चा करें या पेशेवर अवसरों के बारे में पूछताछ करें।',
      c1: 'प्राथमिक ईमेल',
      c2: 'कार्यालय ईमेल',
      c3: 'हमें कॉल करें',
      c4: 'वेबसाइट',
      cov_title: 'राष्ट्रीय कवरेज',
      cov_desc: 'हम फोन, वीडियो कॉल और डिजिटल संचार के माध्यम से ऑस्ट्रेलिया भर के ग्राहकों की सहायता करते हैं।',
      comp_title: 'कोई शिकायत है?',
      comp_desc: 'यदि हम आपकी अपेक्षाओं को पूरा करने में विफल रहे हैं, तो हम आपसे सुनना चाहते हैं।',
      step1: 'इस पृष्ठ पर दिए गए विवरणों का उपयोग करके सीधे हमसे संपर्क करें।',
      step2: 'यदि अनसुलझा है, तो 1800 931 678 पर AFCA से संपर्क करें।'
    }
  };

  const current = content[language];

  return (
    <div className="py-24 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-20">
          <span className="text-gold font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block">{current.tag}</span>
          <h1 className="text-4xl md:text-5xl font-serif-brand italic font-bold text-slate-900 mb-6 leading-tight">
            {current.title}
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl leading-relaxed font-medium">{current.desc}</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ContactCard title={current.c1} content="info@1stmg.com.au" icon={<Mail className="w-6 h-6" />} />
              <ContactCard title={current.c2} content="1stmortgage.vic@gmail.com" icon={<Mail className="w-6 h-6" />} />
              <ContactCard title={current.c3} content="(+61) 432 866 168" icon={<Phone className="w-6 h-6" />} />
              <ContactCard title={current.c4} content="www.1stmg.com.au" icon={<Globe className="w-6 h-6" />} />
            </div>
            
            <div className="bg-slate-50 p-10 rounded-[32px] border border-slate-100">
               <h3 className="text-xl font-serif-brand italic font-bold text-slate-900 mb-6 flex items-center">
                 <Clock className="w-5 h-5 mr-3 text-gold" />{current.cov_title}
               </h3>
               <p className="text-slate-600 font-medium leading-relaxed">{current.cov_desc}</p>
            </div>
          </div>

          <div className="bg-slate-950 text-white p-12 rounded-[40px] shadow-2xl relative overflow-hidden">
             <h2 className="text-3xl font-serif-brand italic font-bold mb-6 text-gold">{current.comp_title}</h2>
             <p className="text-slate-400 mb-10 leading-relaxed font-medium">{current.comp_desc}</p>
             <div className="space-y-8">
               <div className="flex items-start space-x-6">
                 <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-[10px] font-bold border border-white/20">1</div>
                 <p className="text-slate-300 font-medium text-sm leading-relaxed">{current.step1}</p>
               </div>
               <div className="flex items-start space-x-6">
                 <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-[10px] font-bold border border-white/20">2</div>
                 <p className="text-slate-300 font-medium text-sm leading-relaxed">{current.step2}</p>
               </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ContactCard = ({ icon, title, content }: any) => (
  <div className="p-8 rounded-[32px] bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300">
    <div className="w-12 h-12 rounded-2xl gold-gradient text-slate-900 flex items-center justify-center mb-8">{icon}</div>
    <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">{title}</h3>
    <p className="text-base font-bold text-slate-900">{content}</p>
  </div>
);

export default ContactPage;
