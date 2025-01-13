import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useAuth(); // Access the user state from AuthContext

  return (
    <nav className="sticky top-0 bg-gray-50 shadow-sm cursor-pointer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-xl font-bold text-primary">Expense Tracker</span>
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden sm:flex sm:items-center sm:space-x-8">
            <div className="flex items-center space-x-12 mr-5 sm:ml-6">
            <Link to="/" className="text-gray-500 hover:text-gray-900">Home</Link>
            <Link to="/" className="text-gray-500 hover:text-gray-900">Features</Link>
            <Link to="/" className="text-gray-500 hover:text-gray-900">Pricing</Link>
            </div>
            <div className="flex items-center space-x-4">
            {user ? (
              <Link to="/dashboard" className="text-gray-500 hover:text-gray-900">Dashboard</Link>
            ) : (
              <>
                <Link to="/signin" className="text-gray-500 hover:text-gray-900">Sign In</Link>
                <Link to="/signup" 
                  className="bg-primary text-white px-4 py-2 rounded-md hover:text-gray-100 hover:bg-blue-700"
                >
                  Sign Up
                </Link>
              </>
            )}
            </div>
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
          <div className=" pt-2 pb-3 space-y-1">
            <Link to="/" className="block px-3 py-2 text-gray-500 hover:text-gray-900 hover:bg-gray-200">Home</Link>
            <Link to="/" className="block px-3 py-2 text-gray-500 hover:text-gray-900 hover:bg-gray-200">Features</Link>
            <Link to="/" className="block px-3 py-2 text-gray-500 hover:text-gray-900 hover:bg-gray-200">Pricing</Link>
            {user ? (
              <Link to="/dashboard" className="block px-3 py-2 text-gray-500 hover:text-gray-900">Dashboard</Link>
            ) : (
              <>
                <Link to="/signin" className="block px-3 py-2 text-gray-500 hover:text-gray-900 hover:bg-gray-200">Sign In</Link>
                <Link to="/signup" className="block px-3 py-2 text-gray-500 hover:text-gray-900 hover:bg-gray-200">Sign Up</Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
