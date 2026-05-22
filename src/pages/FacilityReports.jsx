import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BrandLogo from '../components/BrandLogo';
import TopNavbar from '../components/TopNavbar';
import { getActiveRole } from '../utils/roleNavigation';
import Sidebar from '../components/Sidebar';


export default function FacilityReports() {
  const role = getActiveRole();
  const dashboardPath = role === 'nurse' ? '/nurse' : role === 'doctor' ? '/doctor' : '/admin';
  const [activeRange, setActiveRange] = useState('Last 30 Days');

  const dischargeData = [
    { name: 'Elena Rodriguez', caseId: 'VW-4921', admitted: 'Oct 12, 2023', discharged: 'Oct 24, 2023', days: 12, outcome: 'Recovered', outcomeClass: 'bg-on-tertiary-container/10 text-on-tertiary-container', doctor: 'Dr. Aris Thorne' },
    { name: 'Samuel Vance', caseId: 'VW-5012', admitted: 'Oct 15, 2023', discharged: 'Oct 23, 2023', days: 8, outcome: 'Deceased', outcomeClass: 'bg-error text-white', doctor: 'Dr. Aris Thorne', isDeceased: true },
    { name: 'Jared Kim', caseId: 'VW-4883', admitted: 'Oct 10, 2023', discharged: 'Oct 22, 2023', days: 12, outcome: 'Recovered', outcomeClass: 'bg-on-tertiary-container/10 text-on-tertiary-container', doctor: 'Dr. Sarah L.' },
    { name: 'Miriam Patel', caseId: 'VW-5104', admitted: 'Oct 18, 2023', discharged: 'Oct 21, 2023', days: 3, outcome: 'Recovered', outcomeClass: 'bg-on-tertiary-container/10 text-on-tertiary-container', doctor: 'Dr. Kevin M.' },
    { name: 'Thomas Wright', caseId: 'VW-4721', admitted: 'Oct 05, 2023', discharged: 'Oct 21, 2023', days: 16, outcome: 'Recovered', outcomeClass: 'bg-on-tertiary-container/10 text-on-tertiary-container', doctor: 'Dr. Aris Thorne' },
  ];

  return (
    <div className="flex min-h-screen bg-surface font-body-md">
      {/* Sidebar */}
      <Sidebar className="hidden lg:flex w-64 h-screen sticky top-0" />

      {/* Main Content */}
      <div className="flex-grow flex flex-col">
        {/* Top Nav */}
        <TopNavbar
          rightContent={
            <>
              <button className="material-symbols-outlined text-on-surface-variant hover:text-primary">notifications</button>
              <button className="material-symbols-outlined text-on-surface-variant hover:text-primary">settings</button>
              <button className="bg-error text-white px-4 py-2 rounded-full font-label-lg text-label-lg flex items-center gap-2 hover:bg-red-700 transition-all">
                <span className="material-symbols-outlined">emergency</span> Emergency Alert
              </button>
            </>
          }
        />

        {/* Page Content */}
        <main className="flex-grow p-margin-desktop max-w-container-max mx-auto w-full">
          {/* Filter Bar */}
          <section className="flex flex-col md:flex-row justify-between items-end md:items-center mb-8 gap-4">
            <div>
              <h2 className="font-headline-md text-headline-md text-primary mb-1">Clinical Reports &amp; Analytics</h2>
              <p className="font-body-md text-on-surface-variant">Zone 4 Comprehensive Facility Audit</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex bg-surface-container p-1 rounded-lg border border-outline-variant">
                {['Today', 'Last 7 Days', 'Last 30 Days', 'Custom'].map(range => (
                  <button
                    key={range}
                    className={`px-4 py-2 text-sm font-label-lg rounded-md transition-all ${activeRange === range ? 'bg-white shadow-sm text-primary' : 'text-on-surface-variant hover:bg-white'}`}
                    onClick={() => setActiveRange(range)}
                  >
                    {range} {range === 'Custom' && <span className="material-symbols-outlined text-sm ml-1 align-middle">calendar_today</span>}
                  </button>
                ))}
              </div>
              <button className="bg-primary-container text-white px-6 py-2 rounded-full font-label-lg flex items-center gap-2 hover:opacity-90 transition-all">
                <span className="material-symbols-outlined">download</span> Export
              </button>
            </div>
          </section>

          {/* Charts Row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-gutter mb-gutter">
            <div className="bg-surface-container-lowest rounded-xl p-6 border border-outline-variant shadow-sm relative overflow-hidden hover:shadow-md transition-all">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="font-headline-sm text-headline-sm text-primary">Daily Admissions vs Discharges</h3>
                  <p className="text-sm text-on-surface-variant">Last 14 days analysis</p>
                </div>
                <div className="flex gap-4">
                  <div className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-primary"></span><span className="text-xs font-label-lg">Admissions</span></div>
                  <div className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-on-tertiary-container"></span><span className="text-xs font-label-lg">Discharges</span></div>
                </div>
              </div>
              <div className="h-64 relative" style={{ backgroundImage: 'radial-gradient(circle, #e2e2e2 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
                <svg className="absolute inset-0 w-full h-full p-4" preserveAspectRatio="none" viewBox="0 0 400 150">
                  <path d="M0,120 L40,110 L80,130 L120,90 L160,100 L200,60 L240,70 L280,50 L320,40 L360,30 L400,20" fill="none" stroke="#00162a" strokeWidth="3" />
                  <path d="M0,130 L40,140 L80,120 L120,110 L160,115 L200,90 L240,100 L280,80 L320,75 L360,50 L400,45" fill="none" stroke="#00a656" strokeWidth="3" />
                </svg>
              </div>
            </div>
            <div className="bg-surface-container-lowest rounded-xl p-6 border border-outline-variant shadow-sm relative overflow-hidden hover:shadow-md transition-all">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="font-headline-sm text-headline-sm text-primary">Mortality Rate Trend</h3>
                  <p className="text-sm text-on-surface-variant">Last 30 days vs critical benchmark</p>
                </div>
                <div className="flex gap-4">
                  <div className="flex items-center gap-2"><span className="w-3 h-1 bg-error block"></span><span className="text-xs font-label-lg">Benchmark (15%)</span></div>
                  <div className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-on-tertiary-container"></span><span className="text-xs font-label-lg">Current</span></div>
                </div>
              </div>
              <div className="h-64 relative" style={{ backgroundImage: 'radial-gradient(circle, #e2e2e2 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
                <div className="absolute top-[40%] left-0 w-full border-t-2 border-dashed border-error opacity-40 z-10"></div>
                <svg className="absolute inset-0 w-full h-full p-4" preserveAspectRatio="none" viewBox="0 0 400 150">
                  <path d="M0,130 L50,125 L100,128 L150,110 L200,105 L250,95 L300,98 L350,90 L400,85" fill="none" stroke="#00a656" strokeWidth="3" />
                </svg>
              </div>
            </div>
          </div>

          {/* Metric Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter mb-gutter">
            <div className="bg-[#EAF4FB] rounded-lg p-6 flex flex-col justify-between">
              <span className="text-on-surface-variant font-label-lg">Total Patients Treated</span>
              <div className="mt-4">
                <span className="text-4xl font-bold text-primary">312</span>
                <span className="text-xs font-label-lg text-primary block mt-1">Cumulative since launch</span>
              </div>
            </div>
            <div className="bg-[#EAF4FB] rounded-lg p-6 flex flex-col justify-between border-l-4 border-on-tertiary-container">
              <span className="text-on-surface-variant font-label-lg">Recovery Rate</span>
              <div className="mt-4">
                <span className="text-4xl font-bold text-on-tertiary-container">95.8%</span>
                <div className="flex items-center gap-1 text-on-tertiary-container font-label-lg text-sm mt-1">
                  <span className="material-symbols-outlined text-sm">trending_up</span> +1.2% from prev. month
                </div>
              </div>
            </div>
            <div className="bg-[#EAF4FB] rounded-lg p-6 flex flex-col justify-between">
              <span className="text-on-surface-variant font-label-lg">Average Length of Stay</span>
              <div className="mt-4">
                <span className="text-4xl font-bold text-primary">11.4</span>
                <span className="text-xs font-label-lg text-primary block mt-1">Days per patient</span>
              </div>
            </div>
          </div>

          {/* Breakdown Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-gutter mb-gutter">
            <div className="bg-surface-container-lowest rounded-xl p-6 border border-outline-variant shadow-sm hover:shadow-md transition-all">
              <h3 className="font-headline-sm text-headline-sm text-primary mb-6">Ward Occupancy Breakdown</h3>
              <div className="space-y-6">
                {[{ name: 'Quarantine Zone A', pct: 88 }, { name: 'Isolation Unit B', pct: 62 }, { name: 'Recovery Ward', pct: 45 }].map(ward => (
                  <div key={ward.name}>
                    <div className="flex justify-between mb-2">
                      <span className="font-label-lg text-sm">{ward.name}</span>
                      <span className="font-label-lg text-sm">{ward.pct}%</span>
                    </div>
                    <div className="w-full bg-secondary-container h-3 rounded-full overflow-hidden">
                      <div className="bg-primary h-full rounded-full" style={{ width: `${ward.pct}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-surface-container-lowest rounded-xl p-6 border border-outline-variant shadow-sm hover:shadow-md transition-all">
              <h3 className="font-headline-sm text-headline-sm text-primary mb-6">Temperature Distribution Today</h3>
              <div className="flex items-end gap-2 h-48 px-4">
                {[{ label: 'Normal', height: '30%', opacity: 'opacity-20' }, { label: 'Low Fever', height: '90%', opacity: '' }, { label: 'High', height: '50%', opacity: 'opacity-60' }].map(bar => (
                  <div key={bar.label} className="flex-1 flex flex-col items-center gap-2">
                    <div className={`w-full bg-primary rounded-t ${bar.opacity}`} style={{ height: bar.height }}></div>
                    <span className="text-[10px] font-label-lg text-on-surface-variant uppercase">{bar.label}</span>
                  </div>
                ))}
                <div className="flex-1 flex flex-col items-center gap-2">
                  <div className="w-full bg-error rounded-t" style={{ height: '15%' }}></div>
                  <span className="text-[10px] font-label-lg text-error uppercase font-bold">Critical</span>
                </div>
              </div>
            </div>
          </div>

          {/* Discharge Summary Table */}
          <div className="bg-surface-container-lowest rounded-xl border border-outline-variant shadow-sm overflow-hidden hover:shadow-md transition-all">
            <div className="px-6 py-4 flex justify-between items-center border-b border-outline-variant">
              <h3 className="font-headline-sm text-headline-sm text-primary">Discharge Summary Table</h3>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-base">search</span>
                <input className="pl-10 pr-4 py-2 border border-outline-variant rounded-full text-sm focus:outline-none focus:ring-1 focus:ring-primary w-64" placeholder="Search Patient..." type="text" />
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-surface-container-low">
                    <th className="px-6 py-4 font-label-lg text-primary text-xs uppercase tracking-wider">Patient Name</th>
                    <th className="px-6 py-4 font-label-lg text-primary text-xs uppercase tracking-wider">Case ID</th>
                    <th className="px-6 py-4 font-label-lg text-primary text-xs uppercase tracking-wider">Admitted</th>
                    <th className="px-6 py-4 font-label-lg text-primary text-xs uppercase tracking-wider">Discharged</th>
                    <th className="px-6 py-4 font-label-lg text-primary text-xs uppercase tracking-wider">Days Stayed</th>
                    <th className="px-6 py-4 font-label-lg text-primary text-xs uppercase tracking-wider">Outcome</th>
                    <th className="px-6 py-4 font-label-lg text-primary text-xs uppercase tracking-wider">Attending Doctor</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-outline-variant">
                  {dischargeData.map(row => (
                    <tr key={row.caseId} className={`${row.isDeceased ? 'bg-error-container/20 hover:bg-error-container/30' : 'hover:bg-surface'} transition-colors`}>
                      <td className={`px-6 py-4 font-body-md text-sm text-on-surface ${row.isDeceased ? 'font-semibold' : ''}`}>{row.name}</td>
                      <td className="px-6 py-4 font-body-md text-sm text-on-surface-variant">{row.caseId}</td>
                      <td className="px-6 py-4 font-body-md text-sm text-on-surface-variant">{row.admitted}</td>
                      <td className="px-6 py-4 font-body-md text-sm text-on-surface-variant">{row.discharged}</td>
                      <td className="px-6 py-4 font-body-md text-sm text-on-surface-variant">{row.days}</td>
                      <td className="px-6 py-4"><span className={`px-3 py-1 ${row.outcomeClass} font-label-lg text-[10px] rounded-full uppercase`}>{row.outcome}</span></td>
                      <td className="px-6 py-4 font-body-md text-sm text-on-surface-variant text-center">{row.doctor}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="px-6 py-4 border-t border-outline-variant flex justify-end">
              <a className="text-primary font-label-lg text-sm flex items-center gap-1 hover:underline" href="#">
                View All Records <span className="material-symbols-outlined text-base">arrow_forward</span>
              </a>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
