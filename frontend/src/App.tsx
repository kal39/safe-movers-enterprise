import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HeroSection from './features/home/components/HeroSection';
import ServicesGrid from './features/home/components/ServicesGrid';
import TrustBar from './features/home/components/TrustBar';
import HowItWorks from './features/home/components/HowItWorks';
import QuoteWizard from './features/quote/QuoteWizard';

export function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800 font-sans">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <TrustBar />
        <ServicesGrid />
        <QuoteWizard />
        <HowItWorks />
      </main>
      <Footer />
    </div>
  );
}

export default App;