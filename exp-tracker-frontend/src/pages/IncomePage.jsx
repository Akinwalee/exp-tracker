import Navbar from '../components/NavBar';
import AddIncome from '../components/AddIncome';
import IncomeList from '../components/IncomeList';
import ProtectedRoute from '../components/ProtectedRoute';

const IncomePage = () => {
  return (
    <ProtectedRoute>
      <div className="bg-background min-h-screen">
        <Navbar />
        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-5">Manage Income</h1>
          <AddIncome />
          <IncomeList />
        </div>
      </div>
    </ProtectedRoute>
  );
};

export default IncomePage;
