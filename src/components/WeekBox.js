import React from "react";
// import Data from "./components/Data";
import "./WeekBox.css";

export default class WeekBox extends React.Component {
  render() {
    const items = [];
    for (var i = 0; i < this.props.weeks; i++) {
      let ind = new Date().getTime();
      items.push(<div key={ind + i} className="list2" />);
    }
    for (var i = 0; i < this.props.totalWeeks - this.props.weeks; i++) {
      items.push(<div key={i} className="list1" />);
    }

    return <div className="container">{items}</div>;
  }
}
