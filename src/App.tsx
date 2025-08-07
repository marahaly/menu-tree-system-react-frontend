import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import MenusForm from './components/MenusForm';

function App() {
  const [activeItem, setActiveItem] = useState('menus');
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const handleItemClick = (item: string) => {
    setActiveItem(item);
  };

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  const getPageContent = () => {
    switch (activeItem) {
      case 'systems':
        return {
          title: 'Systems',
          breadcrumb: 'Systems',
          content: 'Systems management content goes here...'
        };
      case 'system-code':
        return {
          title: 'System Code',
          breadcrumb: 'System Code',
          content: 'System code configuration content goes here...'
        };
      case 'properties':
        return {
          title: 'Properties',
          breadcrumb: 'Properties',
          content: 'Properties management content goes here...'
        };
      case 'menus':
        return {
          title: 'Menus',
          breadcrumb: 'Menus',
          content: null
        };
      case 'api-list':
        return {
          title: 'API List',
          breadcrumb: 'API List',
          content: 'API list management content goes here...'
        };
      case 'users-group':
        return {
          title: 'Users & Group',
          breadcrumb: 'Users & Group',
          content: 'Users and group management content goes here...'
        };
      case 'competition':
        return {
          title: 'Competition',
          breadcrumb: 'Competition',
          content: 'Competition management content goes here...'
        };
      default:
        return {
          title: 'Menus',
          breadcrumb: 'Menus',
          content: 'Menu management content goes here...'
        };
    }
  };

  const { title, breadcrumb, content } = getPageContent();

  return (
    <div className="p-5 min-h-screen bg-white">
      <div className="flex min-h-[calc(100vh-2.5rem)] bg-white rounded-lg shadow-sm overflow-hidden">
      <Sidebar 
        activeItem={activeItem} 
        onItemClick={handleItemClick} 
          isCollapsed={isSidebarCollapsed}
          onToggle={toggleSidebar}
      />
        <div className="flex-1 bg-white">
        <Header title={title} breadcrumb={breadcrumb} />
        
        {/* Main Content Area */}
        <div className="p-6">
          {activeItem === 'menus' ? (
            <MenusForm />
          ) : (
            <div className="bg-gray-50 rounded-lg shadow-sm p-6">
            <p className="text-gray-600">{content}</p>
          </div>
          )}
        </div>
      </div>
      </div>
    </div>
  );
}

export default App;