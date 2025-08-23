import React from 'react';
import { Select } from 'antd';

export default function SelectFilter({ label, placeholder, options, defaultValue }) {
  const [value, setValue] = React.useState('');

  const onChange = value => {
    setValue(prevState => value);
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
