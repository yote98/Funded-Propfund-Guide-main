import React from 'react';
import type { PropFirm } from '../types.ts';
import CalendarIcon from './icons/CalendarIcon';
import GlobeIcon from './icons/GlobeIcon';
import MapPinIcon from './icons/MapPinIcon';

interface CompanyInfoProps {
  firm: PropFirm;
}

const CompanyInfo: React.FC<CompanyInfoProps> = ({ firm }) => {
  if (!firm.countryFounded && !firm.yearsInOperation && !firm.foundedYear && !firm.headquarters) {
    return null;
  }

  return (
    <div className="bg-white border border-slate-200 rounded-lg p-6">
      <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center">
        <GlobeIcon className="w-5 h-5 mr-2 text-blue-600" />
        Company Information
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {firm.countryFounded && (
          <div className="flex items-center p-3 bg-slate-50 rounded-lg">
            <GlobeIcon className="w-4 h-4 mr-3 text-slate-500" />
            <div>
              <span className="text-sm text-slate-500 block">Country Founded</span>
              <span className="font-medium text-slate-900">{firm.countryFounded}</span>
            </div>
          </div>
        )}
        
        {firm.yearsInOperation && (
          <div className="flex items-center p-3 bg-slate-50 rounded-lg">
            <CalendarIcon className="w-4 h-4 mr-3 text-slate-500" />
            <div>
              <span className="text-sm text-slate-500 block">Years in Operation</span>
              <span className="font-medium text-slate-900">{firm.yearsInOperation} years</span>
            </div>
          </div>
        )}
        
        {firm.foundedYear && (
          <div className="flex items-center p-3 bg-slate-50 rounded-lg">
            <CalendarIcon className="w-4 h-4 mr-3 text-slate-500" />
            <div>
              <span className="text-sm text-slate-500 block">Founded</span>
              <span className="font-medium text-slate-900">{firm.foundedYear}</span>
            </div>
          </div>
        )}
        
        {firm.headquarters && (
          <div className="flex items-center p-3 bg-slate-50 rounded-lg">
            <MapPinIcon className="w-4 h-4 mr-3 text-slate-500" />
            <div>
              <span className="text-sm text-slate-500 block">Headquarters</span>
              <span className="font-medium text-slate-900">{firm.headquarters}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CompanyInfo;
