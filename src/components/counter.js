import React, { Component } from 'react';
import './styles.scss';

class counter extends Component {
  state = {
    count: 0,
  };

  increment = () => {
    this.setState((newCount) => {
      return {
        count: newCount.count + 1,
      };
    });
  };

  render() {
    return (
      <div>
        <h1>Hello ninja</h1>
        <h2>Super</h2>
        <p>Current Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment Count</button>
      </div>
    );
  }
}

export default counter;
