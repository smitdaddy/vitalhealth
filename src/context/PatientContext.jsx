import React, { createContext, useState, useContext } from 'react';

const PatientContext = createContext();

export const usePatients = () => useContext(PatientContext);

export const PatientProvider = ({ children }) => {
    // Generate some mock historical readings
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);

    const [patients, setPatients] = useState([
        { 
            id: 1, 
            name: "Liam Smith", 
            room: "102", 
            age: 45, 
            status: "Temp Recorded", 
            lastReading: "36.8°C", 
            heartRate: "72 bpm",
            readings: [{ id: 101, temp: "36.8°C", timestamp: new Date().toISOString(), recordedBy: "Nurse Sarah", role: "Nurse", isFever: false }]
        },
        { 
            id: 2, 
            name: "Elena Rodriguez", 
            room: "105", 
            age: 32, 
            status: "Pending Reading", 
            readings: [{ id: 102, temp: "37.5°C", timestamp: yesterday.toISOString(), recordedBy: "Nurse Sarah", role: "Nurse", isFever: false }]
        },
        { 
            id: 3, 
            name: "David Chen", 
            room: "110", 
            age: 61, 
            status: "Temp Recorded", 
            lastReading: "37.1°C", 
            heartRate: "88 bpm",
            bloodOxygen: "98%",
            readings: [{ id: 103, temp: "37.1°C", timestamp: new Date().toISOString(), recordedBy: "Nurse Sarah", role: "Nurse", isFever: false }]
        }
    ]);

    const addPatient = (newPatient) => {
        setPatients(prev => [...prev, { ...newPatient, id: Date.now(), readings: [] }]);
    };

    const addReading = (patientId, temp, role, recordedBy) => {
        const tempValue = parseFloat(temp);
        if (isNaN(tempValue) || tempValue < 35.0 || tempValue > 42.0) {
            return { success: false, error: "Value out of valid range. Please re-check thermometer and re-enter." };
        }

        const patient = patients.find(p => p.id === patientId);
        if (!patient) return { success: false, error: "Patient not found." };

        const todayStr = new Date().toDateString();
        const todayReading = patient.readings?.find(r => new Date(r.timestamp).toDateString() === todayStr);

        if (todayReading) {
            const timeStr = new Date(todayReading.timestamp).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
            return { success: false, error: `Temperature already recorded today by ${todayReading.recordedBy} at ${timeStr}.` };
        }

        const newReading = {
            id: Date.now(),
            temp: tempValue.toFixed(1) + '°C',
            timestamp: new Date().toISOString(),
            recordedBy: recordedBy,
            role: role,
            isFever: tempValue >= 38.0
        };

        setPatients(prev => prev.map(p => {
            if (p.id !== patientId) return p;
            return {
                ...p,
                readings: p.readings ? [...p.readings, newReading] : [newReading],
                status: 'Temp Recorded',
                lastReading: newReading.temp
            };
        }));

        return { success: true, reading: newReading };
    };

    return (
        <PatientContext.Provider value={{ patients, addPatient, addReading }}>
            {children}
        </PatientContext.Provider>
    );
};
