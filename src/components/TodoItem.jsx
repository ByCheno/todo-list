

export const TodoItem = ({ todo, onDeleteTodo, onToogle }) => {
    return (
        //Al hacer click en el li, se ejecuta la funcion onToogle, que recibe el id del todo y se agrega la clase tachado si el todo es done (true)
        //La clase tachado esta definida en el archivo src/styles.css y tacha el texto de la tarea
        <li key={todo.id} className={`list-group-item d-flex justify-content-between ${(todo.done) ? 'tachado' : ''}`} onClick={ () => onToogle(todo.id)}>
                <p className='text-center m-0'> {todo.description } </p>
                <button className="btn btn-danger" onClick={ () => onDeleteTodo(todo.id)}> Borrar </button>
        </li>
    )
}
