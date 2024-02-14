import React, { useState } from "react";
import "./App.css";
import Table from "./table";
import Square from "./square";
import Cube from "./cube";

function App() {
  const [mode, setMode] = useState<"table" | "square" | "cube">("table");
  const [sqLong, setSqLong] = useState(false);
  return (
    <div className="App">
      <div className="buttonGrp">
        <button className="button" onClick={() => setMode("table")}>
          Table
        </button>
        <button
          className="button"
          onClick={() => {
            if (mode !== "square") {
              setMode("square");
              setSqLong(false);
            } else {
              setSqLong(!sqLong);
            }
          }}
        >
          {sqLong ? "Square_l" : "Square"}
        </button>
        <button className="button" onClick={() => setMode("cube")}>
          Cube
        </button>
      </div>
      {mode === "table" && <Table></Table>}
      {mode === "square" && <Square isLong={sqLong}></Square>}
      {mode === "cube" && <Cube></Cube>}
    </div>
  );
}

export default App;
