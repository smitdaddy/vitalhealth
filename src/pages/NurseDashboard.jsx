import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { usePatients } from '../context/PatientContext';

export default function NurseDashboard() {
  const { patients, addPatient, addReading } = usePatients();
  
  // Vitals Modal State
  const [selectedPatientId, setSelectedPatientId] = useState(null);
  const [tempValue, setTempValue] = useState('');
  const [tempError, setTempError] = useState('');
  
  // New Patient Modal State
  const [isAddPatientModalOpen, setIsAddPatientModalOpen] = useState(false);
  const [newPatientForm, setNewPatientForm] = useState({
      name: '',
      room: '',
      age: ''
  });

  const handleRecordTempSubmit = () => {
      setTempError('');
      const result = addReading(selectedPatientId, tempValue, 'Nurse', 'Nurse Sarah');
      if (!result.success) {
          setTempError(result.error);
      } else {
          setSelectedPatientId(null);
          setTempValue('');
      }
  };

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
      <nav className="bg-surface dark:bg-primary shadow-sm border-b border-outline-variant flex justify-between items-center w-full px-margin-desktop py-4 max-w-container-max mx-auto sticky top-0 z-50">
<div className="flex items-center gap-8">
<div className="flex items-center gap-2">
<img alt="VitalWatch Logo" className="w-10 h-10" data-alt="A clean, medical-grade logo icon featuring a stylized heartbeat line and a protective shield in professional navy blue and medical green. The style is modern, clinical, and corporate, set against a sterile white background with soft ambient studio lighting for a high-tech healthcare aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBsP_fv_FyoHt3Unc_bppFLFQvEsJe5oOB0ShgixNM6h3rVNeqmqpEn0hoo4ko1nhWB9g2VpZ_l1jncAg1Xu6XbO0tgX68CQEvXIKJ8-90sMmv_F0977OL8leHac-L_f8Et74wwsUVAB_jkni8dB-vY4xpJxmAzUi6yVYQq_yjCI6kJVRvlCKeFqPuL67pwUgF_xKQTqQqzeKvtCASgioH6vFy3euIJ0qfdS0FiEZc2cK-3ExbBLjtrFYdcRGAKKIp781u9JEQcaFc"/>
<span className="font-headline-lg text-headline-lg font-bold text-primary dark:text-tertiary-fixed">VitalWatch</span>
</div>
<div className="hidden md:flex gap-6 items-center">
<Link className="text-primary dark:text-tertiary-fixed font-bold border-b-2 border-primary dark:border-tertiary-fixed pb-1 font-label-lg text-label-lg" to="/nurse">Dashboard</Link>
<Link className="text-on-surface-variant dark:text-on-primary-container pb-1 font-label-lg text-label-lg hover:text-primary dark:hover:text-tertiary-fixed transition-colors duration-200" to="/patient">Patient List</Link>
<a className="text-on-surface-variant dark:text-on-primary-container pb-1 font-label-lg text-label-lg hover:text-primary dark:hover:text-tertiary-fixed transition-colors duration-200" href="/">Facility Map</a>
<a className="text-on-surface-variant dark:text-on-primary-container pb-1 font-label-lg text-label-lg hover:text-primary dark:hover:text-tertiary-fixed transition-colors duration-200" href="/">Logistics</a>
</div>
</div>
<div className="flex items-center gap-4">
<div className="flex flex-col items-end mr-4">
<span className="font-label-lg text-label-lg text-primary font-bold">Sarah Johnson</span>
<span className="text-[10px] text-on-surface-variant uppercase tracking-widest">Nurse | Oct 24, 2023</span>
</div>
<div className="flex items-center gap-2">
<button className="p-2 text-on-surface-variant hover:bg-surface-container rounded-full transition-all">
<span className="material-symbols-outlined" data-icon="notifications">notifications</span>
</button>
<button className="p-2 text-on-surface-variant hover:bg-surface-container rounded-full transition-all">
<span className="material-symbols-outlined" data-icon="settings">settings</span>
</button>
<button className="bg-primary text-on-primary px-4 py-2 rounded-full font-label-lg text-label-lg hover:opacity-90 active:scale-95 transition-all">
                    Emergency Alert
                </button>
</div>
</div>
</nav>
<main className="max-w-container-max mx-auto px-margin-desktop py-8 grid grid-cols-12 gap-gutter">
<aside className="col-span-3">
<div className="bg-surface-container-low rounded-xl p-6 space-y-4 border border-outline-variant">
<div className="flex items-center gap-3 pb-4 border-b border-outline-variant">
<div className="w-12 h-12 rounded-full bg-primary-container flex items-center justify-center">
<span className="material-symbols-outlined text-primary-fixed" data-icon="person">person</span>
</div>
<div>
<h3 className="font-headline-sm text-headline-sm text-primary">Dr. Aris Thorne</h3>
<p className="font-body-md text-body-md text-on-surface-variant">Facility Supervisor</p>
</div>
</div>
<nav className="space-y-1">
<a className="bg-secondary-container text-on-secondary-container rounded-lg px-4 py-3 flex items-center gap-3 transition-transform active:scale-95" href="/">
<span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
<span className="font-label-lg text-label-lg">Overview</span>
</a>
<a className="text-on-surface-variant hover:bg-surface-container-high px-4 py-3 flex items-center gap-3 rounded-lg transition-colors" href="/">
<span className="material-symbols-outlined" data-icon="security">security</span>
<span className="font-label-lg text-label-lg">Quarantine Zone A</span>
</a>
<a className="text-on-surface-variant hover:bg-surface-container-high px-4 py-3 flex items-center gap-3 rounded-lg transition-colors" href="/">
<span className="material-symbols-outlined" data-icon="emergency">emergency</span>
<span className="font-label-lg text-label-lg">Isolation Unit B</span>
</a>
<a className="text-on-surface-variant hover:bg-surface-container-high px-4 py-3 flex items-center gap-3 rounded-lg transition-colors" href="/">
<span className="material-symbols-outlined" data-icon="medical_services">medical_services</span>
<span className="font-label-lg text-label-lg">Triage</span>
</a>
<a className="text-on-surface-variant hover:bg-surface-container-high px-4 py-3 flex items-center gap-3 rounded-lg transition-colors" href="/">
<span className="material-symbols-outlined" data-icon="analytics">analytics</span>
<span className="font-label-lg text-label-lg">Reports</span>
</a>
</nav>
<div className="pt-4">
<button className="w-full bg-primary-container text-primary-fixed py-3 rounded-lg font-bold flex items-center justify-center gap-2 hover:opacity-90" onClick={() => setIsAddPatientModalOpen(true)}>
<span className="material-symbols-outlined" data-icon="add">add</span>
                        New Entry
                    </button>
</div>
</div>
</aside>
<section className="col-span-9 space-y-8">
<header className="flex justify-between items-end">
<div>
<h1 className="font-headline-lg text-headline-lg text-primary">Patient Monitoring</h1>
<p className="text-on-surface-variant font-body-lg text-body-lg">Active patients in Isolation Ward 4</p>
</div>
<div className="flex gap-2">
<div className="bg-surface-container rounded-full px-4 py-2 flex items-center gap-2 text-on-surface-variant border border-outline-variant">
<span className="material-symbols-outlined text-[18px]" data-icon="filter_list">filter_list</span>
<span className="font-label-lg text-label-lg">Filter: All</span>
</div>
</div>
</header>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {patients.map(patient => {
        const currentHour = new Date().getHours();
        const todayStr = new Date().toDateString();
        const todayReading = patient.readings?.find(r => new Date(r.timestamp).toDateString() === todayStr);
        
        const isFever = todayReading?.isFever;
        let overdueStatus = null;
        if (!todayReading) {
            if (currentHour >= 18) {
                overdueStatus = 'critical';
            } else if (currentHour >= 14) {
                overdueStatus = 'warning';
            }
        }

        let cardClasses = 'bg-[#EAF4FB] hover:shadow-lg border border-transparent';
        let statusBadge = '';
        let statusIcon = 'monitor_heart';
        let iconColor = 'text-primary';

        if (isFever) {
            cardClasses = 'bg-error-container border-2 border-error shadow-md';
            statusBadge = <span className="px-2 py-1 rounded text-[10px] font-bold uppercase mb-2 block w-fit bg-error text-on-error">🚨 FEVER DETECTED</span>;
            statusIcon = 'emergency';
            iconColor = 'text-error';
        } else if (overdueStatus === 'critical') {
            cardClasses = 'bg-[#FFF3E0] border-2 border-[#FFB74D] shadow-md';
            statusBadge = <span className="px-2 py-1 rounded text-[10px] font-bold uppercase mb-2 block w-fit bg-[#E65100] text-white">⚠️ CRITICAL: OVERDUE</span>;
            statusIcon = 'warning';
            iconColor = 'text-[#E65100]';
        } else if (overdueStatus === 'warning') {
            cardClasses = 'bg-[#FFF8E1] border-2 border-[#FFE082] shadow-sm';
            statusBadge = <span className="px-2 py-1 rounded text-[10px] font-bold uppercase mb-2 block w-fit bg-[#FFB300] text-[#FFF8E1]">⏳ WARNING: OVERDUE</span>;
            statusIcon = 'schedule';
            iconColor = 'text-[#FFB300]';
        } else if (!todayReading) {
            cardClasses = 'bg-[#EAF4FB] border-2 border-primary/20 shadow-sm';
            statusBadge = <span className="px-2 py-1 rounded text-[10px] font-bold uppercase mb-2 block w-fit bg-error-container text-on-error-container">⚠️ Pending Reading</span>;
            statusIcon = 'emergency_home';
            iconColor = 'text-error';
        } else {
            statusBadge = <span className="px-2 py-1 rounded text-[10px] font-bold uppercase mb-2 block w-fit bg-on-tertiary-container/10 text-on-tertiary-container">✅ Temp Recorded</span>;
        }

        return (
        <div key={patient.id} className={`rounded-xl p-6 transition-all ${cardClasses}`}>
            <div className="flex justify-between items-start mb-4">
                <div>
                    {statusBadge}
                    <h2 className="font-headline-sm text-headline-sm text-primary">{patient.name}</h2>
                    <p className="text-on-surface-variant font-body-md text-body-md">Room {patient.room} | Age: {patient.age}</p>
                </div>
                <div className="bg-white/50 p-2 rounded-lg">
                    <span className={`material-symbols-outlined ${iconColor}`} data-icon={statusIcon}>
                        {statusIcon}
                    </span>
                </div>
            </div>
            
            <div className="space-y-3">
                {!todayReading ? (
                    <div className="bg-white/60 p-4 rounded-lg">
                        {overdueStatus === 'critical' && <p className="text-sm font-bold text-[#E65100] mb-3">Reading overdue since 18:00!</p>}
                        {overdueStatus === 'warning' && <p className="text-sm font-bold text-[#FFB300] mb-3">Reading overdue since 14:00!</p>}
                        {!overdueStatus && <p className="text-sm text-on-surface-variant mb-3">Temperature check required today.</p>}
                        <button className="w-full bg-primary text-on-primary py-3 rounded-full font-bold flex items-center justify-center gap-2 hover:opacity-90 active:scale-95 transition-all" onClick={() => setSelectedPatientId(patient.id)}>
                            <span className="material-symbols-outlined text-[20px]" data-icon="device_thermostat">device_thermostat</span>
                            Record Temp
                        </button>
                    </div>
                ) : (
                    <>
                        <div className="flex justify-between text-sm py-2 border-b border-primary/10">
                            <span className="text-on-surface-variant">Today's Temp:</span>
                            <span className={`font-bold ${isFever ? 'text-error' : 'text-primary'}`}>{todayReading.temp}</span>
                        </div>
                        {patient.heartRate && (
                            <div className="flex justify-between text-sm py-2 border-b border-primary/10">
                                <span className="text-on-surface-variant">Heart Rate:</span>
                                <span className="font-bold text-primary">{patient.heartRate}</span>
                            </div>
                        )}
                        {patient.bloodOxygen && (
                            <div className="flex justify-between text-sm py-2 border-b border-primary/10">
                                <span className="text-on-surface-variant">Blood Oxygen:</span>
                                <span className="font-bold text-primary">{patient.bloodOxygen}</span>
                            </div>
                        )}
                        <button className="w-full mt-2 bg-surface text-primary py-2 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-surface-container active:scale-95 transition-all" onClick={() => setSelectedPatientId(patient.id)}>
                            <span className="material-symbols-outlined text-[16px]" data-icon="edit">edit</span>
                            Update Temp
                        </button>
                    </>
                )}
            </div>
        </div>
        );
    })}
</div>
{/*  Dashboard Analytics Bento Section  */}
<div className="grid grid-cols-4 gap-6 h-64">
<div className="col-span-2 bg-[#EAF4FB] rounded-xl p-6 flex flex-col justify-between">
<h3 className="font-label-lg text-label-lg text-primary uppercase tracking-wider">Facility Throughput</h3>
<div className="h-32 w-full flex items-end gap-1">
<div className="bg-primary/20 w-full h-1/2 rounded-t-sm"></div>
<div className="bg-primary/40 w-full h-3/4 rounded-t-sm"></div>
<div className="bg-primary/20 w-full h-2/3 rounded-t-sm"></div>
<div className="bg-primary w-full h-full rounded-t-sm"></div>
<div className="bg-primary/60 w-full h-4/5 rounded-t-sm"></div>
</div>
</div>
<div className="bg-primary rounded-xl p-6 flex flex-col justify-between text-on-primary">
<span className="material-symbols-outlined text-[32px]" data-icon="groups">groups</span>
<div>
<span className="text-4xl font-bold">142</span>
<p className="text-primary-fixed text-sm">Active Patients</p>
</div>
</div>
<div className="bg-tertiary-container rounded-xl p-6 flex flex-col justify-between text-on-tertiary">
<span className="material-symbols-outlined text-[32px]" data-icon="health_and_safety">health_and_safety</span>
<div>
<span className="text-4xl font-bold">89%</span>
<p className="text-on-tertiary-container text-sm">Vital Recovery Rate</p>
</div>
</div>
</div>
</section>
</main>
{/*  Modal Backdrop  */}
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
