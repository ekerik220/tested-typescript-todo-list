import { createSlice } from "@reduxjs/toolkit";

const todoList = createSlice({
  name: "todoList",
  initialState: [],
  reducers: {
    addTodoItem: (state: object[], action) => {
      state.push(action.payload);
    },
    deleteTodoItem: (state: object[], action) => {
      const index = state.findIndex(action.payload);
      state.splice(index, 1);
    },
  },
});

export const { addTodoItem, deleteTodoItem } = todoList.actions;
export default todoList.reducer;
