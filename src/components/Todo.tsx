import React from 'react';
import { useState } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import styled from 'styled-components';

import { categoriesState, CATEGORY, ITodo, todoFilterState, todosState } from '../atoms';
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
  const setFilter = useSetRecoilState(todoFilterState);

  const [isCreatingCategory, setIsCreatingCategory] = useState(false);

  const { category, text, id } = todo;
  const index = todos.findIndex((todo) => todo.id === id);

  const NEW_CATEGORY_KEY = '_new';

  const _changeCategory = (category: CATEGORY) => {
    const changedTodo: ITodo = {
      ...todo,
      category: category,
    };

    setTodos([...todos.slice(0, index), changedTodo, ...todos.slice(index + 1)]);
  };

  const handleChangeCategory = ({ target: { value } }: React.ChangeEvent<HTMLSelectElement>) => {
    if (value === NEW_CATEGORY_KEY) {
      setIsCreatingCategory(true);
    } else {
      _changeCategory(value as CATEGORY);
    }
  };

  const handleClickDelete = async () => {
    setTodos([...todos.slice(0, index), ...todos.slice(index + 1)]);
  };

  const handleCreateCategory = async (newCategoryName: CATEGORY) => {
    if (categories.includes(newCategoryName)) {
      throw new Error('Category already exists');
    } else {
      _changeCategory(newCategoryName);
      setCategories((categories) => [...categories, newCategoryName]);
      setFilter(newCategoryName);
      setIsCreatingCategory(false);
    }
  };

  return (
    <Item className={`${category}`}>
      <Text>{text}</Text>
      {isCreatingCategory ? (
        <Category>
          <CreateCategory onSubmit={handleCreateCategory} />
        </Category>
      ) : (
        <Category>
          <select name="category" onChange={handleChangeCategory} defaultValue={todo.category}>
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
