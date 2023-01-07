import React from "react";

export const Input = (props) => {
  return (
    <div className="new-expense__control">
      <label>{props.label}</label>
      <input
        type={props.type}
        value={props.value}
        onChange={props.onChange}
        max={props.max}
        min={props.min}
        step={props.step}
      />
    </div>
  );
};
