import Button from "react-bootstrap/Button";

const Decimal = ({ onClick }) => {
  return (
    <Button id="decimal" className="decimal-btn" onClick={onClick} value=".">
      .
    </Button>
  );
};

export default Decimal;
