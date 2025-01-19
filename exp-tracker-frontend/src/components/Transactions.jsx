import React, { useState, useEffect } from 'react';

const initialTransactions = JSON.parse(localStorage.getItem('transactions')) || [
  { id: 1, date: '2024-03-15', description: 'Grocery Shopping', amount: -120, category: 'Food' },
  { id: 2, date: '2024-03-14', description: 'Salary Deposit', amount: 3000, category: 'Income' },
  { id: 3, date: '2024-03-13', description: 'Electric Bill', amount: -85, category: 'Utilities' },
];

const Transactions = () => {
  const [transactions, setTransactions] = useState(initialTransactions);
  const [showForm, setShowForm] = useState(false);
  const [newTransaction, setNewTransaction] = useState({
    date: '',
    description: '',
    amount: '',
    category: '',
  });

  useEffect(() => {
    localStorage.setItem('transactions', JSON.stringify(transactions));
  }, [transactions]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTransaction({ ...newTransaction, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newId = transactions.length ? transactions[transactions.length - 1].id + 1 : 1;
    const transactionToAdd = { ...newTransaction, id: newId, amount: parseFloat(newTransaction.amount) };
    setTransactions([...transactions, transactionToAdd]);
    setShowForm(false);
    setNewTransaction({ date: '', description: '', amount: '', category: '' });
  };

  return (
    <div className="bg-white shadow rounded-lg p-6 mb-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-900">Recent Transactions</h2>
        <button
          className="px-4 py-2 bg-primary text-white rounded-md hover:bg-blue-700"
          onClick={() => setShowForm(!showForm)}
        >
          {showForm ? 'Cancel' : 'Add Transaction'}
        </button>
      </div>

      {showForm && (
        <form onSubmit={handleSubmit} className="mb-4">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <input
              type="date"
              name="date"
              value={newTransaction.date}
              onChange={handleInputChange}
              className="px-4 py-2 border rounded-md"
              required
            />
            <input
              type="text"
              name="description"
              value={newTransaction.description}
              onChange={handleInputChange}
              placeholder="Description"
              className="px-4 py-2 border rounded-md"
              required
            />
            <input
              type="number"
              name="amount"
              value={newTransaction.amount}
              onChange={handleInputChange}
              placeholder="Amount"
              className="px-4 py-2 border rounded-md"
              required
            />
            <input
              type="text"
              name="category"
              value={newTransaction.category}
              onChange={handleInputChange}
              placeholder="Category"
              className="px-4 py-2 border rounded-md"
              required
            />
          </div>
          <button
            type="submit"
            className="mt-4 px-4 py-2 bg-primary text-white rounded-md hover:bg-blue-700"
          >
            Add
          </button>
        </form>
      )}

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