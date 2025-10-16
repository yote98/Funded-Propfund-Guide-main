import React, { useState, useMemo } from 'react';
import ArticleCard from '../components/ArticleCard';
import type { ArticleId, Article } from '../types';

interface EducationPageProps {
  viewArticle: (articleId: ArticleId) => void;
  articles: Article[];
}

const EducationPage: React.FC<EducationPageProps> = ({ viewArticle, articles }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('All');

  // Get unique categories and difficulties
  const categories = useMemo(() => {
    const allCategories = articles.map(article => {
      if (article.title.includes('Psychology') || article.title.includes('Mind')) return 'Psychology';
      if (article.title.includes('Risk') || article.title.includes('Management')) return 'Risk Management';
      if (article.title.includes('Technical') || article.title.includes('Analysis')) return 'Technical Analysis';
      if (article.title.includes('Drawdown') || article.title.includes('Static') || article.title.includes('Trailing')) return 'Account Types';
      if (article.title.includes('Scaling') || article.title.includes('Grow')) return 'Scaling';
      if (article.title.includes('Choose') || article.title.includes('Firm')) return 'Firm Selection';
      if (article.title.includes('Prop Trading') || article.title.includes('What is')) return 'Getting Started';
      if (article.title.includes('Glossary') || article.title.includes('Terms')) return 'Reference';
      return 'General';
    });
    return ['All', ...Array.from(new Set(allCategories))];
  }, [articles]);

  const difficulties = useMemo(() => {
    const allDifficulties = articles.map(article => {
      if (article.title.includes('Fundamentals') || article.title.includes('What is') || article.title.includes('Getting Started')) {
        return 'Beginner';
      }
      if (article.title.includes('Advanced') || article.title.includes('Scaling') || article.title.includes('Psychology')) {
        return 'Advanced';
      }
      return 'Intermediate';
    });
    return ['All', ...Array.from(new Set(allDifficulties))];
  }, [articles]);

  // Filter articles
  const filteredArticles = useMemo(() => {
    return articles.filter(article => {
      const matchesSearch = !searchTerm || 
        article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.summary.toLowerCase().includes(searchTerm.toLowerCase());

      const articleCategory = article.title.includes('Psychology') || article.title.includes('Mind') ? 'Psychology' :
        article.title.includes('Risk') || article.title.includes('Management') ? 'Risk Management' :
        article.title.includes('Technical') || article.title.includes('Analysis') ? 'Technical Analysis' :
        article.title.includes('Drawdown') || article.title.includes('Static') || article.title.includes('Trailing') ? 'Account Types' :
        article.title.includes('Scaling') || article.title.includes('Grow') ? 'Scaling' :
        article.title.includes('Choose') || article.title.includes('Firm') ? 'Firm Selection' :
        article.title.includes('Prop Trading') || article.title.includes('What is') ? 'Getting Started' :
        article.title.includes('Glossary') || article.title.includes('Terms') ? 'Reference' : 'General';

      const articleDifficulty = article.title.includes('Fundamentals') || article.title.includes('What is') || article.title.includes('Getting Started') ? 'Beginner' :
        article.title.includes('Advanced') || article.title.includes('Scaling') || article.title.includes('Psychology') ? 'Advanced' : 'Intermediate';

      const matchesCategory = selectedCategory === 'All' || articleCategory === selectedCategory;
      const matchesDifficulty = selectedDifficulty === 'All' || articleDifficulty === selectedDifficulty;

      return matchesSearch && matchesCategory && matchesDifficulty;
    });
  }, [articles, searchTerm, selectedCategory, selectedDifficulty]);

  // Get featured articles (first 3)
  const featuredArticles = articles.slice(0, 3);

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

      {/* Enhanced Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 text-center">
          <div className="text-3xl font-bold text-teal-600 mb-2">{articles.length}</div>
          <div className="text-sm text-slate-600">Total Articles</div>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 text-center">
          <div className="text-3xl font-bold text-slate-600 mb-2">8+</div>
          <div className="text-sm text-slate-600">Expert Authors</div>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 text-center">
          <div className="text-3xl font-bold text-blue-600 mb-2">{categories.length - 1}</div>
          <div className="text-sm text-slate-600">Categories</div>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 text-center">
          <div className="text-3xl font-bold text-green-600 mb-2">3</div>
          <div className="text-sm text-slate-600">Difficulty Levels</div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Search */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Search Articles</label>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by title or content..."
              className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
            />
          </div>

          {/* Category Filter */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Category</label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
            >
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>

          {/* Difficulty Filter */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Difficulty</label>
            <select
              value={selectedDifficulty}
              onChange={(e) => setSelectedDifficulty(e.target.value)}
              className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
            >
              {difficulties.map(difficulty => (
                <option key={difficulty} value={difficulty}>{difficulty}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Results count */}
        <div className="mt-4 text-sm text-slate-600">
          Showing {filteredArticles.length} of {articles.length} articles
        </div>
      </div>

      {/* Featured Articles Section */}
      {searchTerm === '' && selectedCategory === 'All' && selectedDifficulty === 'All' && (
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <img
              src="/images/icons/flame-3d.png"
              alt="Featured Articles"
              className="w-6 h-6 drop-shadow"
              draggable={false}
            />
            <h2 className="text-2xl font-bold text-slate-900">Featured Articles</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredArticles.map(article => (
              <ArticleCard key={article.id} article={article} viewArticle={viewArticle} />
            ))}
          </div>
        </div>
      )}


      {/* Articles Grid */}
      {filteredArticles.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map(article => (
            <ArticleCard key={article.id} article={article} viewArticle={viewArticle} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <div className="text-slate-400 mb-4">
            <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <h3 className="text-lg font-medium text-slate-900 mb-2">No articles found</h3>
          <p className="text-slate-500 mb-4">Try adjusting your search or filter criteria.</p>
          <button
            onClick={() => {
              setSearchTerm('');
              setSelectedCategory('All');
              setSelectedDifficulty('All');
            }}
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg text-white bg-gradient-to-r from-teal-500 to-slate-900 hover:from-teal-600 hover:to-slate-800 transition-all duration-300"
          >
            Clear Filters
          </button>
        </div>
      )}
    </div>
  );
};

export default EducationPage;
