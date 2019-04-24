import React, { Component } from "react";

export default class Cell extends Component {
  constructor(props) {
    super(props);
    //initialize state
    this.state = {
      ...props.data
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.data !== this.state) {
      this.setState({
        ...nextProps.data
      });
    }
  }

  renderCell = () => {
    if (this.props.data.isOpen) {
        return (
          <div
            className={this.props.data.hasDiamond === true ? 'cell open diamond' : 'cell open'}
            onContextMenu={e => {
              //disable right click
              e.preventDefault();
            }}
          />
        );
    } else {
      return (
        <div
          className="cell unknown"
          onContextMenu={e => {
            //disable right click
            e.preventDefault();
          }}
          onClick={() => this.props.open(this.props.data)}
        />
      );
    }
  };

  render() {
    return this.renderCell();
  }
}
