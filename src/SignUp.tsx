import { useForm } from 'react-hook-form';

interface IForm {
  email: string;
  username: string;
  password: string;
  passwordCheck: string;
  extraError?: string;
}

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<IForm>();

  const onValid = (data: IForm) => {
    console.log(data);
  };
  console.log(errors);

  return (
    <div>
      <form style={{ display: 'flex', flexDirection: 'column' }} onSubmit={handleSubmit(onValid)}>
        <input
          type="text"
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^[A-Za-z0-9._%+-]+@\w+\.\w+$/,
              message: 'Your email format is invalid',
            },
          })}
          placeholder="Email"
        />
        <span>{errors?.email?.message}</span>
        <input
          type="text"
          {...register('username', {
            required: 'Username is required',
            maxLength: { value: 15, message: 'Maximum length of username is 15.' },
          })}
          placeholder="Username"
        />
        <span>{errors?.username?.message}</span>
        <input
          type="password"
          {...register('password', {
            required: 'Password is required',
            minLength: {
              value: 4,
              message: 'Your password is too short. Minimum lenght of password is 4.',
            },
          })}
          placeholder="Password"
        />
        <span>{errors?.password?.message}</span>
        <input
          type="password"
          {...register('passwordCheck', {
            required: 'Password check is required',
            validate: (passWordCheck) => passWordCheck === getValues('password') || 'Passwords are not the same',
          })}
          placeholder="Password check"
        />
        <span>{errors?.passwordCheck?.message}</span>
        <button>Sign up</button>
        <span>{errors?.extraError?.message}</span>
      </form>
    </div>
  );
};

export default SignUp;
