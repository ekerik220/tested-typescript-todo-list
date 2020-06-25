import React from "react";
import TodoListItem from "./TodoListItem/TodoListItem";
import { useTodoList } from "./useTodoList";
import styled from "styled-components";

function TodoList() {
  const { todoList } = useTodoList();

  return (
    <ListContainer>
      {todoList.map((todoItem, index) => (
        <TodoListItem key={index} todoItem={todoItem} />
      ))}
    </ListContainer>
  );
}

export default TodoList;

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 0.8rem;
  min-width: 0;
`;
