VitalWatch – Quarantine Facility Management App
===============================================

A role-based quarantine and treatment facility management system designed to streamline patient monitoring, clinical workflows, discharge management, and facility operations during infectious disease outbreaks.

Developed as a product design and sprint planning project focused on improving operational efficiency, patient safety, and healthcare coordination in quarantine facilities.

🚀 Project Overview
-------------------

VitalWatch is a web-based healthcare management platform built for quarantine and treatment facilities. The system enables seamless collaboration between nurses, doctors, and administrators through dedicated dashboards and workflow automation.

The application solves key operational challenges such as:

*   Manual temperature tracking
    
*   Delayed patient discharge processing
    
*   Lack of centralized patient monitoring
    
*   Capacity management issues
    
*   Missing audit trails and alerts
    

The platform introduces real-time monitoring, fever tracking, discharge workflows, automated alerts, and role-based access control to improve both patient care and facility efficiency.

👥 User Roles
=============

1\. Nurse Portal
----------------

Nurses are responsible for patient vitals and daily monitoring.

### Features

*   Record patient temperature
    
*   View assigned ward patients
    
*   Track overdue temperature checks
    
*   Access patient temperature history
    
*   Receive emergency alerts
    
*   View patient profiles
    

### Key Constraints

*   Only one temperature entry per patient per day
    
*   Duplicate submissions prevented
    
*   Fever readings automatically flagged
    

2\. Doctor Portal
-----------------

Doctors oversee patient treatment and discharge eligibility.

### Features

*   View prioritized patient lists
    
*   Monitor 7-day temperature trends
    
*   Mark patients as visited
    
*   Flag patients for discharge
    
*   Trigger emergency alerts
    

### Key Constraints

*   Cannot record temperature unless no nurse reading exists
    
*   Can only discharge patients after:
    
    *   3 consecutive fever-free days
        
    *   Patient visited on current day
        

3\. Admin Portal
----------------

Admins manage facility logistics and discharge processing.

### Features

*   Facility-wide occupancy dashboard
    
*   Bed availability tracking
    
*   Mortality rate monitoring
    
*   Staff account management
    
*   Admission & discharge handling
    
*   CSV/PDF report generation
    

### Key Constraints

*   Only admins can confirm discharges
    
*   Beds free up only after discharge confirmation
    
*   Critical capacity alerts triggered automatically
    

🖥️ Core Screens & Workflows
============================

🔐 Login & Role Selection
-------------------------

Users select their operational role:

*   Nurse
    
*   Doctor
    
*   Admin
    

Each role redirects to a dedicated dashboard with access-specific functionality.

🩺 Nurse Dashboard
------------------

Features:

*   Real-time patient monitoring
    
*   Overdue temperature alerts
    
*   Quick temperature recording
    
*   Zone-based patient management
    

Workflow:

1.  Nurse records temperature
    
2.  Patient card updates from PENDING → TEMP RECORDED
    
3.  Alerts disappear automatically
    

📈 Patient Detail View
----------------------

Displays:

*   7-day temperature chart
    
*   Consecutive fever-free days
    
*   Temperature logs
    
*   Fever flags
    
*   Nurse activity tracking
    

Used by both doctors and nurses for patient analysis and decision-making.

👨‍⚕️ Doctor Dashboard
----------------------

Doctors see prioritized patient queues:

*   Ready for Visit
    
*   Awaiting Temperature
    

Actions:

*   Mark patient as visited
    
*   Flag discharge eligibility
    
*   Review patient recovery progress
    

🏥 Admin Dashboard
------------------

Facility-level management includes:

*   Occupancy metrics
    
*   Available bed tracking
    
*   Pending discharge approvals
    
*   Mortality statistics
    
*   Emergency capacity alerts
    

Workflow:

1.  Doctor flags patient for discharge
    
2.  Patient enters pending queue
    
3.  Admin confirms discharge
    
4.  Bed becomes available
    

⚙️ Business Logic & System Constraints
======================================

🌡️ Temperature Rules
---------------------

*   One reading allowed per patient per day
    
*   Fever threshold: ≥ 38.0°C
    
*   Overdue alerts after 14:00
    
*   Critical alerts after 18:00
    
*   Invalid temperature values rejected automatically
    

📊 Fever-Free Day Logic
-----------------------

A patient qualifies for discharge only if:

*   All readings remain below 38°C
    
*   No fever occurs during the period
    
*   3 consecutive fever-free calendar days are completed
    

Any fever resets the counter to zero.

🩺 Doctor Visit Rules
---------------------

*   Visits allowed only after temperature recording
    
*   One visit per patient per day
    
*   Discharge available only after doctor confirmation
    

🏨 Capacity Management
----------------------

Alerts:

*   ≤10 beds → Warning
    
*   ≤5 beds → Critical Alert
    
*   0 beds → Admissions disabled
    

Bed availability is dynamically calculated and cannot be manually edited.

📉 Mortality Tracking
---------------------

The system:

*   Calculates rolling mortality rates
    
*   Triggers warnings if mortality exceeds 15%
    
*   Tracks patient outcomes:
    
    *   Recovered
        
    *   Deceased
        

Admins can export reports in CSV/PDF format.

🔒 Security & Audit
-------------------

*   Role-based access enforced server-side
    
*   Immutable audit logs maintained
    
*   Sessions timeout after 30 minutes
    
*   Idempotency handling prevents duplicate records
    

📌 Sprint Planning & Optimization
=================================

The sprint planning section applies a **Greedy Knapsack Optimization** approach to maximize feature value within sprint velocity constraints.

### Sprint Setup

*   Sprint Velocity: 25 story points
    
*   Pre-committed Work: 15 points
    
*   Remaining Capacity: 10 points
    

### Optimization Strategy

Features were selected using:

*   Value/Effort ratio
    
*   Priority weighting:
    
    *   High = 6 units
        
    *   Medium = 3 units
        
    *   Low = 1 unit
        

### Selected Features

*   J
    
*   A
    
*   I
    
*   F
    
*   G
    
*   B
    
*   H
    
*   D
    

### Final Metrics

*   Additional Effort: 8.3 points
    
*   Total Sprint Effort: 23.3 points
    
*   Total Value Gained: 22 units
    

🧠 Key Concepts Demonstrated
============================

*   Product Design
    
*   Healthcare Workflow Modeling
    
*   Role-Based Access Control (RBAC)
    
*   Real-Time Monitoring Systems
    
*   Alert Management
    
*   Audit Logging
    
*   Data Integrity
    
*   Workflow Automation
    
*   Capacity Planning
    
*   Sprint Planning & Agile Optimization
    

🛠️ Tech Stack
========================

Frontend:

*   React.js 
    
*   Tailwind CSS
    

Deployment:

*   Vercel
    

🌍 Real-World Impact
====================

VitalWatch can significantly improve:

*   Patient monitoring efficiency
    
*   Healthcare staff coordination
    
*   Quarantine facility operations
    
*   Emergency response workflows
    
*   Healthcare data integrity
    
*   Facility capacity planning
    

This system is especially relevant during:

*   Pandemic outbreaks
    
*   Isolation ward management
    
*   Emergency healthcare scenarios
    

📂 Project Highlights
=====================

✅ Role-Based Dashboards✅ Automated Fever Tracking✅ Discharge Workflow Automation✅ Facility Capacity Alerts✅ Mortality Rate Monitoring✅ Audit Logging & Security✅ Sprint Planning Optimization✅ Real-Time Patient Monitoring

👨‍💻 Author
============

**Smit Patil**Fr. Conceicao Rodrigues College of Engineering (Fr. CRCE)
