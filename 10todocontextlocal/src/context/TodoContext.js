// yaha pura context likhenge

import {useContext, createContext} from 'react'

export const TodoContext = createContext({
  todos: [
    {
      id: 1,
      todo: "todo message",
      completed: false,
    }
  ],
  addTodo: (todo) => {},
  updateTodo: (id,todo) => {},
  deleteTodo: (id) =>{},
  toggleComplete: (id) => {}
})


export const useTodo = () => {
  return useContext(TodoContext)
}



// wrap karne k liye sare componenets ko
export const TodoProvider = TodoContext.Provider