import React from "react";

const Select = ({ sign, handleChange }) => {
  return (
    <select name="sign" value={sign} onChange={handleChange}>
      <option value="+1">+</option>
      <option value="-1">-</option>
    </select>
  );
};

export default Select;
