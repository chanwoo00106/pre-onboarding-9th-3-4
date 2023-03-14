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

ChartJS.register(
  CategoryScale,
  LinearScale,
  Tooltip,
  PointElement,
  LineElement,
  BarElement
);

const DrawChart = () => {
  return (
    <Chart
      type='bar'
      data={{
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
      }}
    />
  );
};

export default DrawChart;
