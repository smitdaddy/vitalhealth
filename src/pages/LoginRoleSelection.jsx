import React from 'react';
import { Link } from 'react-router-dom';
import { VITALWATCH_LOGO_URL } from '../components/BrandLogo';

export default function LoginRoleSelection() {
  return (
    <div className="clinical-gradient min-h-screen flex items-center justify-center p-gutter relative z-0">
      {/*  Atmospheric Background Elements  */}
<div className="fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden -z-10 opacity-20">
<div className="absolute top-[10%] right-[15%] w-96 h-96 bg-secondary-container rounded-full blur-[100px]"></div>
<div className="absolute bottom-[20%] left-[10%] w-64 h-64 bg-primary-fixed-dim rounded-full blur-[80px]"></div>
</div>
<main className="w-full max-w-[1200px] flex flex-col items-center">
{/*  Brand Identity Section  */}
<header className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
<div className="mb-6 inline-block">
<img alt="VitalWatch Logo" className="w-32 md:w-48 h-auto drop-shadow-sm" src={VITALWATCH_LOGO_URL}/>
</div>
<h1 className="font-headline-lg text-headline-lg md:text-[40px] text-primary mb-2 tracking-tight">
                VitalWatch
            </h1>
<p className="font-body-lg text-on-surface-variant max-w-md mx-auto">
                Secure access portal for quarantine facility management and patient monitoring.
            </p>
</header>
{/*  Role Selection Canvas  */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-gutter w-full">
{/*  Nurse Role Card  */}
<div className="role-card bg-[#EAF4FB] p-8 rounded-xl flex flex-col items-center text-center group cursor-pointer border border-transparent hover:border-primary-fixed transition-colors">
<div className="w-20 h-20 rounded-full bg-white flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
<span className="material-symbols-outlined text-[40px] text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>medical_services</span>
</div>
<h2 className="font-headline-md text-headline-md text-primary mb-3">Nurse</h2>
<p className="font-body-md text-on-surface-variant mb-8 flex-grow">
                    Access patient vitals, medication schedules, and triage reports for active zones.
                </p>
<Link to="/login/nurse" className="w-full py-4 px-6 bg-primary text-on-primary rounded-full font-label-lg flex items-center justify-center gap-2 hover:opacity-90 active:scale-95 transition-all">
                    Continue
                    <span className="material-symbols-outlined text-[20px]">chevron_right</span>
</Link>
</div>
{/*  Doctor Role Card  */}
<div className="role-card bg-[#EAF4FB] p-8 rounded-xl flex flex-col items-center text-center group cursor-pointer border-2 border-primary-fixed-dim shadow-sm relative overflow-hidden">
<div className="absolute top-4 right-4 bg-tertiary-fixed text-on-tertiary-fixed px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest flex items-center gap-1">
<span className="w-1.5 h-1.5 bg-on-tertiary-fixed rounded-full animate-pulse"></span>
                    Active
                </div>
<div className="w-20 h-20 rounded-full bg-white flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
<span className="material-symbols-outlined text-[40px] text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>stethoscope</span>
</div>
<h2 className="font-headline-md text-headline-md text-primary mb-3">Doctor</h2>
<p className="font-body-md text-on-surface-variant mb-8 flex-grow">
                    Full clinical oversight, diagnostic tools, and emergency intervention protocols.
                </p>
<Link to="/login/doctor" className="w-full py-4 px-6 bg-primary text-on-primary rounded-full font-label-lg flex items-center justify-center gap-2 hover:opacity-90 active:scale-95 transition-all shadow-md">
                    Continue
                    <span className="material-symbols-outlined text-[20px]">chevron_right</span>
</Link>
</div>
{/*  Admin Role Card  */}
<div className="role-card bg-[#EAF4FB] p-8 rounded-xl flex flex-col items-center text-center group cursor-pointer border border-transparent hover:border-primary-fixed transition-colors">
<div className="w-20 h-20 rounded-full bg-white flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
<span className="material-symbols-outlined text-[40px] text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>admin_panel_settings</span>
</div>
<h2 className="font-headline-md text-headline-md text-primary mb-3">Admin</h2>
<p className="font-body-md text-on-surface-variant mb-8 flex-grow">
                    Facility logistics, staff coordination, and high-level surveillance data.
                </p>
<Link to="/login/admin" className="w-full py-4 px-6 bg-primary text-on-primary rounded-full font-label-lg flex items-center justify-center gap-2 hover:opacity-90 active:scale-95 transition-all">
                    Continue
                    <span className="material-symbols-outlined text-[20px]">chevron_right</span>
</Link>
</div>
</div>
{/*  System Footer  */}
<footer className="mt-16 w-full flex flex-col md:flex-row items-center justify-between border-t border-outline-variant pt-8 gap-4">
<div className="flex items-center gap-4">
<span className="font-label-sm text-on-surface-variant flex items-center gap-1.5">
<span className="material-symbols-outlined text-[16px]">verified_user</span>
                    Encrypted Protocol v2.4.0
                </span>
<span className="w-1 h-1 bg-outline-variant rounded-full"></span>
<span className="font-label-sm text-on-surface-variant flex items-center gap-1.5">
<span className="material-symbols-outlined text-[16px]">language</span>
                    Server: Global South-1
                </span>
</div>
<div className="flex gap-6">
<a className="font-label-sm text-on-surface-variant hover:text-primary transition-colors" href="/">Help Center</a>
<a className="font-label-sm text-on-surface-variant hover:text-primary transition-colors" href="/">System Status</a>
<a className="font-label-sm text-on-surface-variant hover:text-primary transition-colors" href="/">Legal Compliance</a>
</div>
</footer>
</main>
    </div>
  );
}
