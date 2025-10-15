import React, { useState, useMemo, useEffect } from 'react';
import type { PropFirm, FirmId, FirmCategory } from '../types.ts';
import CheckIcon from '../components/icons/CheckIcon';
import XIcon from '../components/icons/XIcon';
import Logo from '../components/Logo';
import { useDebounce } from '../hooks/useDebounce.ts';
import ComparisonToolbar from '../components/ComparisonToolbar.tsx';
import ComparisonModal from '../components/ComparisonModal.tsx';
import TrendingUpIcon from '../components/icons/TrendingUpIcon.tsx';
import CalendarIcon from '../components/icons/CalendarIcon.tsx';
import NewspaperIcon from '../components/icons/NewspaperIcon.tsx';
import ChipIcon from '../components/icons/ChipIcon.tsx';
import InfinityIcon from '../components/icons/InfinityIcon.tsx';
import { trackPropFirmClick, trackFilterUsage, trackSearch, trackTimeOnPage } from '../utils/analytics';

interface ComparisonPageProps {
  viewFirm: (firmId: FirmId) => void;
  firms: PropFirm[];
  initialSearchTerm?: string;
  onSearchHandled: () => void;
}

type SortKey = keyof PropFirm['details'] | 'name' | 'rating' | 'minStartingCost' | 'payoutFrequency' | 'drawdownType' | 'weekendHolding' | 'expertAdvisors' | 'newsTrading' | 'noTimeLimit' | 'scalingPlan';
type SortDirection = 'asc' | 'desc';

// Custom sort order for payout frequencies to ensure logical sorting (fastest to slowest)
const payoutSortOrder: { [key: string]: number } = {
  'On-demand': 1, '30-min': 1, '2h': 2, '4h': 3, '10 hours': 4, '24h': 5, '48h': 5, 'Daily': 5, '3-7 days': 6, '5 days': 6, '7 days': 7, 'Weekly': 7, '8 days': 8, '5-14 days': 9, '14 days': 10, 'Bi-weekly': 10, '14-30 days': 11, 'Monthly': 12, 'Perf-based': 13,
};

