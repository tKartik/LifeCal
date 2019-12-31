import React from "react";
import WeekBox from "./components/WeekBox";
import "./App.css";
import Menu from "./components/Menu";
import MenuButton from "./components/MenuButton";
import Name from "./components/Name";
import logo from "./assets/P5.jpg";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      totalWeeks: "",
      weeks: "",
      country: "",
      name: "",
      visible: false,
      theme: true
    };
  }

  componentDidMount() {
    const weeks = localStorage.getItem("weeks");
    const totalWeeks = localStorage.getItem("totalWeeks");
    const name = localStorage.getItem("name");

    const theme = JSON.parse(localStorage.getItem("theme"));
    this.setState({ weeks, totalWeeks, name, theme });
  }

  componentDidUpdate() {
    // const { weeks, totalWeeks } = this.state;
    // console.log(this.state.totalWeeks);

    localStorage.setItem("totalWeeks", this.state.totalWeeks);
    localStorage.setItem("weeks", this.state.weeks);
    localStorage.setItem("name", this.state.name);
    localStorage.setItem("theme", this.state.theme);
  }

  toggleMenu = () => {
    this.setState({
      visible: !this.state.visible
    });
  };

  toggleTheme = () => {
    this.setState({
      theme: !this.state.theme
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
    console.log(this.state.theme);

    let bgStyle;

    if (this.state.theme === true) {
      bgStyle = {
        backgroundColor: "#3B3B3B"
      };
    } else if (this.state.theme === false) {
      bgStyle = {
        backgroundColor: "#ffffff"
      };
    }

    return (
      <div style={bgStyle} className="overall">
        <div className="wrapper">
          <WeekBox
            weeks={this.state.weeks}
            totalWeeks={this.state.totalWeeks}
            theme={this.state.theme}
          />
        </div>
        <div onMouseDown={this.handleMouseDown} className="buttonM">
          <MenuButton handleMouseDown={this.handleMouseDown} />
        </div>
        <div>
          <a href="https://tkartik.com/">
            <img className="logo" src={logo} alt="logo" className="logo"></img>
          </a>
        </div>
        <div>
          <Name name={this.state.name} theme={this.state.theme}></Name>
        </div>
        <Menu
          updateDate={this.updateDate}
          updateDate2={this.updateDate2}
          updateName={this.updateName}
          toggleTheme={this.toggleTheme}
          theme={this.state.theme}
          menuVisibility={this.state.visible}
          handleMouseDown={this.handleMouseDown}
        />
      </div>
    );
  }
}

// export default App;
