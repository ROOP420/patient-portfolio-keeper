
import React, { useState } from 'react';
import { FileDown, Calendar, Check, Loader2 } from 'lucide-react';

const ReportGenerator = () => {
  const [generating, setGenerating] = useState(false);
  const [dateRange, setDateRange] = useState('all-time');
  
  const handleGenerateReport = () => {
    setGenerating(true);
    // Simulate report generation
    setTimeout(() => {
      setGenerating(false);
      // Simulate report download
      alert('Report generated successfully! Download would start in a real application.');
    }, 2000);
  };
  
  return (
    <div className="glass-panel p-6 animate-fade-in">
      <h3 className="text-lg font-semibold mb-4">Generate Health Report</h3>
      
      <div className="grid gap-4 mb-6">
        <div>
          <label className="block text-sm font-medium mb-1.5">Report Type</label>
          <select 
            className="w-full p-2.5 rounded-lg border border-border bg-white focus:outline-none focus:ring-1 focus:ring-primary/40"
            defaultValue="comprehensive"
          >
            <option value="comprehensive">Comprehensive Health Report</option>
            <option value="summary">Health Summary</option>
            <option value="medications">Medication History</option>
            <option value="appointments">Appointment History</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-1.5">Time Period</label>
          <div className="grid grid-cols-3 gap-2">
            {[
              { id: 'all-time', label: 'All time' },
              { id: 'year', label: 'Past year' },
              { id: '6-months', label: 'Past 6 months' },
            ].map((option) => (
              <button
                key={option.id}
                type="button"
                className={`p-2.5 rounded-lg border flex items-center justify-center transition-all ${
                  dateRange === option.id
                    ? 'border-primary bg-primary/5 text-primary'
                    : 'border-border bg-white text-foreground hover:bg-secondary'
                }`}
                onClick={() => setDateRange(option.id)}
              >
                {dateRange === option.id && <Check size={14} className="mr-1.5" />}
                <span className="text-sm">{option.label}</span>
              </button>
            ))}
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-1.5">Custom Date Range (Optional)</label>
          <div className="flex items-center space-x-3">
            <div className="relative flex-1">
              <Calendar size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
              <input 
                type="date" 
                className="w-full p-2.5 pl-10 rounded-lg border border-border bg-white focus:outline-none focus:ring-1 focus:ring-primary/40"
              />
            </div>
            <span className="text-muted-foreground">to</span>
            <div className="relative flex-1">
              <Calendar size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
              <input 
                type="date" 
                className="w-full p-2.5 pl-10 rounded-lg border border-border bg-white focus:outline-none focus:ring-1 focus:ring-primary/40"
              />
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex justify-end">
        <button
          className={`px-4 py-2.5 rounded-lg flex items-center justify-center transition-all ${
            generating 
              ? 'bg-primary/80' 
              : 'bg-primary hover:bg-primary/90 active:bg-primary/95'
          } text-white font-medium`}
          onClick={handleGenerateReport}
          disabled={generating}
        >
          {generating ? (
            <>
              <Loader2 size={16} className="mr-2 animate-spin" />
              Generating...
            </>
          ) : (
            <>
              <FileDown size={16} className="mr-2" />
              Generate Report
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default ReportGenerator;
