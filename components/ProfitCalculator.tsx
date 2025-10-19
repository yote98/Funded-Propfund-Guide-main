import React, { useState, useEffect } from 'react';
import type { PropFirm } from '../types';

interface ProfitCalculatorProps {
  firms: PropFirm[];
}

const ProfitCalculator: React.FC<ProfitCalculatorProps> = ({ firms }) => {
  const [accountSize, setAccountSize] = useState(10000);
  const [monthlyReturn, setMonthlyReturn] = useState(5);
  const [selectedFirm, setSelectedFirm] = useState<PropFirm | null>(null);

  const calculatePotentialEarnings = () => {
    if (!selectedFirm) return 0;

    const profitSplit = selectedFirm.details.profitSplit / 100;
    const monthlyProfit = accountSize * (monthlyReturn / 100);
    return monthlyProfit * profitSplit;
  };

  const topFirms = firms
    .filter(firm => firm.details.profitSplit > 70)
    .sort((a, b) => b.details.profitSplit - a.details.profitSplit);

  useEffect(() => {
    if (topFirms.length > 0 && !selectedFirm) {
      setSelectedFirm(topFirms[0]);
    }
  }, [topFirms, selectedFirm]);

  return (
    <div className="bg-white rounded-lg shadow-xl p-6 md:p-8 max-w-3xl mx-auto border border-slate-200">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {/* Account Size Input */}
        <div>
          <label htmlFor="accountSize" className="block text-sm font-medium text-slate-700 mb-2">
            Account Size
          </label>
          <input
            type="range"
            id="accountSize"
            min="5000"
            max="250000"
            step="1000"
            value={accountSize}
            onChange={(e) => setAccountSize(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-teal-500"
          />
          <p className="mt-2 text-lg font-semibold text-slate-900">
            ${accountSize.toLocaleString()}
          </p>
        </div>

        {/* Monthly Return Input */}
        <div>
          <label htmlFor="monthlyReturn" className="block text-sm font-medium text-slate-700 mb-2">
            Expected Monthly Return (%)
          </label>
          <input
            type="range"
            id="monthlyReturn"
            min="1"
            max="20"
            step="0.5"
            value={monthlyReturn}
            onChange={(e) => setMonthlyReturn(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-teal-500"
          />
          <p className="mt-2 text-lg font-semibold text-slate-900">
            {monthlyReturn}%
          </p>
        </div>

        {/* Prop Firm Selection */}
        <div>
          <label htmlFor="propFirm" className="block text-sm font-medium text-slate-700 mb-2">
            Select Prop Firm
          </label>
          <select
            id="propFirm"
            value={selectedFirm?.id || ''}
            onChange={(e) => setSelectedFirm(firms.find(f => f.id === e.target.value) || null)}
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm rounded-md shadow-sm"
          >
            {topFirms.map(firm => (
              <option key={firm.id} value={firm.id}>
                {firm.name} ({firm.details.profitSplit}% Split)
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Results Display */}
      <div className="bg-teal-50 border-l-4 border-teal-500 p-4 text-teal-800 rounded-lg shadow-inner">
        <h3 className="text-xl font-bold mb-2">Potential Monthly Earnings:</h3>
        <p className="text-3xl font-extrabold text-teal-700">
          ${calculatePotentialEarnings().toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
        </p>
        {selectedFirm && (
          <p className="text-sm mt-2">
            Based on a ${accountSize.toLocaleString()} account, {monthlyReturn}% monthly return, and {selectedFirm.details.profitSplit}% profit split with {selectedFirm.name}.
          </p>
        )}
      </div>

      <p className="text-xs text-slate-500 mt-6 text-center">
        Disclaimer: These calculations are estimates and do not guarantee actual trading results. Trading involves risk.
      </p>
    </div>
  );
};

export default ProfitCalculator;
