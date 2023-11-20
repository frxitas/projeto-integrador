import React, { forwardRef } from "react";
import "./Input.css";

const Input = forwardRef(({ label, ...props}, ref) => {
  return (
    <div className="input-root" style={{width: props.style?.width}}>
      <label htmlFor="input" className="input-label">
        {label}
      </label>
      <input className="input-content" id="input" ref={ref} {...props}/>
    </div>
  );
});

export default Input;
