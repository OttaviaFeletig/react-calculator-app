import React, { Component } from "react";
import Button from "../components/Button";
import NumberInput from "../components/NumberInput";
import Select from "../components/Select";

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = { newRowN: 0, allRows: [], result: 0 };
    this.changeNewN = this.changeNewN.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleRowChange = this.handleRowChange.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleDisable = this.handleDisable.bind(this);
  }
  changeNewN(ev) {
    this.setState((prev) => ({ ...prev, newRowN: ev.target.value }));
  }
  handleAdd() {
    this.setState((prev) => ({
      allRows: [
        ...prev.allRows,
        {
          id: this.state.allRows.length,
          sign: "+1",
          number: this.state.newRowN,
        },
      ],
      newRowN: 0,
    }));
  }

  handleRowChange(ev) {
    console.log(ev.target.name);
    const id = parseInt(ev.target.parentNode.getAttribute("id"));
    this.setState((prev) => ({
      allRows: prev.allRows.map((row) => {
        return row.id === id
          ? { ...row, [ev.target.name]: ev.target.value }
          : row;
      }),
    }));
  }

  handleDelete() {
    console.log("deleting");
  }
  handleDisable() {
    console.log("disabling");
  }
  calculateRes() {
    const res = this.state.allRows.reduce((accumulator, currentValue) => {
      return (
        accumulator +
        Math.sign(currentValue.sign) * parseInt(currentValue.number)
      );
    }, 0);
    this.setState((prev) => ({ ...prev, result: res }));
  }
  componentDidUpdate(previousProps, previousState) {
    if (previousState.allRows !== this.state.allRows) {
      this.calculateRes();
    }
  }
  render() {
    return (
      <div>
        <NumberInput
          handleChange={this.changeNewN}
          value={this.state.newRowN}
        />
        <Button text={"Add row"} handleAdd={this.handleAdd} />
        {this.state.allRows.map((row) => (
          <div key={row.id} id={row.id}>
            <Select sign={row.sign} handleChange={this.handleRowChange} />
            <NumberInput
              handleChange={this.handleRowChange}
              value={row.number}
            />
            <Button text={"Delete"} handleDelete={this.handleDelete} />
            <Button text={"Disable"} handleDisable={this.handleDisable} />
          </div>
        ))}
        <p>Result: {!isNaN(this.state.result) && this.state.result}</p>
      </div>
    );
  }
}

export default Calculator;
