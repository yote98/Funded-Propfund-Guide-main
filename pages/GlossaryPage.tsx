import React from 'react';
import GlossaryTerm from '../components/GlossaryTerm.tsx';

const glossaryTerms = [
  {
    term: 'Proprietary Trading (Prop Trading)',
    definition: 'When a firm trades financial instruments with its own capital, rather than with clients\' money. Modern prop firms recruit retail traders to trade this capital in exchange for a profit share.'
  },
  {
    term: 'Evaluation / Challenge',
    definition: 'A test period where a trader must meet specific profit targets and risk management rules (like drawdown) to prove their skill and get a funded account.'
  },
  {
    term: 'Profit Split',
    definition: 'The percentage of profits the trader keeps from a funded account. A 90% profit split means the trader receives 90% of the profits, and the firm keeps 10%.'
  },
  {
    term: 'Drawdown',
    definition: 'The maximum amount of money an account can lose before it is closed. This is the primary risk management rule for prop firms.'
  },
  {
    term: 'Static Drawdown',
    definition: 'A fixed maximum loss limit based on the initial account balance. For example, a 10% static drawdown on a $100k account means the account equity cannot drop below $90,000, regardless of how much profit is made.'
  },
  {
    term: 'Trailing Drawdown',
    definition: 'A maximum loss limit that trails (follows) the highest point of your account balance. For example, a 5% trailing drawdown on a $100k account that reaches $105k in equity will have its loss limit moved up to $99,750 ($105k - 5%). It typically does not trail back down.'
  },
  {
    term: 'Daily Loss Limit',
    definition: 'The maximum amount of money a trader is allowed to lose in a single trading day. Exceeding this limit usually results in the account being closed.'
  },
  {
    term: 'Profit Target',
    definition: 'The amount of profit a trader must make during an evaluation to pass and receive a funded account. It is usually expressed as a percentage of the initial account balance.'
  },
  {
    term: 'Scaling Plan',
    definition: 'A program offered by prop firms to increase a trader\'s account size based on consistent profitability. For example, a firm might increase your account by 25% every three months you are profitable.'
  },
  {
    term: 'Instant Funding',
    definition: 'A type of account that allows a trader to bypass the evaluation phase and start trading a live funded account immediately, usually for a higher initial fee.'
  },
  {
    term: 'Expert Advisor (EA)',
    definition: 'An automated trading program that runs on a trading platform like MetaTrader. Some firms allow their use, while others restrict them.'
  },
  {
    term: 'Weekend Holding',
    definition: 'The practice of keeping trading positions open over the weekend. This is often restricted by Forex/CFD firms due to the risk of large price gaps at the market open.'
  },
   {
    term: 'Minimum Trading Days',
    definition: 'The minimum number of days a trader must place a trade during an evaluation phase. Many firms have removed this rule, but some still require it to prevent traders from gambling to pass quickly.'
  }
];

