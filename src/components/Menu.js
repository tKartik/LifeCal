import React from "react";
import { Countries } from "./countries";
import "./App.css";
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
              Enter your name
            </p>
            <input type="text" name="name" ref={this.nWord}></input>

            <p className="enterName">Select your Country & D.O.B.</p>
            <input type="date" required ref={this.dob} />
            <select required ref={this.country}>
              <option>Chose your Country</option>
              {Countries.countries &&
                Countries.countries.map((h, i) => (
                  <option key={i} value={h.Code}>
                    {h.Name}
                  </option>
                ))}
            </select>

            <button type="submit">GO Ahead</button>
          </form>
          <div className="footer">
            Created by{" "}
            <span style={{ color: "grey" }}>
              <a href="www.tkartik.com"> Kartik</a>
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default Menu;
