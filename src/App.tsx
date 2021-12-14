import { createGlobalStyle } from 'styled-components';

import './index.css';
import TodoList from './components/TodoList';

const GlobalStyle = createGlobalStyle`

body {
  background-color: ${(props) => props.theme.bgColor};
  color:${(props) => props.theme.darkTextColor}
}
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <TodoList />
    </>
  );
}

export default App;
