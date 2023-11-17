import React from "react";
import "./Table.css";

const Td = ({ children, isFitContent }) => {
  return <td className={`td ${isFitContent ? "fit" : ""}`}>{children}</td>;
};

export default Td;
