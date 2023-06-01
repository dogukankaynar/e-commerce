import React from "react";

function Input({ name, value, onchange, onblur  ,type="text"}) {
  return (
    <>
      <input
        className="form-input"
        name={name}
        onChange={onchange}
        value={value}
        onBlur={onblur}
        type={type}
      />
    </>
  );
}

export default Input;
