import React from "react";
import { createGlobalStyle } from "styled-components";

function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <div></div>
    </React.Fragment>
  );
}

export default App;

const GlobalStyle = createGlobalStyle`
  body {
    background: #2C3E50;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #4CA1AF, #2C3E50);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #4CA1AF, #2C3E50); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  }
`;
