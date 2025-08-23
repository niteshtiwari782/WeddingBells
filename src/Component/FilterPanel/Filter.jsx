import React from 'react';
import { Select } from 'antd';

export default function SelectFilter({
  label,
  placeholder,
  options,
  defaultValue,
  id,
  setFilterObj,
}) {
  const [value, setValue] = React.useState('');
  const filter_key = id;

  const onChange = value => {
    setValue(prevState => value);
    if (value !== 'all') {
      setFilterObj(prevState => {
        const newObj = {
          ...prevState,
          [filter_key]: value,
        };
        return newObj;
      });
    }
  };

  const onSearch = value => {
    console.log('search:', value);
  };

  return (
    <div className="dropdown-filter">
      <label className="filter-label">{label}</label>
      <Select
        showSearch
        defaultValue={defaultValue?.value}
        placeholder={placeholder}
        optionFilterProp="label"
        onChange={onChange}
        onSearch={onSearch}
        options={options}
      />
    </div>
  );
}
