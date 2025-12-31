
import React, { useState, useEffect, useRef } from 'react';
import { Shield, BookOpen, UserCheck, Scale, Award, ChevronRight, TrendingUp, Sparkles, Send, Loader2, Bot } from 'lucide-react';
import { Link } from 'react-router-dom';
import { GoogleGenAI } from "@google/genai";
import { useLanguage, Language } from '../App';

const AIChatWidget: React.FC = () => {
  const { language } = useLanguage();
  const [messages, setMessages] = useState<{role: 'user' | 'model', text: string}[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  // Changed from messagesEndRef to chatContainerRef to control internal scrolling
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const chatSessionRef = useRef<any>(null);

  useEffect(() => {
    const greetings = {
      en: "Hello! I'm the 1st Mortgage Group AI assistant. Ask me about LVR, stamp duty, or how we can help you today.",
      zh: "您好！我是第一房贷集团（1st Mortgage Group）的AI助手。您可以向我咨询关于贷款比例（LVR）、印花税或我们如何为您提供帮助。",
      es: "¡Hola! Soy el asistente de IA de 1st Mortgage Group. Pregúntame sobre LVR, el impuesto de timbre o cómo podemos ayudarte hoy.",
      vi: "Xin chào! Tôi là trợ lý AI của 1st Mortgage Group. Hãy hỏi tôi về LVR, thuế trước bạ hoặc cách chúng tôi có thể giúp bạn hôm nay.",
      hi: "नमस्ते! मैं 1st Mortgage Group का AI सहायक हूँ। मुझसे LVR, स्टाम्प ड्यूटी, या हम आज आपकी कैसे मदद कर सकते हैं, इसके बारे में पूछें।"
    };
    setMessages([{ role: 'model', text: greetings[language] }]);
  }, [language]);

  useEffect(() => {
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      chatSessionRef.current = ai.chats.create({
        model: 'gemini-3-flash-preview',
        config: {
          systemInstruction: `You are a professional, friendly AI assistant for '1st Mortgage Group', a premier Australian mortgage brokerage. 
          CRITICAL: You must respond in the following language: ${
            language === 'zh' ? 'Chinese (Simplified)' : 
            language === 'es' ? 'Spanish' : 
            language === 'vi' ? 'Vietnamese' : 
            language === 'hi' ? 'Hindi' : 'English'
          }.
          
          Guidelines:
          1. Keep answers concise (under 60 words).
          2. Do not give specific financial advice.
          3. Tone: Helpful, knowledgeable, but humble.
          4. If a user asks for specific loan advice, suggest they click 'Start Your Application' to speak with a human.`,
        },
      });
    } catch (e) {
      console.error("Failed to init AI", e);
    }
  }, [language]);

  const scrollToBottom = () => {
    // Only scroll the container, not the window
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  };

  useEffect(() => { scrollToBottom(); }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;
    const userMessage = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      if (!chatSessionRef.current) {
         const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
         chatSessionRef.current = ai.chats.create({ model: 'gemini-3-flash-preview' });
      }
      const response = await chatSessionRef.current.sendMessage({ message: userMessage });
      setMessages(prev => [...prev, { role: 'model', text: response.text || "..." }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'model', text: "Error connecting to server." }]);
    } finally {
      setIsLoading(false);
    }
  };

  const placeholders = {
    en: "Ask a question...",
    zh: "提问...",
    es: "Pregunta...",
    vi: "Đặt câu hỏi...",
    hi: "प्रश्न पूछें..."
  };

  const analyzing = {
    en: "Analyzing...",
    zh: "分析中...",
    es: "Analizando...",
    vi: "Đang phân tích...",
    hi: "विश्लेषण कर रहा है..."
  };

  return (
    <div className="bg-slate-800 rounded-2xl border border-slate-700 overflow-hidden flex flex-col h-[450px] shadow-2xl relative z-20">
      <div className="p-4 bg-slate-950 border-b border-slate-700 flex items-center justify-between">
         <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center border border-gold/30">
                <Bot className="w-5 h-5 text-gold" />
            </div>
            <div>
                <h3 className="text-white font-bold text-sm tracking-wide">AI Assistant</h3>
                <div className="flex items-center space-x-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span className="text-[10px] text-slate-400 font-medium">Online</span>
                </div>
            </div>
         </div>
      </div>
      
      {/* Attached ref to container here */}
      <div 
        ref={chatContainerRef} 
        className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-900/50 scrollbar-thin scrollbar-thumb-slate-700"
      >
         {messages.map((msg, idx) => (
            <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
               <div className={`max-w-[85%] rounded-2xl p-3.5 text-sm font-medium leading-relaxed shadow-sm ${
                  msg.role === 'user' ? 'bg-gold text-slate-900 rounded-tr-none' : 'bg-slate-700 text-slate-100 rounded-tl-none border border-slate-600'
               }`}>
                  {msg.text}
               </div>
            </div>
         ))}
         {isLoading && (
            <div className="flex justify-start">
               <div className="bg-slate-700 rounded-2xl rounded-tl-none p-4 flex items-center space-x-2 border border-slate-600">
                  <Loader2 className="w-4 h-4 text-gold animate-spin" />
                  <span className="text-slate-300 text-xs font-medium">{analyzing[language]}</span>
               </div>
            </div>
         )}
      </div>

      <div className="p-3 bg-slate-950 border-t border-slate-700">
         <form onSubmit={(e) => { e.preventDefault(); handleSend(); }} className="flex items-center space-x-2">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={placeholders[language]}
              className="flex-1 bg-slate-800 text-white placeholder-slate-500 text-sm rounded-xl px-4 py-3.5 focus:outline-none focus:ring-1 focus:ring-gold border border-slate-700 transition-all"
            />
            <button 
               type="submit" 
               disabled={isLoading || !input.trim()}
               className="p-3.5 bg-gold hover:bg-[#b8962e] text-slate-900 rounded-xl transition-all shadow-lg"
            >
               <Send className="w-4 h-4" />
            </button>
         </form>
      </div>
    </div>
  );
};

