import React from "react";
import { render } from "@testing-library/react";
import TodoList from "./TodoList";
import * as stateHook from "./useTodoList";
import { v4 as uuidv4 } from "uuid";

jest.mock("react-redux", () => ({
  useDispatch: () => jest.fn(),
}));

const STATE_SPY = jest.spyOn(stateHook, "useTodoList");

const MOCK_TODO_LIST: TodoItem[] = [
  { id: uuidv4(), task: "test task 1", done: false },
  { id: uuidv4(), task: "test task 2", done: false },
];
STATE_SPY.mockReturnValue({
  todoList: MOCK_TODO_LIST,
});

it("renders 'test task 1' and 'test task 2'", () => {
  const { getByText } = render(<TodoList />);
  const task_1 = getByText("test task 1");
  const task_2 = getByText("test task 2");

  expect(task_1).toBeInTheDocument();
  expect(task_2).toBeInTheDocument();
});
