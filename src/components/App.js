import React from "react";
import WeekBox from "./WeekBox";
import "./App.css";
import AgeSelect from "./AgeSelect";

export default class App extends React.Component {
  state = {
    totalWeeks: "",
    weeks: "",
    totalWeeks: "",
    country: ""
  };

  updateDate = updatedWeek => {
    let weeks = this.state.weeks;
    weeks = updatedWeek;
    this.setState({ weeks });
  };
  updateDate2 = updatedWeek => {
    let totalWeeks = this.state.totalWeeks;
    totalWeeks = updatedWeek * 52;
    this.setState({ totalWeeks });
  };

  render() {
    // const count = countries[0]["Country Name"];
    // console.log(data[1]["2017"]);
    return (
      <div className="container">
        <WeekBox
          weeks={this.state.weeks}
          totalWeeks={this.state.totalWeeks}
          className="list"
        />
        <AgeSelect
          updateDate={this.updateDate}
          updateDate2={this.updateDate2}
        />
      </div>
    );
  }
}

// export default App;
