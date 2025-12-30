
import React, { useState } from 'react';
import { Send, Clock, MapPin, Search, CheckCircle, ShieldCheck } from 'lucide-react';
import { useLanguage, Language } from '../App';

const EnquiryPage: React.FC = () => {
  const { language } = useLanguage();
  const [submitted, setSubmitted] = useState(false);

  const content: Record<Language, any> = {
    en: {
      tag: 'Get Started',
      title: 'Start Your Pre-Approval Conversation',
      desc: 'Pre-approval helps you understand your borrowing position. Submit an enquiry to discuss securely.',
      sec_note: 'Security Note: Your data is handled per Australian privacy laws. This is not a formal application.',
      proc_title: 'The Process',
      step1: 'Submit Enquiry',
      step1_d: 'Provide basic details via our secure form.',
      step2: 'Expert Contact',
      step2_d: 'A qualified broker will reach out at your time.',
      step3: 'Comparison',
      step3_d: 'We analyze suitable options from our panel.',
      form_title: 'Secure Enquiry Form',
      label_name: 'Full Name',
      label_phone: 'Phone Number',
      label_email: 'Email Address',
      label_purpose: 'Loan Purpose',
      purpose_opt: ['First Home Purchase', 'Next Home Purchase', 'Refinance', 'Investment'],
      label_contact: 'Preferred Contact',
      btn_submit: 'Submit Secure Enquiry',
      success_title: 'Enquiry Received',
      success_desc: 'Thank you. A specialist broker will contact you shortly.',
      success_btn: 'Submit another enquiry'
    },
    zh: {
      tag: '立即开始',
      title: '开启您的贷款预批咨询',
      desc: '预批可帮助您了解自己的借贷能力。提交咨询以进行安全的初步讨论。',
      sec_note: '安全提示：您的数据将按照澳洲隐私法处理。此咨询非正式贷款申请。',
      proc_title: '服务流程',
      step1: '提交咨询',
      step1_d: '通过我们的安全表单提供基本信息。',
      step2: '专家对接',
      step2_d: '资深贷款经纪将在您方便的时间与您联系。',
      step3: '方案对比',
      step3_d: '我们从合作银行面板中为您分析最适合的方案。',
      form_title: '安全咨询表单',
      label_name: '姓名',
      label_phone: '联系电话',
      label_email: '电子邮箱',
      label_purpose: '贷款目的',
      purpose_opt: ['首次置业贷款', '再次置业贷款', '转贷/再融资', '房产投资'],
      label_contact: '首选联系时间',
      btn_submit: '提交安全咨询',
      success_title: '咨询已收到',
      success_desc: '谢谢。我们的资深经纪将很快与您取得联系。',
      success_btn: '提交另一条咨询'
    },
    es: {
      tag: 'Empezar',
      title: 'Inicie su Conversación de Pre-Aprobación',
      desc: 'La pre-aprobación le ayuda a entender su capacidad de endeudamiento. Envíe una consulta de forma segura.',
      sec_note: 'Nota de Seguridad: Sus datos se manejan según las leyes de privacidad australianas.',
      proc_title: 'El Proceso',
      step1: 'Enviar Consulta',
      step1_d: 'Proporcione sus datos a través de nuestro formulario seguro.',
      step2: 'Contacto Experto',
      step2_d: 'Un broker calificado se pondrá en contacto con usted.',
      step3: 'Comparación',
      step3_d: 'Analizamos las opciones adecuadas de nuestro panel.',
      form_title: 'Formulario de Consulta Seguro',
      label_name: 'Nombre Completo',
      label_phone: 'Teléfono',
      label_email: 'Correo Electrónico',
      label_purpose: 'Propósito del Préstamo',
      purpose_opt: ['Compra de primera vivienda', 'Compra de siguiente vivienda', 'Refinanciación', 'Inversión'],
      label_contact: 'Contacto Preferido',
      btn_submit: 'Enviar Consulta Segura',
      success_title: 'Consulta Recibida',
      success_desc: 'Gracias. Un broker especialista le contactará pronto.',
      success_btn: 'Enviar otra consulta'
    },
    vi: {
      tag: 'Bắt đầu ngay',
      title: 'Bắt đầu cuộc tư vấn duyệt trước',
      desc: 'Duyệt trước giúp bạn hiểu rõ khả năng vay vốn của mình. Gửi yêu cầu tư vấn một cách bảo mật.',
      sec_note: 'Lưu ý bảo mật: Dữ liệu của bạn được xử lý theo luật bảo mật của Úc.',
      proc_title: 'Quy trình',
      step1: 'Gửi yêu cầu',
      step1_d: 'Cung cấp thông tin cơ bản qua biểu mẫu bảo mật.',
      step2: 'Liên hệ chuyên gia',
      step2_d: 'Một broker có trình độ sẽ liên hệ với bạn.',
      step3: 'So sánh',
      step3_d: 'Chúng tôi phân tích các lựa chọn phù hợp từ các ngân hàng.',
      form_title: 'Biểu mẫu yêu cầu bảo mật',
      label_name: 'Họ và tên',
      label_phone: 'Số điện thoại',
      label_email: 'Địa chỉ Email',
      label_purpose: 'Mục đích vay',
      purpose_opt: ['Mua nhà lần đầu', 'Mua nhà tiếp theo', 'Tái cấp vốn', 'Đầu tư'],
      label_contact: 'Thời gian liên hệ ưu tiên',
      btn_submit: 'Gửi yêu cầu bảo mật',
      success_title: 'Đã nhận yêu cầu',
      success_desc: 'Cảm ơn bạn. Chuyên gia của chúng tôi sẽ sớm liên hệ.',
      success_btn: 'Gửi yêu cầu khác'
    },
    hi: {
      tag: 'शुरू करें',
      title: 'अपनी प्री-अप्रूवल बातचीत शुरू करें',
      desc: 'प्री-अप्रूवल आपको अपनी उधार लेने की स्थिति को समझने में मदद करता है। सुरक्षित चर्चा के लिए पूछताछ भेजें।',
      sec_note: 'सुरक्षा नोट: आपका डेटा ऑस्ट्रेलियाई गोपनीयता कानूनों के अनुसार संभाला जाता है।',
      proc_title: 'प्रक्रिया',
      step1: 'पूछताछ सबमिट करें',
      step1_d: 'हमारे सुरक्षित फॉर्म के माध्यम से बुनियादी विवरण प्रदान करें।',
      step2: 'विशेषज्ञ संपर्क',
      step2_d: 'एक योग्य ब्रोकर आपके समय पर आपसे संपर्क करेगा।',
      step3: 'तुलना',
      step3_d: 'हम अपने पैनल से उपयुक्त विकल्पों का विश्लेषण करते हैं।',
      form_title: 'सुरक्षित पूछताछ फॉर्म',
      label_name: 'पूरा नाम',
      label_phone: 'फ़ोन नंबर',
      label_email: 'ईमेल पता',
      label_purpose: 'ऋण का उद्देश्य',
      purpose_opt: ['पहला घर खरीदना', 'अगला घर खरीदना', 'पुनर्वित्त', 'निवेश'],
      label_contact: 'पसंदीदा संपर्क समय',
      btn_submit: 'सुरक्षित पूछताछ सबमिट करें',
      success_title: 'पूछताछ प्राप्त हुई',
      success_desc: 'धन्यवाद। एक विशेषज्ञ ब्रोकर जल्द ही आपसे संपर्क करेगा।',
      success_btn: 'दूसरी पूछताछ सबमिट करें'
    }
  };

  const current = content[language];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 py-16 px-4">
        <div className="max-w-md w-full bg-white p-12 rounded-3xl shadow-xl text-center border border-slate-100">
           <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
             <CheckCircle className="w-10 h-10 text-green-500" />
           </div>
           <h2 className="text-3xl font-serif-brand italic font-bold text-slate-900 mb-4">{current.success_title}</h2>
           <p className="text-slate-600 mb-8 leading-relaxed font-medium">{current.success_desc}</p>
           <button onClick={() => setSubmitted(false)} className="text-gold font-bold uppercase tracking-widest text-xs underline">
             {current.success_btn}
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
              <span className="text-gold font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block">{current.tag}</span>
              <h1 className="text-5xl md:text-6xl font-serif-brand italic font-bold text-slate-900 mb-8 leading-tight">
                {current.title}
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed font-medium max-w-lg">
                {current.desc}
              </p>
              <div className="mt-10 p-6 bg-slate-50 border border-slate-200 rounded-2xl flex items-start space-x-4">
                 <ShieldCheck className="w-6 h-6 text-gold flex-shrink-0" />
                 <p className="text-sm text-slate-500 italic leading-relaxed">{current.sec_note}</p>
              </div>
            </header>

            <section>
              <h2 className="text-2xl font-serif-brand italic font-bold text-slate-900 mb-10">{current.proc_title}</h2>
              <div className="space-y-10 relative">
                <div className="absolute left-5 top-0 bottom-0 w-px bg-slate-100"></div>
                {[
                  { step: "1", title: current.step1, desc: current.step1_d },
                  { step: "2", title: current.step2, desc: current.step2_d },
                  { step: "3", title: current.step3, desc: current.step3_d },
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

          <div className="bg-slate-50 p-10 md:p-14 rounded-[40px] shadow-2xl border border-slate-100">
            <h2 className="text-3xl font-serif-brand italic font-bold text-slate-900 mb-10">{current.form_title}</h2>
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="group">
                <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-3">{current.label_name}</label>
                <input required type="text" className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:border-gold bg-white font-bold transition-all" />
              </div>
              <div className="group">
                <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-3">{current.label_phone}</label>
                <input required type="tel" className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:border-gold bg-white font-bold transition-all" />
              </div>
              <div className="group">
                <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-3">{current.label_email}</label>
                <input required type="email" className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:border-gold bg-white font-bold transition-all" />
              </div>
              <div className="group">
                <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-3">{current.label_purpose}</label>
                <select required className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:border-gold bg-white font-bold transition-all appearance-none">
                  <option value="">{current.label_purpose}...</option>
                  {current.purpose_opt.map((opt: string) => <option key={opt} value={opt}>{opt}</option>)}
                </select>
              </div>
              <button type="submit" className="w-full py-5 gold-gradient text-slate-900 rounded-2xl font-bold uppercase tracking-[0.2em] text-[13px] shadow-2xl hover:scale-[1.02] transition-transform">
                {current.btn_submit}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnquiryPage;
