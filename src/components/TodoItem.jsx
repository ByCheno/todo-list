

export const TodoItem = ({ todo, onDeleteTodo, onToogle }) => {
    return (
        <li key={todo.id} className="list-group-item d-flex justify-content-between">
            <p className="text-center m-0" onClick={ () => onToogle(todo.id)}> {todo.description} </p>
            <button className="btn btn-danger" onClick={ () => onDeleteTodo(todo.id)}> Borrar </button>
        </li>
    )
}
