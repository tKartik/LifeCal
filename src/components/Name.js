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
    if (0 < hours && hours <= 5 && newformat == "PM") {
      greeting = "Good afternoon,";
    } else if (5 < hours && hours < 12 && newformat == "AM") {
      greeting = "Good morning,";
    } else {
      greeting = "Good evening,";
    }

    return (
      <div className="centerHeading">
        <div>
          <h1 className="nameTime">
            {hours} : {minutes} {newformat}
          </h1>
        </div>
        <div>
          <h2 className="nameName">
            {greeting} {this.props.name}.
          </h2>
        </div>
      </div>
    );
  }
}
