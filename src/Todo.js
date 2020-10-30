import React,{useContext} from 'react';
import EditTodoForm from './EditTodoForm';
import useToggleState from './hooks/useToggleState';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import {TodosContext} from './contexts/todos.context';

export default function Todo({id,task,completed}) {
    const {deleteTodo,toggleTodo} = useContext(TodosContext);
    const [isEditing,toggle] = useToggleState(false);
    const handleChange = () =>{
        toggleTodo(id);
    }
    return (
        <ListItem style={{height:"64px"}}>
            {isEditing ? <EditTodoForm id={id} task={task} toggleIsEditing={toggle}/> : 
            <>
                <Checkbox tabIndex={-1} checked={completed} onChange={handleChange}/>
                <ListItemText style={{textDecoration: completed ? "line-through":"none" }}>
                    {task}
                </ListItemText>
                <ListItemSecondaryAction>

                    <IconButton aria-label='Delete' onClick={()=> deleteTodo(id) }>
                        <DeleteIcon />
                    </IconButton>

                    <IconButton aria-label='Edit' onClick={()=> toggle()}>
                        <EditIcon />
                    </IconButton>

                </ListItemSecondaryAction>
            </>
            }
        </ListItem>
    );
}
