import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import BrandLogo from '../components/BrandLogo';
import { setActiveRole } from '../utils/roleNavigation';

export default function DoctorLogin() {
  const navigate = useNavigate();
  
  const handleLogin = (e) => {
    e.preventDefault();
    setActiveRole('doctor');
    navigate('/doctor');
  };

  return (
    <div className="clinical-gradient min-h-screen flex items-center justify-center p-gutter relative z-0">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md animate-in fade-in zoom-in duration-500">
        <div className="flex justify-center mb-8">
          <BrandLogo imageClassName="w-12 h-12" />
        </div>
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-[#EAF4FB] text-primary rounded-full mx-auto flex items-center justify-center mb-4">
            <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>stethoscope</span>
          </div>
          <h2 className="font-headline-md text-headline-md text-primary">Doctor Portal</h2>
          <p className="text-on-surface-variant text-sm mt-2">Sign in for clinical oversight and diagnostic tools.</p>
        </div>
        <form onSubmit={handleLogin} className="space-y-6">
          <div className="space-y-2">
            <label className="font-label-md text-on-surface-variant">Medical License No.</label>
            <input type="text" required className="w-full bg-surface-container-low border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary rounded-xl py-3 px-4 outline-none transition-all" placeholder="Enter your license number" />
          </div>
          <div className="space-y-2">
            <label className="font-label-md text-on-surface-variant">Password</label>
            <input type="password" required className="w-full bg-surface-container-low border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary rounded-xl py-3 px-4 outline-none transition-all" placeholder="••••••••" />
          </div>
          <button type="submit" className="w-full py-4 bg-primary text-on-primary rounded-full font-label-lg shadow-md hover:shadow-lg hover:opacity-90 active:scale-95 transition-all flex items-center justify-center gap-2">
            <span className="material-symbols-outlined text-[20px]">fingerprint</span>
            Authenticate
          </button>
        </form>
        <div className="mt-6 text-center">
          <Link to="/" className="text-primary hover:underline text-sm font-medium flex items-center justify-center gap-1">
            <span className="material-symbols-outlined text-[16px]">arrow_back</span>
            Back to Role Selection
          </Link>
        </div>
      </div>
    </div>
  );
}
