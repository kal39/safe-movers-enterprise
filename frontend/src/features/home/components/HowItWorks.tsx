import React from 'react';

const steps = [
  { step: "01", title: "Instant Assessment", desc: "Provide basic details about your home or office." },
  { step: "02", title: "Exact Price Quote", desc: "Get a clear, transparent cost breakdown instantly." },
  { step: "03", title: "Schedule Booking", desc: "Select your preferred moving date and crew slot." },
  { step: "04", title: "Safe Packaging", desc: "Our specialists pack, crate, and load your items." },
  { step: "05", title: "Arrival & Setup", desc: "Unloading and precision placement at your destination." },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-slate-50 border-t border-slate-200 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <span className="text-xs font-bold text-[#581c25] uppercase tracking-widest bg-[#581c25]/10 px-3 py-1 rounded-full">PROCESS</span>
        <h2 className="text-3xl font-extrabold text-slate-900 mt-3 mb-16">How It Works in 5 Easy Steps</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
          {steps.map((s, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm text-left relative">
              <div className="w-8 h-8 rounded-full bg-[#581c25] text-amber-300 font-bold text-xs flex items-center justify-center mb-4">
                {s.step}
              </div>
              <h3 className="font-bold text-slate-900 text-sm mb-2">{s.title}</h3>
              <p className="text-xs text-slate-500 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}