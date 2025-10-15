import React, { useState } from 'react';

interface LogoProps {
  firmName: string;
  logoUrl: string;
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ firmName, logoUrl, className = "" }) => {
  const [error, setError] = useState(false);
  const [currentUrlIndex, setCurrentUrlIndex] = useState(0);

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
      'FXIFY': [
        'https://logo.clearbit.com/fxify.com',
        'https://fxify.com/wp-content/uploads/2023/01/fxify-logo.png'
      ],
      'Topstep': [
        'https://logo.clearbit.com/topstep.com',
        'https://topstep.com/wp-content/uploads/2023/01/topstep-logo.png'
      ],
      'Top One Futures': [
        '/logos/top-one-futures-icon.png',
        'https://img.brandfetch.io/toponefutures.com/logo?c=white&height=80&format=png',
        'https://logo.clearbit.com/toponefutures.com',
        'https://toponefutures.com/_nuxt/img/topoone-logo.6f6aef5.png',
        'https://app.toponefutures.com/_nuxt/img/topoone-logo.6f6aef5.png'
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

  const handleError = () => {
    console.log(`Logo failed to load for ${firmName}, trying next URL...`);
    const officialUrls = getOfficialLogoUrls(firmName);
    const localFirst = getLocalCandidates(firmName);
    const total = localFirst.length + officialUrls.length + (logoUrl ? 1 : 0);
    if (currentUrlIndex < total - 1) {
      setCurrentUrlIndex(currentUrlIndex + 1);
    } else {
      console.log(`All logo URLs failed for ${firmName}, showing fallback`);
      setError(true);
    }
  };

  if (error || !logoUrl) {
    // Generate a consistent color based on the firm name
    const colors = [
      'bg-gradient-to-br from-blue-500 to-blue-700',
      'bg-gradient-to-br from-teal-500 to-teal-700',
      'bg-gradient-to-br from-purple-500 to-purple-700',
      'bg-gradient-to-br from-indigo-500 to-indigo-700',
      'bg-gradient-to-br from-green-500 to-green-700',
      'bg-gradient-to-br from-orange-500 to-orange-700',
    ];
    const colorIndex = firmName.charCodeAt(0) % colors.length;
    const bgColor = colors[colorIndex];
    
    return (
      <div className={`${className} flex items-center justify-center ${bgColor} text-white font-bold rounded-lg shadow-sm`}>
        <span className="text-lg">{firmName.substring(0, 2).toUpperCase()}</span>
      </div>
    );
  }

  // Try a local name-based path first, then curated fallbacks, then provided logoUrl
  const localFirst: string[] = getLocalCandidates(firmName);
  const officialUrls = getOfficialLogoUrls(firmName);
  const candidates = [...localFirst, ...officialUrls, ...(logoUrl ? [logoUrl] : [])];
  const currentUrl = currentUrlIndex < candidates.length ? candidates[currentUrlIndex] : '';

  console.log(`Loading logo for ${firmName}: ${currentUrl}`);

  return (
    <img
      src={currentUrl}
      alt={`${firmName} Logo`}
      className={className}
      referrerPolicy="no-referrer"
      onError={handleError}
      onLoad={() => console.log(`Logo loaded successfully for ${firmName}`)}
    />
  );
};

export default Logo;
