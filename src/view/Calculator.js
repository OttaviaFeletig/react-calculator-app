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
    this.handleRowChange = this.handleRowChange.bind(this);
    // this.changeRowNumber = this.changeRowNumber.bind(this);
    // this.changeRowSign = this.changeRowSign.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleDisable = this.handleDisable.bind(this);
  }
  changeNewN(ev) {
    // console.log(ev.target.value);
    this.setState((prev) => ({ ...prev, newRowN: ev.target.value }));
  }
  handleAdd() {
    this.setState((prev) => ({
      allRows: [
        ...prev.allRows,
        {
          id: this.state.allRows.length,
          sign: "+",
          number: this.state.newRowN,
        },
      ],
      newRowN: 0,
    }));
  }

  handleRowChange(ev) {
    console.log(ev.target.name);
    const id = parseInt(ev.target.parentNode.getAttribute("id"));
    // const sign = ev.target.previousSibling.value;
    this.setState((prev) => ({
      allRows: prev.allRows.map((row) => {
        return row.id === id
          ? { ...row, [ev.target.name]: ev.target.value }
          : row;
      }),
    }));
  }
  changeRowSign() {
    console.log("changing row sign");
  }
  handleDelete() {
    console.log("deleting");
  }
  handleDisable() {
    console.log("disabling");
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
      </div>
    );
  }
}

export default Calculator;
