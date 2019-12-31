import React from "react";
import { Countries } from "./countries";
import "./Menu.css";
import Fontawesome from "react-fontawesome";

class Menu extends React.Component {
  dob = React.createRef();
  country = React.createRef();
  nWord = React.createRef();

  goAhead = event => {
    //Preventing from reloading
    event.preventDefault();

    // console.log(event.target.name.value);
    this.props.updateName(this.nWord.current.value);

    let dt1 = new Date();
    let dt2 = new Date(this.dob.current.value);
    const diff = this.diff_weeks(dt2, dt1);
    this.props.updateDate(diff);

    const countryCode = this.country.current.value;
    const year = Countries.countries.find(code => code.Code === countryCode);
    this.props.updateDate2(year.Weeks);
  };

  handleChange = event => {
    console.log(event.target.value);
    this.props.toggleTheme();
    console.log(this.props.theme);
  };

  diff_weeks = (dt2, dt1) => {
    var diff = (dt2.getTime() - dt1.getTime()) / 1000;
    diff /= 60 * 60 * 24 * 7;
    return Math.abs(Math.round(diff));
  };

  render() {
    var visibility = "hide";

    if (this.props.menuVisibility) {
      visibility = "show";
    }

    return (
      <div
        id="flyoutMenu"
        // onMouseDown={this.props.handleMouseDown}
        className={visibility}
      >
        <div onMouseDown={this.props.handleMouseDown} className="cross">
          <Fontawesome name="times" size="2x"></Fontawesome>
        </div>
        <div className="padContainer">
          <form onSubmit={this.goAhead} className="form1">
            {/* notice how we didn't put parenthesis */}
            <p className="enterName" style={{ marginTop: "8vmin" }}>
              Name
            </p>
            <input type="text" name="name" ref={this.nWord}></input>

            <p className="enterName">Birthday </p>
            <input type="date" required ref={this.dob} />
            <p className="enterName">Country of Residence</p>
            <select required ref={this.country}>
              <option>Country</option>
              {Countries.countries &&
                Countries.countries.map((h, i) => (
                  <option key={i} value={h.Code}>
                    {h.Name}
                  </option>
                ))}
            </select>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <button type="submit">GO Ahead</button>
            </div>
          </form>

          <div>
            <div className="theme">Theme</div>
            <form
              style={{
                display: "flex",
                justifyContent: "center",
                marginBottom: "20px"
              }}
            >
              <label>
                <input
                  type="radio"
                  value="Dark"
                  checked={this.props.theme === true}
                  onChange={this.handleChange}
                />
                Dark
              </label>
              <label>
                <input
                  type="radio"
                  value="Light"
                  checked={this.props.theme === false}
                  onChange={this.handleChange}
                />
                Light
              </label>
            </form>
          </div>
          <div className="info">
            LifeCal is a tab extension which aims to bring your whole life into
            perspective. The circles represent weeks in the average lifespan of
            a person in your country. A bitter-sweet motivational tool, to
            remind you that life is short and you need to get going.
          </div>

          <div className="footer">
            Created by &nbsp;
            <span style={{ color: "grey" }}>
              <a href="https://tkartik.com/"> Kartik</a>
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default Menu;
