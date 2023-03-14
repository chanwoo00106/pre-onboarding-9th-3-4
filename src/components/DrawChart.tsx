import { Chart } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  Tooltip,
  PointElement,
  LineElement,
  BarElement,
} from 'chart.js';
import convertChartData from '../libs/convertChartData';

ChartJS.register(
  CategoryScale,
  LinearScale,
  Tooltip,
  PointElement,
  LineElement,
  BarElement
);

const DrawChart = () => {
  return <Chart type='bar' data={convertChartData()} />;
};

export default DrawChart;
