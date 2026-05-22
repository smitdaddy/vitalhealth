import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getDashboardPath } from '../utils/roleNavigation';

export default function Sidebar({ className = "", onNewEntry }) {
  const location = useLocation();
  const currentPath = location.pathname;
  const dashboardPath = getDashboardPath();

  const isOverviewActive = currentPath === dashboardPath || currentPath === '/admin' || currentPath === '/nurse' || currentPath === '/doctor' || currentPath === '/';

  const navItems = [
    { name: 'Overview', path: dashboardPath, icon: 'dashboard', isActive: isOverviewActive },
    { name: 'Quarantine Zone A', path: '/quarantine-zone-a', icon: 'security', isActive: currentPath === '/quarantine-zone-a' },
    { name: 'Isolation Unit B', path: '/isolation-unit-b', icon: 'emergency', isActive: currentPath === '/isolation-unit-b' },
    { name: 'Triage', path: '/triage', icon: 'medical_services', isActive: currentPath === '/triage' },
    { name: 'Reports', path: '/reports', icon: 'analytics', isActive: currentPath === '/reports' },
  ];

  return (
    <aside className={`flex flex-col bg-surface-container-low p-base space-y-2 border-r border-outline-variant ${className}`}>
      <div className="px-4 py-6">
        <h3 className="font-headline-sm text-headline-sm font-black text-primary">Dr. Aris Thorne</h3>
        <p className="font-body-md text-body-md text-on-surface-variant">Facility Supervisor - Zone 4</p>
      </div>
      <nav className="flex-grow space-y-1">
        {navItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className={item.isActive 
              ? "bg-secondary-container text-on-secondary-container rounded-lg px-4 py-3 flex items-center gap-3 transition-transform active:scale-95" 
              : "text-on-surface-variant hover:bg-surface-container-high px-4 py-3 flex items-center gap-3 rounded-lg transition-colors"}
          >
            <span className="material-symbols-outlined" style={item.isActive ? { fontVariationSettings: "'FILL' 1" } : {}}>{item.icon}</span>
            <span className="font-label-lg text-label-lg">{item.name}</span>
          </Link>
        ))}
      </nav>
      {onNewEntry ? (
        <button 
          className="mx-4 my-6 bg-primary text-on-primary py-3 rounded-full flex items-center justify-center gap-2 font-label-lg text-label-lg shadow-sm hover:opacity-90 transition-all flex-shrink-0" 
          onClick={onNewEntry}
        >
          <span className="material-symbols-outlined">add</span>
          New Entry
        </button>
      ) : (
        <button 
          className="mx-4 my-6 bg-primary text-on-primary py-3 rounded-full flex items-center justify-center gap-2 font-label-lg text-label-lg shadow-sm hover:opacity-90 transition-all flex-shrink-0" 
        >
          <span className="material-symbols-outlined">add</span>
          New Entry
        </button>
      )}
      <div className="border-t border-outline-variant pt-4 space-y-1 flex-shrink-0">
        <a className="text-on-surface-variant hover:bg-surface-container-high px-4 py-3 flex items-center gap-3 rounded-lg transition-colors" href="#">
          <span className="material-symbols-outlined">help</span>
          <span className="font-label-lg text-label-lg">Help Center</span>
        </a>
        <a className="text-on-surface-variant hover:bg-surface-container-high px-4 py-3 flex items-center gap-3 rounded-lg transition-colors" href="#">
          <span className="material-symbols-outlined">settings</span>
          <span className="font-label-lg text-label-lg">Settings</span>
        </a>
      </div>
    </aside>
  );
}
