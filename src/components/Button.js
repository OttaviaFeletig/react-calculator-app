import React from "react";
import "../style/button.scss";
const Button = ({ name, text, dataAttribute, handleClick }) => {
  return (
    <button
      name={name}
      data-attribute={dataAttribute && dataAttribute}
      onClick={handleClick}
    >
      {text}
    </button>
  );
};

export default Button;
