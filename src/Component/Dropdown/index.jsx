import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa6';
import './Dropdown.css';

const EditableDropdown = ({ label, options, onSelect, value }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState(value);
  const [filteredOptions, setFilteredOptions] = useState(options);

  const handleInputChange = e => {
    setInputValue(e.target.value);
    onSelect(e.target.value);
    setIsOpen(true);
  };

  const handleSelect = option => {
    setInputValue(option.toString());
    onSelect(option);
    setIsOpen(false);
  };

  const handleBlur = () => {
    setTimeout(() => setIsOpen(false), 150); // allows click event to register
  };

  return (
    <div className="editable-inputContainer">
      <div>
        <input className="editable-input" onChange={handleInputChange} value={inputValue} />
        <FaChevronDown onClick={() => setIsOpen(!isOpen)} />
      </div>
      {isOpen && (
        <ul className="editable-menu">
          {filteredOptions.slice(0, 100).map(option => (
            <li key={option} onClick={() => handleSelect(option)} className="editable-item">
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default EditableDropdown;
