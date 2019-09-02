import React from "react";
import { Countries } from "./countries";
import "./App.css";
import "./Menu.css";

class Menu extends React.Component {
  dob = React.createRef();
  country = React.createRef();

  goAhead = event => {
    //Preventing from reloading
    event.preventDefault();

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
        <form onSubmit={this.goAhead} className="form1">
          {/* notice how we didn't put parenthesis */}
          <p>Select your Country & DOB</p>
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
      </div>
    );
  }
}

export default Menu;
