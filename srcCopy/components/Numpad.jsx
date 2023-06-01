import Button from "react-bootstrap/Button";
import "./Numpad.css";

const Numpad = () => {
  const NumbersArray = [
    { id: "decimal", value: "." },
    { id: "zero", value: 0 },
    { id: "one", value: 1 },
    { id: "two", value: 2 },
    { id: "three", value: 3 },
    { id: "four", value: 4 },
    { id: "five", value: 5 },
    { id: "six", value: 6 },
    { id: "seven", value: 7 },
    { id: "eight", value: 8 },
    { id: "nine", value: 9 },
    { id: "equals", value: "=" },
    { id: "add", value: "+" },
    { id: "substract", value: "-" },
    { id: "multiply", value: "x" },
    { id: "divide", value: "\\" },
    { id: "clear", value: "AC" },
  ];

  return (
    <div>
      {NumbersArray.map((elem) => (
        <Button
          variant="primary"
          key={elem.value}
          id={elem.id}
          className="calculator-btn"
        >
          {elem.value}
        </Button>
      ))}
    </div>
  );
};

export default Numpad;
