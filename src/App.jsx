import { TodoList } from "./components/TodoList";
import { TodoAdd } from "./components/TodoAdd";
import { useTodos } from "./hooks/useTodos";

export const App = () => {

  const {todos ,todosCount,todosPending, handleNewTodo, handleDeleteTodo, handleToogleTodo} = useTodos();

  return (
    <>
      <h1 className="titulo">Lista-Tareas: {todosCount} || Pendientes: {todosPending}</h1>
      <hr />


      <div className="row">
        <div className="col-12 col-md-6">
          <TodoList 
          todos={todos} 
          onDeleteTodo={ handleDeleteTodo }
          onToogle={ handleToogleTodo }
          />
        </div>

        <div className="col-12 col-md-6">
          <h4>Agregar Tareas</h4>
          <hr />

          <TodoAdd onNewTodo={handleNewTodo}/>

        </div>

      </div>
    </>
  );
};


export default App;