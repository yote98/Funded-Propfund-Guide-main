import React, { useState } from 'react';

interface LogoProps {
  firmName: string;
  logoUrl: string;
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ firmName, logoUrl, className = "" }) => {
  const [error, setError] = useState(false);
  const [currentUrlIndex, setCurrentUrlIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  // Official logo URLs for specific firms
  const getOfficialLogoUrls = (firmName: string): string[] => {
    const officialUrls: { [key: string]: string[] } = {
      'Apex Trader Funding': [
        '/logos/apex-trader-funding.png',
        '/logos/apex-trader-funding-logo.png',
        'https://logo.clearbit.com/apextraderfunding.com',
        'https://apextraderfunding.com/wp-content/uploads/2024/01/apex-logo-new.png',
        'https://apextraderfunding.com/wp-content/uploads/2023/04/Apex-Trader-Funding-Logo.png',
        'https://apextraderfunding.com/wp-content/uploads/2023/04/Apex-Trader-Funding-Logo.jpg',
        'https://apextraderfunding.com/wp-content/uploads/2022/01/apex-logo.png',
        'https://apextraderfunding.com/wp-content/uploads/2021/01/apex-logo.png'
      ],
      'FTMO': [
        'https://logo.clearbit.com/ftmo.com',
        'https://ftmo.com/wp-content/uploads/2023/01/ftmo-logo.png',
        'https://ftmo.com/wp-content/uploads/2022/01/ftmo-logo-new.png'
      ],
      'The 5%ers': [
        'https://logo.clearbit.com/the5ers.com',
        'https://the5ers.com/wp-content/uploads/2023/01/5ers-logo.png',
        'https://the5ers.com/wp-content/uploads/2022/01/5ers-logo-new.png'
      ],
      'Audacity Capital': [
        'https://logo.clearbit.com/audacitycapital.co.uk',
        'https://audacitycapital.co.uk/wp-content/uploads/2023/01/audacity-logo.png'
      ],
      'City Traders Imperium': [
        'https://logo.clearbit.com/citytradersimperium.com',
        'https://citytradersimperium.com/wp-content/uploads/2023/01/cti-logo.png'
      ],
      'Funding Pips': [
        'https://logo.clearbit.com/fundingpips.com',
        'https://fundingpips.com/wp-content/uploads/2023/01/funding-pips-logo.png'
      ],
      'TopTier Trader': [
        'https://logo.clearbit.com/toptiertrader.com',
        'https://toptiertrader.com/wp-content/uploads/2023/01/toptier-logo.png'
      ],
      'Edgeful': [
        '/logos/edgeful.png',
        'https://logo.clearbit.com/edgeful.com',
        'https://edgeful.com/logo.png',
        'https://edgeful.com/assets/logo.png'
      ],
      'FXIFY': [
        'https://logo.clearbit.com/fxify.com',
        'https://fxify.com/wp-content/uploads/2023/01/fxify-logo.png'
      ],
      'Topstep': [
        'https://logo.clearbit.com/topstep.com',
        'https://topstep.com/wp-content/uploads/2023/01/topstep-logo.png'
      ],
      'Top One Futures': [
        'https://asset.brandfetch.io/idAnG_zh9l/idZ3yPxofK.png?v=2',
        'https://asset.brandfetch.io/idAnG_zh9l/theme/dark/symbol.svg?v=2',
        'https://img.brandfetch.io/toponefutures.com/logo?c=white&height=80&format=png',
        'https://logo.clearbit.com/toponefutures.com'
      ],
      'Funding Ticks': [
        '/logos/funding-ticks.png',
        '/logos/funding-ticks.jpg',
        '/logos/funding-ticks.jpeg'
      ],
      'The Legend Trading': [
        '/logos/the-legend-trading.png',
        '/logos/legend-trading.png',
        '/logos/the-legend-trading.jpg',
        '/logos/the-legend-trading.jpeg'
      ],
      'BitFunded': [
        '/logos/bitfunded.png',
        '/logos/bitfunded-logo.png'
      ],
      'QuantFunded': [
        '/logos/quantfunded.png',
        '/logos/quantfunded.jpg',
        '/logos/quantfunded.jpeg'
      ],
      'Venus Funded': [
        '/logos/venus-funded.png',
        '/logos/venus-funded-logo.png'
      ],
      'Quant': [
        '/logos/quant.png',
        '/logos/quant-funded.png',
        '/logos/quant-logo.png'
      ],
      'BluSky Trading': [
        'https://logo.clearbit.com/bluskytrading.com',
        'https://bluskytrading.com/wp-content/uploads/2023/01/blusky-logo.png'
      ],
      'My Funded Futures': [
        'https://logo.clearbit.com/myfundedfutures.com',
        'https://myfundedfutures.com/wp-content/uploads/2023/01/mff-logo.png'
      ],
      'SeacrestFunded': [
        'https://logo.clearbit.com/seacrestmarkets.io',
        'https://funded.seacrestmarkets.io/android-chrome-192x192.png',
        'https://funded.seacrestmarkets.io/favicon-32x32.png'
      ],
          // Trading Tools
          'Edgeful': [
            '/logos/edgeful.png',
            'https://logo.clearbit.com/edgeful.com',
            'https://edgeful.com/favicon.ico',
            'https://edgeful.com/logo.png'
          ],
      'Lux Algo': [
        'https://logo.clearbit.com/luxalgo.com',
        'https://luxalgo.com/favicon.ico',
        'https://luxalgo.com/logo.png'
      ],
      'True Algo': [
        'https://logo.clearbit.com/truealgo.com',
        'https://truealgo.com/favicon.ico',
        'https://truealgo.com/logo.png'
      ],
      'Unusual Whales': [
        'https://logo.clearbit.com/unusualwhales.com',
        'https://unusualwhales.com/favicon.ico',
        'https://unusualwhales.com/logo.png'
      ],
      'Cheddar Flow': [
        'https://logo.clearbit.com/cheddarflow.com',
        'https://cheddarflow.com/favicon.ico',
        'https://cheddarflow.com/logo.png'
      ],
      'ATAS': [
        'https://logo.clearbit.com/atas.net',
        'https://atas.net/favicon.ico',
        'https://atas.net/logo.png'
      ]
    };
    return officialUrls[firmName] || [];
  };

  // Build local-first candidate paths based on the firm name slug
  const getLocalCandidates = (name: string): string[] => {
    const toSlug = (value: string) => value
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');
    const slug = toSlug(name);
    const bases = [
      `/logos/${slug}`,
      `/logos/${slug}-logo`,
    ];
    const exts = ['.png', '.jpg', '.jpeg', '.webp'];
    const local: string[] = [];
    bases.forEach(base => exts.forEach(ext => local.push(`${base}${ext}`)));
    return local;
  };

  // Generate a consistent gradient based on firm name
  const getGradientForFirm = (name: string): string => {
    const gradients = [
      'from-blue-500 to-cyan-500',
      'from-purple-500 to-pink-500',
      'from-green-500 to-teal-500',
      'from-orange-500 to-red-500',
      'from-indigo-500 to-blue-500',
      'from-pink-500 to-rose-500',
      'from-teal-500 to-emerald-500',
      'from-violet-500 to-purple-500',
      'from-amber-500 to-orange-500',
      'from-cyan-500 to-blue-500',
    ];
    // Generate consistent index based on name
    const hash = name.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    return gradients[hash % gradients.length];
  };

  const handleError = () => {
    const officialUrls = getOfficialLogoUrls(firmName);
    const localFirst = getLocalCandidates(firmName);
    const total = localFirst.length + officialUrls.length + (logoUrl ? 1 : 0);
    if (currentUrlIndex < total - 1) {
      setCurrentUrlIndex(currentUrlIndex + 1);
      setIsLoading(true);
    } else {
      setError(true);
      setIsLoading(false);
    }
  };

  // Enhanced fallback badge with gradient
  if (error || !logoUrl) {
    const initials = firmName
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase()
      .substring(0, 2);
    
    const gradient = getGradientForFirm(firmName);
    
    return (
      <div 
        className={`${className} flex items-center justify-center bg-gradient-to-br ${gradient} rounded-lg shadow-lg transform transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:rotate-2`}
        title={firmName}
      >
        <span className="text-white font-bold text-2xl tracking-wider drop-shadow-lg">
          {initials}
        </span>
      </div>
    );
  }

  // Try local name-based paths first, then ONLY curated local fallbacks, then provided logoUrl
  // We intentionally skip remote logo providers (e.g., clearbit) to avoid noisy network errors
  const localFirst: string[] = getLocalCandidates(firmName);
  const officialUrls = getOfficialLogoUrls(firmName).filter((u) => u.startsWith('/'));
  const candidates = [...localFirst, ...officialUrls, ...(logoUrl ? [logoUrl] : [])];
  const currentUrl = currentUrlIndex < candidates.length ? candidates[currentUrlIndex] : '';


  // Apply special styling for logos which need resizing
  const specialStyles = firmName === 'Fundora' ? { maxWidth: '80%', maxHeight: '80%' } : 
                       firmName === 'Edgeful' ? { maxWidth: '120%', maxHeight: '120%', transform: 'scale(1.2)' } : {};
  
  return (
    <div className={`${className} relative overflow-hidden rounded-lg ${firmName === 'Edgeful' ? 'bg-white' : ''}`}>
      {/* Loading skeleton */}
      {isLoading && (
        <div className="absolute inset-0 bg-gradient-to-r from-slate-200 via-slate-300 to-slate-200 animate-pulse rounded-lg" />
      )}
      
      {/* Actual logo image */}
      <img
        src={currentUrl}
        alt={`${firmName} Logo`}
        className={`${className} transition-all duration-300 hover:scale-110 hover:brightness-110 ${isLoading ? 'opacity-0' : 'opacity-100'} ${firmName === 'Edgeful' ? 'mix-blend-multiply' : ''}`}
        style={specialStyles}
        referrerPolicy="no-referrer"
        onError={handleError}
        onLoad={() => setIsLoading(false)}
      />
    </div>
  );
};

export default Logo;
