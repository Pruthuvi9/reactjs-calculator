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
  const [inputs, setInputs] = useState([0]);
  const [onDisplay, setOnDisplay] = useState([inputs[0]]);

  function clear() {
    setOnDisplay("0");
  }

  function appendNumber(e) {
    console.log(e.target.value);
    validateNumber(e.target.value);
  }

  function chooseOperation(e) {
    if (onDisplay !== "") {
      setInputs([...inputs, e.target.value]);
      compute(e.target.value);
    }
  }

  function validateNumber(e) {
    if (Number(e.target.value)) {
      addToInputArr(Number(e.target.value));
    } else {
      evalDecimal(e.target.value);
    }
  }

  function appendNumber(num) {
    if (inputs.length < 1) {
      inputs[0] = Number(num);
    } else {
      inputs.push(num);
    }
    console.log(inputs);
  }

  function evalOperation(oper) {
    if (inputs.length > 0) {
      if (inputs[length - 1] === "+" || "-" || "/" || "*" || "0") {
        inputs[length - 1] = oper;
      } else {
        inputs.push(oper);
      }
    }
    console.log(inputs);
  }

  function compute(operation) {
    switch (operation) {
      case "+":
        inputs.forEach((number) => console.log(number));
        break;
      case "-":
        inputs.forEach((number) => console.log(number));
        break;
      case "/":
        inputs.forEach((number) => console.log(number));
        break;
      case "*":
        inputs.forEach((number) => console.log(number));
        break;

      default:
        break;
    }
  }

  return (
    <div className="app">
      <Display display={onDisplay} />
      <div className="calculator-keys">
        <Operators onClick={chooseOperation} />
        <Numpad onClick={validateNumber} />
        <Zero onClick={validateNumber} />
        <Decimal onClick={validateNumber} />
        <Clear onClick={clear} />
        <Equals onClick={compute} />
      </div>
    </div>
  );
}

export default App;
