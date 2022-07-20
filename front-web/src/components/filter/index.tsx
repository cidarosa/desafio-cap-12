import './styles.css';

import Select from 'react-select';
import { useEffect, useState } from 'react';
import { FilterData, Stores } from '../../types/types';
import { requestBackend } from '../../utils/request';
import { AxiosRequestConfig } from 'axios';

type Props = {
  onFilterChange: (filter: FilterData) => void;
};

function Filter({ onFilterChange }: Props) {
  const [selectStores, setSelectStores] = useState<Stores[]>([]);

  const handleChangeStore = (value: Stores) => {
    onFilterChange({ store: value });
  };

  useEffect(() => {
    const config: AxiosRequestConfig = {
      method: 'GET',
      url: '/stores'
    };
    requestBackend(config).then((response) => {
      setSelectStores(response.data);
    });
  }, []);

  // const options = [
  //   { value: 'araguari', label: 'Araguari' },
  //   { value: 'berlânida', label: 'Uberlânida' },
  //   { value: 'saopaulo', label: 'São Paulo' },
  //   { value: 'rio', label: 'Rio de Janeiro' }
  // ];

  return (
    <div className="base-card filter-container">
      <Select
        options={selectStores}
        classNamePrefix="filter-input"
        placeholder="Lojas"
        onChange={(value) => handleChangeStore(value as Stores)}
        isClearable
        getOptionLabel={(store: Stores) => store.name}
        getOptionValue={(store: Stores) => String(store.id)}
      />
    </div>
  );
}

export default Filter;
