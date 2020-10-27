import React from 'react';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import Todo from './Todo';
function TodoList(props){
    return(
        <Paper>
            <List>
                {props.todos.map( (todo,i) => (
                    <>
                        <Todo 
                            id={todo.id}
                            task={todo.task} 
                            key={todo.id} 
                            completed={todo.completed}
                            removeTodo={props.removeTodo}
                            toggleTodo={props.toggleTodo}
                            updateTodo={props.updateTodo}
                        />
                        {i < props.todos.length -1 && <Divider/>}
                    </>
                ))}
            </List>
        </Paper>
    );
}

export default TodoList;
