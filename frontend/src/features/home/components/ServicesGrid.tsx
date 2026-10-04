import React from 'react';
import { Home, Truck, Building2, Package, Warehouse, Shield, Box, FileText } from 'lucide-react';

const services = [
  { title: "Local Residential Moves", desc: "Seamless local home relocations with careful packing and safe handling of your personal belongings.", icon: Home, tag: "POPULAR" },
  { title: "Long-Distance Logistics", desc: "Secure cross-country moving services with real-time tracking, dedicated dispatch, and punctual delivery.", icon: Truck, tag: "NATIONWIDE" },
  { title: "Corporate & Office Relocations", desc: "Minimize operational downtime with professional commercial setup, IT disconnect, and office furniture moving.", icon: Building2, tag: "COMMERCIAL" },
  { title: "Packing & Crating Services", desc: "Expert packing using industrial-grade protective materials and custom wooden crating for delicate valuables.", icon: Package, tag: "FULL SERVICE" },
  { title: "Secure Climate-Controlled Storage", desc: "Short and long-term storage solutions in modern, highly secure, temperature-monitored facilities.", icon: Warehouse, tag: "BONDED" },
  { title: "Specialty Item White-Glove Handling", desc: "Safely transport grand pianos, fine art collections, antiques, and heavy commercial machinery.", icon: Shield, tag: "WHITE GLOVE" },
  { title: "Packing Supplies & Box Delivery", desc: "High-grade double-walled moving boxes, heavy bubble wrap, tape, and wardrobe cartons delivered directly.", icon: Box, tag: "SUPPLIES" },
  { title: "Custom Freight & Transit Insurance", desc: "Tailored transit coverage policies and specialized freight shipping options for high-value cargo.", icon: FileText, tag: "PROTECTION" },
];

export default function ServicesGrid() {
  return (
    <section id="services" className="py-20 bg-white px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold text-[#581c25] uppercase tracking-widest bg-[#581c25]/10 px-3 py-1 rounded-full">SERVICES</span>
          <h2 className="text-3xl font-extrabold text-slate-900 mt-3 mb-3">Professional Moving & Storage Services</h2>
          <p className="text-slate-500 text-sm">Comprehensive solutions designed for residential homeowners and corporate enterprises.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div key={idx} className="bg-white p-6 rounded-xl border border-slate-200/80 shadow-sm hover:shadow-md transition flex flex-col justify-between group">
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <div className="w-12 h-12 rounded-lg bg-[#581c25]/10 text-[#581c25] flex items-center justify-center group-hover:bg-[#581c25] group-hover:text-white transition">
                      <Icon size={24} />
                    </div>
                    <span className="text-[10px] font-bold text-amber-700 bg-amber-100 px-2 py-0.5 rounded uppercase tracking-wide">{s.tag}</span>
                  </div>
                  <h3 className="font-bold text-base text-slate-900 mb-2">{s.title}</h3>
                  <p className="text-slate-500 text-xs leading-relaxed">{s.desc}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-[#581c25]">
                  <span>Learn more</span>
                  <span>&rarr;</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}