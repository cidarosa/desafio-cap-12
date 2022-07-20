import './App.css';

import { useState } from 'react';
import Filter from './components/filter';
import Header from './components/header';
import SalesByStore from './components/sales-by-store';
import { FilterData } from './types/types';

function App() {
  const [filterData, setFilterData] = useState<FilterData>();

  const onFilterChange = (filter: FilterData) => {
    setFilterData(filter);
  };

  return (
    <>
      <Header />
      <div className="app-container">
        <Filter onFilterChange={onFilterChange} />
        <div className="sales-overview-container">
          <SalesByStore filterData={filterData} />
        </div>
      </div>
    </>
  );
}

export default App;
