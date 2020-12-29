import React,{useContext} from 'react';
import useInputState from './hooks/useInputState';
import  TextField  from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {DispatchContext} from './contexts/todos.context';

function EditTodoForm(props) {
    const dispatch = useContext(DispatchContext);
    const [value,handleChange] = useInputState(props.task);
    return (
        <form  
         style={{width:"100%", display: "flex", flexWrap: "wrap", justifyContent: "flex-end"}}
        >
            <TextField 
                value={value} 
                onChange={handleChange} 
                multiline={true}
                margin='normal'
                label='Edit'
                fullWidth
                autoFocus
            />
            <Button variant="contained" color="primary"
                onClick={(e)=>{
                e.preventDefault();
                dispatch({ type: "EDIT", newTask: value, id: props.id })
                props.toggleIsEditing();
            }}
            >
                Done
            </Button>
        </form>
    );
}
export default  EditTodoForm;
