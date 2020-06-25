import React from "react";
import TodoListItem from "./TodoListItem";
import { render, fireEvent } from "@testing-library/react";
import * as stateHook from "./useTodoListItem";
import { v4 as uuidv4 } from "uuid";

const STATE_SPY = jest.spyOn(stateHook, "useTodoListItem");

const TOGGLE_DONE_STATE_FN = jest.fn();
const REMOVE_TODO_FN = jest.fn();
STATE_SPY.mockReturnValue({
  toggleTodoDoneState: TOGGLE_DONE_STATE_FN,
  removeTodoItemFromStore: REMOVE_TODO_FN,
});

it("renders 'task' from a todo item passed in through props", () => {
  const mockTodoItem = { id: uuidv4(), task: "test task 1", done: false };
  const { getByText } = render(<TodoListItem todoItem={mockTodoItem} />);
  const ele = getByText(mockTodoItem.task);

  expect(ele).toBeInTheDocument();
});

it("checkbox is checked when prop todoItem 'done' property is true", () => {
  const doneTodoItem = { id: uuidv4(), task: "test task 1", done: true };
  const { getByRole } = render(<TodoListItem todoItem={doneTodoItem} />);
  const checkbox = getByRole("checkbox");

  expect(checkbox).toHaveClass("checked");
});

it("checkbox is unchecked when prop todoItem 'done' property is false", () => {
  const notDoneTodoItem = { id: uuidv4(), task: "test task 2", done: false };
  const { getByRole } = render(<TodoListItem todoItem={notDoneTodoItem} />);
  const checkbox = getByRole("checkbox");

  expect(checkbox).toHaveClass("unchecked");
});

it("should call toggleTodoDoneState when clicking on checkbox", () => {
  const mockTodoItem = { id: uuidv4(), task: "test task 1", done: false };
  const { getByRole } = render(<TodoListItem todoItem={mockTodoItem} />);
  const checkbox = getByRole("checkbox");
  fireEvent.click(checkbox);

  expect(TOGGLE_DONE_STATE_FN).toHaveBeenCalled();
});

it("should call removeTodoItemFromStore when clicking on the delete button", () => {
  const mockTodoItem = { id: uuidv4(), task: "test task 1", done: false };
  const { getByRole } = render(<TodoListItem todoItem={mockTodoItem} />);
  const deleteButton = getByRole("button");
  fireEvent.click(deleteButton);

  expect(REMOVE_TODO_FN).toHaveBeenCalled();
});
