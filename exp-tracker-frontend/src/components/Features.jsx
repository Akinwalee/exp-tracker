import React from 'react';
import { 
  ChartBarIcon, 
  CreditCardIcon,
  WalletIcon
} from '@heroicons/react/24/outline';

const features = [
  {
    icon: ChartBarIcon,
    title: 'Expense Tracking',
    description: 'Automatically categorize and track your expenses in real-time.'
  },
  {
    icon: CreditCardIcon,
    title: 'Budget Management',
    description: 'Set and monitor budget limits across different categories.'
  },
  {
    icon: WalletIcon,
    title: 'Savings Goals',
    description: 'Create and track savings goals with automated insights.'
  }
];

const FeatureSection = () => {
  return (
    <div className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Powerful Features for Financial Control
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6 bg-white rounded-lg mx-10 shadow-md">
              <feature.icon className="mx-auto h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-500">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;