import React from "react";
import TodoList from "./TodoList";
import NewTodo from "./NewTodo";

export default function Todos(props) {
  return (
    <div>
      <NewTodo />
      <TodoList />
    </div>
  );
}
