import { useState, useEffect } from 'react';

const BudgetManagement = () => {
  const [budgets, setBudgets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [newBudget, setNewBudget] = useState({ 
    amount: '', 
    category: '', 
    duration: 30 // Default 30 days
  });

  useEffect(() => {
    fetchBudgets();
  }, []);

  const fetchBudgets = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/budgets', {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        }
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        setError(errorData.message);
        return;
      }
      
      const data = await response.json();
      setBudgets(data);
    } catch (err) {
      setError(err.message);
      console.error('Error fetching budgets:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleBudgetChange = (e) => {
    const { name, value } = e.target;
    setNewBudget(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/budgets', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify(newBudget),
      });

      if (!response.ok) {
        const errorData = await response.json();
        setError(errorData.message);
        return
      }

      const data = await response.json();
      setBudgets(prev => [...prev, data]);
      setNewBudget({ amount: '', category: '', duration: 30 });
      fetchBudgets(); // Refresh budgets list
    } catch (err) {
      setError(err.message);
    }
  };

  const deleteBudget = async (budgetId) => {
    try {
      const response = await fetch(`http://localhost:5000/api/budgets/${budgetId}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
      });

      if (!response.ok) {
        const errorData = await response.json();
        setError(errorData.message || 'Failed to delete budget');
        return;
      }

      setBudgets(prev => prev.filter(budget => budget.id !== budgetId));
    } catch (err) {
      console.error('Failed to delete budget:', err);
      setError(err.message);
    }
  };

  if (loading) return <div className="text-center py-4">Loading...</div>;
  if (error) return <div className="text-red-500 text-center py-4">Error: {error}</div>;

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-900">Budget Management</h2>
      </div>

      <form onSubmit={handleSubmit} className="mb-6 space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Category</label>
          <input
            type="text"
            name="category"
            value={newBudget.category}
            onChange={handleBudgetChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm h-10 "
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Amount</label>
          <input
            type="number"
            name="amount"
            value={newBudget.amount}
            onChange={handleBudgetChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm h-10"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Duration (days)</label>
          <input
            type="number"
            name="duration"
            value={newBudget.duration}
            onChange={handleBudgetChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm h-10"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Budget Limit</label>
          <input
            type="number"
            name="budget_limit"
            value={newBudget.budget_limit}
            onChange={handleBudgetChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm h-10"
            required
          />
        </div>

        <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
          Set Budget
        </button>
      </form>

      <div className="space-y-4">
        {budgets.map((budget) => (
          <div key={budget.id} className="bg-gray-50 rounded-lg p-4">
            <div className="flex justify-between items-center mb-2">
              <div>
                <h3 className="font-medium text-gray-900">{budget.category}</h3>
                <p className="text-sm text-gray-500">
                  Duration: {budget.duration} days
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-500">
                  ${budget.spent || 0} / ${budget.amount}
                </span>
                <button
                  onClick={() => deleteBudget(budget.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  Delete
                </button>
              </div>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div
                className={`h-2.5 rounded-full ${
                  (budget.spent / budget.amount) * 100 >= 90
                    ? 'bg-red-500'
                    : (budget.spent / budget.amount) * 100 >= 70
                    ? 'bg-yellow-500'
                    : 'bg-green-500'
                }`}
                style={{ width: `${(budget.spent / budget.amount) * 100}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BudgetManagement;