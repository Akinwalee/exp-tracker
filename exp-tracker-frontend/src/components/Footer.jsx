import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-50">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1">
            <span className="text-xl font-bold text-primary">Expense Tracker</span>
            <p className="mt-2 text-sm text-gray-500">
              Take control of your financial future
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Product</h3>
            <div className="mt-4 space-y-4">
              <Link to="/features" className="text-base text-gray-500 hover:text-gray-900 block">Features</Link>
              <Link to="/pricing" className="text-base text-gray-500 hover:text-gray-900 block">Pricing</Link>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Company</h3>
            <div className="mt-4 space-y-4">
              <Link to="/" className="text-base text-gray-500 hover:text-gray-900 block">About</Link>
              <Link to="/" className="text-base text-gray-500 hover:text-gray-900 block">Contact</Link>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Legal</h3>
            <div className="mt-4 space-y-4">
              <Link to="/" className="text-base text-gray-500 hover:text-gray-900 block">Privacy</Link>
              <Link to="/" className="text-base text-gray-500 hover:text-gray-900 block">Terms</Link>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-8">
          <p className="text-base text-gray-400 text-center">
            © 2024 Expense Tracker. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;