import React, { createContext, useState, useContext } from 'react';

const PatientContext = createContext();

export const usePatients = () => useContext(PatientContext);

export const PatientProvider = ({ children }) => {
    const [patients, setPatients] = useState([
        { 
            id: 1, 
            name: "Liam Smith", 
            room: "102", 
            age: 45, 
            status: "Temp Recorded", 
            lastReading: "36.8°C", 
            heartRate: "72 bpm" 
        },
        { 
            id: 2, 
            name: "Elena Rodriguez", 
            room: "105", 
            age: 32, 
            status: "Pending Reading", 
            overdue: "14 mins" 
        },
        { 
            id: 3, 
            name: "David Chen", 
            room: "110", 
            age: 61, 
            status: "Temp Recorded", 
            lastReading: "37.1°C", 
            heartRate: "88 bpm",
            bloodOxygen: "98%"
        }
    ]);

    const addPatient = (newPatient) => {
        setPatients(prev => [...prev, { ...newPatient, id: Date.now() }]);
    };

    return (
        <PatientContext.Provider value={{ patients, addPatient }}>
            {children}
        </PatientContext.Provider>
    );
};
