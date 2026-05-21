import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function DoctorDashboard() {
  const [activeTab, setActiveTab] = useState('ready');

  return (
    <>
      {/*  TopNavBar  */}
<header className="bg-surface border-b border-outline-variant sticky top-0 z-50">
<div className="flex justify-between items-center w-full px-margin-desktop py-4 max-w-container-max mx-auto">
<div className="flex items-center gap-6">
<div className="flex items-center gap-2">
<span className="font-headline-lg text-headline-lg font-bold text-primary">VitalWatch</span>
</div>
<div className="hidden md:flex gap-8 items-center">
<Link className="text-primary font-bold border-b-2 border-primary pb-1 font-label-lg text-label-lg transition-all" to="/doctor">Dashboard</Link>
<Link className="text-on-surface-variant pb-1 font-label-lg text-label-lg hover:text-primary transition-colors duration-200" to="/patient">Patient List</Link>
<Link className="text-on-surface-variant pb-1 font-label-lg text-label-lg hover:text-primary transition-colors duration-200" to="/">Facility Map</Link>
<Link className="text-on-surface-variant pb-1 font-label-lg text-label-lg hover:text-primary transition-colors duration-200" to="/">Logistics</Link>
</div>
</div>
<div className="flex items-center gap-6">
<div className="hidden lg:flex flex-col items-end">
<span className="font-label-lg text-label-lg text-primary">Dr. Marcus Vane</span>
<span className="text-xs text-on-surface-variant">Oct 24, 2023 | Senior Officer</span>
</div>
<div className="flex items-center gap-4">
<button className="material-symbols-outlined text-on-surface-variant hover:text-primary transition-colors">notifications</button>
<button className="material-symbols-outlined text-on-surface-variant hover:text-primary transition-colors">settings</button>
<div className="h-10 w-10 rounded-full bg-secondary-container flex items-center justify-center overflow-hidden border border-outline-variant">
<img alt="Medical Officer Profile" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAcPipcEd8OkSj2Ue2Bwo0RjqlMeoohccWjfo_xgfSOjfrNeKPavbujRmHC-2ITxEYHNo0XPPTNyt8wM2Z17ETG_NTcoWCAcPlT0YkDBvzZ8lSyF6xy6gIJRS-yJBLaqXZwTE7aZ_nUjz-g1-wqxeDoa87uxK6UqBYzq2ElJlraKDKHdZYI_JdOueo2W_hJxnYZnK13EJ71ycHy4KHBLgk4uUbgwrxncz9-tnZJf5oM_MCpPzPHA4rDCteJQhSLYhOnSotVP8yuLm0"/>
</div>
<button className="hidden md:block bg-error text-on-error px-4 py-2 rounded-full font-label-lg text-label-lg shadow-sm hover:opacity-90 active:scale-95 transition-all">Emergency Alert</button>
</div>
</div>
</div>
</header>
<main className="max-w-container-max mx-auto px-margin-desktop py-8">
{/*  Welcome & Stats Section  */}
<div className="mb-10 flex flex-col md:flex-row justify-between items-end gap-6">
<div>
<h1 className="font-headline-lg text-headline-lg text-primary mb-2">Facility Dashboard</h1>
<p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">Surveillance and diagnostic oversight for Quarantine Zone 4. Review patient metrics and authorize discharges based on clinical stability markers.</p>
</div>
<div className="flex gap-4">
<div className="bg-secondary-container p-4 rounded-xl flex items-center gap-4 min-w-[200px]">
<div className="bg-white p-2 rounded-lg">
<span className="material-symbols-outlined text-primary">thermostat</span>
</div>
<div>
<div className="text-xs font-bold text-on-secondary-container uppercase tracking-wider">Avg Temp</div>
<div className="font-headline-sm text-headline-sm text-primary">36.8°C</div>
</div>
</div>
<div className="bg-tertiary-fixed p-4 rounded-xl flex items-center gap-4 min-w-[200px]">
<div className="bg-white p-2 rounded-lg">
<span className="material-symbols-outlined text-on-tertiary-container">check_circle</span>
</div>
<div>
<div className="text-xs font-bold text-on-tertiary-fixed-variant uppercase tracking-wider">Ready to Clear</div>
<div className="font-headline-sm text-headline-sm text-tertiary">12 Patients</div>
</div>
</div>
</div>
</div>
{/*  Tab Switching  */}
<div className="flex gap-2 mb-8 bg-surface-container-low p-1 rounded-full w-fit">
<button 
  className={`px-8 py-3 rounded-full font-label-lg text-label-lg transition-all ${activeTab === 'ready' ? 'bg-primary text-on-primary shadow-md' : 'text-on-surface-variant hover:bg-surface-container-high'}`}
  onClick={() => setActiveTab('ready')}
>
    Ready for Visit
</button>
<button 
  className={`px-8 py-3 rounded-full font-label-lg text-label-lg transition-all ${activeTab === 'awaiting' ? 'bg-primary text-on-primary shadow-md' : 'text-on-surface-variant hover:bg-surface-container-high'}`}
  onClick={() => setActiveTab('awaiting')}
>
    Awaiting Temperature
</button>
</div>
{/*  Content Canvas  */}
{activeTab === 'ready' && (
<div className="bento-grid" id="tab-ready">
{/*  Patient Card 1  */}
<div className="col-span-12 md:col-span-6 lg:col-span-4 bg-[#EAF4FB] rounded-xl p-6 transition-all hover:shadow-lg">
<div className="flex justify-between items-start mb-4">
<div>
<span className="text-xs font-bold text-primary uppercase tracking-widest bg-white/50 px-2 py-1 rounded">Room 402</span>
<h3 className="font-headline-sm text-headline-sm text-primary mt-2">Arthur Jenkins</h3>
</div>
<div className="bg-tertiary-fixed-dim text-on-tertiary-fixed-variant px-3 py-1 rounded-full text-[10px] font-black uppercase">Fever Free</div>
</div>
<div className="flex items-center gap-2 mb-6 text-primary">
<span className="material-symbols-outlined fill-icon text-4xl">thermostat</span>
<span className="text-3xl font-bold">37.2°C</span>
<span className="text-xs font-medium ml-auto bg-white px-2 py-1 rounded-md">🌡 Day 2 of 3</span>
</div>
<div className="space-y-3">
<button className="w-full bg-[#00a656] text-white py-3 rounded-full font-label-lg text-label-lg hover:opacity-90 active:scale-95 transition-all flex items-center justify-center gap-2">
<span className="material-symbols-outlined text-sm">done_all</span>
                        Mark as Visited
                    </button>
</div>
</div>
{/*  Patient Card 2 (Discharge Eligible)  */}
<div className="col-span-12 md:col-span-6 lg:col-span-4 bg-[#EAF4FB] rounded-xl p-6 transition-all hover:shadow-lg border-2 border-primary-fixed">
<div className="flex justify-between items-start mb-4">
<div>
<span className="text-xs font-bold text-primary uppercase tracking-widest bg-white/50 px-2 py-1 rounded">Room 415</span>
<h3 className="font-headline-sm text-headline-sm text-primary mt-2">Elena Rodriguez</h3>
</div>
<div className="bg-primary-fixed text-on-primary-fixed-variant px-3 py-1 rounded-full text-[10px] font-black uppercase">Stable</div>
</div>
<div className="flex items-center gap-2 mb-6 text-primary">
<span className="material-symbols-outlined fill-icon text-4xl">thermostat</span>
<span className="text-3xl font-bold">36.5°C</span>
<span className="text-xs font-medium ml-auto bg-white px-2 py-1 rounded-md text-on-tertiary-container">🌡 Day 3 of 3 fever-free</span>
</div>
<div className="grid grid-cols-2 gap-3">
<button className="bg-[#00a656] text-white py-3 rounded-full font-label-lg text-label-lg hover:opacity-90 active:scale-95 transition-all text-sm">
                        Mark Visited
                    </button>
<button className="bg-primary-container text-on-primary-fixed py-3 rounded-full font-label-lg text-label-lg hover:opacity-90 active:scale-95 transition-all text-sm border border-primary">
                        Flag for Discharge
                    </button>
</div>
</div>
{/*  Patient Card 3  */}
<div className="col-span-12 md:col-span-6 lg:col-span-4 bg-[#EAF4FB] rounded-xl p-6 transition-all hover:shadow-lg">
<div className="flex justify-between items-start mb-4">
<div>
<span className="text-xs font-bold text-primary uppercase tracking-widest bg-white/50 px-2 py-1 rounded">Room 422</span>
<h3 className="font-headline-sm text-headline-sm text-primary mt-2">Samuel Chen</h3>
</div>
<div className="bg-error-container text-on-error-container px-3 py-1 rounded-full text-[10px] font-black uppercase">Monitoring</div>
</div>
<div className="flex items-center gap-2 mb-6 text-primary">
<span className="material-symbols-outlined fill-icon text-4xl">thermostat</span>
<span className="text-3xl font-bold">37.4°C</span>
<span className="text-xs font-medium ml-auto bg-white px-2 py-1 rounded-md">🌡 Day 1 of 3</span>
</div>
<button className="w-full bg-[#00a656] text-white py-3 rounded-full font-label-lg text-label-lg hover:opacity-90 active:scale-95 transition-all">
                    Mark as Visited
                </button>
</div>

{/*  Secondary List Module  */}
<div className="col-span-12 lg:col-span-4 space-y-4">
<div className="bg-surface-container-high p-6 rounded-xl">
<h4 className="font-label-lg text-label-lg text-primary mb-4 flex items-center gap-2">
<span className="material-symbols-outlined text-sm">history</span>
                        Recent Activity
                    </h4>
<ul className="space-y-4">
<li className="flex gap-3 text-sm">
<div className="w-1 h-8 bg-tertiary rounded-full"></div>
<div>
<p className="text-on-surface font-semibold">Marked Visited: Room 412</p>
<p className="text-xs text-on-surface-variant">Dr. Vane • 14:02</p>
</div>
</li>
<li className="flex gap-3 text-sm">
<div className="w-1 h-8 bg-primary-container rounded-full"></div>
<div>
<p className="text-on-surface font-semibold">Discharge Approved: Room 309</p>
<p className="text-xs text-on-surface-variant">Admin • 13:45</p>
</div>
</li>
<li className="flex gap-3 text-sm">
<div className="w-1 h-8 bg-error rounded-full"></div>
<div>
<p className="text-on-surface font-semibold">Alert: Temp Spike Room 440</p>
<p className="text-xs text-on-surface-variant">System • 13:30</p>
</div>
</li>
</ul>
</div>
<div className="bg-primary text-on-primary p-6 rounded-xl flex items-center justify-between">
<div>
<p className="text-xs font-bold uppercase tracking-wider opacity-70">Total Ward Load</p>
<p className="text-2xl font-black">84%</p>
</div>
<span className="material-symbols-outlined text-4xl opacity-30">clinical_notes</span>
</div>
</div>
</div>
)}

{/*  Awaiting Temperature Tab (Hidden by default)  */}
{activeTab === 'awaiting' && (
<div className="bento-grid opacity-60 grayscale pointer-events-none" id="tab-awaiting">
{/*  Grayed out locked cards  */}
<div className="col-span-12 md:col-span-6 lg:col-span-4 bg-surface-container-high rounded-xl p-6 border border-dashed border-outline">
<div className="flex justify-between items-start mb-4">
<div className="h-8 w-32 bg-outline-variant rounded animate-pulse"></div>
<span className="material-symbols-outlined text-outline">lock</span>
</div>
<div className="h-10 w-full bg-outline-variant rounded mb-6 animate-pulse"></div>
<div className="h-12 w-full bg-outline-variant rounded-full animate-pulse"></div>
</div>
<div className="col-span-12 md:col-span-6 lg:col-span-4 bg-surface-container-high rounded-xl p-6 border border-dashed border-outline">
<div className="flex justify-between items-start mb-4">
<div className="h-8 w-32 bg-outline-variant rounded animate-pulse"></div>
<span className="material-symbols-outlined text-outline">lock</span>
</div>
<div className="h-10 w-full bg-outline-variant rounded mb-6 animate-pulse"></div>
<div className="h-12 w-full bg-outline-variant rounded-full animate-pulse"></div>
</div>
<div className="col-span-12 md:col-span-6 lg:col-span-4 bg-surface-container-high rounded-xl p-6 border border-dashed border-outline">
<div className="flex justify-between items-start mb-4">
<div className="h-8 w-32 bg-outline-variant rounded animate-pulse"></div>
<span className="material-symbols-outlined text-outline">lock</span>
</div>
<div className="h-10 w-full bg-outline-variant rounded mb-6 animate-pulse"></div>
<div className="h-12 w-full bg-outline-variant rounded-full animate-pulse"></div>
</div>
</div>
)}
</main>
    </>
  );
}
