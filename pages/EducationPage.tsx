import React, { useState, useMemo } from 'react';
import ArticleCard from '../components/ArticleCard';
import type { ArticleId, Article } from '../types';

interface EducationPageProps {
  viewArticle: (articleId: ArticleId) => void;
  articles: Article[];
}

const EducationPage: React.FC<EducationPageProps> = ({ viewArticle, articles }) => {
  console.log("EducationPage - articles received:", articles);
  console.log("EducationPage - articles length:", articles?.length);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header Section */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-teal-500 to-slate-900 rounded-full mb-6">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        </div>
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Education Center</h1>
        <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
          Master the fundamentals of prop trading with our comprehensive guides, tutorials, and expert insights. 
          From beginner basics to advanced strategies, we've got you covered.
        </p>
      </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 text-center">
              <div className="text-3xl font-bold text-teal-600 mb-2">{articles.length}</div>
              <div className="text-sm text-slate-600">Total Articles</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 text-center">
              <div className="text-3xl font-bold text-slate-600 mb-2">8+</div>
              <div className="text-sm text-slate-600">Expert Authors</div>
            </div>
          </div>


      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map(article => (
          <ArticleCard key={article.id} article={article} viewArticle={viewArticle} />
        ))}
      </div>
    </div>
  );
};

export default EducationPage;
