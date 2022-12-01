import React from "react";

const Select = ({ sign, handleChange }) => {
  return (
    <select name="sign" value={sign} onChange={handleChange}>
      <option value="+">+</option>
      <option value="-">-</option>
    </select>
  );
};

export default Select;
