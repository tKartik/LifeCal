import React, { Component } from "react";
import "./MenuButton.css";
import Fontawesome from "react-fontawesome";

class MenuButton extends Component {
  render() {
    return (
      <div
        // style={{ color: "black" }}
        id="roundButton"
        // onMouseDown={this.props.handleMouseDown}
      >
        <Fontawesome name="sliders" size="2x"></Fontawesome>
      </div>
    );
  }
}

export default MenuButton;
