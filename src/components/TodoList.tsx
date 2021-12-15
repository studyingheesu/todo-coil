import { useRecoilState, useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { categoriesState, FILTER, filteredTodoState, todoFilterState, ITodo, FILTER_ALL, CATEGORY } from '../atoms';
import CreateTodo from './CreateTodo';
import Todo from './Todo';

const Container = styled.div`
  margin: 10px auto;
  max-width: 200px;
  flex-flow: column;
  align-items: center;
`;
const List = styled.ul`
  width: 100%;
`;
const FilterContainer = styled.div`
  margin: 10px 0;
`;
const Filter = styled.select`
  display: block;
  margin: 0 auto;
`;
const EmptyPage = styled.div`
  display: flex;
  justify-content: center;
`;

const TodoList = () => {
  const todos = useRecoilValue<ITodo[]>(filteredTodoState);
  const [categories, setCategories] = useRecoilState<CATEGORY[]>(categoriesState);
  const [filter, setFilter] = useRecoilState<FILTER>(todoFilterState);
  const handleChange = ({ target: { value } }: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter(value as FILTER);
  };
  const handleDeleteCategory = () => {
    const categoryIndex = categories.indexOf(filter);
    if (categoryIndex !== -1) {
      setFilter(FILTER_ALL);
      setCategories([...categories.slice(0, categoryIndex), ...categories.slice(categoryIndex + 1)]);
    }
  };

  return (
    <Container>
      <CreateTodo />
      <FilterContainer>
        <Filter value={filter} onChange={handleChange}>
          <option value={FILTER_ALL} key={FILTER_ALL}>
            All
          </option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </Filter>
      </FilterContainer>
      <List>
        {todos.length ? (
          todos.map((todo) => <Todo key={todo.id} {...todo} />)
        ) : filter === FILTER_ALL ? (
          <EmptyPage>
            <p>Create a new todo!</p>
          </EmptyPage>
        ) : (
          <EmptyPage>
            <button onClick={handleDeleteCategory}>Delete this category</button>
          </EmptyPage>
        )}
      </List>
    </Container>
  );
};

export default TodoList;
