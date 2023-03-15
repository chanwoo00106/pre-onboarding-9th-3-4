import { Chart } from 'react-chartjs-2';
import { useEffect, useState } from 'react';
import { ChartDataType } from '../types/ChartDataType';
import convertChartData from '../libs/convertChartData';
import getChartData from '../services/getChartData';

const DrawChart = () => {
  const [data, setData] = useState<ChartDataType | null>(null);
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    getChartData().then((data) => {
      if (!data.ok) return setIsError(true);
      setData(data.data);
    });
  }, []);

  if (isError) return <h1>Error</h1>;
  if (!data) return <h1>Loading...</h1>;

  return (
    <Chart
      type='bar'
      data={convertChartData(data)}
      options={{
        plugins: {
          tooltip: {
            mode: 'index',
            intersect: false,
          },
        },
        hover: {
          mode: 'index',
          intersect: false,
        },
      }}
    />
  );
};

export default DrawChart;
