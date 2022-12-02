import React from "react";
import Button from "./Button";
import NumberInput from "./NumberInput";
import Select from "./Select";

const Calculator = ({ row, handleRowChange, handleDelete }) => {
  return (
    <div id={row.id}>
      <Select
        sign={row.sign}
        handleChange={handleRowChange}
        disabled={row.isDisabled}
      />
      <NumberInput
        handleChange={handleRowChange}
        value={row.number}
        disabled={row.isDisabled}
      />
      <Button name={"deleteRow"} text={"Delete"} handleClick={handleDelete} />
      <Button
        name={"isDisabled"}
        dataAttribute={row.isDisabled}
        text={row.isDisabled ? "Enable" : "Disable"}
        handleClick={handleRowChange}
      />
    </div>
  );
};

export default Calculator;
