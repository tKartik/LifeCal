import React from "react";
import WeekBox from "./WeekBox";
import "./App.css";
import AgeSelect from "./AgeSelect";

export default class App extends React.Component {
  state = {
    totalWeeks: "",
    weeks: "",
    country: ""
  };

  componentDidMount() {
    const weeks = localStorage.getItem("weeks");
    const totalWeeks = localStorage.getItem("totalWeeks");
    this.setState({ weeks, totalWeeks });
  }

  componentDidUpdate() {
    // const { weeks, totalWeeks } = this.state;
    console.log(this.state.totalWeeks);
    localStorage.setItem("totalWeeks", this.state.totalWeeks);
    localStorage.setItem("weeks", this.state.weeks);
  }

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
