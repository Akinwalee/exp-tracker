import Transactions from "./Transactions";

const Overview = () => {
  return (
    <><div className="bg-white shadow rounded-lg p-6 mb-6">
      <h2 className="text-xl font-semibold text-gray-900">Overview</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4">
        <div className="bg-primary text-white p-4 rounded-lg">
          <h3 className="text-lg">Total Income</h3>
          <p className="text-2xl">$5,000</p>
        </div>
        <div className="bg-red-500 text-white p-4 rounded-lg">
          <h3 className="text-lg">Total Expenses</h3>
          <p className="text-2xl">$3,000</p>
        </div>
        <div className="bg-green-500 text-white p-4 rounded-lg">
          <h3 className="text-lg">Savings Progress</h3>
          <p className="text-2xl">$1,500</p>
        </div>
        <div className="bg-yellow-500 text-white p-4 rounded-lg">
          <h3 className="text-lg">Budget Utilization</h3>
          <p className="text-2xl">75%</p>
        </div>
      </div>
    </div><>
    <Transactions />
      </></>
  );
};

export default Overview;