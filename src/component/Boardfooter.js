import React from "react";

const Boardfooter = props => {
  let renderScore = () => {
    if (props.status === "ended") {
      return (
        <div style={{ color: "#0000ff" }}>
          <p>Congrats! Found all diamonds!</p>
          <p>Score: {props.score}</p>
        </div>
      );
    } else return null;
  };

  return renderScore();
};
export default Boardfooter;
