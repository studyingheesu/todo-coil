import React from 'react';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';

import { categoriesState, CATEGORY, ITodo, todosState } from '../atoms';

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
const Category = styled.div`
  width: 80px;
  & > * {
    width: 100%;
    border: 0;
  }
`;
const NewCategoryForm = styled.form`
  input {
    width: 100%;
    border: 0;
  }
`;

interface IForm {
  newCategoryName: string;
}

const Todo = (todo: ITodo) => {
  const [todos, setTodos] = useRecoilState(todosState);
  const [categories, setCategories] = useRecoilState(categoriesState);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IForm>({
    mode: 'onChange',
  });
  const [isCreatingCategory, setIsCreatingCategory] = useState(false);

  const { category, text, id } = todo;
  const index = todos.findIndex((todo) => todo.id === id);

  const NEW_CATEGORY_KEY = '_new';

  const changeCategory = (category: CATEGORY) => {
    const changedTodo: ITodo = {
      ...todo,
      category: category,
    };

    setTodos([...todos.slice(0, index), changedTodo, ...todos.slice(index + 1)]);
  };

  const handleChange = ({ target: { value } }: React.ChangeEvent<HTMLSelectElement>) => {
    if (value === NEW_CATEGORY_KEY) {
      setIsCreatingCategory(true);
    } else {
      changeCategory(value as CATEGORY);
    }
  };

  const handleClickDelete = () => {
    setTodos([...todos.slice(0, index), ...todos.slice(index + 1)]);
  };

  const onValid: SubmitHandler<IForm> = ({ newCategoryName }) => {
    changeCategory(newCategoryName);
    setCategories((categories) => [...categories, newCategoryName]);

    setIsCreatingCategory(false);
    reset();
  };

  return (
    <Item className={`${category}`}>
      <Text>{text}</Text>
      {isCreatingCategory ? (
        <Category>
          <NewCategoryForm onSubmit={handleSubmit(onValid)}>
            <input
              {...register('newCategoryName', {
                required: 'The field is empty',
                pattern: {
                  value: /[^_].*/,
                  message: "Category name can't be started with _",
                },
                validate: (value) => {
                  if (categories.includes(value)) {
                    return 'Category already exists';
                  } else {
                    return true;
                  }
                },
              })}
            />
          </NewCategoryForm>
          {errors?.newCategoryName?.message && <span>{errors.newCategoryName.message}</span>}
        </Category>
      ) : (
        <Category>
          <select name="category" onChange={handleChange} defaultValue={todo.category}>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
            <option key={NEW_CATEGORY_KEY} value={NEW_CATEGORY_KEY}>
              Create a new category...
            </option>
          </select>
        </Category>
      )}
      <Button onClick={handleClickDelete}>&#128465;</Button>
    </Item>
  );
};

export default Todo;
