import React from "react";
import "./Input.css";

const Input = (props) => {
  console.log(props.error);
  return (
    <div className={props.class}>
      <label>{props.label}</label>
      <input {...props.input} />
      {props.error && <p>Please enter valid {props.label}</p>}
    </div>
  );
};

export default Input;
