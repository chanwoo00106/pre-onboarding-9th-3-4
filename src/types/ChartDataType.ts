export interface ChartDataType {
  type: string;
  version: number;
  response: Response;
}

export interface Response {
  [date: string]: ChartValue;
}

export interface ChartValue {
  id: string;
  value_area: number;
  value_bar: number;
}
