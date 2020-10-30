import React,{createContext,useReducer} from 'react';
import todoReducer from '../reducers/todo.reducer';

const defaultTodos = [
    {id:1,task:"drink water",completed:false},
    {id:2,task:"drink",completed:false}
];

export const TodosContext = createContext(defaultTodos);
export const DispatchContext = createContext();

export function TodosProvider(props){
    const [todos,dispatch] = useReducer(todoReducer,defaultTodos);

    return(
        <TodosContext.Provider value={todos}>
            <DispatchContext.Provider value={dispatch}>
                {props.children}
            </DispatchContext.Provider>
        </TodosContext.Provider>
    );
}