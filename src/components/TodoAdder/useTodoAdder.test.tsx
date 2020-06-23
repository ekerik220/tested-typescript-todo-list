import { ChangeEvent } from "react";
import { useTodoAdder } from "./useTodoAdder";
import { renderHook, act } from "@testing-library/react-hooks";
import { addTodoItem } from "../../redux/slices/todoList";

const mockDispatch = jest.fn();
jest.mock("react-redux", () => ({
  useDispatch: () => mockDispatch,
}));

describe("handleInputChange", () => {
  it("should change userInput to the 'value' from the onChange event caller", () => {
    const { result } = renderHook(() => useTodoAdder());
    const event = { target: { value: "testing" } } as ChangeEvent<
      HTMLInputElement
    >;
    act(() => {
      result.current.handleInputChange(event);
    });
    expect(result.current.userInput).toBe("testing");
  });
});

describe("addTodoItemToStore", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should dispatch addTodoItem action with TodoItem with task set to passed in task and done set to false", () => {
    const { result } = renderHook(() => useTodoAdder());
    const task = "test task";
    const todo = { task, done: false };

    act(() => result.current.addTodoItemToStore(task));
    expect(mockDispatch).toHaveBeenCalledWith(addTodoItem(todo));
  });

  it("should not dispatch anything if passed in task is an empty string", () => {
    const { result } = renderHook(() => useTodoAdder());
    const task = "";
    act(() => result.current.addTodoItemToStore(task));
    expect(mockDispatch).not.toHaveBeenCalled();
  });
});
