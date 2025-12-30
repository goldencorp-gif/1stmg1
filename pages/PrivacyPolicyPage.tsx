
import React from 'react';
import { Shield, Lock, Eye, FileText, Database, UserCheck } from 'lucide-react';
import { useLanguage, Language } from '../App';

const PrivacyPolicyPage: React.FC = () => {
  const { language } = useLanguage();

  const content: Record<Language, any> = {
    en: {
      tag: 'Legalities',
      title: 'Privacy Policy',
      intro: 'At 1st Mortgage Group, we are committed to protecting your privacy in accordance with the Privacy Act 1988 (Cth) and the Australian Privacy Principles.',
      s1_title: 'Collection of Information',
      s1_body: 'We collect personal, financial, and credit information necessary to provide credit assistance. This includes your name, contact details, identification, employment history, and financial position.',
      s2_title: 'Use of Information',
      s2_body: 'We use your information primarily to assess your credit needs, help you apply for finance, and manage our relationship with you. We may also use it for compliance and internal auditing.',
      s3_title: 'Disclosure',
      s3_body: 'Your information may be disclosed to potential lenders, credit reporting bodies, and legal authorities where required by law. We do not sell your personal data to third parties.',
      s4_title: 'Data Security',
      s4_body: 'We employ industry-standard encryption and secure storage protocols to protect your data from unauthorized access, loss, or disclosure.',
      s5_title: 'Access & Correction',
      s5_body: 'You have the right to access the personal information we hold about you and request corrections if any information is inaccurate or out of date.',
      footer: 'For any privacy concerns, please contact our Privacy Officer via the details on our Contact page.'
    },
    zh: {
      tag: '法律条款',
      title: '隐私政策',
      intro: '在第一房贷集团（1st Mortgage Group），我们致力于根据《1988年隐私法》（Cth）和澳大利亚隐私原则保护您的隐私。',
      s1_title: '信息收集',
      s1_body: '我们收集提供信贷协助所必需的个人、财务和信用信息。这包括您的姓名、联系方式、身份证明、就业历史和财务状况。',
      s2_title: '信息使用',
      s2_body: '我们使用您的信息主要是为了评估您的信贷需求，协助您申请融资，并管理我们与您的关系。我们也可能将其用于合规和内部审计。',
      s3_title: '信息披露',
      s3_body: '在法律要求的情况下，您的信息可能会披露给潜在的贷款机构、信贷报告机构和法律部门。我们不会将您的个人数据出售给第三方。',
      s4_title: '数据安全',
      s4_body: '我们采用行业标准的加密和安全存储协议，以防止您的数据遭到未经授权的访问、丢失或披露。',
      s5_title: '访问与更正',
      s5_body: '您有权访问我们持有的关于您的个人信息，并要求更正任何不准确或过时的信息。',
      footer: '如有任何隐私顾虑，请通过我们“联系我们”页面上的详细信息与我们的隐私官联系。'
    },
    es: {
      tag: 'Legalidades',
      title: 'Política de Privacidad',
      intro: 'En 1st Mortgage Group, nos comprometemos a proteger su privacidad de acuerdo con la Ley de Privacidad de 1988 (Cth) y los Principios de Privacidad de Australia.',
      s1_title: 'Recopilación de Información',
      s1_body: 'Recopilamos información personal, financiera y crediticia necesaria para brindar asistencia crediticia. Esto incluye su nombre, detalles de contacto, identificación e historial laboral.',
      s2_title: 'Uso de la Información',
      s2_body: 'Utilizamos su información principalmente para evaluar sus necesidades de crédito, ayudarlo a solicitar financiamiento y gestionar nuestra relación con usted.',
      s3_title: 'Divulgación',
      s3_body: 'Su información puede ser divulgada a prestamistas potenciales, organismos de informes crediticios y autoridades legales cuando la ley lo requiera.',
      s4_title: 'Seguridad de Datos',
      s4_body: 'Empleamos protocolos de cifrado y almacenamiento seguro estándar de la industria para proteger sus datos contra el acceso no autorizado.',
      s5_title: 'Acceso y Corrección',
      s5_body: 'Tiene derecho a acceder a la información personal que tenemos sobre usted y solicitar correcciones si alguna información es inexacta.',
      footer: 'Para cualquier inquietud sobre la privacidad, comuníquese con nuestro Oficial de Privacidad a través de los detalles en nuestra página de Contacto.'
    },
    vi: {
      tag: 'Pháp lý',
      title: 'Chính sách Bảo mật',
      intro: 'Tại 1st Mortgage Group, chúng tôi cam kết bảo vệ quyền riêng tư của bạn theo Đạo luật Quyền riêng tư 1988 (Cth) và các Nguyên tắc Quyền riêng tư của Úc.',
      s1_title: 'Thu thập thông tin',
      s1_body: 'Chúng tôi thu thập thông tin cá nhân, tài chính và tín dụng cần thiết để cung cấp hỗ trợ tín dụng. Điều này bao gồm tên, chi tiết liên lạc, giấy tờ định danh và lịch sử làm việc của bạn.',
      s2_title: 'Sử dụng thông tin',
      s2_body: 'Chúng tôi sử dụng thông tin của bạn chủ yếu để đánh giá nhu cầu tín dụng, giúp bạn đăng ký tài chính và quản lý mối quan hệ của chúng tôi với bạn.',
      s3_title: 'Tiết lộ thông tin',
      s3_body: 'Thông tin của bạn có thể được tiết lộ cho các bên cho vay tiềm năng, cơ quan báo cáo tín dụng và cơ quan pháp luật khi luật pháp yêu cầu.',
      s4_title: 'Bảo mật dữ liệu',
      s4_body: 'Chúng tôi sử dụng các giao thức mã hóa và lưu trữ an toàn theo tiêu chuẩn ngành để bảo vệ dữ liệu của bạn khỏi bị truy cập trái phép.',
      s5_title: 'Truy cập & Hiệu đính',
      s5_body: 'Bạn có quyền truy cập thông tin cá nhân chúng tôi nắm giữ về bạn và yêu cầu chỉnh sửa nếu có bất kỳ thông tin nào không chính xác.',
      footer: 'Nếu có bất kỳ thắc mắc nào về quyền riêng tư, vui lòng liên hệ với Nhân viên Bảo mật của chúng tôi qua thông tin trên trang Liên hệ.'
    },
    hi: {
      tag: 'कानूनी',
      title: 'गोपनीयता नीति',
      intro: '1st Mortgage Group में, हम गोपनीयता अधिनियम 1988 (Cth) और ऑस्ट्रेलियाई गोपनीयता सिद्धांतों के अनुसार आपकी गोपनीयता की रक्षा करने के लिए प्रतिबद्ध हैं।',
      s1_title: 'जानकारी का संग्रह',
      s1_body: 'हम ऋण सहायता प्रदान करने के लिए आवश्यक व्यक्तिगत, वित्तीय और क्रेडिट जानकारी एकत्र करते हैं। इसमें आपका नाम, संपर्क विवरण, पहचान और रोजगार इतिहास शामिल है।',
      s2_title: 'जानकारी का उपयोग',
      s2_body: 'हम आपकी जानकारी का उपयोग मुख्य रूप से आपकी क्रेडिट आवश्यकताओं का आकलन करने, वित्त के लिए आवेदन करने में आपकी सहायता करने के लिए करते हैं।',
      s3_title: 'प्रकटीकरण',
      s3_body: 'आपकी जानकारी संभावित ऋणदाताओं, क्रेडिट रिपोर्टिंग निकायों और कानूनी अधिकारियों को दी जा सकती है जहां कानून द्वारा आवश्यक हो।',
      s4_title: 'डेटा सुरक्षा',
      s4_body: 'हम आपके डेटा को अनधिकृत पहुंच से बचाने के लिए उद्योग-मानक एन्क्रिप्शन और सुरक्षित भंडारण प्रोटोकॉल का उपयोग करते हैं।',
      s5_title: 'पहुंच और सुधार',
      s5_body: 'आपको हमारे पास मौजूद अपनी व्यक्तिगत जानकारी तक पहुंचने और सुधार का अनुरोध करने का अधिकार है यदि कोई जानकारी गलत है।',
      footer: 'गोपनीयता संबंधी किसी भी चिंता के लिए, कृपया हमारे संपर्क पृष्ठ पर दिए गए विवरण के माध्यम से हमारे गोपनीयता अधिकारी से संपर्क करें।'
    }
  };

  const current = content[language];

  return (
    <div className="py-24 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-16">
          <span className="text-gold font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block">{current.tag}</span>
          <h1 className="text-4xl md:text-5xl font-serif-brand italic font-bold text-slate-900 mb-8 leading-tight">
            {current.title}
          </h1>
          <p className="text-lg text-slate-600 font-medium leading-relaxed italic border-l-4 border-gold pl-6">
            {current.intro}
          </p>
        </header>

        <div className="space-y-10">
          <PolicySection icon={<Eye className="w-5 h-5" />} title={current.s1_title} body={current.s1_body} />
          <PolicySection icon={<Database className="w-5 h-5" />} title={current.s2_title} body={current.s2_body} />
          <PolicySection icon={<FileText className="w-5 h-5" />} title={current.s3_title} body={current.s3_body} />
          <PolicySection icon={<Lock className="w-5 h-5" />} title={current.s4_title} body={current.s4_body} />
          <PolicySection icon={<UserCheck className="w-5 h-5" />} title={current.s5_title} body={current.s5_body} />
          
          <div className="mt-16 p-10 bg-slate-900 rounded-[32px] text-white shadow-2xl relative overflow-hidden">
             <div className="relative z-10">
               <Shield className="w-12 h-12 text-gold mb-6" />
               <p className="text-slate-300 font-medium leading-relaxed italic">
                 {current.footer}
               </p>
             </div>
             <div className="absolute top-0 right-0 p-8 opacity-5">
               <Shield className="w-64 h-64" />
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const PolicySection = ({ icon, title, body }: { icon: React.ReactNode, title: string, body: string }) => (
  <section className="bg-slate-50 p-8 md:p-10 rounded-[32px] border border-slate-100 transition-all hover:bg-white hover:shadow-xl hover:border-gold/20">
    <div className="flex items-center space-x-4 mb-6">
      <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center text-gold border border-slate-100">
        {icon}
      </div>
      <h2 className="text-2xl font-serif-brand italic font-bold text-slate-900">{title}</h2>
    </div>
    <p className="text-slate-600 leading-relaxed font-medium">
      {body}
    </p>
  </section>
);

export default PrivacyPolicyPage;
