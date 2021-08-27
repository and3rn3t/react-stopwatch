import React, { Component } from "react";
import "./Stopwatch.css";

class Stopwatch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 0.0,
      pause: true,
    };
  }

  handleReset(event) {
    console.log(this.state.time, this.state.pause);
    this.setState({
      time: 0.0,
      pause: true,
    });
  }

  handleStart(event) {}

  handlePause(event) {
    let pause = !this.state.pause;
    console.log(this.state.time, this.state.pause);
    if (pause) {
      this.setState({ pause });
    } else {
      this.handleStart();
    }
  }

  render() {
    return (
      <div className="stopwatch">
        <h1>{this.state.time}</h1>
        <div className="controls">
          <button onClick={(event) => this.handleReset(event)}>Reset</button>
          <button onClick={(event) => this.handleStart(event)}>Start</button>
          <button onClick={(event) => this.handlePause(event)}>Pause</button>
        </div>
      </div>
    );
  }
}

export default Stopwatch;
