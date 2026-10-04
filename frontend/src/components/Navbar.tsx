import React from 'react';
import { Phone, Shield, Clock, MapPin } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="bg-[#3b1117] text-white shadow-md sticky top-0 z-50">
      <div className="bg-[#581c25] py-1.5 px-4 text-xs text-amber-100 border-b border-[#732631]">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="flex items-center gap-1.5"><Shield size={13} className="text-amber-400" /> Licensed & Insured Movers</span>
            <span className="flex items-center gap-1.5"><Clock size={13} className="text-amber-400" /> Mon-Sat: 7:00 AM - 8:00 PM</span>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <span className="flex items-center gap-1"><MapPin size={13} className="text-amber-400" /> Nationwide Service</span>
          </div>
        </div>
      </div>
      <nav className="max-w-7xl mx-auto px-4 py-3.5 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <div className="bg-[#e5a93e] text-[#3b1117] font-black p-2 rounded-lg text-lg tracking-tighter">SM</div>
          <div>
            <span className="text-xl font-bold tracking-tight text-white block leading-none">SafeMovers</span>
            <span className="text-[10px] uppercase tracking-widest text-amber-400 font-semibold">Enterprise</span>
          </div>
        </div>
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-200">
          <a href="#services" className="hover:text-amber-400 transition">Services</a>
          <a href="#benefits" className="hover:text-amber-400 transition">Benefits</a>
          <a href="#pricing" className="hover:text-amber-400 transition">Instant Quote</a>
          <a href="#how-it-works" className="hover:text-amber-400 transition">How It Works</a>
          <a href="#contact" className="hover:text-amber-400 transition">Contact</a>
        </div>
        <div>
          <a href="tel:+18005550199" className="bg-[#e5a93e] hover:bg-[#d49730] text-[#3b1117] font-bold px-4 py-2 rounded-md transition shadow-sm flex items-center gap-2 text-sm">
            <Phone size={15} /> (800) 555-0199
          </a>
        </div>
      </nav>
    </header>
  );
}