import { useForm } from 'react-hook-form';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import { todoFilterState, todosState, CATEGORY } from '../atoms';

const Form = styled.form`
  display: flex;
`;
const Input = styled.input`
  flex-grow: 1;
`;
interface IForm {
  todo: string;
}
const CreateTodo = () => {
  const setTodos = useSetRecoilState(todosState);
  const filter = useRecoilValue(todoFilterState);
  const selectedCategory: CATEGORY = filter === 'ALL' ? 'TO_DO' : filter;

  const { register, handleSubmit, setValue } = useForm<IForm>();
  const onValid = ({ todo }: IForm) => {
    setTodos((todos) => [
      ...todos,
      {
        id: Date.now(),
        text: todo,
        category: selectedCategory,
      },
    ]);

    setValue('todo', '');
  };

  return (
    <Form onSubmit={handleSubmit(onValid)}>
      <Input {...register('todo', { required: 'Todo is empty' })} placeholder="Write a Todo" />
      <button>Add</button>
    </Form>
  );
};

export default CreateTodo;
