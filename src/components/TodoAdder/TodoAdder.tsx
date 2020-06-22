import React from "react";
import styled from "styled-components";
import useTodoAdder from "./useTodoAdder";

function TodoAdder() {
  const { userInput, handleInputChange, addTodoItemToStore } = useTodoAdder();

  return (
    <Container
      onSubmit={(e) => {
        e.preventDefault();
        addTodoItemToStore(userInput);
      }}
    >
      <TodoInput
        placeholder="Enter new to-do!"
        value={userInput}
        onChange={handleInputChange}
      />
      <AddButton type="submit">
        <i className="fas fa-plus"></i>
      </AddButton>
    </Container>
  );
}

export default TodoAdder;

const Container = styled.form`
  display: flex;
  position: absolute;
  transition: transform 0.2s;

  &:focus-within {
    transform-origin: center center;
    transform: scale(1.2);
  }
`;

const TodoInput = styled.input`
  border-radius: 5px 0 0 5px;
  border: 0;
  padding-left: 5px;
`;

const AddButton = styled.button`
  background: #af5a4c;
  border: 0;
  border-radius: 0 5px 5px 0;
  transition: box-shadow 0.2s;
  cursor: pointer;

  &::-moz-focus-inner {
    border: 0;
  }

  &:focus {
    box-shadow: 0 0 0 2px rgba(219, 103, 83, 0.7);
  }
`;
