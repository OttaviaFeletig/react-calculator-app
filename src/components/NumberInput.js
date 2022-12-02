import React from "react";
import "../style/inputNumber.scss";
const NumberInput = ({ handleChange, value, disabled, placeholder }) => {
  return (
    <input
      name="number"
      type="number"
      value={value}
      onChange={handleChange}
      disabled={disabled}
      placeholder={placeholder && placeholder}
    />
  );
};

export default NumberInput;