const AboutPage: React.FC = () => {
  const { language } = useLanguage();

  const content: Record<Language, any> = {
    en: {
      tag: 'Our Story',
      title: 'About 1st Mortgage Group',
      phil_title: 'Our Philosophy',
      phil_desc: 'We believe that good mortgage advice should be simple, ethical, and built for the long term. Our processes are designed to put your needs first.',
      phil_item1: 'Clear Advice',
      phil_item2: 'Best Interests',
      image_caption: 'Dedicated to your financial success.',
      ai_title: 'Unlock Your Property Potential',
      ai_desc: 'Partner with 1st Mortgage Group for strategic property finance and wealth growth.'
    },
    zh: {
      tag: '我们的故事',
      title: '关于第一房贷集团',
      phil_title: '我们的经营理念',
      phil_desc: '我们相信，优质的贷款建议应该是简单、符合道德规范且面向长期的。我们的所有流程都旨在将您的需求放在首位。',
      phil_item1: '清晰建议',
      phil_item2: '最佳利益',
      image_caption: '致力于您的财务成功。',
      ai_title: '开启您的房产潜力',
      ai_desc: '与第一房贷集团合作，实现战略性的房产融资和财富增长。'
    },
    es: {
      tag: 'Nuestra Historia',
      title: 'Acerca de 1st Mortgage Group',
      phil_title: 'Nuestra Filosofía',
      phil_desc: 'Creemos que un buen asesoramiento hipotecario debe ser sencillo, ético y pensado a largo plazo. Nuestros procesos están diseñados para poner sus necesidades en primer lugar.',
      phil_item1: 'Asesoramiento Claro',
      phil_item2: 'Mejores Intereses',
      image_caption: 'Dedicados a su éxito financiero.',
      ai_title: 'Libere su Potencial Inmobiliario',
      ai_desc: 'Asóciese con 1st Mortgage Group para obtener financiación estratégica y crecimiento patrimonial.'
    },
    vi: {
      tag: 'Câu chuyện của chúng tôi',
      title: 'Về 1st Mortgage Group',
      phil_title: 'Triết lý của chúng tôi',
      phil_desc: 'Chúng tôi tin rằng lời khuyên thế chấp tốt phải đơn giản, có đạo đức và được xây dựng cho mục tiêu lâu dài. Quy trình của chúng tôi được thiết kế để đặt nhu cầu của bạn lên hàng đầu.',
      phil_item1: 'Lời khuyên rõ ràng',
      phil_item2: 'Lợi ích tốt nhất',
      image_caption: 'Tận tâm vì sự thành công tài chính của bạn.',
      ai_title: 'Khai thác tiềm năng bất động sản',
      ai_desc: 'Hợp tác với 1st Mortgage Group để có tài chính bất động sản chiến lược và tăng trưởng tài sản.'
    },
    hi: {
      tag: 'हमारी कहानी',
      title: '1st Mortgage Group के बारे में',
      phil_title: 'हमारा दर्शन',
      phil_desc: 'हमारा मानना है कि अच्छी मॉर्गेज सलाह सरल, नैतिक और दीर्घकालिक होनी चाहिए। हमारी प्रक्रियाएं आपकी आवश्यकताओं को प्राथमिकता देने के लिए डिज़ाइन की गई हैं।',
      phil_item1: 'स्पष्ट सलाह',
      phil_item2: 'सर्वोत्तम हित',
      image_caption: 'आपकी वित्तीय सफलता के लिए समर्पित।',
      ai_title: 'अपनी संपत्ति की क्षमता को अनलॉक करें',
      ai_desc: 'रणनीतिक संपत्ति वित्त और धन वृद्धि के लिए 1st Mortgage Group के साथ जुड़ें।'
    }
  };

  const current = content[language];

  return (
    <div className="py-24 bg-slate-50 min-h-screen">
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="max-w-3xl mx-auto text-center mb-20">
            <span className="text-gold font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block">{current.tag}</span>
            <h1 className="text-5xl md:text-6xl font-serif-brand italic font-bold text-slate-900 mb-8">
              {current.title}
            </h1>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
             <div className="bg-white p-10 md:p-14 rounded-[32px] shadow-sm border border-slate-100 flex flex-col justify-center">
                <h2 className="text-3xl font-serif-brand italic font-bold text-slate-900 mb-8">{current.phil_title}</h2>
                <p className="text-slate-600 text-lg font-medium leading-relaxed mb-10">
                   {current.phil_desc}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                   <div className="flex items-center space-x-3 p-4 rounded-xl bg-slate-50 border border-slate-100">
                      <BookOpen className="w-5 h-5 text-gold" />
                      <span className="text-slate-900 font-bold text-[11px] uppercase tracking-wider">{current.phil_item1}</span>
                   </div>
                   <div className="flex items-center space-x-3 p-4 rounded-xl bg-slate-50 border border-slate-100">
                      <UserCheck className="w-5 h-5 text-gold" />
                      <span className="text-slate-900 font-bold text-[11px] uppercase tracking-wider">{current.phil_item2}</span>
                   </div>
                </div>
             </div>
             
             <div className="relative rounded-[32px] overflow-hidden shadow-xl min-h-[500px]">
                <img src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=1000" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex items-end p-10 text-white">
                   <p className="font-serif-brand italic text-3xl font-bold">{current.image_caption}</p>
                </div>
             </div>
          </div>

          <div className="bg-slate-900 p-8 md:p-12 lg:p-16 rounded-[32px] shadow-2xl relative text-white">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
               <div>
                  <h2 className="text-4xl md:text-5xl font-serif-brand italic font-bold mb-8">{current.ai_title.split('Potential')[0]} <span className="text-gold">Potential</span></h2>
                  <p className="text-slate-300 leading-relaxed text-lg mb-10">
                    {current.ai_desc}
                  </p>
               </div>
               <div className="relative">
                  <AIChatWidget />
               </div>
            </div>
          </div>
       </div>
    </div>
  );
};

export default AboutPage;
