import Button from "react-bootstrap/Button";

const Zero = ({ onClick }) => {
  return (
    <Button id="zero" className="zero-btn" onClick={onClick} value="0">
      0
    </Button>
  );
};

export default Zero;
