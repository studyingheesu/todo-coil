import { useRecoilState } from 'recoil';
import styled from 'styled-components';

import { ITodo, todosState } from '../atoms';

const Item = styled.li`
  background-color: ${(prop) => prop.theme.secondBgColor};
  margin: 10px 0;
  display: flex;
`;
const Text = styled.span`
  flex-grow: 1;
  margin-left: 6px;
`;
const Button = styled.button`
  border: 0;
  border-radius: 5px;
  background-color: transparent;
  padding: 2px 3px;

  &:hover {
    background-color: rgba(0, 255, 0, 0.5);
  }
`;
const ButtonContainer = styled.div``;

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
      <Text>{text}</Text>
      <ButtonContainer>
        {category !== 'TO_DO' && (
          <Button name={'TO_DO'} onClick={handleClick}>
            &#9194;
          </Button>
        )}
        {category !== 'DOING' && (
          <Button name={'DOING'} onClick={handleClick}>
            &#9199;
          </Button>
        )}
        {category !== 'DONE' && (
          <Button name={'DONE'} onClick={handleClick}>
            &#9193;
          </Button>
        )}
        <Button onClick={handleClickDelete}>&#128465;</Button>
      </ButtonContainer>
    </Item>
  );
};

export default Todo;
