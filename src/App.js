import React, { useState } from "react";
import Todo from "./Todo";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, content: "Primer contenido" },
    { id: 2, content: "Segundo contenido" },
  ]);

  const deleteTodo = (id) => {
    const newTodos = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <h1 className="center">Por hacer</h1>
      <Todo todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;
