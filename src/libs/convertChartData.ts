import { ChartData } from 'chart.js';
import { ChartDataType } from '../types/ChartDataType';

const convertChartData = (
  data: ChartDataType
): ChartData<'bar' | 'line', number[], string> => {
  const { response } = data;

  const lineData = Object.values(response).map((value) => value.value_area);
  const barData = Object.values(response).map((value) => value.value_bar);
  const labels = Object.keys(response);

  return {
    datasets: [
      {
        type: 'line',
        data: lineData,
        label: 'value_area',
      },
      {
        type: 'bar',
        data: barData,
        label: 'value_bar',
      },
    ],
    labels,
  };
};

export default convertChartData;
