import Button from "react-bootstrap/Button";

const Numpad = ({ onClick }) => {
  const CalcButtons = [
    { name: "one", value: 1 },
    { name: "two", value: 2 },
    { name: "three", value: 3 },
    { name: "four", value: 4 },
    { name: "five", value: 5 },
    { name: "six", value: 6 },
    { name: "seven", value: 7 },
    { name: "eight", value: 8 },
    { name: "nine", value: 9 },
  ];

  return (
    <>
      {CalcButtons.map((button) => (
        <Button
          key={button.name}
          id={button.name}
          className="numpad-btn"
          onClick={onClick}
          value={button.value}
        >
          {button.value}
        </Button>
      ))}
    </>
  );
};

export default Numpad;
