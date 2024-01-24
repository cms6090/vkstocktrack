// import React, { useState, useEffect, useMemo } from 'react';
// import axios from 'axios';
// import { Line } from '@ant-design/plots';
// import { usePathname } from 'next/navigation';
// import { Tabs, TabsProps } from 'antd';
// import {
//   DataChartCompareInterface,
//   convertDataChartCompare,
// } from '@/app/helpers/logic/compare';
// import {
//   SymbolsCompareInterface,
//   symbolsCompare,
// } from '@/app/settings/symbols';

// import { endPointChart } from '@/app/services/endpoints/enpoints';

// import * as S from './HistoryPrice';

// export const StockChart: React.FC = () => {
//   const [data, setData] = useState<DataChartCompareInterface[]>([]);
//   const [symbols, setSymbols] = useState<SymbolsCompareInterface | null>(null);
//   const [min, setMin] = useState<number>(0);
//   const [time, setTime] = useState<number>(0);

//   const pathname = usePathname();

//   useEffect(() => {
//     const symbol = symbolsCompare.find(
//       (symbol) => symbol?.slug === pathname.split('/').pop(),
//     );

//     setSymbols(symbol || null);
//   }, [pathname]);

//   const items: TabsProps['items'] = [
//     {
//       key: '1',
//       label: '1Y',
//     },
//     {
//       key: '2',
//       label: '5Y',
//     },
//     {
//       key: '3',
//       label: 'All',
//     },
//   ];

//   const endPointList = useMemo(
//     () => [endPointChart.YEAR, endPointChart.FINE_YEAR, endPointChart.ALL],
//     [], // Dependency array is empty, meaning the memoized value won't change unless the component is re-mounted
//   );
//   useEffect(() => {
//     const fetchData = async () => {
//       if (!symbols) {
//         return;
//       }

//       const requests = symbols.symbols.map((symbol) =>
//         axios.get(endPointList[time].replace(':id', symbol)),
//       );

//       const [responseSt, responseNd] = await Promise.all(requests);

//       const dataSt = convertDataChartCompare(
//         responseSt.data.data,
//         symbols.name?.split('&')[0] || '',
//       );
//       const dataNd = convertDataChartCompare(
//         responseNd.data.data,
//         symbols.name?.split('&')[1] || '',
//       );

//       setData([...dataSt, ...dataNd]);
//     };

//     fetchData();
//   }, [symbols, time, endPointList]);

//   useEffect(() => {
//     if (data.length > 0) {
//       const newMin = Math.min(...data.map((d) => d.price));
//       setMin(newMin);
//     }
//   }, [data]);

//   const formatTimestampToDate = (timestamp: number): string => {
//     const date = new Date(Number(timestamp));

//     if (
//       isNaN(date.getDate()) ||
//       isNaN(date.getMonth() + 1) ||
//       isNaN(date.getFullYear())
//     ) {
//       return 'Invalid Date';
//     }

//     if (time === 1 || time === 0) {
//       return `${date.getMonth()}/${date.getFullYear()}`;
//     }

//     return `${date.getFullYear()}`;
//   };

//   const COLOR_PLATE_2 = ['#3861fb', '#ff775f'];

//   const config = {
//     data,
//     xField: 'time',
//     yField: 'price',
//     seriesField: 'name',

//     yAxis: {
//       min: min,
//     },
//     xAxis: {
//       label: {
//         formatter: (text: number) => {
//           return formatTimestampToDate(text);
//         },
//       },
//     },
//     legend: {
//       position: 'top',
//     },
//     color: COLOR_PLATE_2,
//     smooth: true,
//     animation: {
//       appear: {
//         animation: 'path-in',
//         duration: 5000,
//       },
//     },
//   };

//   // Check if the symbols variable is null before rendering the Line component
//   if (data.length > 0) {
//     return (
//       <S.ChartWrap>
//         <Tabs
//           onChange={(tab) => {
//             setTime(Number(tab) - 1);
//           }}
//           moreIcon={null}
//           defaultActiveKey="1"
//           items={items}
//           className="tab-time"
//         />
//         <Line {...(config as any)} />
//       </S.ChartWrap>
//     );
//   } else {
//     return null;
//   }
// };
