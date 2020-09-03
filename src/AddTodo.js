import React, { useState } from "react";

const AddTodo = ({ addTodo }) => {
  const [todo, setTodo] = useState({
    content: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(todo);
    setTodo({ content: "" });
  };

  const handleChange = (e) => {
    setTodo({
      content: e.target.value,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="ctn">Agregar pendiente</label>
        <input
          type="text"
          value={todo.content}
          id="ctn"
          onChange={handleChange}
        />
      </div>
    </form>
  );
};

export default AddTodo;
