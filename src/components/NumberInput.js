import React from "react";

const NumberInput = ({ handleChange, value }) => {
  return <input type="number" value={value} onChange={handleChange} />;
};

export default NumberInput;
