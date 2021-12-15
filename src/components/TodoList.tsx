import { useRecoilState, useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { categoriesState, FILTER, filteredTodoState, todoFilterState } from '../atoms';
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

const TodoList = () => {
  const todos = useRecoilValue(filteredTodoState);
  const categories = useRecoilValue(categoriesState);
  const [filter, setFilter] = useRecoilState(todoFilterState);
  const handleChange = ({ target: { value } }: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter(value as FILTER);
  };

  return (
    <Container>
      <CreateTodo />
      <FilterContainer>
        <Filter value={filter} onChange={handleChange}>
          <option value="ALL" key="ALL">
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
        {todos.map((todo) => (
          <Todo key={todo.id} {...todo} />
        ))}
      </List>
    </Container>
  );
};

export default TodoList;
