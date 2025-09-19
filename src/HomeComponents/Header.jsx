import React from 'react';

function Header() {
  return (
    <header className="bg-blue-700 shadow-md py-3 px-6">
      <div className="container mx-auto flex items-center justify-between">
        {/* Company Name */}
        <h1 className="text-xl md:text-2xl font-semibold text-white tracking-wide">
          Trans<span className="text-cyan-300">Chain</span>
        </h1>

        {/* Tagline */}
        <div className="text-right">
          <p className="text-blue-100 text-sm font-medium">Global Logistics Solutions</p>
          <p className="text-cyan-200 text-xs">Supply Chain Excellence</p>
        </div>
      </div>
    </header>
  );
}

export default Header;
