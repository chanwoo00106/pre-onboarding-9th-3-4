import ReactDOM from 'react-dom/client';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  Tooltip,
  PointElement,
  LineElement,
  BarElement,
  Legend,
  Colors,
} from 'chart.js';
import App from './App';

ChartJS.register(
  CategoryScale,
  LinearScale,
  Tooltip,
  PointElement,
  LineElement,
  BarElement,
  Legend,
  Colors
);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <App />
);
