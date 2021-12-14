import { useForm } from 'react-hook-form';

interface IForm {
  todo: string;
}

const ToDoList = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<IForm>();
  const onValid = ({ todo }: IForm) => {
    console.log(todo);
    setValue('todo', '');
  };
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
    </div>
  );
};

export default ToDoList;
