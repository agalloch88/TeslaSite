import React from "react";
// import { Link } from "react-router-dom";
import styled from "styled-components";

function HeaderSC() {
  return (
    <Container>
      <a href="/">
        <img src="/images/Tesla-Logo.svg" alt="Tesla styled logo" />
      </a>
      <Menu>
        <p>
          <a href="#model-s">Model S</a>
        </p>
        <p>
          <a href="#model-3">Model 3</a>
        </p>
        <p>
          <a href="#model-x">Model X</a>
        </p>
        <p>
          <a href="#model-y">Model Y</a>
        </p>
        <p>
          <a href="#solar-roof">Solar Roof</a>
        </p>
        <p>
          <a href="#solar-panel">Solar Panels</a>
        </p>
      </Menu>
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

  img {
      margin-right: 100px;
  }
`;

const Menu = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  gap: 15px;

  p {
    align-items: center;
    border-radius: 50px;
    color: #171a20;
    display: flex;
    font-size: 15px;
    font-weight: 500;
    justify-content: center;
    padding: 5px 10px;
    text-align: center;
    text-decoration: none;
    transition: all 0.2s;
    white-space: nowrap;
    width: 100px;
  }

  p:hover {
    backdrop-filter: blur(16px);
    background-color: hsla(0, 0%, 0%, 0.05);
  }

  a {
      width: 100px;
  }
`;
