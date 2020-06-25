import React from "react";
import styled from "styled-components";
import Checkbox from "react-simple-checkbox";
import { useTodoListItem } from "./useTodoListItem";

export default function TodoListItem(props: { todoItem: TodoItem }) {
  const { toggleTodoDoneState, removeTodoItemFromStore } = useTodoListItem();

  return (
    <Container>
      <CheckBox
        size={2}
        checked={props.todoItem.done}
        onChange={() => toggleTodoDoneState(props.todoItem)}
        color={{
          backgroundColor: "#4BB543",
          borderColor: "#4BB543",
          uncheckedBorderColor: "#000",
          tickColor: "#fff",
        }}
      />
      <Task done={props.todoItem.done}>{props.todoItem.task}</Task>
      <DeleteButton onClick={() => removeTodoItemFromStore(props.todoItem)}>
        <i className="fas fa-trash"></i>
      </DeleteButton>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid black;
  border-radius: 0.3rem;
  box-shadow: 0.2rem 0.2rem rgba(0, 0, 0, 0.4);
  background: white;
  max-width: 30rem;
  min-width: 18rem;
  padding: 0.3rem;
`;

interface TaskProps {
  done: boolean;
  tooltip?: string;
}
const Task = styled.div<TaskProps>`
  font-size: 1.2rem;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
  text-decoration: ${(props) => (props.done ? "line-through" : "none")};
  color: ${(props) => (props.done ? "grey" : "black")};

  ${Container}:hover & {
    white-space: normal;
  }
`;

const DeleteButton = styled.button`
  margin-left: auto;
  margin-right: 0.2rem;
  background-color: #ff6666;
  border-color: #ff6666;
  border-radius: 0.3rem;
`;

const CheckBox = styled(Checkbox)`
  top: 0;
  margin-left: 0.2rem;
`;
