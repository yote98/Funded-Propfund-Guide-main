import React from 'react';

interface ComparisonToolbarProps {
  count: number;
  onCompare: () => void;
  onClear: () => void;
}

const ComparisonToolbar: React.FC<ComparisonToolbarProps> = ({ count, onCompare, onClear }) => {
  if (count === 0) return null;

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 w-full max-w-lg px-4 z-50">
      <div className="bg-slate-800 text-white rounded-xl shadow-2xl p-4 flex items-center justify-between">
        <p className="font-semibold">
          <span className="bg-gradient-to-r from-teal-500 to-slate-900 text-white rounded-full h-6 w-6 inline-flex items-center justify-center mr-2">{count}</span>
          {`Firm${count > 1 ? 's' : ''} selected for comparison`}
        </p>
        <div className="flex items-center gap-2">
          <button
            onClick={onCompare}
            disabled={count < 2}
            className="bg-gradient-to-r from-teal-500 to-slate-900 text-white font-bold py-2 px-4 rounded-lg hover:from-teal-600 hover:to-slate-800 transition-all duration-300 disabled:bg-gradient-to-none disabled:bg-slate-600 disabled:cursor-not-allowed"
          >
            Compare
          </button>
          <button
            onClick={onClear}
            className="text-slate-300 hover:text-white font-semibold py-2 px-4 rounded-lg transition-colors"
          >
            Clear
          </button>
        </div>
      </div>
    </div>
  );
};

export default ComparisonToolbar;