// Extended glossary (concise prop-trading + market terms)
glossaryTerms.push(
  { term: 'Payout Cycle', definition: 'How often profits can be withdrawn (e.g., 14/30 days after first trade, then bi‑weekly).' },
  { term: 'Violation / Breach', definition: 'Breaking a rule (daily loss, max drawdown, news ban, etc.). Usually ends the account.' },
  { term: 'Soft Breach', definition: 'A rule break that disables new trades but keeps the account open (some firms); opposite of hard breach.' },
  { term: 'Reset', definition: 'Paying to restart an evaluation with fresh rules and balance.' },
  { term: 'Extension', definition: 'Additional time granted to complete an evaluation when close to target and rules respected.' },
  { term: 'Leverage', definition: 'Borrowed capital that magnifies position size. 1:100 leverage allows $100k exposure with $1k.' },
  { term: 'Margin', definition: 'Collateral required to open/hold a position. Free margin = equity − used margin.' },
  { term: 'Equity', definition: 'Balance plus unrealized P/L. Most firms calculate drawdown and daily loss on equity.' },
  { term: 'Stop‑out', definition: 'Broker closes positions when equity falls below a margin threshold.' },
  { term: 'Lot / Contract', definition: 'Standard position unit (e.g., 1.0 FX lot = 100,000 base currency; futures = 1 exchange contract).' },
  { term: 'Pip / Tick', definition: 'Smallest price increment: pip for FX, tick for futures/stocks/CFDs.' },
  { term: 'Spread', definition: 'Difference between bid and ask; implicit trading cost that widens during news/illiquidity.' },
  { term: 'Commission', definition: 'Explicit per‑trade fee charged by broker/execution venue.' },
  { term: 'Swap / Rollover', definition: 'Financing cost/credit for overnight FX/CFD positions; futures embed financing in price.' },
  { term: 'Funding Rate', definition: 'Periodic payment between long/short in perpetual futures to anchor price to spot.' },
  { term: 'Slippage', definition: 'Execution at a different price than requested due to latency or liquidity.' },
  { term: 'Market Order', definition: 'Executes immediately at best available price.' },
  { term: 'Limit Order', definition: 'Executes at a specified price or better; provides liquidity.' },
  { term: 'Stop Order', definition: 'Triggers a market/limit order once price reaches a stop level (e.g., stop‑loss, stop entry).' },
  { term: 'GTC / IOC / FOK', definition: 'Order time‑in‑force: Good‑Till‑Cancelled; Immediate‑Or‑Cancel; Fill‑Or‑Kill.' },
  { term: 'Risk per Trade', definition: 'Amount you are willing to lose on one trade (e.g., 0.5–1% of equity).' },
  { term: 'Position Sizing', definition: 'Calculating lot size from risk, stop distance, and instrument value per pip/tick.' },
  { term: 'Risk‑Reward Ratio (R:R)', definition: 'Potential reward relative to risk. A 2R target vs 1R risk has R:R = 2:1.' },
  { term: 'Win Rate', definition: 'Percentage of trades that are profitable.' },
  { term: 'Expectancy', definition: 'Average P/L per trade = (win rate × avg win) − (loss rate × avg loss).' },
  { term: 'Sharpe Ratio', definition: 'Risk‑adjusted return measure = excess return divided by volatility.' },
  { term: 'Max Drawdown (MDD)', definition: 'Largest peak‑to‑trough equity decline over a period.' },
  { term: 'MAE / MFE', definition: 'Maximum Adverse/Favourable Excursion: worst/best unrealized P/L during a trade.' },
  { term: 'ATR (Average True Range)', definition: 'Volatility indicator used for stops/targets/sizing.' },
  { term: 'Correlation', definition: 'Statistical relationship between instruments; high correlation increases portfolio risk.' },
  { term: 'Hedge', definition: 'Position that offsets risk in another position or portfolio.' },
  { term: 'Pyramiding', definition: 'Adding to winning positions as equity grows; must respect firm max risk rules.' },
  { term: 'Averaging Down', definition: 'Adding to losing positions; generally discouraged and often causes breaches.' },
  { term: 'News Trading Ban', definition: 'Restriction on opening/holding trades during high‑impact news windows.' },
  { term: 'Weekend Holding Ban', definition: 'Rule that forbids carrying positions over the weekend for certain assets.' },
  { term: 'Copy Trading / Trade Copier', definition: 'Mirroring trades from another account. Many firms restrict or monitor for latency abuse.' },
  { term: 'Latency Arbitrage', definition: 'Exploiting price feed delays; commonly prohibited and leads to account termination.' },
  { term: 'Martingale / Grid', definition: 'Aggressive sizing algorithms that escalate risk; often banned by prop firms.' },
  { term: 'Backtesting', definition: 'Testing a strategy on historical data.' },
  { term: 'Forward Testing / Paper Trading', definition: 'Testing in real time without risking capital (demo account).' },
  { term: 'CFD', definition: 'Contract for Difference; derivative allowing long/short exposure without owning the asset.' },
  { term: 'Futures', definition: 'Standardised exchange‑traded contracts with central clearing and fixed tick values.' },
  { term: 'Options', definition: 'Derivatives giving the right, not obligation, to buy/sell at a strike price before expiry.' },
  { term: 'KYC / AML', definition: 'Know‑Your‑Customer / Anti‑Money‑Laundering identity and compliance checks before payouts.' },
  { term: 'Scaling Rules', definition: 'Limits on max lots or equity risk until certain profit or time thresholds are met.' },
  { term: 'Two‑Phase / One‑Phase / Instant', definition: 'Common evaluation models: two steps, single step, or live funding with higher fees.' }
);

const GlossaryPage: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="text-center mb-8">
        <div className="flex items-center justify-center gap-3 mb-2">
          <img
            src="/images/icons/bookmark-3d.png"
            alt="Glossary"
            className="w-8 h-8 drop-shadow"
            draggable={false}
          />
          <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">Prop Trading Glossary</h1>
        </div>
        <p className="mt-2 max-w-2xl mx-auto text-lg text-slate-600">
          Your reference guide to the key terms and concepts in the world of proprietary trading.
        </p>
      </div>

      <div className="bg-white border border-slate-200 rounded-xl shadow-md p-6 md:p-8">
        <div className="space-y-6">
          {glossaryTerms.sort((a,b) => a.term.localeCompare(b.term)).map(item => (
            <GlossaryTerm key={item.term} term={item.term} definition={item.definition} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GlossaryPage;