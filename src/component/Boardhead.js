import React from "react";

const Boardhead = props => {
  return (
    <div className="board-head">
      <button className="btn reset" onClick={() => props.reset()}>Reset</button>
      <button className="btn undo" onClick={() => console.log('Clicked undo')}>Undo</button>
    </div>
  );
};

export default Boardhead;
