import React from "react";
// import Data from "./components/Data";
import "./Name.css";

export default class WeekBox extends React.Component {
  render() {
    let date = new Date();
    let hours = (date.getHours() < 10 ? "0" : "") + date.getHours();
    let minutes = (date.getMinutes() < 10 ? "0" : "") + date.getMinutes();

    // Check whether AM or PM
    var newformat = hours >= 12 ? "PM" : "AM";

    // Find current hour in AM-PM Format
    hours = hours % 12;

    // To display "0" as "12"
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? "0" + minutes : minutes;

    let greeting;
    if (0 < hours && hours <= 5 && newformat === "PM") {
      greeting = "Good afternoon,";
    } else if (4 < hours && hours < 12 && newformat === "AM") {
      greeting = "Good morning,";
    } else {
      greeting = "Good evening,";
    }

    let name = this.props.name;
    // console.log(name);

    let size;

    if (name == "null" || name == "" || name == null) {
      // console.log("name is null");
      name =
        "Click on the settings button on the lower left corner of the screen to start";
      size = 3;
    } else {
      size = 6;
    }

    // let divStyle = {
    //   fontSize: `${size}vmin`,
    // }
    let divStyle;
    let ftColor;

    if (this.props.theme === true) {
      ftColor = {
        color: "#ffffff",
        textShadow: "0 0 20px black"
      };
      divStyle = {
        fontSize: `${size}vmin`,
        color: "#ffffff",
        textShadow: "0 0 30px black"
      };
    } else {
      ftColor = {
        color: "#383838"
      };
      divStyle = {
        fontSize: `${size}vmin`,
        color: "#383838"
      };
    }

    return (
      <div className="centerHeading">
        <div>
          <h1 style={ftColor} className="nameTime">
            {hours} : {minutes} {newformat}
          </h1>
        </div>
        <div>
          <h2 style={divStyle} className="nameName">
            {greeting} {name}.
          </h2>
        </div>
      </div>
    );
  }
}
