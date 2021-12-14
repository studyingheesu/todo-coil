import styled from 'styled-components';

import { ITodo } from '../atoms';

const Item = styled.li``;

const Todo = ({ category, text }: ITodo) => {
  return <Item className={`${category}`}>{text}</Item>;
};

export default Todo;
