import React,{useContext} from 'react'
import Paper from '@material-ui/core/Paper';
import  TextField  from '@material-ui/core/TextField';
import useInputState from './hooks/useInputState';
import {DispatchContext} from './contexts/todos.context';

 function TodoForm() {
     const dispatch = useContext(DispatchContext);
    const [value,handleChange,reset] = useInputState("");
    return (
        <Paper style={{margin:"1rem 0",padding:"0 1rem"}}>
            <form onSubmit={ (e)=>{
                e.preventDefault();
                dispatch({ type: "ADD", task: value });
                reset();
            } }>
                <TextField 
                    value={value} 
                    onChange={handleChange} 
                    margin='normal'
                    multiline={true}
                    label='Add New Todo'
                    fullWidth
                />
                <button>Add</button>
            </form>
        </Paper>
    )
}
export default TodoForm;