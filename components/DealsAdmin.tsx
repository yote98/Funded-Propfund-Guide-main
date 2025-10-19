import React, { useState } from 'react';
import { Deal, currentDeals } from '../services/dealsData';

const DealsAdmin: React.FC = () => {
  const [deals, setDeals] = useState<Deal[]>(currentDeals);
  const [editingDeal, setEditingDeal] = useState<Deal | null>(null);

  const handleEditDeal = (deal: Deal) => {
    setEditingDeal(deal);
  };

  const handleSaveDeal = () => {
    if (editingDeal) {
      const updatedDeals = deals.map(d => 
        d.firmId === editingDeal.firmId ? editingDeal : d
      );
      setDeals(updatedDeals);
      setEditingDeal(null);

      // Here you would typically also save to a backend or file
      console.log('Updated Deals:', updatedDeals);
    }
  };

  return (
    <div className="container mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-slate-900">Deals Management</h2>
      
      <div className="space-y-4">
        {deals.map(deal => (
          <div 
            key={deal.firmId} 
            className="border border-slate-200 rounded-lg p-4 flex justify-between items-center hover:bg-slate-50 transition-colors"
          >
            <div>
              <h3 className="font-semibold text-slate-900">{deal.title}</h3>
              <p className="text-slate-600">{deal.description}</p>
              <div className="mt-2 space-x-2">
                <span className="bg-teal-100 text-teal-800 px-2 py-1 rounded text-sm">
                  {deal.discount}
                </span>
                <span className="text-slate-500 text-sm">
                  Valid until: {deal.validUntil || 'No expiration'}
                </span>
              </div>
            </div>
            <button 
              onClick={() => handleEditDeal(deal)}
              className="bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-600 transition-colors"
            >
              Edit
            </button>
          </div>
        ))}
      </div>

      {editingDeal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-xl w-96">
            <h3 className="text-xl font-bold mb-4 text-slate-900">Edit Deal</h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-slate-700 mb-2">Title</label>
                <input 
                  type="text" 
                  value={editingDeal.title}
                  onChange={(e) => setEditingDeal({...editingDeal, title: e.target.value})}
                  className="w-full border border-slate-300 rounded-lg p-2"
                />
              </div>
              
              <div>
                <label className="block text-slate-700 mb-2">Description</label>
                <textarea 
                  value={editingDeal.description}
                  onChange={(e) => setEditingDeal({...editingDeal, description: e.target.value})}
                  className="w-full border border-slate-300 rounded-lg p-2"
                />
              </div>
              
              <div>
                <label className="block text-slate-700 mb-2">Discount</label>
                <input 
                  type="text" 
                  value={editingDeal.discount}
                  onChange={(e) => setEditingDeal({...editingDeal, discount: e.target.value})}
                  className="w-full border border-slate-300 rounded-lg p-2"
                />
              </div>
              
              <div>
                <label className="block text-slate-700 mb-2">Valid Until</label>
                <input 
                  type="date" 
                  value={editingDeal.validUntil || ''}
                  onChange={(e) => setEditingDeal({...editingDeal, validUntil: e.target.value})}
                  className="w-full border border-slate-300 rounded-lg p-2"
                />
              </div>
              
              <div className="flex space-x-4">
                <button 
                  onClick={handleSaveDeal}
                  className="flex-1 bg-teal-500 text-white py-2 rounded hover:bg-teal-600 transition-colors"
                >
                  Save Changes
                </button>
                <button 
                  onClick={() => setEditingDeal(null)}
                  className="flex-1 bg-slate-200 text-slate-800 py-2 rounded hover:bg-slate-300 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DealsAdmin;
