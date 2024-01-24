const prefixBase: string =
  'https://api.investing.com/api/financialdata/:id/historical/chart/';

const endPointChart = {
  DAY: `${prefixBase}?period=P1D&interval=PT5M&pointscount=160`,
  WEEK: `${prefixBase}?period=P1W&interval=PT30M&pointscount=160`,
  ONE_MONTH: `${prefixBase}?period=P1M&interval=PT5H&pointscount=160`,
  THREE_MONTH: `${prefixBase}?period=P3M&interval=P1D&pointscount=160`,
  SIX_MONTH: `${prefixBase}?period=P6M&interval=P1D&pointscount=160`,
  YEAR: `${prefixBase}?period=P1Y&interval=P1W&pointscount=160`,
  FINE_YEAR: `${prefixBase}/?period=P5Y&interval=P1M&pointscount=160`,
  ALL: `${prefixBase}/?period=MAX&interval=P1M&pointscount=60`,
};

export { endPointChart };
