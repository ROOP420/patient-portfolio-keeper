
import React from 'react';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  AreaChart,
  Area
} from 'recharts';
import { healthMetrics } from '../utils/dummyData';
import { Activity, TrendingUp, ArrowRight } from 'lucide-react';

const HealthMetrics = () => {
  // Format data for charts
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return `${date.getMonth() + 1}/${date.getDate()}`;
  };
  
  const formattedData = healthMetrics.map(metric => ({
    date: formatDate(metric.date),
    systolic: metric.bloodPressure.systolic,
    diastolic: metric.bloodPressure.diastolic,
    heartRate: metric.heartRate,
    weight: metric.weight,
    glucose: metric.glucose || 0
  })).reverse();
  
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="glassmorphism p-3 text-xs">
          <p className="font-medium">{label}</p>
          {payload.map((entry: any, index: number) => (
            <p key={`item-${index}`} style={{ color: entry.color }}>
              {entry.name}: {entry.value}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };
  
  return (
    <div className="glass-panel p-6 h-full flex flex-col animate-fade-in">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold">Health Metrics</h3>
        <button className="text-sm text-primary flex items-center hover:underline">
          View details <ArrowRight size={14} className="ml-1" />
        </button>
      </div>
      
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="p-4 rounded-xl bg-white/80 border border-border">
          <div className="flex items-center">
            <div className="p-2 rounded-lg bg-blue-50">
              <Activity size={18} className="text-primary" />
            </div>
            <div className="ml-3">
              <p className="text-xs text-muted-foreground">Blood Pressure</p>
              <p className="text-xl font-semibold">
                {healthMetrics[0].bloodPressure.systolic}/{healthMetrics[0].bloodPressure.diastolic}
              </p>
            </div>
          </div>
        </div>
        
        <div className="p-4 rounded-xl bg-white/80 border border-border">
          <div className="flex items-center">
            <div className="p-2 rounded-lg bg-blue-50">
              <TrendingUp size={18} className="text-primary" />
            </div>
            <div className="ml-3">
              <p className="text-xs text-muted-foreground">Heart Rate</p>
              <p className="text-xl font-semibold">
                {healthMetrics[0].heartRate} <span className="text-xs font-normal">bpm</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex-1">
        <div className="h-1/2 mb-4">
          <p className="text-sm font-medium mb-2">Blood Pressure</p>
          <div className="h-full w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={formattedData}
                margin={{ top: 5, right: 5, left: 0, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                <XAxis dataKey="date" tick={{ fontSize: 10 }} />
                <YAxis tick={{ fontSize: 10 }} width={30} />
                <Tooltip content={<CustomTooltip />} />
                <Line 
                  type="monotone" 
                  dataKey="systolic" 
                  stroke="#3B82F6" 
                  strokeWidth={2}
                  dot={{ strokeWidth: 2, r: 3 }}
                  activeDot={{ r: 5 }}
                  name="Systolic"
                />
                <Line 
                  type="monotone" 
                  dataKey="diastolic" 
                  stroke="#93C5FD" 
                  strokeWidth={2}
                  dot={{ strokeWidth: 2, r: 3 }}
                  activeDot={{ r: 5 }}
                  name="Diastolic"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
        
        <div className="h-1/2">
          <p className="text-sm font-medium mb-2">Heart Rate</p>
          <div className="h-full w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={formattedData}
                margin={{ top: 5, right: 5, left: 0, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                <XAxis dataKey="date" tick={{ fontSize: 10 }} />
                <YAxis tick={{ fontSize: 10 }} width={30} />
                <Tooltip content={<CustomTooltip />} />
                <defs>
                  <linearGradient id="heartRateGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#3B82F6" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <Area 
                  type="monotone" 
                  dataKey="heartRate" 
                  stroke="#3B82F6" 
                  fill="url(#heartRateGradient)" 
                  strokeWidth={2}
                  name="Heart Rate"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthMetrics;
