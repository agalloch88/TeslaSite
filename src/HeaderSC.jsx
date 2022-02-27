import React from "react";
import { Link } from "react-router-dom";
import CloseIcon from "@material-ui/icons/Close";
import styled from "styled-components";

function HeaderSC({ isMenuOpen, setIsMenuOpen }) {
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
      <RightMenu>
        <Link to="/" className={isMenuOpen && "header__link--hidden"}>
          Shop
        </Link>
        <Link to="/login" className={isMenuOpen && "header__link--hidden"}>
          Account
        </Link>
        <ExpandingMenu onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <CloseIcon /> : "Menu"}
        </ExpandingMenu>
      </RightMenu>
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

const RightMenu = styled.div`
  align-items: center;
  display: flex;
  gap: 15px;

  a {
    border-radius: 50px;
    color: #171a20;
    font-size: 15px;
    font-weight: 500;
    padding: 5px 10px;
    position: relative;
    text-decoration: none;
    /* transition: all 0.2s; */
    z-index: 0;
  }

  a:hover {
    backdrop-filter: blur(16px);
    background-color: hsla(0, 0%, 0%, 0.05);
  }

  
`;

const ExpandingMenu = styled.div`
    color: #171a20;
    font-size: 15px;
    font-weight: 500;
    cursor: pointer;
    position: relative;
    text-decoration: none;
    z-index: 2;

    .MuiSvgIcon-root {
    cursor: pointer;
    margin: 0;
    padding: 0;
    position: relative;
    z-index: 2;
  }
`;
