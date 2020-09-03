import React, { useState } from "react";
import Todo from "./Todo";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, content: "Primer contenido" },
    { id: 2, content: "Segundo contenido" },
  ]);
  return (
    <div className="App">
      <h1>Por hacer</h1>
      <Todo todos={todos} />
    </div>
  );
}

export default App;
