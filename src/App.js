import React from "react";
import Title from "./components/Title";
import Calculator from "./view/Calculator.js";
import "./style/global.scss";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { version: React.version };
  }

  render() {
    console.log("hi");
    return (
      <div className="page-wrap">
        <Title>React Version: {this.state.version}</Title>
        <Calculator />
      </div>
    );
  }
}

export default App;
