import Button from "react-bootstrap/Button";

const Equals = ({ onClick }) => {
  return (
    <Button id="equals" className="equals-btn" onClick={onClick} value="=">
      =
    </Button>
  );
};

export default Equals;
