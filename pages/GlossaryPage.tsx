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

const GlossaryPage: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">Prop Trading Glossary</h1>
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