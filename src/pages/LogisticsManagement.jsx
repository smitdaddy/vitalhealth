import React from 'react';
import { Link } from 'react-router-dom';
import facilityMap from '../assets/facility-map.png';

export default function LogisticsManagement() {
  return (
    <>
      {/* TopAppBar Shell */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-surface border-b border-surface-container-highest h-16 flex items-center">
        <div className="flex justify-between items-center w-full px-margin-desktop h-16 max-w-container-max mx-auto">
          <div className="flex items-center gap-8">
            <span className="font-headline-md text-headline-md font-bold text-primary">VitalWatch</span>
            <nav className="hidden md:flex gap-6 items-center h-16">
              <Link className="text-secondary hover:text-primary transition-colors duration-200 font-label-lg py-2" to="/admin">Dashboard</Link>
              <Link className="text-secondary hover:text-primary transition-colors duration-200 font-label-lg py-2" to="/patient">Patient List</Link>
              <Link className="text-secondary hover:text-primary transition-colors duration-200 font-label-lg py-2" to="/facility-map">Facility Map</Link>
              <Link className="text-primary border-b-2 border-primary font-bold pb-1 font-label-lg" to="/logistics">Logistics</Link>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative hidden sm:block">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline">search</span>
              <input className="bg-surface-container-low border border-outline-variant rounded-full pl-10 pr-4 py-1.5 text-label-lg w-64 focus:outline-none focus:ring-2 focus:ring-primary/20" placeholder="Search facilities..." type="text" />
            </div>
            <button className="material-symbols-outlined text-secondary hover:bg-surface-container-low p-2 rounded-full transition-colors">notifications</button>
            <button className="material-symbols-outlined text-secondary hover:bg-surface-container-low p-2 rounded-full transition-colors">account_circle</button>
          </div>
        </div>
      </header>

      {/* SideNavBar Shell */}
      <aside className="hidden lg:flex flex-col fixed left-0 top-0 h-full w-64 bg-surface-container-low py-base gap-base z-30 pt-20 shadow-sm">
        <div className="px-6 py-4 mb-4">
          <h2 className="text-primary font-headline-sm">Medical Admin</h2>
          <p className="text-secondary font-label-sm">Facility Lead</p>
        </div>
        <nav className="flex-1 space-y-1">
          <Link className="text-secondary px-4 py-3 mx-2 flex items-center gap-3 hover:bg-surface-container-high rounded-full transition-all" to="/admin">
            <span className="material-symbols-outlined">dashboard</span>
            <span className="font-label-lg">Dashboard</span>
          </Link>
          <Link className="text-secondary px-4 py-3 mx-2 flex items-center gap-3 hover:bg-surface-container-high rounded-full transition-all" to="/patient">
            <span className="material-symbols-outlined">person_search</span>
            <span className="font-label-lg">Patients</span>
          </Link>
          <Link className="text-secondary px-4 py-3 mx-2 flex items-center gap-3 hover:bg-surface-container-high rounded-full transition-all" to="/facility-map">
            <span className="material-symbols-outlined">map</span>
            <span className="font-label-lg">Mapping</span>
          </Link>
          <Link className="bg-primary-container text-on-primary-container rounded-full mx-2 px-4 py-3 flex items-center gap-3 shadow-sm" to="/logistics">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>inventory_2</span>
            <span className="font-label-lg">Logistics</span>
          </Link>
        </nav>
        <div className="px-4 py-4 mt-auto">
          <button className="w-full bg-error text-on-error py-3 rounded-full font-label-lg flex items-center justify-center gap-2 active:scale-95 transition-transform">
            <span className="material-symbols-outlined">report_problem</span>
            Emergency Alert
          </button>
        </div>
        <div className="border-t border-outline-variant pt-4 pb-8">
          <Link className="text-secondary px-4 py-3 mx-2 flex items-center gap-3 hover:bg-surface-container-high rounded-full transition-all" to="/">
            <span className="material-symbols-outlined">settings</span>
            <span className="font-label-lg">Settings</span>
          </Link>
          <Link className="text-secondary px-4 py-3 mx-2 flex items-center gap-3 hover:bg-surface-container-high rounded-full transition-all" to="/">
            <span className="material-symbols-outlined">help</span>
            <span className="font-label-lg">Support</span>
          </Link>
        </div>
      </aside>

      {/* Main Content Canvas */}
      <main className="lg:ml-64 pt-24 pb-24 lg:pb-12 px-margin-mobile md:px-margin-tablet lg:px-margin-desktop max-w-container-max mx-auto">
        {/* Header Section */}
        <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h1 className="font-headline-lg text-headline-lg text-primary mb-1">Logistics &amp; Supply Chain</h1>
            <p className="text-secondary font-body-md">Facility-wide inventory control and resource management.</p>
          </div>
          <div className="flex gap-3">
            <button className="bg-primary text-on-primary px-6 py-2.5 rounded-full font-label-lg flex items-center gap-2 shadow-sm hover:opacity-90 transition-opacity">
              <span className="material-symbols-outlined">add</span> New Supply Request
            </button>
          </div>
        </div>

        {/* 1. Inventory Overview (Bento Style Cards) */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter mb-10">
          {/* PPE */}
          <div className="clinical-panel flex flex-col justify-between" style={{ backgroundColor: '#EAF4FB', borderRadius: '8px', padding: '24px' }}>
            <div>
              <div className="flex justify-between items-start mb-4">
                <span className="material-symbols-outlined text-primary text-3xl">medical_mask</span>
                <span className="px-3 py-1 rounded-full font-bold text-[10px] uppercase tracking-wider bg-green-100 text-green-800">Healthy</span>
              </div>
              <p className="text-secondary font-label-lg mb-1">PPE Kits</p>
              <h3 className="text-headline-md text-primary font-bold">1,240 <span className="text-label-lg font-normal">units</span></h3>
            </div>
            <div className="mt-6">
              <div className="w-full bg-surface-container-highest h-2 rounded-full overflow-hidden">
                <div className="bg-on-tertiary-container h-full w-[75%] rounded-full"></div>
              </div>
              <p className="text-label-sm text-secondary mt-2">75% Capacity</p>
            </div>
          </div>

          {/* Antivirals */}
          <div className="clinical-panel flex flex-col justify-between" style={{ backgroundColor: '#EAF4FB', borderRadius: '8px', padding: '24px' }}>
            <div>
              <div className="flex justify-between items-start mb-4">
                <span className="material-symbols-outlined text-error text-3xl">vaccines</span>
                <span className="px-3 py-1 rounded-full font-bold text-[10px] uppercase tracking-wider bg-red-100 text-red-800">Low Stock</span>
              </div>
              <p className="text-secondary font-label-lg mb-1">Antiviral Meds</p>
              <h3 className="text-headline-md text-primary font-bold">450 <span className="text-label-lg font-normal">units</span></h3>
            </div>
            <div className="mt-6">
              <div className="w-full bg-surface-container-highest h-2 rounded-full overflow-hidden">
                <div className="bg-error h-full w-[20%] rounded-full"></div>
              </div>
              <p className="text-label-sm text-error font-bold mt-2">Critical: 20%</p>
            </div>
          </div>

          {/* Oxygen */}
          <div className="clinical-panel flex flex-col justify-between" style={{ backgroundColor: '#EAF4FB', borderRadius: '8px', padding: '24px' }}>
            <div>
              <div className="flex justify-between items-start mb-4">
                <span className="material-symbols-outlined text-primary text-3xl">air</span>
                <span className="px-3 py-1 rounded-full font-bold text-[10px] uppercase tracking-wider bg-blue-100 text-blue-800">Normal</span>
              </div>
              <p className="text-secondary font-label-lg mb-1">Oxygen Supply</p>
              <h3 className="text-headline-md text-primary font-bold">88% <span className="text-label-lg font-normal">Pressure</span></h3>
            </div>
            <div className="mt-6">
              <div className="w-full bg-surface-container-highest h-2 rounded-full overflow-hidden">
                <div className="bg-primary h-full w-[88%] rounded-full"></div>
              </div>
              <p className="text-label-sm text-secondary mt-2">Stabilized Flow</p>
            </div>
          </div>

          {/* Test Kits */}
          <div className="clinical-panel flex flex-col justify-between" style={{ backgroundColor: '#EAF4FB', borderRadius: '8px', padding: '24px' }}>
            <div>
              <div className="flex justify-between items-start mb-4">
                <span className="material-symbols-outlined text-primary text-3xl">biotech</span>
                <span className="px-3 py-1 rounded-full font-bold text-[10px] uppercase tracking-wider bg-green-100 text-green-800">High</span>
              </div>
              <p className="text-secondary font-label-lg mb-1">Test Kits</p>
              <h3 className="text-headline-md text-primary font-bold">2,100 <span className="text-label-lg font-normal">units</span></h3>
            </div>
            <div className="mt-6">
              <div className="w-full bg-surface-container-highest h-2 rounded-full overflow-hidden">
                <div className="bg-on-tertiary-container h-full w-[95%] rounded-full"></div>
              </div>
              <p className="text-label-sm text-secondary mt-2">Optimal Availability</p>
            </div>
          </div>
        </section>

        {/* 2. Asymmetric Layout for Map and Table */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-gutter items-start">
          {/* Facility Capacity Section */}
          <section className="xl:col-span-5 bg-surface-container-lowest rounded-xl p-6 border border-outline-variant shadow-sm h-full">
            <h3 className="text-headline-sm text-primary mb-6 flex items-center gap-2">
              <span className="material-symbols-outlined">apartment</span> Ward Occupancy
            </h3>
            <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden border border-outline-variant mb-6 bg-surface-container">
              <img alt="Facility Map" className="w-full h-full object-contain" src={facilityMap} />
              <div className="absolute inset-0 bg-primary/5 pointer-events-none"></div>
            </div>
            <div className="space-y-6">
              {/* High Risk */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="font-label-lg text-primary">High Risk Ward (Red Zone)</span>
                  <span className="font-label-lg text-error font-bold">18/20 Beds</span>
                </div>
                <div className="w-full bg-surface-container h-3 rounded-full overflow-hidden">
                  <div className="bg-error h-full w-[90%] rounded-full"></div>
                </div>
                <p className="text-label-sm text-error mt-1 text-right italic">Critical Capacity Alert</p>
              </div>
              {/* Medium Risk */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="font-label-lg text-primary">Medium Risk Ward (Yellow Zone)</span>
                  <span className="font-label-lg text-primary font-bold">22/30 Beds</span>
                </div>
                <div className="w-full bg-surface-container h-3 rounded-full overflow-hidden">
                  <div className="bg-yellow-500 h-full w-[73%] rounded-full"></div>
                </div>
                <p className="text-label-sm text-secondary mt-1 text-right">Standard Flow</p>
              </div>
              {/* Recovery */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="font-label-lg text-primary">Recovery Ward (Green Zone)</span>
                  <span className="font-label-lg text-primary font-bold">12/24 Beds</span>
                </div>
                <div className="w-full bg-surface-container h-3 rounded-full overflow-hidden">
                  <div className="bg-on-tertiary-container h-full w-[50%] rounded-full"></div>
                </div>
                <p className="text-label-sm text-secondary mt-1 text-right">Available Beds: 12</p>
              </div>
            </div>
          </section>

          {/* Supply Requests Table */}
          <section className="xl:col-span-7 bg-surface-container-lowest rounded-xl border border-outline-variant shadow-sm overflow-hidden h-full">
            <div className="p-6 border-b border-outline-variant flex justify-between items-center">
              <h3 className="text-headline-sm text-primary flex items-center gap-2">
                <span className="material-symbols-outlined">list_alt</span> Active Supply Requests
              </h3>
              <button className="text-primary font-label-lg flex items-center gap-1 hover:underline">
                View All <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-[#EAF4FB] text-secondary font-label-sm border-b border-outline-variant">
                    <th className="px-6 py-4 font-bold uppercase tracking-wider">Request ID</th>
                    <th className="px-6 py-4 font-bold uppercase tracking-wider">Item</th>
                    <th className="px-6 py-4 font-bold uppercase tracking-wider text-center">Qty</th>
                    <th className="px-6 py-4 font-bold uppercase tracking-wider">Urgency</th>
                    <th className="px-6 py-4 font-bold uppercase tracking-wider">Requested By</th>
                    <th className="px-6 py-4 font-bold uppercase tracking-wider">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-outline-variant/30">
                  <tr className="hover:bg-surface-container-low transition-colors">
                    <td className="px-6 py-4 font-label-lg text-primary">#LR-402</td>
                    <td className="px-6 py-4 font-body-md">N95 Respiratory Masks</td>
                    <td className="px-6 py-4 text-center font-bold">500</td>
                    <td className="px-6 py-4">
                      <span className="px-3 py-1 rounded-full font-bold text-[9px] uppercase tracking-wider bg-red-600 text-white">Critical</span>
                    </td>
                    <td className="px-6 py-4 font-body-md text-secondary">Nurse Sarah J.</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2 text-yellow-600 font-bold font-label-sm">
                        <span className="w-2 h-2 rounded-full bg-yellow-600 animate-pulse"></span> Pending
                      </div>
                    </td>
                  </tr>
                  <tr className="hover:bg-surface-container-low transition-colors">
                    <td className="px-6 py-4 font-label-lg text-primary">#LR-398</td>
                    <td className="px-6 py-4 font-body-md">Saline IV Bags (1L)</td>
                    <td className="px-6 py-4 text-center font-bold">200</td>
                    <td className="px-6 py-4">
                      <span className="px-3 py-1 rounded-full font-bold text-[10px] uppercase tracking-wider bg-blue-100 text-blue-700">Normal</span>
                    </td>
                    <td className="px-6 py-4 font-body-md text-secondary">Dr. Aris V.</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2 text-green-700 font-bold font-label-sm">
                        <span className="w-2 h-2 rounded-full bg-green-700"></span> Approved
                      </div>
                    </td>
                  </tr>
                  <tr className="hover:bg-surface-container-low transition-colors">
                    <td className="px-6 py-4 font-label-lg text-primary">#LR-395</td>
                    <td className="px-6 py-4 font-body-md">Disposable Gowns (XL)</td>
                    <td className="px-6 py-4 text-center font-bold">1,000</td>
                    <td className="px-6 py-4">
                      <span className="px-3 py-1 rounded-full font-bold text-[10px] uppercase tracking-wider bg-blue-100 text-blue-700">Normal</span>
                    </td>
                    <td className="px-6 py-4 font-body-md text-secondary">Head Nurse Kim</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2 text-green-700 font-bold font-label-sm">
                        <span className="w-2 h-2 rounded-full bg-green-700"></span> Approved
                      </div>
                    </td>
                  </tr>
                  <tr className="hover:bg-surface-container-low transition-colors">
                    <td className="px-6 py-4 font-label-lg text-primary">#LR-392</td>
                    <td className="px-6 py-4 font-body-md">Biohazard Liners</td>
                    <td className="px-6 py-4 text-center font-bold">300</td>
                    <td className="px-6 py-4">
                      <span className="px-3 py-1 rounded-full font-bold text-[9px] uppercase tracking-wider bg-red-600 text-white">Critical</span>
                    </td>
                    <td className="px-6 py-4 font-body-md text-secondary">Sanitation Lead</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2 text-yellow-600 font-bold font-label-sm">
                        <span className="w-2 h-2 rounded-full bg-yellow-600 animate-pulse"></span> Pending
                      </div>
                    </td>
                  </tr>
                  <tr className="hover:bg-surface-container-low transition-colors">
                    <td className="px-6 py-4 font-label-lg text-primary">#LR-389</td>
                    <td className="px-6 py-4 font-body-md">PCR Reagent Kits</td>
                    <td className="px-6 py-4 text-center font-bold">50</td>
                    <td className="px-6 py-4">
                      <span className="px-3 py-1 rounded-full font-bold text-[10px] uppercase tracking-wider bg-blue-100 text-blue-700">Normal</span>
                    </td>
                    <td className="px-6 py-4 font-body-md text-secondary">Lab Tech Mark</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2 text-green-700 font-bold font-label-sm">
                        <span className="w-2 h-2 rounded-full bg-green-700"></span> Approved
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="p-6 bg-surface border-t border-outline-variant flex justify-between items-center text-label-sm text-secondary">
              <p>Showing 5 of 28 pending requests</p>
              <div className="flex gap-2">
                <button className="p-2 border border-outline-variant rounded-lg hover:bg-surface-container-low transition-all">
                  <span className="material-symbols-outlined text-sm">chevron_left</span>
                </button>
                <button className="p-2 border border-outline-variant rounded-lg hover:bg-surface-container-low transition-all">
                  <span className="material-symbols-outlined text-sm">chevron_right</span>
                </button>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* BottomNavBar Shell (Mobile) */}
      <nav className="fixed bottom-0 left-0 w-full z-50 flex lg:hidden justify-around items-center px-4 py-2 bg-surface border-t border-surface-container-highest shadow-[0_-4px_12px_rgba(13,43,69,0.08)]">
        <Link to="/admin" className="flex flex-col items-center justify-center text-secondary">
          <span className="material-symbols-outlined">dashboard</span>
          <span className="font-label-sm">Dash</span>
        </Link>
        <Link to="/patient" className="flex flex-col items-center justify-center text-secondary">
          <span className="material-symbols-outlined">person</span>
          <span className="font-label-sm">Patients</span>
        </Link>
        <Link to="/facility-map" className="flex flex-col items-center justify-center text-secondary">
          <span className="material-symbols-outlined">map</span>
          <span className="font-label-sm">Map</span>
        </Link>
        <Link to="/logistics" className="flex flex-col items-center justify-center bg-primary-container text-on-primary-container rounded-full px-5 py-1">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>inventory</span>
          <span className="font-label-sm">Logistics</span>
        </Link>
      </nav>
    </>
  );
}
