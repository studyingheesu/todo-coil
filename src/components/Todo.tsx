import { useRecoilState } from 'recoil';
import styled from 'styled-components';

import { ITodo, todosState } from '../atoms';

const Item = styled.li``;
const TodoButton = styled.button``;
const DoneButton = styled.button``;
const DoingButton = styled.button``;

const Todo = (todo: ITodo) => {
  const [todos, setTodos] = useRecoilState(todosState);

  const { category, text, id } = todo;
  const index = todos.findIndex((todo) => todo.id === id);

  const handleClick = ({ currentTarget: { name } }: React.MouseEvent<HTMLButtonElement>) => {
    const newTodo: ITodo = {
      ...todo,
      category: name as ITodo['category'],
    };

    setTodos([...todos.slice(0, index), newTodo, ...todos.slice(index + 1)]);
  };

  const handleClickDelete = () => {
    setTodos([...todos.slice(0, index), ...todos.slice(index + 1)]);
  };

  return (
    <Item className={`${category}`}>
      <span>{text}</span>
      {category !== 'TO_DO' && (
        <TodoButton name={'TO_DO'} onClick={handleClick}>
          Todo
        </TodoButton>
      )}
      {category !== 'DOING' && (
        <DoingButton name={'DOING'} onClick={handleClick}>
          Doing
        </DoingButton>
      )}
      {category !== 'DONE' && (
        <DoneButton name={'DONE'} onClick={handleClick}>
          Done
        </DoneButton>
      )}
      <button onClick={handleClickDelete}>Delete</button>
    </Item>
  );
};

export default Todo;
