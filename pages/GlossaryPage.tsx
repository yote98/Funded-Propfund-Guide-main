import React from 'react';
import GlossaryTerm from '../components/GlossaryTerm.tsx';

const glossaryTerms = [
  // Risk Management Terms
  {
    term: 'Drawdown',
    definition: 'The maximum amount of money an account can lose before it is closed. This is the primary risk management rule for prop firms.',
    category: 'Risk Management'
  },
  {
    term: 'Static Drawdown',
    definition: 'A fixed maximum loss limit based on the initial account balance. For example, a 10% static drawdown on a $100k account means the account equity cannot drop below $90,000, regardless of how much profit is made.',
    category: 'Risk Management'
  },
  {
    term: 'Trailing Drawdown',
    definition: 'A maximum loss limit that trails (follows) the highest point of your account balance. For example, a 5% trailing drawdown on a $100k account that reaches $105k in equity will have its loss limit moved up to $99,750 ($105k - 5%). It typically does not trail back down.',
    category: 'Risk Management'
  },
  {
    term: 'Daily Loss Limit',
    definition: 'The maximum amount of money a trader is allowed to lose in a single trading day. Exceeding this limit usually results in the account being closed.',
    category: 'Risk Management'
  },
  {
    term: 'Risk-Reward Ratio',
    definition: 'The relationship between the potential profit (reward) and the potential loss (risk) on a trade. A 1:3 risk-reward ratio means risking $1 to make $3.',
    category: 'Risk Management'
  },
  {
    term: 'Leverage',
    definition: 'The use of borrowed money to trade larger position sizes than your account balance allows. For example, 1:100 leverage means you can trade with 100 times your account size.',
    category: 'Risk Management'
  },
  {
    term: 'Margin Call',
    definition: 'When your account equity drops below the required minimum margin level, forcing you to close positions or deposit more funds to maintain open trades.',
    category: 'Risk Management'
  },
  
  // Account & Funding Terms
  {
    term: 'Proprietary Trading (Prop Trading)',
    definition: 'When a firm trades financial instruments with its own capital, rather than with clients\' money. Modern prop firms recruit retail traders to trade this capital in exchange for a profit share.',
    category: 'Account & Funding'
  },
  {
    term: 'Evaluation / Challenge',
    definition: 'A test period where a trader must meet specific profit targets and risk management rules (like drawdown) to prove their skill and get a funded account.',
    category: 'Account & Funding'
  },
  {
    term: 'Instant Funding',
    definition: 'A type of account that allows a trader to bypass the evaluation phase and start trading a live funded account immediately, usually for a higher initial fee.',
    category: 'Account & Funding'
  },
  {
    term: 'Profit Target',
    definition: 'The amount of profit a trader must make during an evaluation to pass and receive a funded account. It is usually expressed as a percentage of the initial account balance.',
    category: 'Account & Funding'
  },
  {
    term: 'Profit Split',
    definition: 'The percentage of profits the trader keeps from a funded account. A 90% profit split means the trader receives 90% of the profits, and the firm keeps 10%.',
    category: 'Account & Funding'
  },
  {
    term: 'Scaling Plan',
    definition: 'A program offered by prop firms to increase a trader\'s account size based on consistent profitability. For example, a firm might increase your account by 25% every three months you are profitable.',
    category: 'Account & Funding'
  },
  {
    term: 'Payout Method',
    definition: 'The method used to withdraw profits from your funded account, such as bank transfer, PayPal, cryptocurrency, or wire transfer. Different firms offer different options.',
    category: 'Account & Funding'
  },
  {
    term: 'Verification / KYC',
    definition: 'Know Your Customer - the identity verification process required by prop firms and regulatory bodies. Usually involves submitting ID, proof of address, and sometimes a video call.',
    category: 'Account & Funding'
  },
  
  // Trading Rules Terms
  {
    term: 'Expert Advisor (EA)',
    definition: 'An automated trading program that runs on a trading platform like MetaTrader. Some firms allow their use, while others restrict them.',
    category: 'Trading Rules'
  },
  {
    term: 'Weekend Holding',
    definition: 'The practice of keeping trading positions open over the weekend. This is often restricted by Forex/CFD firms due to the risk of large price gaps at the market open.',
    category: 'Trading Rules'
  },
  {
    term: 'Minimum Trading Days',
    definition: 'The minimum number of days a trader must place a trade during an evaluation phase. Many firms have removed this rule, but some still require it to prevent traders from gambling to pass quickly.',
    category: 'Trading Rules'
  },
  {
    term: 'News Trading Restriction',
    definition: 'Some firms restrict trading during major economic news releases due to extreme volatility and potential for large, sudden price movements.',
    category: 'Trading Rules'
  },
  {
    term: 'Market Hours',
    definition: 'The trading hours when a market is open for trading. Forex trades 24/5 (Monday-Friday), while stocks have specific opening and closing times.',
    category: 'Trading Rules'
  },
  
  // Trading Concepts
  {
    term: 'Slippage',
    definition: 'The difference between the expected execution price and the actual execution price of a trade. Often occurs during high-volatility periods or with fast-moving markets.',
    category: 'Trading Concepts'
  },
  {
    term: 'Volatility',
    definition: 'A measure of how much a market price fluctuates. High volatility means rapid, large price swings, while low volatility means slower, smaller price movements.',
    category: 'Trading Concepts'
  },
  {
    term: 'Pip',
    definition: 'The smallest price movement in a currency pair. For most pairs, 1 pip = 0.0001. Used to calculate profit and loss in forex trading.',
    category: 'Trading Concepts'
  },
  {
    term: 'Lot Size',
    definition: 'The quantity of a financial instrument in a trade. For forex, standard lot = 100,000 units, mini lot = 10,000 units, micro lot = 1,000 units.',
    category: 'Trading Concepts'
  },
  {
    term: 'Stop Loss',
    definition: 'An order placed to automatically close a losing trade at a predetermined price to limit losses. Essential for risk management.',
    category: 'Trading Concepts'
  },
  {
    term: 'Take Profit',
    definition: 'An order placed to automatically close a winning trade at a predetermined price to secure profits.',
    category: 'Trading Concepts'
  },
  
  // Market & Platforms
  {
    term: 'MetaTrader 4 (MT4)',
    definition: 'A popular trading platform used by many prop firms and brokers. Supports automated trading through Expert Advisors (EAs) and technical analysis tools.',
    category: 'Platforms & Markets'
  },
  {
    term: 'MetaTrader 5 (MT5)',
    definition: 'An upgraded version of MetaTrader 4 with additional features, more timeframes, and improved functionality. Some firms use this instead of MT4.',
    category: 'Platforms & Markets'
  },
  {
    term: 'cTrader',
    definition: 'An alternative trading platform to MetaTrader, known for its user-friendly interface and advanced charting tools. Some prop firms offer this platform.',
    category: 'Platforms & Markets'
  },
  {
    term: 'Forex',
    definition: 'The Foreign Exchange market where currencies are traded. The largest and most liquid financial market globally, trading 24/5.',
    category: 'Platforms & Markets'
  },
  {
    term: 'Futures',
    definition: 'Contracts to buy or sell an asset at a predetermined price on a future date. Common in commodities, stocks, and indices trading.',
    category: 'Platforms & Markets'
  },
  {
    term: 'CFD (Contract for Difference)',
    definition: 'A derivative that allows trading on the price movement of an asset without owning the underlying asset. Popular in prop trading.',
    category: 'Platforms & Markets'
  }
];

