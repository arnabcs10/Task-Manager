import useLocalStorageState from './useLocalStorageState';
import {v4 as uuid} from 'uuid';

export default initialTodos => {
    const [todos,setTodos] = useLocalStorageState("todos",initialTodos);
    return {
        todos,
        addTodo : (newTodoText) => {
            setTodos([...todos, { id:uuid(), task:newTodoText, completed:false } ]);
        },
       deleteTodo : id => {
            setTodos(todos.filter( todo => todo.id !== id ));
        },
        toggleTodo : id => {
            const updatedTodos = todos.map(todo => {
                                        if(todo.id === id)
                                            return {...todo,completed:!todo.completed}
                                        return todo;    
                                    });
            setTodos(updatedTodos);
        },
        updateTodo : (updatedTodoText,id) =>{
            const updatedTodos = todos.map(todo => {
                if(todo.id === id)
                    return {...todo,task:updatedTodoText}
                return todo;    
            });
            setTodos(updatedTodos);
        }

    }
}


    