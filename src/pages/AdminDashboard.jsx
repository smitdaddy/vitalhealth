import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { usePatients } from '../context/PatientContext';

export default function AdminDashboard() {
  const { addPatient } = usePatients();
  const [isAddPatientModalOpen, setIsAddPatientModalOpen] = useState(false);
  const [newPatientForm, setNewPatientForm] = useState({
      name: '',
      room: '',
      age: ''
  });

  const handleAddPatientSubmit = () => {
      addPatient({
          ...newPatientForm,
          status: "New Patient",
      });
      setIsAddPatientModalOpen(false);
      setNewPatientForm({ name: '', room: '', age: '' });
  };
  return (
    <>
      {/*  Top Navigation Shell  */}
<header className="bg-surface shadow-sm border-b border-outline-variant sticky top-0 z-50">
<div className="flex justify-between items-center w-full px-margin-desktop py-4 max-w-container-max mx-auto">
<div className="flex items-center gap-8">
<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center overflow-hidden">
<img alt="VitalWatch Logo" className="w-full h-full object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAI8MO_8Sc_lNPP7qG51xBrcvX5VMBwqlMChpD9Sln8lUBWy9JEwkPoK-ylGOf9FmKP96j-OjluzBWovl7wFFxmClGJdIWbmUyGul4qvzkwXizQ5wk5mv2a2bny6OoMvsS2NcsXxCG1O4H3CyNv8AZTCECkbuNwr-GJ0jcQL2K0r17zvOOs6-j4OxVbNowEbLvTse9Uvba_nNmdySa-UZPOOa-u6Ps6rBgq2nPxrVuEq3vxfDJvCiKTYmY5tmNVqtCQeNiuVmYFsX0"/>
</div>
<span className="font-headline-lg text-headline-lg font-bold text-primary">VitalWatch</span>
</div>
<nav className="hidden md:flex items-center gap-6">
<Link className="text-primary font-bold border-b-2 border-primary pb-1 font-label-lg text-label-lg" to="/admin">Dashboard</Link>
<Link className="text-on-surface-variant hover:text-primary transition-colors pb-1 font-label-lg text-label-lg" to="/patient">Patient List</Link>
<a className="text-on-surface-variant hover:text-primary transition-colors pb-1 font-label-lg text-label-lg" href="/">Facility Map</a>
<a className="text-on-surface-variant hover:text-primary transition-colors pb-1 font-label-lg text-label-lg" href="/">Logistics</a>
</nav>
</div>
<div className="flex items-center gap-4">
<button className="bg-error text-on-error px-6 py-2 rounded-full font-label-lg text-label-lg hover:opacity-90 transition-all flex items-center gap-2">
<span className="material-symbols-outlined text-[20px]">notifications_active</span>
                    Emergency Alert
                </button>
<div className="flex items-center gap-2 border-l border-outline-variant pl-4">
<button className="text-on-surface-variant hover:text-primary p-2">
<span className="material-symbols-outlined">notifications</span>
</button>
<button className="text-on-surface-variant hover:text-primary p-2">
<span className="material-symbols-outlined">settings</span>
</button>
<div className="w-10 h-10 rounded-full border-2 border-primary-container overflow-hidden ml-2 cursor-pointer">
<img alt="Medical Officer Profile" className="w-full h-full object-cover" data-alt="A professional medical headshot of a facility supervisor in a high-stakes clinical environment. The doctor has a confident and focused expression, wearing a sterile navy blue scrub top and a stethoscope around their neck. The background is a clean, out-of-focus medical ward with cool blue and white lighting, emphasizing a modern and highly organized healthcare setting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuC8yjwCW2cpKAMEH4w86LMVjqzSxguNmQImULT1T5hUvPmKl6RWClr6hrXF17XP4eWLpMRSd1jLlgpcoe2kPn3m8scausv7f-VF0YK9G3InkWy79h3uJk8KB9FG669WhF0DCd8-sUOoD1VbxdmPBrV4nfCFK5qLKYCs6JB08GW0OZscT0e7X_j7tQ0aFZQ6T8yRLhXL8WamFmAASYYLxSr_g0D5n7Lf9tVY4-MQ3PhMgi8zNvQLMeOguYu9IMb1QBtX1dwkqmiO8bo"/>
</div>
</div>
</div>
</div>
</header>
<div className="flex max-w-container-max mx-auto">
{/*  Sidebar Shell  */}
<aside className="hidden lg:flex flex-col w-64 bg-surface-container-low h-[calc(100vh-80px)] p-base space-y-2 border-r border-outline-variant sticky top-[80px]">
<div className="px-4 py-6">
<h3 className="font-headline-sm text-headline-sm font-black text-primary">Dr. Aris Thorne</h3>
<p className="font-body-md text-body-md text-on-surface-variant">Facility Supervisor - Zone 4</p>
</div>
<nav className="flex-grow space-y-1">
<a className="bg-secondary-container text-on-secondary-container rounded-lg px-4 py-3 flex items-center gap-3 transition-transform active:scale-95" href="/">
<span className="material-symbols-outlined filled-icon" style={{ fontVariationSettings: "'FILL' 1" }}>dashboard</span>
<span className="font-label-lg text-label-lg">Overview</span>
</a>
<a className="text-on-surface-variant hover:bg-surface-container-high px-4 py-3 flex items-center gap-3 rounded-lg transition-colors" href="/">
<span className="material-symbols-outlined">security</span>
<span className="font-label-lg text-label-lg">Quarantine Zone A</span>
</a>
<a className="text-on-surface-variant hover:bg-surface-container-high px-4 py-3 flex items-center gap-3 rounded-lg transition-colors" href="/">
<span className="material-symbols-outlined">emergency</span>
<span className="font-label-lg text-label-lg">Isolation Unit B</span>
</a>
<a className="text-on-surface-variant hover:bg-surface-container-high px-4 py-3 flex items-center gap-3 rounded-lg transition-colors" href="/">
<span className="material-symbols-outlined">medical_services</span>
<span className="font-label-lg text-label-lg">Triage</span>
</a>
<a className="text-on-surface-variant hover:bg-surface-container-high px-4 py-3 flex items-center gap-3 rounded-lg transition-colors" href="/">
<span className="material-symbols-outlined">analytics</span>
<span className="font-label-lg text-label-lg">Reports</span>
</a>
</nav>
<button className="mx-4 my-6 bg-primary text-on-primary py-3 rounded-full flex items-center justify-center gap-2 font-label-lg text-label-lg shadow-sm hover:opacity-90 transition-all" onClick={() => setIsAddPatientModalOpen(true)}>
<span className="material-symbols-outlined">add</span>
                New Entry
            </button>
<div className="border-t border-outline-variant pt-4 space-y-1">
<a className="text-on-surface-variant hover:bg-surface-container-high px-4 py-3 flex items-center gap-3 rounded-lg transition-colors" href="/">
<span className="material-symbols-outlined">help</span>
<span className="font-label-lg text-label-lg">Help Center</span>
</a>
<a className="text-on-surface-variant hover:bg-surface-container-high px-4 py-3 flex items-center gap-3 rounded-lg transition-colors" href="/">
<span className="material-symbols-outlined">settings</span>
<span className="font-label-lg text-label-lg">Settings</span>
</a>
</div>
</aside>
{/*  Main Content Canvas  */}
<main className="flex-grow p-gutter md:p-margin-desktop space-y-gutter">
{/*  Summary Tiles (Bento Grid Style)  */}
<section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
{/*  Patients  */}
<div className="tonal-card p-6 rounded-xl flex flex-col justify-between">
<div className="flex justify-between items-start">
<span className="font-label-lg text-label-lg text-on-surface-variant">Total Patients</span>
<span className="material-symbols-outlined text-primary">groups</span>
</div>
<div className="mt-4">
<h2 className="font-headline-lg text-headline-lg text-primary">74 / 74</h2>
<div className="w-full bg-outline-variant h-2 rounded-full mt-2">
<div className="bg-primary h-2 rounded-full" style={{ width: "100%" }}></div>
</div>
<p className="font-label-sm text-label-sm text-on-surface-variant mt-2">Capacity Reached</p>
</div>
</div>
{/*  Beds  */}
<div className="tonal-card p-6 rounded-xl flex flex-col justify-between">
<div className="flex justify-between items-start">
<span className="font-label-lg text-label-lg text-on-surface-variant">Available Beds</span>
<span className="material-symbols-outlined text-primary">bed</span>
</div>
<div className="mt-4">
<h2 className="font-headline-lg text-headline-lg text-primary">6</h2>
<p className="font-label-sm text-label-sm text-error mt-2 flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">warning</span>
                            Critical Threshold
                        </p>
</div>
</div>
{/*  Discharged  */}
<div className="tonal-card p-6 rounded-xl flex flex-col justify-between">
<div className="flex justify-between items-start">
<span className="font-label-lg text-label-lg text-on-surface-variant">Total Discharged</span>
<span className="material-symbols-outlined text-primary">check_circle</span>
</div>
<div className="mt-4">
<h2 className="font-headline-lg text-headline-lg text-primary">128</h2>
<p className="font-label-sm text-label-sm text-on-tertiary-container mt-2 flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">trending_up</span>
                            +12 this week
                        </p>
</div>
</div>
{/*  Mortality  */}
<div className="tonal-card p-6 rounded-xl flex flex-col justify-between">
<div className="flex justify-between items-start">
<span className="font-label-lg text-label-lg text-on-surface-variant">Mortality Rate</span>
<span className="material-symbols-outlined text-primary">analytics</span>
</div>
<div className="mt-4">
<h2 className="font-headline-lg text-headline-lg text-on-tertiary-container">4.2%</h2>
<p className="font-label-sm text-label-sm text-on-tertiary-container mt-2 flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">south</span>
                            -0.8% decrease
                        </p>
</div>
</div>
</section>
{/*  Main Interactive Section: Pending Discharges  */}
<section className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden border border-outline-variant">
<div className="p-6 border-b border-outline-variant flex justify-between items-center bg-white">
<h3 className="font-headline-sm text-headline-sm text-primary">Pending Discharges</h3>
<div className="flex gap-2">
<span className="bg-primary-fixed text-on-primary-fixed-variant px-3 py-1 rounded-full font-label-sm text-label-sm">4 Actions Required</span>
</div>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-surface-container-low border-b border-outline-variant">
<th className="px-6 py-4 font-label-lg text-label-lg text-on-surface-variant">Patient Name</th>
<th className="px-6 py-4 font-label-lg text-label-lg text-on-surface-variant">Days Admitted</th>
<th className="px-6 py-4 font-label-lg text-label-lg text-on-surface-variant">Flagging Doctor</th>
<th className="px-6 py-4 font-label-lg text-label-lg text-on-surface-variant text-right">Actions</th>
</tr>
</thead>
<tbody className="divide-y divide-outline-variant">
<tr className="hover:bg-surface-container transition-colors">
<td className="px-6 py-5">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-secondary-container flex items-center justify-center font-bold text-on-secondary-container">JM</div>
<div>
<p className="font-label-lg text-label-lg text-on-surface">Julianne Moore</p>
<p className="font-label-sm text-label-sm text-on-surface-variant">Case #8821-A</p>
</div>
</div>
</td>
<td className="px-6 py-5 font-body-md text-body-md">14 Days</td>
<td className="px-6 py-5">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-[18px] text-primary">medical_information</span>
<span className="font-body-md text-body-md">Dr. Chen</span>
</div>
</td>
<td className="px-6 py-5 text-right">
<button className="bg-on-tertiary-container text-white px-5 py-2 rounded-full font-label-lg text-label-lg hover:opacity-90 transition-all shadow-sm">Confirm Discharge</button>
</td>
</tr>
<tr className="hover:bg-surface-container transition-colors">
<td className="px-6 py-5">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-secondary-container flex items-center justify-center font-bold text-on-secondary-container">ES</div>
<div>
<p className="font-label-lg text-label-lg text-on-surface">Ethan Sullivan</p>
<p className="font-label-sm text-label-sm text-on-surface-variant">Case #9012-C</p>
</div>
</div>
</td>
<td className="px-6 py-5 font-body-md text-body-md">21 Days</td>
<td className="px-6 py-5">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-[18px] text-primary">medical_information</span>
<span className="font-body-md text-body-md">Dr. Vance</span>
</div>
</td>
<td className="px-6 py-5 text-right">
<button className="bg-on-tertiary-container text-white px-5 py-2 rounded-full font-label-lg text-label-lg hover:opacity-90 transition-all shadow-sm">Confirm Discharge</button>
</td>
</tr>
<tr className="hover:bg-surface-container transition-colors">
<td className="px-6 py-5">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-secondary-container flex items-center justify-center font-bold text-on-secondary-container">MK</div>
<div>
<p className="font-label-lg text-label-lg text-on-surface">Maya Kaur</p>
<p className="font-label-sm text-label-sm text-on-surface-variant">Case #8774-B</p>
</div>
</div>
</td>
<td className="px-6 py-5 font-body-md text-body-md">9 Days</td>
<td className="px-6 py-5">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-[18px] text-primary">medical_information</span>
<span className="font-body-md text-body-md">Dr. Thorne</span>
</div>
</td>
<td className="px-6 py-5 text-right">
<button className="bg-on-tertiary-container text-white px-5 py-2 rounded-full font-label-lg text-label-lg hover:opacity-90 transition-all shadow-sm">Confirm Discharge</button>
</td>
</tr>
</tbody>
</table>
</div>
</section>
{/*  Activity Log  */}
<section className="bg-surface-container-low rounded-xl p-6">
<div className="flex items-center justify-between mb-6">
<h3 className="font-headline-sm text-headline-sm text-primary">Recent Activity Log</h3>
<button className="text-primary font-label-lg text-label-lg flex items-center gap-1 hover:underline">
                        View Full History
                        <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
</button>
</div>
<div className="space-y-4">
<div className="flex gap-4 items-start pb-4 border-b border-outline-variant">
<div className="w-2 h-2 rounded-full bg-tertiary-fixed-dim mt-2 shadow-sm"></div>
<div className="flex-grow">
<p className="font-body-md text-body-md text-on-surface"><strong>Patient Transfer:</strong> Liam Rodriguez moved from Triage to Isolation Unit B.</p>
<p className="font-label-sm text-label-sm text-on-surface-variant">14 minutes ago • Facility Ops</p>
</div>
</div>
<div className="flex gap-4 items-start pb-4 border-b border-outline-variant">
<div className="w-2 h-2 rounded-full bg-error mt-2 shadow-sm"></div>
<div className="flex-grow">
<p className="font-body-md text-body-md text-on-surface"><strong>Vitals Alert:</strong> Room 402 - SpO2 level dropped below 88% threshold.</p>
<p className="font-label-sm text-label-sm text-on-surface-variant">28 minutes ago • Automated Monitor</p>
</div>
</div>
<div className="flex gap-4 items-start">
<div className="w-2 h-2 rounded-full bg-primary-fixed-dim mt-2 shadow-sm"></div>
<div className="flex-grow">
<p className="font-body-md text-body-md text-on-surface"><strong>Logistics Update:</strong> 500 units of antiviral medication received and logged into inventory.</p>
<p className="font-label-sm text-label-sm text-on-surface-variant">1 hour ago • Central Supply</p>
</div>
</div>
</div>
</section>
</main>
</div>
{/*  Mobile Bottom Navigation  */}
<nav className="md:hidden fixed bottom-0 left-0 right-0 bg-surface shadow-lg border-t border-outline-variant flex justify-around py-3 z-50">
<button className="flex flex-col items-center gap-1 text-primary">
<span className="material-symbols-outlined filled-icon" style={{ fontVariationSettings: "'FILL' 1" }}>dashboard</span>
<span className="font-label-sm text-[10px]">Overview</span>
</button>
<button className="flex flex-col items-center gap-1 text-on-surface-variant">
<span className="material-symbols-outlined">groups</span>
<span className="font-label-sm text-[10px]">Patients</span>
</button>
<button className="flex flex-col items-center gap-1 text-on-surface-variant">
<span className="material-symbols-outlined">map</span>
<span className="font-label-sm text-[10px]">Map</span>
</button>
<button className="flex flex-col items-center gap-1 text-on-surface-variant">
<span className="material-symbols-outlined">inventory_2</span>
<span className="font-label-sm text-[10px]">Logistics</span>
</button>
</nav>
{isAddPatientModalOpen && (
<div className="fixed inset-0 bg-primary/40 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
    <div className="bg-white rounded-2xl w-full max-w-md shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300">
        <div className="bg-primary-container p-6 flex justify-between items-center text-primary-fixed">
            <div>
                <h3 className="font-headline-sm text-headline-sm text-on-primary-container">New Patient Entry</h3>
            </div>
            <button className="hover:bg-white/10 rounded-full p-1 text-on-primary-container" onClick={() => setIsAddPatientModalOpen(false)}>
                <span className="material-symbols-outlined" data-icon="close">close</span>
            </button>
        </div>
        <div className="p-8 space-y-4">
            <div className="space-y-2">
                <label className="font-label-lg text-label-lg text-on-surface-variant">Patient Name</label>
                <input className="w-full bg-surface-container-low border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary rounded-xl py-3 px-4 text-primary" placeholder="Full Name" value={newPatientForm.name} onChange={(e) => setNewPatientForm({...newPatientForm, name: e.target.value})} type="text"/>
            </div>
            <div className="space-y-2">
                <label className="font-label-lg text-label-lg text-on-surface-variant">Room Number</label>
                <input className="w-full bg-surface-container-low border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary rounded-xl py-3 px-4 text-primary" placeholder="e.g. 112" value={newPatientForm.room} onChange={(e) => setNewPatientForm({...newPatientForm, room: e.target.value})} type="text"/>
            </div>
            <div className="space-y-2">
                <label className="font-label-lg text-label-lg text-on-surface-variant">Age</label>
                <input className="w-full bg-surface-container-low border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary rounded-xl py-3 px-4 text-primary" placeholder="Age" value={newPatientForm.age} onChange={(e) => setNewPatientForm({...newPatientForm, age: e.target.value})} type="number"/>
            </div>
            <div className="flex gap-4 pt-4">
                <button className="flex-1 py-4 font-bold text-on-surface-variant hover:bg-surface-container rounded-full transition-all" onClick={() => setIsAddPatientModalOpen(false)}>Cancel</button>
                <button className="flex-1 py-4 bg-primary text-on-primary font-bold rounded-full shadow-lg hover:shadow-primary/20 active:scale-95 transition-all" onClick={handleAddPatientSubmit}>Add Patient</button>
            </div>
        </div>
    </div>
</div>
)}
    </>
  );
}
