import './styles.css';

function Sales() {
  return (
    <div className="base-card sales-container">
      <div className="sales-quantity-container">
        <h2 className="sales-quantity">R$ 746.484,00</h2>
        <span className="sales-quantity-label">Total de vendas</span>
      </div>

      <div className="sales-chart">
        <h2>Chart</h2>
      </div>
    </div>
  );
}

export default Sales;
