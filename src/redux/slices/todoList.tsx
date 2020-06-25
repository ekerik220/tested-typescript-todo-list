import { createSlice } from "@reduxjs/toolkit";

const todoList = createSlice({
  name: "todoList",
  initialState: [],
  reducers: {
    addTodoItem: (state: TodoItem[], action: { payload: TodoItem }) => {
      state.push(action.payload);
    },
    deleteTodoItem: (state: TodoItem[], action: { payload: TodoItem }) => {
      const index = state.findIndex(
        (todoItem) => todoItem.task === action.payload.task
      );
      state.splice(index, 1);
    },
    toggleTodoItemDoneState: (
      state: TodoItem[],
      action: { payload: TodoItem }
    ) => {
      const index = state.findIndex(
        (todoItem) => todoItem.task === action.payload.task
      );
      state[index].done = !state[index].done;
    },
  },
});

export const {
  addTodoItem,
  deleteTodoItem,
  toggleTodoItemDoneState,
} = todoList.actions;
export default todoList.reducer;
