import React,{useContext, memo} from 'react';
import EditTodoForm from './EditTodoForm';
import useToggleState from './hooks/useToggleState';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import {DispatchContext} from './contexts/todos.context';

function Todo({id,task,completed}) {
    const dispatch = useContext(DispatchContext);
    const [isEditing,toggle] = useToggleState(false);
    const handleChange = () =>{
        dispatch({ type: "TOGGLE", id: id });
    }
    return (
        <ListItem  >
            {isEditing ? <EditTodoForm id={id} task={task} toggleIsEditing={toggle}/> : 
            <>
                <Checkbox tabIndex={-1} checked={completed} onChange={handleChange}/>
                <ListItemText  style={{textDecoration: completed ? "line-through":"none", wordWrap: "break-word" }} >
                    {task}
                </ListItemText>
                

                    <IconButton aria-label='Delete' onClick={()=> dispatch({type:"REMOVE",id:id}) }>
                        <DeleteIcon />
                    </IconButton>

                    <IconButton aria-label='Edit' onClick={()=> toggle()}>
                        <EditIcon />
                    </IconButton>

                
            </>
            }
        </ListItem>
    );
}

export default memo(Todo);