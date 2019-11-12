import React from "react";
// import Data from "./components/Data";
import "./WeekBox.css";

export default class WeekBox extends React.Component {
  state = {
    height: "",
    width: "",
    rad: ""
  };

  container = React.createRef();

  componentDidMount() {
    const width = this.container.current.offsetWidth;
    const height = this.container.current.clientHeight;
    this.setState({ height });
    this.setState({ width });
  }

  radOfCircle = (w, h, n) => {
    let rows;
    let side;
    for (let c = 1; c < 200; c++) {
      rows = n / c;
      side = w / c;
      if (rows * side < h) {
        break;
      }
    }
    const rad = (side - 4) / 2;
    return rad;
  };

  render() {
    const items = [];

    const h = this.state.height;
    const w = this.state.width;
    const totalCircle = this.props.totalWeeks;
    let r = this.radOfCircle(w, h, totalCircle);

    const divStyle = {
      borderRadius: "50%",
      padding: `${r}px`
    };

    for (var i = 0; i < this.props.weeks; i++) {
      let ind = new Date().getTime();
      items.push(<div key={ind + i} className="list2" style={divStyle} />);
    }
    for (var j = 0; j < this.props.totalWeeks - this.props.weeks; j++) {
      items.push(<div key={j} className="list1" style={divStyle} />);
    }

    return (
      <div
        className="container"
        // onMouseDown={this.props.handleMouseDown}
        ref={this.container}
      >
        {items}
      </div>
    );
  }
}
