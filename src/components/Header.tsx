import React from 'react';
import { Grid3X3 } from 'lucide-react';

interface HeaderProps {
  title: string;
  breadcrumb?: string;
}

const Header = ({ title, breadcrumb }: HeaderProps) => {
  return (
    <div className="bg-white">
      {/* Breadcrumb */}
      {breadcrumb && (
        <div className="px-6 py-3">
          <div className="flex items-center space-x-2 text-sm text-gray-500">
            <span>📁</span>
            <span>{breadcrumb}</span>
          </div>
        </div>
      )}

      {/* Page Title */}
      <div className="px-6 py-4">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
            <Grid3X3 className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-2xl font-semibold text-gray-900">{title}</h1>
        </div>
      </div>
    </div>
  );
};

export default Header;