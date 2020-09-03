import React, { useState } from "react";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, content: "Primer contenido" },
    { id: 2, content: "Segundo contenido" },
  ]);
  return (
    <div className="App">
      <h1>Todos</h1>
      {todos.map((todo) => {
        return <div>{todo.content}</div>;
      })}
    </div>
  );
}

export default App;
