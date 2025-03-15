
import React from 'react';
import { medicalRecords } from '../utils/dummyData';
import { FileText, ChevronRight } from 'lucide-react';

const PatientTimeline = () => {
  return (
    <div className="glass-panel p-6 h-full overflow-hidden flex flex-col animate-fade-in">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold">Medical Timeline</h3>
        <button className="text-sm text-primary flex items-center hover:underline">
          View all <ChevronRight size={16} />
        </button>
      </div>
      
      <div className="overflow-y-auto pr-2 flex-1">
        <div className="relative pl-6 border-l border-border space-y-8">
          {medicalRecords.map((record, index) => (
            <div 
              key={record.id} 
              className="relative animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute -left-[25px] h-10 w-10 rounded-full bg-white border border-border flex items-center justify-center shadow-sm">
                <FileText size={16} className="text-primary" />
              </div>
              
              <div className="glass-panel p-4 hover:shadow-subtle transition-all cursor-pointer">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-xs text-muted-foreground">{record.date}</p>
                    <h4 className="font-medium mt-1">{record.diagnosis}</h4>
                    <p className="text-sm text-muted-foreground mt-0.5">{record.doctorName}</p>
                  </div>
                  <span className="px-2 py-1 rounded-full text-xs font-medium bg-secondary text-muted-foreground">
                    Visit
                  </span>
                </div>
                
                <div className="mt-3">
                  <p className="text-sm text-balance">{record.treatment}</p>
                  {record.notes && (
                    <p className="text-sm text-muted-foreground mt-2 text-balance">{record.notes}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PatientTimeline;
