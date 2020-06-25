import { useSelector } from "react-redux";

export function useTodoList() {
  const todoList = useSelector((state: RootState) => state.todoList);
  return { todoList };
}

/* 
  Nothing to really test here, but if you add more functionality 
  please add a test file for this 
*/
