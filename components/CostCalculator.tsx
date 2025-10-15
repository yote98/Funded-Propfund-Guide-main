import React, { useState } from 'react';

interface CostCalculatorProps {
  minStartingCost: number;
  profitSplit: number;
  maxFunding: number;
}

const CostCalculator: React.FC<CostCalculatorProps> = ({ 
  minStartingCost, 
  profitSplit, 
  maxFunding 
}) => {
  const [accountSize, setAccountSize] = useState(25000);
  const [monthlyProfit, setMonthlyProfit] = useState(1000);

  const calculateCosts = () => {
    const evaluationCost = minStartingCost;
    
    // Calculate profit split correctly
    const traderProfit = (monthlyProfit * profitSplit) / 100;
    const firmProfitShare = monthlyProfit - traderProfit;
    
    // Calculate annual profits
    const annualTraderProfit = traderProfit * 12;
    const annualFirmProfit = firmProfitShare * 12;
    
    // Calculate ROI based on evaluation cost vs annual trader profit
    const netAnnualProfit = annualTraderProfit - evaluationCost;
    const roi = evaluationCost > 0 ? (netAnnualProfit / evaluationCost) * 100 : 0;
    
    // Calculate profit percentage of account size
    const monthlyProfitPercentage = (monthlyProfit / accountSize) * 100;
    const annualProfitPercentage = monthlyProfitPercentage * 12;

    return {
      evaluationCost,
      traderProfit,
      firmProfitShare,
      annualTraderProfit,
      annualFirmProfit,
      roi,
      monthlyProfitPercentage,
      annualProfitPercentage
    };
  };

  const costs = calculateCosts();

  return (
    <div className="bg-white border border-slate-200 rounded-lg p-3">
      <h3 className="text-base font-semibold text-slate-900 mb-3">Cost Calculator</h3>
      
      <div className="space-y-3">
        <div>
          <label className="block text-xs font-medium text-slate-700 mb-1">
            Account Size
          </label>
          <select 
            value={accountSize} 
            onChange={(e) => setAccountSize(Number(e.target.value))}
            className="w-full p-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
          >
            <option value={10000}>$10,000</option>
            <option value={25000}>$25,000</option>
            <option value={50000}>$50,000</option>
            <option value={100000}>$100,000</option>
            <option value={200000}>$200,000</option>
            <option value={maxFunding}>${maxFunding.toLocaleString()}</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-medium text-slate-700 mb-1">
            Expected Monthly Profit
          </label>
          <input
            type="number"
            min="0"
            step="100"
            value={monthlyProfit}
            onChange={(e) => {
              const value = Math.max(0, Number(e.target.value));
              setMonthlyProfit(value);
            }}
            className="w-full p-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
            placeholder="Enter monthly profit target"
          />
        </div>

        <div className="bg-slate-50 rounded-lg p-3 space-y-2">
          <div className="flex justify-between">
            <span className="text-xs text-slate-600">Evaluation Cost:</span>
            <span className="text-sm font-semibold text-slate-900">${costs.evaluationCost.toLocaleString()}</span>
          </div>
          
          <div className="flex justify-between">
            <span className="text-xs text-slate-600">Account Size:</span>
            <span className="text-sm font-semibold text-slate-900">${accountSize.toLocaleString()}</span>
          </div>
          
          <div className="flex justify-between">
            <span className="text-xs text-slate-600">Monthly Profit Target:</span>
            <span className="text-sm font-semibold text-blue-600">${monthlyProfit.toLocaleString()}</span>
          </div>
          
          <div className="flex justify-between">
            <span className="text-xs text-slate-600">Your Monthly Share ({profitSplit}%):</span>
            <span className="text-sm font-semibold text-green-600">${costs.traderProfit.toLocaleString()}</span>
          </div>
          
          <div className="flex justify-between">
            <span className="text-xs text-slate-600">Firm's Share ({100-profitSplit}%):</span>
            <span className="text-sm font-semibold text-orange-600">${costs.firmProfitShare.toLocaleString()}</span>
          </div>
          
          <div className="flex justify-between">
            <span className="text-xs text-slate-600">Your Annual Profit:</span>
            <span className="text-sm font-semibold text-green-600">${costs.annualTraderProfit.toLocaleString()}</span>
          </div>
          
          <div className="flex justify-between">
            <span className="text-xs text-slate-600">Monthly Return:</span>
            <span className="text-sm font-semibold text-blue-600">{costs.monthlyProfitPercentage.toFixed(2)}%</span>
          </div>
          
          <div className="flex justify-between border-t border-slate-200 pt-2">
            <span className="text-xs text-slate-600">Net Annual ROI:</span>
            <span className={`text-sm font-semibold ${costs.roi > 0 ? 'text-green-600' : 'text-red-600'}`}>
              {costs.roi > 0 ? '+' : ''}{costs.roi.toFixed(1)}%
            </span>
          </div>
        </div>

        <div className="text-xs text-slate-500 space-y-1">
          <div>* Calculations are estimates. Actual results may vary.</div>
          <div>* Typical monthly returns: 2-5% of account size.</div>
          <div>* ROI calculation: (Annual Trader Profit - Evaluation Cost) / Evaluation Cost × 100</div>
        </div>
      </div>
    </div>
  );
};

export default CostCalculator;
