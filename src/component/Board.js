import React, { Component } from "react";
import Row from "./Row";

export default class Board extends Component {
  constructor(props) {
    super(props);
    //initialize state
    this.state = {
      rows: this.createBoard(props)
    };
  }

  //render child component on update of parent state
  componentWillReceiveProps(nextProps) {
    if (this.props.openCells > nextProps.openCells) {
      this.setState({
        rows: this.createBoard(nextProps)
      });
    }
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
          isOpen: false,
          hasDiamond: false,
          hasNearbyDiamond: false
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
    let rows = this.state.rows;
    let current = rows[cell.y][cell.x];
    if (!current.isOpen) {
      current.isOpen = true;
      this.setState({ rows });
    }
    if (current.hasDiamond) {
      this.props.calcReavealedDiamonds();
    }
    this.props.calcScore();
    //set `hasNearbyDiamond` to false of all cells
    for (let i = 0; i < this.props.rows; i++) {
      for (let j = 0; j < this.props.cols; j++) {
        if (rows[j][i].hasNearbyDiamond) {
          rows[j][i].hasNearbyDiamond = false;
        }
      }
    }
    //fine proximity diamonds to show `arrow`
    this.findDiamonds(cell, rows, current);
  };

  //find nearby diamonds
  findDiamonds = (cell, rows, current) => {
    // look for diamonds in a 1 cell block around the chosen cell
    for (let row = -1; row <= 1; row++) {
      for (let col = -1; col <= 1; col++) {
        if (cell.y + row >= 0 && cell.x + col >= 0) {
          if (cell.y + row < rows.length && cell.x + col < rows[0].length) {
            if (
              rows[cell.y + row][cell.x + col].hasDiamond &&
              !(row === 0 && col === 0)
            ) {
              current.hasNearbyDiamond = true;
              this.setState({ rows });
            }
          }
        }
      }
    }
  };

  render() {
    let rows = this.state.rows.map((row, index) => {
      return <Row row={row} open={this.open} key={index} />;
    });
    //return individual rows
    return <div className="board">{rows}</div>;
  }
}
