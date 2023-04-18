import React, { useState } from 'react';
import Select, { components } from 'react-select';
import { produtos } from '../mock/mock';

const Option = ({ data, ...props }) => (
    <components.Option {...props}>
      <div>
        <span>{data.value} - </span>
      </div>
    </components.Option>
  );
  
  function SelectRamo() {
    const [selectedOptions, setSelectedOptions] = useState([]);
  
    const handleSelectChange = (selectedOptions) => {
      setSelectedOptions(selectedOptions);
    }
  
  
    return (
      <Select
      isMulti
      options={produtos}
      value={selectedOptions}
      onChange={handleSelectChange}
      components={{ Option }}
      />
    );
  }
  
  export default SelectRamo;
  