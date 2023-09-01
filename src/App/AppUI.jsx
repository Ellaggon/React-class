import React from 'react';
import { TodoCounter } from '../TodoCounter/index';
import { TodoSearch } from '../TodoSearch/index';
import { TodoList } from '../TodoList/index';
import { TodoItem } from '../TodoItem/index';
import { TodosLoading } from '../TodosLoading/TodosLoading';
import { TodosError } from '../TodosError/TodosError';
import { EmptyTodos } from '../EmptyTodos/EmptyTodos';
import { CreateTodoButton } from '../CreateTodoButton/index';
import { Modal } from '../Modal/Modal';
import { TodoContext } from '../TodoContext/TodoContext';
import { TodoForm } from "../TodoForm/TodoForm"

function AppUI() {
  const {
    loading,
    error,
    searchedTodos,
    completeItem,
    deleteItem,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext);

  return (
    <>
      <TodoCounter />
      <TodoSearch />

      <TodoList>
        {loading && (
          <>
            <TodosLoading/>
            <TodosLoading/>
            <TodosLoading/>
          </>
        )}

        {error && <TodosError/>}
        {(!loading && searchedTodos.length === 0) && <EmptyTodos />}

        {searchedTodos.map(el => (
          <TodoItem 
            key={el.text} 
            text={el.text} 
            completed={el.completed}
            onComplete={() => completeItem(el.text)}
            onDelete={() => deleteItem(el.text)}
          />
        ))}
      </TodoList>

      <CreateTodoButton 
        setOpenModal={setOpenModal}
      /> 

      {openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}
    </>
  );
}

export { AppUI };