import { useForm } from 'react-hook-form';
import { useSetRecoilState } from 'recoil';
import { todosState } from '../atoms';

interface IForm {
  todo: string;
}
const CreateTodo = () => {
  const setTodos = useSetRecoilState(todosState);

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