const ComparisonPage: React.FC<ComparisonPageProps> = ({ viewFirm, firms, initialSearchTerm, onSearchHandled }) => {
    const [sortConfig, setSortConfig] = useState<{ key: SortKey; direction: SortDirection } | null>({ key: 'rating', direction: 'desc' });
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategories, setSelectedCategories] = useState<FirmCategory[]>([]);
    const [selectedModels, setSelectedModels] = useState<string[]>([]);
    const [selectedDrawdownTypes, setSelectedDrawdownTypes] = useState<string[]>([]);
    const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>([]);
    const [usFriendlyOnly, setUsFriendlyOnly] = useState(false);
    const [weekendHoldingFilter, setWeekendHoldingFilter] = useState(false);
    const [eaFilter, setEaFilter] = useState(false);
    const [scalingPlanFilter, setScalingPlanFilter] = useState(false);
    const [newsTradingFilter, setNewsTradingFilter] = useState(false);
    const [noTimeLimitFilter, setNoTimeLimitFilter] = useState(false);
    
    const [comparisonList, setComparisonList] = useState<FirmId[]>([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const MAX_COMPARE = 4;

    useEffect(() => {
        if (initialSearchTerm) {
            setSearchTerm(initialSearchTerm);
            onSearchHandled();
        }
    }, [initialSearchTerm, onSearchHandled]);

    const debouncedSearchTerm = useDebounce(searchTerm, 300);

    const allCategories = useMemo(() => Array.from(new Set(firms.flatMap(f => f.categories))).filter(cat => cat !== 'Instant Funding').sort(), [firms]);
    const allModels = useMemo(() => {
        const allowedModels = ['1-Step Challenge', '2-Step Challenge', '3-Step Challenge', 'Instant Funding'];
        return allowedModels.filter(model => 
            firms.some(firm => firm.fundingModels.includes(model))
        );
    }, [firms]);

    const allDrawdownTypes = useMemo(() => {
        const allowedTypes = ['Static', 'Trailing', 'EOD'];
        return allowedTypes.filter(type => 
            firms.some(firm => firm.drawdownType === type)
        );
    }, [firms]);

    const allPlatforms = useMemo(() => {
        const platforms = firms.flatMap(f => f.platforms || []);
        return Array.from(new Set(platforms)).sort();
    }, [firms]);

    const handleCategoryToggle = (category: FirmCategory) => {
        setSelectedCategories(prev => 
            prev.includes(category) ? prev.filter(c => c !== category) : [...prev, category]
        );
    };

    const handleModelToggle = (model: string) => {
        setSelectedModels(prev => 
            prev.includes(model) ? prev.filter(m => m !== model) : [...prev, model]
        );
    };

    const handleDrawdownTypeToggle = (type: string) => {
        setSelectedDrawdownTypes(prev => 
            prev.includes(type) ? prev.filter(t => t !== type) : [...prev, type]
        );
    };

    const handlePlatformToggle = (platform: string) => {
        setSelectedPlatforms(prev => 
            prev.includes(platform) ? prev.filter(p => p !== platform) : [...prev, platform]
        );
    };
    
    const handleClearFilters = () => {
        setSearchTerm('');
        setSelectedCategories([]);
        setSelectedModels([]);
        setSelectedDrawdownTypes([]);
        setSelectedPlatforms([]);
        setUsFriendlyOnly(false);
        setWeekendHoldingFilter(false);
        setEaFilter(false);
        setScalingPlanFilter(false);
        setNewsTradingFilter(false);
        setNoTimeLimitFilter(false);
    };

    const handleToggleCompare = (firmId: FirmId) => {
      setComparisonList(prev => {
        if (prev.includes(firmId)) {
          return prev.filter(id => id !== firmId);
        }
        if (prev.length < MAX_COMPARE) {
          return [...prev, firmId];
        }
        return prev;
      });
    };

    const firmsToCompare = useMemo(() => {
        return firms.filter(firm => comparisonList.includes(firm.id));
    }, [firms, comparisonList]);

    const filteredAndSortedFirms = useMemo(() => {
        let filteredFirms = [...firms]
            .filter(firm => firm.name.toLowerCase().includes(debouncedSearchTerm.toLowerCase()))
            .filter(firm => selectedCategories.length === 0 ? true : selectedCategories.some(cat => firm.categories.includes(cat)))
            .filter(firm => selectedModels.length === 0 ? true : selectedModels.some(model => firm.fundingModels.includes(model)))
            .filter(firm => selectedDrawdownTypes.length === 0 ? true : selectedDrawdownTypes.includes(firm.drawdownType))
            .filter(firm => selectedPlatforms.length === 0 ? true : selectedPlatforms.some(platform => firm.platforms?.includes(platform)))
            .filter(firm => usFriendlyOnly ? firm.isUSFriendly : true)
            .filter(firm => weekendHoldingFilter ? firm.features.weekendHolding : true)
            .filter(firm => eaFilter ? firm.features.expertAdvisors : true)
            .filter(firm => scalingPlanFilter ? firm.features.scalingPlan : true)
            .filter(firm => newsTradingFilter ? firm.features.newsTrading : true)
            .filter(firm => noTimeLimitFilter ? firm.features.noTimeLimit : true);

        if (sortConfig !== null) {
            filteredFirms.sort((a, b) => {
                const { key, direction } = sortConfig;

                if (key === 'payoutFrequency') {
                    const aOrder = payoutSortOrder[a.payoutFrequency] || 99;
                    const bOrder = payoutSortOrder[b.payoutFrequency] || 99;
                    if (aOrder < bOrder) return direction === 'asc' ? -1 : 1;
                    if (aOrder > bOrder) return direction === 'asc' ? 1 : -1;
                    return 0;
                }

                let aValue: any;
                let bValue: any;

                if (['name', 'rating', 'minStartingCost', 'drawdownType'].includes(key)) {
                    aValue = a[key as keyof PropFirm];
                    bValue = b[key as keyof PropFirm];
                } else if (['weekendHolding', 'expertAdvisors', 'newsTrading', 'noTimeLimit', 'scalingPlan'].includes(key)) {
                    aValue = a.features[key as keyof PropFirm['features']];
                    bValue = b.features[key as keyof PropFirm['features']];
                } else {
                    aValue = a.details[key as keyof PropFirm['details']];
                    bValue = b.details[key as keyof PropFirm['details']];
                }
                
                if (typeof aValue === 'boolean' && typeof bValue === 'boolean') {
                    if (direction === 'asc') return aValue === bValue ? 0 : aValue ? -1 : 1; // true first
                    return aValue === bValue ? 0 : aValue ? 1 : -1; // false first
                }

                if (aValue < bValue) return direction === 'asc' ? -1 : 1;
                if (aValue > bValue) return direction === 'asc' ? 1 : -1;
                return 0;
            });
        }
        return filteredFirms;
    }, [sortConfig, debouncedSearchTerm, selectedCategories, selectedModels, usFriendlyOnly, weekendHoldingFilter, eaFilter, scalingPlanFilter, newsTradingFilter, noTimeLimitFilter, firms]);

    const requestSort = (key: SortKey) => {
        let direction: SortDirection = 'asc';
        if (sortConfig && sortConfig.key === key && sortConfig.direction === 'asc') {
            direction = 'desc';
        }
        setSortConfig({ key, direction });
    };

    const SortableHeader: React.FC<{ sortKey: SortKey; children: React.ReactNode; className?: string, title?: string }> = ({ sortKey, children, className, title }) => {
      const isSorted = sortConfig?.key === sortKey;
      const directionIcon = sortConfig?.direction === 'asc' ? '▲' : '▼';
      return (
        <th title={title} className={`px-4 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider cursor-pointer select-none hover:bg-gray-200 transition-colors ${className}`} onClick={() => requestSort(sortKey)}>
          <div className="flex items-center">
            {children}
            {isSorted && <span className="ml-1 text-teal-500">{directionIcon}</span>}
          </div>
        </th>
      )
    }

  return (
    <div>
      <div className="text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">Compare Prop Firms</h1>
        <p className="mt-3 max-w-2xl mx-auto text-lg text-slate-600">
          Use our interactive tools to filter, sort, and find the perfect firm for your trading style.
        </p>
      </div>

      {/* Simplified Filters Below Header */}
      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm mb-8">
        <div className="space-y-4">
          {/* Search */}
          <div className="max-w-md mx-auto">
            <input 
              type="text" 
              value={searchTerm} 
              onChange={(e) => setSearchTerm(e.target.value)} 
              placeholder="Search firms (e.g., FTMO, Apex...)" 
              className="w-full border border-slate-300 rounded-lg shadow-sm py-3 px-4 text-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500" 
            />
          </div>

          {/* Category Filters */}
          <div>
            <h4 className="text-sm font-semibold text-slate-700 mb-3 text-center">Category</h4>
            <div className="flex flex-wrap justify-center gap-2">
              {allCategories.map(cat => (
                <button 
                  key={cat} 
                  onClick={() => handleCategoryToggle(cat)} 
                  className={`px-4 py-2 text-sm font-semibold rounded-full transition-colors duration-200 ${
                    selectedCategories.includes(cat) 
                      ? 'bg-gradient-to-r from-teal-500 to-slate-900 text-white' 
                      : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Funding Model Filters */}
          <div>
            <h4 className="text-sm font-semibold text-slate-700 mb-3 text-center">Funding Model</h4>
            <div className="flex flex-wrap justify-center gap-2">
              {allModels.map(model => (
                <button 
                  key={model} 
                  onClick={() => handleModelToggle(model)} 
                  className={`px-4 py-2 text-sm font-semibold rounded-full transition-colors duration-200 ${
                    selectedModels.includes(model) 
                      ? 'bg-gradient-to-r from-teal-500 to-slate-900 text-white' 
                      : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
                  }`}
                >
                  {model}
                </button>
              ))}
            </div>
          </div>

          {/* Drawdown Type Filters */}
          <div>
            <h4 className="text-sm font-semibold text-slate-700 mb-3 text-center">Drawdown Type</h4>
            <div className="flex flex-wrap justify-center gap-2">
              {allDrawdownTypes.map(type => (
                <button 
                  key={type} 
                  onClick={() => handleDrawdownTypeToggle(type)} 
                  className={`px-4 py-2 text-sm font-semibold rounded-full transition-colors duration-200 ${
                    selectedDrawdownTypes.includes(type) 
                      ? 'bg-gradient-to-r from-teal-500 to-slate-900 text-white' 
                      : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          {/* Platform Filters */}
          <div>
            <h4 className="text-sm font-semibold text-slate-700 mb-3 text-center">Trading Platforms</h4>
            <div className="flex flex-wrap justify-center gap-2">
              {allPlatforms.map(platform => (
                <button 
                  key={platform} 
                  onClick={() => handlePlatformToggle(platform)} 
                  className={`px-4 py-2 text-sm font-semibold rounded-full transition-colors duration-200 ${
                    selectedPlatforms.includes(platform) 
                      ? 'bg-gradient-to-r from-teal-500 to-slate-900 text-white' 
                      : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
                  }`}
                >
                  {platform}
                </button>
              ))}
            </div>
          </div>

          {/* Quick Filters */}
          <div>
            <h4 className="text-sm font-semibold text-slate-700 mb-3 text-center">Quick Filters</h4>
            <div className="flex flex-wrap justify-center gap-4">
              <label className="flex items-center cursor-pointer">
                <input 
                  type="checkbox" 
                  checked={usFriendlyOnly} 
                  onChange={(e) => setUsFriendlyOnly(e.target.checked)} 
                  className="h-4 w-4 text-teal-600 border-gray-300 rounded focus:ring-teal-500" 
                />
                <span className="ml-2 text-sm text-slate-700">US Friendly</span>
              </label>
              <label className="flex items-center cursor-pointer">
                <input 
                  type="checkbox" 
                  checked={eaFilter} 
                  onChange={(e) => setEaFilter(e.target.checked)} 
                  className="h-4 w-4 text-teal-600 border-gray-300 rounded focus:ring-teal-500" 
                />
                <span className="ml-2 text-sm text-slate-700">EAs Allowed</span>
              </label>
              <label className="flex items-center cursor-pointer">
                <input 
                  type="checkbox" 
                  checked={newsTradingFilter} 
                  onChange={(e) => setNewsTradingFilter(e.target.checked)} 
                  className="h-4 w-4 text-teal-600 border-gray-300 rounded focus:ring-teal-500" 
                />
                <span className="ml-2 text-sm text-slate-700">News Trading</span>
              </label>
              <label className="flex items-center cursor-pointer">
                <input 
                  type="checkbox" 
                  checked={weekendHoldingFilter} 
                  onChange={(e) => setWeekendHoldingFilter(e.target.checked)} 
                  className="h-4 w-4 text-teal-600 border-gray-300 rounded focus:ring-teal-500" 
                />
                <span className="ml-2 text-sm text-slate-700">Weekend Holding</span>
              </label>
              <label className="flex items-center cursor-pointer">
                <input 
                  type="checkbox" 
                  checked={noTimeLimitFilter} 
                  onChange={(e) => setNoTimeLimitFilter(e.target.checked)} 
                  className="h-4 w-4 text-teal-600 border-gray-300 rounded focus:ring-teal-500" 
                />
                <span className="ml-2 text-sm text-slate-700">No Time Limit</span>
              </label>
              <label className="flex items-center cursor-pointer">
                <input 
                  type="checkbox" 
                  checked={scalingPlanFilter} 
                  onChange={(e) => setScalingPlanFilter(e.target.checked)} 
                  className="h-4 w-4 text-teal-600 border-gray-300 rounded focus:ring-teal-500" 
                />
                <span className="ml-2 text-sm text-slate-700">Scaling Plan</span>
              </label>
            </div>
          </div>

          {/* Clear Filters Button */}
          <div className="text-center">
            <button 
              onClick={handleClearFilters} 
              className="px-6 py-2 text-sm font-semibold rounded-lg transition-colors duration-200 bg-slate-200 text-slate-700 hover:bg-slate-300"
            >
              Clear All Filters
            </button>
          </div>
        </div>
      </div>

      <div className="w-full">
        <main className="w-full">
          <div className="overflow-x-auto">
            <div className="align-middle inline-block min-w-full">
              <div className="shadow overflow-hidden border border-slate-200 rounded-lg">
                <table className="min-w-full divide-y divide-slate-200">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="px-4 py-3 text-center text-xs font-medium text-slate-500 uppercase tracking-wider">Compare</th>
                      <SortableHeader sortKey="name">Firm</SortableHeader>
                      <SortableHeader sortKey="rating">Rating</SortableHeader>
                      <SortableHeader sortKey="maxFunding">Max Funding</SortableHeader>
                      <SortableHeader sortKey="profitSplit">Profit Split</SortableHeader>
                      <SortableHeader sortKey="payoutFrequency">Payout Freq.</SortableHeader>
                      <th className="px-4 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Platforms</th>
                      <SortableHeader sortKey="scalingPlan" title="Scaling Plan" className="text-center"><TrendingUpIcon className="h-5 w-5 mx-auto" /></SortableHeader>
                      <SortableHeader sortKey="expertAdvisors" title="EAs Allowed" className="text-center"><ChipIcon className="h-5 w-5 mx-auto" /></SortableHeader>
                      <SortableHeader sortKey="newsTrading" title="News Trading" className="text-center"><NewspaperIcon className="h-5 w-5 mx-auto" /></SortableHeader>
                      <SortableHeader sortKey="weekendHolding" title="Weekend Holding" className="text-center"><CalendarIcon className="h-5 w-5 mx-auto" /></SortableHeader>
                      <SortableHeader sortKey="noTimeLimit" title="No Time Limit" className="text-center"><InfinityIcon className="h-5 w-5 mx-auto" /></SortableHeader>
                      <th className="px-4 py-3 text-xs font-medium text-slate-500 uppercase tracking-wider">Action</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-slate-200">
                    {filteredAndSortedFirms.map((firm) => (
                      <tr key={firm.id} className="even:bg-gray-50 hover:bg-teal-50/50 transition-colors">
                        <td className="px-4 py-4 whitespace-nowrap text-center">
                          <input type="checkbox" checked={comparisonList.includes(firm.id)} onChange={() => handleToggleCompare(firm.id)} disabled={comparisonList.length >= MAX_COMPARE && !comparisonList.includes(firm.id)} className="h-5 w-5 text-teal-600 border-gray-300 rounded focus:ring-teal-500 disabled:opacity-50" aria-label={`Compare ${firm.name}`} />
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap">
                          <button onClick={() => viewFirm(firm.id)} className="flex items-center group">
                            <div className="flex-shrink-0 h-10 w-10 bg-white rounded-full p-1 flex items-center justify-center border border-slate-200">
                               <Logo firmName={firm.name} logoUrl={firm.logoUrl} className="object-contain h-full w-full" />
                            </div>
                            <div className="ml-4 text-left">
                              <div className="text-sm font-medium text-slate-900 group-hover:text-teal-500 transition-colors">{firm.name}</div>
                            </div>
                          </button>
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-slate-600 font-medium">{firm.rating.toFixed(1)} <span className="text-amber-400">★</span></td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-slate-600 font-medium">${firm.details.maxFunding.toLocaleString()}</td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm font-bold text-green-600">{firm.details.profitSplit}%</td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-slate-600 font-medium">{firm.payoutFrequency}</td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-slate-600">
                          <div className="flex flex-wrap gap-1">
                            {firm.platforms?.map((platform, index) => (
                              <span key={index} className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                                {platform}
                              </span>
                            )) || <span className="text-slate-400">N/A</span>}
                          </div>
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap text-center">
                            {firm.features.scalingPlan ? <CheckIcon className="w-6 h-6 text-green-500 mx-auto" /> : <XIcon className="w-6 h-6 text-red-500 mx-auto" />}
                        </td>
                         <td className="px-4 py-4 whitespace-nowrap text-center">
                            {firm.features.expertAdvisors ? <CheckIcon className="w-6 h-6 text-green-500 mx-auto" /> : <XIcon className="w-6 h-6 text-red-500 mx-auto" />}
                        </td>
                         <td className="px-4 py-4 whitespace-nowrap text-center">
                            {firm.features.newsTrading ? <CheckIcon className="w-6 h-6 text-green-500 mx-auto" /> : <XIcon className="w-6 h-6 text-red-500 mx-auto" />}
                        </td>
                         <td className="px-4 py-4 whitespace-nowrap text-center">
                            {firm.features.weekendHolding ? <CheckIcon className="w-6 h-6 text-green-500 mx-auto" /> : <XIcon className="w-6 h-6 text-red-500 mx-auto" />}
                        </td>
                         <td className="px-4 py-4 whitespace-nowrap text-center">
                            {firm.features.noTimeLimit ? <CheckIcon className="w-6 h-6 text-green-500 mx-auto" /> : <XIcon className="w-6 h-6 text-red-500 mx-auto" />}
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap text-right text-sm font-medium">
                           <a href={firm.affiliateUrl} target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:text-teal-500 font-bold py-2 px-4 rounded-md bg-teal-500/10 hover:bg-teal-500/20 transition-colors">Visit Site</a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                 {filteredAndSortedFirms.length === 0 && (
                    <div className="text-center p-8 bg-white">
                        <h3 className="text-lg font-semibold text-slate-800">No Firms Found</h3>
                        <p className="text-slate-500 mt-1">Try adjusting your search or filter criteria.</p>
                    </div>
                 )}
              </div>
            </div>
          </div>
        </main>
      </div>

      {comparisonList.length > 0 && (
        <ComparisonToolbar 
          count={comparisonList.length}
          onCompare={() => setIsModalOpen(true)}
          onClear={() => setComparisonList([])}
        />
      )}
      {isModalOpen && (
        <ComparisonModal
          firms={firmsToCompare}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
};

export default ComparisonPage;