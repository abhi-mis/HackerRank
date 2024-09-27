import React from "react";
import "./index.css";

function TextField({ labelText, onChange }) {
  return (
    <div className="textfield">
      {/* Render the label text from props */}
      <label data-testid="label">{labelText}</label>
      {/* Call the onChange function when input changes */}
      <input data-testid="input" onChange={onChange}></input>
    </div>
  );
}

export default TextField;
