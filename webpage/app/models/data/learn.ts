import { slugify } from '@/app/helpers/logic/slug';

export interface LearnType {
  id: number;
  image?: string;
  type?: string;
  title: string;
  summary?: string;
  author?: string;
  time?: number;
  slug: string;
  background?: string;
  details?: string[];
}

const learn: LearnType[] = [
  {
    id: 1,
    image:
      'https://assets.materialup.com/uploads/800856f0-1bf1-40c8-9572-94b2c6ca370c/preview.jpg',
    type: 'Stock basics',
    title: 'What is a Stock Market Index?',
    summary:
      'Defining a Stock Market Index Simply put, a stock market index is a hypothetical portfolio of securities representing a certain facet of the market.',
    author: 'By VKStockTrack',
    time: 3,
    slug: slugify('What is a Stock Market Index?'),
    background: '#72a19c',
    details: [
      'h3.Defining a stock market index',
      'p.Simply put, a stock market index is a hypothetical portfolio of securities representing a certain facet of the market. They provide simplified snapshots of a specific market sector without having to examine every single asset individually. A stock market index measures its portfolio holdings using specific characteristics. They serve as benchmark comparisons that traders use to gauge market conditions.',
      'h3.Stock market index types',
      'p.The US stock market along has over 5000 different types of indexes. Each one has their own methodology to calculate its value. In most cases, you can determine an index’s value with a process called weighting. Each index can represent aspects like micro-sectors, geographic segments, or emerging stocks. Outside of the major stock market indexes, many have more narrowly-targeted market focuses. Some examples might include precious metals, clean/renewable energy, and utilities.',
      'h3.What is weighting?',
      'p.Many indexes use a process called weighting to calculate their worth. Weighting is a method of adjusting each asset’s individual impact on their portfolio. Companies with a higher measurement of the metrics their index measures will have a greater impact on the portfolio’s value.',
      'p.As a generic example, let’s say Index XYZ is worth $1,000 and contains 10 different companies in its portfolio. Its value is calculated based on each company’s stock price. Company A’s shares are $200 per, and Company B’s are at $50. All 10 companies won’t account for an equal 10% of weighting in this calculation. Company A will account for 20% of the weighting, since $200 is 20% of $1000. Company B will make up 5% of the weighting, as $50 is just 5% of the index’s $1000.',
      'p.Many indexes determine their values by weighting their portfolio asset’s prices, floats, market capitalization, or other factors like earnings and revenue.',
      'h3.5 most popular stock market indexes',
      'h6.Dow jones industrial average (djia)',
      'p.The Dow Jones is one of the oldest and most-renowned stock market indexes. This stock market index tracks 30 major industry names. Each one significantly impacts their respective spaces and/or the market as a whole. Most DJIA-listed companies trade off the New York Stock Exchange and Nasdaq.',
      'h6.Financial times stock exchange (ftse) 100',
      'p.The FTSE 100 is considered the United Kingdom’s (UK) major stock market index. It comprises 100 companies listed on the London Stock Exchange based on market capitalization. This stock market index is highly influenced by the British Pound, and companies listed are globally focused. As a result, it’s not considered a reliable indicator to gauge the UK economy’s overall health.',
      'h6.Nasdaq',
      'p.Known for featuring technology-based companies, this stock market index lists around 3000 names traded on the Nasdaq exchange. No other exchange has their own popular index. The Nasdaq measures stocks from industries like transportation, energy, industrials, and insurance. To determine the Nasdaq’s worth, calculate the average market capitalization of all companies listed.',
      'h6.Russell indexes',
      'p.This is a family of indexes from the FTSE that allow traders to track global performances of specific market segments. The most popular index within this bunch is the Russell 2000, which monitors the bottom 2000 small-cap stocks of the Russell 3000 index. Russell’s indexes list all companies in descending order via float-weighted adjustments. The top 1000 stocks in the Russell 3000 make up the large-cap Russell 1000 Index.',
      'h6.Standard & poor (s&p) 500',
      'p.Commonly referred to as the S&P 500, this stock market index tracks the 500 largest and most widely-traded securities. This stock market index uses market capitalization-weighting to calculate its value. It’s a very strong indicator of movement in the American market, and features companies from practically every major stock market sector.',
    ],
  },
  {
    id: 2,
    image:
      'https://i.fbcd.co/products/resized/resized-750-500/business-and-investment-7-aa86069ece39fb572b47d8a377f1e0df532fc9695b0eb4881781c4e5909c259b.jpg',
    type: 'Stock basics',
    title: 'What Is Option Margin?',
    summary:
      'Option margin is the cash or securities an investor must deposit in his account as collateral before writing – or selling – options. Margin requirements are established by the Federal Reserve Board in Regulation T. Option margin differs from other types of margin that you may associate with stock or futures trading.',
    author: 'By VKStockTrack',
    time: 2,
    slug: slugify('What Is Option Margin?'),
    background: '#3e345e',
    details: [
      'p.Option margin is the cash or securities an investor must deposit in his account as collateral before writing – or selling – options. Margin requirements are established by the Federal Reserve Board in Regulation T.',
      'p.Option margin differs from other types of margin that you may associate with stock or futures trading.  These types of margin allow a trader to employ leverage in their trading.  Option margin is collateral needed to hold a position.',
      'p.Minimum margin requirements for various types of underlying securities are established by FINRA and the options exchanges. Be advised that your broker may have very different margin requirements since they can add to the minimum requirements set by regulators. Some option strategies, such as covered calls and covered puts, have no margin requirement since the underlying stock is used as collateral.',
      'p.Some options strategies that involve the selling of options but do NOT have margin requirements are:',
      'p.Covered calls and covered puts. These strategies involve owning (or owning the right to) the underlying stock, which is used as collateral in the option position. For example, if you own 300 shares of AAPL, you can sell to open three contracts of QQQ call options without any margin.',
    ],
  },
  {
    id: 3,
    image:
      'https://img.freepik.com/premium-photo/finance-growth-3d-icon-tablet-screen-showing-indicator-fund-investment-growth-up-concept-3d-render-illustration_696265-474.jpg',
    type: 'Stock basics',
    title: 'Why We Manage Risk the Way That We Do',
    summary:
      'Shares of Ulta Beauty tanked more than 20% after the company reported earnings after the bell Thursday that missed analysts’ expectations and slashed its outlook for the fiscal year.',
    author: 'By VKStockTrack',
    time: 5,
    slug: slugify('Why We Manage Risk the Way That We Do'),
    background: '#3e345e',
  },
  {
    id: 4,
    image:
      'https://elements-cover-images-0.imgix.net/c3a73245-1056-438b-8b7d-34c32794437f?auto=compress%2Cformat&w=900&fit=max&s=2670299641e725ab7a0c2a147864cab4',
    type: 'Stock basics',
    title: 'A Look into Option Open Interest and Volume',
    summary:
      'Open interest is a concept that is unique to options.  Volume is a parallel concept to stocks.  First, what are they?  Second, why should an options trader care about them?',
    author: 'By VKStockTrack',
    time: 5,
    slug: slugify('A Look into Option Open Interest and Volume'),
    background: '#3e345e',
  },
  {
    id: 5,
    image:
      'https://img.freepik.com/premium-photo/business-arrow-direction-success-data-analysis-chart-increase-profit-financial-success-growth-concept-3d-illustration_34478-1082.jpg',
    type: 'Stock basics',
    title: 'What is Option Put-Call Parity?',
    summary:
      'In contrast to historical volatility (HV), which looks at actual asset prices in the past, implied volatility (IV) looks ahead',
    author: 'By VKStockTrack',
    time: 8,
    slug: slugify('What is Option Put-Call Parity?'),
    background: '#3e345e',
  },
  {
    id: 6,
    image:
      'https://img.freepik.com/premium-photo/3d-rendering-concept-stock-market-trading-illustration_138734-657.jpg',
    type: 'Stock basics',
    title: 'The Difference Between Implied and Historical Volatilities',
    summary:
      'Put–call parity defines a relationship between the price of a European call option and European put option, both with the identical strike price and expiry, namely that a portfolio of a long call option and a short put option is equivalent to (and hence has the same value as) a single forward contract at this strike price and expiry.',
    author: 'By VKStockTrack',
    time: 8,
    slug: slugify('The Difference Between Implied and Historical Volatilities'),
    background: '#3e345e',
  },
  {
    id: 7,
    image:
      'https://img.freepik.com/premium-photo/3d-rendering-concept-stock-market-trading-illustration_138734-657.jpg',
    type: 'Stock basics',
    title: 'The Difference Between Implied and Historical Volatilities',
    summary:
      'Put–call parity defines a relationship between the price of a European call option and European put option, both with the identical strike price and expiry, namely that a portfolio of a long call option and a short put option is equivalent to (and hence has the same value as) a single forward contract at this strike price and expiry.',
    author: 'By VKStockTrack',
    time: 8,
    slug: slugify('The Difference Between Implied and Historical Volatilities'),
    background: '#3e345e',
  },
  {
    id: 8,
    image:
      'https://img.freepik.com/premium-photo/3d-rendering-concept-stock-market-trading-illustration_138734-657.jpg',
    type: 'Stock basics',
    title: 'The Difference Between Implied and Historical Volatilities',
    summary:
      'Put–call parity defines a relationship between the price of a European call option and European put option, both with the identical strike price and expiry, namely that a portfolio of a long call option and a short put option is equivalent to (and hence has the same value as) a single forward contract at this strike price and expiry.',
    author: 'By VKStockTrack',
    time: 8,
    slug: slugify('The Difference Between Implied and Historical Volatilities'),
    background: '#3e345e',
  },
  {
    id: 9,
    image:
      'https://img.freepik.com/premium-photo/3d-rendering-concept-stock-market-trading-illustration_138734-657.jpg',
    type: 'Stock basics',
    title: 'The Difference Between Implied and Historical Volatilities',
    summary:
      'Put–call parity defines a relationship between the price of a European call option and European put option, both with the identical strike price and expiry, namely that a portfolio of a long call option and a short put option is equivalent to (and hence has the same value as) a single forward contract at this strike price and expiry.',
    author: 'By VKStockTrack',
    time: 8,
    slug: slugify('The Difference Between Implied and Historical Volatilities'),
    background: '#3e345e',
  },
  {
    id: 10,
    image:
      'https://img.freepik.com/premium-photo/3d-rendering-concept-stock-market-trading-illustration_138734-657.jpg',
    type: 'Stock basics',
    title: 'The Difference Between Implied and Historical Volatilities',
    summary:
      'Put–call parity defines a relationship between the price of a European call option and European put option, both with the identical strike price and expiry, namely that a portfolio of a long call option and a short put option is equivalent to (and hence has the same value as) a single forward contract at this strike price and expiry.',
    author: 'By VKStockTrack',
    time: 8,
    slug: slugify('The Difference Between Implied and Historical Volatilities'),
    background: '#3e345e',
  },
];

export default learn;
