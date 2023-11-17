import React from "react";
import "./Table.css";

const Table = ({ children }) => {
  return <table className="table">{children}</table>;
};

export default Table;
