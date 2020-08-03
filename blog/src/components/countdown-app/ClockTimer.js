
import React from 'react';


class ClockTimer extends React.Component {
  constructor(props) {
    super(props);
    
  }
  render() {
    return (
      <div>
        <h1>{this.props.clock_text}</h1>
        <div className="f1 lh-title white-90">{this.props.timer_value}</div>
      </div>
    );
  }
}
 
export default ClockTimer;