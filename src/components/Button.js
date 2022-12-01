import React from "react";
import "../style/button.scss";
const Button = ({ text, handleAdd }) => {
  return <button onClick={handleAdd}>{text}</button>;
};

export default Button;
