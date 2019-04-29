import React, { Component } from "react";

class Cell extends Component {
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
      if (this.props.data.hasDiamond) {
        //show diamond image inside cell
        return (
          <div
            className="cell open diamond"
            onContextMenu={e => {
              //disable right click
              e.preventDefault();
            }}
          />
        );
      }else if(this.props.data.hasNearbyDiamond){
        return (
          <div
            className="cell open nearBydiamond"
            onContextMenu={e => {
              //disable right click
              e.preventDefault();
            }}
          />
        );
      }else {
        //show default image inside cell
        return (
          <div
            className="cell open"
            onContextMenu={e => {
              //disable right click
              e.preventDefault();
            }}
          />
        );
      }
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


export default Cell;
