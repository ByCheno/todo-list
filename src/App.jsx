import { useReducer } from "react";
import { todoReducer } from "./components/todoReducer";
import { TodoList } from "./components/TodoList";
import { TodoAdd } from "./components/TodoAdd";

const initialState = [
  {
    id: new Date().getTime(),
    description: "Aprender React",
    done: false,
  },
  {
    id: new Date().getTime() + 1000,
    description: "Aprender Node",
    done: false,
  },
];

export const App = () => {
  const [todos, dispatch] = useReducer(todoReducer, initialState);

  const handleNewTodo = (todo) => {
    const action = {
      type: "Add Todo",
      payload: todo,
    };
    dispatch(action);
  }

  return (
    <>
      <h1>Todo App: 10 || Pendientes: 2</h1>
      <hr />


      <div className="row">
        <div className="col-7">
          <TodoList todos={todos} />
        </div>

        <div className="col-5">
          <h4>Agregar TODO</h4>
          <hr />

          <TodoAdd onNewTodo={handleNewTodo} />

        </div>

      </div>
    </>
  );
};


export default App;