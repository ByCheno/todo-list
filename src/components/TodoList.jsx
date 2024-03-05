
import { TodoItem } from "./TodoItem"

export const TodoList = ({ todos = [], onDeleteTodo, onToogle }) => {


    return (
            <ul className="list-group">
            {
                todos.map( (todo) => (
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        onDeleteTodo={ id => onDeleteTodo(id) }
                        onToogle={ onToogle }
                    />
                ))
            }
            </ul>
    )
}
