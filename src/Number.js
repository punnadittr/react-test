import React, { Component } from 'react';

class NumberIncrementor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 0,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    return {
      plus: () => {
        this.setState({
          num: this.state.num + 1,
        });
      },
      minus: () => {
        this.setState({
          num: this.state.num - 1,
        });
      },
    };
  }

  render() {
    return (
      <div>
        <h1>{this.state.num}</h1>
        <button onClick={this.handleClick().plus}>PlusOne</button>
        <button onClick={this.handleClick().minus}>MinusOne</button>
      </div>
    );
  }
}

export default NumberIncrementor;
