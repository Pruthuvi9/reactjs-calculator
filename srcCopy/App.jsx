import { useState } from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Numpad from "./components/Numpad";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Card>
        <Container>
          <Numpad />
        </Container>
      </Card>
    </div>
  );
}

export default App;
