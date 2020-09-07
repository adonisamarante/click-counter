import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      error: false,
    };
  }

  clickDecrement(state) {
    if (this.state.counter === 0) {
      this.setState({ error: true });
      return;
    }
    this.setState({ counter: state.counter - 1 });
    return;
  }

  render() {
    return (
      <div data-test='component-app'>
        <h1 data-test='counter-display'>
          The counter is currently {this.state.counter}
        </h1>
        <div>
          {this.state.error && (
            <span data-test='error-message'>The counter cant go below 0</span>
          )}
        </div>
        <button
          data-test='increment-button'
          onClick={() =>
            this.setState({ counter: this.state.counter + 1, error: false })
          }
        >
          Increment counter
        </button>
        <button
          data-test='decrement-button'
          onClick={() => this.clickDecrement(this.state)}
        >
          Decrement counter
        </button>
      </div>
    );
  }
}

export default App;
