
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { Info, Calculator, Landmark, DollarSign, Clock, Percent, ArrowRight } from 'lucide-react';

const CalculatorPage: React.FC = () => {
  const [loanAmount, setLoanAmount] = useState(650000);
  const [interestRate, setInterestRate] = useState(6.2);
  const [loanTerm, setLoanTerm] = useState(30);
  const [frequency, setFrequency] = useState('monthly');
  const [repayment, setRepayment] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);

  useEffect(() => {
    const p = loanAmount;
    const r = interestRate / 100 / (frequency === 'monthly' ? 12 : frequency === 'fortnightly' ? 26 : 52);
    const n = loanTerm * (frequency === 'monthly' ? 12 : frequency === 'fortnightly' ? 26 : 52);

    const m = p * (r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    
    setRepayment(isNaN(m) ? 0 : m);
    setTotalInterest((m * n) - p);
  }, [loanAmount, interestRate, loanTerm, frequency]);

  const data = [
    { name: 'Principal', value: loanAmount, color: '#020617' },
    { name: 'Total Interest', value: totalInterest, color: '#c5a059' }
  ];

  return (
    <div className="py-24 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="max-w-4xl mb-20">
          <span className="text-gold font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block">Planning Tools</span>
          <h1 className="text-5xl md:text-6xl font-serif-brand italic font-bold text-slate-900 mb-8 leading-tight">Home Loan <br />Mortgage Calculator</h1>
          <p className="text-xl text-slate-600 leading-relaxed max-w-2xl font-medium">
            Estimate your potential loan repayments based on loan amount, interest rate, and loan term. This tool is designed to assist with early planning and budgeting.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Controls */}
          <div className="bg-slate-50 p-10 rounded-3xl border border-slate-100 shadow-sm flex flex-col justify-center">
            <h2 className="text-2xl font-serif-brand italic font-bold mb-10 flex items-center">
              <Calculator className="w-6 h-6 mr-3 text-gold" />
              Configure Loan Details
            </h2>
            
            <div className="space-y-8">
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-widest text-slate-500 mb-3">Loan Amount ($)</label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <DollarSign className="h-5 w-5 text-slate-400" />
                  </div>
                  <input
                    type="number"
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(Number(e.target.value))}
                    className="block w-full pl-12 pr-4 py-4 border border-slate-200 rounded-xl focus:ring-gold focus:border-gold text-lg font-bold"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-widest text-slate-500 mb-3">Interest Rate (%)</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Percent className="h-4 w-4 text-slate-400" />
                    </div>
                    <input
                      type="number"
                      step="0.01"
                      value={interestRate}
                      onChange={(e) => setInterestRate(Number(e.target.value))}
                      className="block w-full pl-12 pr-4 py-4 border border-slate-200 rounded-xl focus:ring-gold focus:border-gold text-lg font-bold"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-widest text-slate-500 mb-3">Loan Term (Years)</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Clock className="h-5 w-5 text-slate-400" />
                    </div>
                    <input
                      type="number"
                      value={loanTerm}
                      onChange={(e) => setLoanTerm(Number(e.target.value))}
                      className="block w-full pl-12 pr-4 py-4 border border-slate-200 rounded-xl focus:ring-gold focus:border-gold text-lg font-bold"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-widest text-slate-500 mb-3">Repayment Frequency</label>
                <select
                  value={frequency}
                  onChange={(e) => setFrequency(e.target.value)}
                  className="block w-full px-4 py-4 border border-slate-200 rounded-xl focus:ring-gold focus:border-gold bg-white text-slate-700 font-bold"
                >
                  <option value="monthly">Monthly Repayments</option>
                  <option value="fortnightly">Fortnightly Repayments</option>
                  <option value="weekly">Weekly Repayments</option>
                </select>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="bg-slate-950 text-white p-12 rounded-3xl shadow-2xl flex flex-col">
             <div className="text-center mb-12">
               <p className="text-gold font-bold uppercase tracking-[0.3em] text-[10px] mb-3">Estimated {frequency} repayment</p>
               <h3 className="text-7xl font-serif-brand italic font-bold text-white leading-none">${repayment.toLocaleString(undefined, { maximumFractionDigits: 2 })}</h3>
             </div>

             <div className="grid grid-cols-2 gap-6 mb-12">
               <div className="p-6 bg-white/5 rounded-2xl border border-white/10 text-center">
                 <p className="text-[10px] uppercase tracking-widest text-slate-500 mb-2 font-bold">Principal Amount</p>
                 <p className="text-2xl font-bold font-serif-brand italic">${loanAmount.toLocaleString()}</p>
               </div>
               <div className="p-6 bg-white/5 rounded-2xl border border-white/10 text-center">
                 <p className="text-[10px] uppercase tracking-widest text-slate-500 mb-2 font-bold">Total Interest Payable</p>
                 <p className="text-2xl font-bold text-gold font-serif-brand italic">${totalInterest.toLocaleString(undefined, { maximumFractionDigits: 0 })}</p>
               </div>
             </div>

             <div className="flex-grow min-h-[250px] w-full">
               <ResponsiveContainer width="100%" height="100%">
                 <PieChart>
                   <Pie
                     data={data}
                     cx="50%"
                     cy="50%"
                     innerRadius={70}
                     outerRadius={95}
                     paddingAngle={8}
                     dataKey="value"
                     stroke="none"
                   >
                     {data.map((entry, index) => (
                       <Cell key={`cell-${index}`} fill={entry.color} />
                     ))}
                   </Pie>
                   <Tooltip 
                     contentStyle={{ backgroundColor: '#020617', border: '1px solid #c5a059', borderRadius: '12px', color: '#fff' }}
                     itemStyle={{ color: '#fff' }}
                     formatter={(value: number) => `$${value.toLocaleString()}`}
                   />
                   <Legend verticalAlign="bottom" height={36} />
                 </PieChart>
               </ResponsiveContainer>
             </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mb-20 p-8 bg-slate-50 border border-slate-200 rounded-3xl text-sm text-slate-500 italic flex items-start space-x-4">
          <Info className="w-6 h-6 text-gold flex-shrink-0" />
          <div>
            <p className="font-bold text-slate-900 mb-2 uppercase tracking-widest text-[10px] not-italic">Important Disclosure:</p>
            <p className="leading-relaxed">
              This calculator provides an estimate only and does not constitute credit advice. Results are indicative and based on the information entered. Actual loan repayments, interest rates, fees, and loan terms may vary. Loan approval is subject to lender assessment and suitability.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24 items-center">
          <div>
            <h2 className="text-3xl font-serif-brand italic font-bold text-slate-900 mb-8">What This Tool Helps With</h2>
            <ul className="space-y-6">
               {[
                 "Estimating potential repayments for various scenarios",
                 "Understanding how loan term affects your long-term interest",
                 "Early budgeting considerations before property searching",
                 "Visualizing the split between principal and interest"
               ].map((text, i) => (
                 <li key={i} className="flex items-start">
                   <div className="w-2 h-2 rounded-full bg-gold mt-2.5 mr-4 flex-shrink-0"></div>
                   <span className="text-slate-700 font-medium leading-relaxed">{text}</span>
                 </li>
               ))}
            </ul>
          </div>
          <div className="bg-slate-950 p-12 rounded-[40px] text-center flex flex-col items-center justify-center shadow-2xl relative overflow-hidden">
             <div className="absolute inset-0 bg-gold/5 pointer-events-none"></div>
             <Landmark className="w-12 h-12 text-gold mb-8" />
             <h3 className="text-2xl font-serif-brand italic font-bold text-white mb-6">Ready for a professional assessment?</h3>
             <p className="text-slate-400 mb-10 font-medium leading-relaxed">Speak with our brokers to get a real picture of your borrowing capacity and explore specific lender products.</p>
             <Link to="/pre-approval-enquiry" className="w-full sm:w-auto px-10 py-5 gold-gradient text-slate-900 rounded-xl font-bold uppercase tracking-widest text-xs transition-transform hover:scale-105 shadow-xl flex items-center justify-center">
               Start Enquiry
               <ArrowRight className="ml-2 w-4 h-4" />
             </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalculatorPage;
