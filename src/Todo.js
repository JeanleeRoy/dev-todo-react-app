import React from "react";
import deleteIcon from "./assets/images/delete.svg";

const Todo = ({ todos, deleteTodo }) => {
  const todoList = todos.map((todo) => {
    return (
      <div className="mdc-card todo" key={todo.id}>
        <p>{todo.content}</p>
        <button className="btn" onClick={() => deleteTodo(todo.id)}>
          <img src={deleteIcon} className="deleteIcon" alt="delete" />
        </button>
      </div>
    );
  });

  const showTodos =
    todos.length > 0 ? (
      todoList
    ) : (
      <p className="center">Nada por hacer, yay!</p>
    );

  return (
    <div className="todoContainer">
      <p></p>
      {showTodos}
    </div>
  );
};

export default Todo;
