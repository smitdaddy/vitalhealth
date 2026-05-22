import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import BrandLogo from './BrandLogo';
import { getDashboardPath, canAccessLogistics } from '../utils/roleNavigation';

export default function TopNavbar({ rightContent }) {
  const location = useLocation();
  const currentPath = location.pathname;

  const isDashboard = currentPath === '/admin' || currentPath === '/doctor' || currentPath === '/nurse';
  const isPatientList = currentPath === '/patient';
  const isFacilityMap = currentPath === '/facility-map';
  const isLogistics = currentPath === '/logistics';

  const getLinkClasses = (isActive) => {
    return isActive
      ? "text-primary font-bold border-b-[3px] border-primary pb-1 font-label-lg text-label-lg transition-all"
      : "text-on-surface-variant hover:text-primary transition-colors pb-1 font-label-lg text-label-lg";
  };

  return (
    <header className="bg-surface border-b border-outline-variant sticky top-0 z-50">
      <div className="flex justify-between items-center w-full px-margin-desktop py-4 max-w-container-max mx-auto">
        <div className="flex items-center gap-6 md:gap-8">
          <BrandLogo textClassName="font-headline-lg text-headline-lg font-bold text-primary" />
          <nav className="hidden md:flex gap-6 lg:gap-8 items-center mt-1">
            <Link className={getLinkClasses(isDashboard)} to={getDashboardPath()}>Dashboard</Link>
            <Link className={getLinkClasses(isPatientList)} to="/patient">Patient List</Link>
            <Link className={getLinkClasses(isFacilityMap)} to="/facility-map">Facility Map</Link>
            {canAccessLogistics() && (
              <Link className={getLinkClasses(isLogistics)} to="/logistics">Logistics</Link>
            )}
          </nav>
        </div>
        {rightContent && (
          <div className="flex items-center gap-4">
            {rightContent}
          </div>
        )}
      </div>
    </header>
  );
}
