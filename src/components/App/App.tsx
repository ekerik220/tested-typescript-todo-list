import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import TodoAdder from "../TodoAdder/TodoAdder";

function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <PageLayout>
        <Container justify="center">
          <TodoAdder />
        </Container>
      </PageLayout>
    </React.Fragment>
  );
}

export default App;

interface ContainerProps {
  width?: string;
  justify?: string;
}

const GlobalStyle = createGlobalStyle`
  body {
    background: #2C3E50;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #4CA1AF, #2C3E50);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #4CA1AF, #2C3E50); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  }
`;

const PageLayout = styled.div`
  display: grid;
`;

const Container = styled.div<ContainerProps>`
  display: flex;
  justify-content: ${(props) => props.justify || "flex-start"};
  width: ${(props) => props.width || "100%"};
`;
