import React from "react";
import "./Button.css";

const Button = (props) => {
  const { onPress, disabled, type } = props;
  return (
    <>
      <button onClick={onPress} type={type || "button"} disabled={disabled}>
        {props.children}
      </button>
    </>
  );
};

export default Button;
