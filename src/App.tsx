import { createGlobalStyle } from 'styled-components';

import './index.css';
import ToDoList from './ToDoList';

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
      <ToDoList />
    </>
  );
}

export default App;
