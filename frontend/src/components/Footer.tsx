import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-burgundy-dark text-white py-12 border-t border-burgundy-light">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-xl font-bold text-gold mb-4">SafeMovers Enterprise</h3>
          <p className="text-slate-300 text-sm">Professional moving and secure storage solutions for residential and commercial properties nationwide.</p>
        </div>
        <div>
          <h4 className="font-semibold text-amber-200 mb-3">Services</h4>
          <ul className="space-y-2 text-sm text-slate-300">
            <li>Residential Moving</li>
            <li>Commercial Relocation</li>
            <li>Packing & Crating</li>
            <li>Secure Storage</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-amber-200 mb-3">Company</h4>
          <ul className="space-y-2 text-sm text-slate-300">
            <li>About Us</li>
            <li>Our Fleet</li>
            <li>Safety Standards</li>
            <li>Careers</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-amber-200 mb-3">Contact Us</h4>
          <p className="text-sm text-slate-300">100 Logistics Parkway, Suite 400</p>
          <p className="text-sm text-slate-300 mt-1">Phone: (800) 555-0199</p>
          <p className="text-sm text-slate-300 mt-1">Email: support@safemovers.com</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 mt-8 pt-6 border-t border-burgundy-light text-center text-xs text-slate-400">
        &copy; {new Date().getFullYear()} Safe Movers Enterprise Inc. All rights reserved.
      </div>
    </footer>
  );
}
