import React from "react";
import { TodoContext } from "../TodoContext/TodoContext";
import "./TodoForm.css";

function TodoForm() {
  const {
    addTodo,
    setOpenModal,
  } = React.useContext(TodoContext);
  const [newTodoValue, setNewTodoValue] = React.useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false);
  };
  const onCancel = () => {
    setOpenModal(false);
  };
  const onChange = (e)=> { 
    setNewTodoValue(e.target.value)
  };

  return (
    <form onSubmit={onSubmit}>
    <label>Crea un TODO</label>
    <textarea 
      cols="30" 
      placeholder="Escribe tu nuevo TODO"
      value={newTodoValue}
      onChange={onChange}>
    </textarea>
    <div className="TodoForm-btnContainer">
      <button
        className="TodoForm-btn TodoForm-btn__cancel"
        onClick={onCancel}>
          Cancelar
      </button>
      <button
        className="TodoForm-btn TodoForm-btn__add">
          Añadir
      </button>
    </div>
  </form>
  );
}

export { TodoForm }