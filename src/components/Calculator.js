// import React, { Component } from "react";
import Button from "./Button";
import NumberInput from "./NumberInput";
import Select from "./Select";

import React from "react";

const Calculator = ({ row, handleRowChange, handleDelete }) => {
  return (
    <div key={row.id} id={row.id}>
      <Select
        sign={row.sign}
        handleChange={handleRowChange}
        disabled={row.isDisabled}
      />
      <NumberInput
        handleChange={handleRowChange}
        value={row.number}
        disabled={row.isDisabled}
      />
      <Button name={"deleteRow"} text={"Delete"} handleClick={handleDelete} />
      <Button
        name={"isDisabled"}
        dataAttribute={row.isDisabled}
        text={row.isDisabled ? "Enable" : "Disable"}
        handleClick={handleRowChange}
      />
    </div>
  );
};

export default Calculator;
// class Calculator extends Component {
//   // constructor(props) {
//   //   super(props);
//   //   this.state = { newRowN: "", allRows: [], result: 0 };
//   //   this.changeNewN = this.changeNewN.bind(this);
//   //   this.handleAdd = this.handleAdd.bind(this);
//   //   this.handleRowChange = this.handleRowChange.bind(this);
//   //   this.handleDelete = this.handleDelete.bind(this);
//   // }
//   // changeNewN(ev) {
//   //   this.setState((prev) => ({ ...prev, newRowN: ev.target.value }));
//   // }
//   // handleAdd() {
//   //   this.setState((prev) => ({
//   //     allRows: [
//   //       ...prev.allRows,
//   //       {
//   //         id: this.state.allRows.length,
//   //         sign: "+1",
//   //         number: this.state.newRowN !== "" ? this.state.newRowN : 0,
//   //         isDisabled: false,
//   //       },
//   //     ],
//   //     newRowN: "",
//   //   }));
//   // }

//   // handleRowChange(ev) {
//   //   const isDisabled = ev.target.dataset.attribute === "true" ? true : false;
//   //   const id = parseInt(ev.target.parentNode.getAttribute("id"));
//   //   this.setState((prev) => ({
//   //     allRows: prev.allRows.map((row) => {
//   //       return row.id === id
//   //         ? {
//   //             ...row,
//   //             [ev.target.name]:
//   //               ev.target.name === "isDisabled" ? !isDisabled : ev.target.value,
//   //           }
//   //         : row;
//   //     }),
//   //   }));
//   // }
//   // handleDelete(ev) {
//   //   const id = parseInt(ev.target.parentNode.getAttribute("id"));
//   //   this.setState((prev) => ({
//   //     allRows: prev.allRows
//   //       .filter((row) => row.id !== id)
//   //       .map((row, index) => {
//   //         return {
//   //           ...row,
//   //           id: index,
//   //         };
//   //       }),
//   //   }));
//   // }
//   // calculateRes() {
//   //   let res = 0;
//   //   this.state.allRows.forEach((row) => {
//   //     if (!row.isDisabled) {
//   //       res = res + Math.sign(row.sign) * parseInt(row.number);
//   //     }
//   //   });
//   //   this.setState((prev) => ({ ...prev, result: res }));
//   // }
//   // componentDidUpdate(previousProps, previousState) {
//   //   if (previousState.allRows !== this.state.allRows) {
//   //     this.calculateRes();
//   //   }
//   // }
//   render() {
//     return (
//       <div>
//         <NumberInput
//           handleChange={this.changeNewN}
//           value={this.state.newRowN}
//           placeholder={"Enter a number"}
//         />
//         <Button name={"addRow"} text={"Add row"} handleClick={this.handleAdd} />
//         {this.state.allRows.map((row) => (
//           <div key={row.id} id={row.id}>
//             <Select
//               sign={row.sign}
//               handleChange={this.handleRowChange}
//               disabled={row.isDisabled}
//             />
//             <NumberInput
//               handleChange={this.handleRowChange}
//               value={row.number}
//               disabled={row.isDisabled}
//             />
//             <Button
//               name={"deleteRow"}
//               text={"Delete"}
//               handleClick={this.handleDelete}
//             />
//             <Button
//               name={"isDisabled"}
//               dataAttribute={row.isDisabled}
//               text={row.isDisabled ? "Enable" : "Disable"}
//               handleClick={this.handleRowChange}
//             />
//           </div>
//         ))}
//         <p>Result: {!isNaN(this.state.result) && this.state.result}</p>
//       </div>
//     );
//   }
// }

// export default Calculator;
