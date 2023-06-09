import React from "react";
import { NavBar } from "./Nav/Navbar";
import styled from "styled-components";
import { News } from "./NewsList/News";

const Container = styled.div`
  width: 80%;
  height: 100vh;
  margin: 0 auto;
`;

function App() {
  return (
    <>
      <Container>
        <NavBar></NavBar>
        <News></News>
      </Container>
    </>
  );
}

export default App;
