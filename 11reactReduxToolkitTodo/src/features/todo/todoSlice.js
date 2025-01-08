import { createSlice, nanoid} from '@reduxjs/toolkit'

const initialState = {
  todos:[{
    id:1,
    text:"Hello World"
  }]
}


export const todoSlice = createSlice({
  name:"todo",
  initialState:initialState,
  reducers:{
    addTodo: (state,action) => {
      const todo = {
        id: nanoid(),
        text: action.payload
      }
      // unshift is used to pushing element at starting
      // push is used to pushing element at end
      state.todos.unshift(todo)
    },
    removeTodo: (state,action) => {
      state.todos = state.todos.filter((todo) => todo.id != action.payload)
    }
  }
})


export const {addTodo,removeTodo}  = todoSlice.actions

export default todoSlice.reducer