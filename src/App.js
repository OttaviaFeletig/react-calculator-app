import React from "react";
import Title from "./components/Title";
import Home from "./view/Home";
import "./style/global.scss";
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
