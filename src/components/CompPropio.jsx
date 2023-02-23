import React from "react";
import { CustomPicker } from "react-color";

class MyColorPicker extends React.Component {
  state = {
    click: false,
    id: 0,
  };

  handleClick = (e) => {
    this.setState({ click: !this.state.click, id: e.target.id });
    console.log(e.target.id);
  };

  handleClose = () => {
    this.setState({ click: false });
  };
  render() {
    const popover = {
      background: "grey",
      height: "110px",
      width: "110px",
    };
    const cover = {
      color: "red",
    };

    return (
      <>
        <div>
          {this.state.click && this.state.id == 1 ? (
            <button
              style={popover}
              className="circle"
              id="1"
              onClick={this.handleClick}
            >
              +
            </button>
          ) : (
            <button className="circle" id="1" onClick={this.handleClick}>
              +
            </button>
          )}
          {this.state.click && this.state.id == 2 ? (
            <button
              style={popover}
              className="circle"
              id="2"
              onClick={this.handleClick}
            >
              +
            </button>
          ) : (
            <button className="circle" id="2" onClick={this.handleClick}>
              +
            </button>
          )}
          {this.state.click && this.state.id == 3 ? (
            <button
              style={popover}
              className="circle"
              id="3"
              onClick={this.handleClick}
            >
              +
            </button>
          ) : (
            <button className="circle" id="3" onClick={this.handleClick}>
              +
            </button>
          )}
          {this.state.click && this.state.id == 4 ? (
            <button
              style={popover}
              className="circle"
              id="4"
              onClick={this.handleClick}
            >
              +
            </button>
          ) : (
            <button className="circle" id="4" onClick={this.handleClick}>
              +
            </button>
          )}
          {this.state.click && this.state.id == 5 ? (
            <button
              style={popover}
              className="circle"
              id="5"
              onClick={this.handleClick}
            >
              +
            </button>
          ) : (
            <button className="circle" id="5" onClick={this.handleClick}>
              +
            </button>
          )}
        </div>
      </>
    );
  }
}

export default CustomPicker(MyColorPicker);
