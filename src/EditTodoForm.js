import React from 'react';
import useInputState from './hooks/useInputState';
import  TextField  from '@material-ui/core/TextField';
function EditTodoForm(props) {
    const [value,handleChange] = useInputState(props.task);
    return (
        <form onSubmit={(e)=>{
            e.preventDefault();
            props.updateTodo(value,props.id);
            props.toggleIsEditing();
        }}>
            <TextField 
                value={value} 
                onChange={handleChange} 
                margin='normal'
                label='Edit'
                fullWidth
            />
        </form>
    );
}
export default  EditTodoForm;
