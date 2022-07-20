export type Gender = 'MALE' | 'FEMALE' | 'OTHER';

export type SalesByGender = {
  gender: Gender;
  sum: number;
};

export type SalesSummaryData = {
  sum?: number;
  min?: number;
  max?: number;
  avg?: number;
  count?: number;
};

export type Stores = {
  id: number;
  name: string;
};

export type FilterData = {
  store?: Stores;
};

export type PieChartConfig = {
  labels: string[];
  series: number[];
};
