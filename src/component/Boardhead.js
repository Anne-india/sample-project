import React, { Component } from "react";

class Boardhead extends Component {
  constructor(props) {
    super(props);
    //initialize state
    this.state = {
      ...props.prevState
    };
  }

  componentWillReceiveProps(nextProps, nextState) {
    if (nextProps.prevState !== this.state) {
      this.setState({
        ...nextProps.prevState
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    this.prevGameObj = prevProps.prevState;
  }

  render() {
    return (
      <div className="board-head">
        <button className="btn reset" onClick={() => this.props.reset()}>
          Reset
        </button>
        {/* <button
          className="btn undo"
          onClick={() => {
            this.props.undoGame(this.prevGameObj, true);
          }}
        >
          Undo
        </button> */}
      </div>
    );
  }
}
export default Boardhead;
