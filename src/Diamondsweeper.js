import React, { Component } from "react";
import Board from "./component/Board";

import "./styles/Board.scss";

class Diamondsweeper extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rows: 8,
      cols: 8,
      diamonds: 8,
      openCells: 0,
      diamondFound: 0,
      status: "running",
      score: 0
    };
  }

  //total score is
  //totalScore = this.state.rows * this.state.cols;

  calcScore = () => {
    let totalScore = this.state.rows * this.state.cols,
      score = 0;
    this.setState(
      {
        openCells: this.state.openCells + 1
      },
      () => {
        score = totalScore - this.state.openCells;
        this.setState({
          score: score
        });
      }
    );
  };

  calcReavealedDiamonds = () => {
    this.setState(
      {
        diamondFound: this.state.diamondFound + 1
      },
      () => {
        console.log("revealed diamonds:::" + this.state.diamondFound);
        if (this.state.diamondFound === this.state.diamonds) {
          this.setState(
            {
              status: "ended"
            },
            () => {
              console.log("Congrats! Found all diamond!!");
            }
          );
        }
      }
    );
  };

  render() {
    return (
      <div className="diamondSweeper">
        <Board
          status={this.state.status}
          rows={this.state.rows}
          cols={this.state.cols}
          diamonds={this.state.diamonds}
          calcReavealedDiamonds={this.calcReavealedDiamonds}
          calcScore={this.calcScore}
        />
      </div>
    );
  }
}

export default Diamondsweeper;
