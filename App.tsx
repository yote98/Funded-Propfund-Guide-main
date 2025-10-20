import React, { useState, useCallback, useEffect } from 'react';
import Header from './components/Header.tsx';
import Footer from './components/Footer.tsx';
import SEOHead from './components/SEOHead.tsx';
import ErrorBoundary from './components/ErrorBoundary.tsx';
import SkipNavigation from './components/SkipNavigation.tsx';
import LoadingSpinner from './components/LoadingSpinner.tsx';
import { lazy, Suspense } from 'react';
import HomePage from './pages/HomePage.tsx';
import AboutPage from './pages/AboutPage.tsx';

// Lazy load heavy pages for better performance
const FirmReviewPage = lazy(() => import('./pages/FirmReviewPage.tsx'));
const ComparisonPage = lazy(() => import('./pages/ComparisonPage.tsx'));
const EducationPage = lazy(() => import('./pages/EducationPage.tsx'));
const ArticlePage = lazy(() => import('./pages/ArticlePage.tsx'));
const GlossaryPage = lazy(() => import('./pages/GlossaryPage.tsx'));
const TradingToolsPage = lazy(() => import('./pages/TradingToolsPage.tsx'));
const AnalyticsPage = lazy(() => import('./pages/AnalyticsPage.tsx'));
const AuditPage = lazy(() => import('./pages/AuditPage.tsx'));
const AIBotPage = lazy(() => import('./pages/AIBotPage.tsx'));
import { Page, FirmId, ArticleId, PropFirm, Article, TradingTool } from './types.ts';
import { getPropFirms, getArticles } from './services/apiService.ts';
import { tradingTools } from './services/tradingToolsData.ts';
import { userReviews } from './services/reviewData.ts';
import { trackNavigation, analytics } from './utils/analytics';
import { getHomepageStructuredData, getFirmStructuredData, getArticleStructuredData, getBreadcrumbStructuredData } from './utils/structuredData';
import AnalyticsDashboard from './components/AnalyticsDashboard';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [selectedFirmId, setSelectedFirmId] = useState<FirmId | null>(null);
  const [selectedArticleId, setSelectedArticleId] = useState<ArticleId | null>(null);
  const [firms, setFirms] = useState<PropFirm[]>([]);
  const [allArticles, setAllArticles] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [initialSearchTerm, setInitialSearchTerm] = useState<string>('');

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const [firmsData, articlesData] = await Promise.all([
          getPropFirms(),
          getArticles(),
        ]);
        console.log("Loaded firms:", firmsData.map(f => f.id));
        console.log("Has Fundora:", firmsData.some(f => f.id === 'fundora'));
        setFirms(firmsData);
        setAllArticles(articlesData);
        console.log("App - articles loaded:", articlesData);
        console.log("App - articles length:", articlesData?.length);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();

    // Service worker registration removed to fix console errors
  }, []);

  // Browser history support
  useEffect(() => {
    const handlePopState = (event: PopStateEvent) => {
      const path = window.location.pathname;
      
      // Handle specific routes
      if (path.startsWith('/firm-review/')) {
        const firmId = path.split('/')[2] as FirmId;
        setSelectedFirmId(firmId.toLowerCase()); // Ensure lowercase for case-insensitive matching
        setCurrentPage('firm-review');
      } else if (path.startsWith('/article/')) {
        const articleId = path.split('/')[2] as ArticleId;
        setSelectedArticleId(articleId);
        setCurrentPage('article');
      } else {
        const page = (path.substring(1) as Page) || 'home';
        setCurrentPage(page);
        setSelectedFirmId(null);
        setSelectedArticleId(null);
      }
    };

    window.addEventListener('popstate', handlePopState);
    
    // Set initial page from URL
    const path = window.location.pathname;
    if (path.startsWith('/firm-review/')) {
      const firmId = path.split('/')[2] as FirmId;
      setSelectedFirmId(firmId.toLowerCase()); // Ensure lowercase for case-insensitive matching
      setCurrentPage('firm-review');
    } else if (path.startsWith('/article/')) {
      const articleId = path.split('/')[2] as ArticleId;
      setSelectedArticleId(articleId);
      setCurrentPage('article');
    } else {
      const page = (path.substring(1) as Page) || 'home';
      setCurrentPage(page);
    }

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  const navigateTo = useCallback((page: Page) => {
    // Track navigation
    trackNavigation(currentPage, page);
    
    setCurrentPage(page);
    setSelectedFirmId(null);
    setSelectedArticleId(null);
    window.scrollTo(0, 0);
    
    // Update browser history
    const newUrl = page === 'home' ? '/' : `/${page}`;
    window.history.pushState({ page }, '', newUrl);
  }, [currentPage]);
  
  const navigateToCompare = useCallback((searchTerm: string = '') => {
    setInitialSearchTerm(searchTerm);
    setCurrentPage('compare');
    window.scrollTo(0, 0);
    window.history.pushState({ page: 'compare' }, '', '/compare');
  }, []);

  const viewFirm = useCallback((firmId: FirmId) => {
    console.log('App: viewFirm called with firmId:', firmId);
    setSelectedFirmId(firmId.toLowerCase()); // Ensure lowercase for case-insensitive matching
    setCurrentPage('firm-review');
    window.scrollTo(0, 0);
    window.history.pushState({ page: 'firm-review', firmId }, '', `/firm-review/${firmId}`);
    console.log('App: Navigation to firm-review page completed');
  }, []);

  const viewArticle = useCallback((articleId: ArticleId) => {
    setSelectedArticleId(articleId);
    setCurrentPage('article');
    window.scrollTo(0, 0);
    window.history.pushState({ page: 'article', articleId }, '', `/article/${articleId}`);
  }, []);
  
  const renderPage = () => {
    if (isLoading) {
      return (
        <div className="flex justify-center items-center h-64">
          <LoadingSpinner size="lg" text="Loading Firms..." />
        </div>
      );
    }

    switch (currentPage) {
      case 'home':
        return (
          <>
            <SEOHead 
              title="Funded Program Guide - Your #1 Resource for Prop Trading Firms"
              description="Compare and choose the best proprietary trading firms. Expert reviews, detailed comparisons, and verified data to help you find the perfect prop firm for your trading style."
              keywords="prop trading, proprietary trading, funded trading, prop firms, trading firms, forex trading, futures trading, trading challenges, funded accounts"
              canonicalUrl="/"
              structuredData={getHomepageStructuredData()}
            />
            <HomePage viewFirm={viewFirm} firms={firms} navigateToCompare={navigateToCompare} />
          </>
        );
      case 'firm-review':
        console.log("Looking for firm with ID:", selectedFirmId);
        console.log("Available firm IDs:", firms.map(f => f.id));
        // Case-insensitive search for the firm
        const firm = firms.find(f => f.id.toLowerCase() === selectedFirmId);
        console.log("Found firm:", firm ? firm.name : "Not found");
        if (firm) {
          return (
            <>
              <SEOHead 
                title={`${firm.name} Review - ${firm.shortDescription}`}
                description={`Complete review of ${firm.name}: ${firm.overview}`}
                keywords={`${firm.name}, prop trading, ${firm.categories.join(', ')}, trading firm review`}
                canonicalUrl={`/firm-review/${firm.id}`}
                structuredData={getFirmStructuredData(firm)}
              />
              <Suspense fallback={<LoadingSpinner size="lg" text="Loading firm details..." />}>
                <FirmReviewPage firm={firm} />
              </Suspense>
            </>
          );
        }
        return <HomePage viewFirm={viewFirm} firms={firms} navigateToCompare={navigateToCompare} />;
      case 'compare':
        return (
          <>
            <SEOHead 
              title="Compare Prop Trading Firms - Side by Side Comparison"
              description="Compare proprietary trading firms side by side. Find the best prop firm for your trading style with our comprehensive comparison tool."
              keywords="compare prop firms, prop trading comparison, best prop firm, trading firm comparison"
              canonicalUrl="/compare"
            />
            <Suspense fallback={<LoadingSpinner size="lg" text="Loading comparison tool..." />}>
              <ComparisonPage viewFirm={viewFirm} firms={firms} initialSearchTerm={initialSearchTerm} onSearchHandled={() => setInitialSearchTerm('')} />
            </Suspense>
          </>
        );
      case 'education':
        return (
          <>
            <SEOHead 
              title="Prop Trading Education - Learn About Proprietary Trading"
              description="Learn everything about proprietary trading with our comprehensive educational resources. From basics to advanced strategies."
              keywords="prop trading education, proprietary trading guide, trading education, prop firm guide"
              canonicalUrl="/education"
            />
            <Suspense fallback={<LoadingSpinner size="lg" text="Loading education content..." />}>
              <EducationPage viewArticle={viewArticle} articles={allArticles} />
            </Suspense>
          </>
        );
      case 'about':
        return (
          <>
            <SEOHead 
              title="About Us - Funded Program Guide"
              description="Learn about Funded Program Guide, your trusted resource for proprietary trading firm reviews and comparisons."
              keywords="about funded program guide, prop trading resources, trading firm reviews"
              canonicalUrl="/about"
            />
            <AboutPage />
          </>
        );
      case 'glossary':
        return (
          <>
            <SEOHead 
              title="Prop Trading Glossary - Trading Terms Explained"
              description="Comprehensive glossary of proprietary trading terms and concepts. Learn the language of prop trading."
              keywords="prop trading glossary, trading terms, proprietary trading definitions, trading vocabulary"
              canonicalUrl="/glossary"
            />
            <Suspense fallback={<LoadingSpinner size="lg" text="Loading glossary..." />}>
              <GlossaryPage />
            </Suspense>
          </>
        );
      case 'trading-tools':
        return (
          <>
            <SEOHead 
              title="Trading Tools - Professional Trading Software & Platforms"
              description="Discover the best trading tools and software for prop traders. Professional platforms, analytics tools, and trading resources."
              keywords="trading tools, trading software, prop trading tools, trading platforms, trading analytics"
              canonicalUrl="/trading-tools"
            />
            <Suspense fallback={<LoadingSpinner size="lg" text="Loading trading tools..." />}>
              <TradingToolsPage tools={tradingTools} />
            </Suspense>
          </>
        );
      case 'analytics':
        return (
          <>
            <SEOHead 
              title="Prop Trading Analytics - Market Insights & Data"
              description="Comprehensive analytics and insights for the proprietary trading industry. Market trends, firm performance, and trading statistics."
              keywords="prop trading analytics, trading data, market insights, trading statistics, prop firm analytics"
              canonicalUrl="/analytics"
            />
            <Suspense fallback={<LoadingSpinner size="lg" text="Loading analytics..." />}>
              <AnalyticsPage firms={firms} reviews={userReviews} />
            </Suspense>
          </>
        );
      case 'audit':
        return (
          <>
            <SEOHead 
              title="Data Audit"
              description="Internal audit of firm data completeness"
              canonicalUrl="/audit"
            />
            <Suspense fallback={<LoadingSpinner size="lg" text="Loading audit data..." />}>
              <AuditPage firms={firms} />
            </Suspense>
          </>
        );
      case 'ai-bot':
        return (
          <>
            <SEOHead 
              title="AI Prop Firm Finder - Get Personalized Recommendations"
              description="Use our AI-powered bot to find the perfect prop trading firm based on your trading style, experience, and preferences. Get personalized recommendations in minutes."
              keywords="AI prop firm finder, prop trading recommendations, AI trading bot, personalized prop firm matching, trading style analysis"
              canonicalUrl="/ai-bot"
            />
            <Suspense fallback={<LoadingSpinner size="lg" text="Loading AI bot..." />}>
              <AIBotPage firms={firms} onViewFirmDetails={(firmId) => viewFirm(firmId)} />
            </Suspense>
          </>
        );
      case 'article':
        const article = allArticles.find(a => a.id === selectedArticleId);
        if (article) {
          return (
            <>
              <SEOHead 
                title={article.title}
                description={article.summary}
                keywords={`${article.title}, prop trading, trading education, ${article.author}`}
                canonicalUrl={`/article/${article.id}`}
                structuredData={getArticleStructuredData(article)}
              />
              <Suspense fallback={<LoadingSpinner size="lg" text="Loading article..." />}>
                <ArticlePage article={article} navigateToEducation={() => navigateTo('education')} />
              </Suspense>
            </>
          );
        }
        return (
          <Suspense fallback={<LoadingSpinner size="lg" text="Loading education content..." />}>
            <EducationPage viewArticle={viewArticle} articles={allArticles} />
          </Suspense>
        );
      default:
        return <HomePage viewFirm={viewFirm} firms={firms} navigateToCompare={navigateToCompare} />;
    }
  };

  return (
    <ErrorBoundary>
      <div className="min-h-screen flex flex-col">
        <SkipNavigation />
        <Header navigateTo={navigateTo} currentPage={currentPage} />
        <main id="main-content" className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8" role="main">
          {renderPage()}
        </main>
        <Footer navigateTo={navigateTo} />
        <AnalyticsDashboard />
      </div>
    </ErrorBoundary>
  );
};

export default App;