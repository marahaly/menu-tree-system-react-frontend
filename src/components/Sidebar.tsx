import React from 'react';
import { 
  Menu, 
  Folder, 
  Grid3X3, 
  Settings, 
  List, 
  Users, 
  Trophy 
} from 'lucide-react';

interface SidebarProps {
  activeItem: string;
  onItemClick: (item: string) => void;
  isCollapsed: boolean;
  onToggle: () => void;
}

const Sidebar = ({ activeItem, onItemClick, isCollapsed, onToggle }: SidebarProps) => {
  const menuItems = [
    { id: 'systems', label: 'Systems', icon: Folder },
    { id: 'system-code', label: 'System Code', icon: Grid3X3 },
    { id: 'properties', label: 'Properties', icon: Grid3X3 },
    { id: 'menus', label: 'Menus', icon: Grid3X3 },
    { id: 'api-list', label: 'API List', icon: List },
    { id: 'users-group', label: 'Users & Group', icon: Users },
    { id: 'competition', label: 'Competition', icon: Trophy },
  ];

  return (
    <div className={`${isCollapsed ? 'w-16' : 'w-64'} bg-blue-600 min-h-screen text-white transition-all duration-300 rounded-lg`}>
      {/* Header */}
      <div className="p-4">
        <div className="flex items-center justify-between">
          {!isCollapsed && (
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-white rounded grid grid-cols-3 gap-1 p-1">
                {[...Array(9)].map((_, idx) => (
                  <div key={idx} className="bg-blue-600 rounded-sm"></div>
                ))}
              </div>
              <div className="text-sm font-medium whitespace-nowrap">
                <div>Setup</div>
                <div>Manager</div>
                <div>System</div>
              </div>
            </div>
          )}
          <button 
            onClick={onToggle}
            className={`hover:bg-blue-500 p-1 rounded transition-colors duration-200 ${isCollapsed ? 'mx-auto' : ''}`}
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Navigation Items */}
      <nav className="p-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeItem === item.id;

          return (
            <button
              key={item.id}
              onClick={() => onItemClick(item.id)}
              className={`w-full flex items-center ${isCollapsed ? 'justify-center px-3' : 'space-x-3 px-3'} py-2.5 rounded-lg text-left transition-colors duration-200 ${
                isActive 
                  ? 'bg-white text-blue-600 font-medium' 
                  : 'text-white hover:bg-blue-500'
              }`}
              title={isCollapsed ? item.label : undefined}
            >
              <Icon className="w-5 h-5" />
              {!isCollapsed && <span className="text-sm">{item.label}</span>}
            </button>
          );
        })}
      </nav>
    </div>
  );
};

export default Sidebar;