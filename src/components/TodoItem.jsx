

export const TodoItem = ({ todo }) => {
    return (
        <li key={todo.id} className="list-group-item d-flex justify-content-between">
            <p className="text-center m-0"> {todo.description} </p>
            <button className="btn btn-danger"> Borrar </button>
        </li>
    )
}
