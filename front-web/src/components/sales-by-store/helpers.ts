import { SalesByGender } from '../../types/types';

export const buildSalesBySotreChart = (salesByGender: SalesByGender[]) => {
  const labels = salesByGender.map((salesByGender) => salesByGender.gender);
  const series = salesByGender.map((salesByGender) => salesByGender.sum);

  return { labels, series };
};
