import React from 'react';

interface GlossaryTermProps {
  term: string;
  definition: string;
}

const GlossaryTerm: React.FC<GlossaryTermProps> = ({ term, definition }) => {
  return (
    <div className="border-b border-slate-200 pb-4">
      <h3 className="text-xl font-bold text-slate-900">{term}</h3>
      <p className="mt-2 text-slate-700 leading-relaxed">{definition}</p>
    </div>
  );
};

export default GlossaryTerm;