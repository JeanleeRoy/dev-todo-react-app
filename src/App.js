import React, { useState } from "react";
import Todo from "./Todo";
import AddTodo from "./AddTodo";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, content: "Primer contenido" },
    { id: 2, content: "Segundo contenido" },
  ]);

  const addTodo = (todo) => {
    todo.id = Math.random();
    let newTodos = [...todos, todo];
    setTodos(newTodos);
  };

  const deleteTodo = (id) => {
    const newTodos = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(newTodos);
  };

  return (
    <div className="App container">
      <h1 className="center white-text">Por hacer</h1>
      <Todo todos={todos} deleteTodo={deleteTodo} />
      <AddTodo addTodo={addTodo} />
    </div>
  );
}

export default App;
