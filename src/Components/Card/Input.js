import React from "react";

export const Input = (props) => {
  return (
    <label>
      {props.label}
      <input type={props.type} value={props.value} onChange={props.onChange} />
    </label>
  );
};

// width: 100%;
// padding: 12px 20px;
// margin: 8px 0;
// display: inline-block;
// border: 1px solid #ccc;
// border-radius: 4px;
// box-sizing: border-box;
