import React from "react";
import "./TodoCounter.css";
import { TodoContext } from "../TodoContext/TodoContext";

function TodoCounter() {
  const {
    completedTodos,
    totalTodos,
  } = React.useContext(TodoContext);

  return (
    <h1 className="TodoCounter">
      Your Tasks completed <span>{completedTodos}</span> to <span>{totalTodos}</span>
    </h1>
  );
}
export { TodoCounter };