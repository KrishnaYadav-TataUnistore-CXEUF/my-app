import React, { useState } from "react";
import "./App.css";
import Table from "./table";
import Square from "./square";
import Cube from "./cube";

function App() {
  const [mode, setMode] = useState<"table" | "square" | "cube">("table");
  return (
    <div className="App">
      <div>
        <button onClick={() => setMode("table")}>Table</button>
        <button onClick={() => setMode("square")}>Square</button>
        <button onClick={() => setMode("cube")}>Cube</button>
      </div>
      {mode === "table" && <Table></Table>}
      {mode === "square" && <Square></Square>}
      {mode === "cube" && <Cube></Cube>}
    </div>
  );
}

export default App;
