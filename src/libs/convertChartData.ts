import { ChartData } from 'chart.js';

const convertChartData = (): ChartData<'bar' | 'line', number[], string> => {
  return {
    datasets: [
      {
        type: 'line',
        data: [1, 2, 3],
        label: 'Line Dataset',
      },
      {
        type: 'bar',
        data: [4, 5, 6],
        label: 'Bar Dataset',
      },
    ],
    labels: ['January', 'February', 'March'],
  };
};

export default convertChartData;
