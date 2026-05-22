import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import BrandLogo from '../components/BrandLogo';
import TopNavbar from '../components/TopNavbar';
import { getActiveRole } from '../utils/roleNavigation';
import Sidebar from '../components/Sidebar';


export default function IsolationUnitB() {
  const role = getActiveRole();
  const dashboardPath = role === 'nurse' ? '/nurse' : role === 'doctor' ? '/doctor' : '/admin';

  const [pods, setPods] = useState([
    {
      id: 101, name: 'Liam Rodriguez', caseId: 'VR-9921', status: 'Critical',
      temp: 39.8, sparkPath: 'M0,35 L20,32 L40,30 L60,34 L80,10 L100,5', sparkColor: '#ba1a1a',
      nurse: 'Nurse Sarah J.', nurseCheckin: '15m ago', doctor: 'Dr. Thorne', doctorVisit: '2h ago',
      notes: 'Administered Antiviral-6X at 0400. Patient showing increased respiratory distress.',
      statusClass: 'bg-error-container text-on-error-container'
    },
    {
      id: 102, name: 'Sofia Rossi', caseId: 'VR-9925', status: 'Stable',
      temp: 38.9, sparkPath: 'M0,30 L20,32 L40,31 L60,30 L80,29 L100,28', sparkColor: '#566066',
      nurse: 'Nurse Sarah J.', nurseCheckin: '45m ago', doctor: 'Dr. Thorne', doctorVisit: '3h ago',
      notes: 'Fluids increased. Monitoring heart rate for potential arrhythmia. Stable for last 4 hours.',
      statusClass: 'bg-[#ffdad6] text-[#93000a]'
    },
    {
      id: 103, name: 'Takumi Sato', caseId: 'VR-9928', status: 'Improving',
      temp: 37.2, sparkPath: 'M0,5 L20,10 L40,25 L60,30 L80,35 L100,38', sparkColor: '#00a656',
      nurse: 'Nurse Sarah J.', nurseCheckin: '1h ago', doctor: 'Dr. Thorne', doctorVisit: '5h ago',
      notes: 'Fever broken. Patient responsive. Potential transition to Quarantine Zone A in 24h.',
      statusClass: 'bg-tertiary-fixed text-on-tertiary-fixed'
    }
  ]);

  // Simulate live temp updates
  useEffect(() => {
    const interval = setInterval(() => {
      setPods(prev => prev.map(pod => ({
        ...pod,
        temp: parseFloat((pod.temp + (Math.random() - 0.5) * 0.2).toFixed(1))
      })));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex h-screen w-full bg-background text-on-surface font-body-md overflow-hidden">
      {/* Side Navigation */}
      <Sidebar className="hidden md:flex w-64 h-full" />

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-full overflow-hidden">
        {/* Top App Bar */}
        <TopNavbar
          rightContent={
            <>
              <button className="bg-error text-on-error px-4 py-2 rounded-full font-label-lg hover:opacity-90 active:scale-95 transition-all flex items-center gap-2 shadow-sm">
                <span className="material-symbols-outlined text-sm">warning</span> Emergency Alert
              </button>
              <div className="h-8 w-px bg-outline-variant mx-2"></div>
              <span className="material-symbols-outlined text-on-surface-variant cursor-pointer hover:text-primary">notifications</span>
              <span className="material-symbols-outlined text-on-surface-variant cursor-pointer hover:text-primary">settings</span>
            </>
          }
        />

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-margin-desktop space-y-gutter" style={{ background: 'radial-gradient(circle at 50% 0%, rgba(186, 26, 26, 0.08) 0%, rgba(249, 249, 249, 0) 70%)' }}>
          {/* Page Title */}
          <div className="flex flex-col gap-1">
            <h2 className="font-headline-md text-headline-md text-primary">Level 4 Containment Zone</h2>
            <p className="text-on-surface-variant font-body-md flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-error animate-pulse"></span>
              CRITICAL STATUS: Active Pathogen Monitoring
            </p>
          </div>

          {/* Top Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
            <div className="bg-surface-container-low p-6 rounded-lg shadow-sm">
              <p className="text-on-surface-variant font-label-lg mb-2">Occupied Pods</p>
              <p className="font-headline-lg text-headline-lg text-error">3/3</p>
              <p className="text-xs text-error font-bold mt-1">FULL CAPACITY</p>
            </div>
            <div className="bg-surface-container-low p-6 rounded-lg shadow-sm">
              <p className="text-on-surface-variant font-label-lg mb-2">Avg Temperature</p>
              <p className="font-headline-lg text-headline-lg text-error">{(pods.reduce((s, p) => s + p.temp, 0) / pods.length).toFixed(1)}°C</p>
              <p className="text-xs text-error font-bold mt-1">CRITICAL THRESHOLD</p>
            </div>
            <div className="bg-surface-container-low p-6 rounded-lg shadow-sm">
              <p className="text-on-surface-variant font-label-lg mb-2">Patient Monitoring</p>
              <div className="flex items-center gap-3">
                <p className="font-headline-lg text-headline-lg text-primary">Yes</p>
                <span className="material-symbols-outlined text-on-tertiary-container" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
              </div>
              <p className="text-xs text-on-tertiary-container font-bold mt-1">ALL SENSORS ACTIVE</p>
            </div>
            <div className="bg-surface-container-low p-6 rounded-lg shadow-sm">
              <p className="text-on-surface-variant font-label-lg mb-2">Mortality Risk Flag</p>
              <div className="flex items-center gap-2">
                <p className="font-headline-lg text-headline-lg text-error">2 Patients</p>
                <span className="material-symbols-outlined text-error" style={{ fontVariationSettings: "'FILL' 1" }}>priority_high</span>
              </div>
              <p className="text-xs text-error font-bold mt-1">URGENT REVIEW REQUIRED</p>
            </div>
          </div>

          {/* Isolation Pod Cards */}
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-gutter">
            {pods.map(pod => (
              <div key={pod.id} className="bg-[#EAF4FB] p-6 rounded-lg flex flex-col gap-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-headline-sm text-headline-sm text-primary mb-1">Pod {pod.id}</h3>
                    <p className="font-label-lg text-label-lg text-on-surface">{pod.name}</p>
                    <p className="text-xs text-on-secondary-container">CASE-ID: {pod.caseId}</p>
                  </div>
                  <span className={`${pod.statusClass} px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider`}>{pod.status}</span>
                </div>
                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-xs text-on-surface-variant font-bold uppercase">Current Temp</p>
                    <p className={`font-headline-lg text-headline-lg leading-none ${pod.temp >= 38.0 ? 'text-error' : 'text-on-tertiary-container'}`}>{pod.temp.toFixed(1)}°C</p>
                  </div>
                  <div className="w-24 h-12">
                    <svg className="w-full h-full" viewBox="0 0 100 40">
                      <path d={pod.sparkPath} fill="none" stroke={pod.sparkColor} strokeWidth="3" />
                    </svg>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 border-t border-outline-variant pt-4">
                  <div>
                    <p className="text-[10px] text-on-surface-variant uppercase font-bold">Assigned Nurse</p>
                    <p className="text-label-lg text-primary">{pod.nurse}</p>
                    <p className="text-[10px] text-on-secondary-container">Check-in: {pod.nurseCheckin}</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-on-surface-variant uppercase font-bold">Assigned Doctor</p>
                    <p className="text-label-lg text-primary">{pod.doctor}</p>
                    <p className="text-[10px] text-on-secondary-container">Visit: {pod.doctorVisit}</p>
                  </div>
                </div>
                <div>
                  <label className="text-[10px] text-on-surface-variant uppercase font-bold mb-1 block">Treatment/Medication Notes</label>
                  <div className="bg-white/50 p-3 rounded border border-outline-variant/30 text-sm text-on-surface italic">
                    {pod.notes}
                  </div>
                </div>
                <div className="flex gap-2 mt-auto">
                  <button className="flex-1 bg-error text-on-error py-3 rounded-full font-label-lg hover:opacity-90 transition-all">Escalate</button>
                  <button className="flex-1 bg-primary text-on-primary py-3 rounded-full font-label-lg hover:opacity-90 transition-all">Full Record</button>
                </div>
              </div>
            ))}
          </div>

          {/* Critical Alerts Log */}
          <div className="bg-surface-container-low rounded-lg p-6 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-headline-sm text-headline-sm text-primary flex items-center gap-2">
                <span className="material-symbols-outlined text-error">history</span> Critical Alerts Log
              </h3>
              <button className="text-primary font-label-lg hover:underline transition-all">Clear Resolved</button>
            </div>
            <div className="space-y-0 divide-y divide-outline-variant">
              <div className="py-4 flex items-start gap-4">
                <span className="bg-error/10 text-error p-2 rounded-full material-symbols-outlined">thermostat</span>
                <div className="flex-1">
                  <p className="font-label-lg text-primary">39.8°C recorded in Pod 101 — above critical threshold</p>
                  <p className="text-xs text-on-surface-variant">04:12 AM - Sensor ID: TMP-101B</p>
                </div>
                <button className="text-on-surface-variant hover:text-primary material-symbols-outlined">more_vert</button>
              </div>
              <div className="py-4 flex items-start gap-4">
                <span className="bg-error/10 text-error p-2 rounded-full material-symbols-outlined">medical_information</span>
                <div className="flex-1">
                  <p className="font-label-lg text-primary">Doctor visit overdue by 3 hours for Pod 103</p>
                  <p className="text-xs text-on-surface-variant">02:45 AM - System Protocol Alert</p>
                </div>
                <button className="text-on-surface-variant hover:text-primary material-symbols-outlined">more_vert</button>
              </div>
              <div className="py-4 flex items-start gap-4 opacity-60">
                <span className="bg-outline-variant/20 text-on-surface-variant p-2 rounded-full material-symbols-outlined">person_pin</span>
                <div className="flex-1">
                  <p className="font-label-lg text-primary">Pod 102 Filter Change Required</p>
                  <p className="text-xs text-on-surface-variant">01:30 AM - Maintenance Schedule</p>
                </div>
                <button className="text-on-surface-variant hover:text-primary material-symbols-outlined">more_vert</button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Mobile Bottom Nav */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-surface shadow-[0_-4px_12px_rgba(13,43,69,0.08)] flex justify-around items-center py-3 px-4 z-50">
        <Link className="flex flex-col items-center gap-1 text-on-secondary-container" to={dashboardPath}>
          <span className="material-symbols-outlined">dashboard</span>
          <span className="text-[10px] font-label-lg">Overview</span>
        </Link>
        <Link className="flex flex-col items-center gap-1 text-on-secondary-container" to="/quarantine-zone-a">
          <span className="material-symbols-outlined">security</span>
          <span className="text-[10px] font-label-lg">Zone A</span>
        </Link>
        <Link className="flex flex-col items-center gap-1 text-primary" to="/isolation-unit-b">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>emergency</span>
          <span className="text-[10px] font-label-lg">Unit B</span>
        </Link>
        <Link className="flex flex-col items-center gap-1 text-on-secondary-container" to="/triage">
          <span className="material-symbols-outlined">medical_services</span>
          <span className="text-[10px] font-label-lg">Triage</span>
        </Link>
        <Link className="flex flex-col items-center gap-1 text-on-secondary-container" to="/reports">
          <span className="material-symbols-outlined">analytics</span>
          <span className="text-[10px] font-label-lg">Reports</span>
        </Link>
      </nav>
    </div>
  );
}
