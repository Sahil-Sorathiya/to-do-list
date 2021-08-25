import React, { useState } from "react";
import "../index.css";
import NewToDo from "./NewToDo";
import ToDo from "./ToDo";

export default function ToDoList() {

  let list = JSON.parse(localStorage.getItem("todos"));
  if (list == null) list = [];
  const [todos, setTodos] = useState(list);

  let filteredTodo = [];

  const deleteHandler = (id) => {
    filteredTodo = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(filteredTodo);
  };

  const newTodoHandler = (todo) => {
    setTodos((prevItem) => {
      return [todo, ...prevItem];
    });
  };
  localStorage.setItem("todos", JSON.stringify(todos));

  return (
    <div className="ToDoList">
      <NewToDo onNewTodo={newTodoHandler} />
      {todos.map((todo) => {
        return <ToDo key={todo.id} todo={todo} onDelete={deleteHandler} />;
      })}
    </div>
  );
}
