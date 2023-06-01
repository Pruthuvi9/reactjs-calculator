import Button from "react-bootstrap/Button";

const Operators = ({ onClick }) => {
  const operatorsArray = [
    { name: "add", value: "+" },
    { name: "subtract", value: "-" },
    { name: "divide", value: "/" },
    { name: "multiply", value: "*" },
  ];

  return (
    <>
      {operatorsArray.map((button) => (
        <Button
          key={button.name}
          id={button.name}
          className="operator-btn"
          onClick={onClick}
          value={button.value}
          variant="secondary"
        >
          {button.value}
        </Button>
      ))}
    </>
  );
};

export default Operators;
