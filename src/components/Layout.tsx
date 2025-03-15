
import React from 'react';
import Header from './Header';
import { HomeIcon, CalendarIcon, PieChartIcon, FileIcon, Settings, LifeBuoy, UserIcon } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const menuItems = [
    { icon: <HomeIcon size={20} />, label: 'Dashboard', active: true },
    { icon: <CalendarIcon size={20} />, label: 'Appointments', active: false },
    { icon: <PieChartIcon size={20} />, label: 'Health Metrics', active: false },
    { icon: <FileIcon size={20} />, label: 'Reports', active: false },
    { icon: <UserIcon size={20} />, label: 'Profile', active: false },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      
      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="hidden md:flex flex-col w-64 border-r border-border bg-white/40 backdrop-blur-sm">
          <nav className="py-6 px-3 flex-1">
            <ul className="space-y-1">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className={`flex items-center px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
                      item.active 
                        ? 'bg-primary text-primary-foreground' 
                        : 'text-muted-foreground hover:bg-secondary hover:text-foreground'
                    }`}
                  >
                    {item.icon}
                    <span className="ml-3">{item.label}</span>
                    {item.active && (
                      <span className="ml-auto h-1.5 w-1.5 rounded-full bg-white"></span>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          
          <div className="p-4 border-t border-border">
            <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-secondary transition-colors cursor-pointer">
              <div className="p-2 rounded-md bg-secondary">
                <Settings size={18} className="text-muted-foreground" />
              </div>
              <div>
                <p className="text-sm font-medium">Settings</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-secondary transition-colors cursor-pointer mt-1">
              <div className="p-2 rounded-md bg-secondary">
                <LifeBuoy size={18} className="text-muted-foreground" />
              </div>
              <div>
                <p className="text-sm font-medium">Help & Support</p>
              </div>
            </div>
          </div>
        </aside>
        
        {/* Main content */}
        <main className="flex-1 overflow-x-hidden">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
