
import React from 'react';
import { ShieldCheck, Award, FileText, Scale } from 'lucide-react';
import { useLanguage, Language } from '../App';

const CreditGuidePage: React.FC = () => {
  const { language } = useLanguage();

  const content: Record<Language, any> = {
    en: {
      tag: 'Compliance',
      title: 'Credit Guide',
      about: '1st Mortgage Group is a Credit Representative of Purple Circle Financial Services Pty Ltd (ACL 423568).',
      licensing_title: 'Licensing & Authorisation',
      licensing_body: '1st Mortgage Group provides credit assistance as a Credit Representative of Purple Circle Financial Services Pty Ltd (ACL 423568).',
      legal_body: 'All services are provided in accordance with the National Consumer Credit Protection Act and ASIC requirements.',
      commitment_title: 'Our Commitment',
      commitment_body: 'As your credit representative, we are bound by professional standards to ensure that any credit product we suggest is not unsuitable for your requirements and financial situation.'
    },
    zh: {
      tag: '合规信息',
      title: '信贷指南',
      about: '第一房贷集团（1st Mortgage Group）是 Purple Circle Financial Services Pty Ltd (ACL 423568) 的信贷授权代表。',
      licensing_title: '执照与授权',
      licensing_body: '第一房贷集团作为 Purple Circle Financial Services Pty Ltd (ACL 423568) 的信贷代表提供信贷协助。',
      legal_body: '所有服务均根据《国家消费者信贷保护法》和澳大利亚证券和投资委员会 (ASIC) 的要求提供。',
      commitment_title: '我们的承诺',
      commitment_body: '作为您的信贷代表，我们受专业标准约束，确保我们建议的任何信贷产品都符合您的要求和财务状况。'
    },
    es: {
      tag: 'Cumplimiento',
      title: 'Guía de Crédito',
      about: '1st Mortgage Group es un Representante de Crédito de Purple Circle Financial Services Pty Ltd (ACL 423568).',
      licensing_title: 'Licencias y Autorización',
      licensing_body: '1st Mortgage Group proporciona asistencia crediticia como Representante de Crédito de Purple Circle Financial Services Pty Ltd (ACL 423568).',
      legal_body: 'Todos los servicios se prestan de acuerdo con la Ley Nacional de Protección del Crédito al Consumidor y los requisitos de ASIC.',
      commitment_title: 'Nuestro Compromiso',
      commitment_body: 'Como su representante de crédito, estamos obligados por estándares profesionales a garantizar que cualquier producto de crédito que sugiramos no sea inadecuado para sus necesidades y situación financiera.'
    },
    vi: {
      tag: 'Tuân thủ',
      title: 'Hướng dẫn Tín dụng',
      about: '1st Mortgage Group là Đại diện Tín dụng của Purple Circle Financial Services Pty Ltd (ACL 423568).',
      licensing_title: 'Giấy phép & Ủy quyền',
      licensing_body: '1st Mortgage Group cung cấp hỗ trợ tín dụng với tư cách là Đại diện Tín dụng của Purple Circle Financial Services Pty Ltd (ACL 423568).',
      legal_body: 'Tất cả các dịch vụ được cung cấp theo Đạo luật Bảo vệ Tín dụng Tiêu dùng Quốc gia và các yêu cầu của ASIC.',
      commitment_title: 'Cam kết của chúng tôi',
      commitment_body: 'Với tư cách là đại diện tín dụng của bạn, chúng tôi bị ràng buộc bởi các tiêu chuẩn chuyên môn để đảm bảo rằng bất kỳ sản phẩm tín dụng nào chúng tôi đề xuất đều không phù hợp với yêu cầu và tình hình tài chính của bạn.'
    },
    hi: {
      tag: 'अनुपालन',
      title: 'क्रेडिट गाइड',
      about: '1st Mortgage Group Purple Circle Financial Services Pty Ltd (ACL 423568) का एक क्रेडिट प्रतिनिधि है।',
      licensing_title: 'लाइसेंसिंग और प्राधिकरण',
      licensing_body: '1st Mortgage Group Purple Circle Financial Services Pty Ltd (ACL 423568) के क्रेडिट प्रतिनिधि के रूप में क्रेडिट सहायता प्रदान करता है।',
      legal_body: 'सभी सेवाएं राष्ट्रीय उपभोक्ता क्रेडिट संरक्षण अधिनियम और ASIC आवश्यकताओं के अनुसार प्रदान की जाती हैं।',
      commitment_title: 'हमारी प्रतिबद्धता',
      commitment_body: 'आपके क्रेडिट प्रतिनिधि के रूप में, हम यह सुनिश्चित करने के लिए पेशेवर मानकों से बंधे हैं कि हमारे द्वारा सुझाया गया कोई भी क्रेडिट उत्पाद आपकी आवश्यकताओं और वित्तीय स्थिति के लिए अनुपयुक्त न हो।'
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
          <div className="p-8 bg-slate-50 border-l-4 border-gold rounded-r-3xl shadow-sm">
            <p className="text-lg text-slate-700 font-medium leading-relaxed italic">
              {current.about}
            </p>
          </div>
        </header>

        <div className="space-y-12">
          <section className="bg-white p-10 rounded-[32px] border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center space-x-4 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-gold/10 flex items-center justify-center">
                <Award className="w-6 h-6 text-gold" />
              </div>
              <h2 className="text-2xl font-serif-brand italic font-bold text-slate-900">{current.licensing_title}</h2>
            </div>
            <div className="space-y-6">
              <p className="text-slate-600 text-lg leading-relaxed font-medium">
                {current.licensing_body}
              </p>
              <div className="flex items-start space-x-4 p-6 bg-slate-900 rounded-2xl text-white">
                <Scale className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                <p className="text-sm font-medium leading-relaxed opacity-90">
                  {current.legal_body}
                </p>
              </div>
            </div>
          </section>

          <section className="bg-slate-50 p-10 rounded-[32px] border border-slate-100">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-sm">
                <ShieldCheck className="w-6 h-6 text-gold" />
              </div>
              <h2 className="text-2xl font-serif-brand italic font-bold text-slate-900">{current.commitment_title}</h2>
            </div>
            <p className="text-slate-600 leading-relaxed font-medium">
              {current.commitment_body}
            </p>
          </section>

          <div className="pt-8 border-t border-slate-100">
            <p className="text-xs text-slate-400 font-bold uppercase tracking-widest text-center italic">
              1st Mortgage Group • Responsible Lending Since Foundation
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreditGuidePage;
