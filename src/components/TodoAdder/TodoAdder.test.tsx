import React from "react";
import { render, fireEvent } from "@testing-library/react";
import TodoAdder from "./TodoAdder";
import * as stateHook from "./useTodoAdder";

const STATE_SPY = jest.spyOn(stateHook, "useTodoAdder");

const USER_INPUT = "test user input";
const INPUT_CHANGE_HANDLER = jest.fn();
const ADD_TODO_FN = jest.fn();

STATE_SPY.mockReturnValue({
  userInput: USER_INPUT,
  handleInputChange: INPUT_CHANGE_HANDLER,
  addTodoItemToStore: ADD_TODO_FN,
});

it("has placeholder text 'Enter new to-do!'", () => {
  const { getByPlaceholderText } = render(<TodoAdder />);
  const placeHolderText = getByPlaceholderText("Enter new to-do!");
  expect(placeHolderText).toBeInTheDocument();
});

it("renders a button", () => {
  const { getByRole } = render(<TodoAdder />);
  const button = getByRole("button");
  expect(button).toBeInTheDocument();
});

it("renders the text contained in the userInput variable", () => {
  const testInput = "Test Input";
  STATE_SPY.mockReturnValueOnce({
    userInput: testInput,
    handleInputChange: INPUT_CHANGE_HANDLER,
    addTodoItemToStore: ADD_TODO_FN,
  });
  const { getByDisplayValue } = render(<TodoAdder />);
  const text = getByDisplayValue(testInput);
  expect(text).toBeInTheDocument();
});

it("calls handleInputChange when change occurs in the input field", () => {
  const { getByPlaceholderText } = render(<TodoAdder />);
  const input = getByPlaceholderText("Enter new to-do!");
  fireEvent.change(input, { target: { value: "a" } });
  expect(INPUT_CHANGE_HANDLER).toHaveBeenCalled();
});

it("calls addTodoItemToStore with argument 'userInput' when add button is clicked", () => {
  const { getByRole } = render(<TodoAdder />);
  const addButton = getByRole("button");
  fireEvent.click(addButton);
  expect(ADD_TODO_FN).toHaveBeenCalledWith(USER_INPUT);
});

it("calls addTodoItemToStore with argument 'userInput' when form is submitted through any means", () => {
  const { getByTestId } = render(<TodoAdder />);
  const form = getByTestId("form");
  fireEvent.submit(form);
  expect(ADD_TODO_FN).toHaveBeenCalledWith(USER_INPUT);
});
