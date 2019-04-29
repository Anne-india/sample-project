import React, { Component } from "react";
import Board from "./component/Board";
import Boardhead from "./component/Boardhead";
import Boardfooter from "./component/Boardfooter";

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
    this.baseState = this.state;
  }

  //total score is
  //totalScore = this.state.rows * this.state.cols;
  calcScore = () => {
    let totalScore = this.state.rows * this.state.cols;
    let openCells = this.state.openCells + 1;
    let score = totalScore - openCells;

    let calcScore ={
      openCells,
      score
    }
    return calcScore;
    
  };

  calcReavealedDiamonds = () => {
    let diamondFound = this.state.diamondFound + 1;
    return diamondFound;
  };

  //reset game
  reset = () => {
    this.setState(this.baseState);
  };

  //update game state
  updateGameState =(calcScoreObj, calcDiamondStateObj) => {
    this.openCells = this.state.openCells, this.score = this.state.score, this.diamondFound = this.state.diamondFound,
    this.status = this.state.status;
    if(calcScoreObj!== null && calcScoreObj!== undefined){
      this.openCells = calcScoreObj.openCells;
      this.score = calcScoreObj.score;
    }

    if(calcDiamondStateObj!== null && calcDiamondStateObj!== undefined){
      this.diamondFound = calcDiamondStateObj;

    }
this.status = 
    this.setState({
      openCells: this.openCells,
      diamondFound: this.diamondFound,
      status: this.state.diamonds === this.diamondFound ? "ended" : this.state.diamonds,
      score: this.score
    })
  }

  undoGame = (prevState, undoCellClick) => {
    this.setState({
      ...prevState
    });
    if(undoCellClick){
      console.log(undoCellClick);
    }

  }

  render() {
    return (
      <div className="diamondSweeper">
        <h1>Let's Play!!!</h1>
        <Boardhead reset={this.reset} undoGame={this.undoGame} prevState={this.state} />
        <Board
          status={this.state.status}
          rows={this.state.rows}
          cols={this.state.cols}
          diamonds={this.state.diamonds}
          openCells={this.state.openCells}
          calcReavealedDiamonds={this.calcReavealedDiamonds}
          calcScore={this.calcScore}
          updateGameState={this.updateGameState}
        />
        <Boardfooter status={this.state.status} score={this.state.score} />
      </div>
    );
  }
}

export default Diamondsweeper;
