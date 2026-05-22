import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import BrandLogo from '../components/BrandLogo';
import { getActiveRole } from '../utils/roleNavigation';
import Sidebar from '../components/Sidebar';


export default function QuarantineZoneA() {
  const [activeFilter, setActiveFilter] = useState('All');
  const role = getActiveRole();
  const dashboardPath = role === 'nurse' ? '/nurse' : role === 'doctor' ? '/doctor' : '/admin';

  const patients = [
    { id: 1, name: 'Elena Rodriguez', code: '#VW-9284', room: '102A', temp: '36.6', isFever: false, streak: 3, discharge: true },
    { id: 2, name: 'Marcus Vance', code: '#VW-9311', room: '104B', temp: '38.9', isFever: true, streak: 0, discharge: false },
    { id: 3, name: 'Sarah Chen', code: '#VW-9204', room: '201C', temp: '36.8', isFever: false, streak: 1, discharge: false },
    { id: 4, name: 'Jordan Smith', code: '#VW-9402', room: '205A', temp: '37.1', isFever: false, streak: 2, discharge: false },
    { id: 5, name: "Liam O'Connor", code: '#VW-9122', room: '108D', temp: '38.4', isFever: true, streak: 0, discharge: false },
    { id: 6, name: 'Aisha Bint', code: '#VW-9543', room: '212B', temp: '36.9', isFever: false, streak: 1, discharge: false },
    { id: 7, name: 'Victor Hugo', code: '#VW-9233', room: '115C', temp: '36.5', isFever: false, streak: 3, discharge: true },
    { id: 8, name: 'Nina Petrova', code: '#VW-9621', room: '101D', temp: '37.3', isFever: false, streak: 2, discharge: false },
  ];

  const filteredPatients = patients.filter(p => {
    if (activeFilter === 'All') return true;
    if (activeFilter === 'Fever') return p.isFever;
    if (activeFilter === 'Fever-Free') return !p.isFever && p.streak > 0;
    if (activeFilter === 'Eligible for Discharge') return p.discharge;
    return true;
  });

  return (
    <div className="bg-surface-container-lowest font-body-md text-on-background min-h-screen flex overflow-hidden">
      {/* Side Navigation */}
      <Sidebar className="hidden md:flex w-64 h-screen flex-shrink-0 z-50 sticky top-0" />

      {/* Main Content */}
      <div className="flex-1 flex flex-col h-screen overflow-hidden relative">
        {/* Top Nav */}
        <header className="bg-surface shadow-sm border-b border-outline-variant z-40 sticky top-0">
          <div className="flex justify-between items-center w-full px-margin-desktop py-4 max-w-container-max mx-auto">
            <div className="flex items-center gap-8">
              <BrandLogo />
              <nav className="hidden lg:flex items-center gap-6">
                <Link className="font-label-lg text-label-lg text-on-surface-variant pb-1 hover:text-primary transition-colors" to={dashboardPath}>Dashboard</Link>
                <Link className="font-label-lg text-label-lg text-primary font-bold border-b-2 border-primary pb-1" to="/patient">Patient List</Link>
                <Link className="font-label-lg text-label-lg text-on-surface-variant pb-1 hover:text-primary transition-colors" to="/facility-map">Facility Map</Link>
                <Link className="font-label-lg text-label-lg text-on-surface-variant pb-1 hover:text-primary transition-colors" to="/logistics">Logistics</Link>
              </nav>
            </div>
            <div className="flex items-center gap-4">
              <button className="bg-error text-on-error font-label-lg px-4 py-2 rounded-full hover:opacity-90 transition-opacity">Emergency Alert</button>
              <button className="p-2 text-on-surface-variant hover:bg-surface-container-high rounded-full transition-colors relative">
                <span className="material-symbols-outlined">notifications</span>
                <span className="absolute top-2 right-2 w-2 h-2 bg-error rounded-full"></span>
              </button>
              <button className="p-2 text-on-surface-variant hover:bg-surface-container-high rounded-full transition-colors">
                <span className="material-symbols-outlined">settings</span>
              </button>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto bg-surface-bright px-margin-mobile md:px-margin-desktop py-8">
          <div className="max-w-container-max mx-auto space-y-8">
            {/* Top Stats */}
            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter">
              <div className="bg-[#EAF4FB] p-6 rounded-xl flex flex-col justify-between h-32 transition-transform hover:scale-[1.02] cursor-default">
                <div className="flex justify-between items-start">
                  <span className="text-on-surface-variant font-label-lg uppercase tracking-wider">Occupied Beds</span>
                  <span className="material-symbols-outlined text-primary">bed</span>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="font-headline-lg text-headline-lg text-primary">28</span>
                  <span className="font-body-md text-on-surface-variant">/ 30</span>
                </div>
              </div>
              <div className="bg-[#EAF4FB] p-6 rounded-xl flex flex-col justify-between h-32 transition-transform hover:scale-[1.02] cursor-default">
                <div className="flex justify-between items-start">
                  <span className="text-on-surface-variant font-label-lg uppercase tracking-wider">Avg Temp Today</span>
                  <span className="material-symbols-outlined text-orange-500">thermostat</span>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="font-headline-lg text-headline-lg text-orange-500">38.2°C</span>
                  <span className="material-symbols-outlined text-orange-500 text-sm">trending_up</span>
                </div>
              </div>
              <div className="bg-[#EAF4FB] p-6 rounded-xl flex flex-col justify-between h-32 transition-transform hover:scale-[1.02] cursor-default">
                <div className="flex justify-between items-start">
                  <span className="text-on-surface-variant font-label-lg uppercase tracking-wider">Pending Nurse</span>
                  <span className="material-symbols-outlined text-orange-500">medical_information</span>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="font-headline-lg text-headline-lg text-orange-500">7</span>
                  <span className="bg-orange-100 text-orange-700 px-2 py-0.5 rounded text-[10px] font-bold">WARNING</span>
                </div>
              </div>
              <div className="bg-[#EAF4FB] p-6 rounded-xl flex flex-col justify-between h-32 transition-transform hover:scale-[1.02] cursor-default">
                <div className="flex justify-between items-start">
                  <span className="text-on-surface-variant font-label-lg uppercase tracking-wider">Pending Doctor</span>
                  <span className="material-symbols-outlined text-error">clinical_notes</span>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="font-headline-lg text-headline-lg text-error">12</span>
                  <span className="bg-red-100 text-red-700 px-2 py-0.5 rounded text-[10px] font-bold">URGENT</span>
                </div>
              </div>
            </section>

            {/* Header & Filter */}
            <section className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <h1 className="font-headline-lg text-headline-lg text-primary">Quarantine Zone A</h1>
              <div className="flex flex-wrap gap-2 bg-surface-container p-1 rounded-full border border-outline-variant">
                {['All', 'Fever', 'Fever-Free', 'Eligible for Discharge'].map(filter => (
                  <button
                    key={filter}
                    className={`px-4 py-1.5 rounded-full font-label-lg text-label-lg transition-all ${activeFilter === filter ? 'bg-primary text-on-primary' : 'text-on-surface-variant hover:bg-surface-variant'}`}
                    onClick={() => setActiveFilter(filter)}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </section>

            {/* Patient Grid */}
            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-gutter pb-20">
              {filteredPatients.map(patient => (
                <div key={patient.id} className={`bg-[#EAF4FB] p-6 rounded-lg ${patient.isFever ? 'border-l-4 border-error' : patient.discharge ? 'border-l-4 border-on-tertiary-container' : ''} shadow-sm hover:shadow-md transition-all flex flex-col gap-4`}>
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-headline-sm text-headline-sm text-primary">{patient.name}</h3>
                      <p className="text-on-surface-variant font-label-sm">{patient.code} • Room {patient.room}</p>
                    </div>
                    {patient.discharge && (
                      <div className="bg-tertiary-container text-tertiary-fixed px-2 py-1 rounded-md text-[10px] font-bold">READY FOR DISCHARGE</div>
                    )}
                    {patient.isFever && (
                      <div className="bg-error-container text-error px-2 py-1 rounded-md text-[10px] font-bold">FEVER DETECTED</div>
                    )}
                  </div>
                  <div className="flex justify-between items-end border-t border-blue-200/50 pt-4">
                    <div className="space-y-1">
                      <span className={`${patient.isFever ? 'text-error' : 'text-on-tertiary-container'} font-headline-md text-headline-md`}>{patient.temp}°C</span>
                      <p className="font-label-sm text-on-surface-variant">Day {patient.streak} of 3 fever-free</p>
                    </div>
                    <div className="flex gap-2">
                      <span className={`material-symbols-outlined ${patient.isFever ? 'text-orange-500' : 'text-on-tertiary-container'}`} style={!patient.isFever ? { fontVariationSettings: "'FILL' 1" } : {}}>
                        {patient.isFever ? 'pending' : 'check_circle'}
                      </span>
                      <span className={`material-symbols-outlined ${patient.isFever ? 'text-error' : 'text-on-tertiary-container'}`} style={{ fontVariationSettings: "'FILL' 1" }}>
                        {patient.isFever ? 'warning' : 'verified_user'}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
              {/* Empty beds */}
              <div className="bg-[#EAF4FB]/50 border-2 border-dashed border-outline-variant p-6 rounded-lg flex items-center justify-center min-h-[160px]">
                <div className="text-center">
                  <span className="material-symbols-outlined text-outline text-3xl mb-2">bed</span>
                  <p className="font-label-sm text-outline">Empty Bed 109A</p>
                </div>
              </div>
              <div className="bg-[#EAF4FB]/50 border-2 border-dashed border-outline-variant p-6 rounded-lg flex items-center justify-center min-h-[160px]">
                <div className="text-center">
                  <span className="material-symbols-outlined text-outline text-3xl mb-2">bed</span>
                  <p className="font-label-sm text-outline">Empty Bed 109B</p>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>

      {/* Mobile FAB */}
      <button className="md:hidden fixed bottom-6 right-4 bg-primary text-on-primary w-14 h-14 rounded-full shadow-lg flex items-center justify-center z-50">
        <span className="material-symbols-outlined">add</span>
      </button>
    </div>
  );
}
