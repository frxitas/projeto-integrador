import React, { forwardRef } from "react";
import "./Table.css";

const Td = forwardRef(({ children, isFitContent, ...props }, ref) => {
  return <td ref={ref} className={`td ${isFitContent ? "fit" : ""}`} {...props}>{children}</td>;
});

export default Td;
