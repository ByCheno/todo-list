import {useForm} from '../hooks/useForm';

export const TodoAdd = ({ onNewTodo }) => {

    const {description, onResetForm, onInputChange} = useForm({
        description: ''
    });

    const onFormSubmit = (e) => {
        e.preventDefault();
        if(description.trim().length <= 1){
            return;
        }

        const newTodo = {
            id: new Date().getTime(),
            description: description,
            done: false
        }

        onNewTodo(newTodo);
        onResetForm();
    }


    return (
        <form onSubmit={ onFormSubmit }>
            <input type="text" 
            placeholder="Que hacer..." 
            className="form-control" 
            name="description"
            value={description}
            onChange={onInputChange}
            />
            <button type="submit" className="btn btn-outline-primary mt-1 btn-block">
                Agregar
            </button>
        </form>
    )
}

