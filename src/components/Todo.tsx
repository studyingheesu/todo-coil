import React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';

import { categoriesState, ITodo, todosState } from '../atoms';

const Item = styled.li`
  background-color: ${(prop) => prop.theme.secondBgColor};
  margin: 10px 0;
  display: flex;
`;
const Text = styled.span`
  flex-grow: 1;
  margin-left: 6px;
`;

const ButtonContainer = styled.div``;
const Button = styled.button`
  border: 0;
  border-radius: 5px;
  background-color: transparent;
  padding: 2px 3px;

  &:hover {
    background-color: rgba(0, 255, 0, 0.5);
  }
`;
const Category = styled.span``;

const Todo = (todo: ITodo) => {
  const [todos, setTodos] = useRecoilState(todosState);
  const [categories, setCategories] = useRecoilState(categoriesState);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  const [isCreatingCategory, setIsCreatingCategory] = useState(false);

  const { category, text, id } = todo;
  const index = todos.findIndex((todo) => todo.id === id);

  const NEW_CATEGORY_KEY = '_new';

  const handleChange = ({ target: { value } }: React.ChangeEvent<HTMLSelectElement>) => {
    if (value === NEW_CATEGORY_KEY) {
      setIsCreatingCategory(true);
    } else {
      const newTodo: ITodo = {
        ...todo,
        category: value as ITodo['category'],
      };

      setTodos([...todos.slice(0, index), newTodo, ...todos.slice(index + 1)]);
    }
  };

  const handleClickDelete = () => {
    setTodos([...todos.slice(0, index), ...todos.slice(index + 1)]);
  };

  const onValid = () => {
    console.log('HI');
  };

  return (
    <Item className={`${category}`}>
      <Text>{text}</Text>
      <ButtonContainer>
        {isCreatingCategory ? (
          <form onSubmit={handleSubmit(onValid)}>
            <input
              {...register('new', {
                required: true,
              })}
            />
          </form>
        ) : (
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
        )}
        <Button onClick={handleClickDelete}>&#128465;</Button>
      </ButtonContainer>
    </Item>
  );
};

export default Todo;
