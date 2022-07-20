import './styles.css';

import ReactApexChart from 'react-apexcharts';
import { buildPieChartConfig } from './helpers';

type Props = {
  labels?: string[];
  series?: number[];
};
function PieChartCard({ labels = [], series = [] }: Props) {
  return (
    <div className="base-card pie-chart-card">
      <ReactApexChart
        options={buildPieChartConfig(labels)}
        type="donut"
        width="400"
        series={series}
      />
    </div>
  );
}

export default PieChartCard;
