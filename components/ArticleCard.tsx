
import React from 'react';
import type { Article, ArticleId } from '../types';

interface ArticleCardProps {
  article: Article;
  viewArticle: (articleId: ArticleId) => void;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article, viewArticle }) => {
  // Calculate reading time (average 200 words per minute)
  const wordCount = article.content.split(' ').length;
  const readingTime = Math.ceil(wordCount / 200);

  // Determine article category and difficulty based on title/content
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

  // Check if image should use contain (for images with people/heads)
  const shouldUseContain = article.title.includes('Psychology') || 
                           article.title.includes('Risk Management') ||
                           article.title.includes('Mind');

  // Special styling for Psychology images - no background, larger size
  const isPsychology = article.title.includes('Psychology') || article.title.includes('Mind');

  return (
    <div className="bg-white border border-slate-200 rounded-xl overflow-hidden group shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
      {/* Image with overlay */}
      <div className={`relative h-56 overflow-hidden ${shouldUseContain && !isPsychology ? 'bg-slate-100' : ''}`}>
        <img 
          className={`h-full w-full ${isPsychology ? 'object-contain scale-150' : shouldUseContain ? 'object-contain scale-90' : 'object-cover'} group-hover:scale-105 transition-transform duration-500`}
          src={article.imageUrl} 
          alt={article.title} 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Category badge */}
        <div className="absolute top-3 left-3">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-white/90 text-slate-700 backdrop-blur-sm">
            {category}
          </span>
        </div>

        {/* Difficulty badge */}
        <div className="absolute top-3 right-3">
          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${difficulty.color}`}>
            {difficulty.level}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        {/* Title */}
        <h3 className="text-xl font-bold text-slate-900 mb-3 line-clamp-2 group-hover:text-teal-600 transition-colors duration-200">
          {article.title}
        </h3>

        {/* Summary */}
        <p className="text-sm text-slate-600 mb-4 line-clamp-3 leading-relaxed flex-grow">
          {article.summary}
        </p>

        {/* Meta information */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-4 text-xs text-slate-500">
            <div className="flex items-center">
              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
              </svg>
              {article.author}
            </div>
            <div className="flex items-center">
              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
              </svg>
              {article.publishedDate}
            </div>
          </div>
          
          {/* Reading time */}
          <div className="flex items-center text-xs text-slate-500">
            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
            </svg>
            {readingTime} min read
          </div>
        </div>

        {/* Read More Button */}
        <button 
          onClick={() => viewArticle(article.id)} 
          className="w-full inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg text-white bg-gradient-to-r from-teal-500 to-slate-900 hover:from-teal-600 hover:to-slate-800 transition-all duration-300 group/btn mt-auto"
        >
          <span>Read Article</span>
          <svg className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ArticleCard;
