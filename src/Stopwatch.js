import React, { Component } from "react";
import "./Stopwatch.css";

class Stopwatch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      runningTime: 0,
      running: false,
      stopwatch: 0,
    };
  }

  handleStart(event) {
    // console.log(this.stopwatch, this.state.runningTime, this.state.running);
    this.stopwatch = setInterval((event) => this.newRunningTime(), 1);
  }

  newRunningTime() {
    this.setState({
      runningTime: this.state.runningTime + 1,
      running: true,
    });
  }

  handlePause(event) {
    // console.log(this.stopwatch, this.state.runningTime, this.state.running);
    let running = this.state.running;
    if (running === true) {
      this.resetInterval();
      this.setState({ running: false });
    } else {
      this.handleStart();
    }
  }

  handleReset(event) {
    // console.log(this.stopwatch, this.state.runningTime, this.state.running);
    this.resetInterval();
    this.setState({
      runningTime: 0,
      running: false,
    });
  }

  resetInterval() {
    clearInterval(this.stopwatch);
    this.stopwatch = 0;
  }

  render() {
    return (
      <div className="stopwatch">
        <h1>{this.state.runningTime}</h1>
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
