import React, { useState } from 'react';

export default function QuoteWizard() {
  const [step, setStep] = useState(1);
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [movingFrom, setMovingFrom] = useState('');
  const [movingTo, setMovingTo] = useState('');
  const [moveType, setMoveType] = useState('residential');
  const [rooms, setRooms] = useState('2-3 bedrooms');
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  // Realistic dynamic pricing preview logic (mirrors server calculation)
  const calculateEstimate = () => {
    let min = 400;
    let max = 700;

    if (rooms === 'Studio / 1 BR') {
      min = 300;
      max = 500;
    } else if (rooms === '2-3 bedrooms') {
      min = 550;
      max = 950;
    } else if (rooms === '4+ bedrooms') {
      min = 1200;
      max = 2200;
    }

    if (moveType === 'commercial') {
      min = Math.round(min * 1.4);
      max = Math.round(max * 1.5);
    } else if (moveType === 'packing') {
      min = 250;
      max = 500;
    }

    return `$${min} – $${max}`;
  };

  const handleNext = () => {
    if (step === 1) {
      if (!fullName.trim() || !phone.trim() || !movingFrom.trim() || !movingTo.trim()) {
        setErrorMsg('Please fill in all fields before proceeding.');
        return;
      }
      setErrorMsg('');
      setStep(2);
    }
  };

  // Production-grade asynchronous submission to FastAPI backend endpoint
  const handleLockQuote = async () => {
    setIsSubmitting(true);
    setErrorMsg('');

    try {
      const response = await fetch('http://127.0.0.1:8000/api/v1/quotes/lock', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          full_name: fullName,
          phone: phone,
          moving_from: movingFrom,
          moving_to: movingTo,
          move_type: moveType,
          rooms: rooms,
          estimated_cost: calculateEstimate(),
        }),
      });

      // Parse text first to safely handle non-JSON error pages (like 404/500 HTML responses)
      const responseText = await response.text();
      let data = {};
      try {
        data = responseText ? JSON.parse(responseText) : {};
      } catch (parseErr) {
        throw new Error(`Server returned invalid JSON: ${responseText || response.statusText}`);
      }

      if (!response.ok) {
        throw new Error(data.detail || `Server error: ${response.status} ${response.statusText}`);
      }

      setIsSubmitted(true);
    } catch (err) {
      console.error('Fetch error:', err);
      setErrorMsg(err.message || 'Network error. Ensure the FastAPI backend is running on http://127.0.0.1:8000');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleBack = () => {
    if (isSubmitted) {
      setIsSubmitted(false);
    } else if (step === 2) {
      setStep(1);
      setErrorMsg('');
    }
  };

  const handleReset = () => {
    setStep(1);
    setFullName('');
    setPhone('');
    setMovingFrom('');
    setMovingTo('');
    setMoveType('residential');
    setRooms('2-3 bedrooms');
    setIsSubmitted(false);
    setErrorMsg('');
  };

  return (
    <section id="pricing" className="py-20 px-4 bg-[#581c25] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Side: Context & The 3 Pricing Reasons */}
        <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
          <span className="text-[#e5a93e] font-bold text-xs uppercase tracking-widest bg-[#3b1117] border border-[#e5a93e]/30 px-3 py-1 rounded-full">
            Dual-Stack Enterprise Engine
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Calculate Your Move & Lock In Your Rate
          </h2>
          <p className="text-slate-200 text-sm sm:text-base max-w-xl mx-auto lg:mx-0 leading-relaxed">
            Backed by a robust Python FastAPI backend, database lead persistence, and a lightning-fast React mobile booking flow.
          </p>

          <div className="pt-2 space-y-3 max-w-md mx-auto lg:mx-0">
            <div className="flex items-center gap-3 bg-[#3b1117]/80 border border-amber-500/20 px-4 py-3 rounded-xl text-left shadow-md">
              <span className="w-2.5 h-2.5 rounded-full bg-[#e5a93e] shrink-0"></span>
              <div>
                <h4 className="text-xs font-bold text-amber-200">Server-Validated Pricing</h4>
                <p className="text-[11px] text-slate-300">Protected against tampering via secure server algorithms.</p>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-[#3b1117]/80 border border-amber-500/20 px-4 py-3 rounded-xl text-left shadow-md">
              <span className="w-2.5 h-2.5 rounded-full bg-[#e5a93e] shrink-0"></span>
              <div>
                <h4 className="text-xs font-bold text-amber-200">Persistent Lead Database</h4>
                <p className="text-[11px] text-slate-300">Submissions securely recorded into a SQL database model.</p>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-[#3b1117]/80 border border-amber-500/20 px-4 py-3 rounded-xl text-left shadow-md">
              <span className="w-2.5 h-2.5 rounded-full bg-[#e5a93e] shrink-0"></span>
              <div>
                <h4 className="text-xs font-bold text-amber-200">Instant SMS Confirmation</h4>
                <p className="text-[11px] text-slate-300">Asynchronous backend workers queue and dispatch notices.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Smartphone Mockup Frame containing the Interactive Form */}
        <div className="lg:col-span-6 flex justify-center">
          <div className="relative w-[310px] sm:w-[330px] bg-slate-950 rounded-[42px] p-3 shadow-2xl border-4 border-slate-800 ring-2 ring-amber-500/20">
            
            <div className="absolute top-4 left-1/2 -translate-x-1/2 w-28 h-4 bg-slate-900 rounded-full z-20 flex items-center justify-center">
              <div className="w-12 h-1 bg-slate-800 rounded-full"></div>
            </div>

            <div className="bg-white rounded-[34px] pt-8 pb-6 px-4 text-[#800020] overflow-hidden relative shadow-inner flex flex-col justify-between min-h-[540px]">
              
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#800020]/10">
                <span className="text-xs font-bold text-[#800020]">Safe Movers API</span>
                {!isSubmitted && (
                  <span className="text-[10px] bg-[#e5a93e] text-[#3b1117] font-extrabold px-2 py-0.5 rounded-full uppercase tracking-wider">
                    Step {step} of 2
                  </span>
                )}
              </div>

              <div className="space-y-4 flex-1 flex flex-col justify-between text-left">
                
                {errorMsg && (
                  <div className="bg-red-50 border border-red-200 text-red-700 px-2.5 py-1.5 rounded text-[10px] font-medium">
                    {errorMsg}
                  </div>
                )}

                {isSubmitted ? (
                  <div className="space-y-4 my-auto text-center py-6">
                    <div className="w-12 h-12 bg-[#e5a93e] text-[#3b1117] rounded-full flex items-center justify-center mx-auto text-xl font-black shadow">
                      ✓
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-sm font-bold text-[#800020] uppercase tracking-wide">Persisted & Locked!</h3>
                      <p className="text-[11px] text-slate-600">
                        Lead saved successfully via backend API. Confirmation dispatched to <span className="font-bold text-[#800020]">{phone}</span>.
                      </p>
                    </div>
                    <button 
                      onClick={handleReset}
                      className="w-full bg-[#e5a93e] hover:bg-[#d49730] text-[#3b1117] font-extrabold py-2.5 rounded-md transition text-xs tracking-wider uppercase shadow mt-4"
                    >
                      Process New Lead
                    </button>
                  </div>
                ) : step === 1 ? (
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-[#e5a93e] text-[#3b1117] text-[10px] font-bold flex items-center justify-center shrink-0">1</span>
                      <span className="text-xs font-bold tracking-wide text-[#800020] uppercase">Contact & Locations</span>
                    </div>

                    <div className="space-y-1">
                      <label className="text-[10px] text-[#800020] font-semibold">Full Name</label>
                      <input 
                        type="text" 
                        placeholder="John Doe" 
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        className="w-full bg-slate-50 border border-[#800020]/30 rounded-md px-3 py-2 text-xs text-[#800020] placeholder-slate-400 focus:outline-none focus:border-[#e5a93e]"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-[10px] text-[#800020] font-semibold">Phone Number</label>
                      <input 
                        type="text" 
                        placeholder="(555) 000-0000" 
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full bg-slate-50 border border-[#800020]/30 rounded-md px-3 py-2 text-xs text-[#800020] placeholder-slate-400 focus:outline-none focus:border-[#e5a93e]"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-[10px] text-[#800020] font-semibold">Moving From (Zip/Address)</label>
                      <input 
                        type="text" 
                        placeholder="Origin location" 
                        value={movingFrom}
                        onChange={(e) => setMovingFrom(e.target.value)}
                        className="w-full bg-slate-50 border border-[#800020]/30 rounded-md px-3 py-2 text-xs text-[#800020] placeholder-slate-400 focus:outline-none focus:border-[#e5a93e]"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-[10px] text-[#800020] font-semibold">Moving To (Zip/Address)</label>
                      <input 
                        type="text" 
                        placeholder="Destination location" 
                        value={movingTo}
                        onChange={(e) => setMovingTo(e.target.value)}
                        className="w-full bg-slate-50 border border-[#800020]/30 rounded-md px-3 py-2 text-xs text-[#800020] placeholder-slate-400 focus:outline-none focus:border-[#e5a93e]"
                      />
                    </div>
                  </div>
                ) : (
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-[#e5a93e] text-[#3b1117] text-[10px] font-bold flex items-center justify-center shrink-0">2</span>
                      <span className="text-xs font-bold tracking-wide text-[#800020] uppercase">Move Details & Estimate</span>
                    </div>

                    <div className="space-y-1">
                      <label className="text-[10px] text-[#800020] font-semibold">Move Type</label>
                      <select 
                        value={moveType}
                        onChange={(e) => setMoveType(e.target.value)}
                        className="w-full bg-slate-50 border border-[#800020]/30 rounded-md px-3 py-2 text-xs text-[#800020] focus:outline-none focus:border-[#e5a93e]"
                      >
                        <option value="residential">Residential Move</option>
                        <option value="commercial">Commercial / Office</option>
                        <option value="packing">Packing Services Only</option>
                      </select>
                    </div>

                    <div className="space-y-1">
                      <label className="text-[10px] text-[#800020] font-semibold">Home Size / Rooms</label>
                      <select 
                        value={rooms}
                        onChange={(e) => setRooms(e.target.value)}
                        className="w-full bg-slate-50 border border-[#800020]/30 rounded-md px-3 py-2 text-xs text-[#800020] focus:outline-none focus:border-[#e5a93e]"
                      >
                        <option value="Studio / 1 BR">Studio / 1 Bedroom</option>
                        <option value="2-3 bedrooms">2-3 Bedrooms</option>
                        <option value="4+ bedrooms">4+ Bedrooms / Large House</option>
                      </select>
                    </div>

                    <div className="bg-[#581c25] p-3 rounded-lg border border-amber-500/30 mt-4 space-y-1 text-white">
                      <span className="text-[10px] text-slate-300 block uppercase font-medium">Estimated Quote Range</span>
                      <span className="text-base font-black text-[#e5a93e]">{calculateEstimate()}</span>
                    </div>
                  </div>
                )}

                {!isSubmitted && (
                  <div className="pt-2 flex gap-2">
                    {step === 2 && (
                      <button 
                        onClick={handleBack} 
                        disabled={isSubmitting}
                        className="w-1/3 bg-slate-100 hover:bg-slate-200 text-[#800020] font-bold py-2.5 rounded-md transition text-xs tracking-wider uppercase border border-[#800020]/20 disabled:opacity-50"
                      >
                        Back
                      </button>
                    )}
                    <button 
                      onClick={step === 1 ? handleNext : handleLockQuote} 
                      disabled={isSubmitting}
                      className={`${step === 1 ? 'w-full' : 'w-2/3'} bg-[#e5a93e] hover:bg-[#d49730] text-[#3b1117] font-extrabold py-2.5 rounded-md transition text-xs tracking-wider uppercase shadow disabled:opacity-50`}
                    >
                      {isSubmitting ? 'Processing...' : step === 1 ? 'Next: Size & Estimate' : 'Lock In Quote'}
                    </button>
                  </div>
                )}

              </div>

              <div className="mt-3 w-28 h-1 bg-slate-300 rounded-full mx-auto"></div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}