import React,{useContext} from 'react';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import Todo from './Todo';
import {TodosContext} from './contexts/todos.context';

function TodoList(){
    const todos = useContext(TodosContext);
    if(todos.length)
    return(
        <Paper style={{margin:"1rem 0"}}>
            <List>
                {todos.map( (todo,i) => (
                    <>
                        <Todo 
                            id={todo.id}
                            task={todo.task} 
                            key={todo.id} 
                            completed={todo.completed}
                        />
                        {i < todos.length -1 && <Divider/>}
                    </>
                ))}
            </List>
        </Paper>
       
    );
    return null;
}

export default TodoList;
