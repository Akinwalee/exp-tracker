import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const savingsGoals = [
  { id: 1, name: 'Emergency Fund', current: 5000, target: 10000, deadline: '2024-12-31' },
  { id: 2, name: 'Vacation', current: 2000, target: 3000, deadline: '2024-06-30' },
  { id: 3, name: 'New Car', current: 15000, target: 30000, deadline: '2025-12-31' },
];

const Savings = () => {
  return (
    <div className="bg-white shadow rounded-lg p-6 mb-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-900">Savings Goals</h2>
        <button className="px-4 py-2 bg-primary text-white rounded-md hover:bg-blue-700">
          Add Goal
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {savingsGoals.map((goal) => {
          const progress = (goal.current / goal.target) * 100;
          return (
            <div key={goal.id} className="bg-gray-50 rounded-lg p-4">
              <div className="w-24 h-24 mx-auto mb-4">
                <CircularProgressbar
                  value={progress}
                  text={`${progress.toFixed(0)}%`}
                  styles={buildStyles({
                    pathColor: `#3B82F6`,
                    textColor: '#1F2937',
                    trailColor: '#E5E7EB',
                  })}
                />
              </div>
              <h3 className="text-lg font-medium text-gray-900 text-center mb-2">{goal.name}</h3>
              <p className="text-sm text-gray-500 text-center">
                ${goal.current} / ${goal.target}
              </p>
              <p className="text-xs text-gray-400 text-center mt-1">
                Due by {goal.deadline}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Savings;