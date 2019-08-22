import React, { Fragment } from "react";
import { Countries } from "./countries";

class AgeSelect extends React.Component {
  // constructor() {
  //   super();
  //   // this.goToStore = this.goToStore.bind(this);
  // }

  dob = React.createRef();
  country = React.createRef();

  handleChange = event => {
    let dt1 = new Date();
    let dt2 = new Date(event.target.value);
    // console.log(this.diff_weeks(dt2, dt1));
    const diff = this.diff_weeks(dt2, dt1);
    this.props.updateDate(diff);

    // console.log(diff);
  };

  handleChange2 = event => {
    // const diff = this.diff_weeks(dt2, dt1);
    // this.props.updateDate(diff);

    const countryCode = event.target.value;
    const year = Countries.countries.find(code => code.Code == countryCode);
    // console.log(year.Weeks);
    this.props.updateDate2(year.Weeks);
  };

  diff_weeks = (dt2, dt1) => {
    var diff = (dt2.getTime() - dt1.getTime()) / 1000;
    diff /= 60 * 60 * 24 * 7;
    return Math.abs(Math.round(diff));
  };

  render() {
    return (
      <form className="store-selector">
        {/* notice how we didn't put parenthesis */}
        <h2>Select your Country & DOB</h2>
        <input
          type="date"
          required
          ref={this.dob}
          onChange={this.handleChange}
        />
        <select
          className="form-control"
          required
          ref={this.country}
          onChange={this.handleChange2}
        >
          <option>---select---</option>
          {Countries.countries &&
            Countries.countries.map((h, i) => (
              <option key={i} value={h.Code}>
                {h.Name}
              </option>
            ))}
        </select>

        {/* <button type="submit">GO Ahead</button> */}
      </form>
    );
  }
}

export default AgeSelect;
