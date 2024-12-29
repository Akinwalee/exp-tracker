import React from 'react';

const transactions = [
  { id: 1, date: '2024-03-15', description: 'Grocery Shopping', amount: -120, category: 'Food' },
  { id: 2, date: '2024-03-14', description: 'Salary Deposit', amount: 3000, category: 'Income' },
  { id: 3, date: '2024-03-13', description: 'Electric Bill', amount: -85, category: 'Utilities' },
];

const Transactions = () => {
  return (
    <div className="bg-white shadow rounded-lg p-6 mb-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-900">Recent Transactions</h2>
        <button className="px-4 py-2 bg-primary text-white rounded-md hover:bg-blue-700">
          Add Transaction
        </button>
      </div>
      
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {transactions.map((transaction) => (
              <tr key={transaction.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{transaction.date}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{transaction.description}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{transaction.category}</td>
                <td className={`px-6 py-4 whitespace-nowrap text-sm ${transaction.amount >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                  ${Math.abs(transaction.amount)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Transactions;