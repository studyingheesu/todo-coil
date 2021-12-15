import { SubmitHandler, useForm } from 'react-hook-form';
import styled from 'styled-components';
import { CATEGORY } from '../atoms';

const NewCategoryForm = styled.form`
  input {
    width: 100%;
    border: 0;
  }
`;

interface IForm {
  newCategoryName: CATEGORY;
}

interface CreateCategoryProps {
  onSubmit: (newCategoryName: CATEGORY) => Promise<void>;
}

const CreateCategory = ({ onSubmit }: CreateCategoryProps) => {
  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors },
  } = useForm<IForm>({
    mode: 'onChange',
  });

  const onValid: SubmitHandler<IForm> = async ({ newCategoryName }) => {
    try {
      await onSubmit(newCategoryName);
      reset();
    } catch (error: any) {
      setError('newCategoryName', {
        message: error.message,
      });
    }
  };

  return (
    <>
      <NewCategoryForm onSubmit={handleSubmit(onValid)}>
        <input
          {...register('newCategoryName', {
            required: 'The field is empty',
            pattern: {
              value: /[^_].*/,
              message: "Category name can't be started with _",
            },
          })}
        />
      </NewCategoryForm>
      {errors?.newCategoryName?.message && <span>{errors.newCategoryName.message}</span>}
    </>
  );
};

export default CreateCategory;
