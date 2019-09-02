import React from "react";
import WeekBox from "./WeekBox";
import "./App.css";
import Menu from "./Menu";
import MenuButton from "./MenuButton";
// import Days from "./Days";

export default class App extends React.Component {
  state = {
    totalWeeks: "",
    weeks: "",
    country: "",
    visible: false
  };

  componentDidMount() {
    const weeks = localStorage.getItem("weeks");
    const totalWeeks = localStorage.getItem("totalWeeks");
    this.setState({ weeks, totalWeeks });
  }

  componentDidUpdate() {
    // const { weeks, totalWeeks } = this.state;
    // console.log(this.state.totalWeeks);
    localStorage.setItem("totalWeeks", this.state.totalWeeks);
    localStorage.setItem("weeks", this.state.weeks);
  }

  toggleMenu = () => {
    this.setState({
      visible: !this.state.visible
    });
  };

  handleMouseDown = event => {
    this.toggleMenu();
    // console.log("clicked");
    event.stopPropagation();
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
      <div>
        <div className="wrapper" onMouseDown={this.handleMouseDown}>
          <MenuButton handleMouseDown={this.handleMouseDown} />

          <WeekBox
            weeks={this.state.weeks}
            totalWeeks={this.state.totalWeeks}
            handleMouseDown={this.handleMouseDown}
          />
        </div>
        <Menu
          updateDate={this.updateDate}
          updateDate2={this.updateDate2}
          menuVisibility={this.state.visible}
        />
      </div>
    );
  }
}

// export default App;
