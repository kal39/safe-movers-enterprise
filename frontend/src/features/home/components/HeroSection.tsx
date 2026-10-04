import React from 'react';

export default function HeroSection() {
  return (
    <div className="w-full relative">
      {/* Top Full-Width Horizontal Hero Image updated to the new iStockphoto image */}
      <div className="w-full bg-slate-900 relative overflow-hidden">
        <div className="w-full h-[380px] md:h-[460px] relative bg-slate-800">
          <img 
            src="https://media.istockphoto.com/id/1395748211/photo/van-full-of-moving-boxes-and-furniture-near-house.jpg?s=612x612&w=0&k=20&c=pa1S7xB4fw6R5i3wdibeO1DdwfQ5a9gGJLQDTu5I3LM=" 
            alt="Van full of moving boxes and furniture near a house" 
            className="w-full h-full object-cover object-center brightness-105"
          />
          {/* Minimal overlay to maintain contrast */}
          <div className="absolute inset-0 bg-black/5 pointer-events-none"></div>
        </div>

        {/* Sinusoidal Wave Divider transitioning from Top Image to Burgundy Section */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none pointer-events-none">
          <svg className="relative block w-full h-12 md:h-16 text-[#581c25]" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path 
              d="M0,0 C150,90 350,-40 500,40 C650,120 900,10 1200,50 L1200,120 L0,120 Z" 
              fill="currentColor"
            ></path>
          </svg>
        </div>
      </div>

      {/* Burgundy Content Section */}
      <div className="bg-[#581c25] text-white pt-8 pb-16 px-4 relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Text and CTA Buttons */}
          <div className="lg:col-span-8 space-y-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Stress-Free Moving Services for Homes & Businesses
            </h1>
            <p className="text-slate-300 text-sm sm:text-base max-w-2xl leading-relaxed">
              Long-distance moves, office relocations, packing services, bonded storage, storage units, and custom handling you can trust.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <a href="#pricing" className="bg-[#e5a93e] hover:bg-[#d49730] text-[#3b1117] font-bold px-6 py-3 rounded-md transition shadow text-sm tracking-wide">
                GET AN EXACT QUOTE
              </a>
              <a href="#services" className="bg-transparent hover:bg-white/10 text-white font-semibold px-6 py-3 rounded-md transition border border-white/40 text-sm tracking-wide">
                VIEW OUR SERVICES
              </a>
            </div>
          </div>

          {/* Right Circular Badge */}
          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            <div className="relative text-center">
              <div className="w-40 h-40 md:w-48 md:h-48 rounded-full border-4 border-[#e5a93e] overflow-hidden shadow-2xl bg-slate-900 mx-auto relative group">
                <img 
                  src="https://media.istockphoto.com/id/622277572/photo/happy-delivery-men-carrying-cardboard-box-and-carpet.jpg?s=612x612&w=0&k=20&c=JfJCWaBSo8X0vHwO79Vdx4k9Oh7FytjiAaesFC21CzY=" 
                  alt="Custom Pricing Specialist" 
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
              <div className="mt-3 inline-block bg-[#3b1117] border border-amber-500/30 px-3 py-1.5 rounded-full shadow-lg">
                <span className="text-[11px] font-bold text-amber-300 tracking-wider uppercase">Custom Pricing Specialist</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}