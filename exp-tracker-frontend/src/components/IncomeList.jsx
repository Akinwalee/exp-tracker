import { useEffect, useState } from 'react';

const IncomeList = () => {
  const [incomes, setIncomes] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchIncomes = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/income', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
          },
        });

        const data = await response.json();
        if (data.success) {
          setIncomes(data.incomes);
        } else {
          setError(data.error || 'Failed to fetch incomes');
        }
      } catch (error) {
        setError('An error occurred while fetching incomes');
        console.error('Could not fetch incomes:', error);
      }
    };

    fetchIncomes();
  }, []);

  return (
    <div className="max-w-2xl mx-auto mt-8 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-3xl font-semibold text-gray-800 mb-6">Income List</h2>
      {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
      <ul className="space-y-4">
        {incomes.map((income) => (
          <li key={income.id} className="flex justify-between items-center p-4 bg-gray-100 rounded-lg shadow-sm">
            <span className="text-gray-700">{income.source}</span>
            <span className="font-bold text-green-600">${income.amount}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IncomeList;
