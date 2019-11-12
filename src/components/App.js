import React from "react";
import WeekBox from "./WeekBox";
import "./App.css";
import Menu from "./Menu";
import MenuButton from "./MenuButton";
import Name from "./Name";

export default class App extends React.Component {
  state = {
    totalWeeks: "",
    weeks: "",
    country: "",
    name: "",
    visible: false
  };

  componentDidMount() {
    const weeks = localStorage.getItem("weeks");
    const totalWeeks = localStorage.getItem("totalWeeks");
    const name = localStorage.getItem("name");
    this.setState({ weeks, totalWeeks, name });
  }

  componentDidUpdate() {
    // const { weeks, totalWeeks } = this.state;
    // console.log(this.state.totalWeeks);
    localStorage.setItem("totalWeeks", this.state.totalWeeks);
    localStorage.setItem("weeks", this.state.weeks);
    localStorage.setItem("name", this.state.name);
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
  updateName = word => {
    let name = this.state.name;
    name = word;
    this.setState({ name });
  };

  render() {
    // const count = countries[0]["Country Name"];
    // console.log(data[1]["2017"]);
    return (
      <div className="overall">
        <div className="wrapper">
          <WeekBox
            weeks={this.state.weeks}
            totalWeeks={this.state.totalWeeks}
          />
        </div>
        <div onMouseDown={this.handleMouseDown} className="buttonM">
          <MenuButton handleMouseDown={this.handleMouseDown} />
        </div>
        <div>
          <a href="www.tkartik.com">
            <img
              className="logo"
              g
              src="./p5.jpg"
              alt="logo"
              className="logo"
            ></img>
          </a>
        </div>
        <div>
          <Name name={this.state.name}></Name>
        </div>
        <Menu
          updateDate={this.updateDate}
          updateDate2={this.updateDate2}
          updateName={this.updateName}
          menuVisibility={this.state.visible}
          handleMouseDown={this.handleMouseDown}
        />
      </div>
    );
  }
}

// export default App;
