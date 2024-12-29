import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-primary">Expense Tracker</span>
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden sm:flex sm:items-center sm:space-x-8">
            <Link to="/" className="text-gray-500 hover:text-gray-900">Home</Link>
            <Link to="/" className="text-gray-500 hover:text-gray-900">Features</Link>
            <Link to="/" className="text-gray-500 hover:text-gray-900">Pricing</Link>
            <Link to="/signin" className="text-gray-500 hover:text-gray-900">Sign In</Link>
            <Link to="/signup" 
              className="bg-primary text-white px-4 py-2 rounded-md hover:bg-blue-700"
            >
              Sign Up
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
            >
              {isOpen ? (
                <XMarkIcon className="block h-6 w-6" />
              ) : (
                <Bars3Icon className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="sm:hidden">
          <div className="pt-2 pb-3 space-y-1">
            <Link to="/" className="block px-3 py-2 text-gray-500 hover:text-gray-900">Home</Link>
            <Link to="/" className="block px-3 py-2 text-gray-500 hover:text-gray-900">Features</Link>
            <Link to="/" className="block px-3 py-2 text-gray-500 hover:text-gray-900">Pricing</Link>
            <Link to="/" className="block px-3 py-2 text-gray-500 hover:text-gray-900">Sign In</Link>
            <Link to="/" className="block px-3 py-2 text-gray-500 hover:text-gray-900">Sign Up</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;