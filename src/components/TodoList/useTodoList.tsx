import { useSelector } from "react-redux";

export function useTodoList() {
  const todoList = useSelector((state: RootState) => state.todoList);
  return { todoList };
}
