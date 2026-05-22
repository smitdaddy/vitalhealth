import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import BrandLogo from '../components/BrandLogo';
import { usePatients } from '../context/PatientContext';
import { setActiveRole } from '../utils/roleNavigation';

export default function DoctorDashboard() {
  const [activeTab, setActiveTab] = useState('ready');
  const { patients, addReading } = usePatients();

  useEffect(() => {
    setActiveRole('doctor');
  }, []);

  // Vitals Modal State
  const [selectedPatientId, setSelectedPatientId] = useState(null);
  const [tempValue, setTempValue] = useState('');
  const [tempError, setTempError] = useState('');

  const todayStr = new Date().toDateString();
  const readyPatients = patients.filter(p => p.readings?.some(r => new Date(r.timestamp).toDateString() === todayStr));
  const awaitingPatients = patients.filter(p => !p.readings?.some(r => new Date(r.timestamp).toDateString() === todayStr));

  const handleRecordTempSubmit = () => {
      setTempError('');
      const result = addReading(selectedPatientId, tempValue, 'Doctor', 'Dr. Vance');
      if (!result.success) {
          setTempError(result.error);
      } else {
          setSelectedPatientId(null);
          setTempValue('');
      }
  };

  return (
    <>
<header className="bg-surface border-b border-outline-variant sticky top-0 z-50">
<div className="flex justify-between items-center w-full px-margin-desktop py-4 max-w-container-max mx-auto">
<div className="flex items-center gap-6">
<BrandLogo />
<div className="hidden md:flex gap-8 items-center">
<Link className="text-primary font-bold border-b-2 border-primary pb-1 font-label-lg text-label-lg transition-all" to="/doctor">Dashboard</Link>
<Link className="text-on-surface-variant pb-1 font-label-lg text-label-lg hover:text-primary transition-colors duration-200" to="/patient">Patient List</Link>
<Link className="text-on-surface-variant pb-1 font-label-lg text-label-lg hover:text-primary transition-colors duration-200" to="/facility-map">Facility Map</Link>
</div>
</div>
<div className="flex items-center gap-6">
<div className="hidden lg:flex flex-col items-end">
<span className="font-label-lg text-label-lg text-primary">Dr. Marcus Vance</span>
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
<div className="font-headline-sm text-headline-sm text-tertiary">{readyPatients.length} Patients</div>
</div>
</div>
</div>
</div>

<div className="flex gap-2 mb-8 bg-surface-container-low p-1 rounded-full w-fit">
<button 
  className={`px-8 py-3 rounded-full font-label-lg text-label-lg transition-all ${activeTab === 'ready' ? 'bg-primary text-on-primary shadow-md' : 'text-on-surface-variant hover:bg-surface-container-high'}`}
  onClick={() => setActiveTab('ready')}
>
    Ready for Visit ({readyPatients.length})
</button>
<button 
  className={`px-8 py-3 rounded-full font-label-lg text-label-lg transition-all ${activeTab === 'awaiting' ? 'bg-primary text-on-primary shadow-md' : 'text-on-surface-variant hover:bg-surface-container-high'}`}
  onClick={() => setActiveTab('awaiting')}
>
    Awaiting Temperature ({awaitingPatients.length})
</button>
</div>

{activeTab === 'ready' && (
<div className="bento-grid" id="tab-ready">
    {readyPatients.map(patient => {
        const todayReading = patient.readings.find(r => new Date(r.timestamp).toDateString() === todayStr);
        const isFever = todayReading?.isFever;
        return (
            <div key={patient.id} className={`col-span-12 md:col-span-6 lg:col-span-4 rounded-xl p-6 transition-all hover:shadow-lg ${isFever ? 'bg-error-container border-2 border-error' : 'bg-[#EAF4FB]'}`}>
                <div className="flex justify-between items-start mb-4">
                    <div>
                        <span className="text-xs font-bold text-primary uppercase tracking-widest bg-white/50 px-2 py-1 rounded">Room {patient.room}</span>
                        <h3 className="font-headline-sm text-headline-sm text-primary mt-2">{patient.name}</h3>
                    </div>
                    {isFever ? (
                        <div className="bg-error text-on-error px-3 py-1 rounded-full text-[10px] font-black uppercase">Fever Detected</div>
                    ) : (
                        <div className="bg-tertiary-fixed-dim text-on-tertiary-fixed-variant px-3 py-1 rounded-full text-[10px] font-black uppercase">Stable</div>
                    )}
                </div>
                <div className={`flex items-center gap-2 mb-6 ${isFever ? 'text-error' : 'text-primary'}`}>
                    <span className="material-symbols-outlined fill-icon text-4xl">thermostat</span>
                    <span className="text-3xl font-bold">{todayReading.temp}</span>
                    <span className="text-xs font-medium ml-auto bg-white px-2 py-1 rounded-md">By {todayReading.recordedBy}</span>
                </div>
                <div className="space-y-3">
                    <button className="w-full bg-[#00a656] text-white py-3 rounded-full font-label-lg text-label-lg hover:opacity-90 active:scale-95 transition-all flex items-center justify-center gap-2">
                        <span className="material-symbols-outlined text-sm">done_all</span>
                        Mark as Visited
                    </button>
                </div>
            </div>
        );
    })}

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
    </ul>
    </div>
    </div>
</div>
)}

{activeTab === 'awaiting' && (
<div className="bento-grid" id="tab-awaiting">
    {awaitingPatients.map(patient => (
        <div key={patient.id} className="col-span-12 md:col-span-6 lg:col-span-4 bg-surface-container-high rounded-xl p-6 border border-dashed border-outline">
            <div className="flex justify-between items-start mb-4">
                <div>
                    <h3 className="font-headline-sm text-headline-sm text-primary">{patient.name}</h3>
                    <p className="text-xs font-bold text-on-surface-variant uppercase mt-1">Room {patient.room}</p>
                </div>
                <span className="material-symbols-outlined text-outline">pending_actions</span>
            </div>
            <div className="bg-white/50 p-4 rounded-lg mb-4 text-sm text-on-surface-variant">
                No nurse reading found for today.
            </div>
            <button 
                onClick={() => setSelectedPatientId(patient.id)}
                className="w-full bg-primary text-on-primary py-3 rounded-full font-label-lg text-label-lg shadow-sm hover:opacity-90 active:scale-95 transition-all"
            >
                Record as Doctor
            </button>
        </div>
    ))}
    {awaitingPatients.length === 0 && (
        <div className="col-span-12 py-12 text-center text-on-surface-variant">
            <span className="material-symbols-outlined text-4xl mb-2 opacity-50">check_circle</span>
            <p>All patients have received their temperature readings today.</p>
        </div>
    )}
</div>
)}

{selectedPatientId && (
<div className="fixed inset-0 bg-primary/40 backdrop-blur-sm z-[100] flex items-center justify-center p-4" id="modalOverlay">
<div className="bg-white rounded-2xl w-full max-w-md shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300">
<div className="bg-primary p-6 flex justify-between items-center text-on-primary">
<div>
<h3 className="font-headline-sm text-headline-sm">Enter Patient Vitals</h3>
<p className="text-primary-fixed text-sm opacity-80" id="modalPatientInfo">
  Patient: {patients.find(p => p.id === selectedPatientId)?.name} | Room {patients.find(p => p.id === selectedPatientId)?.room}
</p>
</div>
<button className="hover:bg-white/10 rounded-full p-1" onClick={() => { setSelectedPatientId(null); setTempError(''); setTempValue(''); }}>
<span className="material-symbols-outlined" data-icon="close">close</span>
</button>
</div>
<div className="p-8 space-y-6">

<div className="bg-error-container text-on-error-container p-4 rounded-lg text-sm flex items-start gap-3 border border-error/20">
    <span className="material-symbols-outlined text-[20px]">warning</span>
    <p><strong>Doctor Override:</strong> No nurse reading found. Record as doctor? This entry will be logged under your credentials.</p>
</div>

{tempError && (
  <div className="bg-error-container text-on-error-container p-3 rounded-lg text-sm flex items-start gap-2">
    <span className="material-symbols-outlined text-[18px]">error</span>
    <span>{tempError}</span>
  </div>
)}
<div className="space-y-2">
<label className="font-label-lg text-label-lg text-on-surface-variant">Temperature (°C)</label>
<div className="relative">
<input 
  className="w-full bg-surface-container-low border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary rounded-xl py-4 px-6 text-2xl font-bold text-primary" 
  placeholder="36.5" 
  step="0.1" 
  type="number"
  value={tempValue}
  onChange={(e) => setTempValue(e.target.value)}
/>
<span className="absolute right-6 top-1/2 -translate-y-1/2 font-bold text-on-surface-variant">°C</span>
</div>
</div>
<div className="flex gap-4 pt-2">
<button className="flex-1 py-4 font-bold text-on-surface-variant hover:bg-surface-container rounded-full transition-all" onClick={() => { setSelectedPatientId(null); setTempError(''); setTempValue(''); }}>Cancel</button>
<button className="flex-1 py-4 bg-primary text-on-primary font-bold rounded-full shadow-lg hover:shadow-primary/20 active:scale-95 transition-all" onClick={handleRecordTempSubmit}>Save Entry</button>
</div>
</div>
</div>
</div>
)}

</main>
    </>
  );
}
