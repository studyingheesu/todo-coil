import { useForm } from 'react-hook-form';
import { atom, useRecoilState } from 'recoil';
import styled from 'styled-components';

interface IToDo {
  text: string;
  id: number;
  category: 'TO_DO' | 'DOING' | 'DONE';
}
const toDosState = atom<IToDo[]>({
  key: 'toDo',
  default: [],
});

interface IForm {
  todo: string;
}
const TodoList = () => {
  const [todos, setTodos] = useRecoilState(toDosState);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<IForm>();
  const onValid = ({ todo }: IForm) => {
    setTodos((todos) => [
      ...todos,
      {
        id: Date.now(),
        text: todo,
        category: 'TO_DO',
      },
    ]);

    setValue('todo', '');
  };

  const List = styled.ul``;
  const Item = styled.li``;

  return (
    <div>
      <form onSubmit={handleSubmit(onValid)}>
        <p>
          <input {...register('todo', { required: 'Todo is empty' })} placeholder="Write a Todo" />
          <button>Add</button>
        </p>
        <p>
          <span>{errors?.todo?.message}</span>
        </p>
      </form>
      <List>
        {todos.map(({ id, text, category }) => (
          <Item key={id} className={`${category}`}>
            {text}
          </Item>
        ))}
      </List>
    </div>
  );
};

export default TodoList;
