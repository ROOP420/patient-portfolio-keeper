
import React from 'react';
import { Appointment } from '../utils/dummyData';
import { Calendar, Clock, ChevronRight } from 'lucide-react';

interface AppointmentCardProps {
  appointment: Appointment;
  index: number;
}

const AppointmentCard: React.FC<AppointmentCardProps> = ({ appointment, index }) => {
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { month: 'short', day: 'numeric', year: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };
  
  const getStatusColor = (status: Appointment['status']) => {
    switch (status) {
      case 'upcoming':
        return 'bg-blue-100 text-blue-700';
      case 'completed':
        return 'bg-green-100 text-green-700';
      case 'canceled':
        return 'bg-red-100 text-red-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };
  
  return (
    <div 
      className="glass-panel hover:shadow-subtle transition-all p-4 cursor-pointer animate-fade-up"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="flex justify-between items-start">
        <div>
          <h4 className="font-medium">{appointment.doctorName}</h4>
          <p className="text-sm text-muted-foreground">{appointment.specialty}</p>
        </div>
        <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${getStatusColor(appointment.status)}`}>
          {appointment.status.charAt(0).toUpperCase() + appointment.status.slice(1)}
        </span>
      </div>
      
      <div className="mt-4 flex items-center space-x-4">
        <div className="flex items-center">
          <Calendar size={14} className="text-muted-foreground mr-1.5" />
          <span className="text-sm">{formatDate(appointment.date)}</span>
        </div>
        <div className="flex items-center">
          <Clock size={14} className="text-muted-foreground mr-1.5" />
          <span className="text-sm">{appointment.time}</span>
        </div>
      </div>
      
      {appointment.notes && (
        <p className="mt-3 text-sm text-muted-foreground">{appointment.notes}</p>
      )}
      
      {appointment.status === 'upcoming' && (
        <div className="mt-4 flex justify-end">
          <button className="text-xs text-primary hover:text-primary/80 flex items-center transition-colors">
            Manage appointment <ChevronRight size={14} />
          </button>
        </div>
      )}
    </div>
  );
};

export default AppointmentCard;
