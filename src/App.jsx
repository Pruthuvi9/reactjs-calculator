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
  const [onDisplay, setOnDisplay] = useState([0]);

  return (
    <div className="app">
      <Display display={onDisplay} />
      <div className="calculator-keys">
        <Operators
          onClick={(e) => {
            // console.log(e.target.value);
            if (/[+\-*\/]/.test(onDisplay[length - 1])) {
              console.log("matched regex");
              // setOnDisplay(onDisplay.pop());
              // setOnDisplay(onDisplay.slice().push(e.target.value));
            } else {
              console.log("did not match regex");
              console.log(onDisplay);
              // setOnDisplay(onDisplay.slice().push(e.target.value));
            }
            console.log(onDisplay);
          }}
        />
        <Numpad
          onClick={(e) => {
            // console.log(e.target.value);
            onDisplay === "0"
              ? setOnDisplay(e.target.value)
              : setOnDisplay(onDisplay.slice().push(e.target.value));
            console.log(onDisplay);
          }}
        />
        <Zero
          onClick={(e) => {
            // console.log(e.target.value);
            onDisplay !== "0" &&
              setOnDisplay(onDisplay.slice().push(e.target.value));
            console.log(onDisplay);
          }}
        />
        <Decimal
          onClick={(e) => {
            // console.log(e.target.value);
            !onDisplay.includes(".") &&
              setOnDisplay(onDisplay.slice().push(e.target.value));
            console.log(onDisplay);
          }}
        />
        <Clear
          onClick={() => {
            setOnDisplay("0");
            // console.log(onDisplay);
          }}
        />
        <Equals />
      </div>
    </div>
  );
}

export default App;
