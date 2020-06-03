import React from 'react';
import Countdown from 'react-countdown-now';

// Random component

// Renderer callback with condition
const renderer = ({ hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a completed state
    return (
      <div style={{ width: "100%", display: "flex" }}>
        <div style={{ width: "30%", height: "inherit", backgroundColor: "#efeff5", color: "#000", textAlign: "center" }}>{"00"}</div>
          :
        <div style={{ width: "30%", height: "inherit", backgroundColor: "#efeff5", color: "#000", textAlign: "center" }}>{"00"}</div>
          :
        <div style={{ width: "30%", height: "inherit", backgroundColor: "#efeff5", color: "#000", textAlign: "center" }}>{"00"}</div>
      </div>
    );
  } else {
    // Render a countdown
    return (
      <div style={{ width: "100%", display: "flex" }}>
        <div style={{ width: "30%", height: "inherit", backgroundColor: "#d3232a", color: "#fff", textAlign: "center" }}>{hours}</div>
          :
        <div style={{ width: "30%", height: "inherit", backgroundColor: "#d3232a", color: "#fff", textAlign: "center" }}>{minutes}</div>
          :
        <div style={{ width: "30%", height: "inherit", backgroundColor: "#d3232a", color: "#fff", textAlign: "center" }}>{seconds}</div>
      </div>
    );
  }
};

class CountDownComponent extends React.Component {
  render() {
    return (
      <div>
        <Countdown
          date={Date.now() + this.props.timer}
          renderer={renderer}
        />
      </div>
    )
  }
}
export default CountDownComponent;