import React from "react";

const Cell = props => {
  let renderCell = () => {
    if (props.data.isOpen) {
      if (props.data.hasDiamond) {
        return <div className="cell open diamond" />; //show diamond image inside cell
      } else {
        return <div className="cell open" />;   //show default image inside cell 
      }
    } else {
      return (
        <div className="cell unknown" 
        onContextMenu={e => {
           //disable right click
            e.preventDefault();
        }}
        onClick={() => props.open(props.data)} />
      );
    }
  };
  return renderCell();
};

export default Cell;
