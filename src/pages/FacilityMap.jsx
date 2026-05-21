import React from 'react';
import { Link } from 'react-router-dom';
import facilityMap from '../assets/facility-map.png';

export default function FacilityMap() {
  return (
    <>
      <header className="bg-surface border-b border-outline-variant sticky top-0 z-50">
        <div className="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop py-4 max-w-container-max mx-auto">
          <div className="flex items-center gap-8">
            <span className="font-headline-lg text-headline-lg font-bold text-primary">VitalWatch</span>
            <nav className="hidden md:flex gap-6 items-center">
              <Link className="text-on-surface-variant pb-1 hover:text-primary transition-colors duration-200 font-label-lg text-label-lg" to="/admin">Admin</Link>
              <Link className="text-on-surface-variant pb-1 hover:text-primary transition-colors duration-200 font-label-lg text-label-lg" to="/doctor">Doctor</Link>
              <Link className="text-on-surface-variant pb-1 hover:text-primary transition-colors duration-200 font-label-lg text-label-lg" to="/nurse">Nurse</Link>
              <Link className="text-primary font-bold border-b-2 border-primary pb-1 font-label-lg text-label-lg" to="/facility-map">Facility Map</Link>
              <Link className="text-on-surface-variant pb-1 hover:text-primary transition-colors duration-200 font-label-lg text-label-lg" to="/logistics">Logistics</Link>
            </nav>
          </div>
          <button className="bg-error text-on-error px-4 py-2 rounded-full font-label-lg text-label-lg hover:opacity-90 transition-all">
            Emergency Alert
          </button>
        </div>
      </header>

      <main className="max-w-container-max mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop py-8 space-y-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h1 className="font-headline-lg text-headline-lg text-primary">Facility Map</h1>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Live quarantine facility layout for ward, isolation, triage, and logistics coordination.
            </p>
          </div>
          <div className="flex gap-3">
            <span className="bg-error-container text-on-error-container px-4 py-2 rounded-full font-label-lg text-label-lg">Red Zone Active</span>
            <span className="bg-tertiary-fixed text-on-tertiary-fixed px-4 py-2 rounded-full font-label-lg text-label-lg">12 Beds Open</span>
          </div>
        </div>

        <section className="bg-surface-container-lowest border border-outline-variant rounded-xl shadow-sm overflow-hidden">
          <div className="p-4 md:p-6 border-b border-outline-variant flex flex-col md:flex-row md:items-center justify-between gap-3">
            <div>
              <h2 className="font-headline-sm text-headline-sm text-primary">Quarantine Management Layout</h2>
              <p className="font-label-lg text-label-lg text-on-surface-variant">Zone 4 operational view</p>
            </div>
            <div className="flex gap-2 text-label-sm">
              <span className="px-3 py-1 rounded-full bg-red-100 text-red-800 font-bold uppercase">High Risk</span>
              <span className="px-3 py-1 rounded-full bg-yellow-100 text-yellow-800 font-bold uppercase">Observation</span>
              <span className="px-3 py-1 rounded-full bg-green-100 text-green-800 font-bold uppercase">Recovery</span>
            </div>
          </div>
          <div className="bg-[#EAF4FB] p-3 md:p-6">
            <img
              alt="Facility map showing quarantine zones, isolation units, triage, and logistics areas"
              className="w-full rounded-lg border border-outline-variant shadow-sm"
              src={facilityMap}
            />
          </div>
        </section>
      </main>
    </>
  );
}
