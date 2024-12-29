import React from 'react';
import Navbar from '../components/NavBar';
import Overview from '../components/Overview';
// import Transactions from '../components/Transactions';
// import Savings from '../components/Savings';
// import BudgetManagement from '../components/dashboard/BudgetManagement';

const Dashboard = () => {
  return (
    <div className="bg-background min-h-screen">
      <Navbar />
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <Overview />
        {/* <Transactions />
        <Savings />
        <BudgetManagement /> */}
      </div>
    </div>
  );
};

export default Dashboard;