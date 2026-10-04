import React, { useState } from 'react';

export default function PricingCalculator() {
  const [moveType, setMoveType] = useState('residential');
  const [rooms, setRooms] = useState('2-3 bedrooms');
  const [distance, setDistance] = useState('Local (< 50 miles)');

  return (
    <section id="pricing" className="py-20 px-4 bg-slate-900 text-white relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Side: Header & Context */}
        <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
          <span className="text-[#e5a93e] font-bold text-xs uppercase tracking-widest bg-[#581c25]/40 border border-[#e5a93e]/30 px-3 py-1 rounded-full">
            Instant Estimate
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            Calculate Your Move in Seconds
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto lg:mx-0 leading-relaxed">
            Transparent pricing with zero hidden fees. Use our interactive mobile calculator below to customize your inventory, distance, and secure an instant estimate.
          </p>
          <div className="pt-2 flex flex-wrap justify-center lg:justify-start gap-4">
            <div className="flex items-center gap-2 bg-[#581c25]/30 border border-amber-500/20 px-4 py-2 rounded-lg">
              <span className="w-2 h-2 rounded-full bg-[#e5a93e]"></span>
              <span className="text-xs text-amber-200 font-medium">Zero Hidden Fees</span>
            </div>
            <div className="flex items-center gap-2 bg-[#581c25]/30 border border-amber-500/20 px-4 py-2 rounded-lg">
              <span className="w-2 h-2 rounded-full bg-[#e5a93e]"></span>
              <span className="text-xs text-amber-200 font-medium">Guaranteed Rates</span>
            </div>
          </div>
        </div>

        {/* Right Side: Replaced White Box with Mobile Phone UI Frame */}
        <div className="lg:col-span-6 flex justify-center">
          <div className="relative w-[310px] sm:w-[330px] bg-slate-950 rounded-[42px] p-3 shadow-2xl border-4 border-slate-800 ring-2 ring-amber-500/20">
            
            {/* Phone Speaker / Camera Notch */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 w-28 h-4 bg-slate-900 rounded-full z-20 flex items-center justify-center">
              <div className="w-12 h-1 bg-slate-800 rounded-full"></div>
            </div>

            {/* Phone Screen Container (Burgundy Theme) */}
            <div className="bg-[#581c25] rounded-[34px] pt-8 pb-6 px-4 text-white overflow-hidden relative shadow-inner flex flex-col justify-between min-h-[540px]">
              
              {/* App Header inside Phone */}
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10">
                <span className="text-xs font-bold text-amber-300">Safe Movers</span>
                <span className="text-[10px] bg-amber-400 text-slate-950 font-extrabold px-2 py-0.5 rounded-full uppercase tracking-wider">Calculator</span>
              </div>

              {/* Calculator Form Inputs inside Phone UI */}
              <div className="space-y-4 flex-1 flex flex-col justify-between text-left">
                
                <div className="space-y-3">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-amber-200">
                    Get an Exact Quote
                  </h3>

                  {/* Move Type */}
                  <div className="space-y-1">
                    <label className="text-[10px] text-slate-300 font-semibold uppercase">Move Type</label>
                    <select 
                      value={moveType}
                      onChange={(e) => setMoveType(e.target.value)}
                      className="w-full bg-[#3b1117] border border-amber-500/30 rounded-md px-3 py-2 text-xs text-white focus:outline-none focus:border-[#e5a93e]"
                    >
                      <option value="residential">Residential Move</option>
                      <option value="commercial">Commercial / Office</option>
                      <option value="packing">Packing Services Only</option>
                    </select>
                  </div>

                  {/* Home Size */}
                  <div className="space-y-1">
                    <label className="text-[10px] text-slate-300 font-semibold uppercase">Home Size</label>
                    <select 
                      value={rooms}
                      onChange={(e) => setRooms(e.target.value)}
                      className="w-full bg-[#3b1117] border border-amber-500/30 rounded-md px-3 py-2 text-xs text-white focus:outline-none focus:border-[#e5a93e]"
                    >
                      <option value="Studio / 1 BR">Studio / 1 Bedroom</option>
                      <option value="2-3 bedrooms">2-3 Bedrooms</option>
                      <option value="4+ bedrooms">4+ Bedrooms / Large House</option>
                    </select>
                  </div>

                  {/* Distance */}
                  <div className="space-y-1">
                    <label className="text-[10px] text-slate-300 font-semibold uppercase">Distance</label>
                    <select 
                      value={distance}
                      onChange={(e) => setDistance(e.target.value)}
                      className="w-full bg-[#3b1117] border border-amber-500/30 rounded-md px-3 py-2 text-xs text-white focus:outline-none focus:border-[#e5a93e]"
                    >
                      <option value="Local (< 50 miles)">Local (&lt; 50 miles)</option>
                      <option value="Long Distance">Long Distance (50+ miles)</option>
                      <option value="Interstate">Interstate Move</option>
                    </select>
                  </div>
                </div>

                {/* Price Output & Action Button inside Phone */}
                <div className="pt-3 border-t border-amber-500/20 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] text-amber-200 uppercase tracking-wider">Estimated Range</span>
                    <span className="text-lg font-black text-[#e5a93e]">$450 – $850</span>
                  </div>
                  
                  <button className="w-full bg-[#e5a93e] hover:bg-[#d49730] text-[#3b1117] font-extrabold py-2.5 rounded-md transition text-xs tracking-wider uppercase shadow">
                    Lock In This Quote
                  </button>
                </div>

              </div>

              {/* Bottom Phone Indicator Bar */}
              <div className="mt-3 w-28 h-1 bg-white/30 rounded-full mx-auto"></div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}