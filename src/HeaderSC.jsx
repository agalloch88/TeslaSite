import React from "react";
import styled from "styled-components";

function HeaderSC() {
  return (
    <Container>
        <a href="/">
          <img
            src="/images/Tesla-Logo.svg"
            alt="Tesla styled logo"
          />
        </a>
      <Menu></Menu>
    </Container>
  );
}

export default HeaderSC;

const Container = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  left: 0;
  min-height: 60px;
  object-fit: contain;
  padding: 0 20px;
  position: fixed;
  right: 0;
  top: 0;
  width: 90px;
  z-index: 1;
`;



const Menu = styled.div``;
