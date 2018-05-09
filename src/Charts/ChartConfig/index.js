import React from "react";

// prettier-ignore
const intervals = [
  "1m","3m","5m","15m","30m",
  "1h","2h","4h","6h","12h",
  "1D", "3D", "1W"
];

class ChartConfig extends React.Component {
  render() {
    const { onInterval, interval } = this.props;

    return (
      <React.Fragment>
        <h3>Interval</h3>
        <select
          value={interval}
          onChange={event => onInterval(event.target.value)}
        >
          {intervals.map(i => (
            <option key={i} value={i}>
              {i}
            </option>
          ))}
        </select>
      </React.Fragment>
    );
  }
}

export { ChartConfig };
