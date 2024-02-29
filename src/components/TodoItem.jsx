

export const TodoItem = ({ todo }) => {
    return (
        <li key={todo.id} className="list-group-item">
            <p className="text-center"> {todo.description} </p>
            <button className="btn btn-danger"> Borrar </button>
        </li>
    )
}
