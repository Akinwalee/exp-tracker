import React from 'react';
import { Link } from 'react-router-dom';
import { RocketLaunchIcon } from '@heroicons/react/24/solid';

const HeroSection = () => {
  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
          Take Control of Your Finances
        </h1>
        <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          Track expenses, set budgets, and achieve your financial goals with our 
          intelligent expense management system.
        </p>
        <div className="mt-10 flex justify-center space-x-14">
          <Link 
            to="/signup" 
            className="flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-blue-100 hover:text-primary md:py-4 md:text-lg md:px-10"
          >
            Get Started
            <RocketLaunchIcon className="ml-2 h-5 w-5" />
          </Link>
          <Link 
            to="/features" 
            className="flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-primary bg-blue-100 hover:bg-primary hover:text-white  md:py-4 md:text-lg md:px-10"
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;