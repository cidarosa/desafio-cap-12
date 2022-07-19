import './styles.css';

import Select from 'react-select';

function Filter() {
  const options = [
    { value: 'araguari', label: 'Araguari' },
    { value: 'berlânida', label: 'Uberlânida' },
    { value: 'saopaulo', label: 'São Paulo' },
    { value: 'rio', label: 'Rio de Janeiro' }
  ];

  return (
    <div className="base-card filter-container">
      <Select options={options} classNamePrefix="filter-input" placeholder="Lojas" isClearable />
    </div>
  );
}

export default Filter;
