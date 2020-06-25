import { ChangeEvent } from "react";
import { useTodoAdder } from "./useTodoAdder";
import { renderHook, act } from "@testing-library/react-hooks";

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

  it("should call dispatch when passed in a task", () => {
    const { result } = renderHook(() => useTodoAdder());
    const task = "test task";
    act(() => result.current.addTodoItemToStore(task));
    expect(mockDispatch).toHaveBeenCalled();
  });

  it("should not dispatch anything if passed in task is an empty string", () => {
    const { result } = renderHook(() => useTodoAdder());
    const task = "";
    act(() => result.current.addTodoItemToStore(task));
    expect(mockDispatch).not.toHaveBeenCalled();
  });
});