// Group terms by category
const groupedTerms = glossaryTerms.reduce((acc, term) => {
  const category = term.category || 'General';
  if (!acc[category]) {
    acc[category] = [];
  }
  acc[category].push(term);
  return acc;
}, {} as Record<string, typeof glossaryTerms>);

// Sort categories
const sortedCategories = Object.keys(groupedTerms).sort();

// Category colors
const categoryColors: Record<string, { bg: string; border: string; text: string; icon: string }> = {
  'Risk Management': { bg: 'from-red-50 to-rose-50', border: 'border-red-200', text: 'text-red-700', icon: '⚠️' },
  'Account & Funding': { bg: 'from-green-50 to-emerald-50', border: 'border-green-200', text: 'text-green-700', icon: '💰' },
  'Trading Rules': { bg: 'from-blue-50 to-cyan-50', border: 'border-blue-200', text: 'text-blue-700', icon: '📋' },
  'Trading Concepts': { bg: 'from-purple-50 to-violet-50', border: 'border-purple-200', text: 'text-purple-700', icon: '💡' },
  'Platforms & Markets': { bg: 'from-orange-50 to-amber-50', border: 'border-orange-200', text: 'text-orange-700', icon: '📊' },
  'General': { bg: 'from-slate-50 to-slate-100', border: 'border-slate-200', text: 'text-slate-700', icon: '📚' }
};

const GlossaryPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-extrabold text-slate-900 tracking-tight mb-4">Prop Trading Glossary</h1>
        <p className="mt-2 max-w-2xl mx-auto text-lg text-slate-600">
          Your comprehensive reference guide to key terms and concepts in proprietary trading
        </p>
      </div>

      {/* Category Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
        <div className="bg-gradient-to-br from-red-50 to-rose-50 border border-red-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all">
          <div className="text-3xl mb-2">⚠️</div>
          <h3 className="font-bold text-slate-900">Risk Management</h3>
          <p className="text-sm text-slate-600 mt-1">7 terms</p>
        </div>
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all">
          <div className="text-3xl mb-2">💰</div>
          <h3 className="font-bold text-slate-900">Account & Funding</h3>
          <p className="text-sm text-slate-600 mt-1">7 terms</p>
        </div>
        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all">
          <div className="text-3xl mb-2">📋</div>
          <h3 className="font-bold text-slate-900">Trading Rules</h3>
          <p className="text-sm text-slate-600 mt-1">5 terms</p>
        </div>
        <div className="bg-gradient-to-br from-purple-50 to-violet-50 border border-purple-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all">
          <div className="text-3xl mb-2">💡</div>
          <h3 className="font-bold text-slate-900">Trading Concepts</h3>
          <p className="text-sm text-slate-600 mt-1">6 terms</p>
        </div>
        <div className="bg-gradient-to-br from-orange-50 to-amber-50 border border-orange-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all">
          <div className="text-3xl mb-2">📊</div>
          <h3 className="font-bold text-slate-900">Platforms & Markets</h3>
          <p className="text-sm text-slate-600 mt-1">6 terms</p>
        </div>
      </div>

      {/* Glossary Terms by Category */}
      <div className="space-y-12">
        {sortedCategories.map((category) => {
          const colors = categoryColors[category] || categoryColors['General'];
          const terms = groupedTerms[category];
          
          return (
            <div key={category}>
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl">{colors.icon}</span>
                <div>
                  <h2 className={`text-2xl font-bold text-slate-900`}>{category}</h2>
                  <p className="text-sm text-slate-500">{terms.length} term{terms.length !== 1 ? 's' : ''}</p>
                </div>
              </div>

              {/* Terms Grid */}
              <div className={`bg-gradient-to-br ${colors.bg} border ${colors.border} rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300`}>
                <div className="space-y-6">
                  {terms
                    .sort((a, b) => a.term.localeCompare(b.term))
                    .map((item, index) => (
                      <div key={item.term} className="group">
                        {/* Term with number */}
                        <div className="flex items-start gap-4">
                          <div className={`flex-shrink-0 w-8 h-8 rounded-lg ${colors.text} bg-white font-bold flex items-center justify-center text-sm shadow-sm`}>
                            {index + 1}
                          </div>
                          <div className="flex-1">
                            <h3 className="text-lg font-bold text-slate-900 group-hover:text-slate-700 transition-colors">{item.term}</h3>
                            <p className="mt-2 text-slate-700 leading-relaxed">{item.definition}</p>
                          </div>
                        </div>
                        
                        {/* Divider (except last item) */}
                        {index < terms.length - 1 && (
                          <div className="mt-6 ml-12 border-t border-slate-300 opacity-30"></div>
                        )}
                      </div>
                    ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer Note */}
      <div className="mt-12 bg-blue-50 border border-blue-200 rounded-2xl p-6 text-center">
        <p className="text-slate-700 text-sm">
          <strong>💡 Tip:</strong> Understanding these terms will help you navigate prop trading requirements and choose the best firm for your trading style.
        </p>
      </div>
    </div>
  );
};

export default GlossaryPage;