import { useState } from "react";
import Decimal from "./components/Decimal";
import Numpad from "./components/Numpad";
import Operators from "./components/Operators";
import Equals from "./components/Equals";
import Clear from "./components/Clear";
import Zero from "./components/Zero";
import Display from "./components/Display";
import "./App.css";

function App() {
  const [onDisplay, setOnDisplay] = useState("0");

  function clear() {
    setOnDisplay("0");
    console.log("clicked clear");
  }

  function appendNumber(e) {
    if (!(e.target.value === "." && onDisplay.includes("."))) {
      setOnDisplay(onDisplay + e.target.value);
      console.log(`clicked number ${e.target.value}`);
    }
  }

  // appendNumber(number) {
  //   if (number === '.' && this.currentOperand.includes('.')) return
  //   this.currentOperand = this.currentOperand.toString() + number.toString()
  // }

  function chooseOperation(e) {
    if (onDisplay !== "") {
      compute();
    }
    console.log(`clicked operation ${e.target.value}`);
  }

  function compute(e) {
    console.log("clicked compute");
  }

  return (
    <div className="app">
      <Display display={onDisplay} />
      <div className="calculator-keys">
        <Operators onClick={chooseOperation} />
        <Numpad onClick={appendNumber} />
        <Zero onClick={appendNumber} />
        <Decimal onClick={appendNumber} />
        <Clear onClick={clear} />
        <Equals onClick={compute} />
      </div>
    </div>
  );
}

export default App;
