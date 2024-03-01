import { useEffect, useReducer } from "react";
import { todoReducer } from "./components/todoReducer";
import { TodoList } from "./components/TodoList";
import { TodoAdd } from "./components/TodoAdd";

const initialState = [
  // {
  //   id: new Date().getTime(),
  //   description: "Aprender React",
  //   done: false,
  // }


  
];

const init = () => {
  return JSON.parse(localStorage.getItem('todos')) || [];
}

export const App = () => {
  const [todos, dispatch] = useReducer(todoReducer, initialState, init);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos])
  

  const handleNewTodo = (todo) => {
    const action = {
      type: "Add Todo",
      payload: todo,
    };
    dispatch(action);
  }

  const handleDeleteTodo = (todo) => {
    const action = {
      type: "Delete Todo",
      payload: todo,
    };
    dispatch(action);
  }

  return (
    <>
      <h1 className="titulo">Todo App: 10 || Pendientes: 2</h1>
      <hr />


      <div className="row">
        <div className="col-5">
          <TodoList todos={todos} onDeleteTodo={ handleDeleteTodo }/>
        </div>

        <div className="col-5">
          <h4>Agregar TODO</h4>
          <hr />

          <TodoAdd onNewTodo={handleNewTodo}/>

        </div>

      </div>
    </>
  );
};


export default App;