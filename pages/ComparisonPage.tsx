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
    const [showSuggestions, setShowSuggestions] = useState(false);
    const MAX_COMPARE = 4;

    useEffect(() => {
        if (initialSearchTerm) {
            setSearchTerm(initialSearchTerm);
            onSearchHandled();
        }
    }, [initialSearchTerm, onSearchHandled]);

    const debouncedSearchTerm = useDebounce(searchTerm, 300);
    
    // Get matching suggestions based on search term
    const suggestions = useMemo(() => {
        if (!searchTerm.trim()) return [];
        const searchLower = searchTerm.toLowerCase();
        return firms
            .filter(firm => 
                firm.name.toLowerCase().includes(searchLower) || 
                firm.shortName.toLowerCase().includes(searchLower)
            )
            .slice(0, 5) // Show max 5 suggestions
            .map(firm => firm.name);
    }, [searchTerm, firms]);
    

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
        let filteredFirms = [...firms];
        
        // Apply search filter
        if (debouncedSearchTerm.trim()) {
            const searchLower = debouncedSearchTerm.toLowerCase();
            filteredFirms = filteredFirms.filter(firm => {
                const nameMatch = firm.name.toLowerCase().includes(searchLower);
                const shortNameMatch = firm.shortName.toLowerCase().includes(searchLower);
                return nameMatch || shortNameMatch;
            });
        }
        
        // Apply other filters
        if (selectedCategories.length > 0) {
            filteredFirms = filteredFirms.filter(firm => 
                selectedCategories.some(cat => firm.categories.includes(cat))
            );
        }
        
        if (selectedModels.length > 0) {
            filteredFirms = filteredFirms.filter(firm => 
                selectedModels.some(model => firm.fundingModels.includes(model))
            );
        }
        
        if (selectedDrawdownTypes.length > 0) {
            filteredFirms = filteredFirms.filter(firm => 
                selectedDrawdownTypes.includes(firm.drawdownType)
            );
        }

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
    }, [sortConfig, debouncedSearchTerm, selectedCategories, selectedModels, selectedDrawdownTypes, firms]);

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
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-slate-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                </svg>
              </div>
              <input 
                type="text" 
                value={searchTerm} 
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setShowSuggestions(true);
                }}
                onFocus={() => setShowSuggestions(true)}
                onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
                placeholder="Search firms (e.g., FTMO, Apex, Fundora...)" 
                className="w-full border border-slate-300 rounded-lg shadow-sm py-3 pl-10 pr-10 text-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500" 
              />
              {searchTerm && (
                <button 
                  onClick={() => {
                    setSearchTerm('');
                    setShowSuggestions(false);
                  }}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                >
                  <svg className="h-5 w-5 text-slate-400 hover:text-slate-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                </button>
              )}
              
              {/* Autocomplete Suggestions Dropdown */}
              {showSuggestions && suggestions.length > 0 && (
                <div className="absolute z-50 w-full mt-1 bg-white border border-slate-300 rounded-lg shadow-lg max-h-60 overflow-auto">
                  {suggestions.map((suggestion, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setSearchTerm(suggestion);
                        setShowSuggestions(false);
                      }}
                      className="w-full text-left px-4 py-3 hover:bg-teal-50 transition-colors duration-150 flex items-center border-b border-slate-100 last:border-0"
                    >
                      <svg className="h-4 w-4 text-teal-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                      <span className="text-sm text-slate-900 font-medium">{suggestion}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
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

          {/* Clear Filters Button */}
          <div className="text-center mt-6">
            <button 
              onClick={handleClearFilters} 
              className="px-6 py-3 text-sm font-semibold rounded-lg transition-all duration-200 bg-slate-200 text-slate-700 hover:bg-slate-300 shadow-sm hover:shadow flex items-center mx-auto"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
              Clear All Filters
            </button>
          </div>
        </div>
      </div>

      <div className="w-full">
        <main className="w-full">
          <div className="overflow-x-auto shadow-md rounded-lg">
            <div className="align-middle inline-block min-w-full">
              <div className="shadow overflow-hidden border border-slate-200 rounded-lg">
                <table className="min-w-full divide-y divide-slate-200 table-fixed">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="px-4 py-3 text-center text-xs font-medium text-slate-500 uppercase tracking-wider">Compare</th>
                      <SortableHeader sortKey="name">Firm</SortableHeader>
                      <th className="px-4 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Country</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Est.</th>
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
                          <button 
                            onClick={() => {
                              trackPropFirmClick(firm.id, firm.name);
                              viewFirm(firm.id);
                            }} 
                            className="flex items-center group"
                          >
                            <div className="flex-shrink-0 h-10 w-10 bg-white rounded-full p-1 flex items-center justify-center border border-slate-200">
                               <Logo firmName={firm.name} logoUrl={firm.logoUrl} className="object-contain h-full w-full" />
                            </div>
                            <div className="ml-4 text-left">
                              <div className="text-sm font-medium text-slate-900 group-hover:text-teal-500 transition-colors">{firm.name}</div>
                              {firm.isFeatured && <span className="inline-block px-2 py-0.5 text-xs bg-amber-100 text-amber-800 rounded-full">Featured</span>}
                            </div>
                          </button>
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-slate-600">{firm.country || 'N/A'}</td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-slate-600">{firm.yearEstablished || 'N/A'}</td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-slate-600 font-medium">{firm.rating.toFixed(1)} <span className="text-amber-400">★</span></td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-slate-600 font-medium">${firm.details.maxFunding.toLocaleString()}</td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm font-bold text-green-600">{firm.details.profitSplit}%</td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-slate-600 font-medium">{firm.payoutFrequency}</td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-slate-600">
                          <div className="flex flex-wrap gap-1">
                            {firm.platforms && firm.platforms.length > 0 ? 
                              firm.platforms.map((platform) => (
                                <span key={`platform-${platform}`} className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 border border-blue-200">
                                  {platform}
                                </span>
                              )) : 
                              <span className="text-slate-400">N/A</span>
                            }
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
                           <a 
                             href={firm.affiliateUrl} 
                             target="_blank" 
                             rel="noopener noreferrer" 
                             onClick={() => trackPropFirmClick(firm.id, firm.name, 'affiliate_link')}
                             className="text-teal-600 hover:text-teal-500 font-bold py-2 px-4 rounded-md bg-teal-500/10 hover:bg-teal-500/20 transition-colors shadow-sm hover:shadow"
                           >
                             Visit Site
                           </a>
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