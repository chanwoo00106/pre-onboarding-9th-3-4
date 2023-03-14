import axios, { isAxiosError } from 'axios';
import { ChartDataType } from '../types/ChartDataType';
import ServiceResponseType from '../types/ServiceResponseType';

const getChartData = async (): ServiceResponseType<ChartDataType> => {
  try {
    const { data, status } = await axios.get<ChartDataType>(
      '/dummy/mock_data.json'
    );
    return {
      data,
      ok: true,
      status,
    };
  } catch (e) {
    if (!isAxiosError(e))
      return {
        status: undefined,
        ok: false,
        data: undefined,
      };

    return {
      status: e.status,
      ok: false,
      data: undefined,
    };
  }
};

export default getChartData;
