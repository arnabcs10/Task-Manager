import React,{createContext} from 'react';
import useTodoState from '../hooks/useTodoState';

const defaultTodos = [
    {id:1,task:"drink water",completed:false},
    {id:2,task:"drink",completed:false}
];

export const TodosContext = createContext(defaultTodos);

export function TodosProvider(props){
    const todoStuff = useTodoState(defaultTodos);

    return(
        <TodosContext.Provider value={todoStuff}>
            {props.children}
        </TodosContext.Provider>
    );
}