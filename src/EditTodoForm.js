import React,{useContext} from 'react';
import useInputState from './hooks/useInputState';
import  TextField  from '@material-ui/core/TextField';
import {DispatchContext} from './contexts/todos.context';

function EditTodoForm(props) {
    const dispatch = useContext(DispatchContext);
    const [value,handleChange] = useInputState(props.task);
    return (
        <form onSubmit={(e)=>{
            e.preventDefault();
            dispatch({ type: "EDIT", newTask: value, id: props.id })
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
