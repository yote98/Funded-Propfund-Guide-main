import React, { useState } from 'react';

interface RiskAssessmentProps {
  maxDrawdown: number;
  dailyDrawdown: number;
  profitTarget: number;
  minTradingDays: number;
  accountSize: number;
}

const RiskAssessment: React.FC<RiskAssessmentProps> = ({
  maxDrawdown,
  dailyDrawdown,
  profitTarget,
  minTradingDays,
  accountSize
}) => {
  const [riskLevel, setRiskLevel] = useState<'Conservative' | 'Moderate' | 'Aggressive'>('Moderate');
  const [tradingStyle, setTradingStyle] = useState<'Scalping' | 'Day Trading' | 'Swing Trading' | 'Position Trading'>('Day Trading');
  const [experience, setExperience] = useState<'Beginner' | 'Intermediate' | 'Advanced'>('Intermediate');

  const calculateRiskScore = () => {
    let score = 0;
    
    // Account size factor
    if (accountSize >= 100000) score += 2;
    else if (accountSize >= 50000) score += 1;
    
    // Drawdown factor
    if (maxDrawdown <= 5) score += 3;
    else if (maxDrawdown <= 10) score += 2;
    else if (maxDrawdown <= 15) score += 1;
    
    // Daily drawdown factor
    if (dailyDrawdown <= 2) score += 3;
    else if (dailyDrawdown <= 5) score += 2;
    else if (dailyDrawdown <= 10) score += 1;
    
    // Trading style factor
    const styleRisk = {
      'Scalping': 3,
      'Day Trading': 2,
      'Swing Trading': 1,
      'Position Trading': 0
    };
    score += styleRisk[tradingStyle];
    
    // Experience factor
    const expRisk = {
      'Beginner': 2,
      'Intermediate': 1,
      'Advanced': 0
    };
    score += expRisk[experience];
    
    return Math.min(score, 10);
  };

  const getRiskLevel = (score: number) => {
    if (score <= 3) return { level: 'Low', color: 'text-green-600 bg-green-100', icon: '🟢' };
    if (score <= 6) return { level: 'Medium', color: 'text-yellow-600 bg-yellow-100', icon: '🟡' };
    return { level: 'High', color: 'text-red-600 bg-red-100', icon: '🔴' };
  };

  const getRiskRecommendations = (score: number) => {
    const recommendations = [];
    
    if (score >= 7) {
      recommendations.push('⚠️ High risk detected - consider reducing position sizes');
      recommendations.push('📚 Focus on risk management education');
      recommendations.push('🎯 Start with smaller account sizes');
    } else if (score >= 4) {
      recommendations.push('⚖️ Moderate risk - maintain strict risk management');
      recommendations.push('📊 Monitor your trades closely');
    } else {
      recommendations.push('✅ Low risk profile - suitable for this account size');
      recommendations.push('🚀 Consider scaling up gradually');
    }
    
    if (dailyDrawdown > 5) {
      recommendations.push('⚠️ High daily drawdown limit - be extra careful');
    }
    
    if (maxDrawdown > 10) {
      recommendations.push('⚠️ High max drawdown - consider more conservative approach');
    }
    
    return recommendations;
  };

  const riskScore = calculateRiskScore();
  const riskInfo = getRiskLevel(riskScore);
  const recommendations = getRiskRecommendations(riskScore);

  const calculateMaxLoss = () => {
    return (accountSize * maxDrawdown) / 100;
  };

  const calculateDailyMaxLoss = () => {
    return (accountSize * dailyDrawdown) / 100;
  };

  const calculateProfitNeeded = () => {
    return (accountSize * profitTarget) / 100;
  };

  return (
    <div className="bg-white border border-slate-200 rounded-lg p-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-slate-900">Risk Assessment</h3>
        <div className="flex items-center space-x-1">
          <span className="text-xs text-slate-500">Sources:</span>
          <a href="https://financemagnates.com" target="_blank" rel="noopener noreferrer" className="text-xs text-blue-600 hover:text-blue-800 underline">
            FM
          </a>
          <span className="text-xs text-slate-400">•</span>
          <a href="https://tradingpilot.net" target="_blank" rel="noopener noreferrer" className="text-xs text-blue-600 hover:text-blue-800 underline">
            TP
          </a>
        </div>
      </div>

      {/* Main Content - Single Row Layout */}
      <div className="space-y-4">
        {/* Risk Score Row */}
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-slate-700">Risk Score:</span>
          <div className="flex items-center space-x-3">
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${riskInfo.color}`}>
              <span className="mr-1">{riskInfo.icon}</span>
              {riskInfo.level} ({riskScore}/10)
            </span>
            <div className="w-24 bg-slate-200 rounded-full h-2">
              <div 
                className={`h-2 rounded-full ${
                  riskScore <= 3 ? 'bg-green-500' : 
                  riskScore <= 6 ? 'bg-yellow-500' : 'bg-red-500'
                }`}
                style={{ width: `${(riskScore / 10) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>

        {/* Risk Parameters - Horizontal Grid */}
        <div className="grid grid-cols-4 gap-3">
          <div className="bg-red-50 p-3 rounded-lg border border-red-200 text-center">
            <div className="text-xs text-red-600 font-medium mb-1">Max Loss</div>
            <div className="text-sm font-bold text-red-700">${calculateMaxLoss().toLocaleString()}</div>
          </div>
          
          <div className="bg-orange-50 p-3 rounded-lg border border-orange-200 text-center">
            <div className="text-xs text-orange-600 font-medium mb-1">Daily Max</div>
            <div className="text-sm font-bold text-orange-700">${calculateDailyMaxLoss().toLocaleString()}</div>
          </div>
          
          <div className="bg-green-50 p-3 rounded-lg border border-green-200 text-center">
            <div className="text-xs text-green-600 font-medium mb-1">Profit Target</div>
            <div className="text-sm font-bold text-green-700">${calculateProfitNeeded().toLocaleString()}</div>
          </div>
          
          <div className="bg-slate-50 p-3 rounded-lg border border-slate-200 text-center">
            <div className="text-xs text-slate-600 font-medium mb-1">Max DD</div>
            <div className="text-sm font-semibold text-slate-900">{maxDrawdown}%</div>
          </div>
        </div>

        {/* Risk Recommendations - Clean List */}
        <div className="bg-slate-50 rounded-lg p-3">
          <h4 className="text-sm font-semibold text-slate-900 mb-2">Risk Recommendations</h4>
          <div className="space-y-2">
            {recommendations.slice(0, 3).map((rec, index) => (
              <div key={index} className="flex items-start text-sm text-slate-700">
                <span className="mr-2 text-lg">{rec.split(' ')[0]}</span>
                <span className="leading-relaxed">{rec.split(' ').slice(1).join(' ')}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Disclaimer */}
      <div className="mt-4 pt-3 border-t border-slate-200">
        <p className="text-xs text-slate-500">
          <strong>Disclaimer:</strong> Educational purposes only. Trading involves risk.
        </p>
      </div>
    </div>
  );
};

export default RiskAssessment;
