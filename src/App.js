import React from "react";
import Title from "./components/Title";
import Calculator from "./components/Calculator.js";
import "./style/global.scss";
import Home from "./view/Home";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { version: React.version };
  }

  render() {
    return (
      <div>
        <Title>React Version: {this.state.version}</Title>

        <Home />
      </div>
    );
  }
}

export default App;
