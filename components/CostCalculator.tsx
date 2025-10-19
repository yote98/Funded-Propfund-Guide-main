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
  const [monthlyProfit, setMonthlyProfit] = useState(0);

  const calculateCosts = () => {
    const evaluationCost = minStartingCost;
    
    // Calculate profit split correctly (trader gets profitSplit%, firm gets the rest)
    const traderProfit = (monthlyProfit * profitSplit) / 100;
    const firmProfitShare = monthlyProfit - traderProfit;
    
    // Calculate annual profits
    const annualTraderProfit = traderProfit * 12;
    const annualFirmProfit = firmProfitShare * 12;
    
    // Calculate ROI: (Annual Trader Profit - Evaluation Cost) / Evaluation Cost x 100
    const netAnnualProfit = annualTraderProfit - evaluationCost;
    const roi = evaluationCost > 0 ? (netAnnualProfit / evaluationCost) * 100 : 0;
    
    // Calculate profit percentage of account size
    const monthlyProfitPercentage = accountSize > 0 ? (monthlyProfit / accountSize) * 100 : 0;

    return {
      evaluationCost,
      traderProfit,
      firmProfitShare,
      annualTraderProfit,
      annualFirmProfit,
      roi,
      monthlyProfitPercentage
    };
  };

  const costs = calculateCosts();

  return (
    <div className="bg-white border border-slate-200 rounded-lg p-3">
      <div className="flex items-center gap-2 mb-3">
        <img
          src="/images/icons/calculator-3d.png"
          alt="Cost Calculator"
          className="w-5 h-5 drop-shadow"
          draggable={false}
        />
        <h3 className="text-base font-semibold text-slate-900">Cost Calculator</h3>
      </div>
      
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
            value={monthlyProfit === 0 ? '' : monthlyProfit}
            onChange={(e) => {
              const value = e.target.value === '' ? 0 : Math.max(0, Number(e.target.value));
              setMonthlyProfit(value);
            }}
            onFocus={(e) => {
              if (e.target.value === '0' || e.target.value === '') {
                e.target.select();
              }
            }}
            className="w-full p-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
            placeholder="Enter monthly profit target"
          />
        </div>

        {/* CTA: Estimate ROI */}
        <div className="pt-1">
          <button
            type="button"
            onClick={() => {/* calculations are live; button provided as clear CTA */}}
            className={`inline-flex items-center justify-center w-full px-3 py-2 rounded-md text-sm font-semibold shadow-sm transition-all duration-200 ${monthlyProfit > 0 ? 'bg-gradient-to-r from-teal-500 to-slate-900 text-white hover:from-teal-600 hover:to-slate-800' : 'bg-slate-200 text-slate-500 cursor-not-allowed'}`}
            disabled={monthlyProfit === 0}
            aria-disabled={monthlyProfit === 0}
          >
            <img
              src="/images/icons/calculator-3d.png"
              alt="Estimate ROI"
              className="w-4 h-4 mr-2 drop-shadow"
              draggable={false}
            />
            Estimate ROI
          </button>
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
