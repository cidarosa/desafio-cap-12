import './App.css';
import Filter from './components/filter';
import Header from './components/header';
import SalesByStore from './components/sales-by-store';

function App() {
  return (
    <>
      <Header />
      <div className="app-container">
        <Filter />
        <div>
          <SalesByStore />
        </div>
      </div>
    </>
  );
}

export default App;
