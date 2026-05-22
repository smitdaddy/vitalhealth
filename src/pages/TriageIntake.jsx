import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BrandLogo from '../components/BrandLogo';
import TopNavbar from '../components/TopNavbar';
import { getActiveRole } from '../utils/roleNavigation';
import Sidebar from '../components/Sidebar';


export default function TriageIntake() {
  const role = getActiveRole();
  const dashboardPath = role === 'nurse' ? '/nurse' : role === 'doctor' ? '/doctor' : '/admin';
  const [showModal, setShowModal] = useState(false);
  const [selectedPatient, setSelectedPatient] = useState(null);

  const [triageQueue, setTriageQueue] = useState([
    { id: 1, name: 'Mateo Ricci', code: '#VW-9800', arrival: '14:22', temp: '38.9°C', risk: 'Critical', riskClass: 'bg-error-container text-on-error-container', nurse: 'N. Chen', status: 'Assessed' },
    { id: 2, name: 'Sarah Jenkins', code: '#VW-9801', arrival: '14:45', temp: '37.8°C', risk: 'High', riskClass: 'bg-surface-container-highest text-primary', nurse: 'T. Miller', status: 'Awaiting' },
    { id: 3, name: 'Elena Vargas', code: '#VW-9802', arrival: '15:05', temp: '36.6°C', risk: 'Low', riskClass: 'bg-tertiary-fixed text-on-tertiary-fixed-variant', nurse: 'N. Chen', status: 'Assessment Complete' },
  ]);

  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: 'Male',
    temp: '',
    symptoms: '',
    risk: 'Low'
  });

  const [currentTime, setCurrentTime] = useState(() => {
    const now = new Date();
    return `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;
  });

  const getRiskClass = (risk) => {
    switch(risk) {
      case 'Critical': return 'bg-error-container text-on-error-container';
      case 'High': return 'bg-surface-container-highest text-primary';
      case 'Medium': return 'bg-secondary-container text-on-secondary-container';
      case 'Low': return 'bg-tertiary-fixed text-on-tertiary-fixed-variant';
      default: return 'bg-surface-container text-secondary';
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim()) return;

    const newPatient = {
      id: Date.now(),
      name: formData.name,
      code: `#VW-${Math.floor(1000 + Math.random() * 9000)}`,
      arrival: currentTime,
      temp: formData.temp ? `${formData.temp}°C` : 'N/A',
      risk: formData.risk,
      riskClass: getRiskClass(formData.risk),
      nurse: 'Unassigned',
      status: 'Awaiting'
    };

    setTriageQueue(prev => [newPatient, ...prev]);
    setFormData({ name: '', age: '', gender: 'Male', temp: '', symptoms: '', risk: 'Low' });
    
    // Update current time for the next potential entry
    const now = new Date();
    setCurrentTime(`${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`);
  };

  const handleAssign = (patient) => {
    setSelectedPatient(patient);
    setShowModal(true);
  };

  return (
    <div className="font-body-md text-on-surface min-h-screen bg-surface">
      {/* Top App Bar */}
      <TopNavbar
        rightContent={
          <>
            <button className="p-2 hover:bg-surface-container-low rounded-full transition-colors">
              <span className="material-symbols-outlined text-secondary">notifications</span>
            </button>
            <button className="p-2 hover:bg-surface-container-low rounded-full transition-colors">
              <span className="material-symbols-outlined text-secondary">account_circle</span>
            </button>
          </>
        }
      />

      <div className="flex pt-16 min-h-screen">
        {/* Sidebar */}
        <Sidebar className="hidden lg:flex fixed left-0 top-16 h-[calc(100vh-64px)] w-64 z-30" />

        {/* Main Content */}
        <main className="flex-grow lg:ml-64 p-gutter max-w-full overflow-x-hidden">
          <div className="mb-gutter">
            <h1 className="font-headline-lg text-headline-lg text-primary">Triage &amp; Intake</h1>
            <p className="text-body-lg text-secondary">Manage incoming patient assessments and ward assignments.</p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-gutter mb-gutter">
            <div className="bg-[#EAF4FB] rounded-lg p-6">
              <p className="text-label-sm text-secondary uppercase tracking-wider mb-2">In Triage Now</p>
              <p className="text-headline-lg text-primary">5</p>
            </div>
            <div className="bg-[#EAF4FB] rounded-lg p-6">
              <p className="text-label-sm text-secondary uppercase tracking-wider mb-2">Awaiting Ward Assignment</p>
              <p className="text-headline-lg text-primary">3</p>
            </div>
            <div className="bg-[#EAF4FB] rounded-lg p-6">
              <p className="text-label-sm text-secondary uppercase tracking-wider mb-2">Average Wait Time</p>
              <p className="text-headline-lg text-on-error-container">47 mins</p>
            </div>
            <div className="bg-[#EAF4FB] rounded-lg p-6">
              <p className="text-label-sm text-secondary uppercase tracking-wider mb-2">Available Beds</p>
              <p className="text-headline-lg text-on-error-container">6</p>
            </div>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-3 gap-gutter">
            {/* Triage Queue Table */}
            <div className="xl:col-span-2 space-y-gutter">
              <div className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden">
                <div className="px-6 py-4 border-b border-surface-container-highest flex justify-between items-center">
                  <h3 className="font-headline-sm text-headline-sm text-primary">Triage Queue</h3>
                  <span className="bg-primary-container text-on-primary-container px-3 py-1 rounded-full text-label-sm">Live Updates</span>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-surface-container-low text-secondary text-label-lg">
                        <th className="px-6 py-4">Patient Name</th>
                        <th className="px-6 py-4">Arrival</th>
                        <th className="px-6 py-4">Temp</th>
                        <th className="px-6 py-4">Risk Level</th>
                        <th className="px-6 py-4">Nurse</th>
                        <th className="px-6 py-4">Status</th>
                        <th className="px-6 py-4">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-surface-container-high">
                      {triageQueue.map(patient => (
                        <tr key={patient.id} className="hover:bg-surface-container-low transition-colors">
                          <td className="px-6 py-4">
                            <div className="font-bold text-primary">{patient.name}</div>
                            <div className="text-label-sm text-secondary">{patient.code}</div>
                          </td>
                          <td className="px-6 py-4 text-body-md">{patient.arrival}</td>
                          <td className="px-6 py-4 text-body-md">{patient.temp}</td>
                          <td className="px-6 py-4">
                            <span className={`px-3 py-1 rounded-full text-[11px] font-bold uppercase ${patient.riskClass}`}>{patient.risk}</span>
                          </td>
                          <td className="px-6 py-4 text-body-md">{patient.nurse}</td>
                          <td className="px-6 py-4 text-body-md italic text-secondary">{patient.status}</td>
                          <td className="px-6 py-4 flex gap-2">
                            <button onClick={() => handleAssign(patient)} className="bg-tertiary-fixed text-on-tertiary-fixed-variant px-4 py-2 rounded-full font-bold text-label-sm hover:opacity-90 active:scale-95 transition-all">Assign</button>
                            <button className="border border-primary text-primary px-4 py-2 rounded-full font-bold text-label-sm hover:bg-surface-container-low active:scale-95 transition-all">Details</button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* New Patient Intake Form */}
            <div className="space-y-gutter">
              <div className="bg-surface-container-lowest rounded-xl shadow-sm p-6 border border-surface-container-highest">
                <h3 className="font-headline-sm text-headline-sm text-primary mb-6">New Patient Intake</h3>
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div>
                    <label className="block text-label-sm text-secondary mb-1">Full Name</label>
                    <input className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg p-3 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all" placeholder="John Doe" type="text" name="name" value={formData.name} onChange={handleInputChange} required />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-label-sm text-secondary mb-1">Age</label>
                      <input className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg p-3 focus:ring-2 focus:ring-primary outline-none" placeholder="45" type="number" name="age" value={formData.age} onChange={handleInputChange} />
                    </div>
                    <div>
                      <label className="block text-label-sm text-secondary mb-1">Gender</label>
                      <select className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg p-3 focus:ring-2 focus:ring-primary outline-none" name="gender" value={formData.gender} onChange={handleInputChange}>
                        <option>Male</option>
                        <option>Female</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-label-sm text-secondary mb-1">Arrival Time</label>
                    <input className="w-full bg-surface-container-low border border-outline-variant rounded-lg p-3 text-secondary outline-none" readOnly type="text" value={currentTime} />
                  </div>
                  <div>
                    <label className="block text-label-sm text-secondary mb-1">Initial Temperature (°C)</label>
                    <input className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg p-3 focus:ring-2 focus:ring-primary outline-none" placeholder="37.5" type="text" name="temp" value={formData.temp} onChange={handleInputChange} />
                  </div>
                  <div>
                    <label className="block text-label-sm text-secondary mb-1">Symptoms</label>
                    <textarea className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg p-3 focus:ring-2 focus:ring-primary outline-none" placeholder="Fever, cough, shortness of breath..." rows="3" name="symptoms" value={formData.symptoms} onChange={handleInputChange}></textarea>
                  </div>
                  <div>
                    <label className="block text-label-sm text-secondary mb-1">Risk Assessment</label>
                    <select className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg p-3 focus:ring-2 focus:ring-primary outline-none" name="risk" value={formData.risk} onChange={handleInputChange}>
                      <option>Low</option>
                      <option>Medium</option>
                      <option>High</option>
                      <option>Critical</option>
                    </select>
                  </div>
                  <button className="w-full bg-primary text-on-primary rounded-full py-4 font-bold active:scale-95 transition-transform mt-4" type="submit">
                    Add to Triage Queue
                  </button>
                </form>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Assign Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-primary/20 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-surface-container-lowest rounded-2xl shadow-[0_8px_24px_rgba(13,43,69,0.08)] max-w-md w-full overflow-hidden">
            <div className="bg-primary p-6 text-on-primary flex justify-between items-center">
              <h3 className="font-headline-sm text-headline-sm">Assign Patient</h3>
              <button className="hover:bg-primary-container p-1 rounded-full" onClick={() => setShowModal(false)}>
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
            <div className="p-8">
              <div className="mb-6">
                <p className="text-label-sm text-secondary uppercase mb-1">Patient</p>
                <h4 className="font-headline-md text-headline-md text-primary">{selectedPatient?.name}</h4>
                <p className="text-body-md text-secondary">{selectedPatient?.code} | {selectedPatient?.risk} Risk</p>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="block text-label-sm text-secondary mb-1">Select Ward</label>
                  <select className="w-full bg-surface-container-low border border-outline-variant rounded-lg p-4 font-bold text-primary outline-none">
                    <option>Quarantine Zone A</option>
                    <option>Isolation Unit B</option>
                    <option>Recovery Ward</option>
                  </select>
                </div>
                <div className="flex items-center gap-2 text-on-tertiary-fixed-variant bg-tertiary-fixed/30 p-3 rounded-lg">
                  <span className="material-symbols-outlined text-sm">bed</span>
                  <span className="text-label-lg">2 Beds Available in Unit B</span>
                </div>
                <div>
                  <label className="block text-label-sm text-secondary mb-1">Room Number</label>
                  <select className="w-full bg-surface-container-low border border-outline-variant rounded-lg p-4 font-bold text-primary outline-none">
                    <option>B-101</option>
                    <option>B-104</option>
                    <option>B-201 (VIP/High Intensity)</option>
                  </select>
                </div>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-4">
                <button className="py-4 border border-outline-variant text-secondary rounded-full font-bold hover:bg-surface-container-low transition-colors" onClick={() => setShowModal(false)}>Cancel</button>
                <button className="py-4 bg-tertiary-fixed text-on-tertiary-fixed-variant rounded-full font-bold hover:opacity-90 active:scale-95 transition-all" onClick={() => setShowModal(false)}>Confirm Assignment</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Bottom Nav */}
      <nav className="fixed bottom-0 left-0 w-full z-50 flex lg:hidden justify-around items-center px-4 py-2 bg-surface border-t border-surface-container-highest shadow-[0_-4px_12px_rgba(13,43,69,0.08)]">
        <Link className="flex flex-col items-center justify-center text-secondary" to={dashboardPath}>
          <span className="material-symbols-outlined">dashboard</span>
          <span className="font-label-sm text-[10px]">Dash</span>
        </Link>
        <Link className="flex flex-col items-center justify-center text-secondary" to="/patient">
          <span className="material-symbols-outlined">person</span>
          <span className="font-label-sm text-[10px]">Patients</span>
        </Link>
        <Link className="flex flex-col items-center justify-center bg-primary-container text-on-primary-container rounded-full px-5 py-1" to="/facility-map">
          <span className="material-symbols-outlined">map</span>
          <span className="font-label-sm text-[10px]">Map</span>
        </Link>
        <Link className="flex flex-col items-center justify-center text-secondary" to="/logistics">
          <span className="material-symbols-outlined">inventory</span>
          <span className="font-label-sm text-[10px]">Logistics</span>
        </Link>
      </nav>
    </div>
  );
}
