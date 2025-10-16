import React, { useMemo } from 'react';
import type { PropFirm } from '../types.ts';
import Logo from './Logo';
import XIcon from './icons/XIcon';
import CheckIcon from './icons/CheckIcon';

interface ComparisonModalProps {
  firms: PropFirm[];
  onClose: () => void;
}

type FeatureKey = keyof PropFirm | keyof PropFirm['details'] | keyof PropFirm['features'];
type BestLogic = 'max' | 'min' | 'boolean' | 'none';

const featuresToCompare: { key: FeatureKey; label: string; isDetails?: boolean; isFeatures?: boolean; best: BestLogic, unit?: string, format?: (value: any) => string }[] = [
    { key: 'rating', label: 'Rating', best: 'max' },
    { key: 'profitSplit', label: 'Profit Split', isDetails: true, best: 'max', unit: '%' },
    { key: 'maxFunding', label: 'Max Funding', isDetails: true, best: 'max', format: (v) => `$${(v as number).toLocaleString()}` },
    { key: 'minStartingCost', label: 'Starting Cost', best: 'min', format: (v) => `$${(v as number).toLocaleString()}` },
    { key: 'maxDrawdown', label: 'Max Drawdown', isDetails: true, best: 'max', unit: '%' },
    { key: 'dailyDrawdown', label: 'Daily Drawdown', isDetails: true, best: 'max', unit: '%', format: v => v > 0 ? `${v}%` : 'N/A' },
    { key: 'profitTarget', label: 'Profit Target', isDetails: true, best: 'min', unit: '%' },
    { key: 'drawdownType', label: 'Drawdown Type', best: 'none' },
    { key: 'payoutFrequency', label: 'Payout Frequency', best: 'none' },
    { key: 'platforms', label: 'Trading Platforms', best: 'none' },
    { key: 'tradingInstruments', label: 'Trading Instruments', best: 'none' },
    { key: 'minTradingDays', label: 'Min Trading Days', isDetails: true, best: 'min', format: v => v > 0 ? v : 'None' },
    { key: 'weekendHolding', label: 'Weekend Holding', isFeatures: true, best: 'boolean' },
    { key: 'expertAdvisors', label: 'EAs Allowed', isFeatures: true, best: 'boolean' },
    { key: 'newsTrading', label: 'News Trading', isFeatures: true, best: 'boolean' },
    { key: 'noTimeLimit', label: 'No Time Limit', isFeatures: true, best: 'boolean' },
    { key: 'scalingPlan', label: 'Scaling Plan', isFeatures: true, best: 'boolean' },
];

const getBestValue = (firms: PropFirm[], feature: typeof featuresToCompare[0]) => {
    if (feature.best === 'none' || firms.length < 2) return null;

    const values = firms.map(firm => {
        if (feature.isDetails) return firm.details[feature.key as keyof PropFirm['details']];
        if (feature.isFeatures) return firm.features[feature.key as keyof PropFirm['features']];
        return firm[feature.key as keyof PropFirm];
    });

    if (feature.best === 'max') {
        return Math.max(...(values as number[]));
    }
    if (feature.best === 'min') {
        return Math.min(...(values as number[]));
    }
    if (feature.best === 'boolean') {
        return values.some(v => v === true);
    }
    return null;
};

