const ROLE_STORAGE_KEY = 'vitalwatch-active-role';

const DASHBOARD_ROUTES = {
  admin: '/admin',
  doctor: '/doctor',
  nurse: '/nurse',
};

export function setActiveRole(role) {
  if (!DASHBOARD_ROUTES[role]) return;
  localStorage.setItem(ROLE_STORAGE_KEY, role);
}

export function getActiveRole() {
  return localStorage.getItem(ROLE_STORAGE_KEY);
}

export function getDashboardPath() {
  return DASHBOARD_ROUTES[getActiveRole()] || DASHBOARD_ROUTES.admin;
}

export function canAccessLogistics() {
  return getActiveRole() === 'admin';
}
