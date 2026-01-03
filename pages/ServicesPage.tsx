
import React, { useState } from 'react';
import { Home, RefreshCcw, Building2, Hammer, Landmark, AlertCircle, ChevronRight, Handshake, Shield, Scale, Search, Briefcase, X, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage, useSiteConfig, Language } from '../App';

const ServicesPage: React.FC = () => {
  const { language } = useLanguage();
  const config = useSiteConfig();
  
  // Changed to store the ID of the partner (e.g., 'legal') instead of the translated title
  const [selectedPartnerId, setSelectedPartnerId] = useState<string | null>(null);
  
  const [formState, setFormState] = useState({ name: '', phone: '', email: '', notes: '' });
  const [submitted, setSubmitted] = useState(false);

  // ----------------------------------------------------------------------
  // PARTNER EMAIL CONFIGURATION
  // ----------------------------------------------------------------------
  // Enter the email addresses for your referral partners below.
  // When a client requests an intro, an email draft will be created 
  // addressed to these emails, with YOU (the broker) CC'd.
  const partnerEmails: Record<string, string> = {
    'legal': 'conveyancing@partner-example.com',
    'insurance': 'insurance@partner-example.com',
    'buyers_agent': 'property@partner-example.com',
    'finance': 'financialplanning@partner-example.com'
  };
  // ----------------------------------------------------------------------

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
      eco_title: 'Partner Concierge',
      eco_desc: 'Don\'t risk going it alone. We facilitate warm introductions to our vetted network of professionals to ensure you get priority service and VIP rates.',
      eco_legal: 'Legal & Conveyancing',
      eco_legal_d: 'Contract reviews and settlement handling.',
      eco_ins: 'Insurance & Protection',
      eco_ins_d: 'Building, contents, and income protection.',
      eco_ba: "Buyer's Advocacy",
      eco_ba_d: 'Expert help finding and negotiating property.',
      eco_fin: 'Financial Planning',
      eco_fin_d: 'Long-term wealth and tax structuring.',
      btn_connect: 'Request Intro',
      modal_title: 'Connect with a {service} Expert',
      modal_desc: 'We will draft an introduction email for you to send. This ensures our partner knows you are a 1st Mortgage Group client and includes us in the conversation.',
      form_name: 'Your Name',
      form_phone: 'Phone Number',
      form_email: 'Email',
      form_submit: 'Draft Introduction Email',
      success_msg: 'Next Step',
      success_desc: 'Your email client should have opened with a drafted introduction. Please hit "Send" to complete the request.',
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
      eco_title: '合作伙伴礼宾服务',
      eco_desc: '不要冒险独自寻找。我们为您对接经过严格筛选的专业网络，确保您获得优先服务和VIP费率。',
      eco_legal: '法律与过户',
      eco_legal_d: '购房合同审查与交割处理。',
      eco_ins: '保险与保障',
      eco_ins_d: '房屋保险、财产险及收入保障险。',
      eco_ba: "买家代理 (Buyer's Agent)",
      eco_ba_d: '专家协助寻找房源及谈判议价。',
      eco_fin: '财务规划',
      eco_fin_d: '长期财富管理与税务架构规划。',
      btn_connect: '请求引荐',
      modal_title: '对接{service}专家',
      modal_desc: '我们将为您起草一封介绍邮件。这确保了合作伙伴知晓您是第一房贷集团的客户，并将我们也包含在对话中。',
      form_name: '您的姓名',
      form_phone: '电话号码',
      form_email: '电子邮箱',
      form_submit: '起草介绍邮件',
      success_msg: '下一步',
      success_desc: '您的邮件客户端应该已经打开并起草好了介绍邮件。请点击“发送”以完成请求。',
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
      eco_title: 'Conserjería de Socios',
      eco_desc: 'No se arriesgue a ir solo. Facilitamos presentaciones cálidas a nuestra red de profesionales examinados para garantizarle un servicio prioritario.',
      eco_legal: 'Legal y Traspaso',
      eco_legal_d: 'Revisión de contratos y gestión de liquidación.',
      eco_ins: 'Seguros y Protección',
      eco_ins_d: 'Protección de edificios, contenidos e ingresos.',
      eco_ba: "Defensa del Comprador",
      eco_ba_d: 'Ayuda experta para encontrar y negociar propiedades.',
      eco_fin: 'Planificación Financiera',
      eco_fin_d: 'Estructuración fiscal y patrimonial a largo plazo.',
      btn_connect: 'Solicitar Intro',
      modal_title: 'Conectar con experto en {service}',
      modal_desc: 'Redactaremos un correo de presentación para usted. Esto asegura que nuestro socio sepa que es cliente de 1st Mortgage Group.',
      form_name: 'Su Nombre',
      form_phone: 'Teléfono',
      form_email: 'Correo',
      form_submit: 'Redactar Correo',
      success_msg: 'Siguiente Paso',
      success_desc: 'Su cliente de correo debería haberse abierto. Por favor presione "Enviar" para completar.',
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
      eco_title: 'Đối tác & Kết nối',
      eco_desc: 'Đừng mạo hiểm đi một mình. Chúng tôi kết nối bạn với mạng lưới chuyên gia đã được kiểm duyệt để đảm bảo bạn nhận được dịch vụ ưu tiên.',
      eco_legal: 'Pháp lý & Sang tên',
      eco_legal_d: 'Xem xét hợp đồng và xử lý thanh toán.',
      eco_ins: 'Bảo hiểm & Bảo vệ',
      eco_ins_d: 'Bảo vệ nhà cửa, tài sản và thu nhập.',
      eco_ba: "Đại diện người mua",
      eco_ba_d: 'Chuyên gia hỗ trợ tìm kiếm và đàm phán BĐS.',
      eco_fin: 'Quy hoạch tài chính',
      eco_fin_d: 'Cấu trúc tài sản và thuế dài hạn.',
      btn_connect: 'Yêu cầu giới thiệu',
      modal_title: 'Kết nối với chuyên gia {service}',
      modal_desc: 'Chúng tôi sẽ soạn email giới thiệu cho bạn. Điều này đảm bảo đối tác biết bạn là khách hàng của 1st Mortgage Group.',
      form_name: 'Tên của bạn',
      form_phone: 'Số điện thoại',
      form_email: 'Email',
      form_submit: 'Soạn Email Giới thiệu',
      success_msg: 'Bước tiếp theo',
      success_desc: 'Ứng dụng email của bạn đã mở với bản nháp. Vui lòng nhấn "Gửi" để hoàn tất.',
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
      eco_title: 'पार्टनर कंसीयज',
      eco_desc: 'अकेले जाने का जोखिम न लें। हम आपको प्राथमिकता सेवा और VIP दरें सुनिश्चित करने के लिए पेशेवरों के हमारे नेटवर्क से परिचय कराते हैं।',
      eco_legal: 'कानूनी और हस्तांतरण',
      eco_legal_d: 'अनुबंध समीक्षा और निपटान प्रबंधन।',
      eco_ins: 'बीमा और सुरक्षा',
      eco_ins_d: 'भवन, सामग्री और आय सुरक्षा।',
      eco_ba: "खरीदार की वकालत",
      eco_ba_d: 'संपत्ति खोजने और बातचीत करने में विशेषज्ञ मदद।',
      eco_fin: 'वित्तीय योजना',
      eco_fin_d: 'दीर्घकालिक धन और कर संरचना।',
      btn_connect: 'परिचय का अनुरोध करें',
      modal_title: '{service} विशेषज्ञ के साथ जुड़ें',
      modal_desc: 'हम आपके भेजने के लिए एक परिचय ईमेल का मसौदा तैयार करेंगे। यह सुनिश्चित करता है कि हमारा साथी जानता है कि आप 1st Mortgage Group के ग्राहक हैं।',
      form_name: 'आपका नाम',
      form_phone: 'फ़ोन नंबर',
      form_email: 'ईमेल',
      form_submit: 'ड्राफ्ट परिचय ईमेल',
      success_msg: 'अगला कदम',
      success_desc: 'आपका ईमेल क्लाइंट ड्राफ्ट के साथ खुल गया है। अनुरोध पूरा करने के लिए कृपया "भेजें" दबाएं।',
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

  const partners = [
    { title: current.eco_legal, desc: current.eco_legal_d, icon: <Scale className="w-5 h-5" />, id: 'legal' },
    { title: current.eco_ins, desc: current.eco_ins_d, icon: <Shield className="w-5 h-5" />, id: 'insurance' },
    { title: current.eco_ba, desc: current.eco_ba_d, icon: <Search className="w-5 h-5" />, id: 'buyers_agent' },
    { title: current.eco_fin, desc: current.eco_fin_d, icon: <Briefcase className="w-5 h-5" />, id: 'finance' },
  ];

  // Helper to get title for the selected ID
  const selectedPartnerTitle = partners.find(p => p.id === selectedPartnerId)?.title || '';

  const handlePartnerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedPartnerId) return;

    const partnerEmail = partnerEmails[selectedPartnerId];
    // Subject line that identifies the lead source
    const subject = `Intro: ${formState.name} (via ${config.companyName})`;
    
    // Body that introduces the client and asks for connection
    const body = `Hi,\n\nI would like to introduce ${formState.name} who is a client of ${config.companyName} and requires assistance with ${selectedPartnerTitle}.\n\nClient Details:\nName: ${formState.name}\nPhone: ${formState.phone}\nEmail: ${formState.email}\n\nPlease assist them with their requirements.\n\nRegards,\n${config.companyName} Team\n(CC'd for tracking)`;

    // Open mail client: To Partner, CC Broker, Subject, Body
    window.location.href = `mailto:${partnerEmail}?cc=${config.contactEmail}&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    setSubmitted(true);
  };

  const closeModal = () => {
    setSelectedPartnerId(null);
    setSubmitted(false);
    setFormState({ name: '', phone: '', email: '', notes: '' });
  };

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

        {/* Partner Ecosystem Section */}
        <div className="mb-20">
           <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center p-3 bg-white rounded-full mb-6 shadow-sm border border-slate-100">
                <Handshake className="w-6 h-6 text-gold" />
              </div>
              <h2 className="text-3xl font-serif-brand italic font-bold text-slate-900 mb-4">{current.eco_title}</h2>
              <p className="text-slate-600 max-w-2xl mx-auto font-medium">{current.eco_desc}</p>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {partners.map((p, i) => (
                <div key={i} className="bg-white p-8 rounded-2xl border border-slate-100 hover:border-gold/30 hover:shadow-lg transition-all group flex flex-col h-full">
                   <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-900 mb-4 group-hover:bg-gold group-hover:text-white transition-colors">
                     {p.icon}
                   </div>
                   <h3 className="font-bold text-slate-900 text-sm mb-2">{p.title}</h3>
                   <p className="text-xs text-slate-500 font-medium leading-relaxed mb-6 flex-grow">{p.desc}</p>
                   <button 
                    onClick={() => setSelectedPartnerId(p.id)}
                    className="w-full py-2 bg-slate-50 hover:bg-gold hover:text-white text-slate-900 text-[10px] font-bold uppercase tracking-widest rounded-lg transition-colors"
                   >
                     {current.btn_connect}
                   </button>
                </div>
              ))}
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

      {/* Partner Connection Modal */}
      {selectedPartnerId && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
           <div className="bg-white rounded-[32px] max-w-lg w-full p-8 md:p-10 shadow-2xl relative">
              <button onClick={closeModal} className="absolute top-6 right-6 p-2 text-slate-400 hover:text-slate-900 transition-colors">
                <X className="w-6 h-6" />
              </button>
              
              {!submitted ? (
                <>
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="p-3 bg-gold/10 rounded-full text-gold">
                      <Handshake className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-serif-brand italic font-bold text-slate-900">
                        {current.modal_title.replace('{service}', selectedPartnerTitle)}
                      </h3>
                    </div>
                  </div>
                  
                  <p className="text-slate-600 mb-8 font-medium text-sm leading-relaxed border-l-2 border-gold pl-4">
                    {current.modal_desc}
                  </p>

                  <form onSubmit={handlePartnerSubmit} className="space-y-5">
                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-2">{current.form_name}</label>
                      <input required type="text" value={formState.name} onChange={e => setFormState({...formState, name: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-gold outline-none font-bold text-slate-900" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-2">{current.form_phone}</label>
                        <input required type="tel" value={formState.phone} onChange={e => setFormState({...formState, phone: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-gold outline-none font-bold text-slate-900" />
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-2">{current.form_email}</label>
                        <input required type="email" value={formState.email} onChange={e => setFormState({...formState, email: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-gold outline-none font-bold text-slate-900" />
                      </div>
                    </div>
                    <button type="submit" className="w-full py-4 bg-slate-900 hover:bg-slate-800 text-white rounded-xl font-bold uppercase tracking-[0.2em] text-xs transition-colors shadow-lg mt-4">
                      {current.form_submit}
                    </button>
                  </form>
                </>
              ) : (
                <div className="text-center py-8">
                  <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6 text-green-500">
                    <Check className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-serif-brand italic font-bold text-slate-900 mb-4">{current.success_msg}</h3>
                  <p className="text-slate-600 font-medium mb-8 leading-relaxed max-w-sm mx-auto">
                    {current.success_desc}
                  </p>
                  <button onClick={closeModal} className="px-8 py-3 bg-slate-100 hover:bg-slate-200 text-slate-900 rounded-xl font-bold text-xs uppercase tracking-widest transition-colors">
                    Close
                  </button>
                </div>
              )}
           </div>
        </div>
      )}
    </div>
  );
};

export default ServicesPage;
