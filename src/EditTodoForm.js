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
