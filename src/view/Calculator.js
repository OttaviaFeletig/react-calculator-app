import React, { Component } from "react";
import Button from "../components/Button";
import NumberInput from "../components/NumberInput";
import Select from "../components/Select";

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = { newRowN: 0, allRows: [] };
    this.changeNewN = this.changeNewN.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.changeRowNumber = this.changeRowNumber.bind(this);
    this.changeRowSign = this.changeRowSign.bind(this);
  }
  changeNewN(ev) {
    // console.log(ev.target.value);
    this.setState({ newRowN: ev.target.value });
  }
  handleAdd() {
    this.setState({
      allRows: [
        ...this.state.allRows,
        {
          id: this.state.allRows.length,
          sign: "+",
          number: this.state.newRowN,
        },
      ],
      newRowN: 0,
    });
  }
  changeRowNumber() {
    console.log("here");
  }
  changeRowSign() {
    console.log("changing row sign");
  }
  render() {
    return (
      <div>
        {/* <h1>Calculator</h1> */}
        <NumberInput
          handleChange={this.changeNewN}
          value={this.state.newRowN}
        />
        <Button text={"Add row"} handleAdd={this.handleAdd} />
        {this.state.allRows.map((row) => (
          <div key={row.id}>
            <Select sign={row.sign} changeRowSign={this.changeRowSign} />
            <NumberInput
              handleChange={this.changeRowNumber}
              value={row.number}
            />
          </div>
        ))}
      </div>
    );
  }
}

export default Calculator;
