
import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from 'recharts';
import { Info, Calculator, Landmark, DollarSign, Clock, Percent, ArrowRight, Zap, TrendingDown } from 'lucide-react';
import { useLanguage, Language } from '../App';

const CalculatorPage: React.FC = () => {
  const { language } = useLanguage();

  const content: Record<Language, any> = {
    en: {
      tag: 'Intelligence Tools',
      title: 'Advanced Mortgage Simulator',
      desc: 'Go beyond basic estimates. Model your long-term wealth strategy by simulating extra repayments.',
      config_title: 'Loan Configuration',
      label_amount: 'Loan Amount',
      label_rate: 'Interest Rate',
      label_term: 'Loan Term',
      label_years: 'Years',
      label_freq: 'Frequency',
      freq_m: 'monthly',
      freq_f: 'fortnightly',
      freq_w: 'weekly',
      wa_title: 'Wealth Accelerator',
      wa_label: 'Monthly Extra Payment',
      wa_desc: 'Small extra payments save tens of thousands over time.',
      stat_base: 'Base repayment',
      impact_title: 'Impact Summary',
      impact_save: 'Save {y} Years & {m} Months',
      impact_int: 'Interest Saved',
      chart_title: 'Loan Repayment Timeline',
      legend_std: 'Standard',
      legend_acc: 'Accelerated',
      cta_title: 'Strategise Your Next Move',
      cta_desc: 'Our brokers minimize interest and maximize flexibility.',
      cta_btn: 'Book Strategy Session'
    },
    zh: {
      tag: '智能工具',
      title: '高级贷款模拟器',
      desc: '超越基础估算。通过模拟额外还款，规划您的长期财富策略。',
      config_title: '贷款配置',
      label_amount: '贷款总额',
      label_rate: '利率',
      label_term: '贷款年限',
      label_years: '年',
      label_freq: '还款频率',
      freq_m: '每月',
      freq_f: '每两周',
      freq_w: '每周',
      wa_title: '财富加速器',
      wa_label: '每月额外还款',
      wa_desc: '长期来看，少量的额外还款可节省数万利息。',
      stat_base: '基础还款额',
      impact_title: '影响摘要',
      impact_save: '节省 {y} 年 {m} 个月',
      impact_int: '节省利息总额',
      chart_title: '贷款偿还时间轴',
      legend_std: '标准计划',
      legend_acc: '加速计划',
      cta_title: '策划您的下一步',
      cta_desc: '我们的经纪人致力于最小化利息并最大化灵活性。',
      cta_btn: '预约战略咨询'
    },
    es: {
      tag: 'Herramientas de Inteligencia',
      title: 'Simulador Hipotecario Avanzado',
      desc: 'Vaya más allá de las estimaciones básicas. Modele su estrategia patrimonial simulando pagos adicionales.',
      config_title: 'Configuración del Préstamo',
      label_amount: 'Monto del Préstamo',
      label_rate: 'Tasa de Interés',
      label_term: 'Plazo del Préstamo',
      label_years: 'Años',
      label_freq: 'Frecuencia',
      freq_m: 'mensual',
      freq_f: 'quincenal',
      freq_w: 'semanal',
      wa_title: 'Acelerador de Riqueza',
      wa_label: 'Pago Extra Mensual',
      wa_desc: 'Pequeños pagos extra ahorran decenas de miles con el tiempo.',
      stat_base: 'Pago base',
      impact_title: 'Resumen de Impacto',
      impact_save: 'Ahorra {y} Años y {m} Meses',
      impact_int: 'Interés Ahorrado',
      chart_title: 'Cronología de Reembolso',
      legend_std: 'Estándar',
      legend_acc: 'Acelerado',
      cta_title: 'Estrategice su Próximo Movimiento',
      cta_desc: 'Nuestros brokers minimizan el interés y maximizan la flexibilidad.',
      cta_btn: 'Reservar Sesión de Estrategia'
    },
    vi: {
      tag: 'Công cụ thông minh',
      title: 'Trình mô phỏng thế chấp nâng cao',
      desc: 'Vượt ra ngoài các ước tính cơ bản. Lập mô hình chiến lược tài sản dài hạn bằng cách trả thêm.',
      config_title: 'Cấu hình khoản vay',
      label_amount: 'Số tiền vay',
      label_rate: 'Lãi suất',
      label_term: 'Thời hạn vay',
      label_years: 'Năm',
      label_freq: 'Tần suất',
      freq_m: 'hàng tháng',
      freq_f: 'hai tuần một lần',
      freq_w: 'hàng tuần',
      wa_title: 'Trình tăng tốc tài sản',
      wa_label: 'Trả thêm hàng tháng',
      wa_desc: 'Các khoản trả thêm nhỏ có thể tiết kiệm hàng chục nghìn đô la.',
      stat_base: 'Số tiền trả cơ bản',
      impact_title: 'Tóm tắt tác động',
      impact_save: 'Tiết kiệm {y} năm & {m} tháng',
      impact_int: 'Tiết kiệm lãi suất',
      chart_title: 'Dòng thời gian trả nợ',
      legend_std: 'Tiêu chuẩn',
      legend_acc: 'Tăng tốc',
      cta_title: 'Lên chiến lược cho bước tiếp theo',
      cta_desc: 'Các broker của chúng tôi giúp giảm lãi suất và tăng tính linh hoạt.',
      cta_btn: 'Đặt hẹn tư vấn chiến lược'
    },
    hi: {
      tag: 'इंटेलिजेंस टूल्स',
      title: 'उन्नत मॉर्गेज सिम्युलेटर',
      desc: 'बुनियादी अनुमानों से परे जाएं। अतिरिक्त भुगतान करके अपनी लंबी अवधि की धन रणनीति का मॉडल बनाएं।',
      config_title: 'ऋण विन्यास',
      label_amount: 'ऋण राशि',
      label_rate: 'ब्याज दर',
      label_term: 'ऋण अवधि',
      label_years: 'वर्ष',
      label_freq: 'आवृत्ति',
      freq_m: 'मासिक',
      freq_f: 'पाक्षिक',
      freq_w: 'साप्ताहिक',
      wa_title: 'वेल्थ एक्सेलेरेटर',
      wa_label: 'मासिक अतिरिक्त भुगतान',
      wa_desc: 'समय के साथ छोटे अतिरिक्त भुगतान हजारों की बचत करते हैं।',
      stat_base: 'मूल पुनर्भुगतान',
      impact_title: 'प्रभाव सारांश',
      impact_save: '{y} वर्ष और {m} महीने बचाएं',
      impact_int: 'ब्याज की बचत',
      chart_title: 'ऋण पुनर्भुगतान समयरेखा',
      legend_std: 'मानक',
      legend_acc: 'त्वरित (Accelerated)',
      cta_title: 'अपने अगले कदम की रणनीति बनाएं',
      cta_desc: 'हमारे ब्रोकर्स ब्याज को कम करने और लचीलेपन को अधिकतम करने में माहिर हैं।',
      cta_btn: 'रणनीति सत्र बुक करें'
    }
  };

  const current = content[language];

  // Basic Loan States
  const [loanAmount, setLoanAmount] = useState(650000);
  const [interestRate, setInterestRate] = useState(6.2);
  const [loanTerm, setLoanTerm] = useState(30);
  const [frequency, setFrequency] = useState('monthly');
  const [extraPayment, setExtraPayment] = useState(200); // Set default to $200 so the tool isn't "empty" on load

  // Derived Calculations
  const calculations = useMemo(() => {
    const p = loanAmount;
    const annualRate = interestRate / 100;
    const freqFactor = frequency === 'monthly' ? 12 : frequency === 'fortnightly' ? 26 : 52;
    const r = annualRate / freqFactor;
    const n = loanTerm * freqFactor;

    const standardM = p * (r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    const standardRepayment = isNaN(standardM) ? 0 : standardM;
    
    let schedule = [];
    let balance = p;
    let extraBalance = p;
    let totalInterest = 0;
    let totalExtraInterest = 0;
    let extraTermFinished = false;
    let extraTermMonths = 0;

    for (let i = 0; i <= n; i++) {
      const interestMonth = balance * r;
      const principalMonth = standardRepayment - interestMonth;
      balance = Math.max(0, balance - principalMonth);
      totalInterest += interestMonth;

      if (!extraTermFinished) {
        let extraInterestMonth = extraBalance * r;
        const totalPaidThisMonth = standardRepayment + extraPayment;
        const extraPrincipalMonth = totalPaidThisMonth - extraInterestMonth;
        extraBalance = Math.max(0, extraBalance - extraPrincipalMonth);
        totalExtraInterest += extraInterestMonth;
        extraTermMonths++;
        if (extraBalance <= 0) extraTermFinished = true;
      }

      if (i % freqFactor === 0 || i === n) {
        schedule.push({
          year: i / freqFactor,
          balance: Math.round(balance),
          extraBalance: Math.round(extraBalance),
        });
      }
    }

    const timeSavedMonths = n - extraTermMonths;
    const yearsSaved = Math.floor(timeSavedMonths / freqFactor);
    const monthsSaved = Math.round((timeSavedMonths % freqFactor) * (12 / freqFactor));

    return {
      standardRepayment,
      totalInterest,
      schedule,
      interestSaved: Math.max(0, totalInterest - totalExtraInterest),
      yearsSaved,
      monthsSaved
    };
  }, [loanAmount, interestRate, loanTerm, frequency, extraPayment]);

  return (
    <div className="py-24 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="max-w-4xl mb-20">
          <span className="text-gold font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block">{current.tag}</span>
          <h1 className="text-5xl md:text-7xl font-serif-brand italic font-bold text-slate-900 mb-8 leading-[0.9]">
            {current.title.split('Simulator')[0]} <span className="text-gold">Simulator</span>
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed max-w-2xl font-medium">
            {current.desc}
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white p-8 rounded-[32px] shadow-sm border border-slate-100">
              <h2 className="text-xl font-serif-brand italic font-bold mb-8 flex items-center text-slate-900">
                <Calculator className="w-5 h-5 mr-3 text-gold" />
                {current.config_title}
              </h2>
              
              <div className="space-y-8">
                <div>
                  <div className="flex justify-between mb-4">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">{current.label_amount}</label>
                    <span className="text-sm font-bold text-slate-900">${loanAmount.toLocaleString()}</span>
                  </div>
                  <input type="range" min="100000" max="2000000" step="10000" value={loanAmount} onChange={(e) => setLoanAmount(Number(e.target.value))} className="w-full h-1.5 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-gold" />
                </div>

                <div>
                  <div className="flex justify-between mb-4">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">{current.label_rate}</label>
                    <span className="text-sm font-bold text-slate-900">{interestRate}%</span>
                  </div>
                  <input type="range" min="1" max="15" step="0.1" value={interestRate} onChange={(e) => setInterestRate(Number(e.target.value))} className="w-full h-1.5 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-gold" />
                </div>

                <div>
                  <div className="flex justify-between mb-4">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">{current.label_term}</label>
                    <span className="text-sm font-bold text-slate-900">{loanTerm} {current.label_years}</span>
                  </div>
                  <input type="range" min="1" max="35" step="1" value={loanTerm} onChange={(e) => setLoanTerm(Number(e.target.value))} className="w-full h-1.5 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-gold" />
                </div>

                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-3">{current.label_freq}</label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      {key: 'monthly', label: current.freq_m}, 
                      {key: 'fortnightly', label: current.freq_f}, 
                      {key: 'weekly', label: current.freq_w}
                    ].map((f) => (
                      <button key={f.key} onClick={() => setFrequency(f.key)} className={`py-3 rounded-xl text-[9px] font-bold uppercase tracking-widest transition-all border ${frequency === f.key ? 'bg-slate-900 text-white border-slate-900' : 'bg-white text-slate-400 border-slate-100 hover:border-gold'}`}>
                        {f.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gold p-8 rounded-[32px] shadow-lg relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:scale-110 transition-transform"><Zap className="w-16 h-16 text-white" /></div>
              <h2 className="text-xl font-serif-brand italic font-bold mb-6 text-slate-900">{current.wa_title}</h2>
              <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-700 mb-4">{current.wa_label}</label>
              <div className="relative mb-6">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-900/50"><DollarSign className="w-4 h-4" /></div>
                <input type="number" value={extraPayment || ''} placeholder="0" onChange={(e) => setExtraPayment(Number(e.target.value))} className="w-full pl-10 pr-4 py-4 rounded-2xl bg-white/40 border border-white/20 focus:outline-none text-lg font-bold text-slate-900 focus:bg-white/60 transition-colors" />
              </div>
              <p className="text-[11px] font-medium text-slate-800 leading-relaxed italic">{current.wa_desc}</p>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-slate-950 p-10 rounded-[32px] text-white shadow-2xl relative overflow-hidden">
                <p className="text-gold font-bold uppercase tracking-[0.3em] text-[10px] mb-4">{current.stat_base} ({current.label_freq})</p>
                <h3 className="text-6xl font-serif-brand italic font-bold mb-6">${calculations.standardRepayment.toLocaleString(undefined, { maximumFractionDigits: 0 })}</h3>
              </div>

              <div className="bg-white p-10 rounded-[32px] border border-slate-100 shadow-sm flex flex-col justify-center min-h-[180px]">
                 {extraPayment > 0 ? (
                   <div className="animate-in fade-in slide-in-from-right-4 duration-500">
                     <div className="flex items-center space-x-3 mb-4">
                        <TrendingDown className="w-6 h-6 text-green-500" />
                        <span className="text-green-600 font-bold uppercase tracking-widest text-[10px]">{current.impact_title}</span>
                     </div>
                     <h3 className="text-3xl font-serif-brand italic font-bold text-slate-900 mb-2">
                       {current.impact_save.replace('{y}', calculations.yearsSaved.toString()).replace('{m}', calculations.monthsSaved.toString())}
                     </h3>
                     <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 mt-4">
                        <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold mb-1">{current.impact_int}</p>
                        <p className="text-2xl font-bold text-gold font-serif-brand italic">${calculations.interestSaved.toLocaleString(undefined, { maximumFractionDigits: 0 })}</p>
                     </div>
                   </div>
                 ) : (
                   <div className="text-center animate-pulse">
                      <Zap className="w-10 h-10 text-slate-200 mx-auto mb-4" />
                      <p className="text-slate-400 font-bold text-xs uppercase tracking-widest mb-2">Interactive Strategiser</p>
                      <p className="text-slate-400 font-medium text-sm">Add extra payments in the gold card <br />to see your potential savings.</p>
                   </div>
                 )}
              </div>
            </div>

            <div className="bg-white p-10 rounded-[40px] border border-slate-100 shadow-sm">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-4">
                <h2 className="text-2xl font-serif-brand italic font-bold text-slate-900 flex items-center">
                  <Clock className="w-5 h-5 mr-3 text-gold" />{current.chart_title}
                </h2>
                <div className="flex items-center space-x-6">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-slate-900"></div>
                    <span className="text-[9px] font-bold uppercase tracking-widest text-slate-500">{current.legend_std}</span>
                  </div>
                  {extraPayment > 0 && (
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 rounded-full bg-gold"></div>
                      <span className="text-[9px] font-bold uppercase tracking-widest text-slate-500">{current.legend_acc}</span>
                    </div>
                  )}
                </div>
              </div>
              <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={calculations.schedule}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                    <XAxis dataKey="year" tick={{ fontSize: 10 }} axisLine={false} tickLine={false} />
                    <YAxis tick={{ fontSize: 10 }} axisLine={false} tickLine={false} tickFormatter={(val) => `$${(val / 1000)}k`} />
                    <Tooltip contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }} />
                    <Area type="monotone" dataKey="balance" stroke="#020617" fill="#020617" fillOpacity={0.05} strokeWidth={3} />
                    {extraPayment > 0 && <Area type="monotone" dataKey="extraBalance" stroke="#D4AF37" fill="#D4AF37" fillOpacity={0.1} strokeWidth={3} />}
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-12 mb-24 items-center">
          <div className="p-8 bg-white border border-slate-200 rounded-[32px] text-xs text-slate-500 italic flex items-start space-x-4">
            <Info className="w-6 h-6 text-gold flex-shrink-0" />
            <p>Repayment calculations are based on constant rates. Extra repayments assumed consistent. Tool is a model, not a credit offer.</p>
          </div>
          <div className="bg-slate-900 p-12 rounded-[40px] text-center flex flex-col items-center shadow-2xl">
             <Landmark className="w-12 h-12 text-gold mb-8" />
             <h3 className="text-2xl font-serif-brand italic font-bold text-white mb-6">{current.cta_title}</h3>
             <p className="text-slate-400 mb-10 font-medium leading-relaxed max-w-xs">{current.cta_desc}</p>
             <Link to="/pre-approval-enquiry" className="w-full sm:w-auto px-10 py-5 bg-gold text-white rounded-xl font-bold uppercase tracking-widest text-xs transition-all hover:scale-105 shadow-xl flex items-center justify-center">
               {current.cta_btn}
               <ArrowRight className="ml-2 w-4 h-4" />
             </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalculatorPage;
