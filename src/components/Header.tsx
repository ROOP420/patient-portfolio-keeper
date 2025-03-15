
import React from 'react';
import { Bell, User, Search } from 'lucide-react';
import { patientInfo } from '../utils/dummyData';

const Header = () => {
  return (
    <header className="w-full py-4 px-6 flex items-center justify-between bg-white/80 backdrop-blur-md border-b border-border sticky top-0 z-40 transition-all duration-200">
      <div className="flex items-center space-x-2">
        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
          <span className="font-medium text-lg">PM</span>
        </div>
        <h1 className="text-xl font-semibold text-foreground hidden sm:block">Patient Portfolio</h1>
      </div>
      
      <div className="hidden md:flex items-center justify-center flex-1 max-w-md mx-4">
        <div className="relative w-full">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <input 
            type="text" 
            placeholder="Search medical records, appointments..." 
            className="w-full py-2 pl-10 pr-4 rounded-full bg-secondary/50 border border-border focus:outline-none focus:ring-1 focus:ring-primary/40 transition-all"
          />
        </div>
      </div>
      
      <div className="flex items-center space-x-4">
        <button className="relative p-2 rounded-full hover:bg-secondary transition-colors">
          <Bell className="h-5 w-5 text-muted-foreground" />
          <span className="absolute top-1 right-1 h-2 w-2 bg-primary rounded-full"></span>
        </button>
        
        <div className="flex items-center">
          <div className="mr-3 text-right hidden sm:block">
            <p className="text-sm font-medium">{patientInfo.name}</p>
            <p className="text-xs text-muted-foreground">Patient</p>
          </div>
          <div className="h-9 w-9 rounded-full bg-secondary flex items-center justify-center overflow-hidden">
            <User className="h-5 w-5 text-muted-foreground" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
