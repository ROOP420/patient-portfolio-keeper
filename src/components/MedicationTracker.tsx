
import React from 'react';
import { Pill, Calendar, Clock, Check, AlertCircle } from 'lucide-react';
import { Progress } from './ui/progress';

interface Medication {
  id: string;
  name: string;
  dosage: string;
  frequency: string;
  timeOfDay: string;
  startDate: string;
  endDate: string;
  status: 'active' | 'completed' | 'missed';
  refillDate?: string;
  notes?: string;
}

// Sample data for medications
const medications: Medication[] = [
  {
    id: 'med1',
    name: 'Atorvastatin',
    dosage: '10mg',
    frequency: 'Once daily',
    timeOfDay: 'Evening',
    startDate: '2023-08-15',
    endDate: '2023-11-15',
    status: 'active',
    refillDate: '2023-09-15',
  },
  {
    id: 'med2',
    name: 'Metformin',
    dosage: '500mg',
    frequency: 'Twice daily',
    timeOfDay: 'Morning and Evening',
    startDate: '2023-07-01',
    endDate: '2023-10-01',
    status: 'active',
    notes: 'Take with food to reduce GI side effects',
  },
  {
    id: 'med3',
    name: 'Ibuprofen',
    dosage: '400mg',
    frequency: 'As needed',
    timeOfDay: 'Any time',
    startDate: '2023-09-05',
    endDate: '2023-09-12',
    status: 'completed',
  },
  {
    id: 'med4',
    name: 'Amoxicillin',
    dosage: '250mg',
    frequency: 'Three times daily',
    timeOfDay: 'Morning, Afternoon, Evening',
    startDate: '2023-09-02',
    endDate: '2023-09-09',
    status: 'completed',
  }
];

const MedicationTracker = () => {
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { month: 'short', day: 'numeric', year: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };
  
  const calculateProgress = (startDate: string, endDate: string) => {
    const start = new Date(startDate).getTime();
    const end = new Date(endDate).getTime();
    const today = Date.now();
    
    if (today >= end) return 100;
    if (today <= start) return 0;
    
    const totalDuration = end - start;
    const currentProgress = today - start;
    return Math.round((currentProgress / totalDuration) * 100);
  };
  
  const getStatusIcon = (status: Medication['status']) => {
    switch (status) {
      case 'active':
        return <Clock className="h-4 w-4 text-primary" />;
      case 'completed':
        return <Check className="h-4 w-4 text-green-500" />;
      case 'missed':
        return <AlertCircle className="h-4 w-4 text-destructive" />;
      default:
        return null;
    }
  };
  
  const activeMedications = medications.filter(med => med.status === 'active');
  const completedMedications = medications.filter(med => med.status === 'completed');
  
  return (
    <div className="glass-panel p-6 animate-fade-in">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold">Medication Tracker</h3>
        <button className="px-3 py-1.5 rounded-lg bg-primary text-white text-sm font-medium hover:bg-primary/90 transition-colors">
          Add Medication
        </button>
      </div>
      
      <div className="space-y-6">
        {/* Active medications */}
        <div>
          <h4 className="font-medium text-sm mb-3">Active Medications</h4>
          {activeMedications.length === 0 ? (
            <p className="text-muted-foreground text-sm">No active medications</p>
          ) : (
            <div className="space-y-3">
              {activeMedications.map((medication) => (
                <div key={medication.id} className="p-4 rounded-xl bg-white/80 border border-border">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center">
                      <div className="p-2 rounded-lg bg-blue-50 mr-3">
                        <Pill className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <h5 className="font-medium">{medication.name}</h5>
                        <p className="text-xs text-muted-foreground">{medication.dosage} • {medication.frequency}</p>
                      </div>
                    </div>
                    <div className="flex items-center text-xs">
                      {getStatusIcon(medication.status)}
                      <span className="ml-1 text-muted-foreground">Active</span>
                    </div>
                  </div>
                  
                  <div className="text-xs text-muted-foreground flex items-center mb-2">
                    <Calendar className="h-3.5 w-3.5 mr-1" />
                    <span>{formatDate(medication.startDate)} - {formatDate(medication.endDate)}</span>
                  </div>
                  
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs">
                      <span>Progress</span>
                      <span>{calculateProgress(medication.startDate, medication.endDate)}%</span>
                    </div>
                    <Progress value={calculateProgress(medication.startDate, medication.endDate)} className="h-1.5" />
                  </div>
                  
                  {medication.notes && (
                    <p className="mt-3 text-xs text-muted-foreground bg-secondary/30 p-2 rounded">
                      <span className="font-medium text-foreground">Note:</span> {medication.notes}
                    </p>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
        
        {/* Completed medications */}
        <div>
          <h4 className="font-medium text-sm mb-3">Completed Medications</h4>
          {completedMedications.length === 0 ? (
            <p className="text-muted-foreground text-sm">No completed medications</p>
          ) : (
            <div className="space-y-3">
              {completedMedications.map((medication) => (
                <div key={medication.id} className="p-4 rounded-xl bg-white/80 border border-border opacity-70 hover:opacity-100 transition-opacity">
                  <div className="flex items-start justify-between mb-1">
                    <div className="flex items-center">
                      <div className="p-2 rounded-lg bg-green-50 mr-3">
                        <Check className="h-4 w-4 text-green-500" />
                      </div>
                      <div>
                        <h5 className="font-medium">{medication.name}</h5>
                        <p className="text-xs text-muted-foreground">{medication.dosage} • {medication.frequency}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-xs text-muted-foreground flex items-center">
                    <Calendar className="h-3.5 w-3.5 mr-1" />
                    <span>{formatDate(medication.startDate)} - {formatDate(medication.endDate)}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MedicationTracker;
