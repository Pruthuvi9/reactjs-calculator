import Button from "react-bootstrap/Button";

const Clear = ({ onClick }) => {
  return (
    <Button id="clear" className="clear-btn" onClick={onClick}>
      AC
    </Button>
  );
};

export default Clear;
