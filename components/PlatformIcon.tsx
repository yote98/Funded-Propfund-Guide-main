import React from 'react';

interface PlatformIconProps {
  platform: string;
  size?: 'sm' | 'md' | 'lg';
  showLabel?: boolean;
}

const PlatformIcon: React.FC<PlatformIconProps> = ({ platform, size = 'md', showLabel = false }) => {
  const getPlatformIcon = (platform: string) => {
    const iconMap: { [key: string]: string } = {
      'MT4': '📊',
      'MT5': '📈',
      'cTrader': '⚡',
      'DXTrade': '🔷',
      'Tradovate': '🌊',
      'NinjaTrader': '🥷',
      'Rithmic': '🔗',
      'ProjectX': '🚀',
      'TradingView': '📊',
      'ThinkTrader': '🧠',
      'Bookmap': '📚',
      'Quantower': '🔢',
      'R | Trader': '📊',
      'ATAS': '📊',
      'Proprietary': '⚙️'
    };
    return iconMap[platform] || '💻';
  };

  const getSizeClasses = () => {
    switch (size) {
      case 'sm':
        return 'w-6 h-6 text-sm';
      case 'lg':
        return 'w-12 h-12 text-2xl';
      default:
        return 'w-8 h-8 text-lg';
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div className={`${getSizeClasses()} flex items-center justify-center bg-slate-100 rounded-lg border border-slate-200`}>
        {getPlatformIcon(platform)}
      </div>
      {showLabel && (
        <span className="text-xs text-slate-600 mt-1 text-center">
          {platform}
        </span>
      )}
    </div>
  );
};

export default PlatformIcon;
