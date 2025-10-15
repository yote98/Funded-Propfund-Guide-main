import React from 'react';

interface SuccessMetricsProps {
  evaluationPassRate: number;
  averageTimeToPass: string;
  traderRetentionRate: number;
  scalingSuccessRate: number;
}

const SuccessMetrics: React.FC<SuccessMetricsProps> = ({
  evaluationPassRate,
  averageTimeToPass,
  traderRetentionRate,
  scalingSuccessRate
}) => {
  const getRateColor = (rate: number) => {
    if (rate >= 80) return 'text-green-600';
    if (rate >= 60) return 'text-blue-600';
    if (rate >= 40) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getRateBarColor = (rate: number) => {
    if (rate >= 80) return 'bg-green-500';
    if (rate >= 60) return 'bg-blue-500';
    if (rate >= 40) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  return (
    <div className="bg-white border border-slate-200 rounded-lg p-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-slate-900">Success Metrics</h3>
      <div className="flex items-center space-x-1">
        <span className="text-xs text-slate-500">Sources:</span>
        <a href="https://payoutjunction.com" target="_blank" rel="noopener noreferrer" className="text-xs text-blue-600 hover:text-blue-800 underline">
          PJ
        </a>
        <span className="text-xs text-slate-400">•</span>
        <a href="https://financemagnates.com" target="_blank" rel="noopener noreferrer" className="text-xs text-blue-600 hover:text-blue-800 underline">
          FM
        </a>
      </div>
      </div>
      
      <div className="space-y-4">
        <div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-slate-600 text-sm">Evaluation Pass Rate</span>
            <span className={`font-semibold ${getRateColor(evaluationPassRate)}`}>
              {evaluationPassRate}%
            </span>
          </div>
          <div className="w-full bg-slate-200 rounded-full h-2">
            <div 
              className={`h-2 rounded-full ${getRateBarColor(evaluationPassRate)}`}
              style={{ width: `${evaluationPassRate}%` }}
            ></div>
          </div>
        </div>

        <div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-slate-600 text-sm">Trader Retention</span>
            <span className={`font-semibold ${getRateColor(traderRetentionRate)}`}>
              {traderRetentionRate}%
            </span>
          </div>
          <div className="w-full bg-slate-200 rounded-full h-2">
            <div 
              className={`h-2 rounded-full ${getRateBarColor(traderRetentionRate)}`}
              style={{ width: `${traderRetentionRate}%` }}
            ></div>
          </div>
        </div>

        <div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-slate-600 text-sm">Scaling Success</span>
            <span className={`font-semibold ${getRateColor(scalingSuccessRate)}`}>
              {scalingSuccessRate}%
            </span>
          </div>
          <div className="w-full bg-slate-200 rounded-full h-2">
            <div 
              className={`h-2 rounded-full ${getRateBarColor(scalingSuccessRate)}`}
              style={{ width: `${scalingSuccessRate}%` }}
            ></div>
          </div>
        </div>

        <div className="pt-2 border-t border-slate-200">
          <div className="flex justify-between items-center">
            <span className="text-slate-600 text-sm">Avg. Time to Pass:</span>
            <span className="font-semibold text-slate-900">{averageTimeToPass}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessMetrics;