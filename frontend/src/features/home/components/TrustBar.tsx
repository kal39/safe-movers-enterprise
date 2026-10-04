import React from 'react';
import { ShieldCheck, Truck, Clock, Award, CheckCircle, PackageCheck } from 'lucide-react';

export default function TrustBar() {
  const items = [
    { title: "Experienced Moving Crews", desc: "Vetted and trained professionals", icon: ShieldCheck },
    { title: "State-of-the-Art Equipment", desc: "Modern hydraulic trucks and lifts", icon: Truck },
    { title: "Specialized & Secure Crate", desc: "Maximum protection for valuables", icon: PackageCheck },
    { title: "Punctual Fleet Members", desc: "Strict adherence to schedules", icon: Clock },
    { title: "Insured Dispatch Warranties", desc: "Complete financial security", icon: Award },
    { title: "Furniture & Fragile Guard Transit", desc: "Zero-damage handling protocol", icon: CheckCircle },
  ];

  return (
    <section className="py-16 bg-slate-50 border-y border-slate-200 px-4">
      <div className="max-w-7xl mx-auto text-center mb-10">
        <span className="text-xs font-bold text-[#581c25] uppercase tracking-widest bg-[#581c25]/10 px-3 py-1 rounded-full">ENTERPRISE</span>
        <h2 className="text-3xl font-extrabold text-slate-900 mt-3">Built on Trust, Care, and Speed</h2>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {items.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div key={idx} className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm text-center flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-[#581c25]/10 text-[#581c25] flex items-center justify-center mb-3">
                <Icon size={20} />
              </div>
              <h4 className="font-bold text-xs text-slate-900 mb-1">{item.title}</h4>
              <p className="text-[11px] text-slate-500">{item.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}