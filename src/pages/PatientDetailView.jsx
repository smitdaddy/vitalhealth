import React from 'react';
import { Link } from 'react-router-dom';
import BrandLogo from '../components/BrandLogo';
import { usePatients } from '../context/PatientContext';
import { canAccessLogistics, getDashboardPath } from '../utils/roleNavigation';

export default function PatientDetailView() {
  const { patients } = usePatients();
  const dashboardPath = getDashboardPath();
  const showLogistics = canAccessLogistics();
  
  // Hardcoding to Patient 1 (Liam) or 2 (Elena) for demonstration since we don't have routing params configured for this view yet.
  const patient = patients.find(p => p.id === 3) || patients[0]; 

  return (
    <>
      {/*  Top Navigation Bar  */}
<header className="bg-surface border-b border-outline-variant fixed top-0 w-full z-50">
<div className="flex justify-between items-center w-full px-margin-desktop py-4 max-w-container-max mx-auto">
<div className="flex items-center gap-8">
<BrandLogo />
<nav className="hidden md:flex gap-6">
<Link className="text-on-surface-variant pb-1 hover:text-primary transition-colors duration-200 font-label-lg text-label-lg" to={dashboardPath}>Dashboard</Link>
<Link className="text-primary font-bold border-b-2 border-primary pb-1 font-label-lg text-label-lg" to="/patient">Patient List</Link>
<Link className="text-on-surface-variant pb-1 hover:text-primary transition-colors duration-200 font-label-lg text-label-lg" to="/facility-map">Facility Map</Link>
{showLogistics && (
<Link className="text-on-surface-variant pb-1 hover:text-primary transition-colors duration-200 font-label-lg text-label-lg" to="/logistics">Logistics</Link>
)}
</nav>
</div>
<div className="flex items-center gap-4">
<button className="material-symbols-outlined text-on-surface-variant hover:text-primary transition-colors">notifications</button>
<button className="material-symbols-outlined text-on-surface-variant hover:text-primary transition-colors">settings</button>
<div className="h-10 w-10 rounded-full overflow-hidden bg-primary-fixed flex items-center justify-center">
<img alt="Medical Officer Profile" className="w-full h-full object-cover" data-alt="A professional close-up portrait of a medical officer in a clean clinical setting. The doctor is wearing a white lab coat and a stethoscope around their neck. The lighting is soft and neutral, emphasizing a professional and trustworthy demeanor. The background is a slightly blurred hospital hallway with a clean, light blue and white color palette." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBBV8hAN3qzuwoVvpa8UFvnm-ghQbFz_Hp7xvWZtw2gwp_HsuDemZtIqxDflkVFWjbPZ3nrsSRlWP28dQO3LtQBBHRb8Fr2tQlk4smzLj1qi14grPnidAv75cT6jOQzcDhaDTRqywsUuVOPmf64f14TZ0iIWqPO1wyuwNsV1sdFe8DFJMUFFk66BJ_oFFECKVgR18o0Kp4wfvXAbn4kYGblwwVN3AE44ZoLN6KauCgQHQoUtQZgtclgkLHukenHQ6sEIogd_CyuI74"/>
</div>
</div>
</div>
</header>
<div className="flex pt-20 h-screen">
{/*  Side Navigation  */}
<aside className="hidden md:flex flex-col h-full p-base space-y-2 border-r border-outline-variant bg-surface-container-low w-64 fixed left-0 top-20">
<div className="px-4 py-6 flex items-center gap-3">
<div className="h-8 w-8 bg-primary rounded flex items-center justify-center">
<span className="material-symbols-outlined text-white text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>shield_with_heart</span>
</div>
<div>
<h2 className="font-headline-sm text-headline-sm font-black text-primary leading-tight">Dr. Aris Thorne</h2>
<p className="font-body-md text-body-md text-on-surface-variant opacity-70">Zone 4 Supervisor</p>
</div>
</div>
<div className="flex flex-col gap-1 px-2">
<a className="text-on-surface-variant hover:bg-surface-container-high px-4 py-3 flex items-center gap-3 rounded-lg transition-colors font-label-lg text-label-lg" href="/">
<span className="material-symbols-outlined">dashboard</span> Overview
                </a>
<a className="bg-secondary-container text-on-secondary-container rounded-lg px-4 py-3 flex items-center gap-3 font-label-lg text-label-lg" href="/">
<span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>medical_services</span> Isolation Unit B
                </a>
<a className="text-on-surface-variant hover:bg-surface-container-high px-4 py-3 flex items-center gap-3 rounded-lg transition-colors font-label-lg text-label-lg" href="/">
<span className="material-symbols-outlined">security</span> Quarantine Zone A
                </a>
<a className="text-on-surface-variant hover:bg-surface-container-high px-4 py-3 flex items-center gap-3 rounded-lg transition-colors font-label-lg text-label-lg" href="/">
<span className="material-symbols-outlined">emergency</span> Triage
                </a>
<a className="text-on-surface-variant hover:bg-surface-container-high px-4 py-3 flex items-center gap-3 rounded-lg transition-colors font-label-lg text-label-lg" href="/">
<span className="material-symbols-outlined">analytics</span> Reports
                </a>
</div>
<div className="mt-auto p-4 flex flex-col gap-2">
<a className="text-on-surface-variant hover:bg-surface-container-high px-4 py-2 flex items-center gap-3 rounded-lg text-sm" href="/">
<span className="material-symbols-outlined">help</span> Help Center
                </a>
<a className="text-on-surface-variant hover:bg-surface-container-high px-4 py-2 flex items-center gap-3 rounded-lg text-sm" href="/">
<span className="material-symbols-outlined">settings</span> Settings
                </a>
</div>
</aside>
{/*  Main Content Canvas  */}
<main className="flex-1 md:ml-64 p-8 overflow-y-auto bg-surface">
<div className="max-w-6xl mx-auto">
{/*  Header Actions  */}
<div className="flex justify-between items-end mb-8">
<div>
<nav className="flex text-on-surface-variant text-sm gap-2 mb-2">
<span>Isolation Unit B</span> / <span>Bed 204</span>
</nav>
<h1 className="font-headline-lg text-headline-lg text-primary">Patient: Elena Rossi</h1>
<div className="flex gap-4 mt-2">
<span className="bg-primary-fixed text-on-primary-fixed px-3 py-1 rounded-full text-xs font-bold uppercase">Age 32</span>
<span className="bg-primary-fixed text-on-primary-fixed px-3 py-1 rounded-full text-xs font-bold uppercase">Female</span>
<span className="bg-secondary-fixed text-on-secondary-fixed px-3 py-1 rounded-full text-xs font-bold uppercase">Room 204</span>
<span className="text-on-surface-variant text-xs font-medium py-1">Adm. Oct 18, 2023</span>
</div>
</div>
<div className="flex gap-3">
<button className="border border-primary text-primary px-6 py-2 rounded-full font-label-lg text-label-lg hover:bg-primary-container hover:text-white transition-all">Download Record</button>
<button className="bg-primary text-on-primary px-6 py-2 rounded-full font-label-lg text-label-lg shadow-sm active:scale-95 transition-all">Emergency Alert</button>
</div>
</div>
{/*  Bento Grid Layout  */}
<div className="bento-grid">
{/*  Consecutive Days Counter  */}
<div className="bento-item col-span-12 md:col-span-4 flex flex-col justify-center items-center text-center">
<span className="text-[96px] font-black text-on-tertiary-container leading-none">2</span>
<p className="font-label-lg text-label-lg text-on-tertiary-container uppercase tracking-widest mt-4">consecutive fever-free days</p>
<div className="mt-6 w-full h-2 bg-white rounded-full overflow-hidden">
<div className="bg-on-tertiary-container h-full w-2/3"></div>
</div>
<p className="text-xs text-on-surface-variant mt-2">Target: 3 Days for Discharge Consideration</p>
</div>
{/*  7-Day Temp History Chart  */}
<div className="bento-item col-span-12 md:col-span-8">
<div className="flex justify-between items-center mb-6">
<h3 className="font-headline-sm text-headline-sm text-primary">7-Day Temperature History</h3>
<span className="material-symbols-outlined text-primary">monitoring</span>
</div>
<div className="chart-container">
<svg className="w-full h-full" viewBox="0 0 800 160">
<path d="M0,120 Q100,100 200,140 T400,110 T600,60 T800,80" fill="none" stroke="#00a656" strokeLinecap="round" strokeWidth="4" />
<circle cx="200" cy="140" fill="#00a656" r="6" />
<circle cx="400" cy="110" fill="#00a656" r="6" />
<circle cx="600" cy="60" fill="#00a656" r="6" />
<text className="text-[10px] fill-on-surface-variant" x="0" y="155">Oct 19</text>
<text className="text-[10px] fill-on-surface-variant" x="133" y="155">Oct 20</text>
<text className="text-[10px] fill-on-surface-variant" x="266" y="155">Oct 21</text>
<text className="text-[10px] fill-on-surface-variant" x="400" y="155">Oct 22</text>
<text className="text-[10px] fill-on-surface-variant" x="533" y="155">Oct 23</text>
<text className="text-[10px] fill-on-surface-variant" x="666" y="155">Oct 24</text>
<text className="text-[10px] fill-on-surface-variant" x="760" y="155">Oct 25</text>
{/*  Fever Threshold Line  */}
<line stroke="#ba1a1a" strokeDasharray="4" strokeWidth="1" x1="0" x2="800" y1="90" y2="90" />
<text className="text-[10px] fill-error font-bold" x="740" y="85">38°C</text>
</svg>
</div>
<div className="flex justify-around mt-4">
<div className="text-center">
<p className="text-[10px] uppercase text-on-surface-variant font-bold">Min</p>
<p className="text-lg font-bold text-primary">36.4°C</p>
</div>
<div className="text-center">
<p className="text-[10px] uppercase text-on-surface-variant font-bold">Max</p>
<p className="text-lg font-bold text-primary">39.1°C</p>
</div>
<div className="text-center">
<p className="text-[10px] uppercase text-on-surface-variant font-bold">Avg</p>
<p className="text-lg font-bold text-primary">37.2°C</p>
</div>
</div>
</div>
{/*  Temperature Log Table  */}
<div className="bento-item col-span-12">
<div className="flex justify-between items-center mb-6">
<h3 className="font-headline-sm text-headline-sm text-primary">Detailed Temperature Log</h3>
<button className="text-primary font-label-lg text-label-lg flex items-center gap-1">
<span className="material-symbols-outlined text-sm">add</span> Add Entry
                            </button>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left">
<thead className="border-b border-outline-variant">
<tr className="text-on-surface-variant font-label-lg text-label-lg">
<th className="pb-4 font-semibold">Date &amp; Time</th>
<th className="pb-4 font-semibold">Temp (°C)</th>
<th className="pb-4 font-semibold">Recorded By</th>
<th className="pb-4 font-semibold">Fever?</th>
<th className="pb-4 font-semibold text-right">Actions</th>
</tr>
</thead>
<tbody className="divide-y divide-outline-variant">
{patient.readings && patient.readings.length > 0 ? (
  patient.readings.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp)).map((reading) => {
      const date = new Date(reading.timestamp);
      const dateStr = date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
      const timeStr = date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
      
      return (
        <tr key={reading.id} className="group hover:bg-white transition-colors">
        <td className="py-4 text-on-surface font-medium">{dateStr}, {timeStr}</td>
        <td className={`py-4 font-bold ${reading.isFever ? 'text-error' : 'text-primary'}`}>{reading.temp}</td>
        <td className="py-4 text-on-surface-variant">
          {reading.recordedBy} {reading.role === 'Doctor' ? '(Override)' : ''}
        </td>
        <td className="py-4">
        {reading.isFever ? (
          <span className="bg-error text-white text-[10px] px-2 py-0.5 rounded font-black uppercase">YES</span>
        ) : (
          <span className="bg-secondary text-white text-[10px] px-2 py-0.5 rounded font-black uppercase">NO</span>
        )}
        </td>
        <td className="py-4 text-right">
        <button className="material-symbols-outlined text-on-surface-variant hover:text-primary">edit</button>
        </td>
        </tr>
      );
  })
) : (
  <tr>
    <td colSpan="5" className="py-8 text-center text-on-surface-variant">No temperature readings found for this patient.</td>
  </tr>
)}
</tbody>
</table>
</div>
</div>
{/*  Patients List Table  */}
<div className="bento-item col-span-12">
<div className="flex justify-between items-center mb-6">
<h3 className="font-headline-sm text-headline-sm text-primary">All Patients</h3>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left">
<thead className="border-b border-outline-variant">
<tr className="text-on-surface-variant font-label-lg text-label-lg">
<th className="pb-4 font-semibold">Patient Name</th>
<th className="pb-4 font-semibold">Room Number</th>
<th className="pb-4 font-semibold">Age</th>
<th className="pb-4 font-semibold">Status</th>
</tr>
</thead>
<tbody className="divide-y divide-outline-variant">
{patients.map((patient, idx) => (
<tr key={idx} className="group hover:bg-white transition-colors">
<td className="py-4 text-on-surface font-medium">{patient.name}</td>
<td className="py-4 text-primary font-bold">{patient.room}</td>
<td className="py-4 text-on-surface-variant">{patient.age}</td>
<td className="py-4">
<span className={`text-[10px] px-2 py-0.5 rounded font-black uppercase ${patient.status === 'Pending Reading' ? 'bg-error text-white' : (patient.status === 'New Patient' ? 'bg-secondary text-white' : 'bg-primary text-white')}`}>
{patient.status}
</span>
</td>
</tr>
))}
</tbody>
</table>
</div>
</div>
{/*  Doctor Visit Log  */}
<div className="bento-item col-span-12">
<div className="flex justify-between items-center mb-6">
<h3 className="font-headline-sm text-headline-sm text-primary">Doctor Visit Log</h3>
<button className="text-primary font-label-lg text-label-lg">View Full History</button>
</div>
<div className="space-y-4">
{/*  Visit Entry  */}
<div className="bg-white p-4 rounded-lg flex items-start gap-4 border-l-4 border-primary shadow-sm">
<div className="bg-secondary-container p-2 rounded">
<span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>person</span>
</div>
<div className="flex-1">
<div className="flex justify-between items-center mb-1">
<h4 className="font-bold text-primary">Dr. Aris Thorne</h4>
<span className="text-xs text-on-surface-variant">Oct 25, 09:15 AM</span>
</div>
<p className="text-sm text-on-surface-variant leading-relaxed">Patient stable. Continuing observation. Lungs clear on auscultation. Appetite returning. Recommend activity level 1 (ambulatory within room).</p>
</div>
</div>
{/*  Visit Entry  */}
<div className="bg-white p-4 rounded-lg flex items-start gap-4 border-l-4 border-outline-variant shadow-sm">
<div className="bg-secondary-container p-2 rounded">
<span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>person</span>
</div>
<div className="flex-1">
<div className="flex justify-between items-center mb-1">
<h4 className="font-bold text-primary">Dr. Maya Chen</h4>
<span className="text-xs text-on-surface-variant">Oct 24, 02:45 PM</span>
</div>
<p className="text-sm text-on-surface-variant leading-relaxed">Secondary consultation for respiratory baseline. Normal breath sounds. Blood oxygen saturation 98% on room air.</p>
</div>
</div>
</div>
</div>
</div>
{/*  Page Footer Branding  */}
<footer className="mt-12 mb-8 flex justify-between items-center border-t border-outline-variant pt-6">
<p className="text-xs text-on-surface-variant">© 2023 VitalWatch Institutional Monitoring System. Confidential Medical Record.</p>
<div className="flex gap-4">
<span className="text-xs font-bold text-primary uppercase tracking-tighter">System Status: Active</span>
<span className="text-xs font-bold text-on-tertiary-container uppercase tracking-tighter">Secure Link</span>
</div>
</footer>
</div>
</main>
</div>
{/*  Floating Action Button - Mobile Only (Hidden on Desktop per instructions)  */}
<div className="md:hidden fixed bottom-6 right-6">
<button className="bg-primary text-on-primary w-14 h-14 rounded-full shadow-lg flex items-center justify-center active:scale-95 transition-transform">
<span className="material-symbols-outlined">add</span>
</button>
</div>
    </>
  );
}
