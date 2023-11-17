import React from "react";
import "./Table.css";

const Th = ({ children, isFitContent }) => {
  return <th className={`th ${isFitContent ? "fit" : ""}`}>{children}</th>;
};

export default Th;
