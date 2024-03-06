import { useEffect, useReducer } from "react";
import { todoReducer } from "../components/todoReducer";

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
    }

export const useTodos = () => {

    const [todos, dispatch] = useReducer(todoReducer, [], init);

    const todosCount = todos.length;
    const todosPending = todos.filter(todo => !todo.done).length;

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

    const handleToogleTodo = (id) => {
        const action = {
            type: "Toogle Todo",
            payload: id,
        }
        dispatch(action);
    }

    return {
        todos,
        handleNewTodo,
        handleDeleteTodo,
        handleToogleTodo,
        todosCount,
        todosPending
    }
}
