import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodoItem } from "../../redux/slices/todoList";
import { v4 as uuidv4 } from "uuid";

export function useTodoAdder() {
  const dispatch = useDispatch();
  const [userInput, setUserInput] = useState("");

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setUserInput(event.target.value);
  };

  const addTodoItemToStore = (task: string): void => {
    if (task.length > 0) {
      const todoItem = { task, done: false, id: uuidv4() };
      dispatch(addTodoItem(todoItem));
    }
  };

  return { userInput, handleInputChange, addTodoItemToStore };
}
