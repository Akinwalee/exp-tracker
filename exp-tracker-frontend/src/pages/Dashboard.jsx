// import { useEffect } from 'react';
// import { useAuth } from '../contexts/AuthContext';
// import { useNavigate } from 'react-router-dom';
import Navbar from '../components/NavBar';
import Overview from '../components/Overview';
import Transactions from '../components/Transactions';
import Savings from '../components/Savings';
import BudgetManagement from '../components/BudgetManagement';
import ProtectedRoute from '../components/ProtectedRoute';

const Dashboard = () => {
  // const { user } = useAuth(); // Access the user state from AuthContext
  // const navigate = useNavigate();

  // useEffect(() => {
  //   if (!user) {
  //     navigate('/signin'); // Redirect non-logged-in users to sign-in page
  //   }
  // }, [user, navigate]);

  return (
    <ProtectedRoute> 
      <div className="bg-background min-h-screen">
        <Navbar />
        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-5">Dashboard</h1>
          <Overview />
          <Transactions />
          <Savings />
          <BudgetManagement />
        </div>
      </div>
    </ProtectedRoute>
  );
};

export default Dashboard;