const ComparisonModal: React.FC<ComparisonModalProps> = ({ firms, onClose }) => {
    const bestValues = useMemo(() => {
        const best: { [key: string]: any } = {};
        featuresToCompare.forEach(feature => {
            best[feature.key as string] = getBestValue(firms, feature);
        });
        return best;
    }, [firms]);

    const renderValue = (value: any, isBest: boolean, feature: typeof featuresToCompare[0]) => {
        const baseClasses = "px-4 py-3 text-center font-semibold rounded-md transition-colors";
        const bestClasses = "bg-teal-500/10 text-teal-700";
        const normalClasses = "text-slate-800";

        if (typeof value === 'boolean') {
            return value ? <CheckIcon className="w-6 h-6 text-green-500 mx-auto" /> : <XIcon className="w-6 h-6 text-red-500 mx-auto" />;
        }

        // Special handling for platforms and tradingInstruments arrays
        if (feature.key === 'platforms' || feature.key === 'tradingInstruments') {
            if (Array.isArray(value) && value.length > 0) {
                const bgColor = feature.key === 'platforms' ? 'bg-blue-100 text-blue-800' : 'bg-purple-100 text-purple-800';
                return (
                    <div className={`${baseClasses} ${isBest ? bestClasses : normalClasses}`}>
                        <div className="flex flex-wrap gap-1 justify-center">
                            {value.map((item) => (
                                <span key={`${feature.key}-${item}`} className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${bgColor}`}>
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>
                );
            } else {
                return (
                    <div className={`${baseClasses} text-slate-500`}>
                        N/A
                    </div>
                );
            }
        }
        
        const formattedValue = feature.format ? feature.format(value) : value;

        return (
            <div className={`${baseClasses} ${isBest ? bestClasses : normalClasses}`}>
               {formattedValue}{feature.unit}
            </div>
        );
    };

    return (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
          onClick={onClose}
          aria-modal="true"
          role="dialog"
        >
            <div 
              className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col"
              onClick={e => e.stopPropagation()}
            >
                <header className="p-4 border-b border-slate-200 flex items-center justify-between flex-shrink-0">
                    <h2 className="text-xl font-bold text-slate-900">Side-by-Side Comparison</h2>
                    <button onClick={onClose} className="p-2 rounded-full text-slate-500 hover:bg-slate-100 hover:text-slate-800 transition-colors">
                        <XIcon className="w-6 h-6" />
                        <span className="sr-only">Close comparison</span>
                    </button>
                </header>
                <div className="overflow-auto p-4">
                    <table className="w-full border-collapse">
                        <thead>
                            <tr>
                                <th className="sticky top-0 bg-white p-4 text-left font-semibold text-slate-600 w-1/4">Feature</th>
                                {firms.map(firm => (
                                    <th key={firm.id} className="sticky top-0 bg-white p-4 text-center">
                                        <div className="flex flex-col items-center">
                                            <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center p-1 border border-slate-200 mb-2">
                                                <Logo firmName={firm.name} logoUrl={firm.logoUrl} className="object-contain max-h-full max-w-full" />
                                            </div>
                                            <span className="font-bold text-slate-800">{firm.name}</span>
                                        </div>
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {featuresToCompare.map(feature => {
                                const bestValue = bestValues[feature.key as string];
                                return (
                                <tr key={feature.key as string} className="border-t border-slate-200">
                                    <td className="p-4 font-medium text-slate-600">{feature.label}</td>
                                    {firms.map(firm => {
                                        const value = feature.isDetails 
                                            ? firm.details[feature.key as keyof PropFirm['details']]
                                            : feature.isFeatures
                                                ? firm.features[feature.key as keyof PropFirm['features']]
                                                : firm[feature.key as keyof PropFirm];
                                        
                                        const isBest = bestValue !== null && value === bestValue;

                                        return (
                                            <td key={firm.id} className="p-2">
                                                {renderValue(value, isBest, feature)}
                                            </td>
                                        );
                                    })}
                                </tr>
                            )})}
                        </tbody>
                        <tfoot>
                             <tr className="border-t border-slate-200">
                                <td></td>
                                {firms.map(firm => (
                                    <td key={firm.id} className="p-4 text-center">
                                         <a 
                                           href={firm.affiliateUrl} 
                                           target="_blank" 
                                           rel="noopener noreferrer" 
                                           onClick={() => {
                                             // Import this at the top of the file if needed
                                             // import { trackPropFirmClick } from '../utils/analytics';
                                             try {
                                               // @ts-ignore - Assuming trackPropFirmClick is available globally
                                               window.trackPropFirmClick?.(firm.id, firm.name, 'comparison_modal');
                                             } catch (e) {
                                               console.error('Error tracking click:', e);
                                             }
                                           }}
                                           className="inline-block bg-gradient-to-r from-teal-500 to-slate-900 text-white font-bold py-2 px-6 rounded-lg hover:from-teal-600 hover:to-slate-800 transition-all duration-300 w-full text-center shadow-md hover:shadow-lg"
                                         >
                                           Visit Site
                                         </a>
                                    </td>
                                ))}
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ComparisonModal;