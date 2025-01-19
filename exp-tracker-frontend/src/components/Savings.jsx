import React, { useState, useEffect } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const initialSavingsGoals = JSON.parse(localStorage.getItem('savingsGoals')) || [
  { id: 1, name: 'Emergency Fund', current: 5000, target: 10000, deadline: '2024-12-31' },
  { id: 2, name: 'Vacation', current: 2000, target: 3000, deadline: '2024-06-30' },
  { id: 3, name: 'New Car', current: 15000, target: 30000, deadline: '2025-12-31' },
];

const Savings = () => {
  const [savingsGoals, setSavingsGoals] = useState(initialSavingsGoals);
  const [showForm, setShowForm] = useState(false);
  const [newGoal, setNewGoal] = useState({
    name: '',
    current: '',
    target: '',
    deadline: '',
  });

  useEffect(() => {
    localStorage.setItem('savingsGoals', JSON.stringify(savingsGoals));
  }, [savingsGoals]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewGoal({ ...newGoal, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newId = savingsGoals.length ? savingsGoals[savingsGoals.length - 1].id + 1 : 1;
    const goalToAdd = { ...newGoal, id: newId, current: parseFloat(newGoal.current), target: parseFloat(newGoal.target) };
    setSavingsGoals([...savingsGoals, goalToAdd]);
    setShowForm(false);
    setNewGoal({ name: '', current: '', target: '', deadline: '' });
  };

  return (
    <div className="bg-white shadow rounded-lg p-6 mb-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-900">Savings Goals</h2>
        <button
          className="px-4 py-2 bg-primary text-white rounded-md hover:bg-blue-700"
          onClick={() => setShowForm(!showForm)}
        >
          {showForm ? 'Cancel' : 'Add Goal'}
        </button>
      </div>

      {showForm && (
        <form onSubmit={handleSubmit} className="mb-4">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <input
              type="text"
              name="name"
              value={newGoal.name}
              onChange={handleInputChange}
              placeholder="Goal Name"
              className="px-4 py-2 border rounded-md"
              required
            />
            <input
              type="number"
              name="current"
              value={newGoal.current}
              onChange={handleInputChange}
              placeholder="Current Amount"
              className="px-4 py-2 border rounded-md"
              required
            />
            <input
              type="number"
              name="target"
              value={newGoal.target}
              onChange={handleInputChange}
              placeholder="Target Amount"
              className="px-4 py-2 border rounded-md"
              required
            />
            <input
              type="date"
              name="deadline"
              value={newGoal.deadline}
              onChange={handleInputChange}
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

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {savingsGoals.map((goal) => (
          <div key={goal.id} className="bg-gray-100 p-4 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-gray-900">{goal.name}</h3>
            <div className="my-4">
              <CircularProgressbar
                value={(goal.current / goal.target) * 100}
                text={`${((goal.current / goal.target) * 100).toFixed(1)}%`}
                styles={buildStyles({
                  textSize: '16px',
                  pathColor: `rgba(62, 152, 199, ${(goal.current / goal.target) * 100 / 100})`,
                  textColor: '#3e98c7',
                  trailColor: '#d6d6d6',
                })}
              />
            </div>
            <p className="text-sm text-gray-600">Current: ${goal.current}</p>
            <p className="text-sm text-gray-600">Target: ${goal.target}</p>
            <p className="text-sm text-gray-600">Deadline: {goal.deadline}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Savings;