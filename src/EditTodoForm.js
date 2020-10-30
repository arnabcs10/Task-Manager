import React,{useContext} from 'react';
import useInputState from './hooks/useInputState';
import  TextField  from '@material-ui/core/TextField';
import {TodosContext} from './contexts/todos.context';

function EditTodoForm(props) {
    const {updateTodo} = useContext(TodosContext);
    const [value,handleChange] = useInputState(props.task);
    return (
        <form onSubmit={(e)=>{
            e.preventDefault();
            updateTodo(value,props.id);
            props.toggleIsEditing();
        }} 
         style={{marginLeft:"1rem",width:"50%"}}
        >
            <TextField 
                value={value} 
                onChange={handleChange} 
                margin='normal'
                label='Edit'
                fullWidth
                autoFocus
            />
        </form>
    );
}
export default  EditTodoForm;
