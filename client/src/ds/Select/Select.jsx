import React, { useEffect, useState } from "react";
import "./Select.css";
import { CaretDown } from "@phosphor-icons/react";

const Select = ({ label, options, defaultValue, onChange }) => {
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [showOptions, setShowOptions] = useState(false);

  useEffect(() => {
    if (options && defaultValue) {
      setSelectedOption(
        options.filter(
          (option) => String(option.value) === String(defaultValue)
        )[0]
      );
    }
  }, [options, defaultValue]);

  const handleChange = (option) => {
    setSelectedOption(option);
    setShowOptions(false);
    if (onChange) onChange(option);
  };

  return (
    <div
      className="select-root"
      onBlur={() => setShowOptions(false)}
      tabIndex={0}
    >
      {label ? <label className="select-content-label">{label}</label> : null}
      <div
        className="select-content"
        onClick={() => setShowOptions(!showOptions)}
      >
        <span>{selectedOption?.label}</span>
        <CaretDown />
      </div>
      {showOptions ? (
        <div className="select-content-list ">
          {options.map((item) => (
            <div
              className={`select-content-list-item ${
                item.value === selectedOption.value ? "selected-item" : ""
              }`}
              onClick={() => handleChange(item)}
            >
              {item.label}
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default Select;
