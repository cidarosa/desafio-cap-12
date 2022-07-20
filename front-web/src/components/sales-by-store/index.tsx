import PieChartCard from '../pie-chart-card';
import './styles.css';

function SalesByStore() {
  return (
    <div className="base-card sales-by-store-container">
      <div className="sales-by-store-quantity-container">
        <h2 className="sales-by-store-quantity">R$ 746.484,00</h2>
        <span className="sales-by-store-quantity-label">Total de vendas</span>
      </div>

      <div className="sales-by-store-chart">
        <PieChartCard name="" labels={['Feminino', 'Masculino', 'Outros']} series={[40, 30, 30]} />
      </div>
    </div>
  );
}

export default SalesByStore;
