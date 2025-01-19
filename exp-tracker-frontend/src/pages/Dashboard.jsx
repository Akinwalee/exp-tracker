import { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Overview from '../components/Overview';
import Savings from '../components/Savings';
import BudgetManagement from '../components/BudgetManagement';
import ProtectedRoute from '../components/ProtectedRoute';
import AddIncome from '../components/AddIncome';
import IncomeList from '../components/IncomeList';
import Navbar from '../components/NavBar';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('overview'); // Default active tab

  return (
    <ProtectedRoute>
      <Navbar />
      <div className="flex bg-background min-h-screen">
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        <div className="w-3/4 p-4">
          {/* <h1 className="text-3xl font-bold text-gray-900 mb-5">Dashboard</h1> */}
          {activeTab === 'overview' && <Overview />}
          {activeTab === 'income' && <><IncomeList /><AddIncome /></>}
          {activeTab === 'savings' && <Savings />}
          {activeTab === 'budgets' && <BudgetManagement />}
        </div>
      </div>
    </ProtectedRoute>
  );
};

export default Dashboard;