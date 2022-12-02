import React from "react";
import "../style/select.scss";
const Select = ({ sign, handleChange, disabled }) => {
  return (
    <select
      name="sign"
      value={sign}
      onChange={handleChange}
      disabled={disabled}
    >
      <option value="+1">+</option>
      <option value="-1">-</option>
    </select>
  );
};

export default Select;
