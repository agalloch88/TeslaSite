import React from "react";
import styled from "styled-components";
import Section from "./Section";

function Home() {
  return (
    <Container>
      <Section backgroundImage="model-3.jpg" title="Model 3" />
    </Container>
  );
}

export default Home;

const Container = styled.div`
  height: 100vh;
`;
