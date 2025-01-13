import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-50">
      <div className="flex flex-col w-full container py-10 gap-10 px-8 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1">
            <span className="text-[20px] font-bold text-primary">Expense Tracker</span>
            <p className="mt-2 text-[11px] text-gray-500">
              Take control of your financial future
            </p>
          </div>

          <div className="grid grid-cols-3 p-2 md:grid-cols-3 gap-32 ">
          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-600 uppercase tracking-wider mb-3">Product</h3>
            <div className="text-[#29196C] text-sm flex flex-col gap-2">
              <Link to="/features" className="text-[12px] text-gray-500 hover:text-gray-900 block">Features</Link>
              <Link to="/pricing" className="text-[12px] text-gray-500 hover:text-gray-900 block">Pricing</Link>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-gray-600 uppercase tracking-wider mb-3">Company</h3>
            <div className="text-[#29196C] text-sm flex flex-col gap-2">
              <Link to="/" className="text-[12px] text-gray-500 hover:text-gray-900 block">About</Link>
              <Link to="/" className="text-[12px] text-gray-500 hover:text-gray-900 block">Contact</Link>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold text-gray-600 uppercase tracking-wider mb-3">Legal</h3>
            <div className="text-[#29196C] text-sm flex flex-col gap-2">
              <Link to="/" className="text-[12px] text-gray-500 hover:text-gray-900 block">Privacy</Link>
              <Link to="/" className="text-[12px] text-gray-500 hover:text-gray-900 block">Terms</Link>
            </div>
          </div>
          </div>
        </div>
        <div className="mt-8 border-t-2 border-gray-200 bg-gray-50 pt-8">
          <p className="text-base text-gray-400 text-center">
            © 2024 Expense Tracker. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;