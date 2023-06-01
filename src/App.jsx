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
            console.log(e.target.value);
            setOnDisplay([...onDisplay, e.target.value]);
            console.log(onDisplay);
          }}
        />
        <Numpad
          onClick={(e) => {
            console.log(e.target.value);
            setOnDisplay([...onDisplay, e.target.value]);
            console.log(onDisplay);
          }}
        />
        <Zero
          onClick={(e) => {
            console.log(e.target.value);
            setOnDisplay([...onDisplay, e.target.value]);
            console.log(onDisplay);
          }}
        />
        <Decimal
          onClick={(e) => {
            console.log(e.target.value);
            setOnDisplay([...onDisplay, e.target.value]);
            console.log(onDisplay);
          }}
        />
        <Clear
          onClick={() => {
            setOnDisplay([0]);
            console.log(onDisplay);
          }}
        />
        <Equals />
      </div>
    </div>
  );
}

export default App;
