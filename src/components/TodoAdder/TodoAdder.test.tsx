import React from "react";
import { render } from "@testing-library/react";
import TodoAdder from "./TodoAdder";

jest.mock("./useTodoAdder", () => () => ({
  userInput: "",
  handleInputChange: jest.fn(),
  addTodoItemToStore: jest.fn(),
}));

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
