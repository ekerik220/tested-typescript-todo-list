// Redux store typings
interface RootState {
  todoList: TodoItem[];
}

type TodoItem = {
  id: string; // should be a uuid
  task: string;
  done: boolean;
};
