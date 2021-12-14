import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { todosState } from '../atoms';
import CreateTodo from './CreateTodo';
import Todo from './Todo';

const TodoList = () => {
  const todos = useRecoilValue(todosState);

  const List = styled.ul``;

  return (
    <div>
      <CreateTodo />
      <List>
        {todos.map((todo) => (
          <Todo key={todo.id} {...todo} />
        ))}
      </List>
    </div>
  );
};

export default TodoList;
