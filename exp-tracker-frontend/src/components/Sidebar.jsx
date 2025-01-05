
// eslint-disable-next-line react/prop-types
const Sidebar = ({ activeTab, setActiveTab }) => {
  return (
    <div className="w-1/4 bg-gray-200 p-4">
      <h2 className="text-xl font-bold mb-4">Dashboard</h2>
      <nav className="space-y-2">
        <button  
          onClick={() => setActiveTab('overview')}
          className={`w-full text-left p-2 rounded-md ${
            activeTab === 'overview' ? 'bg-black text-white' : 'hover:bg-gray-100'
          }`}
        >
          Overview
        </button>
        <button  
          onClick={() => setActiveTab('income')}
          className={`w-full text-left p-2 rounded-md ${
            activeTab === 'income' ? 'bg-black text-white' : 'hover:bg-gray-100'
          }`}
        >
          Income
        </button>
        <button  
          onClick={() => setActiveTab('savings')}
          className={`w-full text-left p-2 rounded-md ${
            activeTab === 'savings' ? 'bg-black text-white' : 'hover:bg-gray-100'
          }`}
        >
          Savings
        </button>
        <button  
          onClick={() => setActiveTab('budgets')}
          className={`w-full text-left p-2 rounded-md ${
            activeTab === 'budgets' ? 'bg-black text-white' : 'hover:bg-gray-100'
          }`}
        >
          Budgets
        </button>
      </nav>
    </div>
  );
};

export default Sidebar;
