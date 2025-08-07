import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import TreeViewMenu from './TreeViewMenu';

const MenusForm = () => {
  const [selectedSystem, setSelectedSystem] = useState('system management');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [menuId, setMenuId] = useState('56320ee9-6af6-11ed-a7ba-f220afe5e4a9');
  const [depth, setDepth] = useState('3');
  const [parentData, setParentData] = useState('Systems');
  const [name, setName] = useState('System Code');

  const systemOptions = [
    'system management',
    'user management',
    'content management',
    'api management'
  ];

  const handleSave = () => {
    console.log('Form data:', {
      selectedSystem,
      menuId,
      depth,
      parentData,
      name
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="space-y-6">
        {/* Form Fields Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Column */}
          <div className="space-y-4">
            {/* Menu Dropdown - Moved to Left Column */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Menu
              </label>
              <div className="relative">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="w-full bg-gray-100 border border-gray-200 rounded-lg px-4 py-3 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <span className="text-gray-700">{selectedSystem}</span>
                  <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                {isDropdownOpen && (
                  <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                    {systemOptions.map((option) => (
                      <button
                        key={option}
                        onClick={() => {
                          setSelectedSystem(option);
                          setIsDropdownOpen(false);
                        }}
                        className="w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors first:rounded-t-lg last:rounded-b-lg"
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-3">
              <button className="bg-gray-800 text-white px-6 py-2 rounded-lg hover:bg-gray-700 transition-colors font-medium">
                Expand All
              </button>
              <button className="bg-gray-200 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-300 transition-colors font-medium">
                Collapse All
              </button>
            </div>

            {/* Tree View Menu */}
            <div>
              <TreeViewMenu />
            </div>
            {/* End - Tree View Menu */}
          </div>

          {/* Right Column */}
          <div className="space-y-4">
            <div className="mt-36">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Menu ID
              </label>
              <input
                type="text"
                value={menuId}
                onChange={(e) => setMenuId(e.target.value)}
                className="w-full bg-gray-100 border border-gray-200 rounded-lg px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                readOnly
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Depth
              </label>
              <input
                type="text"
                value={depth}
                onChange={(e) => setDepth(e.target.value)}
                className="w-full bg-gray-100 border border-gray-200 rounded-lg px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Parent Data
              </label>
              <input
                type="text"
                value={parentData}
                onChange={(e) => setParentData(e.target.value)}
                className="w-full bg-gray-100 border border-gray-200 rounded-lg px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-gray-100 border border-gray-200 rounded-lg px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div className="flex justify-center">
              <button
                onClick={handleSave}
                className="bg-blue-600 text-white px-12 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium text-lg"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenusForm;