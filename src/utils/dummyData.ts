
// Types
export interface Appointment {
  id: string;
  doctorName: string;
  specialty: string;
  date: string;
  time: string;
  status: 'upcoming' | 'completed' | 'canceled';
  notes?: string;
}

export interface HealthMetric {
  date: string;
  bloodPressure: {
    systolic: number;
    diastolic: number;
  };
  heartRate: number;
  weight: number;
  glucose?: number;
}

export interface Medication {
  id: string;
  name: string;
  dosage: string;
  frequency: string;
  startDate: string;
  endDate?: string;
  active: boolean;
}

export interface MedicalRecord {
  id: string;
  date: string;
  doctorName: string;
  diagnosis: string;
  treatment: string;
  notes?: string;
  documents?: string[];
}

// Dummy data
export const appointments: Appointment[] = [
  {
    id: '1',
    doctorName: 'Dr. Emily Chen',
    specialty: 'Cardiology',
    date: '2023-11-28',
    time: '10:30 AM',
    status: 'upcoming',
    notes: 'Annual heart checkup'
  },
  {
    id: '2',
    doctorName: 'Dr. Michael Stevens',
    specialty: 'General Practice',
    date: '2023-11-15',
    time: '2:45 PM',
    status: 'completed',
    notes: 'Routine physical examination'
  },
  {
    id: '3',
    doctorName: 'Dr. Sarah Johnson',
    specialty: 'Neurology',
    date: '2023-12-05',
    time: '9:15 AM',
    status: 'upcoming'
  },
  {
    id: '4',
    doctorName: 'Dr. James Wilson',
    specialty: 'Orthopedics',
    date: '2023-11-10',
    time: '11:00 AM',
    status: 'completed',
    notes: 'Follow-up on knee rehabilitation'
  }
];

export const healthMetrics: HealthMetric[] = [
  {
    date: '2023-11-25',
    bloodPressure: { systolic: 120, diastolic: 80 },
    heartRate: 68,
    weight: 70.5,
    glucose: 98
  },
  {
    date: '2023-11-18',
    bloodPressure: { systolic: 118, diastolic: 78 },
    heartRate: 70,
    weight: 70.2,
    glucose: 102
  },
  {
    date: '2023-11-11',
    bloodPressure: { systolic: 122, diastolic: 82 },
    heartRate: 72,
    weight: 70.8,
    glucose: 100
  },
  {
    date: '2023-11-04',
    bloodPressure: { systolic: 124, diastolic: 83 },
    heartRate: 71,
    weight: 71.0,
    glucose: 99
  },
  {
    date: '2023-10-28',
    bloodPressure: { systolic: 125, diastolic: 84 },
    heartRate: 69,
    weight: 71.2,
    glucose: 101
  },
  {
    date: '2023-10-21',
    bloodPressure: { systolic: 123, diastolic: 81 },
    heartRate: 70,
    weight: 71.5,
    glucose: 97
  }
];

export const medications: Medication[] = [
  {
    id: '1',
    name: 'Lisinopril',
    dosage: '10mg',
    frequency: 'Once daily',
    startDate: '2023-09-15',
    active: true
  },
  {
    id: '2',
    name: 'Metformin',
    dosage: '500mg',
    frequency: 'Twice daily',
    startDate: '2023-08-01',
    active: true
  },
  {
    id: '3',
    name: 'Ibuprofen',
    dosage: '400mg',
    frequency: 'As needed',
    startDate: '2023-11-10',
    endDate: '2023-11-17',
    active: false
  }
];

export const medicalRecords: MedicalRecord[] = [
  {
    id: '1',
    date: '2023-11-15',
    doctorName: 'Dr. Michael Stevens',
    diagnosis: 'Common Cold',
    treatment: 'Rest, fluids, over-the-counter cold medications',
    notes: 'Patient presented with mild fever, sore throat, and nasal congestion'
  },
  {
    id: '2',
    date: '2023-09-20',
    doctorName: 'Dr. Emily Chen',
    diagnosis: 'Hypertension',
    treatment: 'Prescribed Lisinopril 10mg daily, recommended diet changes',
    notes: 'Blood pressure consistently high over multiple readings'
  },
  {
    id: '3',
    date: '2023-08-05',
    doctorName: 'Dr. James Wilson',
    diagnosis: 'Knee Sprain',
    treatment: 'Physical therapy, RICE protocol, ibuprofen for pain',
    notes: 'MRI showed minor ligament strain, no surgery required'
  },
  {
    id: '4',
    date: '2023-06-12',
    doctorName: 'Dr. Lisa Chang',
    diagnosis: 'Annual Physical',
    treatment: 'No treatment needed',
    notes: 'All vital signs normal, recommended increasing physical activity'
  },
  {
    id: '5',
    date: '2023-04-18',
    doctorName: 'Dr. Sarah Johnson',
    diagnosis: 'Migraine',
    treatment: 'Prescribed sumatriptan for acute episodes, discussed triggers',
    notes: 'Patient reports increased frequency of headaches'
  }
];

export const patientInfo = {
  name: "Alex Morgan",
  dob: "1985-06-12",
  gender: "Non-binary",
  bloodType: "O+",
  allergies: ["Penicillin", "Shellfish"],
  emergencyContact: {
    name: "Jamie Morgan",
    relationship: "Spouse",
    phone: "555-123-4567"
  }
};
