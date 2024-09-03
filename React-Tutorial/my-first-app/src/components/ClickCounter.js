import React, { Component } from 'react';

class ClickCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  countTheClicks = () => {
    this.setState((prevState) => {
      return { count: prevState.count + 1 };
    });
  }

  render() {
    return (
      <div>
        <button type='button' onClick={this.countTheClicks}>
          Click {this.state.count} Times
        </button>
      </div>
    );
  }
}

export default ClickCounter;
