
import React from 'react';
import { PhoneCall, Mail, Calendar } from 'lucide-react';

interface Doctor {
  id: string;
  name: string;
  specialty: string;
  phone: string;
  email: string;
  avatar: string;
  lastVisit: string;
  nextAppointment?: string;
}

// Sample data for doctors
const doctors: Doctor[] = [
  {
    id: 'doc1',
    name: 'Dr. Sarah Johnson',
    specialty: 'Cardiologist',
    phone: '+1 (555) 123-4567',
    email: 'sarah.johnson@example.com',
    avatar: '👩‍⚕️',
    lastVisit: '2023-08-15',
    nextAppointment: '2023-10-20'
  },
  {
    id: 'doc2',
    name: 'Dr. Michael Rodriguez',
    specialty: 'Primary Care Physician',
    phone: '+1 (555) 987-6543',
    email: 'michael.rodriguez@example.com',
    avatar: '👨‍⚕️',
    lastVisit: '2023-09-05'
  },
];

const DoctorCard = () => {
  const formatDate = (dateString?: string) => {
    if (!dateString) return 'None scheduled';
    
    const options: Intl.DateTimeFormatOptions = { month: 'short', day: 'numeric', year: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };
  
  return (
    <div className="glass-panel p-6 animate-fade-in">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold">Your Physicians</h3>
        <button className="text-sm text-primary flex items-center hover:underline">
          View all
        </button>
      </div>
      
      <div className="space-y-4">
        {doctors.map((doctor) => (
          <div key={doctor.id} className="p-4 rounded-xl bg-white/80 border border-border">
            <div className="flex items-center mb-4">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-2xl mr-4">
                {doctor.avatar}
              </div>
              <div>
                <h4 className="font-medium">{doctor.name}</h4>
                <p className="text-sm text-muted-foreground">{doctor.specialty}</p>
              </div>
            </div>
            
            <div className="space-y-2 mb-4">
              <div className="flex items-center text-sm">
                <PhoneCall className="h-4 w-4 text-muted-foreground mr-2" />
                <span>{doctor.phone}</span>
              </div>
              <div className="flex items-center text-sm">
                <Mail className="h-4 w-4 text-muted-foreground mr-2" />
                <span className="text-primary hover:underline cursor-pointer">{doctor.email}</span>
              </div>
            </div>
            
            <div className="border-t border-border pt-3 grid grid-cols-2 gap-3 text-xs">
              <div>
                <p className="text-muted-foreground mb-1">Last Visit</p>
                <p className="font-medium">{formatDate(doctor.lastVisit)}</p>
              </div>
              <div>
                <p className="text-muted-foreground mb-1">Next Appointment</p>
                {doctor.nextAppointment ? (
                  <p className="font-medium text-primary">{formatDate(doctor.nextAppointment)}</p>
                ) : (
                  <button className="px-2 py-1 text-xs rounded bg-primary/10 text-primary font-medium hover:bg-primary/20 transition-colors">
                    <Calendar className="h-3 w-3 inline-block mr-1" />
                    Schedule
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoctorCard;
