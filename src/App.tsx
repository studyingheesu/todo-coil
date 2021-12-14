import { createGlobalStyle } from 'styled-components';

import './index.css';
import SignUp from './SignUp';

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
      <SignUp />
    </>
  );
}

export default App;
