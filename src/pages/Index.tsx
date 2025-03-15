
import React from 'react';
import Layout from '../components/Layout';
import PatientTimeline from '../components/PatientTimeline';
import HealthMetrics from '../components/HealthMetrics';
import AppointmentCard from '../components/AppointmentCard';
import ReportGenerator from '../components/ReportGenerator';
import { appointments, patientInfo } from '../utils/dummyData';
import { CalendarPlus, User, FileText } from 'lucide-react';

const Index = () => {
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { month: 'long', day: 'numeric', year: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };
  
  const calculateAge = (dob: string) => {
    const birthDate = new Date(dob);
    const difference = Date.now() - birthDate.getTime();
    const ageDate = new Date(difference);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  };
  
  const patientAge = calculateAge(patientInfo.dob);
  
  return (
    <Layout>
      <div className="p-6 max-w-7xl mx-auto">
        {/* Welcome section */}
        <div className="mb-8 animate-fade-up">
          <div className="flex items-center mb-6">
            <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mr-4">
              <User size={32} />
            </div>
            <div>
              <h1 className="text-3xl font-semibold">{patientInfo.name}</h1>
              <p className="text-muted-foreground">
                {patientAge} years • {patientInfo.gender} • {patientInfo.bloodType}
              </p>
            </div>
          </div>
          
          <p className="text-balance text-muted-foreground max-w-2xl">
            Welcome to your medical portfolio. Here you can view your complete medical history, track your health metrics, and generate comprehensive reports to share with your healthcare providers.
          </p>
        </div>
        
        {/* Quick actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
          <button className="glass-panel p-4 flex items-center transition-all hover:shadow-subtle animate-fade-up" style={{ animationDelay: '100ms' }}>
            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mr-4">
              <CalendarPlus size={24} />
            </div>
            <div className="text-left">
              <h3 className="font-medium">Schedule Appointment</h3>
              <p className="text-sm text-muted-foreground">Book your next visit</p>
            </div>
          </button>
          
          <button className="glass-panel p-4 flex items-center transition-all hover:shadow-subtle animate-fade-up" style={{ animationDelay: '200ms' }}>
            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mr-4">
              <FileText size={24} />
            </div>
            <div className="text-left">
              <h3 className="font-medium">Upload Document</h3>
              <p className="text-sm text-muted-foreground">Add new medical records</p>
            </div>
          </button>
          
          <button className="glass-panel p-4 flex items-center transition-all hover:shadow-subtle animate-fade-up" style={{ animationDelay: '300ms' }}>
            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mr-4">
              <User size={24} />
            </div>
            <div className="text-left">
              <h3 className="font-medium">Update Profile</h3>
              <p className="text-sm text-muted-foreground">Edit your information</p>
            </div>
          </button>
        </div>
        
        {/* Dashboard grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 gap-6">
              {/* Appointments */}
              <div className="glass-panel p-6 animate-fade-in">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold">Upcoming Appointments</h3>
                  <button className="px-3 py-1.5 rounded-lg bg-primary text-white text-sm font-medium hover:bg-primary/90 transition-colors">
                    Book New
                  </button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {appointments
                    .filter(apt => apt.status === 'upcoming')
                    .slice(0, 2)
                    .map((appointment, index) => (
                      <AppointmentCard 
                        key={appointment.id} 
                        appointment={appointment} 
                        index={index}
                      />
                    ))}
                </div>
              </div>
              
              {/* Health Metrics */}
              <HealthMetrics />
            </div>
          </div>
          
          <div className="lg:col-span-1">
            <div className="grid grid-cols-1 gap-6">
              {/* Report Generator */}
              <ReportGenerator />
              
              {/* Medical Timeline */}
              <PatientTimeline />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
