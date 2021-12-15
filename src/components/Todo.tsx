import React from 'react';
import { useState } from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';

import { categoriesState, CATEGORY, ITodo, todosState } from '../atoms';
import CreateCategory from './CreateCategory';

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

const Todo = (todo: ITodo) => {
  const [todos, setTodos] = useRecoilState(todosState);
  const [categories, setCategories] = useRecoilState(categoriesState);

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

  const handleClickDelete = async () => {
    setTodos([...todos.slice(0, index), ...todos.slice(index + 1)]);
  };

  const onCreateCategory = async (newCategoryName: CATEGORY) => {
    if (categories.includes(newCategoryName)) {
      throw new Error('Category already exists');
    } else {
      changeCategory(newCategoryName);
      setCategories((categories) => [...categories, newCategoryName]);
      setIsCreatingCategory(false);
    }
  };

  return (
    <Item className={`${category}`}>
      <Text>{text}</Text>
      {isCreatingCategory ? (
        <Category>
          <CreateCategory onSubmit={onCreateCategory} />
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
