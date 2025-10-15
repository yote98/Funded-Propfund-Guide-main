import React, { useState, useEffect } from 'react';
import type { Article } from '../types';

interface ArticlePageProps {
  article: Article;
}

const ArticlePage: React.FC<ArticlePageProps> = ({ article }) => {
  const [readingProgress, setReadingProgress] = useState(0);

  // Calculate reading time
  const wordCount = article.content.split(' ').length;
  const readingTime = Math.ceil(wordCount / 200);

  // Determine article category and difficulty
  const getArticleCategory = (title: string): string => {
    if (title.includes('Psychology') || title.includes('Mind')) return 'Psychology';
    if (title.includes('Risk') || title.includes('Management')) return 'Risk Management';
    if (title.includes('Technical') || title.includes('Analysis')) return 'Technical Analysis';
    if (title.includes('Drawdown') || title.includes('Static') || title.includes('Trailing')) return 'Account Types';
    if (title.includes('Scaling') || title.includes('Grow')) return 'Scaling';
    if (title.includes('Choose') || title.includes('Firm')) return 'Firm Selection';
    if (title.includes('Prop Trading') || title.includes('What is')) return 'Getting Started';
    if (title.includes('Glossary') || title.includes('Terms')) return 'Reference';
    return 'General';
  };

  const getDifficultyLevel = (title: string): { level: string; color: string } => {
    if (title.includes('Fundamentals') || title.includes('What is') || title.includes('Getting Started')) {
      return { level: 'Beginner', color: 'bg-green-100 text-green-800' };
    }
    if (title.includes('Advanced') || title.includes('Scaling') || title.includes('Psychology')) {
      return { level: 'Advanced', color: 'bg-red-100 text-red-800' };
    }
    return { level: 'Intermediate', color: 'bg-yellow-100 text-yellow-800' };
  };

  const category = getArticleCategory(article.title);
  const difficulty = getDifficultyLevel(article.title);

  // Track reading progress
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setReadingProgress(Math.min(scrollPercent, 100));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="max-w-4xl mx-auto">
      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-slate-200 z-50">
        <div 
          className="h-full bg-gradient-to-r from-teal-500 to-slate-900 transition-all duration-300"
          style={{ width: `${readingProgress}%` }}
        />
      </div>

      {/* Article Header */}
      <div className="bg-white border border-slate-200 rounded-xl shadow-lg overflow-hidden mb-8">
        {/* Hero Image */}
        <div className="relative h-80 overflow-hidden">
          <img 
            className="h-full w-full object-cover" 
            src={article.imageUrl} 
            alt={article.title} 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          
          {/* Category and Difficulty Badges */}
          <div className="absolute top-6 left-6 flex flex-wrap gap-2">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-white/90 text-slate-700 backdrop-blur-sm">
              {category}
            </span>
            <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${difficulty.color}`}>
              {difficulty.level}
            </span>
          </div>
        </div>

        {/* Article Meta */}
        <div className="p-8">
          <h1 className="text-4xl font-bold text-slate-900 mb-4 leading-tight">{article.title}</h1>
          
          {/* Author and Date */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gradient-to-r from-teal-500 to-slate-900 rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold text-sm">
                    {article.author.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div className="ml-3">
                  <div className="text-sm font-medium text-slate-900">{article.author}</div>
                  <div className="text-sm text-slate-500">{article.publishedDate}</div>
                </div>
              </div>
            </div>
            
            {/* Reading Time */}
            <div className="flex items-center text-sm text-slate-500">
              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
              {readingTime} min read
            </div>
          </div>

          {/* Summary */}
          <div className="bg-slate-50 rounded-lg p-4 mb-8">
            <p className="text-slate-700 leading-relaxed">{article.summary}</p>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="bg-white border border-slate-200 rounded-xl shadow-lg overflow-hidden">
        <div className="p-8">
          <div 
            className="prose prose-lg max-w-none text-slate-700 prose-headings:text-slate-900 prose-headings:font-bold prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4 prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-3 prose-p:leading-relaxed prose-p:mb-4 prose-ul:mb-4 prose-ol:mb-4 prose-li:mb-2 prose-strong:text-slate-900 prose-strong:font-semibold prose-a:text-teal-600 prose-a:no-underline hover:prose-a:underline prose-table:border-collapse prose-th:border prose-th:border-slate-300 prose-th:bg-slate-50 prose-th:p-2 prose-td:border prose-td:border-slate-300 prose-td:p-2"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
        </div>
      </div>

      {/* Article Footer */}
      <div className="mt-8 bg-white border border-slate-200 rounded-xl shadow-lg p-6">
        <div className="text-center">
          <h3 className="text-lg font-semibold text-slate-900 mb-2">Found this article helpful?</h3>
          <p className="text-slate-600 mb-4">Share it with other traders or explore more educational content.</p>
          <div className="flex justify-center space-x-4">
            <button className="inline-flex items-center px-4 py-2 border border-slate-300 rounded-lg text-sm font-medium text-slate-700 bg-white hover:bg-slate-50 transition-colors duration-200">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
              </svg>
              Share
            </button>
            <button className="inline-flex items-center px-4 py-2 border border-transparent rounded-lg text-sm font-medium text-white bg-gradient-to-r from-teal-500 to-slate-900 hover:from-teal-600 hover:to-slate-800 transition-all duration-300">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              More Articles
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticlePage;
