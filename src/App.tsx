import logo from "./logo.svg";
import "./App.css";
import { useDrag } from "./usedrag/useDrag";

function App() {
  const { measuredRef } = useDrag();

  return (
    <div className="App">
      <header className="App-header">
        <div ref={measuredRef} className="draggable">
          <img src={logo} className="App-logo" alt="logo" />
          <h3>A React hook for drag element</h3>
        </div>
      </header>
    </div>
  );
}

export default App;
