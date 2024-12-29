import React from 'react';

const budgets = [
  { id: 1, category: 'Food & Dining', allocated: 500, spent: 320 },
  { id: 2, category: 'Transportation', allocated: 300, spent: 250 },
  { id: 3, category: 'Entertainment', allocated: 200, spent: 180 },
  { id: 4, category: 'Utilities', allocated: 400, spent: 380 },
];

const BudgetManagement = () => {
  return (
    <div className="bg-white shadow rounded-lg p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-900">Budget Management</h2>
        <button className="px-4 py-2 bg-primary text-white rounded-md hover:bg-blue-700">
          Set Budget
        </button>
      </div>

      <div className="space-y-4">
        {budgets.map((budget) => {
          const percentage = (budget.spent / budget.allocated) * 100;
          const status = percentage >= 90 ? 'bg-red-500' : percentage >= 70 ? 'bg-yellow-500' : 'bg-green-500';

          return (
            <div key={budget.id} className="bg-gray-50 rounded-lg p-4">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-medium text-gray-900">{budget.category}</h3>
                <span className="text-sm text-gray-500">
                  ${budget.spent} / ${budget.allocated}
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className={`h-2.5 rounded-full ${status}`}
                  style={{ width: `${percentage}%` }}
                ></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BudgetManagement;