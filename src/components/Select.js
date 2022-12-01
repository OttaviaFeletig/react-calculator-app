import React from "react";

const Select = ({ sign, changeRowSign }) => {
  return (
    <select id="cars" value={sign} onChange={changeRowSign}>
      <option value="+">+</option>
      <option value="-">-</option>
    </select>
  );
};

export default Select;
