import React from "react";

const Todo = ({ todos }) => {
  const todoList = todos.map((todo) => {
    return <div>{todo.content}</div>;
  });
  return (
    <>
      <p>Lista</p>
      {todoList}
    </>
  );
};

export default Todo;
