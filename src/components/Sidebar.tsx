import { Calendar, Users, AlertCircle, MapPin } from 'lucide-react';

interface SidebarProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

const Sidebar = ({ activeSection, onNavigate }: SidebarProps) => {
  const navItems = [
    { id: 'today', label: "Today's Plan", icon: MapPin },
    { id: 'itinerary', label: 'Full Itinerary', icon: Calendar },
    { id: 'contacts', label: 'Contacts', icon: Users },
    { id: 'emergency', label: 'Emergency', icon: AlertCircle },
  ];

  return (
    <div className="w-64 bg-slate-900 text-white h-screen fixed left-0 top-0 flex flex-col">
      <div className="p-6 border-b border-slate-700">
        <h1 className="text-xl font-bold">Trip Companion</h1>
        <p className="text-slate-400 text-sm mt-1">Tour Execution Dashboard</p>
      </div>

      <nav className="flex-1 p-4">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;

          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg mb-2 transition-all ${
                isActive
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'text-slate-300 hover:bg-slate-800 hover:text-white'
              }`}
            >
              <Icon size={20} />
              <span className="font-medium">{item.label}</span>
            </button>
          );
        })}
      </nav>

      <div className="p-4 border-t border-slate-700 text-center text-slate-500 text-xs">
        <p>Need help? Contact support</p>
      </div>
    </div>
  );
};

export default Sidebar;
