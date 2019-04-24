import React, { Component } from "react";
import Row from "./Row";

export default class Board extends Component {
  constructor(props) {
    super(props);
    //initialize state
    this.state = {
      board: this.createBoard(props)
    };
  }
  //create rows*cols board
  createBoard = props => {
    let board = [];
    for (let i = 0; i < props.rows; i++) {
      //create board rows
      board.push([]);
      for (let j = 0; j < props.cols; j++) {
        //create cols
        board[i].push({
          x: j,
          y: i,
          count: 0,
          isOpen: false,
          hasDiamond: false
        });
      }
    }
    //create random diamonds
    for (let i = 0; i < props.diamonds; i++) {
      let randomRow = Math.floor(Math.random() * props.rows);
      let randomCol = Math.floor(Math.random() * props.cols);
      let diamondCell = board[randomRow][randomCol];

      if (diamondCell.hasDiamond) {
        i--;
      }
      diamondCell.hasDiamond = true;
    }
    return board;
  };

  //click event to show a cell content
  open = cell => {
    if (this.props.status === "ended") {
      return;
    }
    let board = this.state.board;
    let current = board[cell.y][cell.x];
    if (!current.isOpen) {
      current.isOpen = true;
      this.setState({ board });
    }
    if(current.hasDiamond){
      this.props.calcReavealedDiamonds();
    }
    this.props.calcScore();
  };

  render() {
    let rows = this.state.board.map((row, index) => {
      return <Row row={row} open={this.open} key={index} />;
    });
    //return individual rows
    return <div className="board">{rows}</div>;
  }
}
