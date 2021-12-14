import { useRecoilState, useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { FILTER, filteredTodoState, todoFilterState } from '../atoms';
import CreateTodo from './CreateTodo';
import Todo from './Todo';

const List = styled.ul``;

const TodoList = () => {
  const todos = useRecoilValue(filteredTodoState);
  const [filter, setFilter] = useRecoilState(todoFilterState);
  const handleChange = ({ target: { value } }: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter(value as FILTER);
  };

  return (
    <div>
      <CreateTodo />
      <select value={filter} onChange={handleChange}>
        <option value="ALL">All</option>
        <option value="TO_DO">To Do</option>
        <option value="DOING">Doing</option>
        <option value="DONE">Done</option>
      </select>
      <List>
        {todos.map((todo) => (
          <Todo key={todo.id} {...todo} />
        ))}
      </List>
    </div>
  );
};

export default TodoList;
