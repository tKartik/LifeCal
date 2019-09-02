import React from "react";
// import Data from "./components/Data";
import "./Days.css";

export default class WeekBox extends React.Component {
  render() {
    return (
      <div className="days-container">
        <div className="days"></div>
        <div className="days"></div>
        <div className="days"></div>
      </div>
    );
  }
}
