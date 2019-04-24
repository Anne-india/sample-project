import React from "react";
import Cell from "./Cell";

const Row = props => {
  let cells = props.row.map((celldata, index) => {
    return <Cell data={celldata} open={props.open} key={index} />;
  });
  return <div className="row">{cells}</div>;
};

export default Row;
