import { createSlice } from "@reduxjs/toolkit";

const todoList = createSlice({
  name: "todoList",
  initialState: [],
  reducers: {
    addTodoItem: (state: TodoItem[], action: { payload: TodoItem }) => {
      state.push(action.payload);
    },
    deleteTodoItem: (state: TodoItem[], action: { payload: TodoItem }) => {
      const index = getTodoItemIndexFromList(action.payload, state);
      state.splice(index, 1);
    },
    toggleTodoItemDoneState: (
      state: TodoItem[],
      action: { payload: TodoItem }
    ) => {
      const index = getTodoItemIndexFromList(action.payload, state);
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

const getTodoItemIndexFromList = (
  todoItem: TodoItem,
  list: TodoItem[]
): number => {
  return list.findIndex((ele) => ele.id === todoItem.id);
};
