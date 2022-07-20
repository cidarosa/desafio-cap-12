import { AxiosRequestConfig } from 'axios';
import { useCallback, useEffect, useState } from 'react';
import { FilterData, PieChartConfig, SalesSummaryData } from '../../types/types';
import { formatPrice } from '../../utils/formatters';
import { requestBackend } from '../../utils/request';
import PieChartCard from '../pie-chart-card';
import { buildSalesBySotreChart } from './helpers';
import './styles.css';

type Props = {
  filterData?: FilterData;
};
const initialSalesSummary = {
  sum: 0,
  avg: 0,
  count: 0,
  max: 0,
  min: 0
};

function SalesByStore({ filterData }: Props) {
  const [salesSummary, setSalesSummary] = useState<SalesSummaryData>(initialSalesSummary);

  const [salesByGender, setSalesByGender] = useState<PieChartConfig>();

  const getSalesSummary = useCallback(() => {
    const config: AxiosRequestConfig = {
      method: 'GET',
      url: '/sales/summary',
      params: {
        storeId: filterData?.store?.id
      }
    };
    requestBackend(config).then((response) => {
      setSalesSummary(response.data);
    });
  }, [filterData]);

  useEffect(() => {
    getSalesSummary();
  }, [getSalesSummary]);

  const getSalesByGender = useCallback(() => {
    const config: AxiosRequestConfig = {
      method: 'GET',
      url: '/sales/by-gender',
      params: {
        storeId: filterData?.store?.id
      }
    };
    requestBackend(config).then((response) => {
      // console.log(response.data);
      const newSalesByGender = buildSalesBySotreChart(response.data);
      setSalesByGender(newSalesByGender);
    });
  }, [filterData]);

  useEffect(() => {
    getSalesByGender();
  }, [getSalesByGender]);

  return (
    <div className="base-card sales-by-store-container">
      <div className="sales-by-store-description">
        <h2 className="sales-by-store-sum">
          {formatPrice(salesSummary.sum ? salesSummary.sum : 0)}
        </h2>
        <span className="sales-by-store-title">Total de vendas</span>
      </div>

      <div className="sales-by-store-chart">
        <PieChartCard labels={salesByGender?.labels} series={salesByGender?.series} />
      </div>
    </div>
  );
}

export default SalesByStore;
