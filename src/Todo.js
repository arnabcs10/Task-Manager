import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';


export default function Todo({task,completed}) {
    const [state,setState] = React.useState(completed);
    const handleChange = () =>{
        setState(!state);
    }
    return (
        <ListItem>
            <Checkbox tabIndex={-1} checked={state} onChange={handleChange}/>
            <ListItemText style={{textDecoration: state ? "line-through":"none" }}>
                {task}
            </ListItemText>
            <ListItemSecondaryAction>

                <IconButton aria-lable='Delete'>
                    <DeleteIcon />
                </IconButton>

                <IconButton>
                    <EditIcon aria-lable='Edit'/>
                </IconButton>

            </ListItemSecondaryAction>
        </ListItem>
    );
}
