import React from "react";
import { useDispatch } from "react-redux";
import {
  deleteTodoItem,
  toggleTodoItemDoneState,
} from "../../../redux/slices/todoList";

export function useTodoListItem() {
  const dispatch = useDispatch();

  const toggleTodoDoneState = (todoItem: TodoItem) => {
    dispatch(toggleTodoItemDoneState(todoItem));
  };

  const removeTodoItemFromStore = (todoItem: TodoItem): void => {
    dispatch(deleteTodoItem(todoItem));
  };

  return { toggleTodoDoneState, removeTodoItemFromStore };
}
