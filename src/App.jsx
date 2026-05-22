import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AdminDashboard from './pages/AdminDashboard';
import DoctorDashboard from './pages/DoctorDashboard';
import LoginRoleSelection from './pages/LoginRoleSelection';
import NurseDashboard from './pages/NurseDashboard';
import PatientDetailView from './pages/PatientDetailView';
import NurseLogin from './pages/NurseLogin';
import DoctorLogin from './pages/DoctorLogin';
import AdminLogin from './pages/AdminLogin';
import LogisticsManagement from './pages/LogisticsManagement';
import FacilityMap from './pages/FacilityMap';
import QuarantineZoneA from './pages/QuarantineZoneA';
import IsolationUnitB from './pages/IsolationUnitB';
import TriageIntake from './pages/TriageIntake';
import FacilityReports from './pages/FacilityReports';
import { PatientProvider } from './context/PatientContext';

function App() {
  return (
    <Router>
      <PatientProvider>
        <div className="min-h-screen bg-surface">
          <Routes>
            <Route path="/" element={<LoginRoleSelection />} />
            <Route path="/login/nurse" element={<NurseLogin />} />
            <Route path="/login/doctor" element={<DoctorLogin />} />
            <Route path="/login/admin" element={<AdminLogin />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/doctor" element={<DoctorDashboard />} />
            <Route path="/nurse" element={<NurseDashboard />} />
            <Route path="/patient" element={<PatientDetailView />} />
            <Route path="/logistics" element={<LogisticsManagement />} />
            <Route path="/facility-map" element={<FacilityMap />} />
            <Route path="/quarantine-zone-a" element={<QuarantineZoneA />} />
            <Route path="/isolation-unit-b" element={<IsolationUnitB />} />
            <Route path="/triage" element={<TriageIntake />} />
            <Route path="/reports" element={<FacilityReports />} />
          </Routes>
        </div>
      </PatientProvider>
    </Router>
  );
}

export default App;
