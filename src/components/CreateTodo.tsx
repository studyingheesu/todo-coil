import { useForm } from 'react-hook-form';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { todoFilterState, todosState, CATEGORY } from '../atoms';

interface IForm {
  todo: string;
}
const CreateTodo = () => {
  const setTodos = useSetRecoilState(todosState);
  const filter = useRecoilValue(todoFilterState);
  const selectedCategory: CATEGORY = filter === 'ALL' ? 'TO_DO' : filter;

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
        category: selectedCategory,
      },
    ]);

    setValue('todo', '');
  };

  return (
    <form onSubmit={handleSubmit(onValid)}>
      <p>
        <input {...register('todo', { required: 'Todo is empty' })} placeholder="Write a Todo" />
        <button>Add</button>
      </p>
      <p>
        <span>{errors?.todo?.message}</span>
      </p>
    </form>
  );
};

export default CreateTodo;
