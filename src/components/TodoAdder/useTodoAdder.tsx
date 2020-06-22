import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodoItem } from "../../redux/slices/todoList";

function useTodoAdder() {
  const dispatch = useDispatch();
  const [userInput, setUserInput] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(event.target.value);
  };

  const addTodoItemToStore = (task: string): void => {
    if (task.length > 0) {
      const todoItem = { task, done: false };
      dispatch(addTodoItem(todoItem));
    }
  };

  return { userInput, handleInputChange, addTodoItemToStore };
}

export default useTodoAdder;
