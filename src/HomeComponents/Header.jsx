import React from 'react';
import { TruckIcon, GlobeAltIcon } from '@heroicons/react/24/outline';

function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-800 to-blue-600 shadow-md py-4 px-6">
      <div className="container mx-auto flex items-center justify-between">
        {/* Minimalist Logo */}
        <div className="flex items-center">
          <div className="bg-white/10 p-2 rounded-lg mr-3 backdrop-blur-sm border border-white/20">
            <TruckIcon className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-white">
            Trans<span className="text-cyan-300">Chain</span>
          </h1>
        </div>

        {/* Headline */}
        <div className="hidden md:block text-right">
          <p className="text-blue-100 text-sm font-medium">Global Logistics Solutions</p>
          <p className="text-cyan-200 text-xs">Supply Chain Excellence</p>
        </div>
      </div>
    </header>
  );
}

export default Header;